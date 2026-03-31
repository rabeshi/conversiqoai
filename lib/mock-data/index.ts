import {
  Activity,
  BellRing,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CreditCard,
  Database,
  Factory,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  MessageSquare,
  MessagesSquare,
  Network,
  ShoppingBag,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
];

export const solutionMenuItems = [
  { label: "Education", href: "/solutions/education" },
  { label: "Customer Service", href: "/solutions/customer-service" },
  { label: "Enterprises", href: "/solutions/enterprise" },
  { label: "Healthcare", href: "/solutions/healthcare" },
  { label: "Insurance", href: "/solutions/insurance" },
  { label: "Real Estate", href: "/solutions/real-estate" },
  { label: "Recruitment", href: "/solutions/recruitment" },
  { label: "Sales", href: "/solutions/sales" },
  { label: "Small Business", href: "/solutions/small-business" },
  { label: "Government", href: "/solutions/government" },
  { label: "IT Support", href: "/solutions/it-support" },
];

export const aboutMenuItems = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const trustLogos = [
  { id: "northbridge", name: "Northbridge Capital" },
  { id: "kestrel", name: "Kestrel Health" },
  { id: "meridian", name: "Meridian Retail" },
  { id: "summitgov", name: "SummitGov" },
  { id: "atlas", name: "Atlas Systems" },
  { id: "blueharbor", name: "BlueHarbor EDU" },
];

export const humanUsecaseSlides = [
  {
    title: "Desktop chatbot command view",
    person: "Amara",
    role: "Head of Support, Retail",
    device: "Desktop",
    image: "support-ops",
    quote:
      "Amara watches the chatbot handle order status, refund policy, and delivery questions on her PC, only stepping in when the thread turns sensitive or high value.",
    outcome: "31% fewer manual handoffs during peak traffic with the chatbot covering routine demand",
  },
  {
    title: "Mobile lead qualification flow",
    person: "Daniel",
    role: "Revenue Operations, Financial Services",
    device: "Mobile",
    image: "lead-funnel",
    quote:
      "Daniel checks the chatbot's pricing conversations between meetings, sees which prospects asked the right buying questions, and routes the best opportunities before they cool off.",
    outcome: "22% faster response to chatbot-qualified inbound demand",
  },
  {
    title: "Tablet escalation review board",
    person: "Leila",
    role: "Regional Operations, Healthcare",
    device: "Tablet",
    image: "care-escalation",
    quote:
      "Leila uses a tablet to review unresolved chatbot conversations during rounds, approve escalations, and confirm the next patient-facing response is aligned with policy.",
    outcome: "Smoother chatbot-assisted follow-up across frontline teams and supervisors",
  },
];

export const heroMetrics = [
  { label: "Avg. resolution lift", value: "38%" },
  { label: "Faster first response", value: "52%" },
  { label: "Channels unified", value: "8+" },
];

export const featureHighlights = [
  {
    title: "Purpose-built agents for every team",
    copy: "Launch agents for support, sales, onboarding, and internal help with clear roles from day one.",
    icon: Bot,
  },
  {
    title: "Reporting leaders can actually use",
    copy: "Track volume, speed, resolution, handoffs, and conversion in one clear dashboard.",
    icon: LayoutDashboard,
  },
  {
    title: "Multi-language support",
    copy: "Support customers across regions with clear, consistent replies in the languages they use.",
    icon: Globe,
  },
];

export const humanMoments = [
  {
    title: "A support supervisor catching churn risk before it spreads",
    copy:
      "When negative sentiment spikes, Conversiqo surfaces the thread, brings in the right history, and gives the manager a faster path to intervention.",
    stat: "14 min faster escalation response",
  },
  {
    title: "A sales operator triaging high-intent buyers before the handoff",
    copy:
      "Lead conversations are summarized with intent, urgency, company context, and next-best action so account teams walk in prepared instead of reactive.",
    stat: "27% lift in qualified handoff quality",
  },
  {
    title: "An onboarding lead keeping every new customer on track",
    copy:
      "Conversiqo answers setup questions instantly, flags blockers, and keeps the human team focused on moments that actually need guidance or reassurance.",
    stat: "41% fewer onboarding bottlenecks",
  },
];

