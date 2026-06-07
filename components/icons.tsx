"use client"

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <path d="M50 35a15 15 0 1 0 0 30 15 15 0 0 0 0-30zm0 25a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
      <path d="M90 42h-5.7c-.8-3.2-2-6.2-3.6-9l4-4a5 5 0 0 0 0-7.1l-5.6-5.6a5 5 0 0 0-7.1 0l-4 4c-2.8-1.6-5.8-2.8-9-3.6V11a5 5 0 0 0-5-5h-8a5 5 0 0 0-5 5v5.7c-3.2.8-6.2 2-9 3.6l-4-4a5 5 0 0 0-7.1 0l-5.6 5.6a5 5 0 0 0 0 7.1l4 4c-1.6 2.8-2.8 5.8-3.6 9H10a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h5.7c.8 3.2 2 6.2 3.6 9l-4 4a5 5 0 0 0 0 7.1l5.6 5.6a5 5 0 0 0 7.1 0l4-4c2.8 1.6 5.8 2.8 9 3.6V90a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-5.7c3.2-.8 6.2-2 9-3.6l4 4a5 5 0 0 0 7.1 0l5.6-5.6a5 5 0 0 0 0-7.1l-4-4c1.6-2.8 2.8-5.8 3.6-9H90a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5z" />
    </svg>
  )
}

// Stress-Strain Curve (Mechanical Engineering)
export function StressStrainCurve({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} fill="none">
      {/* Axes */}
      <line x1="50" y1="250" x2="380" y2="250" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="250" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
      
      {/* Arrow heads */}
      <polygon points="380,250 370,245 370,255" fill="currentColor" />
      <polygon points="50,20 45,30 55,30" fill="currentColor" />
      
      {/* Axis labels */}
      <text x="200" y="280" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="serif">Strain (ε)</text>
      <text x="25" y="140" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="serif" transform="rotate(-90, 25, 140)">Stress (σ)</text>
      
      {/* Stress-strain curve */}
      <path
        d="M50 250 Q80 250 100 200 Q120 150 140 120 Q180 80 220 70 Q280 60 320 80 Q340 90 350 100"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      
      {/* Key points */}
      <circle cx="140" cy="120" r="5" fill="currentColor" />
      <text x="145" y="110" fontSize="11" fill="currentColor">Yield Point</text>
      
      <circle cx="220" cy="70" r="5" fill="currentColor" />
      <text x="225" y="60" fontSize="11" fill="currentColor">UTS</text>
      
      {/* Elastic region annotation */}
      <line x1="50" y1="250" x2="140" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
      <text x="70" y="200" fontSize="10" fill="currentColor" opacity="0.7">Elastic</text>
      
      {/* Grid lines */}
      {[100, 150, 200].map((y) => (
        <line key={y} x1="50" y1={y} x2="380" y2={y} stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      ))}
      {[100, 150, 200, 250, 300, 350].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="250" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      ))}
    </svg>
  )
}

