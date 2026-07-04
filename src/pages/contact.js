// Contact Component
import { showNotification } from '../app.js';

export function render(container) {
  container.innerHTML = `
    <!-- Header Section -->
    <section class="section" style="padding-top: 4rem; padding-bottom: 2rem;">
      <div class="section-header">
        <span class="section-subtitle">Sanctuary Connections</span>
        <h1 class="section-title">Contact Our Sanctuary</h1>
        <p class="section-desc">Reach out to our hospitality desk to discuss membership programs, schedule corporate bookings, or clarify therapy protocols.</p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="section" style="padding-bottom: 4rem;">
      <div class="contact-grid">
        <!-- Contact Details -->
        <div class="contact-info-container">
          <div class="contact-info-block">
            <span class="badge-gold">Physical Location</span>
            <h3 style="color: var(--color-forest); margin-top: 0.5rem;">The Sanctuary</h3>
            <p style="margin-top: 0.25rem;">108 St Georges Terrace, Perth WA 6000</p>
            <span style="font-size: 0.85rem; color: var(--color-grey); display: block; margin-top: 0.25rem;">Located within the historic Palace Chambers, Lower Ground level. Parking vouchers validated at Central Park.</span>
          </div>

          <div class="contact-info-block">
            <span class="badge-gold">Opening Hours</span>
            <h3 style="color: var(--color-forest); margin-top: 0.5rem;">Sanctuary Availability</h3>
            <p style="margin-top: 0.25rem;"><strong>Monday - Friday:</strong> 5:30 AM - 9:00 PM</p>
            <p><strong>Saturday - Sunday:</strong> 7:00 AM - 7:00 PM</p>
            <span style="font-size: 0.85rem; color: var(--color-grey); display: block; margin-top: 0.25rem;">Holiday hours align with standard weekend hours. Closed Good Friday and Christmas Day.</span>
          </div>

          <div class="contact-info-block">
            <span class="badge-gold">Direct Lines</span>
            <h3 style="color: var(--color-forest); margin-top: 0.5rem;">Voice & Digital Channels</h3>
            <p style="margin-top: 0.25rem;"><strong>Phone:</strong> (08) 9221 8888</p>
            <p><strong>Email:</strong> welcome@lotushealthclub.com.au</p>
            <p><strong>Corporate Bookings:</strong> corporate@lotushealthclub.com.au</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <h3 style="font-size: 1.4rem; margin-bottom: 1.5rem; color: var(--color-forest); border-bottom: 1px solid var(--color-grey-light); padding-bottom: 0.5rem;">Inquiry Desk</h3>
          
          <form class="checkout-form" id="contactSanctuaryForm">
            <div class="form-row">
              <div class="form-field">
                <label for="contactName">Full Name</label>
                <input type="text" id="contactName" class="form-input" required>
              </div>
              <div class="form-field">
                <label for="contactEmail">Email Address</label>
                <input type="email" id="contactEmail" class="form-input" required>
              </div>
            </div>

            <div class="form-field">
              <label for="contactTopic">Inquiry Topic</label>
              <select id="contactTopic" class="filter-select" style="background-color: var(--color-alabaster);" required>
                <option value="">Choose topic...</option>
                <option value="Membership Tiers">Membership Tiers</option>
                <option value="Recovery Zones Services">Recovery Zone Therapies</option>
                <option value="Physiotherapy / Dry Needling">Clinical Treatments</option>
                <option value="Media or Collaborations">Media & Collaborations</option>
              </select>
            </div>

            <div class="form-field">
              <label for="contactMsg">Message Details</label>
              <textarea id="contactMsg" class="form-input" rows="5" placeholder="Share your wellness aspirations or questions, and we will get back to you shortly..." required></textarea>
            </div>

            <button type="submit" class="btn-cta" style="width: 100%; margin-top: 1rem; padding: 0.8rem;">Transmit Message</button>
          </form>
        </div>
      </div>

      <!-- Stylized Interactive SVG Map -->
      <div class="svg-map-wrapper">
        <svg class="svg-map" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <!-- Background River Swan representation -->
          <path d="M 0,320 Q 200,310 400,340 T 800,310 L 800,400 L 0,400 Z" fill="#b9cbd4" />
          <text x="550" y="375" font-family="'Outfit', sans-serif" font-size="12" fill="#5c7a8a" letter-spacing="1">SWAN RIVER</text>
          
          <!-- Map roads grids representation -->
          <!-- Wellington St -->
          <line x1="0" y1="80" x2="800" y2="80" stroke="#f1f3f2" stroke-width="12" />
          <text x="40" y="94" font-family="'Outfit', sans-serif" font-size="10" fill="#a1aba6">WELLINGTON ST</text>

          <!-- Murray St -->
          <line x1="0" y1="130" x2="800" y2="130" stroke="#f1f3f2" stroke-width="12" />
          <text x="40" y="144" font-family="'Outfit', sans-serif" font-size="10" fill="#a1aba6">MURRAY ST mall</text>

          <!-- Hay St -->
          <line x1="0" y1="180" x2="800" y2="180" stroke="#f1f3f2" stroke-width="12" />
          <text x="40" y="194" font-family="'Outfit', sans-serif" font-size="10" fill="#a1aba6">HAY ST mall</text>

          <!-- St Georges Terrace (Major) -->
          <line x1="0" y1="240" x2="800" y2="240" stroke="#eaeeec" stroke-width="24" />
          <text x="40" y="247" font-family="'Outfit', sans-serif" font-weight="600" font-size="11" fill="#4d5a52" letter-spacing="0.5">ST GEORGES TERRACE</text>

          <!-- Cross streets vertical -->
          <!-- Milligan St -->
          <line x1="180" y1="0" x2="180" y2="330" stroke="#f1f3f2" stroke-width="14" />
          <text x="186" y="50" font-family="'Outfit', sans-serif" font-size="9" fill="#a1aba6" transform="rotate(90,186,50)">MILLIGAN ST</text>

          <!-- William St -->
          <line x1="380" y1="0" x2="380" y2="340" stroke="#f1f3f2" stroke-width="16" />
          <text x="388" y="50" font-family="'Outfit', sans-serif" font-size="9" fill="#a1aba6" transform="rotate(90,388,50)">WILLIAM ST</text>

          <!-- Barrack St -->
          <line x1="580" y1="0" x2="580" y2="330" stroke="#f1f3f2" stroke-width="14" />
          <text x="586" y="50" font-family="'Outfit', sans-serif" font-size="9" fill="#a1aba6" transform="rotate(90,586,50)">BARRACK ST</text>

          <!-- Elizabeth Quay representation -->
          <rect x="360" y="280" width="120" height="40" rx="10" fill="#b9cbd4" stroke="#eaeeec" stroke-width="4" />
          <text x="382" y="303" font-family="'Outfit', sans-serif" font-size="9" fill="#5c7a8a">ELIZABETH QUAY</text>

          <!-- Central Park Building Block -->
          <rect x="250" y="145" width="100" height="70" rx="4" fill="#cfd6d2" />
          <text x="268" y="185" font-family="'Outfit', sans-serif" font-size="10" fill="#6e7a72">CENTRAL PARK</text>

          <!-- PinPoint Glow -->
          <circle cx="340" cy="240" r="15" fill="var(--color-gold-light)" opacity="0.6">
            <animate attributeName="r" values="8;20;8" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="340" cy="240" r="6" fill="var(--color-gold)" />
        </svg>

        <!-- Floating Map Card -->
        <div class="map-card-popup">
          <h4>Lotus Health Club</h4>
          <p>108 St Georges Terrace, Perth WA 6000</p>
          <p style="font-size: 0.7rem; color: var(--color-sage-light);">Chamber Level (LG), Palace Chambers</p>
          <a href="https://maps.google.com/?q=108+St+Georges+Terrace+Perth+WA+6000" target="_blank" rel="noopener" class="map-card-link">Get Directions &rarr;</a>
        </div>
      </div>
    </section>
  `;

  // Attach submit events
  const contactForm = container.querySelector('#contactSanctuaryForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification("Message Sent", "We have received your message and will reply via email shortly.", "success");
    contactForm.reset();
  });
}
