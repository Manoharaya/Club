// Lotus Health Club - Central Data Store

export const SERVICES = {
  recovery: {
    title: "Recovery Zone",
    description: "Therapies engineered to reduce inflammation, boost cellular repair, and build physical and mental resilience.",
    items: [
      {
        id: "ice-bath",
        name: "Ice Bath Therapy",
        description: "Cold water immersion designed to stimulate vasoconstriction, accelerate muscle recovery, and build raw mental grit.",
        duration: "15 mins",
        price: 45,
        benefits: [
          "Reduce systemic inflammation",
          "Accelerate athletic muscle recovery",
          "Improve circular blood flow",
          "Cultivate central nervous system resilience",
          "Enhance sleep quality and dopamine baseline"
        ],
        details: "Our custom plunge pools are kept at a constant 4°C, offering clean, filtered cold water. Sessions include guided breathwork and cold exposure coaching to ensure you reap the full physiological benefits of thermal contrast."
      },
      {
        id: "infrared-sauna",
        name: "Infrared Sauna",
        description: "Deep-penetrating infrared heat to detoxify at a cellular level, soothe stiff joints, and improve cardiovascular health.",
        duration: "45 mins",
        price: 60,
        benefits: [
          "Deep cellular detoxification through sweating",
          "Relieve joint stiffness and muscle soreness",
          "Support cardiovascular health and blood pressure",
          "Stimulate collagen production for healthy skin",
          "Induce deep relaxation and parasympathetic activation"
        ],
        details: "Unlike traditional dry saunas, our full-spectrum infrared cabins heat the body directly rather than the air. This triggers a deeper sweat at a more comfortable temperature, allowing you to relax while promoting intense cellular recovery."
      },
      {
        id: "red-light",
        name: "Red Light Therapy",
        description: "Advanced photobiomodulation utilizing specific red and near-infrared wavelengths to fuel cellular ATP production.",
        duration: "20 mins",
        price: 50,
        benefits: [
          "Stimulate mitochondrial ATP (cellular energy) production",
          "Accelerate healing of soft tissue and skin",
          "Mitigate joint pain and muscular soreness",
          "Boost collagen synthesis for skin rejuvenation",
          "Reduce systemic oxidative stress"
        ],
        details: "Step into our medical-grade photobiomodulation pod. Wavelengths of 660nm (red) and 850nm (near-infrared) penetrate deep into target tissues, stimulating mitochondria, reducing cell damage, and accelerating healing."
      },
      {
        id: "compression",
        name: "Compression Recovery",
        description: "Dynamic pneumatic compression therapy to flush metabolic waste and boost lymphatic drainage.",
        duration: "30 mins",
        price: 35,
        benefits: [
          "Flush lactic acid and metabolic bi-products",
          "Enhance lymphatic system drainage",
          "Alleviate leg heaviness and swelling",
          "Increase range of motion in key joints",
          "Relax and decompress after intense training"
        ],
        details: "Relax in our luxury recliners equipped with Normatec compression boots, sleeves, or hips. Using sequential pulse technology, these devices simulate natural muscle pump action, dramatically shortening recovery times."
      },
      {
        id: "salt-therapy",
        name: "Salt Therapy (Halotherapy)",
        description: "Dry aerosol micro-particles of medical-grade salt to cleanse respiratory pathways and purify skin.",
        duration: "45 mins",
        price: 55,
        benefits: [
          "Cleanse and open respiratory airways",
          "Alleviate symptoms of asthma and seasonal allergies",
          "Soothe inflammatory skin conditions (eczema, psoriasis)",
          "Enhance lung capacity and oxygen uptake",
          "Induce deep relaxation in a sterile environment"
        ],
        details: "Our salt room is coated in Himalayan pink crystals and utilizes a state-of-the-art halogenerator to disperse microscopic salt particles. Breathing this air clears congestion, reduces airway inflammation, and kills airborne microbes."
      },
      {
        id: "float-therapy",
        name: "Float Therapy",
        description: "Sensory deprivation float tanks saturated with Epsom salts to suspend gravity and quiet the nervous system.",
        duration: "60 mins",
        price: 85,
        benefits: [
          "Complete sensory deprivation for deep brain relaxation",
          "Zero-gravity decompression of the spine and joints",
          "Intense magnesium absorption to relax muscles",
          "Relieve chronic stress, anxiety, and mental fatigue",
          "Realign and improve sleep cycles"
        ],
        details: "Float effortlessly in a light-proof, sound-insulated pod filled with 500kg of medical-grade Epsom salt dissolved in body-temperature water. Free from gravity, light, and sound, your brain transitions into meditative theta-wave states."
      }
    ]
  },
  studio: {
    title: "Wellness Studio",
    description: "Curated group classes emphasizing functional movement, mindfulness, mobility, and mind-body harmony.",
    items: [
      {
        id: "yoga",
        name: "Yoga Classes",
        description: "From beginner flows to targeted athlete recovery sequences, designed to align breath with movement.",
        duration: "60 mins",
        price: 30,
        benefits: [
          "Enhance full-body flexibility and joint mobility",
          "Strengthen core stabilisers and posture",
          "Regulate nervous system through breath",
          "Restore mental clarity and concentration",
          "Release muscle tension from intense training"
        ],
        details: "We offer several formats including Beginner Vinyasa, Power Yoga, Yin Yoga, and our signature Athlete Recovery Yoga (which emphasizes long, prop-supported holds targeting tight hips, hamstrings, and shoulders)."
      },
      {
        id: "meditation",
        name: "Meditation & Breathwork",
        description: "Guided sessions to master the breath, cultivate mindfulness, and activate deep stress management mechanisms.",
        duration: "45 mins",
        price: 25,
        benefits: [
          "Calm sympathetic (fight-or-flight) responses",
          "Increase CO2 tolerance and respiratory efficiency",
          "Improve focus, awareness, and emotional regulation",
          "Lower resting heart rate and cortisol levels",
          "Develop tools to manage daily stress"
        ],
        details: "Explore ancient breath mechanics combined with science-backed mindfulness practices. You'll learn protocols such as box breathing, coherent breathing, and guided yoga nidra to reset your stress threshold."
      },
      {
        id: "pilates",
        name: "Pilates (Mat & Reformer)",
        description: "Precise, controlled movements to develop deep core strength, structural stability, and movement alignment.",
        duration: "55 mins",
        price: 35,
        benefits: [
          "Build deep, functional core strength",
          "Correct spinal alignment and muscle imbalances",
          "Develop long, lean muscular support",
          "Improve balance, coordination, and posture",
          "Support injury prevention and rehabilitation"
        ],
        details: "Choose between classic Mat Pilates or dynamic Reformer Pilates. Our classes focus on core activation, pelvic stability, and anatomical alignment to create a resilient, balanced body."
      },
      {
        id: "mobility",
        name: "Mobility & Stretch Classes",
        description: "Active joint-mobilization techniques to expand functional ranges of motion and release fascia tightness.",
        duration: "45 mins",
        price: 30,
        benefits: [
          "Expand active ranges of motion (mobility)",
          "Hydrate connective tissues and release fascia",
          "Alleviate joint impingements and aches",
          "Improve movement efficiency in sports",
          "Decompress neural pathways"
        ],
        details: "A dedicated recovery class utilizing active-isolated stretching, PNF techniques, and myofascial release tools. Excellent for athletes looking to restore elasticity to stiff muscles and prevent joint blockages."
      }
    ]
  },
  treatments: {
    title: "Recovery Treatments",
    description: "Hands-on clinical therapies delivered by leading practitioners to restore structural balance and alleviate pain.",
    items: [
      {
        id: "massage",
        name: "Sports & Recovery Massage",
        description: "Deep tissue manual therapy tailored to your athletic cycle, aiming to alleviate tension and improve muscle length.",
        duration: "60 mins",
        price: 110,
        benefits: [
          "Release localized muscle knots and trigger points",
          "Increase localized circulation and nutrient delivery",
          "Elongate tight muscle fibres",
          "Promote lymphatic clearance of metabolic waste",
          "Reduce physical and mental stress responses"
        ],
        details: "Our sports therapists customise every treatment. We offer Deep Tissue Massage for structural release, Trigger Point Therapy for localised spasms, and light Recovery or Relaxation Massage for post-race flushing."
      },
      {
        id: "myotherapy",
        name: "Myotherapy",
        description: "Evidence-based assessment and physical treatment of myofascial pain, injury, and joint dysfunction.",
        duration: "60 mins",
        price: 120,
        benefits: [
          "Target root causes of chronic muscle pain",
          "Rehabilitate acute and chronic soft-tissue injuries",
          "Restore joint mobility and range of motion",
          "Identify and correct movement compensation patterns",
          "Relieve tension headaches and referred nerve pain"
        ],
        details: "Myotherapy incorporates advanced assessment, dry needling, myofascial release, joint mobilization, and corrective exercises to address pain originating from muscles, nerves, and connective tissues."
      },
      {
        id: "physiotherapy",
        name: "Physiotherapy",
        description: "Clinical physical therapy specializing in sports injury rehabilitation, biomechanical assessment, and restoration.",
        duration: "60 mins",
        price: 130,
        benefits: [
          "Accurate diagnostic assessment of sports injuries",
          "Tailored progressive rehabilitation program planning",
          "Improve biomechanical movement patterns",
          "Targeted joint mobilization and clinical dry needling",
          "Provide strategies to prevent injury re-occurrence"
        ],
        details: "Our expert physiotherapists blend clinical manual therapy with modern exercise prescription. We help you recover from ACL repairs, rotator cuff tears, spinal pain, and postural dysfunctions to return to peak performance."
      },
      {
        id: "dry-needling",
        name: "Dry Needling",
        description: "Acupuncture-style needles placed into active trigger points to stimulate blood flow and release severe muscle spasms.",
        duration: "30 mins",
        price: 65,
        benefits: [
          "Deactivate trigger points (muscle knots)",
          "Elicit local twitch responses for immediate muscle release",
          "Stimulate localized neural healing and blood flow",
          "Dramatically reduce muscular pain scores",
          "Restore normal muscle resting tone"
        ],
        details: "A sterile, thin monofilament needle is inserted into the muscle's trigger point, triggering a localized spinal reflex that resets muscle length and restores function. Frequently paired with massage or physical therapy."
      },
      {
        id: "cupping",
        name: "Cupping Therapy",
        description: "Decompression therapy using suction cups to lift tissue, expand fascia, and stimulate micro-circulation.",
        duration: "45 mins",
        price: 80,
        benefits: [
          "Decompress tight myofascial layers",
          "Draw fresh, oxygen-rich blood to stagnant tissue",
          "Promote metabolic clearance and cellular repair",
          "Alleviate deep muscular aches",
          "Release restricted range of motion"
        ],
        details: "We utilize dynamic and static cupping techniques. Placing specialized glass or silicone cups creates negative pressure, lifting skin and fascia to create space for blood circulation and cellular cleansing."
      },
      {
        id: "stretch-therapy",
        name: "Assisted Stretch Therapy",
        description: "One-on-one passive stretching session guided by a practitioner to safely expand flexible ranges.",
        duration: "45 mins",
        price: 90,
        benefits: [
          "Safely achieve stretches impossible to perform solo",
          "Regulate muscle guarding reflexes (PNF stretching)",
          "Increase flexibility and physical performance",
          "Relieve pressure on compressed joints",
          "Deeply relaxing to the nervous system"
        ],
        details: "Relax on a specialized table while our mobility specialist moves your limbs through functional ranges, applying precise traction and Proprioceptive Neuromuscular Facilitation (PNF) techniques to safely lengthen tight myofascial meridians."
      }
    ]
  },
  performance: {
    title: "Performance Centre",
    description: "Athletic testing, programming, and monitoring to optimise output and prevent injury.",
    items: [
      {
        id: "athletic-programs",
        name: "Athletic Recovery Programs",
        description: "Customised recovery regimens tailored to your training cycle, sports demands, and competitive season.",
        duration: "Varies",
        price: 150,
        benefits: [
          "Align recovery modalities with training loads",
          "Reduce risks of overtraining syndrome",
          "Maintain peak power and endurance outputs",
          "Adapt programs based on competition dates",
          "Empathetic, science-based athletic support"
        ],
        details: "Whether you're training for an Ironman, AFL season, or powerlifting competition, we map out when to use cold therapy, heat exposure, massage, or studio mobility classes to match your weekly training volumes."
      },
      {
        id: "injury-prevention",
        name: "Injury Prevention Planning",
        description: "Biomechanical screening to identify structural vulnerabilities and map out preventative training protocols.",
        duration: "60 mins",
        price: 130,
        benefits: [
          "Identify structural and muscular asymmetries",
          "Correct joint mobility and strength imbalances",
          "Create localized tendon loading protocols",
          "Assess stability and balance under loading",
          "Minimize training days lost to injury"
        ],
        details: "Utilizing video analysis, force plates, and movement screenings, we identify dysfunctions in squatting, running, or throwing mechanics and prescribe targeted stability exercises to build a bulletproof frame."
      },
      {
        id: "performance-assessment",
        name: "Performance & Recovery Assessment",
        description: "Scientific evaluation of your VO2 Max, Lactate Threshold, and Heart Rate Variability (HRV) baselines.",
        duration: "90 mins",
        price: 220,
        benefits: [
          "Accurately calculate aerobic/anaerobic thresholds",
          "Establish precise heart rate training zones",
          "Define baseline physiological stress metrics",
          "Analyse metabolic substrate utilisation",
          "Identify aerobic performance bottlenecks"
        ],
        details: "Includes dynamic gas exchange testing (VO2 Max) and blood lactate analysis on a bike or treadmill. Provides a comprehensive breakdown of your metabolic output and custom training zone guidelines."
      }
    ]
  },
  longevity: {
    title: "Longevity Programs",
    description: "Biohacking and preventative healthcare designed to optimise lifespan, cognitive function, and daily vitality.",
    items: [
      {
        id: "healthy-ageing",
        name: "Healthy Ageing Protocol",
        description: "Science-backed plans focusing on muscular density, joint durability, mitochondrial health, and DNA protection.",
        duration: "Ongoing",
        price: 190,
        benefits: [
          "Preserve lean muscle mass and bone mineral density",
          "Optimise mitochondrial efficiency and energy levels",
          "Reduce cellular senescence and markers of biological age",
          "Improve cognitive longevity and brain health",
          "Maintain independent movement capacity"
        ],
        details: "This program blends specialised resistance guidelines, cellular recovery therapies (like red light and cold plunges), and nutraceutical coaching to slow down biological ageing and extend healthspan."
      },
      {
        id: "biohacking",
        name: "Biohacking Optimisation",
        description: "Leveraging cutting-edge technologies and wearable data analysis to optimise daily biology.",
        duration: "Ongoing",
        price: 250,
        benefits: [
          "Establish data-driven biological baselines",
          "Structure circadian rhythm and light hygiene protocols",
          "Optimise sleep architectures (Deep and REM cycles)",
          "Enhance daily focus, energy, and executive function",
          "Sync daily routines with biological clocks"
        ],
        details: "We analyse metrics from your Oura, Whoop, Apple Watch, or continuous glucose monitor (CGM) to build customised protocols for heat/cold exposure, light hacking, breathing, and strategic fasting."
      },
      {
        id: "stress-sleep",
        name: "Stress & Sleep Management",
        description: "Comprehensive coaching combining breathwork, neuro-relaxation therapies, and sleep hygiene mapping.",
        duration: "Ongoing",
        price: 140,
        benefits: [
          "Increase sleep efficiency and overall duration",
          "Develop techniques to fall asleep quickly",
          "Optimise parasympathetic nervous system tone",
          "Reduce chronic anxiety and somatic tension",
          "Enhance psychological resilience to work stressors"
        ],
        details: "Combines weekly float therapy, guided breathwork, and lifestyle modifications to lower nocturnal heart rate, raise HRV, and resolve chronic insomnia or stress-induced adrenal exhaustion."
      }
    ]
  }
};