// Euler-Lagrange Equation (Mathematical/Engineering)
export function EulerLagrangeEquation({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 150" className={className}>
      {/* Decorative box */}
      <rect x="20" y="20" width="360" height="110" rx="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      
      {/* Main equation */}
      <text x="200" y="55" textAnchor="middle" fontSize="16" fill="currentColor" fontFamily="serif" fontStyle="italic">
        Euler-Lagrange Equation
      </text>
      
      {/* The equation: d/dt (∂L/∂q̇) - ∂L/∂q = 0 */}
      <text x="60" y="95" fontSize="24" fill="currentColor" fontFamily="serif">
        <tspan fontStyle="italic">d</tspan>
      </text>
      <line x1="55" y1="100" x2="85" y2="100" stroke="currentColor" strokeWidth="2" />
      <text x="60" y="120" fontSize="24" fill="currentColor" fontFamily="serif">
        <tspan fontStyle="italic">dt</tspan>
      </text>
      
      <text x="95" y="100" fontSize="28" fill="currentColor">(</text>
      
      <text x="110" y="88" fontSize="20" fill="currentColor" fontFamily="serif">∂L</text>
      <line x1="108" y1="92" x2="140" y2="92" stroke="currentColor" strokeWidth="2" />
      <text x="110" y="115" fontSize="20" fill="currentColor" fontFamily="serif">∂q̇</text>
      
      <text x="145" y="100" fontSize="28" fill="currentColor">)</text>
      
      <text x="170" y="100" fontSize="28" fill="currentColor">−</text>
      
      <text x="200" y="88" fontSize="20" fill="currentColor" fontFamily="serif">∂L</text>
      <line x1="198" y1="92" x2="230" y2="92" stroke="currentColor" strokeWidth="2" />
      <text x="200" y="115" fontSize="20" fill="currentColor" fontFamily="serif">∂q</text>
      
      <text x="250" y="100" fontSize="28" fill="currentColor">=</text>
      <text x="280" y="100" fontSize="28" fill="currentColor">0</text>
      
      {/* Decorative elements */}
      <circle cx="340" cy="45" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="340" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

// Neural Network Diagram (ML/Deep Learning)
export function NeuralNetworkDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className}>
      {/* Title */}
      <text x="200" y="25" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="serif">Neural Network</text>
      
      {/* Input layer */}
      {[80, 120, 160, 200].map((y, i) => (
        <g key={`input-${i}`}>
          <circle cx="60" cy={y} r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="60" y={y + 5} textAnchor="middle" fontSize="10" fill="currentColor">x{i + 1}</text>
        </g>
      ))}
      <text x="60" y="240" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.7">Input</text>
      
      {/* Hidden layer 1 */}
      {[70, 110, 150, 190, 230].map((y, i) => (
        <g key={`h1-${i}`}>
          <circle cx="160" cy={y} r="16" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
      ))}
      <text x="160" y="265" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.7">Hidden</text>
      
      {/* Hidden layer 2 */}
      {[90, 140, 190].map((y, i) => (
        <g key={`h2-${i}`}>
          <circle cx="260" cy={y} r="16" fill="none" stroke="currentColor" strokeWidth="2" />
        </g>
      ))}
      
      {/* Output layer */}
      {[120, 180].map((y, i) => (
        <g key={`output-${i}`}>
          <circle cx="340" cy={y} r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="340" y={y + 5} textAnchor="middle" fontSize="10" fill="currentColor">y{i + 1}</text>
        </g>
      ))}
      <text x="340" y="240" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.7">Output</text>
      
      {/* Connections - Input to Hidden 1 */}
      {[80, 120, 160, 200].map((y1) => (
        [70, 110, 150, 190, 230].map((y2, i) => (
          <line key={`c1-${y1}-${y2}`} x1="78" y1={y1} x2="144" y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        ))
      ))}
      
      {/* Connections - Hidden 1 to Hidden 2 */}
      {[70, 110, 150, 190, 230].map((y1) => (
        [90, 140, 190].map((y2) => (
          <line key={`c2-${y1}-${y2}`} x1="176" y1={y1} x2="244" y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        ))
      ))}
      
      {/* Connections - Hidden 2 to Output */}
      {[90, 140, 190].map((y1) => (
        [120, 180].map((y2) => (
          <line key={`c3-${y1}-${y2}`} x1="276" y1={y1} x2="322" y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        ))
      ))}
      
      {/* Activation function annotation */}
      <text x="160" y="285" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5">σ(Wx + b)</text>
    </svg>
  )
}

// Product Roadmap / PM Diagram
export function ProductRoadmapDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 250" className={className}>
      {/* Title */}
      <text x="200" y="25" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="serif">Product Lifecycle</text>
      
      {/* Timeline */}
      <line x1="40" y1="130" x2="360" y2="130" stroke="currentColor" strokeWidth="2" />
      <polygon points="360,130 350,125 350,135" fill="currentColor" />
      
      {/* Phases */}
      {[
        { x: 80, label: "Discovery", icon: "?" },
        { x: 160, label: "Define", icon: "D" },
        { x: 240, label: "Develop", icon: ">" },
        { x: 320, label: "Deliver", icon: "★" },
      ].map((phase, i) => (
        <g key={phase.label}>
          <circle cx={phase.x} cy={130} r="20" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x={phase.x} y={135} textAnchor="middle" fontSize="14" fill="currentColor">{phase.icon}</text>
          <text x={phase.x} y={170} textAnchor="middle" fontSize="11" fill="currentColor">{phase.label}</text>
          
          {/* Phase details */}
          {i === 0 && (
            <>
              <text x={phase.x} y={190} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">User Research</text>
              <text x={phase.x} y={202} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">Market Analysis</text>
            </>
          )}
          {i === 1 && (
            <>
              <text x={phase.x} y={190} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">PRD</text>
              <text x={phase.x} y={202} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">Prioritization</text>
            </>
          )}
          {i === 2 && (
            <>
              <text x={phase.x} y={190} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">Sprint Planning</text>
              <text x={phase.x} y={202} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">Iteration</text>
            </>
          )}
          {i === 3 && (
            <>
              <text x={phase.x} y={190} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">Launch</text>
              <text x={phase.x} y={202} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6">Metrics</text>
            </>
          )}
        </g>
      ))}
      
      {/* Feedback loop */}
      <path d="M320 100 Q340 60 200 50 Q60 60 80 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <text x="200" y="45" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.5">Continuous Feedback</text>
    </svg>
  )
}

