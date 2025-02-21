import "./TeamSection.css";
import Lee from '../../assets/images/MemberImg_Lee.png'
import Hwang from '../../assets/images/MemberImg_Hwang.png'
import Sol from '../../assets/images/MemberImg_Sol.png'
import Cho from '../../assets/images/MemberImg_Choi.png'
import Mok from '../../assets/images/MemberImg_Mok.png'
import Hyun from '../../assets/images/MemberImg_Hyun.png'
import Kim from '../../assets/images/MemberImg_Kim.png'

const teamMembers = [
  { name: "이수연", role: "팀장&AI", avatar: Lee },
  { name: "황지원", role: "FE", avatar: Hwang },
  { name: "이솔", role: "PM", avatar: Sol },
  { name: "조예인", role: "AI", avatar: Cho },
  { name: "목경서", role: "AI", avatar: Mok },
  { name: "현정빈", role: "BE", avatar: Hyun },
  { name: "김아진", role: "BE", avatar: Kim },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>팀원 소개</h2>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.avatar} alt={member.name} />
            <p className="name">{member.name}</p>
            <p className="role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
