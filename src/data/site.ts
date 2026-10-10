// All editable website content lives here.
export const contact = { email: "hello@upvik.com", whatsapp: "" }; // TODO: replace with real details

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services", href: "/services",
    sub: [
      ["Website Design", "/services#website"], ["SEO", "/services#seo"],
      ["Social Media Marketing", "/services#social"], ["Paid Ads (Meta & Google)", "/services#ads"],
      ["WhatsApp Automation", "/services#whatsapp"], ["AI Solutions", "/services#ai"],
    ],
  },
  {
    label: "Products", href: "/products",
    sub: [["Billing Software", "/products#billing"], ["Employee Tracking", "/products#tracking"], ["Communiket", "/products#communiket"]],
  },
  { label: "Our Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as { label: string; href: string; sub?: string[][] }[];

export const slides = [
  { title: "Build Your Digital Presence. Grow Your Business.", text: "From high-performing websites and SEO to social media and paid advertising, Upvik helps businesses build visibility, attract the right audience, and turn digital presence into measurable growth.", tags: "Web Design • SEO • Social Media • Meta Ads • Google Ads", a: ["Explore Digital Services", "/services"], b: ["Get Started", "/contact"] },
  { title: "Make Your Business Smarter With AI.", text: "Automate repetitive tasks, engage customers instantly, and unlock smarter workflows with AI-powered chatbots, WhatsApp automation, and custom AI integrations built around your business.", tags: "AI Chatbots • WhatsApp Automation • Custom AI Integration", a: ["Explore AI Solutions", "/services#ai"], b: ["Talk to Us", "/contact"] },
  { title: "Power Your Business With Intelligent Software.", text: "From Billing Software and employee tracking to business communication, our SaaS products simplify everyday operations and help teams work smarter, faster, and more efficiently.", tags: "Billing Software • Employee Tracking • Communiket", a: ["Explore Our Products", "/products"], b: ["Discover Upvik", "/about"] },
];

export const whatWeDo = [
  { icon: "web", title: "Website Design", text: "Convert more visitors with a fast, modern website built to build trust and generate inquiries." },
  { icon: "seo", title: "SEO", text: "Get found by the right customers with better rankings, stronger visibility, and sustainable organic traffic." },
  { icon: "social", title: "Social Media Marketing", text: "Turn social media into a growth channel that builds trust, reaches your audience, and generates opportunities." },
  { icon: "ads", title: "Paid Ads (Meta Ads & Google Ads)", text: "Reach high-intent customers, reduce wasted ad spend, and generate more quality leads through targeted campaigns." },
  { icon: "whatsapp", title: "WhatsApp Automation", text: "Automate replies and follow-ups so you respond faster, save time, and never miss a valuable lead." },
  { icon: "ai", title: "AI Solutions", text: "Automate repetitive work, improve customer interactions, and make everyday business processes smarter with AI." },
];

export const whoWeHelp = [
  ["Startups & New Businesses", "Build Your Digital Foundation", "Get your business online with a professional website, SEO, social media, digital marketing, and the technology you need to start growing.", "Website • SEO • Social Media • Ads"],
  ["Growing Businesses", "Scale Without the Complexity", "Streamline your workforce, customer communication, and daily operations with SaaS products, automation, and smart digital solutions.", "Billing Software • Employee Tracking • WhatsApp Automation"],
  ["Established Businesses", "Automate. Optimize. Grow.", "Bring AI and automation into your existing workflows to reduce repetitive work, improve efficiency, and create better customer experiences.", "AI Chatbots • AI Integration • Automation"],
  ["Agencies & Professional Services", "Deliver More With Technology", "From digital marketing capabilities to automation and SaaS tools, Upvik helps agencies and service businesses improve delivery and productivity.", "SEO • Marketing • Automation • Communiket"],
  ["Enterprise & Custom Requirements", "Technology Built Around You", "Need something beyond standard solutions? We build custom integrations, AI solutions, websites, and business technology around your specific requirements.", "Custom AI • Integrations • Business Software"],
];

export const whyUpvik = [
  ["Experience", "Since 2017", "We've grown from an SEO & SMO company into a technology-driven business delivering digital, SaaS, automation, and AI solutions."],
  ["One Technology Partner", "Digital + Technology", "From websites and digital marketing to SaaS, AI, and automation, you don't need multiple partners for every technology requirement."],
  ["Built for Real Business", "Solutions That Solve", "We don't build technology just because it's new. We focus on practical solutions that simplify operations, improve productivity, and support business growth."],
  ["AI-Powered", "Ready for What's Next", "We integrate AI into our products and services to make business processes smarter, faster, and more efficient."],
  ["Our Own Products", "Technology We Build", "Billing Software, Employee Tracking, and Communiket are examples of our commitment to building technology that addresses real-world business needs."],
  ["Long-Term Partnership", "We're Here to Grow With You", "Your requirements change as your business grows. We aim to be a technology partner that evolves with you—not just a service provider."],
];

export const faqs = [
  ["What does Upvik Technologies do?", "Upvik Technologies is a digital and technology company that provides digital marketing, website design, AI, automation, and SaaS solutions for businesses.", "We help businesses build their digital presence, attract customers, automate processes, and use technology to grow more efficiently."],
  ["Is Upvik a digital marketing company?", "Yes, Upvik is a digital marketing company offering SEO, social media marketing, website design, Meta Ads, and Google Ads.", "Our digital marketing solutions are designed to improve online visibility, reach the right audience, generate leads, and support long-term business growth."],
  ["Is Upvik an AI agency?", "Yes, Upvik works as an AI agency providing AI chatbots, AI-powered automation, and custom AI integration for businesses.", "We also integrate AI capabilities into our SaaS products to help businesses automate workflows, improve communication, and operate more efficiently."],
  ["What AI services does Upvik provide?", "Upvik provides AI chatbots, WhatsApp automation, custom AI integrations, and AI-powered business solutions.", "We develop practical AI solutions based on specific business requirements rather than using AI simply as a standalone technology."],
  ["Does Upvik provide WhatsApp automation?", "Yes, Upvik provides WhatsApp automation solutions to help businesses automate customer communication, lead management, notifications, and repetitive messaging workflows.", "Our solutions can be customized around the business's communication and automation requirements."],
];

export const serviceDetails = [
  { id: "website", icon: "web", name: "Website Design & Development", title: "Your Website Should Work as Your Best Salesperson.", text: "An outdated, slow, or confusing website can cost you valuable customers. We design fast, modern, responsive websites that build credibility and turn visitors into enquiries.", label: "We help with:", list: ["Business Websites", "Corporate Websites", "Landing Pages", "Lead Generation Websites", "E-commerce Websites", "Website Redesign", "Mobile Responsive Design"], cta: "Build My Website" },
  { id: "seo", icon: "seo", name: "Search Engine Optimization", title: "Get Found When Your Customers Are Searching.", text: "If your business isn't visible on Google, you're missing potential customers every day. Our SEO strategies improve your search visibility, rankings, traffic, and organic lead generation.", label: "We help with:", list: ["Technical SEO", "On-Page SEO", "Local SEO", "Keyword Research", "Content Optimization", "Link Building", "Google Business Profile Optimization"], cta: "Improve My Rankings" },
  { id: "social", icon: "social", name: "Social Media Marketing", title: "Turn Social Media Into a Business Growth Channel.", text: "Posting content isn't enough. We create strategic social media campaigns that help your brand reach the right audience, build trust, increase engagement, and generate business opportunities.", label: "We help with:", list: ["Social Media Strategy", "Content Planning", "Creative Design", "Reels & Video Content", "Facebook & Instagram Marketing", "Audience Engagement", "Brand Building"], cta: "Grow My Social Presence" },
  { id: "ads", icon: "ads", name: "Paid Ads — Meta & Google", title: "Stop Wasting Money on the Wrong Audience.", text: "We build and optimize performance campaigns designed to reach high-intent customers, generate quality leads, and make your advertising budget work harder.", label: "Platforms:", list: ["Google Search Ads", "Google Display Ads", "YouTube Ads", "Meta Ads", "Facebook Ads", "Instagram Ads", "Remarketing Campaigns"], cta: "Generate Better Leads" },
  { id: "whatsapp", icon: "whatsapp", name: "WhatsApp Automation", title: "Never Let a Lead Wait for a Reply.", text: "Manual replies and missed follow-ups can turn interested prospects into lost customers. Automate conversations, follow-ups, notifications, and customer communication through WhatsApp.", label: "We help automate:", list: ["Lead Responses", "Follow-ups", "Notifications", "Customer Communication", "Appointment Reminders", "Marketing Campaigns", "Sales Workflows"], cta: "Automate WhatsApp" },
  { id: "ai", icon: "ai", name: "AI Solutions", title: "Make Your Business Smarter With AI.", text: "AI shouldn't be complicated. We integrate practical AI solutions into your existing business processes to reduce repetitive work, improve customer experiences, and increase operational efficiency.", label: "We help with:", list: ["AI Chatbots", "AI Customer Support", "Custom AI Integration", "AI-powered Workflows", "Business Process Automation", "AI Content & Productivity", "AI Integration with SaaS Products"], cta: "Explore AI Solutions" },
];

export const serviceStrengths = [
  ["Digital Expertise", "Years of experience in SEO, social media, websites, and online marketing."],
  ["Technology Driven", "We don't just market technology—we build it."],
  ["Automation First", "We identify repetitive processes and look for smarter ways to automate them."],
  ["AI Ready", "We integrate practical AI where it creates real business value."],
];

export const products = [
  { id: "billing", icon: "billing", n: "01", name: "Billing Software", title: "Accounts Management, Simplified.", text: ["Managing accounts shouldn't mean managing endless spreadsheets, paperwork, and disconnected processes.", "Our Billing Software brings essential business operations together in one centralized platform, helping businesses manage their workforce more efficiently."], label: "Designed to help with:", list: ["Employee Management", "Attendance", "Inventory", "Stocks", "Billing Records", "Reports & Insights"], best: "Small Businesses • Growing Companies • Enterprises", cta: "Explore Billing Software" },
  { id: "tracking", icon: "tracking", n: "02", name: "Employee Tracking", title: "Know What's Happening. Improve How Your Team Works.", text: ["When managers don't have visibility into workforce activity and productivity, it becomes difficult to identify bottlenecks and improve performance.", "Employee Tracking helps businesses gain better visibility into work activity and workforce productivity."], label: "Designed to help with:", list: ["Employee Activity Tracking", "Productivity Monitoring", "Work Reports", "Attendance & Work Hours", "Performance Insights", "Workforce Management"], cta: "Explore Employee Tracking" },
  { id: "communiket", icon: "whatsapp", n: "03", name: "Communiket", title: "Smarter Business Communication Through WhatsApp.", text: ["Customer communication shouldn't depend on someone manually replying to every message.", "Communiket helps businesses streamline WhatsApp communication, automate conversations, manage follow-ups, and build more efficient customer communication workflows."], label: "Designed for:", list: ["WhatsApp Automation", "Customer Communication", "Lead Management", "Automated Follow-ups", "AI Chatbot", "Notifications", "Marketing Communication", "Business Workflows"], cta: "Explore Communiket" },
];

export const philosophy = ["Identify the Problem", "Build the Solution", "Automate the Process", "Add Intelligence", "Improve Continuously"];

export const projectFilters = ["All", "Web Design", "SEO", "Social Media", "Paid Ads", "Automation", "AI & Technology"];

export const projects = [
  { cat: "Web Design", name: "Website Design & Development", title: "Building Digital Experiences That Convert", text: "We design websites around more than aesthetics. Every website is created to communicate the brand clearly, build trust, provide a smooth user experience, and encourage visitors to take action.", focus: ["UX/UI", "Responsive Design", "Performance", "Conversion", "Lead Generation"] },
  { cat: "SEO", name: "SEO", title: "Turning Search Visibility Into Business Opportunities", text: "Our SEO work focuses on improving organic visibility, reaching relevant search audiences, and creating sustainable growth through search.", focus: ["Technical SEO", "Local SEO", "Content", "Rankings", "Organic Traffic"] },
  { cat: "Social Media", name: "Social Media Marketing", title: "Creating Brands People Remember", text: "We develop social media strategies and content designed to make brands more visible, relevant, and engaging.", focus: ["Strategy", "Creative", "Reels", "Engagement", "Brand Awareness"] },
  { cat: "Paid Ads", name: "Paid Advertising", title: "From Ad Clicks to Quality Leads", text: "We create performance campaigns focused on reaching the right audience and turning advertising budgets into measurable business opportunities.", focus: ["Meta Ads", "Google Ads", "Lead Generation", "Remarketing", "Campaign Optimization"] },
  { cat: "Automation", name: "Automation", title: "Replacing Repetitive Work With Intelligent Workflows", text: "We build automation systems that help businesses respond faster, reduce manual tasks, and create smoother customer journeys.", focus: ["WhatsApp", "Lead Automation", "Follow-ups", "Notifications", "Workflows"] },
  { cat: "AI & Technology", name: "AI & Technology", title: "Building Smarter Digital Solutions", text: "We integrate AI and technology into business processes and software products to improve efficiency, customer interaction, and automation.", focus: ["AI Chatbots", "AI Integration", "SaaS", "Automation", "Intelligent Workflows"] },
];

export const caseSteps = [
  ["The Challenge", "What problem was the business facing?"],
  ["The Strategy", "What approach did Upvik take?"],
  ["The Solution", "What did we design, develop, optimize, or automate?"],
  ["The Outcome", "What changed after implementation?"],
];

export const evolution = [
  ["2017", "Digital Marketing", "Started with SEO & SMO, helping businesses improve their visibility and reach online."],
  ["2019", "Web & Digital Experiences", "Expanded into Website Design & Development to create complete digital solutions for businesses."],
  ["2024", "SaaS Products", "Developed our own technology products, including Billing Software, Employee Tracking, and Communiket."],
  ["2025", "AI & Automation", "Integrated AI into our products and services to create smarter, more efficient and automated business solutions."],
];

export const capabilities = ["Website Design & Development", "Search Engine Optimization (SEO)", "Social Media Marketing", "Meta & Google Ads", "WhatsApp Automation", "AI Chatbots", "Custom AI Integration", "SaaS Product Development", "Business Process Automation"];
