export default function Logo({ light = true }) {
  return (
    <a className="logo" href="#home" aria-label="PrituhIT Solutions – home">
      <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={light ? '#1E3A5F' : '#0A192F'} />
        <path d="M20 46V18h13a9 9 0 010 18H20" fill="none" stroke="#00A896" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="46" cy="46" r="4" fill="#4EA8DE" />
      </svg>
      <span>Prituh<b>IT</b> Solutions</span>
    </a>
  );
}
