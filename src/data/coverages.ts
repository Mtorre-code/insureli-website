export type Coverage = {
  slug: string;
  group: 'personal' | 'commercial';
  name: string; // nav / card label
  title: string; // <title> + H1 lead
  headline: string;
  summary: string; // card + meta description
  icon: string; // SVG path data (24x24, stroke)
  intro: string[];
  listTitle: string;
  items: string[];
  extra?: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  quoteLine: string; // value preselected on the quote form
};

const I = {
  car: 'M5 17h14M6 17v2M18 17v2M3 13l2-6h14l2 6v4H3zM7.5 14h.01M16.5 14h.01',
  home: 'M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6',
  wave: 'M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M12 3v4',
  umbrella: 'M12 3a9 9 0 019 9H3a9 9 0 019-9zM12 12v7a2 2 0 01-4 0',
  key: 'M15 7a4 4 0 11-3.9 4.9L4 19v2h3v-2h2v-2h2l1.1-1.1A4 4 0 0115 7zM16 9h.01',
  sofa: 'M4 11V8a2 2 0 012-2h12a2 2 0 012 2v3M2 13a2 2 0 014 0v2h12v-2a2 2 0 014 0v5H2zM5 18v2M19 18v2',
  boat: 'M3 17l2 3h14l2-3zM12 3v11M12 4l6 8h-6M2 21c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z',
  briefcase: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  truck: 'M3 16V7h11v9M14 10h4l3 3v3h-7M6.5 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  person: 'M12 4a3 3 0 110 6 3 3 0 010-6zM6 20v-2a6 6 0 0112 0v2',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
  hammer: 'M14 6l4 4-9 9H5v-4zM16 4l4 4',
};

