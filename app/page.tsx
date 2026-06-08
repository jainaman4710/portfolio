import { 
  StressStrainCurve, 
  EulerLagrangeEquation, 
  NeuralNetworkDiagram, 
  ProductRoadmapDiagram,
} from "@/components/icons"
import { Header } from "@/components/header"

export default function Home() {
  const courses = ["Machine Learning","Data Analytics","Probability & Statistics","Operations Research","Finite Element Analysis","Mechanics of Solids","System Dynamics & Control","Computational Methods"]

  const skills = [
    { cat: "Analytics",        items: ["Python","R","SQL","Excel","Google Sheets"] },
    { cat: "Machine Learning", items: ["TensorFlow","Scikit-learn","XGBoost","Keras","NumPy","Pandas"] },
    { cat: "Statistics",       items: ["SEM","ANOVA","Regression","EFA / CFA","Hypothesis Testing"] },
    { cat: "Product",          items: ["PRD Writing","User Research","Agile / Scrum","Roadmapping","Wireframing"] },
    { cat: "Visualization",    items: ["Matplotlib","Seaborn","Plotly","Tableau","Power BI"] },
    { cat: "Engineering",      items: ["CAD","FEA","Simulation","Topology Optimisation","MATLAB"] },
  ]

  const projects = [
    {
      type: "Statistical Analysis",
      name: "Mauritius Blended Learning Study",
      desc: "Multivariate analysis of digital literacy and motivation using EFA, CFA, ANOVA, stepwise regression, and SEM.",
      stats: [{ val: "86.1%", lbl: "KMO Index" }, { val: "β=0.928", lbl: "Path Coef." }],
      href: "/projects/mauritius-study",
    },
    {
      type: "Market Research",
      name: "VR Adoption Divergence",
      desc: "In-depth analysis of VR adoption patterns across enterprise and consumer segments, examining divergent trajectories.",
      stats: [{ val: "+24%", lbl: "Enterprise" }, { val: "1.2K+", lbl: "Data Points" }],
      href: "#",
    },
    {
      type: "Business Analytics",
      name: "Hospitality Revenue Optimization",
      desc: "Data-driven investigation into booking behavior, cancellation patterns, and dynamic pricing across a 25-property hotel chain.",
      stats: [{ val: "+20.86%", lbl: "Revenue Uplift" }, { val: "134,590", lbl: "Transactions" }],
      href: "/projects/hospitality-revenue",
    },
    {
      type: "Machine Learning",
      name: "Convolutional Autoencoder for Topology Optimization",
      desc: "Surrogate deep learning model replacing expensive physics solvers with millisecond-scale neural inference.",
      stats: [{ val: "74.2%", lbl: "Accuracy" }, { val: "<100ms", lbl: "Inference" }],
      href: "#",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF5F7" }}>
      <Header />

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "60px" }}>
        {/* dot grid */}
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #F8BBD9 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* bg diagrams */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute opacity-[0.10]" style={{ left: "-20px", top: "80px" }}>
            <StressStrainCurve className="h-[420px] w-[520px]" style={{ color: "#303F9F" }} />
          </div>
          <div className="absolute opacity-[0.08]" style={{ right: "-10px", top: "180px" }}>
            <NeuralNetworkDiagram className="h-[300px] w-[400px]" style={{ color: "#303F9F" }} />
          </div>
          <div className="absolute opacity-[0.07]" style={{ right: "60px", top: "60px" }}>
            <EulerLagrangeEquation className="h-[120px] w-[400px]" style={{ color: "#303F9F" }} />
          </div>
          <div className="absolute opacity-[0.08]" style={{ right: "-20px", bottom: "60px" }}>
            <ProductRoadmapDiagram className="h-[260px] w-[380px]" style={{ color: "#303F9F" }} />
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 px-20 py-16 max-w-[660px]">
          <h1 className="font-serif font-normal leading-none whitespace-nowrap mb-2" style={{ fontSize: "clamp(3.8rem, 6vw, 6.5rem)" }}>
            Aman <em className="italic" style={{ color: "#5C6BC0" }}>Tater</em>
          </h1>
          <p className="font-mono text-xs uppercase mb-7" style={{ letterSpacing: "0.1em", color: "#b0a0b4" }}>
            Mechanical Engineering · IIT Kharagpur
          </p>
          <p className="leading-[1.85] max-w-[520px] mb-8" style={{ fontSize: "15px", color: "#6b5b6e" }}>
            Aspiring to build a career at the intersection of Product Management, Business Analytics,
            and Data Science, and open to roles across all three. I enjoy solving ambiguous problems
            with data-driven approaches and translating insights into actionable strategies. My
            engineering background sharpens how I think about systems, trade-offs, and scale, while
            my work in analytics and product has grounded me in the craft of building things people
            actually need.
          </p>
          <a href="#"
            className="inline-flex items-center gap-2 font-medium text-white rounded-full no-underline transition-colors"
            style={{ fontSize: "13px", background: "#5C6BC0", padding: "11px 26px" }}
            onMouseOver={e => (e.currentTarget.style.background = "#1A237E")}
            onMouseOut={e => (e.currentTarget.style.background = "#5C6BC0")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-20 pb-20" style={{ backgroundColor: "#FFF5F7", paddingTop: 0 }}>
        <p className="font-mono uppercase mb-1" style={{ fontSize: "11px", color: "#00BCD4", letterSpacing: "0.12em" }}>Proof of Work</p>
        <h2 className="font-serif font-normal mb-10" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)", color: "#1a1a2e" }}>Projects</h2>
        <div className="grid grid-cols-2 gap-4">
          {projects.map(p => (
            <a key={p.name} href={p.href}
              className="relative block rounded-2xl no-underline transition-all group"
              style={{ background: "#fff", border: "1px solid #F8BBD9", padding: "2rem" }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#80DEEA"; e.currentTarget.style.transform = "translateY(-2px)" }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "#F8BBD9"; e.currentTarget.style.transform = "translateY(0)" }}>
              <span className="absolute top-6 right-6 transition-colors" style={{ color: "#b0a0b4" }}>↗</span>
              <span className="font-mono uppercase inline-block rounded-full mb-4"
                style={{ fontSize: "10px", color: "#006064", background: "#E0F7FA", border: "1px solid #80DEEA", padding: "3px 10px", letterSpacing: "0.06em" }}>
                {p.type}
              </span>
              <h3 className="font-serif font-normal mb-2 leading-snug" style={{ fontSize: "1.2rem", color: "#1a1a2e" }}>{p.name}</h3>
              <p className="leading-[1.75] mb-6" style={{ fontSize: "13px", color: "#6b5b6e" }}>{p.desc}</p>
              <div className="flex gap-6">
                {p.stats.map(s => (
                  <div key={s.lbl}>
                    <span className="font-mono font-medium block" style={{ fontSize: "15px", color: "#006064" }}>{s.val}</span>
                    <span className="uppercase" style={{ fontSize: "10px", color: "#b0a0b4", letterSpacing: "0.05em" }}>{s.lbl}</span>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-20 py-20 grid gap-16 items-start" style={{ backgroundColor: "#FCE4EC", gridTemplateColumns: "1fr auto" }}>
        <div>
          <p className="font-mono uppercase mb-1" style={{ fontSize: "11px", color: "#00BCD4", letterSpacing: "0.12em" }}>Background</p>
          <h2 className="font-serif font-normal mb-8" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)", color: "#1a1a2e" }}>About Me</h2>
          <div style={{ fontSize: "15px", color: "#6b5b6e", lineHeight: "1.9" }}>
            <p className="mb-5">I&apos;m pursuing a five-year B.Tech + M.Tech Dual Degree in Mechanical Engineering at IIT Kharagpur. My engineering foundation gives me a unique perspective on problem-solving, combining analytical rigour with systems thinking.</p>
            <blockquote className="my-8" style={{ borderLeft: "3px solid #00BCD4", paddingLeft: "1.25rem" }}>
              <p className="font-serif italic" style={{ fontSize: "1.05rem", color: "#1a1a2e", lineHeight: "1.75" }}>
                I enjoy working on ambiguous problems where data meets strategy: optimizing marketing budgets, tearing down products to improve retention, or building deep learning models for engineering applications.
              </p>
            </blockquote>
            <p>I&apos;ve interned as a <strong style={{ color: "#1a1a2e", fontWeight: 500 }}>Product Management Intern at DevLaunch</strong>, where I architected user flows, authored PRDs for 15+ features, and coordinated a 17-member cross-functional team. Previously, I worked as a <strong style={{ color: "#1a1a2e", fontWeight: 500 }}>Business Analyst Intern at SCMYuga Technologies</strong>, evaluating India&apos;s logistics infrastructure.</p>
          </div>
        </div>
        <div style={{ paddingTop: "5.5rem" }}>
          <a href="#"
            className="inline-flex items-center gap-2 font-medium rounded-full no-underline whitespace-nowrap transition-all"
            style={{ fontSize: "13px", color: "#303F9F", background: "#E8EAF6", border: "1px solid #9FA8DA", padding: "11px 22px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="px-20 py-20" style={{ backgroundColor: "#FFF5F7" }}>
        <p className="font-mono uppercase mb-1" style={{ fontSize: "11px", color: "#00BCD4", letterSpacing: "0.12em" }}>Academic Background</p>
        <h2 className="font-serif font-normal mb-10" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)", color: "#1a1a2e" }}>Education</h2>
        <div className="grid grid-cols-2 gap-4">

          {/* Dual degree */}
          <div className="col-span-2 rounded-2xl p-8 transition-all" style={{ background: "#fff", border: "1px solid #F8BBD9" }}>
            <span className="font-mono uppercase inline-block rounded-full mb-4"
              style={{ fontSize: "10px", color: "#303F9F", background: "#E8EAF6", border: "1px solid #9FA8DA", padding: "3px 10px", letterSpacing: "0.06em" }}>
              Integrated Dual Degree · B.Tech + M.Tech
            </span>
            <h3 className="font-serif font-normal mb-1 leading-snug" style={{ fontSize: "1.2rem", color: "#1a1a2e" }}>
              Mechanical Engineering &amp; Mechanical System Design
            </h3>
            <p className="font-medium mb-1" style={{ fontSize: "14px", color: "#1a1a2e" }}>Indian Institute of Technology, Kharagpur</p>
            <p className="font-mono mb-3" style={{ fontSize: "11px", color: "#b0a0b4" }}>Nov 2022 – Present</p>
            <p className="leading-[1.7] mb-5" style={{ fontSize: "13px", color: "#6b5b6e" }}>
              A five-year integrated programme combining a B.Tech in Mechanical Engineering with an M.Tech specialisation in Mechanical System Design.
            </p>
            <p className="font-mono uppercase mb-3" style={{ fontSize: "10px", color: "#b0a0b4", letterSpacing: "0.08em" }}>Relevant Courses</p>
            <div className="flex flex-wrap gap-2">
              {courses.map(c => (
                <span key={c} className="rounded-full" style={{ fontSize: "12px", color: "#9C27B0", background: "#F3E5F5", border: "1px solid #CE93D8", padding: "3px 11px" }}>{c}</span>
              ))}
            </div>
          </div>

          {/* Class XII */}
          <div className="rounded-2xl p-8 transition-all" style={{ background: "#fff", border: "1px solid #F8BBD9" }}>
            <span className="font-mono uppercase inline-block rounded-full mb-4"
              style={{ fontSize: "10px", color: "#303F9F", background: "#E8EAF6", border: "1px solid #9FA8DA", padding: "3px 10px", letterSpacing: "0.06em" }}>
              Class XII
            </span>
            <h3 className="font-serif font-normal mb-1" style={{ fontSize: "1.2rem", color: "#1a1a2e" }}>Senior Secondary</h3>
            <p style={{ fontSize: "14px", color: "#6b5b6e" }}>• School name here</p>
            <p className="font-mono" style={{ fontSize: "11px", color: "#b0a0b4" }}>• Year</p>
          </div>

          {/* Class X */}
          <div className="rounded-2xl p-8 transition-all" style={{ background: "#fff", border: "1px solid #F8BBD9" }}>
            <span className="font-mono uppercase inline-block rounded-full mb-4"
              style={{ fontSize: "10px", color: "#303F9F", background: "#E8EAF6", border: "1px solid #9FA8DA", padding: "3px 10px", letterSpacing: "0.06em" }}>
              Class X
            </span>
            <h3 className="font-serif font-normal mb-1" style={{ fontSize: "1.2rem", color: "#1a1a2e" }}>Secondary</h3>
            <p style={{ fontSize: "14px", color: "#6b5b6e" }}>• School name here</p>
            <p className="font-mono" style={{ fontSize: "11px", color: "#b0a0b4" }}>• Year</p>
          </div>

        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-20 py-20" style={{ backgroundColor: "#FCE4EC" }}>
        <p className="font-mono uppercase mb-1" style={{ fontSize: "11px", color: "#00BCD4", letterSpacing: "0.12em" }}>Toolkit</p>
        <h2 className="font-serif font-normal mb-10" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)", color: "#1a1a2e" }}>Skills</h2>
        <div className="grid grid-cols-3 gap-4">
          {skills.map(s => (
            <div key={s.cat} className="rounded-2xl p-6 transition-all"
              style={{ background: "#fff", border: "1px solid #F8BBD9" }}>
              <span className="font-mono uppercase inline-block rounded-full mb-4"
                style={{ fontSize: "10px", color: "#006064", background: "#E0F7FA", border: "1px solid #80DEEA", padding: "3px 10px", letterSpacing: "0.06em" }}>
                {s.cat}
              </span>
              <div className="flex flex-wrap gap-2">
                {s.items.map(item => (
                  <span key={item} className="rounded-full"
                    style={{ fontSize: "12px", color: "#6b5b6e", background: "#FFF5F7", border: "1px solid #F8BBD9", padding: "4px 12px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-20 py-28 text-center" style={{ backgroundColor: "#FFF5F7" }}>
        <p className="font-mono uppercase mb-1" style={{ fontSize: "11px", color: "#5C6BC0", letterSpacing: "0.12em" }}>Get in Touch</p>
        <h2 className="font-serif font-normal mb-3" style={{ fontSize: "clamp(1.9rem,2.8vw,2.6rem)", color: "#1a1a2e" }}>Contact</h2>
        <p className="mb-10" style={{ fontSize: "15px", color: "#6b5b6e" }}>Interested in discussing opportunities, collaborations, or just want to connect?</p>
        <a href="mailto:amantater026@gmail.com"
          className="font-mono inline-block rounded-full no-underline transition-all"
          style={{ fontSize: "1rem", color: "#303F9F", background: "#E8EAF6", border: "1px solid #9FA8DA", padding: "14px 32px" }}>
          amantater026@gmail.com
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-20 py-7 flex justify-between items-center" style={{ borderTop: "1px solid #F8BBD9", backgroundColor: "#FFF5F7" }}>
        <span className="font-mono" style={{ fontSize: "11px", color: "#b0a0b4" }}>© {new Date().getFullYear()} Aman Tater</span>
        <div className="flex gap-6">
          {["home","projects","about","education","skills","contact"].map(l => (
            <a key={l} href={`#${l}`} className="font-mono capitalize no-underline transition-colors"
              style={{ fontSize: "11px", color: "#b0a0b4" }}>
              {l}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