// Data Analytics Chart
export function DataAnalyticsChart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 350 250" className={className}>
      {/* Title */}
      <text x="175" y="25" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="serif">Analytics Dashboard</text>
      
      {/* Axes */}
      <line x1="50" y1="200" x2="320" y2="200" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="200" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Grid lines */}
      {[80, 110, 140, 170].map((y) => (
        <line key={y} x1="50" y1={y} x2="320" y2={y} stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      ))}
      
      {/* Bar chart */}
      {[
        { x: 80, h: 100, color: "currentColor" },
        { x: 120, h: 70, color: "currentColor" },
        { x: 160, h: 130, color: "currentColor" },
        { x: 200, h: 90, color: "currentColor" },
        { x: 240, h: 110, color: "currentColor" },
        { x: 280, h: 140, color: "currentColor" },
      ].map((bar, i) => (
        <g key={i}>
          <rect x={bar.x - 15} y={200 - bar.h} width="30" height={bar.h} fill={bar.color} opacity="0.3" rx="2" />
          <rect x={bar.x - 15} y={200 - bar.h} width="30" height={bar.h} fill="none" stroke={bar.color} strokeWidth="1.5" rx="2" />
        </g>
      ))}
      
      {/* Trend line */}
      <path d="M80 150 Q120 170 160 100 Q200 130 240 110 Q280 80 280 70" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5,3" />
      
      {/* Data points on trend line */}
      {[
        { x: 80, y: 150 },
        { x: 160, y: 100 },
        { x: 240, y: 110 },
        { x: 280, y: 70 },
      ].map((point, i) => (
        <circle key={i} cx={point.x} cy={point.y} r="4" fill="currentColor" />
      ))}
      
      {/* Legend */}
      <rect x="240" y="35" width="10" height="10" fill="currentColor" opacity="0.3" />
      <text x="255" y="44" fontSize="9" fill="currentColor">Volume</text>
      <line x1="240" y1="55" x2="250" y2="55" stroke="currentColor" strokeWidth="2" strokeDasharray="3,2" />
      <text x="255" y="58" fontSize="9" fill="currentColor">Trend</text>
    </svg>
  )
}

// Blueprint Grid (kept for compatibility)
export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      {/* Grid lines */}
      {Array.from({ length: 21 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 10} x2="200" y2={i * 10} opacity="0.3" />
      ))}
      {Array.from({ length: 21 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="200" opacity="0.3" />
      ))}
      {/* Geometric shapes */}
      <circle cx="100" cy="100" r="40" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="60" strokeWidth="1" opacity="0.3" />
      <rect x="60" y="60" width="80" height="80" strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="100" x2="200" y2="100" strokeWidth="1" opacity="0.4" />
      <line x1="100" y1="0" x2="100" y2="200" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

// Kept for compatibility
export function ChartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <rect x="10" y="60" width="15" height="30" rx="2" />
      <rect x="30" y="40" width="15" height="50" rx="2" />
      <rect x="50" y="25" width="15" height="65" rx="2" />
      <rect x="70" y="10" width="15" height="80" rx="2" />
    </svg>
  )
}

export function CircuitIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <circle cx="20" cy="20" r="5" fill="currentColor" />
      <circle cx="80" cy="20" r="5" fill="currentColor" />
      <circle cx="20" cy="80" r="5" fill="currentColor" />
      <circle cx="80" cy="80" r="5" fill="currentColor" />
      <path d="M50 42 V25 H20 V20" />
      <path d="M50 42 V25 H80 V20" />
      <path d="M50 58 V75 H20 V80" />
      <path d="M50 58 V75 H80 V80" />
    </svg>
  )
}