export const homepageUsecases = [
  {
    title: "Retail support",
    icon: Store,
    scenario: "A customer wants to track an order, confirm delivery timing, and understand return options without waiting for support.",
    response: "The agent resolves the routine questions instantly, keeps the shopper informed, and brings in a human only when the issue risks churn or lost revenue.",
  },
  {
    title: "Healthcare operations",
    icon: HeartPulse,
    scenario: "A patient needs appointment guidance after business hours.",
    response: "The assistant handles triage questions, captures context, and routes anything urgent into the next available human queue.",
  },
  {
    title: "Financial services",
    icon: Landmark,
    scenario: "A prospect wants enterprise pricing and rollout timing from mobile.",
    response: "Conversiqo qualifies the lead, summarizes intent, and syncs the next step to the revenue team without losing the conversation trail.",
  },
  {
    title: "Education support",
    icon: GraduationCap,
    scenario: "A student asks about deadlines, admissions steps, and missing documents late in the evening.",
    response: "The assistant answers common enrollment questions, captures intent, and routes high-friction cases to staff with the right context already attached.",
  },
  {
    title: "Industrial operations",
    icon: Factory,
    scenario: "A field team member needs maintenance guidance and part availability from a tablet on the floor.",
    response: "Conversiqo surfaces the right operational knowledge, flags urgency, and helps supervisors step in only when the issue affects uptime or safety.",
  },
  {
    title: "Government services",
    icon: ShieldCheck,
    scenario: "A resident wants to check application status, confirm required documents, and understand the next step without calling the office.",
    response: "The agent explains the process clearly, pulls the right public guidance, and routes complex cases to the correct department with the request context intact.",
  },
];

export const industrySolutions = [
  {
    title: "Customer Service",
    slug: "customer-service",
    icon: MessageSquare,
    useCases: ["Ticket deflection", "After-hours coverage", "Escalation routing"],
    painPoints: "Keep support volume under control without losing context or service quality.",
  },
  {
    title: "Enterprise",
    slug: "enterprise",
    icon: Briefcase,
    useCases: ["Multi-team orchestration", "Governance controls", "Executive reporting"],
    painPoints: "Standardize AI across teams without creating operational sprawl.",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    icon: HeartPulse,
    useCases: ["Patient intake", "Appointment triage", "Benefits guidance"],
    painPoints: "Reduce call volume, speed up triage, and keep follow-up consistent.",
  },
  {
    title: "Insurance",
    slug: "insurance",
    icon: ShieldCheck,
    useCases: ["Claims intake", "Policy questions", "Agent-assisted escalation"],
    painPoints: "Handle claims and policy questions faster without losing compliance discipline.",
  },
  {
    title: "Finance",
    slug: "finance",
    icon: Landmark,
    useCases: ["Client onboarding", "Policy inquiries", "Fraud escalation"],
    painPoints: "Improve response speed while keeping financial guidance clear and compliant.",
  },
  {
    title: "E-commerce",
    slug: "e-commerce",
    icon: ShoppingBag,
    useCases: ["Order support", "Product discovery", "Post-purchase care"],
    painPoints: "Convert more shoppers, cut repetitive tickets, and keep checkout moving.",
  },
  {
    title: "Education",
    slug: "education",
    icon: GraduationCap,
    useCases: ["Admissions support", "Student services", "Knowledge retrieval"],
    painPoints: "Answer student questions quickly without overwhelming admissions and support teams.",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    icon: Building2,
    useCases: ["Lead capture", "Viewing scheduling", "Portfolio Q&A"],
    painPoints: "Qualify leads faster and keep follow-up consistent across agents and regions.",
  },
  {
    title: "Recruitment",
    slug: "recruitment",
    icon: Users,
    useCases: ["Candidate screening", "Interview coordination", "Applicant FAQs"],
    painPoints: "Reduce recruiter admin while keeping candidate communication fast and polished.",
  },
  {
    title: "Sales",
    slug: "sales",
    icon: MessageSquare,
    useCases: ["Lead qualification", "Pricing discovery", "Demo booking"],
    painPoints: "Capture intent faster and move serious buyers to the right next step.",
  },
  {
    title: "Small Business",
    slug: "small-business",
    icon: Store,
    useCases: ["Website assistant", "Lead capture", "FAQ automation"],
    painPoints: "Offer always-on coverage without adding headcount for repetitive requests.",
  },
  {
    title: "Government",
    slug: "government",
    icon: ShieldCheck,
    useCases: ["Citizen services", "Document guidance", "Case triage"],
    painPoints: "Improve access to public information while keeping service standards clear.",
  },
  {
    title: "IT Support",
    slug: "it-support",
    icon: Network,
    useCases: ["Internal helpdesk", "Policy lookup", "Access requests"],
    painPoints: "Speed up internal support with agents that understand systems and approved knowledge.",
  },
];

