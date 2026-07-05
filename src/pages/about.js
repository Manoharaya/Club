// About Us Page Component
export function render(container) {
  container.innerHTML = `
    <!-- Header Section -->
    <section class="section" style="padding-top: 4rem; padding-bottom: 2rem;">
      <div class="section-header">
        <span class="section-subtitle">Our Heritage</span>
        <h1 class="section-title">The Philosophy of Lotus</h1>
        <p class="section-desc">We exist to bridge the gap between ancient recovery rituals and modern scientific wellness frameworks, creating an elevated environment for cell longevity and human performance.</p>
      </div>
    </section>

    <!-- Mission, Vision, Philosophy -->
    <section class="section">
      <div class="about-intro-grid">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <h2 style="font-size: 1.8rem; line-height: 1.3;">Science-Based Longevity Meeting Sensory Sanctuary</h2>
          <p style="color: var(--color-grey); font-size: 1.05rem;">
            Lotus Health Club was born from a simple realization: in the modern world, our bodies are bombarded by biological stressors, yet we lack the dedicated infrastructure to repair and restore ourselves at a cellular level.
          </p>
          <p style="color: var(--color-grey); font-size: 1.05rem;">
            We do not view recovery as a luxury afterthought. It is the vital foundation of performance, mental longevity, and active aging. By controlling local environmental stimuli—introducing heat, deep cold, light wavelengths, floatation, and conscious breathing—we trigger biological switches that enhance human vitality.
          </p>
        </div>
        <div style="background-color: var(--color-sage-light); padding: 3rem; border-radius: var(--border-radius-lg); border: 1px solid var(--color-grey-light); display: flex; flex-direction: column; justify-content: center; gap: 1.5rem;">
          <div style="border-left: 3px solid var(--color-gold); padding-left: 1.5rem;">
            <h4 style="font-family: var(--font-body); font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.1em; color: var(--color-gold-hover); margin-bottom: 0.5rem;">Why Lotus Health Club?</h4>
            <p style="font-size: 0.95rem; color: var(--color-forest); font-weight: 400; line-height: 1.5;">
              Every session is backed by modern clinical research. We work alongside sports physiologists, longevity consultants, and neural experts to ensure our temperatures, wavelength spectrums, and sequence patterns yield measurable, biological results.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Cards Section -->
    <section class="section-full about-mission-section" style="background-color: var(--color-sage-bg); color: var(--color-forest); border-radius: var(--border-radius-lg); margin: 0 2rem 5rem 2rem; padding: 5rem 3rem;">
      <div style="max-width: 1200px; margin: 0 auto;">
        <div class="mission-grid">
          <div class="mission-card">
            <h3>Our Mission</h3>
            <p>To empower our members to reclaim physical sovereignty, master neural stress thresholds, and extend active, healthy healthspan through evidence-based thermal contrast, cell-charging light, and structural movement therapies.</p>
          </div>
          <div class="mission-card">
            <h3>Our Vision</h3>
            <p>To establish Perth's premier community of longevity-focused individuals, proving that proactive wellness and advanced bio-analytics can dramatically slow biological aging and optimise human capability.</p>
          </div>
          <div class="mission-card">
            <h3>Our Philosophy</h3>
            <p>We respect the wisdom of biological stressors. By exposing the body to acute, controlled stress (hormesis) via ice, saunas, and movement, we stimulate gene networks that support natural repair, detoxification, and DNA integrity.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Science-Backed Approach Section -->
    <section class="section" style="margin-bottom: 5rem;">
      <div class="grid-2">
        <div style="order: 2;">
          <span class="section-subtitle">Methodology</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">The Hormetic Recovery Model</h2>
          <p style="color: var(--color-grey); margin-bottom: 1.25rem;">
            Hormesis is a biological phenomenon where a low dose of a stressor triggers cellular defense mechanisms that overcompensate, making the system stronger.
          </p>
          <p style="color: var(--color-grey); margin-bottom: 1.25rem;">
            When you step into our 4°C Ice Bath or 85°C Infrared Sauna, you are applying controlled, hormetic stress. This triggers:
          </p>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; color: var(--color-forest); font-weight: 500;">
            <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-gold)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Heat Shock Proteins (HSP) to protect cells and support muscle mass.
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-gold)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Cold Shock Proteins (like RBM3) to stimulate synaptic density.
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-gold)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Pneumatic compression to increase nitric oxide and flush lymph fluid.
            </li>
          </ul>
          <a href="#/services" class="btn-cta">Explore Scientific Services</a>
        </div>
        <div style="background-color: var(--color-sage-light); border-radius: var(--border-radius-lg); padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem; border: 1px solid var(--color-grey-light);">
          <h4 style="font-family: var(--font-brand); color: var(--color-forest); font-size: 1.2rem; border-bottom: 1px solid rgba(17,40,31,0.1); padding-bottom: 0.75rem;">Biological Markers We Track:</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <strong style="color: var(--color-forest); display: block; font-size: 0.95rem;">Vagal Tone (HRV)</strong>
              <span style="font-size: 0.85rem; color: var(--color-grey);">Measures the balance of your autonomic nervous system.</span>
            </div>
            <div>
              <strong style="color: var(--color-forest); display: block; font-size: 0.95rem;">Inflammatory Cytokines</strong>
              <span style="font-size: 0.85rem; color: var(--color-grey);">Cold exposure downregulates IL-6 and TNF-alpha levels.</span>
            </div>
            <div>
              <strong style="color: var(--color-forest); display: block; font-size: 0.95rem;">Mitochondrial Efficiency</strong>
              <span style="font-size: 0.85rem; color: var(--color-grey);">RLT wavelengths charge cellular power plants (ATP).</span>
            </div>
            <div>
              <strong style="color: var(--color-forest); display: block; font-size: 0.95rem;">Delta Wave Sleep Duration</strong>
              <span style="font-size: 0.85rem; color: var(--color-grey);">Floatation and magnesium absorption extend deep sleep phases.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Our Team Section -->
    <section class="section" style="padding-bottom: 6rem;">
      <div class="section-header">
        <span class="section-subtitle">The Experts</span>
        <h2 class="section-title">Meet Our Longevity & Performance Team</h2>
        <p class="section-desc">Our highly certified team brings years of clinical, sports science, and holistic coaching experience.</p>
      </div>

      <div class="team-grid" style="margin-top: 4rem;">
        <!-- Team 1 -->
        <div class="team-member">
          <div class="team-member-img" style="background-image: url('./assets/team_1.png'); background-color: var(--color-sage);"></div>
          <h4>Sophia Chen</h4>
          <p>Yoga Director & Breath Specialist</p>
          <p style="color: var(--color-grey); text-transform: none; font-size: 0.85rem; letter-spacing: 0; font-weight: 300; margin-top: 0.5rem; line-height: 1.4;">
            10+ years teaching yoga nidra, mobility flow, and pranayama breathwork to professional athletes.
          </p>
        </div>

        <!-- Team 2 -->
        <div class="team-member">
          <div class="team-member-img" style="background-image: url('./assets/team_2.png'); background-color: var(--color-sage);"></div>
          <h4>Liam Davis</h4>
          <p>Lead Movement & Pilates Instructor</p>
          <p style="color: var(--color-grey); text-transform: none; font-size: 0.85rem; letter-spacing: 0; font-weight: 300; margin-top: 0.5rem; line-height: 1.4;">
            Clinical Pilates instructor specializing in core stabilizer mechanics, posture re-education, and rehab.
          </p>
        </div>

        <!-- Team 3 -->
        <div class="team-member">
          <div class="team-member-img" style="background-image: url('./assets/team_3.png'); background-color: var(--color-sage);"></div>
          <h4>Marcus Thorne</h4>
          <p>Longevity & Sleep Consultant</p>
          <p style="color: var(--color-grey); text-transform: none; font-size: 0.85rem; letter-spacing: 0; font-weight: 300; margin-top: 0.5rem; line-height: 1.4;">
            Sleep medicine researcher and performance advisor helping members implement chronobiological habits.
          </p>
        </div>

        <!-- Team 4 -->
        <div class="team-member">
          <div class="team-member-img" style="background-image: url('./assets/team_4.png'); background-color: var(--color-sage);"></div>
          <h4>Elena Rostova</h4>
          <p>Lead Clinical Physiotherapist</p>
          <p style="color: var(--color-grey); text-transform: none; font-size: 0.85rem; letter-spacing: 0; font-weight: 300; margin-top: 0.5rem; line-height: 1.4;">
            Specialist in sports injury rehabilitation, dry needling, myotherapy, and biomechanics mapping.
          </p>
        </div>
      </div>
    </section>
  `;
}
