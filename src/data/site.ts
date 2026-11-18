export const site = {
  name: 'Insure LI Agency Inc.',
  shortName: 'Insure LI',
  tagline: "If you don't ask, you won't know.",
  url: 'https://www.insureli.com',
  phone: '(516) 308-4166',
  phoneHref: 'tel:+15163084166',
  fax: '(516) 268-5577',
  email: 'customerservice@insureli.com',
  address: {
    street: '582 Hicksville Road',
    city: 'Massapequa',
    state: 'NY',
    zip: '11758',
  },
  geo: { lat: 40.6825434, lng: -73.4747594 },
  mapsUrl: 'https://goo.gl/maps/THq1ZuqwYhjEqYZ39',
  reviewsUrl:
    'https://www.google.com/maps/place/Insure+LI+Agency+Inc/@40.6825434,-73.4747594,15z/data=!4m8!3m7!1s0x89c27f476b63ba55:0xe8f2c87f990677c9!8m2!3d40.6825434!4d-73.4747594!9m1!1b1!16s%2Fg%2F11qrl990yl',
  leaveReviewUrl: 'https://g.page/r/Ccl3Bpl_yPLoEBM/review',
  hours: 'Mon – Fri: 8:30 AM – 5:00 PM',
  states: ['New York', 'New Jersey', 'Connecticut', 'Pennsylvania', 'Florida'],
};

export const team = [
  {
    name: 'Michael Torre',
    title: 'Owner & Licensed Insurance Broker',
    email: 'michael@insureli.com',
    photo: '/images/michael-torre.jpg',
  },
  {
    name: 'Steven Torre',
    title: 'Owner & Licensed Insurance Broker',
    email: 'steve@insureli.com',
    photo: '/images/steven-torre.jpg',
  },
  {
    name: 'Jakki Agopian',
    title: 'Office Manager',
    email: 'jakki@insureli.com',
    photo: '/images/jakki-agopian.jpg',
  },
];

// Carriers from the Master Company List. Add a logo file to /public/carriers/ and set `logo` to use it.
export const carriers: { name: string; logo?: string }[] = [
  { name: 'Travelers', logo: '/carriers/travelers.svg' },
  { name: 'Liberty Mutual', logo: '/carriers/liberty-mutual.svg' },
  { name: 'Chubb', logo: '/carriers/chubb.png' },
  { name: 'Progressive', logo: '/carriers/progressive.svg' },
  { name: 'National General', logo: '/carriers/national-general.png' },
  { name: 'Mercury', logo: '/carriers/mercury.svg' },
  { name: 'Hagerty', logo: '/carriers/hagerty.svg' },
  { name: 'Markel', logo: '/carriers/markel.svg' },
  { name: 'SageSure', logo: '/carriers/sagesure.png' },
  { name: 'USLI', logo: '/carriers/usli.png' },
  { name: 'Lemonade', logo: '/carriers/lemonade.svg' },
  { name: 'Steadily', logo: '/carriers/steadily.svg' },
  { name: 'GEICO' },
  { name: 'Foremost' },
  { name: 'Kingstone' },
  { name: 'Neptune Flood' },
  { name: 'Wright Flood' },
  { name: 'Thimble' },
];

export const reviews = [
  { n: 'Jessica P', d: '2022-05-21', t: "I recently switched to Insure LI and saved $3,000 on my car insurance! Not only did I save money but the coverage is better than what I had before. Jakki and Steven handled everything seamlessly! They were beyond professional and quick to handle any problem that arose. If you're looking to save money with grade A service, then definitely give them a call!!" },
  { n: 'Emily B', d: '2022-12-05', t: 'Unbelievable customer care!! Steven and Jakki were an absolute pleasure to work with. You can tell they truly care about their customers! Insure LI helped me save on my car insurance while fixing my policy. I cannot recommend Insure LI enough. 1000/10!' },
  { n: 'Amanda S', d: '2022-04-25', t: 'Just switched my car and home insurance with Insure LI Agency. They got me the best coverage for a lower price. Jakki & Steven were a pleasure to work with. Great customer service & very knowledgeable. Hands down a great team! Thank you!' },
  { n: 'Joseph C', d: '2022-03-23', t: "Excellent customer service!!! Jakki answered all of my questions like a champ, and she made the process of switching my insurance quick and easy!! I highly recommend her as an agent and Insure LI as a company!!! I've already recommended them to several of my friends and family members!!! #topnotch" },
  { n: 'Janice', d: '2022-03-21', t: 'Great company to work with. Friendly and knowledgeable staff. Steven responds quickly and with concern to give clients the best coverage for the best price.' },
  { n: 'Susan L', d: '2022-03-19', t: 'Great people and great service. Steven reviewed my car and renters insurance and was able to improve my coverage without increasing my premiums. So easy and immediate service. Definitely recommend for everyone.' },
  { n: 'Eunice', d: '2022-03-18', t: "Jakki & Steven really took their time with me and explained everything that was covered and what wasn't. With the prices of homes and cars going up, everyone should re-examine their policies. Home, Auto, Boat etc. I'm glad I did, and I am thrilled with Insure LI Agency." },
  { n: 'Anthony S', d: '2022-03-17', t: 'Best customer service, best response time, and even better people! They know exactly what they are talking about, and most importantly they care about their customers. Steven was extremely helpful and was very knowledgeable on what he was doing to help me. 10/10 highly recommend!' },
  { n: 'Lena', d: '2022-03-10', t: 'Jakki was amazing. She is so helpful and extremely friendly. She went above and beyond to save us money.' },
  { n: 'Maryann B', d: '2022-03-10', t: 'Insure LI Agency is professional, personable and accommodating. They provide customers with great information and insight while finding the best rates!' },
  { n: 'Nolan K', d: '2022-03-10', t: 'Phenomenal service.' },
  { n: 'Daria S', d: '2022-03-10', t: 'Insure LI agency is nothing short of providing incredible service and extensive knowledge of insurance and policy plans. An honest and efficient team with great customer service. Thank you!' },
  { n: 'Santiago A', d: '2022-03-10', t: "Phenomenal services, each representative was responsive and paid close attention to detail. I was put in touch with Steven and he answered all questions I had to ensure my satisfaction (no pun intended!) Great services, highly recommend for anyone looking for insurance services throughout Long Island!" },
  { n: 'Regina', d: '2022-02-04', t: 'Excellent customer service and super fast response time. Professional and knowledgeable agents. They saved us big time on our insurance rates and were so friendly to work with. We highly recommend them. Thank you Jakki and Steve, you guys are the best!' },
  { n: 'Chris G', d: '2022-02-04', t: "I have been referring my clients to the good people at Insure LI since they opened. They are great at what they do and they go WAY above and beyond to take GREAT care of my people. You don't just get great insurance rates with them. They help my clients navigate problems that no one else I know would know how to resolve. I can't say enough!" },
  { n: 'Dan W', d: '2021-05-15', t: 'Great organization! They worked hard to ensure we have the correct coverage for the best price.' },
  { n: 'Connor G', d: '2021-03-26', t: 'Real personable staff. Made me feel well taken care of.' },
  { n: 'Tori D', d: '2021-01-18', t: 'Great people to work with. Professional and great customer service!' },
];

export const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
