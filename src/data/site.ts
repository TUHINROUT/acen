import type {
  NavLink,
  Service,
  WorkItem,
  TeamMember,
  EventItem,
  Testimonial,
  BlogPost,
  Client,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const phoneNumber = "800 123 4567";

export const services: Service[] = [
  {
    id: "social-media",
    title: "Social Media",
    description:
      "We build engaged communities and campaigns that carry your voice across every platform your audience calls home.",
    icon: "social",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Fast, accessible, and scalable websites engineered around the story you're trying to tell and the customers you're trying to reach.",
    icon: "web",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    description:
      "Research-led roadmaps that connect brand, content, and channel decisions into one plan your whole team can follow.",
    icon: "strategy",
  },
];

export const workItems: WorkItem[] = [
  { id: "storefront", title: "Brick & Co. Storefront", category: "Branding", tone: "brick" },
  { id: "studio-set", title: "Nocturne Studio Set", category: "Art Direction", tone: "studio" },
  { id: "brand-print", title: "Transforming Into Brands", category: "Print Campaign", tone: "print" },
];

export const teamMembers: TeamMember[] = [
  { id: "jessica", name: "Jessica Dan", role: "Support Engineer", initials: "JD" },
  { id: "olivia", name: "Olivia Smith", role: "Social Media", initials: "OS" },
  { id: "elisa", name: "Elisa Brown", role: "Lead Developer", initials: "EB" },
];

export const events: EventItem[] = [
  {
    id: "london-design",
    day: "22",
    month: "Nov 2026",
    time: "8:00 AM – 5:00 PM",
    title: "London Leading Design",
    location: "Bedford Way, London",
  },
  {
    id: "web-summit",
    day: "24",
    month: "Nov 2026",
    time: "9:00 AM – 6:00 PM",
    title: "Web Summit 2026",
    location: "Prior Velho, Lisbon",
  },
  {
    id: "sxsw",
    day: "27",
    month: "Nov 2026",
    time: "10:00 AM – 5:00 PM",
    title: "SXSW Conference",
    location: "London, UK",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "emily",
    quote:
      "Acens rebuilt our entire digital presence in six weeks and the difference in how customers talk to us online has been immediate.",
    name: "Emily Brown",
    company: "HLL Company",
  },
  {
    id: "martin",
    quote:
      "Clear communication, sharp design instincts, and a team that actually reads the brief before pitching ideas back at us.",
    name: "Martin Brown",
    company: "Consulting",
  },
];

export const blogPosts: BlogPost[] = [
  { id: "innovation-product", title: "What is innovation product design?", category: "Design", date: "Nov 12, 2026" },
  { id: "best-websites", title: "The best websites for design inspiration", category: "Inspiration", date: "Nov 08, 2026" },
  { id: "3d-art", title: "The best 3-dimensional art of the year", category: "Art", date: "Nov 02, 2026" },
];

export const clients: Client[] = [
  { id: "salming", name: "Salming" },
  { id: "rackspace", name: "Rackspace" },
  { id: "angular", name: "Angular" },
  { id: "blaster", name: "Blaster Co." },
  { id: "soundblaster", name: "Sound Blaster" },
];
