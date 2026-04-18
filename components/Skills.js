const skills = [
  { icon: '⚡', cat: 'Languages',     name: 'Programming',      tags: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'Dart'] },
  { icon: '🖥',  cat: 'Frontend',     name: 'Web Technologies', tags: ['React.js', 'Next.js', 'Redux', 'Responsive Design'] },
  { icon: '📱', cat: 'Mobile',        name: 'Cross-Platform',   tags: ['React Native', 'Android', 'iOS'] },
  { icon: '⚙️', cat: 'Backend',       name: 'Server & APIs',    tags: ['Node.js', 'Express.js', 'Django', 'REST APIs'] },
  { icon: '🗄',  cat: 'Databases',    name: 'Data Storage',     tags: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { icon: '☁️', cat: 'Cloud & Tools', name: 'Deployment',       tags: ['AWS', 'Firebase', 'GitHub', 'GitLab', 'Git'] },
]

export default function Skills() {
  return (
    <section id="skills" className="surface">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Technical Stack</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-cat">{s.cat}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-tags">
              {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
