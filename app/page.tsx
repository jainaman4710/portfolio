import { ProjectCard } from "@/components/project-card"
import { Header } from "@/components/header"
import { projects } from "@/lib/projects"
import { ArrowDown, Cog, BarChart3, Brain, Lightbulb, Target } from "lucide-react"
import { 
  GearIcon, 
  StressStrainCurve, 
  EulerLagrangeEquation, 
  NeuralNetworkDiagram, 
  ProductRoadmapDiagram,
  DataAnalyticsChart,
  BlueprintGrid 
} from "@/components/icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
        {/* Large decorative background graphics */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Stress-Strain Curve - Top Left */}
          <div className="absolute -left-20 top-10 opacity-[0.08]">
            <StressStrainCurve className="h-[400px] w-[500px] text-pink" />
          </div>
          
          {/* Neural Network - Top Right */}
          <div className="absolute -right-10 top-20 opacity-[0.08]">
            <NeuralNetworkDiagram className="h-[350px] w-[450px] text-teal" />
          </div>
          
          {/* Euler-Lagrange Equation - Middle Left */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-[0.06]">
            <EulerLagrangeEquation className="h-[200px] w-[500px] text-purple" />
          </div>
          
          {/* Product Roadmap - Bottom Right */}
          <div className="absolute -right-20 bottom-20 opacity-[0.08]">
            <ProductRoadmapDiagram className="h-[300px] w-[450px] text-amber" />
          </div>
          
          {/* Data Analytics Chart - Bottom Left */}
          <div className="absolute -left-10 bottom-10 opacity-[0.07]">
            <DataAnalyticsChart className="h-[300px] w-[400px] text-teal" />
          </div>
          
          {/* Floating gears */}
          <GearIcon className="absolute left-[15%] top-[25%] h-20 w-20 animate-[spin_30s_linear_infinite] text-pink/20" />
          <GearIcon className="absolute right-[20%] top-[35%] h-14 w-14 animate-[spin_25s_linear_infinite_reverse] text-purple/15" />
          <GearIcon className="absolute bottom-[30%] right-[10%] h-16 w-16 animate-[spin_35s_linear_infinite] text-teal/15" />
          
          {/* Blueprint Grid */}
          <BlueprintGrid className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 text-pink/5" />
          
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-pink" />
            <p className="font-mono text-sm uppercase tracking-wider text-pink">
              M.Tech Dual Degree
            </p>
            <span className="h-px w-12 bg-pink" />
          </div>

          <h1 className="mb-2 font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Aman Tater
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground">
            Mechanical Engineering, IIT Kharagpur
          </p>

          <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Aspiring to build a career at the intersection of{" "}
            <span className="font-medium text-pink">Product Management</span>,{" "}
            <span className="font-medium text-teal">Business Analytics</span>, and{" "}
            <span className="font-medium text-purple">Data Science</span>.
            I enjoy solving ambiguous problems with data-driven approaches and
            translating insights into actionable strategies.
          </p>

          {/* Interest areas with icons - colorful */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "Product Thinking", icon: Lightbulb, color: "bg-pink/10 border-pink/40 text-pink hover:bg-pink/20" },
              { name: "Statistical Modeling", icon: BarChart3, color: "bg-teal/10 border-teal/40 text-teal hover:bg-teal/20" },
              { name: "Machine Learning", icon: Brain, color: "bg-purple/10 border-purple/40 text-purple hover:bg-purple/20" },
              { name: "Engineering", icon: Cog, color: "bg-amber/10 border-amber/40 text-amber hover:bg-amber/20" },
              { name: "Strategy", icon: Target, color: "bg-pink/10 border-pink/40 text-pink hover:bg-pink/20" },
            ].map(({ name, icon: Icon, color }) => (
              <span
                key={name}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${color}`}
              >
                <Icon className="h-4 w-4" />
                {name}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 rounded-lg border border-pink/30 bg-card px-4 py-2 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <p className="text-sm text-muted-foreground">
              Open to roles in PM, BA, Data Science, and adjacent fields
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll</span>
            <ArrowDown className="h-5 w-5 animate-bounce text-pink" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative border-t border-pink/20 bg-gradient-to-b from-background to-secondary/30 py-24">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <GearIcon className="absolute -right-10 top-20 h-40 w-40 text-pink/5" />
          <NeuralNetworkDiagram className="absolute -left-32 bottom-0 h-[300px] w-[400px] text-teal/5" />
        </div>
        
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-pink" />
                <p className="font-mono text-sm uppercase tracking-wider text-pink">
                  Proof of Work
                </p>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Projects
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">
              Click to view full analysis
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative border-t border-pink/20 bg-gradient-to-b from-secondary/30 to-background py-24"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <StressStrainCurve className="absolute -right-20 top-10 h-[350px] w-[450px] text-purple/5" />
          <ProductRoadmapDiagram className="absolute -left-20 bottom-10 h-[250px] w-[350px] text-amber/5" />
        </div>
        
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-teal" />
                <p className="font-mono text-sm uppercase tracking-wider text-teal">
                  Background
                </p>
              </div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I&apos;m pursuing an M.Tech Dual Degree in{" "}
                  <span className="font-medium text-foreground">Mechanical Engineering</span> at{" "}
                  <span className="font-medium text-pink">IIT Kharagpur</span>.
                  My engineering foundation gives me a unique perspective on problem-solving,
                  combining analytical rigor with systems thinking.
                </p>
                <p className="leading-relaxed">
                  I&apos;ve interned as a{" "}
                  <span className="font-medium text-purple">Product Management Intern at DevLaunch</span>,
                  where I architected user flows, authored PRDs for 15+ features, and
                  coordinated a 17-member cross-functional team. Previously, I worked as a{" "}
                  <span className="font-medium text-teal">Business Analyst Intern at SCMYuga Technologies</span>,
                  evaluating India&apos;s logistics infrastructure.
                </p>
                <p className="leading-relaxed">
                  I enjoy working on ambiguous problems where data meets strategy,
                  whether that&apos;s optimizing marketing budgets{" "}
                  <span className="font-semibold text-amber">(Gold Medal in Data Analytics)</span>,
                  tearing down products to improve retention, or building deep learning models
                  for engineering applications.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-purple" />
                <p className="font-mono text-sm uppercase tracking-wider text-purple">
                  What I Work With
                </p>
              </div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { category: "Analytics", items: "Python, R, SQL, Excel", color: "hover:border-teal/50 hover:bg-teal/5" },
                  { category: "ML/DL", items: "TensorFlow, Scikit-learn, XGBoost", color: "hover:border-purple/50 hover:bg-purple/5" },
                  { category: "Statistics", items: "SEM, ANOVA, Regression, EFA/CFA", color: "hover:border-pink/50 hover:bg-pink/5" },
                  { category: "Product", items: "PRDs, User Research, Agile", color: "hover:border-amber/50 hover:bg-amber/5" },
                  { category: "Visualization", items: "Matplotlib, Plotly, Tableau", color: "hover:border-teal/50 hover:bg-teal/5" },
                  { category: "Engineering", items: "CAD, Simulation, Optimization", color: "hover:border-purple/50 hover:bg-purple/5" },
                ].map((skill) => (
                  <div
                    key={skill.category}
                    className={`group rounded-lg border border-pink/20 bg-card p-4 transition-all ${skill.color}`}
                  >
                    <p className="mb-1 text-sm font-medium text-foreground">
                      {skill.category}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-pink/20 bg-secondary/20 py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-pink" />
            <p className="font-mono text-sm uppercase tracking-wider text-pink">
              Get in Touch
            </p>
            <span className="h-1 w-8 rounded-full bg-pink" />
          </div>
          <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">
            Contact
          </h2>
          <p className="mb-6 text-muted-foreground">
            Interested in discussing opportunities, collaborations, or just want to connect?
          </p>
          <a
            href="mailto:amantater026@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-pink bg-pink/10 px-6 py-3 font-medium text-foreground transition-colors hover:bg-pink/20"
          >
            amantater026@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink/20 bg-secondary/30 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aman Tater. Built with curiosity and code.</p>
        </div>
      </footer>
    </div>
  )
}
