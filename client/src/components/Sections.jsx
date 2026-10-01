import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Network from './Network.jsx';
import Logo from './Logo.jsx';
import { useCountUp } from '../hooks.js';
import * as D from '../data.js';
import { getProjects, getStats, getTestimonials, sendEnquiry } from '../api.js';

const Head = ({ title, sub, light, center = true }) => (
  <div className={`sec-head reveal ${center ? 'center' : ''} ${light ? 'on-dark' : ''}`}>
    <h2>{title}</h2>
    {sub && <p>{sub}</p>}
  </div>
);

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-h">
      <div className="container hero-in">
        <div className="hero-copy">
          <p className="tagline">Amplify your business</p>
          <h1 id="hero-h">Technology That Helps Your Business Grow.</h1>
          <p className="lead">We design, develop and maintain powerful digital solutions that help businesses build a stronger online presence, improve efficiency and achieve sustainable growth.</p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#contact">Get a Free Consultation</a>
            <a className="btn btn-ghost" href="#services">Explore Our Services</a>
          </div>
          <p className="trust-line">Web • Mobile • Software • UI/UX • Digital Solutions</p>
        </div>
        <div className="hero-art"><Network /></div>
      </div>
    </section>
  );
}

export function Trust() {
  return (
    <section className="trust" aria-label="Our values">
      <div className="container trust-grid">
        {D.VALUES.map((v) => (
          <div className="trust-item reveal" key={v.title}>
            <span className="ico"><Icon name={v.icon} /></span>
            <div><h3>{v.title}</h3><p>{v.text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GrowthVisual() {
  return (
    <svg viewBox="0 0 480 380" className="growth" role="img" aria-label="Rising growth chart connected by a technology network">
      <defs>
        <linearGradient id="gg" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#0A192F" /><stop offset="1" stopColor="#00A896" /></linearGradient>
      </defs>
      <rect x="10" y="10" width="460" height="360" rx="28" fill="#0A192F" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={50 + i * 78} y={300 - (i + 1) * 45} width="46" height={(i + 1) * 45} rx="8" fill={i === 4 ? '#00A896' : '#1E3A5F'} />
      ))}
      <polyline points="73,240 151,200 229,150 307,105 385,52" fill="none" stroke="#4EA8DE" strokeWidth="3" strokeLinecap="round" />
      {[[73, 240], [151, 200], [229, 150], [307, 105], [385, 52]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="6" fill="#F8F9FA" stroke="#4EA8DE" strokeWidth="3" />)}
      <line x1="40" y1="300" x2="440" y2="300" stroke="#4EA8DE" strokeOpacity=".4" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <div className="container split">
        <div className="reveal">
          <h2 id="about-h">Technology. Creativity. Business Growth.</h2>
          <p>At PrituhIT Solutions, we combine technology, creativity and business understanding to build digital solutions that make a difference.</p>
          <p>From websites and mobile applications to custom software and digital transformation, we help businesses turn ideas into practical, scalable and effective technology solutions.</p>
          <a className="btn btn-secondary" href="#why">Learn More About Us</a>
        </div>
        <div className="reveal"><GrowthVisual /></div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section alt" aria-labelledby="svc-h">
      <div className="container">
        <div className="sec-head reveal center">
          <h2 id="svc-h">Our IT Solutions</h2>
          <p>From your first idea to long-term digital growth, we provide technology solutions designed around your business.</p>
        </div>
        <div className="grid grid-4">
          {D.SERVICES.map((s) => (
            <article className="card service reveal" key={s.title}>
              <span className="ico"><Icon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a className="more" href="#contact" aria-label={`Learn more about ${s.title}`}>Learn More <Icon name="arrow" size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const SolutionArt = ({ k }) => (
  <svg viewBox="0 0 200 120" className="sol-art" aria-hidden="true">
    {k === 'web' && <><rect x="20" y="20" width="160" height="90" rx="10" fill="none" stroke="#4EA8DE" strokeWidth="2" /><path d="M20 42h160" stroke="#4EA8DE" strokeWidth="2" /><circle cx="34" cy="31" r="3" fill="#00A896" /><rect x="36" y="56" width="60" height="10" rx="5" fill="#00A896" /><rect x="36" y="74" width="100" height="6" rx="3" fill="#4EA8DE" opacity=".5" /></>}
    {k === 'software' && <><rect x="30" y="20" width="60" height="36" rx="8" fill="#00A896" opacity=".85" /><rect x="110" y="20" width="60" height="36" rx="8" fill="none" stroke="#4EA8DE" strokeWidth="2" /><rect x="70" y="70" width="60" height="36" rx="8" fill="none" stroke="#4EA8DE" strokeWidth="2" /><path d="M90 38h20M100 56v14" stroke="#4EA8DE" strokeWidth="2" /></>}
    {k === 'transform' && <><path d="M20 90c30 0 30-60 60-60s30 60 60 60" fill="none" stroke="#4EA8DE" strokeWidth="2" strokeDasharray="4 5" /><circle cx="20" cy="90" r="7" fill="none" stroke="#4EA8DE" strokeWidth="2" /><circle cx="140" cy="90" r="9" fill="#00A896" /><path d="M136 90l3 3 6-6" stroke="#0A192F" strokeWidth="2" fill="none" /></>}
    {k === 'ai' && <><g fill="#4EA8DE"><circle cx="30" cy="30" r="5" /><circle cx="30" cy="60" r="5" /><circle cx="30" cy="90" r="5" /></g><g fill="#00A896"><circle cx="100" cy="45" r="6" /><circle cx="100" cy="75" r="6" /></g><circle cx="170" cy="60" r="8" fill="#F8F9FA" /><path d="M35 30l60 15M35 60l60-15M35 60l60 15M35 90l60-15M105 45l58 15M105 75l58-15" stroke="#4EA8DE" strokeWidth="1.5" opacity=".7" /></>}
  </svg>
);

export function Solutions() {
  return (
    <section id="solutions" className="section dark" aria-labelledby="sol-h">
      <div className="container">
        <div className="sec-head reveal center on-dark"><h2 id="sol-h">Solutions Built Around Your Business</h2></div>
        <div className="grid grid-2">
          {D.SOLUTIONS.map((s) => (
            <article className="sol reveal" key={s.key}>
              <div><h3>{s.title}</h3><p>{s.text}</p></div>
              <SolutionArt k={s.key} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section id="why" className="section" aria-labelledby="why-h">
      <div className="container">
        <div className="sec-head reveal center"><h2 id="why-h">Why Businesses Choose PrituhIT Solutions</h2></div>
        <div className="grid grid-3">
          {D.WHY.map(([t, p], i) => (
            <article className="why reveal" key={t}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3><p>{p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section alt" aria-labelledby="proc-h">
      <div className="container">
        <div className="sec-head reveal center"><h2 id="proc-h">How We Turn Ideas Into Solutions</h2></div>
        <ol className="steps">
          {D.STEPS.map(([t, p], i) => (
            <li className="step reveal" key={t}>
              <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3><p>{p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section className="section" aria-labelledby="tech-h">
      <div className="container">
        <div className="sec-head reveal center"><h2 id="tech-h">Technology That Moves Your Business Forward</h2></div>
        <div className="grid grid-3">
          {D.TECH.map((t) => (
            <article className="tech reveal" key={t.title}>
              <span className="ico"><Icon name={t.icon} /></span>
              <h3>{t.title}</h3>
              <ul className="chips">{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const Cover = ({ category }) => {
  const shapes = {
    Websites: <><rect x="30" y="28" width="140" height="84" rx="8" fill="none" stroke="#4EA8DE" strokeWidth="2" /><path d="M30 48h140" stroke="#4EA8DE" strokeWidth="2" /><rect x="44" y="60" width="52" height="8" rx="4" fill="#00A896" /></>,
    'Web Apps': <><rect x="28" y="30" width="60" height="80" rx="8" fill="none" stroke="#4EA8DE" strokeWidth="2" /><rect x="100" y="30" width="72" height="36" rx="8" fill="#00A896" opacity=".8" /><rect x="100" y="76" width="72" height="34" rx="8" fill="none" stroke="#4EA8DE" strokeWidth="2" /></>,
    'Mobile Apps': <><rect x="72" y="16" width="56" height="98" rx="10" fill="none" stroke="#4EA8DE" strokeWidth="2" /><circle cx="100" cy="64" r="14" fill="#00A896" opacity=".85" /></>,
    'UI/UX': <><rect x="30" y="30" width="60" height="80" rx="6" fill="none" stroke="#4EA8DE" strokeWidth="2" /><rect x="110" y="30" width="60" height="36" rx="6" fill="#00A896" opacity=".85" /><path d="M110 82h60M110 96h40" stroke="#4EA8DE" strokeWidth="3" strokeLinecap="round" /></>,
    Software: <><path d="M60 46l-24 20 24 20M140 46l24 20-24 20M112 36l-24 60" fill="none" stroke="#00A896" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></>,
  };
  return <svg viewBox="0 0 200 128" className="cover" aria-hidden="true"><rect width="200" height="128" fill="#0A192F" />{shapes[category]}</svg>;
};

export function Portfolio() {
  const [projects, setProjects] = useState(null);
  const [cat, setCat] = useState('All');
  useEffect(() => { getProjects().then(setProjects).catch(() => setProjects([])); }, []);
  const usingPlaceholders = projects !== null && projects.length === 0;
  const all = projects === null ? [] : usingPlaceholders ? D.PLACEHOLDER_PROJECTS : projects;
  const shown = cat === 'All' ? all : all.filter((p) => p.category === cat);

  return (
    <section id="portfolio" className="section alt" aria-labelledby="pf-h">
      <div className="container">
        <div className="sec-head reveal center">
          <h2 id="pf-h">Our Work</h2>
          <p>Explore some of the digital solutions we create for businesses and organizations.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects by category">
          {D.CATEGORIES.map((c) => (
            <button key={c} className={cat === c ? 'on' : ''} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="scroller grid-3" aria-live="polite">
          {shown.map((p) => (
            <article className="project" key={p.id}>
              {p.image_url ? <img className="cover" src={p.image_url} alt={`${p.title} – ${p.category} project`} loading="lazy" /> : <Cover category={p.category} />}
              <div className="project-body">
                <p className="meta">{p.industry}</p>
                <h3>{p.title}{p.client ? <small> · {p.client}</small> : null}</h3>
                <ul className="chips small">{(p.services || []).map((s) => <li key={s}>{s}</li>)}</ul>
                <p>{p.description}</p>
                {p.project_url
                  ? <a className="more" href={p.project_url} target="_blank" rel="noopener noreferrer">View Project <Icon name="arrow" size={16} /></a>
                  : <span className="more muted">{usingPlaceholders ? 'Sample card' : 'View Project'}</span>}
              </div>
            </article>
          ))}
        </div>
        {shown.length === 0 && projects !== null && <p className="empty">No projects in this category yet.</p>}
      </div>
    </section>
  );
}

function Stat({ s }) {
  const [ref, n] = useCountUp(s.value);
  return (
    <div className="stat reveal">
      <strong ref={ref}>{s.value == null ? `[XX]${s.suffix}` : `${n}${s.suffix}`}</strong>
      <span>{s.label}</span>
    </div>
  );
}

export function Impact() {
  const [stats, setStats] = useState(D.PLACEHOLDER_STATS);
  useEffect(() => { getStats().then((r) => r.length && setStats(r)).catch(() => {}); }, []);
  return (
    <section className="section dark" aria-labelledby="imp-h">
      <div className="container">
        <div className="sec-head reveal center on-dark"><h2 id="imp-h">Technology Should Create Results.</h2></div>
        <div className="stats">{stats.map((s) => <Stat key={s.key} s={s} />)}</div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [items, setItems] = useState(D.PLACEHOLDER_TESTIMONIALS);
  useEffect(() => { getTestimonials().then((r) => r.length && setItems(r)).catch(() => {}); }, []);
  return (
    <section className="section" aria-labelledby="test-h">
      <div className="container">
        <div className="sec-head reveal center"><h2 id="test-h">What Our Clients Say</h2></div>
        <div className="scroller grid-3">
          {items.map((t) => (
            <figure className="quote" key={t.id}>
              <div className="stars" role="img" aria-label={`${t.rating} out of 5 stars`}>{'★'.repeat(t.rating)}</div>
              <blockquote>{t.quote}</blockquote>
              <figcaption><strong>{t.author}</strong><span>{t.organization}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section alt" aria-labelledby="faq-h">
      <div className="container narrow">
        <div className="sec-head reveal center"><h2 id="faq-h">Frequently Asked Questions</h2></div>
        <div className="faq">
          {D.FAQS.map(([q, a], i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={q}>
              <h3>
                <button aria-expanded={open === i} aria-controls={`faq-${i}`} id={`faq-b-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  {q}<Icon name="chevron" size={20} />
                </button>
              </h3>
              <div className="faq-panel" id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`}>
                <div><p>{a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="cta-h">
      <Network className="final-net" />
      <div className="container final-in">
        <h2 id="cta-h">Have an Idea? Let's Build It Together.</h2>
        <p>Tell us about your business, your challenge or your next digital idea. Our team can help you turn it into a practical technology solution.</p>
        <div className="btn-row center">
          <a className="btn btn-primary" href="#contact">Start Your Project</a>
          <a className="btn btn-ghost" href={D.PHONE_HREF}>Talk to Us</a>
        </div>
      </div>
    </section>
  );
}

const EMPTY = { name: '', company: '', email: '', phone: '', service: '', budget: '', message: '', website_url: '' };

export function Contact() {
  const [f, setF] = useState(EMPTY);
  const [state, setState] = useState({ status: 'idle', errors: {}, msg: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState({ status: 'sending', errors: {}, msg: '' });
    try {
      await sendEnquiry(f);
      setF(EMPTY);
      setState({ status: 'ok', errors: {}, msg: 'Thank you. Your enquiry has been sent and our team will get back to you soon.' });
    } catch (err) {
      setState({ status: 'error', errors: err.errors || {}, msg: err.message });
    }
  }
  const Field = ({ k, label, type = 'text', req, children }) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}{req && <span aria-hidden="true"> *</span>}</label>
      {children || <input id={`f-${k}`} type={type} value={f[k]} onChange={set(k)} required={req} aria-invalid={!!state.errors[k]} autoComplete={k === 'name' ? 'name' : k === 'email' ? 'email' : k === 'phone' ? 'tel' : k === 'company' ? 'organization' : undefined} />}
      {state.errors[k] && <em className="err">{state.errors[k]}</em>}
    </div>
  );

  return (
    <section id="contact" className="section" aria-labelledby="con-h">
      <div className="container">
        <div className="sec-head reveal center"><h2 id="con-h">Let's Talk About Your Project</h2></div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>PrituhIT Solutions</h3>
            <ul>
              <li><Icon name="pin" /><span>Hyderabad – INDIA</span></li>
              <li><Icon name="call" /><span>Phone / WhatsApp<br /><a href={D.PHONE_HREF}>{D.PHONE}</a></span></li>
              <li><Icon name="mail" /><span>Email<br />{D.EMAIL ? <a href={`mailto:${D.EMAIL}`}>{D.EMAIL}</a> : '[company email]'}</span></li>
              <li><Icon name="link" /><span>Website<br />{D.SITE_URL ? <a href={D.SITE_URL}>{D.SITE_URL.replace(/^https?:\/\//, '')}</a> : '[company website]'}</span></li>
            </ul>
            <a className="btn btn-whatsapp" href={D.WHATSAPP} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={20} /> Chat on WhatsApp</a>
          </div>
          <form className="form reveal" onSubmit={submit} noValidate>
            <div className="row">
              <Field k="name" label="Name" req />
              <Field k="company" label="Company" />
            </div>
            <div className="row">
              <Field k="email" label="Email" type="email" req />
              <Field k="phone" label="Phone" type="tel" />
            </div>
            <div className="row">
              <Field k="service" label="Service Required">
                <select id="f-service" value={f.service} onChange={set('service')}>
                  <option value="">Select a service</option>
                  {D.SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field k="budget" label="Budget Range">
                <select id="f-budget" value={f.budget} onChange={set('budget')}>
                  <option value="">Select a range</option>
                  {D.BUDGETS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
            </div>
            <Field k="message" label="Project Description" req>
              <textarea id="f-message" rows="5" value={f.message} onChange={set('message')} required aria-invalid={!!state.errors.message} />
            </Field>
            <input className="hp" tabIndex="-1" autoComplete="off" aria-hidden="true" name="website_url" value={f.website_url} onChange={set('website_url')} />
            <button className="btn btn-primary" disabled={state.status === 'sending'}>{state.status === 'sending' ? 'Sending…' : 'Send Enquiry'}</button>
            <p className={`form-msg ${state.status}`} role="status">{state.msg}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <Logo />
          <p className="foot-tag">AMPLIFY YOUR BUSINESS</p>
          <p>We design, develop and maintain digital solutions that help businesses grow.</p>
        </div>
        <nav aria-label="Company"><h3>Company</h3>
          {[['About Us', '#about'], ['Services', '#services'], ['Portfolio', '#portfolio'], ['Why Us', '#why'], ['Contact', '#contact']].map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        </nav>
        <nav aria-label="Services"><h3>Services</h3>
          {['Web Development', 'Mobile Apps', 'UI/UX', 'Software Development', 'Website Maintenance', 'AI & Automation'].map((l) => <a key={l} href="#services">{l}</a>)}
        </nav>
        <div><h3>Contact</h3><p>Hyderabad – INDIA</p><p><a href={D.PHONE_HREF}>{D.PHONE}</a></p></div>
      </div>
      <div className="container foot-bottom">
        <span>© 2026 PrituhIT Solutions. All Rights Reserved.</span>
        <span><a href="#home">Privacy Policy</a> | <a href="#home">Terms of Service</a> | <a href="/sitemap.xml">Sitemap</a></span>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <div className="sticky-cta">
      <a className="btn btn-whatsapp" href={D.WHATSAPP} target="_blank" rel="noopener noreferrer"><Icon name="chat" size={20} /> WhatsApp</a>
      <a className="btn btn-primary" href={D.PHONE_HREF}><Icon name="call" size={20} /> Call Us</a>
    </div>
  );
}
