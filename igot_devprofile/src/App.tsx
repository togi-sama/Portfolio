import { motion, MotionConfig } from 'motion/react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { FaDatabase, FaLinkedin } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiGodotengine,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import profileImg from './assets/igot_profile.jpg'

const initParticles = async (engine: Engine) => {
  await loadSlim(engine)
}

const particleOptions: ISourceOptions = {
  background: {
    color: {
      value: 'transparent',
    },
  },
  detectRetina: true,
  fpsLimit: 60,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      grab: {
        distance: 150,
        links: {
          opacity: 0.28,
        },
      },
    },
  },
  particles: {
    color: {
      value: ['#f7f2f2', '#dc2626', '#b91c1c'],
    },
    links: {
      color: '#b91c1c',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: true,
      speed: 0.55,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        width: 950,
        height: 950,
      },
      value: 58,
    },
    opacity: {
      value: {
        min: 0.16,
        max: 0.5,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
  },
}

const projects = [
  {
    title: 'Project Manager',
    tag: 'Full-stack',
    href: 'https://github.com/togi-sama/Project-Manager',
    description:
      'A project management web app for tracking software ideas and ongoing projects, with CRUD workflows and account image persistence.',
  },
  {
    title: 'Crowdlens',
    tag: 'Full-stack',
    href: 'https://github.com/togi-sama/Crowdlens',
    description:
      'A public-space foot traffic monitoring application with a C# backend, TypeScript/CSS frontend, SQLite database, and ML-based crowd prediction.',
  },
  {
    title: 'Library Seat Availability Checker',
    tag: 'CRUD',
    description:
      'A command-line tool that simulates and tracks library seating occupancy so users can identify available seats efficiently.',
  },
  {
    title: 'Catsparov',
    tag: 'Website',
    description:
      'A single-page profile introduction website built with HTML5 and CSS, focused on clear structure and responsive layout.',
  },
]

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C', icon: SiC },
  { name: 'C++', icon: SiCplusplus },
  { name: 'C#', icon: TbBrandCSharp },
  { name: 'GDScript', icon: SiGodotengine },
  { name: 'SQL', icon: FaDatabase },
  { name: 'React Native', icon: SiReact },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
]

