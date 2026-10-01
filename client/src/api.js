async function request(path, options) {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(body.error || 'Request failed'), { errors: body.errors });
  return body;
}

export const getProjects = () => request('/projects');
export const getTestimonials = () => request('/testimonials');
export const getStats = () => request('/stats');
export const sendEnquiry = (data) => request('/enquiries', { method: 'POST', body: JSON.stringify(data) });