export const solutionPages = {
  healthcare: {
    title: "Healthcare",
    eyebrow: "Healthcare solution",
    headline: "Speed up patient support",
    copy:
      "Conversiqo helps healthcare teams answer common patient questions, guide scheduling and intake, and escalate urgent issues with the right clinical and operational context already attached.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps patient access teams create a calmer front door for scheduling, intake, and triage.",
    stats: [
      { label: "Faster intake triage", value: "46%" },
      { label: "After-hours coverage", value: "24/7" },
      { label: "Escalation confidence", value: "92%" },
    ],
    scenarios: [
      "A patient asks after hours whether their appointment can be moved and what paperwork is needed.",
      "A call center lead needs routine benefits and intake questions answered without pulling nurses into low-acuity requests.",
      "A regional manager wants a clearer view into which service questions still require human review.",
    ],
    mockChat: {
      promptLabel: "Appointment help",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you looking for appointment scheduling, referral guidance, or admission support today?" },
        { speaker: "customer", text: "I need help rescheduling my admission appointment and checking what documents I need to bring." },
        { speaker: "assistant", text: "I can help with that. I’ll collect your appointment details, confirm the required paperwork, and route urgent clinical questions to the right team if needed." },
      ],
    },
  },
  finance: {
    title: "Finance",
    eyebrow: "Finance solution",
    headline: "Move client conversations from generic intake to qualified, better-routed financial guidance",
    copy:
      "Use Conversiqo to qualify financial inquiries, answer common service questions, and hand off serious account, onboarding, or advisory conversations with cleaner intent and context.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps turn early financial inquiries into clearer next steps for clients and advisors.",
    stats: [
      { label: "Qualified lead response", value: "22%" },
      { label: "Policy inquiry deflection", value: "37%" },
      { label: "Handoff readiness", value: "89%" },
    ],
    scenarios: [
      "A prospect asks for enterprise pricing and onboarding timing from mobile while comparing providers.",
      "A service team wants common policy questions resolved instantly before escalating edge cases.",
      "A revenue operations lead wants higher-quality context before an advisor joins the thread.",
    ],
    mockChat: {
      promptLabel: "Client onboarding",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you here for account opening, onboarding support, or pricing for a financial service rollout?" },
        { speaker: "customer", text: "I’m comparing providers and want to understand onboarding timing plus what documents are needed to open an account." },
        { speaker: "assistant", text: "I can guide you through the onboarding steps, required documentation, and the fastest path to speak with an advisor if your case needs review." },
      ],
    },
  },
  "e-commerce": {
    title: "E-commerce",
    eyebrow: "E-commerce solution",
    headline: "Support shoppers, recover abandoned demand, and keep post-purchase questions out of the queue",
    copy:
      "Conversiqo helps retail teams answer order and returns questions, guide product discovery, and recover carts with a customer experience that still feels branded and human.",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps keep shoppers moving from question to checkout without losing the post-purchase experience.",
    stats: [
      { label: "Cart recovery lift", value: "18%" },
      { label: "Support deflection", value: "33%" },
      { label: "Peak-hour coverage", value: "8 channels" },
    ],
    scenarios: [
      "A shopper checks order status, shipping options, and refund policy from the website widget in one conversation.",
      "A support supervisor wants negative sentiment routed faster during a flash sale.",
      "A growth team needs more revenue signal from product questions and abandoned carts.",
    ],
    mockChat: {
      promptLabel: "Order support",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Do you need help with an order, a return, or finding the right product?" },
        { speaker: "customer", text: "I want to check my order status and ask if I can exchange the size once it arrives." },
        { speaker: "assistant", text: "I can help with both. Let’s pull your order details first, then I’ll walk you through the exchange policy and next steps." },
      ],
    },
  },
  education: {
    title: "Admissions and Student Support",
    eyebrow: "Education solution",
    headline: "Answer student questions fast",
    copy:
      "Conversiqo handles deadline questions, document checks, admissions guidance, and routine student support before they turn into inbox volume.",
    heroImage: "/images/education-hero.png",
    stats: [
      { label: "Faster admissions replies", value: "44%" },
      { label: "Student questions handled", value: "81%" },
      { label: "Service quality", value: "4.7/5" },
    ],
    scenarios: [
      "A prospective student asks about deadlines, required documents, and transfer eligibility from mobile.",
      "Student services wants routine enrollment and policy questions resolved before they hit the inbox.",
      "Operations needs a clear view of the questions students keep asking but cannot find on the site.",
    ],
    heroCaption: "Conversiqo helps admissions and student support stay responsive during peak application volume.",
    scenariosDescription: "Three common moments where the assistant removes repetitive work and speeds up answers.",
    mockChat: {
      promptLabel: "Admissions help",
      description: "A tighter first-touch admissions flow for prospective students.",
      messages: [
        { speaker: "assistant", text: "Are you asking about admissions, financial aid, or student support?" },
        { speaker: "customer", text: "Admissions. I need the deadline, required documents, and transfer criteria." },
        { speaker: "assistant", text: "I can help with that. I’ll show the requirements, the next step, and where to apply." },
      ],
    },
    positioningTitle: "Why this works for education",
    positioningDescription: "The page should feel operational, credible, and easy to understand.",
    positioningPoints: [
      "Students get fast answers without waiting on staff.",
      "Admissions and support teams spend less time on repetitive questions.",
      "Leaders can see where demand is rising and where content is missing.",
    ],
  },
  "customer-service": {
    title: "Customer Service",
    eyebrow: "Customer service solution",
    headline: "Deliver faster, more consistent support",
    copy:
      "Conversiqo gives service teams a cleaner front door for support by handling routine questions instantly, gathering the right details up front, and escalating only when a person truly adds value.",
    heroImage: "/images/customer-service-hero.png",
    heroCaption: "Conversiqo helps deflect routine support volume while preserving a higher-touch path for exceptions.",
    stats: [
      { label: "Ticket deflection", value: "34%" },
      { label: "First reply speed", value: "58%" },
      { label: "Escalation context", value: "93%" },
    ],
    scenarios: [
      "A customer wants refund policy guidance, order updates, and the right escalation path in one conversation.",
      "A support lead needs after-hours coverage without leaving the morning team buried in low-signal tickets.",
      "An operations manager wants to spot recurring failure points before they spread across channels.",
    ],
    mockChat: {
      promptLabel: "Support request",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you reaching out about a refund, account issue, or order problem?" },
        { speaker: "customer", text: "I need help with a refund and I also want to know why my order still hasn’t shipped." },
        { speaker: "assistant", text: "I can guide you through both. I’ll collect the order details, check the status, and route you to a support specialist if this needs an exception review." },
      ],
    },
  },
  enterprise: {
    title: "Enterprise",
    eyebrow: "Enterprise solution",
    headline: "Run AI across teams with control",
    copy:
      "Conversiqo helps enterprise teams deploy AI across support, sales, onboarding, and internal operations while keeping permissions, analytics, and launch standards under one operating model.",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps coordinate AI across departments without turning rollout into organizational sprawl.",
    stats: [
      { label: "Departments aligned", value: "12+" },
      { label: "Workspace visibility", value: "1 view" },
      { label: "Launch readiness", value: "6 weeks" },
    ],
    scenarios: [
      "A digital transformation lead wants one platform for multiple departments rather than disconnected automation pilots.",
      "A regional operator needs role-based permissions and clean reporting across brands or business units.",
      "An executive team wants a buyer-ready AI story without sacrificing implementation credibility.",
    ],
    mockChat: {
      promptLabel: "Enterprise rollout",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you exploring enterprise deployment, security controls, or cross-team rollout planning?" },
        { speaker: "customer", text: "We want to roll this out across support and sales first, and we need to understand permissions plus reporting for leadership." },
        { speaker: "assistant", text: "That’s a strong starting point. I can outline a phased enterprise rollout with governance controls, reporting views, and team-specific agent coverage." },
      ],
    },
  },
  insurance: {
    title: "Insurance",
    eyebrow: "Insurance solution",
    headline: "Handle claims and policy questions faster",
    copy:
      "Conversiqo helps insurance teams guide claims intake, answer policy questions, and escalate sensitive cases with cleaner context so licensed and specialist staff can step in faster.",
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps guide policyholders from first notice to next action with less friction and fewer handoffs.",
    stats: [
      { label: "Claims intake speed", value: "39%" },
      { label: "Policy question coverage", value: "76%" },
      { label: "Escalation precision", value: "91%" },
    ],
    scenarios: [
      "A policyholder wants to understand next steps after an incident without waiting on hold.",
      "A service team needs routine billing and coverage questions answered before they reach licensed staff.",
      "An operations lead wants better consistency across broker, member, and claims communications.",
    ],
    mockChat: {
      promptLabel: "Claims intake",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Do you need help with a claim, a policy question, or billing support?" },
        { speaker: "customer", text: "I need to start a claim after an accident and I’m not sure what information you need from me." },
        { speaker: "assistant", text: "I can help you begin the claims process, collect the required details, and connect you with a specialist if the case needs immediate review." },
      ],
    },
  },
  "real-estate": {
    title: "Real Estate",
    eyebrow: "Real estate solution",
    headline: "Turn property interest into qualified leads",
    copy:
      "Conversiqo helps brokerages and property teams qualify inquiries, answer listing questions, schedule showings, and keep serious buyers or renters moving toward the next step.",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps convert listing interest into scheduled viewings and better-qualified follow-up.",
    stats: [
      { label: "Lead qualification", value: "29%" },
      { label: "Viewing speed", value: "2x" },
      { label: "Missed inquiries reduced", value: "43%" },
    ],
    scenarios: [
      "A potential buyer asks about price, location details, and viewing availability from mobile late at night.",
      "A brokerage wants listings covered consistently across website, WhatsApp, and lead forms.",
      "A team lead wants better signal on which prospects are serious before assigning follow-up.",
    ],
    mockChat: {
      promptLabel: "Property inquiry",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you asking about a property viewing, pricing, or rental availability?" },
        { speaker: "customer", text: "I’m interested in scheduling a viewing and I want to know if the property is still available this month." },
        { speaker: "assistant", text: "I can help with that. I’ll confirm availability, collect your preferred time, and pass the lead to an agent with the full conversation attached." },
      ],
    },
  },
  recruitment: {
    title: "Recruitment",
    eyebrow: "Recruitment solution",
    headline: "Keep candidate communication fast",
    copy:
      "Conversiqo gives talent teams a smarter front line for candidate questions, screening, interview coordination, and recruiter handoff without making applicants feel like they are talking to a wall.",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps keep candidate momentum high from first question to interview coordination.",
    stats: [
      { label: "Candidate response speed", value: "47%" },
      { label: "Screening efficiency", value: "31%" },
      { label: "Recruiter time saved", value: "11 hrs" },
    ],
    scenarios: [
      "An applicant wants to know interview timing, role expectations, and status updates without waiting for email.",
      "A recruiting team needs to screen for basic fit and availability before human review.",
      "A talent lead wants candidate questions handled consistently across regions and hiring managers.",
    ],
    mockChat: {
      promptLabel: "Candidate screening",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you applying for a role, checking your status, or scheduling an interview?" },
        { speaker: "customer", text: "I’m applying for the operations role and I want to know whether you’re still accepting applications and what the interview process looks like." },
        { speaker: "assistant", text: "I can help with that. I’ll walk you through the hiring steps, capture your availability, and answer common application questions before a recruiter steps in." },
      ],
    },
  },
  sales: {
    title: "Sales",
    eyebrow: "Sales solution",
    headline: "Capture buying intent earlier",
    copy:
      "Conversiqo helps revenue teams qualify inbound demand, answer early buying questions, and move qualified prospects toward demos or consultative conversations without losing momentum.",
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps catch buying intent early and turn curiosity into qualified pipeline.",
    stats: [
      { label: "Lead response speed", value: "51%" },
      { label: "Demo booking lift", value: "24%" },
      { label: "Handoff quality", value: "90%" },
    ],
    scenarios: [
      "A prospect wants pricing guidance, rollout timing, and integration fit before they are ready to talk to a rep.",
      "A revenue operations team wants better intent capture before assigning leads.",
      "A sales manager wants a more consistent first-touch experience across campaigns and channels.",
    ],
    mockChat: {
      promptLabel: "Demo request",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you looking for pricing, a product demo, or help comparing plans?" },
        { speaker: "customer", text: "I want to book a demo and understand which plan fits a team handling support plus inbound sales." },
        { speaker: "assistant", text: "I can help qualify that quickly. I’ll ask a few rollout questions, suggest the right plan range, and help you book the best next step with sales." },
      ],
    },
  },
  "small-business": {
    title: "Small Business",
    eyebrow: "Small business solution",
    headline: "Give small teams better coverage",
    copy:
      "Conversiqo helps lean teams answer FAQs, capture bookings or leads, and stay responsive across channels without adding complicated setup or constant manual follow-up.",
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps give lean teams a polished front desk that works even when no one is online.",
    stats: [
      { label: "Coverage hours", value: "24/7" },
      { label: "Routine questions automated", value: "68%" },
      { label: "Lead capture lift", value: "19%" },
    ],
    scenarios: [
      "A local service business wants to answer FAQs and capture bookings when the team is offline.",
      "An owner needs a polished website assistant without a large implementation project.",
      "A small team wants fewer repetitive inbox requests and more time for revenue work.",
    ],
    mockChat: {
      promptLabel: "Business inquiry",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you asking about a service, booking availability, or pricing?" },
        { speaker: "customer", text: "I want to know your pricing and whether I can book an appointment for next week." },
        { speaker: "assistant", text: "Absolutely. I can share the pricing options, check availability, and help move this straight into a booking request." },
      ],
    },
  },
  government: {
    title: "Government",
    eyebrow: "Government solution",
    headline: "Improve citizen access to information",
    copy:
      "Conversiqo helps public service teams answer common resident questions, explain document requirements, and route more complex requests to the correct office without losing the service trail.",
    heroImage:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps make public-service questions easier to navigate without sending residents in circles.",
    stats: [
      { label: "Inquiry resolution", value: "36%" },
      { label: "Wait-time reduction", value: "42%" },
      { label: "Routing clarity", value: "88%" },
    ],
    scenarios: [
      "A resident needs help understanding permit requirements and the next document to submit.",
      "A public service team wants repetitive inquiries answered without overwhelming the call center.",
      "A department lead wants better visibility into recurring citizen requests and service gaps.",
    ],
    mockChat: {
      promptLabel: "Resident services",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Do you need help with a permit, documents, or application status?" },
        { speaker: "customer", text: "I’m applying for a permit and I want to know which documents I still need to submit." },
        { speaker: "assistant", text: "I can help you review the application requirements, identify missing documents, and guide you to the correct department if anything needs manual review." },
      ],
    },
  },
  "it-support": {
    title: "IT Support",
    eyebrow: "IT support solution",
    headline: "Resolve internal requests faster",
    copy:
      "Conversiqo gives IT teams a more effective self-service front line for password resets, access requests, device support, and policy lookup while preserving clean escalation to specialists.",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    heroCaption: "Conversiqo helps take pressure off the helpdesk by resolving common access and device issues up front.",
    stats: [
      { label: "Self-service success", value: "71%" },
      { label: "Ticket triage speed", value: "49%" },
      { label: "Policy lookup time", value: "-63%" },
    ],
    scenarios: [
      "An employee needs password-reset guidance and VPN help outside business hours.",
      "An IT manager wants repetitive device and access questions handled automatically before ticket creation.",
      "An operations lead wants better routing between self-service, service desk, and specialist teams.",
    ],
    mockChat: {
      promptLabel: "Access support",
      messages: [
        { speaker: "assistant", text: "Welcome to Conversiqo AI. Are you here for account access, device support, or an internal IT policy question?" },
        { speaker: "customer", text: "I need access to a new tool and I’m also locked out of VPN on my laptop." },
        { speaker: "assistant", text: "I can help with both. I’ll gather the access details, walk through the approved VPN steps, and escalate anything that needs an IT technician." },
      ],
    },
  },
} as const;

