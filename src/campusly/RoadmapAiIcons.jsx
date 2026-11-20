// Neon AI line-art (chip, brain, robot, circuits, dashboard, code) floating behind the course road.
const Chip = () => (
  <svg viewBox="0 0 120 120">
    {[38, 50, 62, 74, 86].map((p, i) => (
      <g key={p} className="rm-ai-pin" style={{ '--pin-delay': `${i * -0.4}s` }}>
        <path d={`M${p - 4} 34 V${18 - (i % 2) * 8}`}/><circle cx={p - 4} cy={16 - (i % 2) * 8} r="2.4"/>
        <path d={`M${p - 4} 86 V${102 + (i % 2) * 8}`}/><circle cx={p - 4} cy={104 + (i % 2) * 8} r="2.4"/>
        <path d={`M34 ${p - 4} H${18 - (i % 2) * 8}`}/><circle cx={16 - (i % 2) * 8} cy={p - 4} r="2.4"/>
        <path d={`M86 ${p - 4} H${102 + (i % 2) * 8}`}/><circle cx={104 + (i % 2) * 8} cy={p - 4} r="2.4"/>
      </g>
    ))}
    <rect x="34" y="34" width="52" height="52" rx="9" className="rm-ai-fill"/>
    <rect x="40" y="40" width="40" height="40" rx="6"/>
    <text x="60" y="68" textAnchor="middle" className="rm-ai-text">AI</text>
  </svg>
)

