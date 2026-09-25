export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "social" | "web" | "strategy";
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  tone: "brick" | "studio" | "print";
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  initials: string;
};

export type EventItem = {
  id: string;
  day: string;
  month: string;
  time: string;
  title: string;
  location: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
};

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  date: string;
};

export type Client = {
  id: string;
  name: string;
};
