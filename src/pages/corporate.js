// Corporate Wellness Component
import { showNotification } from '../app.js';

export function render(container) {
  container.innerHTML = `
    <!-- Header Section -->
    <section class="section" style="padding-top: 4rem; padding-bottom: 2rem;">
      <div class="section-header">
        <span class="section-subtitle">Business Solutions</span>
        <h1 class="section-title">Corporate Wellness Programs</h1>
        <p class="section-desc">Empower your executive teams and employees with science-backed recovery, stress management, and longevity plans to elevate health, retention, and performance.</p>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="section" style="padding-top: 0; padding-bottom: 4rem;">
      <div class="corporate-stats">
        <div>
          <div class="corp-stat-num">120+</div>
          <div class="corp-stat-label">Corporate Clients in Perth</div>
        </div>
        <div>
          <div class="corp-stat-num">94%</div>
          <div class="corp-stat-label">Employee Program Retention</div>
        </div>
        <div>
          <div class="corp-stat-num">3.2x</div>
          <div class="corp-stat-label">Average Productivity Lift (HR study)</div>
        </div>
      </div>
    </section>

    <!-- Corporate Packages Grid -->
    <section class="section" style="padding-bottom: 4rem;">
      <div class="section-header">
        <span class="section-subtitle">Wellness Modules</span>
        <h2>Tailored Corporate Packages</h2>
      </div>

      <div class="grid-3" style="margin-top: 3rem;">
        <!-- Card 1 -->
        <div class="card-luxury" style="padding: 2.5rem 2rem;">
          <span class="badge-gold">Module 01</span>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem; color: var(--color-forest);">Executive Health Audits</h3>
          <p style="color: var(--color-grey); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">
            Bespoke biomechanical screenings, lactate threshold testing, and continuous sleep telemetry analysis for your leadership teams.
          </p>
          <ul style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--color-forest); font-weight: 500;">
            <li>⏱ Full physiological baselines</li>
            <li>📈 Bi-weekly AI reports</li>
            <li>🍎 Private longevity coaching</li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div class="card-luxury" style="padding: 2.5rem 2rem;">
          <span class="badge-gold">Module 02</span>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem; color: var(--color-forest);">Team Recovery Events</h3>
          <p style="color: var(--color-grey); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">
            Reserve the entire Recovery Zone for off-site corporate retreats. Includes guided breathwork workshops, cold plunge rotations, and infrared contrast.
          </p>
          <ul style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--color-forest); font-weight: 500;">
            <li>🛡️ Up to 25 employees catered</li>
            <li>🧘 Guided breathing & yoga</li>
            <li>🍵 Cold-pressed catering included</li>
          </ul>
        </div>

        <!-- Card 3 -->
        <div class="card-luxury" style="padding: 2.5rem 2rem;">
          <span class="badge-gold">Module 03</span>
          <h3 style="font-size: 1.3rem; margin-bottom: 1rem; color: var(--color-forest);">Subsidised Memberships</h3>
          <p style="color: var(--color-grey); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;">
            Provide employee corporate wellness cards, giving staff subsidized weekly access to recovery zones, Pilates, and yoga studio classes.
          </p>
          <ul style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: var(--color-forest); font-weight: 500;">
            <li>🎟 Flexible company subsidies</li>
            <li>📱 Easy portal-pass system</li>
            <li>📊 HR wellness metrics reports</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Corporate Form Section -->
    <section class="section" style="padding-bottom: 6rem;">
      <div class="corporate-contact-section">
        <div class="grid-2">
          <div>
            <span class="section-subtitle">Sanctuary RFP</span>
            <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--color-forest);">Corporate Consultation</h2>
            <p style="color: var(--color-grey); margin-bottom: 1.5rem;">
              Register your interest. Our longevity directors will schedule a private discovery call to customize wellness modules according to your team size, budget, and physiological goals.
            </p>
            <div style="background-color: var(--color-gold-light); border-radius: var(--border-radius-md); padding: 1.5rem; border-left: 3px solid var(--color-gold); font-size: 0.9rem; color: var(--color-grey); line-height: 1.5;">
              <strong>Note:</strong> Custom corporate rates are calculated starting from 5 employees. Tax incentives apply for corporate health programs under current Australian tax guidelines.
            </div>
          </div>

          <div>
            <form class="checkout-form" id="corpInquiryForm">
              <div class="form-row">
                <div class="form-field">
                  <label for="corpName">Your Name</label>
                  <input type="text" id="corpName" class="form-input" required>
                </div>
                <div class="form-field">
                  <label for="corpCompany">Company Name</label>
                  <input type="text" id="corpCompany" class="form-input" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-field">
                  <label for="corpEmail">Email Address</label>
                  <input type="email" id="corpEmail" class="form-input" required>
                </div>
                <div class="form-field">
                  <label for="corpSize">Number of Employees</label>
                  <select id="corpSize" class="filter-select" style="background-color: var(--color-alabaster);" required>
                    <option value="">Select size...</option>
                    <option value="5-20">5 - 20 employees</option>
                    <option value="21-50">21 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
              </div>

              <div class="form-field">
                <label for="corpMsg">Requirements & Goals</label>
                <textarea id="corpMsg" class="form-input" rows="4" placeholder="Briefly describe what you'd like to achieve (e.g. executive retreats, subsidized class access)..." required></textarea>
              </div>

              <button type="submit" class="btn-cta" style="width: 100%; margin-top: 1rem; padding: 0.8rem;">Submit RFP Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach submit events
  const corpForm = container.querySelector('#corpInquiryForm');
  corpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification("RFP Submitted", "Corporate inquiry submitted. A team coordinator will contact you in 24 hours.", "success");
    corpForm.reset();
  });
}
