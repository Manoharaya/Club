// Home Page Component
export function render(container) {
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('./assets/wellness_hero.png');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-tagline">Recover. Perform. Thrive.</span>
        <h1 class="hero-title">
          Perth's Premier Recovery & 
          <span>Longevity Sanctuary</span>
        </h1>
        <p class="section-desc" style="color: var(--color-sage-light); margin-bottom: 2.5rem; max-width: 700px;">
          Fusing clinical-grade cold immersion, advanced thermal contrast, photobiomodulation, and dynamic movement studio classes with future-ready AI bio-analytics.
        </p>
        <div class="hero-ctas">
          <a href="#/booking" class="btn-cta">Book Session</a>
          <a href="#/memberships" class="btn-secondary-white">Explore Memberships</a>
          <a href="#/services" class="btn-secondary-white">Services</a>
        </div>
      </div>
    </section>

    <!-- About Lotus Teaser Section -->
    <section class="section">
      <div class="grid-2">
        <div class="about-teaser-img">
          <div class="about-teaser-img-inner" style="background-image: url('./assets/about_teaser.png'); background-color: var(--color-forest-light);"></div>
        </div>
        <div class="about-teaser-content">
          <span class="section-subtitle">Holistic Longevity</span>
          <h3>A Sanctuary Specially Designed for Human Optimization</h3>
          <p>
            At Lotus Health Club, we believe that longevity is not just about lifespan, but healthspan—the quality of the years you live. We unite ancient, grounding physical restoration techniques with cutting-edge medical recovery science.
          </p>
          <p>
            Whether you are an elite athlete seeking to compress recovery times, a high-performing professional combating chronic stress, or an individual aiming to preserve joint and cognitive health, Lotus provides a bespoke pathway.
          </p>
          <div class="about-teaser-points">
            <div class="teaser-point">
              <div class="teaser-point-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>Athletic Recovery</span>
            </div>
            <div class="teaser-point">
              <div class="teaser-point-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>Longevity Science</span>
            </div>
            <div class="teaser-point">
              <div class="teaser-point-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>Holistic Wellness</span>
            </div>
            <div class="teaser-point">
              <div class="teaser-point-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>Mental Wellbeing</span>
            </div>
          </div>
          <a href="#/about" class="btn-cta">Our Philosophy & Team</a>
        </div>
      </div>
    </section>

    <!-- Experience Pillars (Feature Blocks) -->
    <section class="section-full" style="background-color: var(--color-forest); color: var(--color-white); text-align: center;">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle" style="color: var(--color-gold);">Sanctuary Zones</span>
          <h2 class="section-title" style="color: var(--color-white);">Optimise Every Layer of Your Biology</h2>
          <p class="section-desc" style="color: var(--color-sage-light);">Our state-of-the-art facilities are split into five distinct functional zones.</p>
        </div>
        
        <div class="grid-3" style="margin-top: 4rem;">
          <!-- Card 1 -->
          <div class="card-glass text-center" style="background: rgba(255, 255, 255, 0.03); border-color: rgba(255, 255, 255, 0.08);">
            <div class="pillar-icon" style="color: var(--color-gold); margin-bottom: 1.5rem;">
              <!-- Cold / Snow Icon -->
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 style="color: var(--color-white); margin-bottom: 1rem; font-size: 1.3rem;">Recovery Zone</h3>
            <p style="color: var(--color-sage-light); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">
              Contrast therapy via custom 4°C ice baths, full-spectrum infrared saunas, red light pods, and Epsom salt sensory floatation tanks.
            </p>
            <a href="#/services?zone=recovery" class="btn-read-more" style="color: var(--color-gold); justify-content: center;">Explore Zone &rarr;</a>
          </div>

          <!-- Card 2 -->
          <div class="card-glass text-center" style="background: rgba(255, 255, 255, 0.03); border-color: rgba(255, 255, 255, 0.08);">
            <div class="pillar-icon" style="color: var(--color-gold); margin-bottom: 1.5rem;">
              <!-- Lotus / Mindfulness Icon -->
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 style="color: var(--color-white); margin-bottom: 1rem; font-size: 1.3rem;">Wellness Studio</h3>
            <p style="color: var(--color-sage-light); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">
              Yoga, athletic mobility stretching, breathwork mechanics, and reformer/mat Pilates classes led by master instructors.
            </p>
            <a href="#/services?zone=studio" class="btn-read-more" style="color: var(--color-gold); justify-content: center;">Explore Zone &rarr;</a>
          </div>

          <!-- Card 3 -->
          <div class="card-glass text-center" style="background: rgba(255, 255, 255, 0.03); border-color: rgba(255, 255, 255, 0.08);">
            <div class="pillar-icon" style="color: var(--color-gold); margin-bottom: 1.5rem;">
              <!-- Hand Therapy Icon -->
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
            </div>
            <h3 style="color: var(--color-white); margin-bottom: 1rem; font-size: 1.3rem;">Recovery Treatments</h3>
            <p style="color: var(--color-sage-light); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">
              Targeted hands-on physical care: Sports & Deep Tissue Massage, Myotherapy, Physiotherapy, Dry Needling, and Cupping.
            </p>
            <a href="#/services?zone=treatments" class="btn-read-more" style="color: var(--color-gold); justify-content: center;">Explore Zone &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Wellness Promo -->
    <section class="section" style="padding-bottom: 6rem;">
      <div class="card-glass" style="background-color: var(--color-white); padding: 4rem; display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; align-items: center;">
        <div>
          <span class="badge-gold">Future-Ready Optimization</span>
          <h2 style="font-size: 2.2rem; margin-bottom: 1.5rem;">Life Science AI Wellness Integration</h2>
          <p style="color: var(--color-grey); margin-bottom: 1.5rem;">
            Sync your wearables (Apple Health, Garmin, Whoop, Fitbit) to compile a unified biometrics scoreboard. Our advanced machine-learning algorithm evaluates your HRV, resting heart rate, and sleep architecture to auto-generate personalized recovery protocols.
          </p>
          <p style="color: var(--color-grey); margin-bottom: 2rem;">
            As a gold or platinum member, access real-time biometrics, goal tracking dashboards, and continuous smart recommendations to dial in your daily healthspan.
          </p>
          <div style="display: flex; gap: 1rem;">
            <a href="#/portal" class="btn-cta">Access AI Dashboard</a>
            <a href="#/timetable" class="btn-secondary-white" style="border-color: var(--color-forest); color: var(--color-forest);">View Class Timetable</a>
          </div>
        </div>
        <div style="background-color: var(--color-sage-light); padding: 2.5rem; border-radius: var(--border-radius-lg); border: 1px solid var(--color-grey-light);">
          <h4 style="margin-bottom: 1.5rem; font-family: var(--font-body); font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em; color: var(--color-sage-dark);">
            🧬 Live Biomarker Sync Simulator
          </h4>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(17,40,31,0.08); padding-bottom: 0.75rem;">
              <span style="font-weight: 500; font-size: 0.95rem;">Heart Rate Variability (HRV)</span>
              <span style="font-family: var(--font-brand); color: var(--color-gold-hover); font-weight: 700;">72 ms</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(17,40,31,0.08); padding-bottom: 0.75rem;">
              <span style="font-weight: 500; font-size: 0.95rem;">Nocturnal Sleep Quality</span>
              <span style="font-family: var(--font-brand); color: var(--color-gold-hover); font-weight: 700;">94% Excellent</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(17,40,31,0.08); padding-bottom: 0.75rem;">
              <span style="font-weight: 500; font-size: 0.95rem;">Parasympathetic Stress Score</span>
              <span style="font-family: var(--font-brand); color: var(--color-green-success); font-weight: 700;">Optimal (Low)</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
              <span style="font-weight: 500; font-size: 0.95rem;">Biological Age Score</span>
              <span style="font-family: var(--font-brand); color: var(--color-gold-hover); font-weight: 700;">-4.2 Years vs Chronological</span>
            </div>
          </div>
          <div style="background-color: var(--color-white); border-radius: var(--border-radius-md); padding: 1rem; border-left: 3px solid var(--color-gold); margin-top: 1.5rem; font-size: 0.85rem; color: var(--color-grey); line-height: 1.4;">
            <strong>AI Recommendation:</strong> Baseline markers indicate elevated physical fatigue. We recommend scheduling an Infrared Sauna session followed by 10 minutes of box breathing today.
          </div>
        </div>
      </div>
    </section>
  `;
}
