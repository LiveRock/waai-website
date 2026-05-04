export interface Industry {
  slug: string;
  title: string;
  headline: string;
  description: string;
  painPoints: string[];
  useCases: { title: string; description: string }[];
  metaDescription: string;
}

export const industries: Industry[] = [
  {
    slug: 'ecommerce',
    title: 'E-commerce',
    headline: 'Turn WhatsApp Into Your Top Sales Channel',
    description: 'Automate product inquiries, order updates, return requests, and abandoned cart recovery. Your AI agent handles the entire customer journey on WhatsApp.',
    painPoints: ['Customers abandon carts when they can\'t get quick answers', 'Support team overwhelmed with "where is my order" queries', 'No way to reach customers on their preferred channel'],
    useCases: [
      { title: 'Product Catalog Assistant', description: 'Customers describe what they need and your AI recommends the right product with pricing and availability.' },
      { title: 'Order Tracking', description: 'Instant order status updates when customers ask "where\'s my order?"' },
      { title: 'Return Processing', description: 'Guide customers through the return process with automated flows and document generation.' },
    ],
    metaDescription: 'WhatsApp AI for e-commerce. Automate product inquiries, order tracking, returns, and customer support.',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    headline: 'Better Patient Communication, Less Admin Work',
    description: 'Automate appointment scheduling, prescription inquiries, and patient follow-ups. HIPAA-conscious design with secure, encrypted communication.',
    painPoints: ['Phone lines jammed with appointment requests', 'Staff spends hours on repetitive scheduling calls', 'Patients struggle to reach you outside business hours'],
    useCases: [
      { title: 'Appointment Scheduling', description: 'Patients book, reschedule, or cancel appointments via WhatsApp with Google Calendar integration.' },
      { title: 'Prescription Inquiries', description: 'Automated responses about prescription refills, dosage instructions, and pharmacy hours.' },
      { title: 'Patient Triage', description: 'Logic flows guide patients through symptom checks and direct them to the right department.' },
    ],
    metaDescription: 'WhatsApp AI for healthcare. Automate appointment scheduling, patient follow-ups, and prescription inquiries.',
  },
  {
    slug: 'education',
    title: 'Education',
    headline: 'Answer Every Student and Parent Question Instantly',
    description: 'Automate enrollment inquiries, course information, schedule lookups, and fee payment reminders. Your AI handles thousands of students without breaking a sweat.',
    painPoints: ['Staff overwhelmed with repetitive enrollment questions', 'Parents can\'t reach admissions during peak season', 'Students need answers outside office hours'],
    useCases: [
      { title: 'Admissions Assistant', description: 'Answer program details, entry requirements, and application status inquiries automatically.' },
      { title: 'Course Information', description: 'Students get instant details about schedules, syllabi, and instructor information.' },
      { title: 'Fee Reminders', description: 'Automated payment reminders and installment plan information via WhatsApp.' },
    ],
    metaDescription: 'WhatsApp AI for education. Automate enrollment inquiries, course info, and student communication.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    headline: 'Qualify Leads and Schedule Viewings on Autopilot',
    description: 'Capture property inquiries, qualify buyers, schedule viewings, and send property documents — all automated through WhatsApp.',
    painPoints: ['Hundreds of property inquiries but few qualified leads', 'Scheduling viewings is a back-and-forth nightmare', 'Can\'t respond to inquiries fast enough before they move on'],
    useCases: [
      { title: 'Property Matching', description: 'Buyers describe their dream property and your AI recommends matching listings with photos and details.' },
      { title: 'Viewing Scheduler', description: 'Automated calendar booking for property viewings with reminders and confirmations.' },
      { title: 'Document Delivery', description: 'Auto-generate and send property brochures, floor plans, and price lists as PDF documents.' },
    ],
    metaDescription: 'WhatsApp AI for real estate. Qualify leads, schedule viewings, and send property documents automatically.',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    headline: 'Delight Guests Before They Even Arrive',
    description: 'Automate booking confirmations, room service requests, concierge recommendations, and guest feedback. WhatsApp is the new front desk.',
    painPoints: ['Guests expect instant responses at any hour', 'Concierge requests get lost between shifts', 'Post-stay feedback collection is inconsistent'],
    useCases: [
      { title: 'Booking Assistant', description: 'Guests check availability, book rooms, and get instant confirmation via WhatsApp.' },
      { title: 'Concierge Service', description: 'AI-powered recommendations for restaurants, activities, and transportation.' },
      { title: 'Guest Feedback', description: 'Automated post-stay surveys and review requests to boost your online reputation.' },
    ],
    metaDescription: 'WhatsApp AI for hospitality. Automate bookings, concierge services, and guest communication.',
  },
  {
    slug: 'restaurants',
    title: 'Restaurants',
    headline: 'Take Orders and Reservations Without Picking Up the Phone',
    description: 'WhatsApp ordering, reservation management, menu inquiries, and delivery updates — all handled automatically while your staff focuses on the food.',
    painPoints: ['Phone rings non-stop during peak hours', 'Staff can\'t handle orders and reservations simultaneously', 'Customers want to see the menu before ordering'],
    useCases: [
      { title: 'Menu Assistant', description: 'Customers browse your menu, ask about ingredients, and get dietary information instantly.' },
      { title: 'Reservation Booking', description: 'Automated table reservations with date, time, party size, and special requests.' },
      { title: 'Order Updates', description: 'Real-time delivery and pickup status updates sent proactively via WhatsApp.' },
    ],
    metaDescription: 'WhatsApp AI for restaurants. Take orders, manage reservations, and update customers automatically.',
  },
  {
    slug: 'fitness',
    title: 'Fitness',
    headline: 'Keep Members Engaged and Booking Classes Around the Clock',
    description: 'Automate class bookings, membership inquiries, schedule lookups, and workout tips. Your AI personal trainer never takes a rest day.',
    painPoints: ['Class booking requests overwhelm front desk staff', 'Members ask the same questions about schedules and pricing', 'No-shows eat into revenue without reminder systems'],
    useCases: [
      { title: 'Class Booking', description: 'Members view the schedule, check availability, and book classes directly in WhatsApp.' },
      { title: 'Membership Info', description: 'Instant answers about plans, pricing, facilities, and membership perks.' },
      { title: 'Workout Tips', description: 'AI-powered fitness advice and workout suggestions based on member goals.' },
    ],
    metaDescription: 'WhatsApp AI for fitness studios. Automate class bookings, membership inquiries, and member engagement.',
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    headline: 'Spend Less Time on Admin, More Time on Clients',
    description: 'Automate client intake, appointment scheduling, document collection, and progress updates. Professional service, powered by AI efficiency.',
    painPoints: ['Client intake takes too much back-and-forth', 'Scheduling conflicts waste everyone\'s time', 'Clients expect faster communication than you can deliver'],
    useCases: [
      { title: 'Client Intake', description: 'Automated flows collect client information, case details, and required documents.' },
      { title: 'Appointment Management', description: 'Schedule, reschedule, and send reminders for client meetings via Google Calendar.' },
      { title: 'Status Updates', description: 'Keep clients informed with automated progress updates and milestone notifications.' },
    ],
    metaDescription: 'WhatsApp AI for professional services. Automate client intake, scheduling, and communication.',
  },
  {
    slug: 'automotive',
    title: 'Automotive',
    headline: 'From Test Drive to Service Reminder — All on WhatsApp',
    description: 'Automate vehicle inquiries, test drive bookings, service appointments, and maintenance reminders. Your showroom never closes.',
    painPoints: ['Hundreds of vehicle inquiries but no time to respond to all', 'Service appointment scheduling is manual and error-prone', 'Customers forget maintenance schedules and you lose revenue'],
    useCases: [
      { title: 'Vehicle Inquiry Bot', description: 'Customers ask about models, specs, pricing, and availability — all answered instantly.' },
      { title: 'Test Drive Booking', description: 'Automated test drive scheduling with calendar integration and reminders.' },
      { title: 'Service Reminders', description: 'Proactive maintenance reminders based on mileage and time intervals.' },
    ],
    metaDescription: 'WhatsApp AI for automotive. Automate vehicle inquiries, test drive bookings, and service reminders.',
  },
];