export const coverages: Coverage[] = [
  // ---------------- PERSONAL ----------------
  {
    slug: 'auto-insurance',
    group: 'personal',
    name: 'Auto',
    title: 'Car Insurance',
    headline: 'Get the right car insurance, not just the cheapest',
    summary: 'We compare multiple carriers and explain exactly what your auto policy covers.',
    icon: I.car,
    intro: [
      'Stop hunting for discounts and guessing at coverage. We shop multiple carriers to find the rate you want, with fast quotes and real help when you have a claim.',
      'For an accurate quote, have each vehicle’s year, make and model and your driving history handy. To purchase a policy we’ll also need driver’s license numbers and VINs.',
    ],
    listTitle: 'Discounts we look for',
    items: ['Multi-car', 'Multi-policy (bundle with home)', 'Pleasure-use', 'Senior', 'Retiree', 'Safe driver', 'Paid in full'],
    extra: [
      { title: 'State minimums aren’t enough', body: 'Each state sets its own required coverages. New York, for example, requires liability, no-fault (personal injury protection) and uninsured motorist coverage. State minimums are rarely enough to protect a homeowner, so we’ll show you what higher limits actually cost.' },
    ],
    faqs: [
      { q: 'Why did my car insurance go up at renewal?', a: 'Rates move with repair costs, claims in your area and changes to your household or driving record. It’s exactly the moment to have us re-shop. We compare carriers side by side so you can see if a switch makes sense.' },
      { q: 'Can I bundle auto with home or renters?', a: 'Yes. Most of our carriers offer a multi-policy discount when you place auto and home, condo or renters together.' },
      { q: 'How fast can I get covered?', a: 'Once you choose a quote and we have your driver and vehicle details, most auto policies can be bound the same day during business hours.' },
    ],
    quoteLine: 'Auto',
  },
  {
    slug: 'homeowners-insurance',
    group: 'personal',
    name: 'Homeowners',
    title: 'Homeowners Insurance',
    headline: 'Protect your biggest investment, and save when you bundle',
    summary: 'Homeowners coverage for your home, including coastal properties, with multi-policy discounts.',
    icon: I.home,
    intro: [
      'Your home is your most significant investment. We make sure your dwelling limit reflects today’s rebuild costs, not what you paid years ago, and that you understand your deductibles before a storm hits.',
      'You may qualify for discounts for a new home purchase, switching from renters, new construction, central station alarms and sprinklers, or quoting at least 10 days before your policy starts.',
    ],
    listTitle: 'A typical policy covers',
    items: ['Dwelling & attached structures', 'Other structures (garage, shed, fence)', 'Personal property', 'Personal liability', 'Theft & vandalism', 'Fire, lightning & smoke', 'Freezing, ice & snow', 'Additional living expenses'],
    extra: [
      { title: 'Near the water?', body: 'Many coastal homes carry a separate windstorm or hurricane deductible, and standard homeowners policies never cover flood. We review both with you so nothing comes as a surprise.' },
    ],
    faqs: [
      { q: 'Does homeowners insurance cover flooding?', a: 'No. Flood damage from rising water is excluded from standard homeowners policies. You need a separate flood policy, which we can quote at the same time.' },
      { q: 'How much dwelling coverage do I need?', a: 'Enough to rebuild your home at today’s construction costs, which is often different from its market value. We’ll run a replacement cost estimate with you.' },
      { q: 'I’m buying a home. When should I call?', a: 'As soon as you’re in contract. Your lender will need proof of insurance before closing, and quoting early often earns a better rate.' },
    ],
    quoteLine: 'Home',
  },
  {
    slug: 'flood-insurance',
    group: 'personal',
    name: 'Flood',
    title: 'Flood Insurance',
    headline: 'Flood isn’t covered by your homeowners policy. This is.',
    summary: 'NFIP and private flood insurance for coastal and low-lying homes, explained in plain English.',
    icon: I.wave,
    intro: [
      'Flood insurance is a separate policy that protects your home and belongings when water rises from the bay, a storm surge or overwhelmed drains. Standard homeowners and renters policies do not cover flood damage, which matters for coastal and low-lying homes.',
      'We quote both the National Flood Insurance Program (NFIP) and private flood carriers, so you can compare price, limits and waiting periods side by side.',
    ],
    listTitle: 'What we compare for you',
    items: ['NFIP vs. private flood options', 'Building coverage limits', 'Contents coverage', 'Deductible choices', 'Waiting periods', 'Elevation certificate savings'],
    extra: [
      { title: 'Don’t wait for the forecast', body: 'NFIP policies generally have a 30-day waiting period before coverage starts (with exceptions, such as a policy required at a loan closing). Buying after a storm is named is usually too late.' },
      { title: 'Not in a high-risk zone?', body: 'Many flood claims come from outside high-risk zones, and coverage is often much less expensive there. If you’re near the water, it’s worth a quote.' },
    ],
    faqs: [
      { q: 'Is flood insurance required?', a: 'If you have a federally backed mortgage on a home in a high-risk flood zone, your lender will require it. Even when it isn’t required, it’s often recommended for homes near the water.' },
      { q: 'What is an elevation certificate?', a: 'A document from a surveyor showing your home’s elevation relative to expected flood levels. It can lower your premium significantly, and we’ll tell you whether it’s worth getting.' },
      { q: 'Does flood insurance cover my basement?', a: 'Coverage below ground is limited, especially under the NFIP. We’ll walk you through exactly what is and isn’t covered in a basement before you buy.' },
    ],
    quoteLine: 'Flood',
  },
  {
    slug: 'umbrella-insurance',
    group: 'personal',
    name: 'Umbrella',
    title: 'Personal Umbrella Insurance',
    headline: 'An extra layer of liability protection, for a relatively low cost',
    summary: 'Personal umbrella coverage adds $1 million or more of liability above your home and auto limits.',
    icon: I.umbrella,
    intro: [
      'A serious car accident or an injury on your property can lead to a judgment larger than your home or auto liability limits. An umbrella policy picks up where those limits end, protecting your savings and future income.',
    ],
    listTitle: 'Benefits',
    items: ['$1,000,000+ in additional liability', 'Judgments from personal activities', 'Autos & watercraft', 'Legal defense costs'],
    faqs: [
      { q: 'Who needs an umbrella policy?', a: 'Homeowners, people with teen drivers, pool or boat owners, landlords, and anyone with assets or future earnings worth protecting.' },
      { q: 'Do I need to have my home and auto with the same company?', a: 'Not always, but most umbrella carriers require minimum liability limits on your underlying policies. We’ll make sure everything lines up.' },
    ],
    quoteLine: 'Umbrella',
  },
  {
    slug: 'landlord-insurance',
    group: 'personal',
    name: 'Landlord',
    title: 'Landlord & Rental Property Insurance',
    headline: 'Coverage for the homes you rent out',
    summary: 'Dwelling fire and landlord coverage for tenant-occupied homes and multi-family buildings.',
    icon: I.key,
    intro: [
      'Whether it’s a single-family home you rent out or a multi-family building, landlord coverage protects the property, your liability and your rental income after a covered loss.',
      'Your tenants need their own renters policy for their belongings. We can quote that for them too.',
    ],
    listTitle: 'Coverage includes',
    items: ['Property damage', 'Personal liability', 'Loss of rent', 'Optional contents & appliances', 'Other structures'],
    faqs: [
      { q: 'Can I keep my homeowners policy if I rent my house out?', a: 'Usually not. Homeowners policies are written for owner-occupied homes. Once you rent it out, you need a landlord (dwelling fire) policy.' },
      { q: 'Do you insure 2–4 family homes?', a: 'Yes, both owner-occupied and fully tenant-occupied multi-family homes.' },
    ],
    quoteLine: 'Landlord',
  },
  {
    slug: 'renters-insurance',
    group: 'personal',
    name: 'Renters',
    title: 'Renters Insurance',
    headline: 'Affordable protection for your belongings and liability',
    summary: 'Renters insurance covers your belongings and liability, and can lower your auto rate when you bundle.',
    icon: I.sofa,
    intro: [
      'Your landlord’s policy covers the building, not your things. Renters insurance protects your belongings, your liability if someone is hurt, and extra living costs if you’re displaced by a covered loss.',
    ],
    listTitle: 'A typical policy covers',
    items: ['Personal property', 'Personal liability', 'Additional living expenses', 'Theft, fire & smoke'],
    faqs: [
      { q: 'Is renters insurance expensive?', a: 'It’s usually one of the most affordable policies you can buy, and bundling it with auto can reduce your car insurance premium.' },
    ],
    quoteLine: 'Renters',
  },
  {
    slug: 'boat-rv-motorcycle-insurance',
    group: 'personal',
    name: 'Boat, RV & Motorcycle',
    title: 'Boat, RV & Motorcycle Insurance',
    headline: 'Protect the things you have fun with',
    summary: 'Insurance for boats, jet skis, RVs, ATVs, snowmobiles and motorcycles.',
    icon: I.boat,
    intro: [
      'Protect your recreational vehicles and watercraft against collision, theft, vandalism, injury and more, with coverage that fits how and where you use them.',
    ],
    listTitle: 'We insure',
    items: ['Boats', 'Jet skis', 'RVs & campers', 'ATVs & side-by-sides', 'Snowmobiles', 'Street & dirt bikes', 'Motorcycles'],
    faqs: [
      { q: 'Does my homeowners policy cover my boat?', a: 'Usually only small boats with very limited coverage. A dedicated boat policy covers physical damage, liability on the water, towing and more.' },
    ],
    quoteLine: 'Boat / RV / Motorcycle',
  },
  {
    slug: 'life-insurance',
    group: 'personal',
    name: 'Life',
    title: 'Life Insurance',
    headline: 'Life insurance for the people who count on you',
    summary: 'Term and permanent life insurance, with help deciding how much coverage makes sense for your family.',
    icon: I.heart,
    intro: [
      'Term and permanent life insurance options to protect your family’s future: paying off a mortgage, replacing income or funding college.',
      'Not sure how much you need? We’ll walk through it with you, without pressure.',
    ],
    listTitle: 'Options',
    items: ['Term life', 'Whole life', 'Universal life', 'Mortgage protection'],
    faqs: [
      { q: 'How much life insurance do I need?', a: 'A common starting point is enough to pay off debts like your mortgage and replace several years of income. We’ll help you land on a number that fits your budget.' },
      { q: 'Term or permanent?', a: 'Term covers a set period (often 10–30 years) at a lower cost. Permanent lasts your lifetime and can build cash value. Many families start with term.' },
    ],
    quoteLine: 'Life',
  },

  // ---------------- COMMERCIAL ----------------
  {
    slug: 'business-owners-policy',
    group: 'commercial',
    name: 'Business Owners Policy',
    title: 'Business Owners Policy (BOP)',
    headline: 'Property and liability for your business, in one policy',
    summary: 'A BOP bundles property and general liability protection for small businesses.',
    icon: I.briefcase,
    intro: [
      'A business owner’s policy bundles property and liability protection into one package, often for less than buying them separately. It’s a fit for many offices, shops, restaurants and service businesses.',
    ],
    listTitle: 'Typically covers',
    items: ['Your building or leased space', 'Contents & equipment', 'Business income', 'Property damage liability', 'Bodily injury liability', 'Product liability', 'Libel, slander & copyright'],
    faqs: [
      { q: 'Is a BOP right for my business?', a: 'BOPs are designed for small to mid-size businesses with lower-risk operations. If yours doesn’t qualify, we’ll build separate property and liability policies instead.' },
    ],
    quoteLine: 'Business owners (BOP)',
  },
  {
    slug: 'general-liability-insurance',
    group: 'commercial',
    name: 'General Liability',
    title: 'General Liability Insurance',
    headline: 'Protect your business from unexpected claims',
    summary: 'General liability for businesses and contractors, with certificates turned around fast.',
    icon: I.shield,
    intro: [
      'General liability gives your business financial protection from third-party claims of injury or property damage. It isn’t always required by law, but most leases, contracts and job sites require it.',
    ],
    listTitle: 'Protects against',
    items: ['Property damage', 'Bodily injury', 'Product liability', 'Advertising injury', 'Legal defense costs'],
    faqs: [
      { q: 'How quickly can I get a certificate of insurance?', a: 'Existing clients can request a COI through our Service Center and we usually turn it around the same business day.' },
    ],
    quoteLine: 'General liability',
  },
  {
    slug: 'commercial-auto-insurance',
    group: 'commercial',
    name: 'Commercial Auto',
    title: 'Commercial Auto Insurance',
    headline: 'Dependable coverage for the vehicles that keep you working',
    summary: 'Commercial auto for trucks, vans and fleets used for business.',
    icon: I.truck,
    intro: [
      'If you or your employees drive for work, you likely need commercial auto. Personal auto policies typically exclude business use, which is a costly surprise after a claim.',
      'It’s ideal for contractors moving tools between job sites, delivery and service vehicles, and small fleets.',
    ],
    listTitle: 'Coverage options',
    items: ['Liability', 'Physical damage', 'Hired & non-owned auto', 'Tools & equipment (inland marine)', 'Uninsured motorist'],
    faqs: [
      { q: 'My employees drive their own cars for errands. Am I covered?', a: 'Not automatically. Hired and non-owned auto coverage protects your business when employees use personal or rented vehicles for work.' },
    ],
    quoteLine: 'Commercial auto',
  },
  {
    slug: 'workers-compensation-insurance',
    group: 'commercial',
    name: "Workers' Comp & Disability",
    title: "Workers' Compensation & NY Disability Insurance",
    headline: "Workers' comp, disability and Paid Family Leave, done right",
    summary: "New York workers' compensation, DBL and Paid Family Leave coverage at a price that fits your business.",
    icon: I.person,
    intro: [
      'New York requires most employers to carry workers’ compensation, plus disability (DBL) and Paid Family Leave coverage for their employees. We help you choose coverage that meets state and contract requirements at a price you can afford, and grows with your business.',
    ],
    listTitle: 'We help with',
    items: ["Workers' compensation", 'NY disability benefits (DBL)', 'Paid Family Leave (PFL)', 'Payroll audits', 'Certificates for job sites'],
    faqs: [
      { q: "Do I need workers' comp if I only have part-time employees?", a: 'In New York, generally yes. Most employers need coverage for part-time workers and, in many cases, family members who work for the business.' },
    ],
    quoteLine: 'Workers’ comp',
  },
  {
    slug: 'contractors-insurance',
    group: 'commercial',
    name: 'Contractors',
    title: 'Contractors Insurance',
    headline: 'Insurance for the trades, with certificates when you need them',
    summary: 'General liability, commercial auto, workers’ comp and tools coverage for contractors.',
    icon: I.hammer,
    intro: [
      'Contractors need coverage that satisfies general contractors, homeowners and municipalities, and they need certificates fast so a job doesn’t stall.',
      'We package general liability, commercial auto, workers’ comp and tools coverage for trades like electricians, plumbers, HVAC, landscapers, painters and carpenters.',
    ],
    listTitle: 'A contractor package can include',
    items: ['General liability', 'Commercial auto', "Workers' comp & DBL/PFL", 'Tools & equipment', 'Contractor umbrella', 'Additional insured endorsements'],
    faqs: [
      { q: 'A GC is asking me to name them as additional insured. Can you do that?', a: 'Yes. Send us the contract requirements through our Service Center and we’ll issue the certificate and endorsement, usually the same business day.' },
    ],
    quoteLine: 'Contractors',
  },
  {
    slug: 'commercial-umbrella-insurance',
    group: 'commercial',
    name: 'Commercial Umbrella',
    title: 'Commercial Umbrella Insurance',
    headline: 'Additional limits so one claim doesn’t sink your business',
    summary: 'Commercial umbrella adds limits above your general liability, commercial auto and employer’s liability.',
    icon: I.layers,
    intro: [
      'Commercial umbrella adds coverage above your general liability, commercial auto and employer’s liability limits, so a large claim doesn’t come out of your business. Many contracts require higher limits than a primary policy provides.',
    ],
    listTitle: 'Sits above',
    items: ['General liability', 'Commercial auto', "Employer's liability"],
    faqs: [
      { q: 'How much umbrella coverage do I need?', a: 'It often depends on your contracts. Many require $1–5 million in total limits. We’ll review your agreements and recommend a limit.' },
    ],
    quoteLine: 'Commercial umbrella',
  },
];

export const personal = coverages.filter((c) => c.group === 'personal');
export const commercial = coverages.filter((c) => c.group === 'commercial');