export const MEMBERSHIPS = [
  {
    id: "bronze",
    name: "Bronze",
    subtitle: "Essential Recovery",
    price: 49,
    period: "weekly",
    badge: "Active Vitality",
    popular: false,
    benefits: [
      { text: "2 Recovery Zone sessions per week (Ice, Sauna, Red Light, Compression)" },
      { text: "1 Wellness Studio group class per week (Yoga, Pilates, Meditation)" },
      { text: "10% discount on Recovery Treatments (Massage, Physio, Dry Needling)" },
      { text: "1 Guest Pass per month" },
      { text: "Access to Standard Member Portal & Goal Tracking" }
    ]
  },
  {
    id: "silver",
    name: "Silver",
    subtitle: "Longevity & Health",
    price: 89,
    period: "weekly",
    badge: "Optimal Living",
    popular: false,
    benefits: [
      { text: "4 Recovery Zone sessions per week (includes Float Therapy)" },
      { text: "3 Wellness Studio group classes per week" },
      { text: "15% discount on Recovery Treatments" },
      { text: "2 Guest Passes per month" },
      { text: "Standard AI Wellness Assessment (monthly)" },
      { text: "Access to Member Portal & Progress Dashboards" }
    ]
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "Elite Athlete & Performance",
    price: 149,
    period: "weekly",
    badge: "Peak Performance",
    popular: true,
    benefits: [
      { text: "Unlimited Recovery Zone sessions (Ice, Sauna, Red Light, Compression, Salt)" },
      { text: "1 Float Therapy session per week" },
      { text: "Unlimited Wellness Studio group classes" },
      { text: "20% discount on Recovery Treatments" },
      { text: "4 Guest Passes per month" },
      { text: "Advanced AI Wellness Assessment (bi-weekly)" },
      { text: "1-on-1 Performance Consultation (monthly)" },
      { text: "Wearable Device Data Integration & Smart Analytics" }
    ]
  },
  {
    id: "platinum",
    name: "Platinum",
    subtitle: "Ultimate Longevity & Biohacking",
    price: 249,
    period: "weekly",
    badge: "Eternal Wellness",
    popular: false,
    benefits: [
      { text: "Unlimited Recovery Zone & Float Therapy sessions" },
      { text: "Unlimited Wellness Studio group classes" },
      { text: "2 Recovery Treatments per month included (Massage, Myotherapy, Stretch)" },
      { text: "30% discount on additional treatments" },
      { text: "Unlimited Guest Passes (1 guest per visit)" },
      { text: "Continuous AI Wellness Coach & Real-Time Bio-Analytics" },
      { text: "Weekly Longevity & Biohacking Coaching consultations" },
      { text: "VIP booking priority & private lounge access" }
    ]
  }
];