const BRAIN_NODES = [[34, 40], [48, 30], [62, 28], [78, 34], [88, 48], [84, 64], [70, 72], [54, 70], [40, 64], [30, 52], [50, 48], [66, 50], [58, 60], [74, 52]]
const BRAIN_LINKS = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0], [0, 10], [1, 10], [2, 11], [3, 13], [10, 11], [11, 13], [11, 12], [12, 7], [12, 6], [13, 5], [10, 8], [10, 12], [13, 4]]
const Brain = () => (
  <svg viewBox="0 0 120 100">
    <path className="rm-ai-fill" d="M30 34c2-10 14-16 22-12 6-8 22-8 28 0 10-2 18 6 16 16 8 6 8 20-2 26-1 10-12 14-20 10-6 6-18 6-24 0-10 4-22-2-22-12-8-4-8-20 2-28z"/>
    {BRAIN_LINKS.map(([a, b]) => <line key={`${a}-${b}`} x1={BRAIN_NODES[a][0]} y1={BRAIN_NODES[a][1]} x2={BRAIN_NODES[b][0]} y2={BRAIN_NODES[b][1]} className="rm-ai-thin"/>)}
    {BRAIN_NODES.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.6" className="rm-ai-node" style={{ '--node-delay': `${(i % 5) * -0.5}s` }}/>)}
    <path d="M56 78c0 6-2 10-6 14M62 78c0 6 2 10 4 14"/>
  </svg>
)

const Robot = () => (
  <svg viewBox="0 0 110 120">
    <path d="M55 14v10"/><circle cx="55" cy="11" r="3.5" className="rm-ai-node"/>
    <rect x="16" y="40" width="10" height="24" rx="5" className="rm-ai-fill"/>
    <rect x="84" y="40" width="10" height="24" rx="5" className="rm-ai-fill"/>
    <rect x="24" y="24" width="62" height="54" rx="22" className="rm-ai-fill"/>
    <rect x="32" y="36" width="46" height="28" rx="13"/>
    <ellipse cx="45" cy="50" rx="4.5" ry="5.5" className="rm-ai-eye"/>
    <ellipse cx="65" cy="50" rx="4.5" ry="5.5" className="rm-ai-eye"/>
    <path d="M50 58q5 4 10 0"/>
    <path className="rm-ai-fill" d="M30 112c0-18 10-28 25-28s25 10 25 28"/>
  </svg>
)

const Circuit = () => (
  <svg viewBox="0 0 140 80">
    <path d="M4 12h30l14 14h40l14 14h30"/><circle cx="134" cy="40" r="3"/>
    <path d="M4 34h18l12 12h34l10 10h26"/><circle cx="106" cy="56" r="3"/>
    <path d="M4 58h40l12 12h24"/><circle cx="82" cy="70" r="3"/>
    <circle cx="34" cy="12" r="2.6" className="rm-ai-node"/><circle cx="88" cy="26" r="2.6" className="rm-ai-node" style={{ '--node-delay': '-.6s' }}/>
    <circle cx="68" cy="46" r="2.6" className="rm-ai-node" style={{ '--node-delay': '-1.2s' }}/><circle cx="44" cy="58" r="2.6" className="rm-ai-node" style={{ '--node-delay': '-1.8s' }}/>
    <path className="rm-ai-spark" d="M4 12h30l14 14h40l14 14h30" pathLength="100"/>
  </svg>
)

const Dashboard = () => (
  <svg viewBox="0 0 140 90">
    <rect x="6" y="6" width="128" height="78" rx="9" className="rm-ai-glass"/>
    <path d="M20 22h34M20 30h22" className="rm-ai-thin"/>
    <rect x="20" y="58" width="8" height="14" rx="1.5" className="rm-ai-bar"/>
    <rect x="34" y="50" width="8" height="22" rx="1.5" className="rm-ai-bar" style={{ '--bar-delay': '-.5s' }}/>
    <rect x="48" y="42" width="8" height="30" rx="1.5" className="rm-ai-bar" style={{ '--bar-delay': '-1s' }}/>
    <rect x="62" y="34" width="8" height="38" rx="1.5" className="rm-ai-bar" style={{ '--bar-delay': '-1.5s' }}/>
    <circle cx="105" cy="45" r="15" className="rm-ai-thin"/>
    <circle cx="105" cy="45" r="15" className="rm-ai-donut" pathLength="100"/>
  </svg>
)

const Code = () => (
  <svg viewBox="0 0 120 80">
    <rect x="6" y="6" width="108" height="68" rx="9" className="rm-ai-glass"/>
    <path d="M44 26 30 40l14 14M76 26l14 14-14 14M66 22 54 58"/>
  </svg>
)

const Network = () => (
  <svg viewBox="0 0 110 100">
    {[[18, 25], [18, 50], [18, 75]].flatMap(([x1, y1]) => [[55, 18], [55, 50], [55, 82]].map(([x2, y2]) => <line key={`a${y1}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} className="rm-ai-thin"/>))}
    {[[55, 18], [55, 50], [55, 82]].flatMap(([x1, y1]) => [[92, 34], [92, 66]].map(([x2, y2]) => <line key={`b${y1}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} className="rm-ai-thin"/>))}
    {[[18, 25], [18, 50], [18, 75], [55, 18], [55, 50], [55, 82], [92, 34], [92, 66]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" className="rm-ai-node rm-ai-fill" style={{ '--node-delay': `${(i % 4) * -0.5}s` }}/>)}
  </svg>
)

const ICONS = { chip: Chip, brain: Brain, robot: Robot, circuit: Circuit, dashboard: Dashboard, code: Code, network: Network }

// Placement: y as % of the map height, side of the map, size in px. Alternates sides down the road.
export const AI_ICON_LAYOUT = [
  { icon: 'chip', y: 2, side: 'right', size: 118 },
  { icon: 'brain', y: 9, side: 'left', size: 120 },
  { icon: 'circuit', y: 17, side: 'left', size: 120 },
  { icon: 'robot', y: 22, side: 'right', size: 96 },
  { icon: 'dashboard', y: 31, side: 'left', size: 118 },
  { icon: 'code', y: 38, side: 'right', size: 98 },
  { icon: 'network', y: 46, side: 'left', size: 96 },
  { icon: 'chip', y: 54, side: 'right', size: 104 },
  { icon: 'brain', y: 62, side: 'right', size: 112 },
  { icon: 'circuit', y: 69, side: 'left', size: 116 },
  { icon: 'robot', y: 77, side: 'left', size: 92 },
  { icon: 'dashboard', y: 84, side: 'right', size: 112 },
  { icon: 'code', y: 91, side: 'left', size: 94 },
  { icon: 'network', y: 95, side: 'right', size: 92 },
]

export default function RoadmapAiIcons() {
  return (
    <div className="roadmap-ai-icons" aria-hidden="true">
      {AI_ICON_LAYOUT.map(({ icon, y, side, size }, i) => {
        const Icon = ICONS[icon]
        return (
          <span
            key={`${icon}-${i}`}
            className={`roadmap-ai-icon is-${side} is-${icon}`}
            style={{ '--ai-y': `${y}%`, '--ai-size': `${size}px`, '--ai-delay': `${(i % 5) * -1.1}s`, '--ai-tilt': `${i % 2 ? 6 : -6}deg` }}
          >
            <Icon/>
          </span>
        )
      })}
    </div>
  )
}
