CREATE TABLE IF NOT EXISTS enquiries (
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(120) NOT NULL,
  company     VARCHAR(160),
  email       VARCHAR(160) NOT NULL,
  phone       VARCHAR(40),
  service     VARCHAR(120),
  budget      VARCHAR(80),
  message     TEXT NOT NULL,
  status      VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id           SERIAL PRIMARY KEY,
  title        VARCHAR(160) NOT NULL,
  client       VARCHAR(160),
  industry     VARCHAR(120),
  category     VARCHAR(20) NOT NULL CHECK (category IN ('Websites','Web Apps','Mobile Apps','UI/UX','Software')),
  services     TEXT[] NOT NULL DEFAULT '{}',
  description  TEXT,
  image_url    TEXT,
  project_url  TEXT,
  published    BOOLEAN NOT NULL DEFAULT false,
  sort_order   INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS testimonials (
  id            SERIAL PRIMARY KEY,
  quote         TEXT NOT NULL,
  author        VARCHAR(120) NOT NULL,
  organization  VARCHAR(160),
  rating        INT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  published     BOOLEAN NOT NULL DEFAULT false,
  sort_order    INT NOT NULL DEFAULT 0
);

-- Only real, verified numbers. value stays NULL until the business supplies it.
CREATE TABLE IF NOT EXISTS site_stats (
  key        VARCHAR(40) PRIMARY KEY,
  label      VARCHAR(80) NOT NULL,
  value      NUMERIC,
  suffix     VARCHAR(4) NOT NULL DEFAULT '+',
  sort_order INT NOT NULL DEFAULT 0
);

INSERT INTO site_stats (key,label,suffix,sort_order) VALUES
  ('projects','Projects Delivered','+',1),
  ('clients','Businesses Supported','+',2),
  ('years','Years of Experience','+',3),
  ('satisfaction','Client Satisfaction','%',4)
ON CONFLICT (key) DO NOTHING;