export const testimonials = [
  {
    quote:
      "Conversiqo AI helped us move from fragmented automations to one operational system our teams actually trust.",
    author: "Priya S.",
    role: "VP Customer Experience, Meridian Retail",
  },
  {
    quote:
      "The dashboard gives our leadership team immediate visibility into agent performance, handoff quality, and channel demand.",
    author: "Aaron D.",
    role: "Chief Digital Officer, Northbridge Capital",
  },
  {
    quote:
      "We can demo a new use case in days, not quarters, and the experience still feels enterprise-ready.",
    author: "Melissa G.",
    role: "Director of Service Operations, Kestrel Health",
  },
];

export const resources = [
  {
    title: "Designing a high-conversion AI support funnel",
    category: "Guide",
    readTime: "8 min read",
    excerpt: "A practical framework for combining knowledge retrieval, agent routing, and handoff thresholds in customer support.",
  },
  {
    title: "How enterprise teams measure conversational ROI",
    category: "Case Study",
    readTime: "5 min read",
    excerpt: "The scorecards leading operators use to evaluate resolution quality, revenue impact, and operational savings.",
  },
  {
    title: "Conversiqo AI Widget SDK overview",
    category: "API Docs",
    readTime: "Documentation",
    excerpt: "Mock API references, embed patterns, and event hooks for client-side widget customization.",
  },
  {
    title: "Rolling out AI agents across regulated industries",
    category: "Article",
    readTime: "6 min read",
    excerpt: "Governance, review paths, and launch controls that keep enterprise teams moving with confidence.",
  },
];

