export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  category: string
  stats: { label: string; value: string }[]
  href: string
}

export const projects: Project[] = [
  {
    id: "mauritius-study",
    title: "Mauritius Blended Learning Study",
    subtitle: "Research Data Analysis",
    description:
      "A multivariate analysis of digital literacy, motivation constructs, and course experience across higher education students in Mauritius, using EFA, CFA, ANOVA, stepwise regression, and SEM.",
    tags: ["EFA/CFA", "SEM", "ANOVA", "R", "lavaan"],
    category: "Statistical Analysis",
    stats: [
      { label: "KMO Index", value: ">0.8" },
      { label: "R² (SEM)", value: "86.1%" },
      { label: "Path Coef.", value: "β=0.928" },
    ],
    href: "/projects/mauritius-study.html",
  },
  {
    id: "vr-adoption",
    title: "VR Adoption Divergence",
    subtitle: "Market Research Analysis",
    description:
      "An in-depth analysis of VR adoption patterns across enterprise and consumer segments, examining the drivers behind divergent adoption trajectories and market dynamics.",
    tags: ["Market Analysis", "B2B vs B2C", "Trend Analysis", "Research"],
    category: "Market Research",
    stats: [
      { label: "Enterprise Adoption", value: "+24%" },
      { label: "Consumer Decline", value: "-18%" },
      { label: "Data Points", value: "1.2K+" },
    ],
    href: "/projects/vr-adoption.html",
  },
  {
    id: "hospitality-revenue",
    title: "Hospitality Revenue Optimization",
    subtitle: "Data Analysis Project",
    description:
      "A data-driven investigation into booking behavior, cancellation patterns, and dynamic pricing across a 25-property hotel chain — identifying and quantifying revenue leakage opportunities.",
    tags: ["Revenue Analytics", "Python", "Dynamic Pricing", "EDA"],
    category: "Business Analytics",
    stats: [
      { label: "Transactions", value: "134,590" },
      { label: "Revenue Uplift", value: "+20.86%" },
      { label: "Properties", value: "25" },
    ],
    href: "/projects/hospitality-revenue.html",
  },
  {
    id: "autoencoder",
    title: "Convolutional Autoencoder for Topology Optimization",
    subtitle: "Deep Learning Project",
    description:
      "A convolutional autoencoder trained as a supervised surrogate model to predict structurally optimal material distributions — replacing expensive physics solvers with millisecond-scale neural inference.",
    tags: ["Deep Learning", "TensorFlow", "CAE", "Supervised Learning"],
    category: "Machine Learning",
    stats: [
      { label: "Accuracy", value: "74.2%" },
      { label: "Training Samples", value: "30K" },
      { label: "Inference", value: "<100ms" },
    ],
    href: "/projects/autoencoder.html",
  },
]
