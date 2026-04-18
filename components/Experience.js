const points = [
  'Developed and maintained web and cross-platform mobile applications for Android, iOS, and web using React.js, React Native, Next.js, and Node.js.',
  'Designed and implemented scalable frontend architectures and responsive user interfaces to improve application performance and UX.',
  'Built and integrated RESTful APIs using Node.js enabling seamless communication between frontend and backend systems.',
  'Managed databases including MongoDB, PostgreSQL, and MySQL ensuring efficient data storage, retrieval, and optimization.',
  'Deployed and managed applications using AWS and Firebase services ensuring scalability and reliability.',
  'Used Git-based version control systems (GitHub, GitLab, Bitbucket) for collaborative development and code management.',
  'Continuously researched and integrated modern frameworks, libraries, and NPM packages to enhance features and performance.',
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>
      <div className="exp-block">
        <div className="exp-meta">
          <div className="exp-period">01 / 2024 — Present</div>
          <div className="exp-company">Aaronsoftware</div>
        </div>
        <div>
          <div className="exp-role">Software Developer</div>
          <ul className="exp-points">
            {points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