export const enterprisePillars = [
  {
    title: "Security posture messaging",
    copy: "Position policy controls, workspace permissions, and environment segmentation in a way procurement teams expect.",
    icon: ShieldCheck,
  },
  {
    title: "Operational scalability",
    copy: "Support growing agent portfolios, multiple departments, and region-specific workflows from a single workspace.",
    icon: Briefcase,
  },
  {
    title: "Audit visibility",
    copy: "Track agent changes, content sync history, workflow events, and channel rollouts with clear operational context.",
    icon: Activity,
  },
  {
    title: "Onboarding and support",
    copy: "Give prospects confidence with guided rollout plans, documented success milestones, and premium support positioning.",
    icon: LifeBuoy,
  },
];

export const leadership = [
  { name: "Elena Brooks", role: "Chief Executive Officer" },
  { name: "Marcus Lin", role: "Chief Product Officer" },
  { name: "Nadia Sterling", role: "VP Enterprise Strategy" },
];

export const timeline = [
  { year: "2021", title: "Conversiqo founded", copy: "Built to give business teams a serious alternative to chat widgets and brittle automations." },
  { year: "2023", title: "First enterprise rollouts", copy: "Expanded from single-channel support bots into multi-agent orchestration and analytics." },
  { year: "2025", title: "Unified workspace launch", copy: "Introduced the full Conversiqo AI platform experience across deployment, monitoring, and governance." },
];