export const CLASSES = [
  { id: "class-1", name: "Beginner Yoga", instructor: "Sophia Chen", type: "yoga", day: "Monday", time: "06:00 AM", spots: 15, maxSpots: 15 },
  { id: "class-2", name: "Reformer Pilates", instructor: "Liam Davis", type: "pilates", day: "Monday", time: "07:30 AM", spots: 3, maxSpots: 8 },
  { id: "class-3", name: "Breathwork & Meditation", instructor: "Marcus Thorne", type: "meditation", day: "Monday", time: "12:00 PM", spots: 12, maxSpots: 20 },
  { id: "class-4", name: "Athlete Recovery Yoga", instructor: "Sophia Chen", type: "yoga", day: "Monday", time: "05:30 PM", spots: 8, maxSpots: 15 },
  
  { id: "class-5", name: "Power Vinyasa", instructor: "Sophia Chen", type: "yoga", day: "Tuesday", time: "06:00 AM", spots: 10, maxSpots: 15 },
  { id: "class-6", name: "Core Strength Mat Pilates", instructor: "Liam Davis", type: "pilates", day: "Tuesday", time: "09:00 AM", spots: 14, maxSpots: 15 },
  { id: "class-7", name: "Stretch & Mobility", instructor: "Elena Rostova", type: "recovery", day: "Tuesday", time: "04:30 PM", spots: 5, maxSpots: 12 },
  { id: "class-8", name: "Guided Mindfulness", instructor: "Marcus Thorne", type: "meditation", day: "Tuesday", time: "06:00 PM", spots: 18, maxSpots: 20 },
  
  { id: "class-9", name: "Yin Yoga", instructor: "Sophia Chen", type: "yoga", day: "Wednesday", time: "07:00 AM", spots: 12, maxSpots: 15 },
  { id: "class-10", name: "Reformer Pilates", instructor: "Liam Davis", type: "pilates", day: "Wednesday", time: "08:30 AM", spots: 1, maxSpots: 8 },
  { id: "class-11", name: "Athlete Recovery Yoga", instructor: "Sophia Chen", type: "yoga", day: "Wednesday", time: "06:00 PM", spots: 6, maxSpots: 15 },
  
  { id: "class-12", name: "Stretch & Mobility", instructor: "Elena Rostova", type: "recovery", day: "Thursday", time: "06:00 AM", spots: 9, maxSpots: 12 },
  { id: "class-13", name: "Core Strength Mat Pilates", instructor: "Liam Davis", type: "pilates", day: "Thursday", time: "12:00 PM", spots: 11, maxSpots: 15 },
  { id: "class-14", name: "Stress Management Breathwork", instructor: "Marcus Thorne", type: "meditation", day: "Thursday", time: "05:30 PM", spots: 15, maxSpots: 20 },
  
  { id: "class-15", name: "Beginner Yoga", instructor: "Sophia Chen", type: "yoga", day: "Friday", time: "06:00 AM", spots: 14, maxSpots: 15 },
  { id: "class-16", name: "Reformer Pilates", instructor: "Liam Davis", type: "pilates", day: "Friday", time: "07:30 AM", spots: 2, maxSpots: 8 },
  { id: "class-17", name: "Group Recovery Workshop", instructor: "Elena Rostova", type: "recovery", day: "Friday", time: "04:30 PM", spots: 4, maxSpots: 10 },
  
  { id: "class-18", name: "Power Vinyasa", instructor: "Sophia Chen", type: "yoga", day: "Saturday", time: "08:00 AM", spots: 11, maxSpots: 15 },
  { id: "class-19", name: "Reformer Pilates Masterclass", instructor: "Liam Davis", type: "pilates", day: "Saturday", time: "09:30 AM", spots: 0, maxSpots: 8 },
  { id: "class-20", name: "Breathwork & Meditation", instructor: "Marcus Thorne", type: "meditation", day: "Saturday", time: "11:00 AM", spots: 15, maxSpots: 20 },
  
  { id: "class-21", name: "Yin Yoga & Sound Bath", instructor: "Sophia Chen", type: "yoga", day: "Sunday", time: "09:00 AM", spots: 8, maxSpots: 15 },
  { id: "class-22", name: "Stretch & Mobility", instructor: "Elena Rostova", type: "recovery", day: "Sunday", time: "10:30 AM", spots: 5, maxSpots: 12 }
];

