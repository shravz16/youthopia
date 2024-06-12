import React, { useState } from 'react';
import './Skills.css';

const SkillsPage: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<{
    title: string;
    description: string;
    iconUrl: string;
    topics: string[];
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([
    {
      title: 'Web Development',
      description: 'Build dynamic and responsive websites using HTML, CSS, and JavaScript frameworks like React and Angular.',
      iconUrl: 'https://example.com/web-development.png',
      topics: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular'],
    },
    {
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile applications for iOS and Android using technologies like React Native and Flutter.',
      iconUrl: 'https://example.com/mobile-app.png',
      topics: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    }]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSkillClick = (title: string, description: string, iconUrl: string, topics: string[]) => {
    setExpandedSkill({ title, description, iconUrl, topics });
  };

  const handleCloseClick = () => {
    setExpandedSkill(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = filteredSkills.filter((skill) => skill.title.toLowerCase().includes(query));
    setFilteredSkills(filtered);
  };

  const handleSortClick = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="SkillsPage">
      <header className="SkillsHeader">
        <div className="HeaderContainer">
          <h1>Skills and Expertise</h1>
          <input type="text" placeholder="Search skills..." value={searchQuery} onChange={handleSearchChange} />
          <button className="SortButton" onClick={handleSortClick}>
            Sort by Title ({sortOrder === 'asc' ? '▲' : '▼'})
          </button>
        </div>
      </header>
      <div className="SkillsContent">
        {sortedSkills.map((skill, index) => (
          <div
            key={index}
            className="SkillCard"
            onClick={() => handleSkillClick(skill.title, skill.description, skill.iconUrl, skill.topics)}
          >
            <img src={skill.iconUrl} alt={skill.title} />
            <h2>{skill.title}</h2>
            <p>{skill.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
      {expandedSkill && (
        <div className="ExpandedView">
          <div className="ExpandedContent">
            <button className="CloseButton" onClick={handleCloseClick}>
              &times;
            </button>
            <img src={expandedSkill.iconUrl} alt={expandedSkill.title} />
            <h3>{expandedSkill.title}</h3>
            <p>{expandedSkill.description}</p>
            <div className="TopicsList">
              <h4>Topics Covered:</h4>
              <ul>
                {expandedSkill.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
            <button className="EnrollButton">Enroll Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;