export const dashboardStats = [
  { label: "Total conversations", value: "184,320", delta: "+14.8%" },
  { label: "Active agents", value: "12", delta: "+3 this quarter" },
  { label: "Leads captured", value: "3,428", delta: "+18.2%" },
  { label: "Avg. response time", value: "8.2s", delta: "-21%" },
  { label: "Resolution rate", value: "83.4%", delta: "+6.4 pts" },
  { label: "CSAT score", value: "4.7/5", delta: "+0.3" },
  { label: "Top channel", value: "Website widget", delta: "41% of volume" },
  { label: "Knowledge sources", value: "94", delta: "+12 synced" },
];

export const conversationTrend = [
  { name: "Mon", conversations: 4200, users: 3100, resolved: 82 },
  { name: "Tue", conversations: 4600, users: 3280, resolved: 84 },
  { name: "Wed", conversations: 4890, users: 3460, resolved: 83 },
  { name: "Thu", conversations: 5210, users: 3620, resolved: 85 },
  { name: "Fri", conversations: 5800, users: 3980, resolved: 86 },
  { name: "Sat", conversations: 4310, users: 2890, resolved: 80 },
  { name: "Sun", conversations: 3900, users: 2610, resolved: 79 },
];

export const channelDistribution = [
  { name: "Widget", value: 41 },
  { name: "WhatsApp", value: 17 },
  { name: "Email", value: 13 },
  { name: "Slack", value: 11 },
  { name: "Instagram", value: 9 },
  { name: "Shopify", value: 9 },
];

