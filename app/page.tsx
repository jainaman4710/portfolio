import {
  StressStrainCurve,
  EulerLagrangeEquation,
  NeuralNetworkDiagram,
  ProductRoadmapDiagram,
} from "@/components/icons"
import { Header } from "@/components/header"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { projects } from "@/lib/projects"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

export default function Home() {
  const courses = [
    "Machine Learning","Data Analytics","Probability & Statistics",
    "Operations Research","Finite Element Analysis","Mechanics of Solids",
    "System Dynamics & Control","Computational Methods",
  ]

  const skills = [
    { cat: "Analytics",        items: ["Python","R","SQL","Excel","Google Sheets"] },
    { cat: "Machine Learning", items: ["TensorFlow","Scikit-learn","XGBoost","Keras","NumPy","Pandas"] },
    { cat: "Statistics",       items: ["SEM","ANOVA","Regression","EFA / CFA","Hypothesis Testing"] },
    { cat: "Product",          items: ["PRD Writing","User Research","Agile / Scrum","Roadmapping","Wireframing"] },
    { cat: "Visualization",    items: ["Matplotlib","Seaborn","Plotly","Tableau","Power BI"] },
    { cat: "Engineering",      items: ["CAD","FEA","Simulation","Topology Optimisation","MATLAB"] },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "60px" }}
      >
        {/* dot grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-[length:28px_28px]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            opacity: 0.5,
          }}
        />

        {/* bg diagrams */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute" style={{ left: "-20px", top: "80px", opacity: 0.10 }}>
            <StressStrainCurve className="h-[420px] w-[520px] text-indigo" />
          </div>
          <div className="absolute" style={{ right: "-10px", top: "180px", opacity: 0.08 }}>
            <NeuralNetworkDiagram className="h-[300px] w-[400px] text-indigo" />
          </div>
          <div className="absolute" style={{ right: "60px", top: "55px", opacity: 0.07 }}>
            <EulerLagrangeEquation className="h-[120px] w-[400px] text-indigo" />
          </div>
          <div className="absolute" style={{ right: "-20px", bottom: "60px", opacity: 0.08 }}>
            <ProductRoadmapDiagram className="h-[260px] w-[380px] text-indigo" />
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-20 py-16 max-w-[660px]">
          <h1
            className="font-serif font-normal leading-none whitespace-normal sm:whitespace-nowrap mb-2"
            style={{ fontSize: "clamp(2.5rem, 9vw, 6.5rem)" }}
          >
            Aman <em className="italic text-primary">Tater</em>
          </h1>
          <p
            className="font-mono uppercase mb-7 text-fore3"
            style={{ fontSize: "12px", letterSpacing: "0.1em" }}
          >
            Mechanical Engineering &middot; IIT Kharagpur
          </p>
          <p
            className="leading-[1.85] max-w-[520px] mb-8 text-fore2"
            style={{ fontSize: "15px" }}
          >
            Aspiring to build a career at the intersection of Product Management, Business
            Analytics, and Data Science, and open to roles across all three. I enjoy solving
            ambiguous problems with data-driven approaches and translating insights into
            actionable strategies. My engineering background sharpens how I think about
            systems, trade-offs, and scale, while my work in analytics and product has
            grounded me in the craft of building things people actually need.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium text-white rounded-full no-underline bg-primary"
            style={{ fontSize: "13px", padding: "11px 26px" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-6 sm:px-12 md:px-16 lg:px-20 pb-20 bg-background" style={{ paddingTop: 0 }}>
        <p className="font-mono uppercase mb-1 text-teal" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
          Proof of Work
        </p>
        <h2 className="font-serif font-normal mb-10 text-foreground" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)" }}>
          Projects
        </h2>
        <ProjectsShowcase projects={projects} />
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="px-6 sm:px-12 md:px-16 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start bg-secondary"
      >
        <div>
          <p className="font-mono uppercase mb-1 text-teal" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
            Background
          </p>
          <h2 className="font-serif font-normal mb-8 text-foreground" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)" }}>
            About Me
          </h2>
          <div className="text-fore2" style={{ fontSize: "15px", lineHeight: "1.9" }}>
            <p className="mb-5">
              I&apos;m pursuing a five-year B.Tech + M.Tech Dual Degree in Mechanical Engineering
              at IIT Kharagpur. My engineering foundation gives me a unique perspective on
              problem-solving, combining analytical rigour with systems thinking.
            </p>
            <blockquote className="my-8 border-l-[3px] border-teal pl-5">
              <p className="font-serif italic text-foreground" style={{ fontSize: "1.05rem", lineHeight: "1.75" }}>
                I enjoy working on ambiguous problems where data meets strategy: optimizing
                marketing budgets, tearing down products to improve retention, or building
                deep learning models for engineering applications.
              </p>
            </blockquote>
            <p>
              I&apos;ve interned as a{" "}
              <strong className="text-foreground" style={{ fontWeight: 500 }}>Product Management Intern at DevLaunch</strong>,
              where I architected user flows, authored PRDs for 15+ features, and coordinated
              a 17-member cross-functional team. Previously, I worked as a{" "}
              <strong className="text-foreground" style={{ fontWeight: 500 }}>Business Analyst Intern at SCMYuga Technologies</strong>,
              evaluating India&apos;s logistics infrastructure.
            </p>
          </div>
        </div>
        <div className="lg:pt-[5.5rem]">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium rounded-full no-underline whitespace-nowrap text-indigo bg-accent border border-indigo-border"
            style={{ fontSize: "13px", padding: "11px 22px" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="px-6 sm:px-12 md:px-16 lg:px-20 py-20 bg-background">
        <p className="font-mono uppercase mb-1 text-teal" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
          Academic Background
        </p>
        <h2 className="font-serif font-normal mb-10 text-foreground" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)" }}>
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Dual degree — full width */}
          <div className="sm:col-span-2 rounded-2xl p-8 bg-card border border-border">
            <span
              className="font-mono uppercase inline-block rounded-full mb-4 text-indigo bg-accent border border-indigo-border"
              style={{ fontSize: "10px", padding: "3px 10px", letterSpacing: "0.06em" }}
            >
              Integrated Dual Degree &middot; B.Tech + M.Tech
            </span>
            <h3 className="font-serif font-normal mb-1 leading-snug text-foreground" style={{ fontSize: "1.2rem" }}>
              Mechanical Engineering &amp; Mechanical System Design
            </h3>
            <p className="font-medium mb-1 text-foreground" style={{ fontSize: "14px" }}>
              Indian Institute of Technology, Kharagpur
            </p>
            <p className="font-mono mb-3 text-fore3" style={{ fontSize: "11px" }}>
              Nov 2022 &ndash; Present
            </p>
            <p className="leading-[1.7] mb-5 text-fore2" style={{ fontSize: "13px" }}>
              A five-year integrated programme combining a B.Tech in Mechanical Engineering
              with an M.Tech specialisation in Mechanical System Design.
            </p>
            <p className="font-mono uppercase mb-3 text-fore3" style={{ fontSize: "10px", letterSpacing: "0.08em" }}>
              Relevant Courses
            </p>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span
                  key={c}
                  className="rounded-full text-purple bg-purple-soft border border-purple-mid"
                  style={{ fontSize: "12px", padding: "3px 11px" }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Class XII */}
          <div className="rounded-2xl p-8 bg-card border border-border">
            <span
              className="font-mono uppercase inline-block rounded-full mb-4 text-indigo bg-accent border border-indigo-border"
              style={{ fontSize: "10px", padding: "3px 10px", letterSpacing: "0.06em" }}
            >
              Class XII
            </span>
            <h3 className="font-serif font-normal mb-2 text-foreground" style={{ fontSize: "1.2rem" }}>
              Senior Secondary
            </h3>
            <p className="text-fore2" style={{ fontSize: "14px" }}>&#x2022; H.R. Memorial Sr. Sec. School, Lunkaransar, Bikaner, Rajasthan</p>
            <p className="font-mono mt-1 text-fore3" style={{ fontSize: "11px" }}>&#x2022; 2021</p>
          </div>

          {/* Class X */}
          <div className="rounded-2xl p-8 bg-card border border-border">
            <span
              className="font-mono uppercase inline-block rounded-full mb-4 text-indigo bg-accent border border-indigo-border"
              style={{ fontSize: "10px", padding: "3px 10px", letterSpacing: "0.06em" }}
            >
              Class X
            </span>
            <h3 className="font-serif font-normal mb-2 text-foreground" style={{ fontSize: "1.2rem" }}>
              Secondary
            </h3>
            <p className="text-fore2" style={{ fontSize: "14px" }}>&#x2022; Govt. Sr. Sec. School, Lunkaransar, Bikaner, Rajasthan</p>
            <p className="font-mono mt-1 text-fore3" style={{ fontSize: "11px" }}>&#x2022; 2019</p>
          </div>

        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-6 sm:px-12 md:px-16 lg:px-20 py-20 bg-secondary">
        <p className="font-mono uppercase mb-1 text-teal" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
          Toolkit
        </p>
        <h2 className="font-serif font-normal mb-10 text-foreground" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)" }}>
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.cat}
              className="rounded-2xl p-6 bg-card border border-border"
            >
              <span
                className="font-mono uppercase inline-block rounded-full mb-4 text-teal-dark bg-teal-soft border border-teal-mid"
                style={{ fontSize: "10px", padding: "3px 10px", letterSpacing: "0.06em" }}
              >
                {s.cat}
              </span>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full text-fore2 bg-background border border-border"
                    style={{ fontSize: "12px", padding: "4px 12px" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-6 sm:px-12 md:px-16 lg:px-20 py-28 text-center bg-background">
        <p className="font-mono uppercase mb-1 text-primary" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
          Get in Touch
        </p>
        <h2 className="font-serif font-normal mb-3 text-foreground" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)" }}>
          Contact
        </h2>
        <p className="mb-10 text-fore2" style={{ fontSize: "15px" }}>
          Interested in discussing opportunities, collaborations, or just want to connect?
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=amantater026@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-block rounded-full no-underline text-indigo bg-accent border border-indigo-border"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            amantater026@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/aman-tater"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-block rounded-full no-underline text-indigo bg-accent border border-indigo-border"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jainaman4710"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono inline-block rounded-full no-underline text-indigo bg-accent border border-indigo-border"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="px-6 sm:px-12 md:px-16 lg:px-20 py-7 flex flex-wrap justify-between items-center gap-4 border-t border-border bg-background"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-fore3" style={{ fontSize: "11px" }}>
            &copy; {new Date().getFullYear()} Aman Tater
          </span>
          <a
            href="https://www.linkedin.com/in/aman-tater"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-fore3"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://github.com/jainaman4710"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-fore3"
          >
            <GithubIcon className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["home","projects","about","education","skills","contact"].map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="font-mono capitalize no-underline text-fore3"
              style={{ fontSize: "11px" }}
            >
              {l}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