export const INSTRUCTORS = [
  "Sophia Chen",
  "Liam Davis",
  "Marcus Thorne",
  "Elena Rostova"
];

export const CLASS_TYPES = [
  { id: "yoga", name: "Yoga" },
  { id: "pilates", name: "Pilates" },
  { id: "meditation", name: "Meditation & Breathwork" },
  { id: "recovery", name: "Group Recovery & Mobility" }
];

export const BLOGS = [
  {
    id: "blog-1",
    title: "The Science of Cold Water Plunging: Vasoconstriction & Mental Resilience",
    category: "Recovery",
    author: "Dr. Jonathan Cross, Longevity Advisor",
    date: "July 2, 2026",
    readTime: "6 min read",
    excerpt: "Explore the physiological pathways triggered by 4°C cold water immersion. From brown adipose tissue activation to dopamine upregulation, cold exposure is more than just muscle recovery.",
    content: `
      <p>Cold water immersion (CWI) has evolved from an old-school training trick used by professional athletes to a cornerstone of modern science-backed longevity medicine. Whether you are aiming to accelerate recovery after an grueling workout, mitigate chronic inflammation, or cultivate mental resilience, plunging into cold water triggers powerful physiological adaptations.</p>
      
      <h2>1. The Circulatory Shunt & Vasoconstriction</h2>
      <p>When you submerge your body in cold water (ideally between 2°C to 5°C), the temperature receptors in your skin instantly trigger an autonomic sympathetic response. Your blood vessels rapidly constrict (vasoconstriction), shunting blood away from your extremities and limbs into the core to protect vital organs. This process temporarily decreases blood flow to muscles, which assists in reducing localized edema and acute inflammatory swelling caused by micro-tears in muscle fibres.</p>
      <p>Once you exit the cold plunge, blood vessels dilate (vasodilation) in a rebound effect. Fresh, oxygenated, nutrient-rich blood rushes back to the peripheral tissues, acting as a natural pump that flushes metabolic debris and replenishes cellular energy stores.</p>
      
      <h2>2. Dopamine and the Autonomic Reset</h2>
      <p>One of the most remarkable findings regarding cold exposure is its impact on neural chemistry. Studies have shown that immersion in cold water (14°C or lower) elevates plasma concentrations of noradrenaline by 530% and dopamine by 250%. Unlike chemical stimulants that spike dopamine levels and cause a subsequent crash, cold exposure triggers a slow, sustained release of dopamine that remains elevated for several hours, contributing to improved focus, energy, and overall mood.</p>
      
      <h2>3. Cultivating Central Nervous System Control</h2>
      <p>The initial reaction to freezing water is the "gasp reflex," accompanied by a spike in heart rate and hyperventilation—the classic "fight-or-flight" response. By remaining in the water and utilizing slow, controlled diaphragmatic breathing, you actively train your brain to override this sympathetic reflex. This practice strengthens the parasympathetic brake (vagal tone), translating directly to improved stress resilience in your daily professional and personal life.</p>
      
      <p>To experience the benefits, start slowly: a 1.5 to 3 minute plunge is all it takes to trigger these pathways. Our Ice Bath pools at Lotus Health Club are kept filtered and maintained at a constant 4°C to provide the ideal stimulus for your recovery routine.</p>
    `
  },
  {
    id: "blog-2",
    title: "Mitochondrial Health & Red Light Therapy: Fueling Cellular Longevity",
    category: "Biohacking",
    author: "Elena Rostova, Performance Lead",
    date: "June 25, 2026",
    readTime: "5 min read",
    excerpt: "Discover how photobiomodulation stimulates Cytochrome c Oxidase in the mitochondria, boosting ATP production, accelerating skin rejuvenation, and relieving joint discomfort.",
    content: `
      <p>Every second, trillions of cells in your body rely on tiny powerhouses called mitochondria to produce Adenosine Triphosphate (ATP)—the fundamental energy currency of life. As we age or undergo chronic stress, mitochondrial efficiency declines. Photobiomodulation, commonly known as Red Light Therapy (RLT), offers a clinically proven method to charge these cellular power plants directly.</p>
      
      <h2>How Light Becomes Cellular Energy</h2>
      <p>Red Light Therapy utilizes specific wavelengths of light, typically in the red (630–660nm) and near-infrared (810–850nm) spectrums. These light particles (photons) penetrate several centimeters beneath the skin barrier, reaching muscular and skeletal tissues.</p>
      <p>Within the mitochondria, there is a copper-containing enzyme called Cytochrome c Oxidase, a key player in the respiratory chain. During times of stress, Nitric Oxide binds to this enzyme, halting oxygen transport and cellular respiration. Photons from red and near-infrared light knock the Nitric Oxide loose, allowing Cytochrome c Oxidase to bind with oxygen and proceed with ATP production unimpeded.</p>
      
      <h2>Key Benefits of Red Light Photobiomodulation</h2>
      <ul>
        <li><strong>Accelerated Muscle Repair:</strong> Enhanced ATP synthesis increases protein synthesis, facilitating faster muscle fibre repair and reducing delayed onset muscle soreness (DOMS).</li>
        <li><strong>Collagen & Skin Rejuvenation:</strong> Fibroblasts (cells responsible for skin structure) are stimulated, boosting natural collagen and elastin production to decrease fine lines and improve elasticity.</li>
        <li><strong>Anti-Inflammatory Modulation:</strong> RLT helps reduce systemic oxidative stress by neutralizing free radicals, mitigating joint paint in individuals with arthritis or chronic injuries.</li>
      </ul>
      
      <p>At Lotus, our full-body medical-grade light panels provide dual-spectrum wavelengths, ensuring both superficial skin rejuvenation and deep joint and muscle penetration in a single 20-minute session.</p>
    `
  },
  {
    id: "blog-3",
    title: "Optimising Your Sleep Architecture: The Key to Cognitive Longevity",
    category: "Longevity",
    author: "Marcus Thorne, Sleep Coach",
    date: "June 18, 2026",
    readTime: "7 min read",
    excerpt: "Deep sleep and REM sleep are vital for physical repair and cognitive consolidation. Learn how circadian hygiene, wind-down routines, and magnesium therapy improve sleep quality.",
    content: `
      <p>Sleep is not a passive state of inactivity; it is a highly active, neuroprotective process essential for life. High-performance individuals often sacrifice sleep, unaware that chronic deprivation damages the brain's glymphatic clearance system, leaving behind metabolic proteins associated with cognitive decline. Real recovery starts with sleep optimisation.</p>
      
      <h2>Understanding Sleep Architecture</h2>
      <p>A healthy night of sleep consists of 4 to 6 cycles, each lasting roughly 90 minutes. These cycles transition between Non-Rapid Eye Movement (NREM) sleep—further divided into light sleep and slow-wave (deep) sleep—and Rapid Eye Movement (REM) sleep.</p>
      <p><strong>Deep Sleep (Slow-Wave):</strong> Occurring primarily in the first half of the night, deep sleep is when the body conducts physical maintenance. Growth hormone is released, tissues are repaired, and the immune system is reinforced.</p>
      <p><strong>REM Sleep:</strong> Dominating the latter half of the night, REM sleep is the domain of cognitive restoration. This phase consolidates memory, processes emotions, and enhances creative problem-solving.</p>
      
      <h2>Chronobiological Sleep Hacks</h2>
      <p>To optimise these cycles, you must regulate your circadian rhythm. Here are three immediately actionable guidelines:</p>
      <ol>
        <li><strong>Morning Light Exposure:</strong> View 10-15 minutes of direct sunlight within an hour of waking. This halts melatonin production and sets a biological timer for melatonin release 16 hours later.</li>
        <li><strong>Block Blue Light at Night:</strong> After 8:00 PM, dim overhead lights and wear amber glasses to prevent blue-wavelength light from suppressing sleep hormones.</li>
        <li><strong>Thermal Contrast:</strong> Taking a warm sauna or bath 90 minutes before bed raises core temperature, causing a rapid cooling rebound when you exit. A drop in core temperature is the body's primary signal that it is time to sleep.</li>
      </ol>
      
      <p>Discover customised sleep analysis and thermal protocols at Lotus Health Club to achieve deeper, more refreshing nights.</p>
    `
  },
  {
    id: "blog-4",
    title: "Fueling Longevity: The Autophagy Pathway & Strategic Fasting",
    category: "Nutrition",
    author: "Dr. Jonathan Cross, Longevity Advisor",
    date: "June 10, 2026",
    readTime: "8 min read",
    excerpt: "Autophagy is the body's cellular recycling mechanism. Learn how intermittent fasting, exercise, and specific dietary mimetics clear damaged proteins and extend healthspan.",
    content: `
      <p>Autophagy—literally translating to 'self-eating'—is the body's internal house-cleaning process. When activated, cells degrade and recycle damaged components, misfolded proteins, and worn-out mitochondria. Stimulating this pathway is a major focus of modern longevity medicine.</p>
      
      <h2>The Molecular Triggers of Autophagy</h2>
      <p>Autophagy is governed by nutrient-sensing pathways, primarily mTOR (mammalian target of rapamycin) and AMPK. When nutrients (especially amino acids and glucose) are plentiful, mTOR is active, promoting cell growth but suppressing autophagy. When nutrients are scarce, mTOR is silenced and AMPK is activated, instructing cells to seek internal fuel by recycling damaged parts.</p>
      
      <h2>Practical Protocols to Stimulate Autophagy</h2>
      <ul>
        <li><strong>Time-Restricted Eating (TRE):</strong> Compressing your daily eating window to 8 hours (e.g., eating from 11:00 AM to 7:00 PM) extends the overnight fasting state, promoting mild autophagy.</li>
        <li><strong>Exercise Intensity:</strong> High-Intensity Interval Training (HIIT) consumes muscular glycogen reserves, mimicking nutrient deprivation and stimulating AMPK.</li>
        <li><strong>Autophagy Mimetics:</strong> Consuming polyphenols such as Spermidine (found in wheat germ), Resveratrol (found in grape skins), and EGCG (from green tea) support these cellular clearing pathways.</li>
      </ul>
      
      <p>By integrating fasting structures with bio-monitoring, we assist you in safely unlocking these cellular cleansing mechanisms.</p>
    `
  }
];