export const recentActivity = [
  "Lead qualification workflow updated for the sales agent.",
  "Policy knowledge collection reindexed after FAQ additions.",
  "Website widget published with updated greeting and blue accent theme.",
  "High-sentiment support conversation escalated to human success manager.",
];

export const topIntents = [
  { name: "Pricing", volume: "18.2%" },
  { name: "Order status", volume: "15.7%" },
  { name: "Onboarding help", volume: "13.1%" },
  { name: "Billing updates", volume: "10.6%" },
];

export const agentCards = [
  {
    name: "Concierge",
    tone: "Consultative",
    role: "Lead qualification",
    status: "Live",
    channels: ["Widget", "WhatsApp", "Email"],
    performance: "27% lead conversion",
    updated: "12 minutes ago",
  },
  {
    name: "Resolve",
    tone: "Calm and direct",
    role: "Customer support",
    status: "Live",
    channels: ["Widget", "Instagram"],
    performance: "88% resolution rate",
    updated: "1 hour ago",
  },
  {
    name: "Atlas",
    tone: "Professional",
    role: "Internal assistant",
    status: "Draft",
    channels: ["Slack", "Internal assistant"],
    performance: "71% employee self-service",
    updated: "Yesterday",
  },
];

export const knowledgeSources = [
  { name: "Help Center Articles", type: "Website", status: "Ready", items: 48, updated: "5 min ago" },
  { name: "Pricing FAQ", type: "FAQ", status: "Syncing", items: 12, updated: "Now" },
  { name: "Customer Playbooks.pdf", type: "File", status: "Ready", items: 6, updated: "45 min ago" },
  { name: "Onboarding Q&A", type: "Q&A", status: "Needs review", items: 22, updated: "2 hours ago" },
];

export const conversations = [
  {
    customer: "Ava Simmons",
    channel: "Website",
    summary: "Asked about enterprise pricing and deployment timeline.",
    sentiment: "Positive",
    status: "Open",
    assignee: "Sales Team",
  },
  {
    customer: "Jordan Wells",
    channel: "Email",
    summary: "Needed order tracking details and refund policy clarification.",
    sentiment: "Neutral",
    status: "Resolved",
    assignee: "Support Team",
  },
  {
    customer: "Riley Chen",
    channel: "WhatsApp",
    summary: "Escalated after repeated unanswered compliance question.",
    sentiment: "Negative",
    status: "Escalated",
    assignee: "Ops Lead",
  },
];

export const transcript = [
  { speaker: "agent", text: "Welcome to Conversiqo AI. I can help with pricing, deployment, or product questions." },
  { speaker: "user", text: "We need an AI support agent for two brands and want to understand rollout timing." },
  { speaker: "agent", text: "We typically structure rollout in phases: knowledge setup, channel deployment, and optimization. Would you like a sample implementation timeline?" },
  { speaker: "user", text: "Yes, and can you include how analytics works for leadership reporting?" },
];

