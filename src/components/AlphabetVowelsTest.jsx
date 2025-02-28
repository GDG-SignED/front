import './css/BasicWordTest.css'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Webcam from "react-webcam";
import { Hands } from '@mediapipe/hands';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

function AlphabetVowelsTest() {
  // Refs & States
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const handsRef = useRef(null);
  const [capturedData, setCapturedData] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [result, setResult] = useState(null);
  // const [problemWord] = useState("APPLE");          // 문제 데이터 넣기
  const [webcamActive, setWebcamActive] = useState(false);

  // 실시간 상태 추적용 Ref
  const isCapturingRef = useRef(isCapturing);
  const capturedDataRef = useRef([]);
  const isSendingRef = useRef(false);

  const [wordList] = useState(['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ', 'ㅐ', 'ㅒ', 'ㅔ', 'ㅖ', 'ㅢ', 'ㅚ', 'ㅟ',
            'ㄸ', 'ㅃ', 'ㅆ', 'ㅉ', 'ㅘ', 'ㅙ', 'ㅞ', 'ㅝ']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // MediaPipe 초기화 (웹캠 활성화 시 재설정)
  useEffect(() => {
    const initializeMediaPipe = async () => {
      if (webcamActive && !handsRef.current) {
        handsRef.current = new Hands({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        });
        
        handsRef.current.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });
        
        handsRef.current.onResults(onResults);
        console.log('MediaPipe Hands 초기화 완료');
      }
    };
    initializeMediaPipe();
  }, [webcamActive]);

  // 상태 동기화
  useEffect(() => {
    isCapturingRef.current = isCapturing;
  }, [isCapturing]);

  // 핵심: 랜드마크 처리 콜백
  const onResults = useCallback((results) => {
    const canvasCtx = canvasRef.current?.getContext('2d');
    const video = webcamRef.current?.video;
    
    if (!canvasCtx || !video) return;

    // 캔버스 리셋 및 웹캠 프레임 렌더링
    canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    canvasCtx.drawImage(video, 0, 0, canvasRef.current.width, canvasRef.current.height);

    // 캡처 활성화 상태 및 손 감지 확인
    if (isCapturingRef.current && results.multiHandLandmarks) {
      let frameData = [];
      
      // 데이터 형식 통일 (126개 값)
      if (results.multiHandLandmarks.length === 1) {
        const landmarks = results.multiHandLandmarks[0];
        frameData = landmarks.flatMap(p => [p.x, p.y, p.z]);
        frameData = [...frameData, ...new Array(63).fill(0)]; // 2차원 배열로 패딩
      } else {
        frameData = results.multiHandLandmarks
          .slice(0,2)
          .flatMap(landmarks => landmarks.flatMap(p => [p.x, p.y, p.z]));
      }

      // 프레임 데이터 누적
      if (capturedDataRef.current.length < 30) {
        capturedDataRef.current = [...capturedDataRef.current, frameData];
        setCapturedData(prev => [...prev, frameData]);
      }
    }

    // 랜드마크 시각화
    if (results.multiHandLandmarks) {
      results.multiHandLandmarks.forEach(landmarks => {
        drawConnectors(canvasCtx, landmarks, Hands.HAND_CONNECTIONS, 
          { color: '#00FF00', lineWidth: 2 });
        drawLandmarks(canvasCtx, landmarks, 
          { color: '#FF0000', lineWidth: 1 });
      });
    }
  }, []);

  // 카운트다운 & 캡처 트리거
  useEffect(() => {
    let timer;
    if (!isCapturing && countdown < 5 && countdown > 0) {
      timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
    } else if (countdown === 0 && !isCapturing) {
      setIsCapturing(true);
    }
    return () => clearTimeout(timer);
  }, [countdown, isCapturing]);

  // 프레임 캡처 루프
  useEffect(() => {
    let interval;
    if (isCapturing && handsRef.current) {
      interval = setInterval(() => {
        if (capturedDataRef.current.length >= 30) {
          clearInterval(interval);
          return;
        }
        if (webcamRef.current?.video?.readyState === 4) {
          handsRef.current.send({ image: webcamRef.current.video });
        }
      }, 100); // 100ms 간격으로 프레임 캡처
    }
    return () => clearInterval(interval);
  }, [isCapturing]);

  // 데이터 전송 조건 확인
  useEffect(() => {
    if (capturedData.length >= 30 && isCapturing && !isSendingRef.current) {
      setIsCapturing(false);
      isSendingRef.current = true;
      sendData();
    }
  }, [capturedData, isCapturing]);

  // 데이터 전송 함수
  const sendData = async () => {
    try {
      const payload = {
        keypoints: capturedDataRef.current.slice(0, 30)
      };

      const response = await fetch('http://localhost:5051/predict', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const resultJson = await response.json();
      setResult(resultJson.prediction);
      
    } catch (error) {
      console.error('전송 실패:', error);
    } finally {
      setWebcamActive(false);
      isSendingRef.current = false;
      setCapturedData([]);
      capturedDataRef.current = [];
    }
  };

  return (
    <div>
      <h2>현재 문제: {wordList[currentWordIndex]}</h2>
      {!isCapturing && capturedData.length === 0 && countdown === 5 && (
        <button className='test-start-btn' onClick={() => {setCountdown(4); setWebcamActive(true); }}>
          테스트 시작
        </button>
      )}
      
      {countdown > 0 && !isCapturing && countdown !== 5 && (
        <div>준비 시간: {countdown}초 남음</div>
      )}

      {webcamActive && (
        <div style={{ position: "relative", width: 1280, height: 720 }}>
          <Webcam
            ref={webcamRef}
            audio={false}
            videoConstraints={{ width: 1280, height: 720 }}
            onUserMedia={() => console.log('웹캠 활성화')}
          />
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      )}
      
      {result && <h2>결과: {result}</h2>}
    </div>
  );
}

export default AlphabetVowelsTest;