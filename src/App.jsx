import './App.css'

const baseUrl = import.meta.env.BASE_URL

const skillGroups = [
  {
    title: 'Programming & Tech',
    items: ['Python', 'Java', 'Data Science', 'Machine Learning', 'HTML', 'CSS'],
  },
  {
    title: 'UI/UX & Design',
    items: ['Figma', 'Canva', 'High-Fidelity Prototyping', 'User Flow', 'Visual Hierarchy'],
  },
  {
    title: 'Media & Editing',
    items: ['Adobe Premiere Pro', 'CapCut', 'Photography'],
  },
  {
    title: 'Soft Skills',
    items: ['Leadership', 'Teamwork', 'Event Planning', 'Problem Solving', 'Communication'],
  },
]

const highlights = [
  {
    label: 'Career focus',
    value: 'UI/UX + Machine Learning',
    description: 'Designing intuitive digital experiences and building data-driven solutions.',
  },
  {
    label: 'Academic background',
    value: 'Informatics Engineering',
    description: 'Bachelor’s degree from UIN Syarif Hidayatullah Jakarta, Class of 2025.',
  },
  {
    label: 'Strengths',
    value: 'Problem solving',
    description: 'Strong communication, event leadership, and cross-functional collaboration.',
  },
]

const projects = [
  {
    title: 'Car Price Prediction Model',
    type: 'Machine Learning',
    description:
      'Developed a Python-based machine learning model to predict vehicle prices using comprehensive datasets and core algorithm fundamentals.',
    outcome: 'Improved data processing and pattern-recognition skills without relying heavily on external libraries.',
  },
  {
    title: 'Application UI/UX Prototype',
    type: 'Design & Prototyping',
    description:
      'Designed high-fidelity interfaces and prototypes that prioritize intuitive navigation, seamless transitions, and clear visual hierarchy.',
    outcome: 'Built using Figma and Canva to communicate strong user-centered design thinking.',
  },
]

const experience = [
  {
    role: 'Head of Documentation',
    organization: 'Ikatan Pelajar Muhammadiyah (IPM)',
    period: '2024 – 2025',
    description:
      'Led the documentation team in designing visual concepts and managing multimedia assets for organizational publications and social media.',
  },
  {
    role: 'Head of PDD (Publication, Decoration, Documentation)',
    organization: 'Taruna Melati',
    period: '2023',
    description:
      'Directed the design strategy and social media content, improving event awareness and coordinating visual storytelling across divisions.',
  },
  {
    role: 'Member of PDD',
    organization: 'Limau Cup',
    period: '2023',
    description:
      'Designed promotional banners and murals while executing photo and video documentation from pre-event to post-event wrap-up.',
  },
  {
    role: 'Human Resources – Recruitment Team',
    organization: 'Ikatan Pelajar Muhammadiyah (IPM)',
    period: '2023',
    description:
      'Conducted interviews and evaluated candidates to recruit and onboard new members effectively.',
  },
]

const contactLinks = [
  { label: 'Email', value: 'fadlideplu154@gmail.com', href: 'mailto:fadlideplu154@gmail.com' },
  { label: 'Phone', value: '+62 813-8758-8070', href: 'tel:+6281387588070' },
  { label: 'GitHub', value: 'WildGhost141', href: 'https://github.com/WildGhost141' },
  { label: 'LinkedIn', value: 'Fadli Ahmad Akbar', href: 'https://www.linkedin.com/in/fadli-ahmad-akbar' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">FA</span>
          <span className="brand-text">Fadli Ahmad Akbar</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Informatics Engineering Student</p>
            <h1>Design-minded developer ready to build impactful digital experiences.</h1>
            <p className="lede">
              I’m Fadli Ahmad Akbar, a motivated student with a strong passion for UI/UX design and machine learning.
              I enjoy turning complex systems into intuitive, user-centered experiences and bringing ideas to life with
              data-driven thinking.
            </p>
            <div className="cta-row">
              <a className="button primary" href={`${baseUrl}Fadli_Ahmad_Akbar_CV.pdf`} target="_blank" rel="noreferrer">
                Download CV
              </a>
              <a className="button secondary" href="#projects">
                View Projects
              </a>
            </div>
            <ul className="meta-list" aria-label="Summary details">
              <li>Jakarta, Indonesia</li>
              <li>English: Intermediate to Professional Working Proficiency</li>
              <li>Class of 2025</li>
            </ul>
          </div>

          <div className="hero-panel" aria-label="Profile overview">
            <div className="panel-badge">Open to internships</div>
            <div className="profile-block">
              <div className="avatar">FA</div>
              <div>
                <strong>Fadli Ahmad Akbar</strong>
                <span>UI/UX • ML • Product-minded</span>
              </div>
            </div>
            <div className="mini-stats">
              {highlights.map((item) => (
                <div key={item.label} className="mini-stat">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.description}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Professional profile</h2>
          </div>
          <div className="about-grid">
            <p>
              Motivated Informatics Engineering student with a strong passion for UI/UX design and machine learning. I am
              adept at translating complex system logic into intuitive, user-centric interfaces and developing data-driven
              models using Python. My background combines technical capability with leadership, problem-solving, and
              communication skills developed through event management and organizational work.
            </p>
            <div className="value-points">
              <span>Leadership</span>
              <span>Design thinking</span>
              <span>Data-driven solutions</span>
              <span>Team collaboration</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Technical and personal strengths</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card card" key={project.title}>
                <div className="project-tag">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>Key takeaway</strong>
                <p>{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Leadership and organizational experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.organization}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-head">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="organization">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s connect</h2>
          </div>
          <div className="contact-grid">
            {contactLinks.map((item) => (
              <a key={item.label} className="contact-card" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