export const EVENTS = [
  {
    id: "event-1",
    title: "Breathwork & Cold Exposure Masterclass",
    type: "Workshops",
    date: "July 12, 2026",
    time: "10:00 AM - 12:30 PM",
    instructor: "Marcus Thorne & Elena Rostova",
    price: 95,
    spotsLeft: 4,
    description: "Master the oxygenation breathing techniques of Wim Hof and learn how to manage physical distress inside the ice plunge. Includes guided cold plunge and thermal contrast coaching."
  },
  {
    id: "event-2",
    title: "Longevity & Biohacking Weekend Retreat",
    type: "Wellness Retreats",
    date: "August 15-16, 2026",
    time: "9:00 AM - 5:00 PM Daily",
    instructor: "Dr. Jonathan Cross & Guests",
    price: 495,
    spotsLeft: 8,
    description: "A two-day immersive experience featuring biomechanical screenings, cellular therapy rotations, sleep optimisation seminars, customised longevity meal planning, and restorative yoga."
  },
  {
    id: "event-3",
    title: "Cardiovascular Health & VO2 Max Seminar",
    type: "Guest Speakers",
    date: "September 05, 2026",
    time: "6:30 PM - 8:00 PM",
    instructor: "Professor David Sinclair (Virtual)",
    price: 35,
    spotsLeft: 25,
    description: "An evening discussing the role of aerobic capacity (VO2 Max) as a primary biomarker for lifespan extension, featuring actionable metrics to measure and train mitochondrial output."
  }
];
