// Decorative digital-network graphic: fixed node set, lines drawn between near neighbours.
const NODES = [
  [60, 80], [170, 40], [290, 110], [410, 50], [500, 150], [380, 210], [250, 190], [120, 170],
  [70, 290], [200, 320], [330, 300], [460, 340], [540, 260], [150, 420], [300, 430], [430, 440],
];
const LINKS = [];
NODES.forEach((a, i) => NODES.forEach((b, j) => {
  if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1]) < 150) LINKS.push([a, b]);
}));

export default function Network({ className = '' }) {
  return (
    <svg className={`network ${className}`} viewBox="0 0 600 480" role="img" aria-label="Abstract digital network illustration">
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4EA8DE" /><stop offset="1" stopColor="#00A896" />
        </linearGradient>
        <radialGradient id="glow"><stop offset="0" stopColor="#00A896" stopOpacity=".55" /><stop offset="1" stopColor="#00A896" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="330" cy="240" r="200" fill="url(#glow)" />
      {LINKS.map(([a, b], i) => (
        <line key={i} className="net-line" x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} style={{ animationDelay: `${(i % 6) * 0.7}s` }} />
      ))}
      {NODES.map(([x, y], i) => (
        <g key={i}>
          {i % 4 === 0 && <circle className="net-pulse" cx={x} cy={y} r="14" fill="url(#ng)" style={{ animationDelay: `${i * 0.3}s` }} />}
          <circle cx={x} cy={y} r={i % 4 === 0 ? 6 : 4} fill={i % 3 === 0 ? '#00A896' : '#4EA8DE'} />
        </g>
      ))}
    </svg>
  );
}
