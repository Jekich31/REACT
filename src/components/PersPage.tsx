
import type { Person } from '../types'

interface ProfileHeaderProps {
  fullName: string;
  role: string;
  city: string;
  photo: string;
}

function ProfileHeader({ fullName, role, city, photo }: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <img src={photo} alt={fullName} className="avatar" />
      <div>
        <h2>{fullName}</h2>
        <p className="role">{role}</p>
        <p><strong>Місто:</strong> {city}</p>
      </div>
    </div>
  );
}

interface ContactInfoProps {
  phone: string;
  email: string;
  github: string;
}

function ContactInfo({ phone, email, github }: ContactInfoProps) {
  return (
    <div className="section">
      <h3>Контакти</h3>
      <ul>
        <li><strong>Телефон:</strong> {phone}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>GitHub:</strong> <a href={github} target="_blank" rel="noreferrer">{github}</a></li>
      </ul>
    </div>
  );
}

interface SkillsListProps {
  skills: string[];
}

function SkillsList({ skills }: SkillsListProps) {
  return (
    <div className="section">
      <h3>Навички</h3>
      <div className="tags">
        {skills.map((skill, index) => (
          <span key={index} className="tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

interface PersonalPageProps {
  person: Person;
}

export function PersonalPage({ person }: PersonalPageProps) {
  return (
    <div className="card profile-card">
      <ProfileHeader
        fullName={person.fullName}
        role={person.role}
        city={person.city}
        photo={person.photo}
      />
      <ContactInfo
        phone={person.phone}
        email={person.email}
        github={person.github}
      />
      <div className="section">
        <h3>Досвід роботи та освіта</h3>
        <p>{person.experience}</p>
      </div>
      <SkillsList skills={person.skills} />
    </div>
  );
}