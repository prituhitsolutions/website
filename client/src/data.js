export const PHONE = '+91 9912743459';
export const PHONE_HREF = 'tel:+919912743459';
export const WHATSAPP = 'https://wa.me/919912743459?text=Hello%20PrituhIT%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project.';
export const EMAIL = 'prituhitsolutions@gmail.com';
export const SITE_URL = 'https://prituhit.in';

//export const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || '';
//export const SITE_URL = import.meta.env.VITE_SITE_URL || '';

export const NAV = [
  ['Home', '#home'], ['About Us', '#about'], ['Services', '#services'], ['Solutions', '#solutions'],
  ['Portfolio', '#portfolio'], ['Why Us', '#why'], ['Contact', '#contact'],
];

export const VALUES = [
  { icon: 'bulb', title: 'Innovative Solutions', text: 'Technology designed around your business needs.' },
  { icon: 'lifebuoy', title: 'Reliable Support', text: 'Long-term technical assistance when you need it.' },
  { icon: 'target', title: 'Business-Focused', text: 'Solutions designed to solve real business problems.' },
  { icon: 'layers', title: 'Scalable Technology', text: 'Built to grow with your business.' },
];

export const SERVICES = [
  { icon: 'globe', title: 'Website Development', text: 'Modern, responsive and high-performance websites designed to represent your brand.' },
  { icon: 'layout', title: 'Web Applications', text: 'Custom web applications built around your workflows and business requirements.' },
  { icon: 'mobile', title: 'Mobile App Development', text: 'User-friendly mobile applications for Android and iOS.' },
  { icon: 'pen', title: 'UI/UX Design', text: 'Simple, intuitive and engaging digital experiences.' },
  { icon: 'code', title: 'Software Development', text: 'Custom software solutions designed to improve business efficiency.' },
  { icon: 'gear', title: 'Website Maintenance', text: 'Continuous updates, improvements, security and technical support.' },
  { icon: 'cart', title: 'E-commerce Solutions', text: 'Scalable online stores designed for better customer experiences.' },
  { icon: 'bot', title: 'AI & Automation', text: 'Smart automation solutions that help businesses reduce repetitive work and improve productivity.' },
];

export const SOLUTIONS = [
  { key: 'web', title: 'Business Websites', text: 'Build a stronger digital presence.' },
  { key: 'software', title: 'Custom Business Software', text: 'Simplify processes and improve productivity.' },
  { key: 'transform', title: 'Digital Transformation', text: 'Move traditional workflows into efficient digital systems.' },
  { key: 'ai', title: 'AI & Automation', text: 'Automate repetitive processes and unlock new possibilities.' },
];

export const WHY = [
  ['Business Understanding', 'We focus on your actual business requirement, not just technology.'],
  ['Customized Solutions', 'Every project is designed around your specific goals.'],
  ['Modern Technology', 'We use current technologies and development practices.'],
  ['User-Centered Design', 'We create experiences that are simple and easy to use.'],
  ['Long-Term Support', "Our relationship doesn't end when the project is launched."],
  ['Transparent Communication', 'Clear communication throughout the project lifecycle.'],
];

export const STEPS = [
  ['Understand', 'We understand your business, goals and challenges.'],
  ['Plan', 'We define the technology, features, timeline and development approach.'],
  ['Build', 'Our team designs and develops your solution.'],
  ['Launch & Support', 'We launch, monitor, maintain and continuously improve your solution.'],
];

export const TECH = [
  { icon: 'layout', title: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript'] },
  { icon: 'server', title: 'Backend', items: ['Node.js', 'PHP', 'Python', 'APIs'] },
  { icon: 'mobile', title: 'Mobile', items: ['Android', 'iOS', 'Cross-platform'] },
  { icon: 'database', title: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { icon: 'cloud', title: 'Cloud & Infrastructure', items: ['Cloud', 'Hosting', 'Deployment', 'Security'] },
  { icon: 'workflow', title: 'AI & Automation', items: ['AI Integration', 'Business Automation', 'Intelligent Workflows'] },
];

export const CATEGORIES = ['All', 'Websites', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Software'];

// Shown only until real projects are published in the database.
export const PLACEHOLDER_PROJECTS = [
  { id: 'p1', title: 'Project Name', client: 'Client Name', industry: 'Industry', category: 'Websites', services: ['Design', 'Development'], description: 'Short description of the project and the result it delivered.' },
  { id: 'p2', title: 'Project Name', client: 'Client Name', industry: 'Industry', category: 'Web Apps', services: ['Development', 'Integration'], description: 'Short description of the project and the result it delivered.' },
  { id: 'p3', title: 'Project Name', client: 'Client Name', industry: 'Industry', category: 'Mobile Apps', services: ['Android', 'iOS'], description: 'Short description of the project and the result it delivered.' },
  { id: 'p4', title: 'Project Name', client: 'Client Name', industry: 'Industry', category: 'UI/UX', services: ['Research', 'Interface Design'], description: 'Short description of the project and the result it delivered.' },
  { id: 'p5', title: 'Project Name', client: 'Client Name', industry: 'Industry', category: 'Software', services: ['Custom Software'], description: 'Short description of the project and the result it delivered.' },
];

export const PLACEHOLDER_STATS = [
  { key: 'projects', label: 'Projects Delivered', value: 9, suffix: '+' },
  { key: 'clients', label: 'Businesses Supported', value: 27, suffix: '+' },
  { key: 'years', label: 'Years of Experience', value: 18, suffix: '+' },
  { key: 'satisfaction', label: 'Client Satisfaction', value: 99, suffix: '%' },
];

export const PLACEHOLDER_TESTIMONIALS = [1, 2, 3].map((i) => ({
  id: `t${i}`, quote: 'Client testimonial goes here.', author: 'Client Name', organization: 'Company / Organization', rating: 5,
}));

export const FAQS = [
  ['What services does PrituhIT Solutions provide?', 'We provide website design and development, web and mobile applications, UI/UX design, custom software, e-commerce, website maintenance and migration, IT consulting, SEO and digital marketing, and AI and automation solutions.'],
  ['Do you develop custom websites?', 'Yes. Every website is designed and built around your brand, audience and business goals, and works smoothly on phones, tablets and desktops.'],
  ['Do you provide mobile app development?', 'Yes. We build user-friendly mobile applications for Android and iOS, including cross-platform options when they suit the project.'],
  ['Can you maintain an existing website?', 'Yes. We can take over updates, security, performance improvements and technical support for a website that someone else built.'],
  ['Do you provide website migration services?', 'Yes. We can move your website to a new host, platform or technology while keeping your content and search visibility in mind.'],
  ['Can you build custom business software?', 'Yes. We build software around your own workflows, from internal tools and dashboards to full business systems.'],
  ['Do you provide ongoing technical support?', 'Yes. Support continues after launch, including monitoring, maintenance and continued improvements.'],
  ['How can I request a project quotation?', 'Use the enquiry form in the Contact section, call or WhatsApp us on +91 9912743459, and tell us about your project. We will get back to you with the next steps.'],
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title).concat(['Website Migration', 'IT Consulting', 'SEO & Digital Marketing', 'Other']);
export const BUDGETS = ['Under ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹5,00,000', '₹5,00,000+', 'Not sure yet'];
