const projects = [
  {
    num: '01 — Mobile App',
    title: 'Aaxiomcrest Smart School',
    desc: 'A mobile platform delivering digital services through a user-friendly interface. Integrates scalable backend services and cloud infrastructure for real-time interactions and reliable data management with push notifications.',
    stack: ['React Native', 'Node.js', 'Express.js', 'Python', 'Django', 'AWS', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.stellarappmobile',
    linkLabel: 'View on Play Store',
  },
  {
    num: '02 — Web App',
    title: 'Calm and Connect',
    desc: 'A responsive web platform focused on user engagement and community interaction. Provides a structured environment for accessing services and support through an intuitive interface backed by cloud infrastructure.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Python', 'Django', 'AWS'],
    link: 'https://www.calmandconnect.co.uk/',
    linkLabel: 'Visit Website',
  },
  {
    num: '03 — Web + Mobile',
    title: 'Sosin IAS',
    desc: 'An education-focused platform for competitive exam preparation. Delivers study materials, course content, and learning resources with seamless delivery and scalable backend for large user volumes.',
    stack: ['React.js', 'React Native', 'Node.js', 'Django', 'AWS', 'Firebase'],
    link: 'https://www.sosinias.com/',
    linkLabel: 'Visit Website',
  },
  {
    num: '04 — Web Platform',
    title: 'Materra',
    desc: 'A modern web platform delivering scalable and responsive digital services. Features an interactive UI backed by robust backend services with secure API integrations and efficient data handling.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Python', 'Django', 'AWS'],
    link: 'https://www.materra.tech/',
    linkLabel: 'Visit Website',
  },
  {
    num: '05 — Multi-Platform',
    title: 'Find My Coach',
    desc: 'A platform connecting learners with professional trainers. Enables trainer search, session scheduling, and resource access with secure payment services and real-time notifications across mobile and web.',
    stack: ['React Native', 'React.js', 'Node.js', 'Django', 'AWS', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.inwizards.findcoach',
    linkLabel: 'View on Play Store',
  },
]

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="surface">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-num">{p.num}</div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-stack">
              {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
            </div>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
              {p.linkLabel} <Arrow />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
