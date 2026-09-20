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
    id: "vr-adoption",
    title: "VR Adoption Divergence",
    subtitle: "Bachelor Thesis Project, 2025-26",
    description:
      "A mixed-methods investigation into why enterprise VR adoption accelerates at 24-34% CAGR while consumer headset shipments contract, combining survey analysis, cross-technology case studies, and producer strategy analysis.",
    tags: ["Market Analysis", "B2B vs B2C", "Trend Analysis", "Research"],
    category: "Market Research",
    stats: [
      { label: "Enterprise CAGR", value: "24-34%" },
      { label: "Consumer Trend", value: "Contracting" },
      { label: "Project Type", value: "BTP" },
    ],
    href: "/projects/vr_adoption_btp.html",
  },
  {
    id: "hospitality-revenue",
    title: "Hospitality Revenue Optimization",
    subtitle: "Data Analysis Project",
    description:
      "A data-driven investigation into booking behavior, cancellation patterns, and dynamic pricing across a 25-property hotel chain, identifying and quantifying revenue leakage opportunities.",
    tags: ["Revenue Analytics", "Python", "Dynamic Pricing", "EDA"],
    category: "Business Analytics",
    stats: [
      { label: "Transactions", value: "134,590" },
      { label: "Revenue Uplift", value: "+20.86%" },
      { label: "Properties", value: "25" },
    ],
    href: "/projects/hospitality_revenue_report.html",
  },
  {
    id: "autoencoder",
    title: "Convolutional Autoencoder for Topology Optimization",
    subtitle: "Deep Learning Project",
    description:
      "A convolutional autoencoder trained as a supervised surrogate model to predict structurally optimal material distributions, replacing expensive physics solvers with millisecond-scale neural inference.",
    tags: ["Deep Learning", "TensorFlow", "CAE", "Supervised Learning"],
    category: "Machine Learning",
    stats: [
      { label: "Accuracy", value: "74.2%" },
      { label: "Training Samples", value: "30K" },
      { label: "Inference", value: "<100ms" },
    ],
    href: "/projects/autoencoder_report.html",
  },
  {
    id: "braches-cabin-heating",
    title: "BrACHeS: Brake-Assisted Cabin Heating System",
    subtitle: "Mechanical Design \u00b7 Group Project",
    description:
      "A passive, zero-energy thermal recovery system that captures waste heat from ventilated disc brakes and redirects it to supplement cabin heating in electric vehicles, designed and CFD-validated on a reference Maruti Suzuki Swift Dzire VDI.",
    tags: ["SolidWorks", "Ansys Fluent", "CFD", "Arduino"],
    category: "Mechanical Design",
    stats: [
      { label: "Heat Wasted Post-RBS", value: "81%" },
      { label: "Peak Disc Temp.", value: "600\u00b0C" },
      { label: "Prototype Iterations", value: "3" },
    ],
    href: "/projects/BrACHeS_Report.html",
  },
  {
    id: "gnn-eta-prediction",
    title: "Graph-Based ETA Prediction",
    subtitle: "Delhivery Network Intelligence",
    description:
      "Modelling Delhivery's logistics network as a directed graph of 1,639 facilities and 2,750 corridors, using a Spatio-Temporal Graph Attention Network to predict delivery delay factors and improve ETA accuracy.",
    tags: ["GNN", "Graph Attention", "Logistics", "Python"],
    category: "Machine Learning",
    stats: [
      { label: "MAE Improvement", value: "38.96%" },
      { label: "Hit Rate @15%", value: "52.57%" },
      { label: "Network Facilities", value: "1,639" },
    ],
    href: "/projects/GNN_ETA_prediction.html",
  },
  {
    id: "noncontact-pft",
    title: "Non-Contact Pulmonary Function Testing",
    subtitle: "General Championship \u00b7 Product Design 2026",
    description:
      "A 77GHz mmWave radar device that tracks chest wall displacement to 0.01mm precision, replacing the mouthpiece-based spirometer with a contactless system extracting standard PFT parameters through a six-stage signal-processing and ML pipeline.",
    tags: ["mmWave Radar", "XGBoost", "Signal Processing", "Raspberry Pi"],
    category: "Product Design",
    stats: [
      { label: "Displacement Precision", value: "0.01mm" },
      { label: "Prototype BOM", value: "\u20b930-46K" },
      { label: "Standard", value: "ATS/ERS 2019" },
    ],
    href: "/projects/PD2026-08_dashboard.html",
  },
  {
    id: "promptassist-prd",
    title: "PromptAssist",
    subtitle: "Product Requirements Document \u00b7 Grammarly",
    description:
      "A PRD for an opt-in Grammarly feature that reads a user's in-progress text, infers intent and context, and generates a structured, high-quality prompt for injection into any connected AI tool with explicit user approval.",
    tags: ["PRD", "B2C Premium", "LLM-agnostic", "Browser Extension"],
    category: "Product Management",
    stats: [
      { label: "Segment", value: "B2C Premium" },
      { label: "AI Tools Supported", value: "4" },
      { label: "Version", value: "v1.0" },
    ],
    href: "/projects/PromptAssist_PRD.html",
  },
  {
    id: "amorist-perfumes",
    title: "Amorist Perfumes",
    subtitle: "General Championship Case Study 2026",
    description:
      "A 3-year D2C growth strategy for a mid-premium fragrance brand, moving from discount-driven acquisition toward durable brand equity, defensible pricing, and LTV-compounding retention in India's fastest-growing fragrance segment.",
    tags: ["D2C Strategy", "Brand Equity", "LTV:CAC", "GTM"],
    category: "Business Strategy",
    stats: [
      { label: "Perfume Market (India)", value: "$1.25B" },
      { label: "Mid-Premium CAGR", value: "18-20%" },
      { label: "Target LTV:CAC", value: "3.85:1" },
    ],
    href: "/projects/amorist_case_study.html",
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    subtitle: "ML Dashboard",
    description:
      "Comparing four classifiers on simulated transaction data across EDA, feature engineering, SMOTE class-balancing, and ROC evaluation to detect fraudulent credit card activity.",
    tags: ["Classification", "SMOTE", "scikit-learn", "EDA"],
    category: "Machine Learning",
    stats: [
      { label: "Raw Transactions", value: "555K" },
      { label: "Period", value: "2019-2020" },
      { label: "Models Compared", value: "4" },
    ],
    href: "/projects/credit_card_fraud_dashboard.html",
  },
  {
    id: "electromart-analytics",
    title: "ElectroMart Marketing Analytics",
    subtitle: "General Championship Data Analytics 2025 \u00b7 Gold Medal",
    description:
      "A full-stack data science case study for an Ontario-based e-commerce firm spanning EDA of 1.65M order records, KPI architecture, Ridge Regression with hypothesis testing, and gradient-ascent budget optimisation across 9 marketing channels.",
    tags: ["Ridge Regression", "Budget Optimisation", "Hypothesis Testing", "KPI Design"],
    category: "Business Analytics",
    stats: [
      { label: "Ridge R\u00b2", value: "0.968" },
      { label: "Optimised ROI", value: "+128%" },
      { label: "Order Records", value: "1.65M" },
    ],
    href: "/projects/electromart_dashboard.html",
  },
  {
    id: "ethical-supply-chain",
    title: "Ethical Supply Chain in Electronics",
    subtitle: "Portfolio Case Study",
    description:
      "A deep-dive into the environmental, social, and governance challenges embedded in the global electronics supply chain, tracing an iPhone 13's supply network across 50+ countries and proposing policy, tech, and operational solutions.",
    tags: ["ESG", "Supply Chain", "Sustainability", "Policy"],
    category: "Business Strategy",
    stats: [
      { label: "Forced Labour (2022)", value: "28Mn people" },
      { label: "Emissions from Semis", value: "37%" },
      { label: "CO2 per iPhone", value: "64kg" },
    ],
    href: "/projects/ethical_supply_chain_dashboard.html",
  },
  {
    id: "fitpass-engagement",
    title: "FITPASS: Engagement & Retention Strategy",
    subtitle: "Product Management Competition",
    description:
      "A strategy to improve user engagement and stickiness for India's largest fitness network, using mobile technology to strengthen retention, personalisation, and community features.",
    tags: ["Retention Strategy", "Personalisation", "Mobile", "GTM"],
    category: "Product Management",
    stats: [
      { label: "Downloads", value: "6M+" },
      { label: "Gym Partners", value: "8,100+" },
      { label: "Annual Revenue FY23", value: "\u20b929Cr" },
    ],
    href: "/projects/fitpass_dashboard.html",
  },
  {
    id: "psychology-free-trials",
    title: "The Psychology of Free Trials",
    subtitle: "Academic Research \u00b7 Consumer Happiness & Well-Being",
    description:
      "A research paper examining how time-bounded product access draws on loss aversion, habit formation, commitment bias, and the endowment effect to drive conversion, supervised by Prof. Manas Kumar Mandal.",
    tags: ["Behavioural Psychology", "Consumer Research", "SaaS"],
    category: "Research",
    stats: [
      { label: "B2B SaaS Using Trials", value: "74%" },
      { label: "Netflix Early Trial-to-Paid", value: "80%" },
      { label: "Grammarly Freemium Valuation", value: "$13B" },
    ],
    href: "/projects/free-trials-dashboard.html",
  },
  {
    id: "linguafly-roadmap",
    title: "LinguaFly Product Roadmap",
    subtitle: "Product Roadmap Case Study",
    description:
      "A product roadmap for a language-learning app targeting Indian students headed abroad and domestic learners bridging the English communication gap, taking the product from vision to MVP in 90 days.",
    tags: ["Product Roadmap", "MVP Planning", "Competitive Analysis"],
    category: "Product Management",
    stats: [
      { label: "Launch Languages", value: "2" },
      { label: "Competitors Analysed", value: "4" },
      { label: "Days to MVP", value: "90" },
    ],
    href: "/projects/linguafly-casestudy.html",
  },
  {
    id: "magentacard-flywheel",
    title: "MagentaCard: Fintech Flywheel Strategy",
    subtitle: "General Championship \u00b7 Product Management 2026",
    description:
      "A strategy positioning Deutsche Telekom's MagentaCard not as a bank product but as a telecom utility woven into everyday behaviour, built on its existing Payzy payments engine and MeinMagenta app channel.",
    tags: ["Fintech Strategy", "GTM", "Telecom", "Flywheel Design"],
    category: "Product Management",
    stats: [
      { label: "Telekom Customers", value: "54.2M" },
      { label: "GTM Horizon", value: "12 Months" },
      { label: "GTM Phases", value: "5" },
    ],
    href: "/projects/magentacard_dashboard.html",
  },
  {
    id: "mirage-boredom",
    title: "Mirage: Bringing Boredom Back",
    subtitle: "Product Design Challenge",
    description:
      "A product concept addressing the disappearance of idle, unstructured time in an always-on digital environment, and its cost to creativity and deep thought.",
    tags: ["Product Concept", "Behavioural Design"],
    category: "Product Design",
    stats: [
      { label: "Daily Screen Time", value: "400 min" },
      { label: "Social Media Time", value: "151 min" },
    ],
    href: "/projects/mirage_dashboard.html",
  },
  {
    id: "nykaa-teardown",
    title: "Nykaa Engagement Gap Teardown",
    subtitle: "Product Teardown Season 12 \u00b7 Product Space",
    description:
      "A root-cause analysis of Nykaa's user retention problem, built on 1,768 analysed Play Store reviews, identifying three structural drivers of churn across onboarding, loyalty design, and app engagement.",
    tags: ["Product Teardown", "Root Cause Analysis", "Retention"],
    category: "Product Management",
    stats: [
      { label: "Market Share", value: "30%" },
      { label: "Monthly Active Users", value: "35M" },
      { label: "Reviews Analysed", value: "1,768" },
    ],
    href: "/projects/nykaa_dashboard.html",
  },
  {
    id: "policyease-insurance",
    title: "PolicyEase: Insurance Aggregator Redesign",
    subtitle: "General Championship \u00b7 Product Management 2025",
    description:
      "A user-centric mobile platform redesign for general insurance, addressing opaque claims and poor post-purchase support, grounded in sentiment analysis of 661 real user reviews.",
    tags: ["Product Strategy", "Sentiment Analysis", "UX Research"],
    category: "Product Management",
    stats: [
      { label: "Aggregator Market by 2029", value: "\u20b9106B" },
      { label: "Market CAGR", value: "24.3%" },
      { label: "Reviews Analysed", value: "661" },
    ],
    href: "/projects/policyease_dashboard.html",
  },
  {
    id: "qpo-cabs",
    title: "QPo Cabs: Market Entry Strategy",
    subtitle: "Open IIT Case Study \u00b7 Team C-53",
    description:
      "A go-to-market strategy for a hotspot-based shared-auto service in Chennai, focused on safety, affordability, and women-first design, benchmarked against 5 competitors.",
    tags: ["Market Entry", "Unit Economics", "CAC Strategy"],
    category: "Business Strategy",
    stats: [
      { label: "Shared Mobility Market", value: "\u20b996Bn" },
      { label: "Lowest CAC Achieved", value: "\u20b935" },
      { label: "Competitors Benchmarked", value: "5" },
    ],
    href: "/projects/qpo_cabs_dashboard.html",
  },
  {
    id: "railsafe-thermal",
    title: "RailSafe Thermal Inspector (RSIT)",
    subtitle: "Product Design 2025",
    description:
      "An infrared thermography-based non-destructive testing system for real-time, automated detection of structural defects in railway tracks, replacing shift-bound manual patrol inspection.",
    tags: ["Infrared Thermography", "NDT", "Embedded Systems"],
    category: "Product Design",
    stats: [
      { label: "Keyman Patrol Range", value: "~4km" },
      { label: "Unit Component Cost", value: "\u20b918,920" },
      { label: "Sensor Resolution", value: "160\u00d7120" },
    ],
    href: "/projects/railsafe_dashboard.html",
  },
  {
    id: "smart-bin",
    title: "Smart Bin Waste Compaction System",
    subtitle: "General Championship \u00b7 Product Design 2024",
    description:
      "A mechanically compacting smart dustbin engineered to double waste capacity, prevent animal access, and optimise municipal collection intervals for India's commercial waste challenge.",
    tags: ["Mechanical Design", "Product Design", "Cost Engineering"],
    category: "Product Design",
    stats: [
      { label: "Capacity Increase", value: "2\u00d7" },
      { label: "Max Compaction Force", value: "30kN" },
      { label: "Estimated Unit Cost", value: "\u20b973,588" },
    ],
    href: "/projects/smart_bin_dashboard.html",
  },
  {
    id: "tata-neu-teardown",
    title: "Tata Neu Super App Teardown",
    subtitle: "Product Design Challenge \u00b7 ProductSpace",
    description:
      "A full product analysis of Tata Neu's Daily grocery category and homepage UX, grounded in a 38-person primary survey and 1,300+ Play Store reviews, proposing fixes for discoverability, checkout, and personalisation failures.",
    tags: ["Product Teardown", "UX Research", "Competitive Analysis"],
    category: "Product Management",
    stats: [
      { label: "NeuPass Members", value: "75M" },
      { label: "Super-App Market Share", value: "2%" },
      { label: "Reviews Analysed", value: "1,300+" },
    ],
    href: "/projects/tata_neu_dashboard.html",
  },
  {
    id: "passive-tmd",
    title: "Passive TMD for Trailer Sway Mitigation",
    subtitle: "General Championship \u00b7 Hardware Modelling 2025",
    description:
      "A purely mechanical, zero-power tuned mass damper that counteracts trailer sway oscillations at inception, before they escalate into loss of control.",
    tags: ["Tuned Mass Damper", "Vehicle Dynamics", "Mechanical Design"],
    category: "Mechanical Design",
    stats: [
      { label: "Response Time", value: "<0.1s" },
      { label: "Sway Reduction", value: "50-60%" },
      { label: "Power Required", value: "0W" },
    ],
    href: "/projects/tmd_dashboard.html",
  },
]
