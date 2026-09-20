"use client"

import type { CSSProperties } from "react"

export function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM1.78 1h20.44C22.75 1 23 1.24 23 1.56v20.88c0 .32-.25.56-.78.56H1.78c-.53 0-.78-.24-.78-.56V1.56C1 1.24 1.25 1 1.78 1Z"
      />
    </svg>
  )
}

export function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true"
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
export function StressStrainCurve({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 300" className={className} fill="none" style={style}>
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
export function EulerLagrangeEquation({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 150" className={className} style={style}>
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
export function NeuralNetworkDiagram({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 300" className={className} style={style}>
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
export function ProductRoadmapDiagram({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 250" className={className} style={style}>
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