export const analyticsHighlights = [
  { label: "Unique users", value: "42,118" },
  { label: "Handoff rate", value: "12.1%" },
  { label: "Lead conversion", value: "19.4%" },
  { label: "Avg. latency", value: "1.2s" },
];

export const busiestHours = [
  { hour: "8AM", volume: 32 },
  { hour: "10AM", volume: 54 },
  { hour: "12PM", volume: 70 },
  { hour: "2PM", volume: 65 },
  { hour: "4PM", volume: 48 },
  { hour: "6PM", volume: 28 },
];

export const topQuestions = [
  "How do I deploy the widget to multiple websites?",
  "Can the agent hand off conversations to a human?",
  "How do I update knowledge sources?",
  "What analytics are available for leadership teams?",
];

export const channels = [
  { name: "Website widget", status: "Connected", summary: "Blue theme, right-aligned, 24/7 availability" },
  { name: "WhatsApp", status: "Connected", summary: "Business-hours routing with lead capture intent" },
  { name: "Slack", status: "Connected", summary: "Internal assistant for policy and IT questions" },
  { name: "Instagram", status: "Connected", summary: "Support agent with escalation for order issues" },
  { name: "Messenger", status: "Disconnected", summary: "Not deployed yet" },
  { name: "Email", status: "Connected", summary: "Priority inbox triage and macro suggestions" },
  { name: "Shopify", status: "Connected", summary: "Cart recovery and order support enabled" },
  { name: "Internal assistant", status: "Connected", summary: "Knowledge lookup for teams and managers" },
];

export const integrations = [
  { name: "Salesforce", status: "Connected", description: "Sync qualified leads and lifecycle stages." },
  { name: "HubSpot", status: "Available", description: "Push contact enrichment and campaign attribution." },
  { name: "Zendesk", status: "Connected", description: "Create and update support tickets automatically." },
  { name: "Intercom", status: "Available", description: "Coordinate messenger activity and handoffs." },
  { name: "Notion", status: "Connected", description: "Use internal documents as knowledge sources." },
  { name: "Slack", status: "Connected", description: "Notify teams on escalations and lead capture." },
  { name: "Google Drive", status: "Available", description: "Index shared docs and policy files." },
  { name: "Shopify", status: "Connected", description: "Pull catalog and order metadata into chat flows." },
  { name: "Stripe", status: "Available", description: "Reference billing events in customer conversations." },
  { name: "Zapier", status: "Connected", description: "Trigger downstream automations without code." },
];

export const workflows = [
  { name: "Pricing inquiry to sales", trigger: "Intent: pricing", action: "Assign sales owner and notify Slack" },
  { name: "Negative sentiment escalation", trigger: "Sentiment < threshold", action: "Escalate to support lead" },
  { name: "Unanswered question review", trigger: "Fallback fired twice", action: "Create knowledge gap task" },
  { name: "Lead captured", trigger: "Form completed", action: "Push CRM record and alert account team" },
];

export const teamMembers = [
  { name: "Maya Thompson", role: "Workspace Admin", activity: "Updated billing settings 2h ago" },
  { name: "Leo Martins", role: "Support Manager", activity: "Published Resolve agent 4h ago" },
  { name: "Sofia Patel", role: "Analyst", activity: "Exported analytics report yesterday" },
  { name: "Grant Hughes", role: "Sales Lead", activity: "Reviewed high-intent conversations yesterday" },
];

export const invoices = [
  { id: "INV-4021", date: "Mar 01, 2026", amount: "$4,800", status: "Paid" },
  { id: "INV-3910", date: "Feb 01, 2026", amount: "$4,800", status: "Paid" },
  { id: "INV-3803", date: "Jan 01, 2026", amount: "$4,200", status: "Paid" },
];

export const planCards = [
  { name: "Starter", price: "$299", detail: "For early teams proving value across a single channel." },
  { name: "Growth", price: "$1,250", detail: "For teams deploying multiple agents with analytics and integrations." },
  { name: "Enterprise", price: "Custom", detail: "For organizations needing advanced controls, rollout support, and multi-workspace operations." },
];

export const dashboardNav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Agents", href: "/dashboard/agents", icon: Bot },
  { label: "Knowledge Base", href: "/dashboard/knowledge-base", icon: Database },
  { label: "Conversations", href: "/dashboard/conversations", icon: MessagesSquare },
  { label: "Analytics", href: "/dashboard/analytics", icon: Activity },
  { label: "Channels", href: "/dashboard/channels", icon: Globe },
  { label: "Integrations", href: "/dashboard/integrations", icon: Network },
  { label: "Workflows", href: "/dashboard/workflows", icon: BellRing },
  { label: "Team", href: "/dashboard/team", icon: Users },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: BookOpen },
];