const stats = [
  { value: '4', label: 'Featured projects' },
  { value: '2027', label: 'Expected graduation' },
  { value: 'UP Cebu', label: 'Computer Science' },
]

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <ParticlesProvider init={initParticles}>
    <main className="relative isolate min-h-screen overflow-hidden bg-base-300 text-base-content" data-theme="igotdark">
      <Particles
        id="portfolio-particles"
        className="pointer-events-none fixed inset-0 z-0"
        options={particleOptions}
      />
      <section
        className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10"
        aria-labelledby="profile-title"
      >
        <motion.div
          className="card w-full max-w-6xl border border-primary/20 bg-base-100/90 shadow-2xl"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card-body items-center gap-10 p-6 text-center md:p-10 lg:grid lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:text-left">
            <motion.figure
              className="mx-auto aspect-square w-full max-w-96 overflow-hidden rounded-full border border-primary/20 bg-base-200"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.65 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            >
              <img
                src={profileImg}
                className="h-full w-full object-cover object-center"
                alt=""
              />
            </motion.figure>

            <motion.div
              className="flex max-w-3xl flex-col items-center lg:items-start"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.65, ease: 'easeOut' }}
            >
              <h1
                id="profile-title"
                className="text-5xl font-black leading-tight tracking-normal md:text-7xl"
              >
                Jecenel Igot
              </h1>
              <p className="mt-4 text-lg font-bold text-primary md:text-xl">
                Future Software Developer
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-base-content/70 md:text-lg">
                I&apos;m a Computer Science student at the University of the
                Philippines-Cebu who has an experience in building using full-stack tools and developing practical applications with a focus on clear
                workflows and useful software.
              </p>

              <div
                className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
                aria-label="Profile actions"
              >
                <a href="#contact-content" className="btn btn-primary">
                  Contact Me
                </a>
                <a href="#projects" className="btn btn-outline btn-primary">
                  View Work
                </a>
              </div>

              <div className="mt-8 grid w-full gap-3 sm:grid-cols-3" aria-label="Profile highlights">
                {stats.map((stat, index) => (
                  <motion.div
                    className="stat rounded-box border border-primary/20 bg-base-200 p-4"
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="stat-value text-2xl text-primary">{stat.value}</div>
                    <div className="stat-title text-xs text-base-content/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="card mt-8 w-full max-w-xl border border-primary/20 bg-base-200">
                <div className="card-body gap-5 p-5">
                  <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
                    <div className="avatar">
                      <div className="w-20 rounded-box ring-2 ring-primary ring-offset-2 ring-offset-base-200">
                        <img src={profileImg} alt="Jecenel Khen B. Igot" />
                      </div>
                    </div>
                    <div>
                      <h2 className="card-title justify-center sm:justify-start">
                        More about me
                      </h2>
                    </div>
                  </div>

                  <dl className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-box border border-base-content/10 p-3">
                      <dt className="text-xs font-bold uppercase text-base-content/50">Focus</dt>
                      <dd>Full-stack development</dd>
                    </div>
                    <div className="rounded-box border border-base-content/10 p-3">
                      <dt className="text-xs font-bold uppercase text-base-content/50">Hobbies</dt>
                      <dd>Reading, gaming, and tinkering</dd>
                    </div>
                    <div className="rounded-box border border-base-content/10 p-3">
                      <dt className="text-xs font-bold uppercase text-base-content/50">Motto</dt>
                      <dd>Experience is the best teacher.</dd>
                    </div>
                    <div className="rounded-box border border-base-content/10 p-3">
                      <dt className="text-xs font-bold uppercase text-base-content/50">Phone</dt>
                      <dd>09454355509</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center"
        id="projects"
        aria-labelledby="projects-title"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-2xl">
          <div className="badge badge-primary badge-outline">Selected Work</div>
          <h2 id="projects-title" className="mt-4 text-4xl font-black md:text-5xl">
            Projects
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => {
            const CardElement = 'href' in project ? motion.a : motion.article

            return (
            <CardElement
              className="card border border-primary/20 bg-base-100 text-left shadow-xl"
              href={'href' in project ? project.href : undefined}
              key={project.title}
              rel={'href' in project ? 'noreferrer' : undefined}
              target={'href' in project ? '_blank' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -8, borderColor: 'rgba(185, 28, 28, 0.65)' }}
            >
              <div className="card-body">
                <span className="badge badge-secondary badge-outline">{project.tag}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="text-base-content/70">{project.description}</p>
              </div>
            </CardElement>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[0.85fr_1.15fr]"
        aria-labelledby="skills-title"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card border border-primary/20 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="badge badge-primary badge-outline">Toolkit</div>
            <h2 id="skills-title" className="text-4xl font-black">
              Skills and technologies
            </h2>
            <div className="mt-3 flex flex-wrap justify-center gap-2" aria-label="Skills">
            {skills.map((skill) => {
              const SkillIcon = skill.icon

              return (
                <motion.span
                  className="badge badge-neutral h-auto gap-2 px-3 py-2"
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.82 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skills.indexOf(skill) * 0.035 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <SkillIcon className="text-base text-primary" aria-hidden="true" />
                  {skill.name}
                </motion.span>
              )
            })}
            </div>
          </div>
        </div>

        <div className="card border border-primary/20 bg-base-100 shadow-xl" aria-label="Experience highlights">
          <div className="card-body p-0">
            <article className="border-b border-base-content/10 p-6">
              <time className="font-black text-primary">2023 - Present</time>
              <h3 className="mt-2 text-xl font-bold">University of the Philippines Cebu</h3>
              <p className="mt-2 text-base-content/70">
              Bachelor of Science in Computer Science. UTFI Inc. Scholar and
              College Scholar, with coursework in data structures, algorithms,
              programming fundamentals, databases, SQL, and discrete math.
              </p>
            </article>
            <article className="border-b border-base-content/10 p-6">
              <time className="font-black text-primary">2023 - Present</time>
              <h3 className="mt-2 text-xl font-bold">UP Computer Science Guild</h3>
              <p className="mt-2 text-base-content/70">
              Member and volunteer for tech-related events, webinars, and
              seminars focused on computer science, software development, and
              emerging technologies.
              </p>
            </article>
            <article className="border-b border-base-content/10 p-6">
              <time className="font-black text-primary">July 2025 - August 2025</time>
              <h3 className="mt-2 text-xl font-bold">Glats ESL Teacher</h3>
              <p className="mt-2 text-base-content/70">
              Taught English to Japanese children in an on-site classroom
              setting while strengthening communication, adaptability,
              professionalism, and workplace collaboration.
              </p>
            </article>
            <article className="p-6">
              <time className="font-black text-primary">2023 - Present</time>
              <h3 className="mt-2 text-xl font-bold">UP Maroon Esports</h3>
              <p className="mt-2 text-base-content/70">
              Student-athlete representing the university in esports
              competitions, collaborating with teammates on strategy,
              discipline, and continuous improvement.
              </p>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="relative z-10 mx-auto max-w-6xl px-4 py-16"
        id="contact-content"
        aria-labelledby="contact-title"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="overflow-hidden rounded-box border border-primary/20 bg-base-100 shadow-2xl">
          <div className="bg-primary p-7 text-center text-primary-content md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em]">
              Get in touch
            </p>
            <h2 id="contact-title" className="mt-4 text-4xl font-black md:text-5xl">
              I would love working with you.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-content/80">
              Reach me through
              GitHub, LinkedIn, or email.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <motion.a
                href="https://github.com/togi-sama"
                className="btn border-primary-content/30 bg-transparent text-primary-content hover:border-primary-content hover:bg-primary-content hover:text-primary"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <SiGithub className="text-lg" aria-hidden="true" />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jecenel-igot/"
                className="btn border-primary-content/30 bg-transparent text-primary-content hover:border-primary-content hover:bg-primary-content hover:text-primary"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaLinkedin className="text-lg" aria-hidden="true" />
                LinkedIn
              </motion.a>
              <motion.a
                className="btn border-primary-content/30 bg-transparent text-primary-content hover:border-primary-content hover:bg-primary-content hover:text-primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jeceneligot2004@gmail.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <MdEmail className="text-lg" aria-hidden="true" />
                Email
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
    </ParticlesProvider>
    </MotionConfig>
  )
}

export default App
