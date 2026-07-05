// Memberships Component
import { MEMBERSHIPS } from "../data.js";

export function render(container) {
  container.innerHTML = `
    <!-- Header Section -->
    <section class="section" style="padding-top: 4rem; ">
      <div class="section-header">
        <span class="section-subtitle">Membership Plans</span>
        <h1 class="section-title">Invest in Your Healthspan</h1>
        <p class="section-desc">Select a membership tier tailored to your athletic performance, recovery frequency, and longevity aspirations.</p>
      </div>
    </section>

    <!-- Pricing Grid -->
    <section class="section" style="padding-bottom: 3rem;">
      <div class="memberships-grid">
        ${MEMBERSHIPS.map(
          (tier) => `
          <div class="card-luxury membership-card ${tier.popular ? "popular" : ""}">
            ${tier.popular ? `<div class="membership-popular-badge">Most Popular</div>` : ""}
            
            <div class="membership-header">
              <span class="badge-gold" style="${tier.popular ? "background-color: var(--color-gold); color: var(--color-forest-dark); border-color: var(--color-gold);" : ""}">${tier.badge}</span>
              <h2 class="membership-title">${tier.name}</h2>
              <p style="font-size: 0.9rem; color: ${tier.popular ? "var(--color-sage-light)" : "var(--color-grey)"}; margin-bottom: 1.5rem;">${tier.subtitle}</p>
              
              <div class="membership-price">
                <span class="currency">$</span>
                <span class="amount">${tier.price}</span>
                <span class="period">/ ${tier.period}</span>
              </div>
            </div>
            
            <div class="membership-benefits-title">Included Benefits:</div>
            <ul class="membership-benefits-list">
              ${tier.benefits
                .map(
                  (b) => `
                <li class="membership-benefit-item">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>${b.text}</span>
                </li>
              `,
                )
                .join("")}
            </ul>

            <button class="btn-cta btn-membership-join" data-tier="${tier.id}" style="${tier.popular ? "background-color: var(--color-gold); border-color: var(--color-gold); color: var(--color-forest-dark);" : "background-color: transparent; border-color: var(--color-forest); color: var(--color-forest);"}">
              Select ${tier.name} Tier
            </button>
          </div>
        `,
        ).join("")}
      </div>

      <div class="membership-disclaimer">
        <p>* Weekly memberships are billed monthly on a recurring cycle. Standard contracts require a 3-month minimum commitment.</p>
        <p>Corporate accounts and family packages are available. Please see our <a href="#/corporate" style="color: var(--color-gold-hover); font-weight: 500;">Corporate Wellness</a> page for inquiries.</p>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-full" style="background-color: var(--color-grey-light); padding: 2rem 2rem;">
      <div class="container" style="max-width: 900px;">
        <div class="section-header">
          <span class="section-subtitle">FAQ</span>
          <h2 class="section-title">Membership Questions</h2>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-top: 3rem;">
          <div style="background-color: var(--color-white); border-radius: var(--border-radius-md); padding: 2rem; border: 1px solid var(--color-grey-light);">
            <h4 style="font-family: var(--font-body); font-weight: 600; color: var(--color-forest); margin-bottom: 0.5rem;">Can I pause or cancel my membership?</h4>
            <p style="color: var(--color-grey); font-size: 0.95rem;">Yes. All memberships can be paused for up to 6 weeks per calendar year at no charge. Cancellations after the 3-month initial term require 14 days written notice.</p>
          </div>

          <div style="background-color: var(--color-white); border-radius: var(--border-radius-md); padding: 2rem; border: 1px solid var(--color-grey-light);">
            <h4 style="font-family: var(--font-body); font-weight: 600; color: var(--color-forest); margin-bottom: 0.5rem;">How does the guest pass system work?</h4>
            <p style="color: var(--color-grey); font-size: 0.95rem;">Guest passes allow you to bring a friend to experience the Recovery Zone (Ice Baths, Infrared Saunas, compression) or Wellness Studio classes. Passes are renewed monthly and do not roll over.</p>
          </div>

          <div style="background-color: var(--color-white); border-radius: var(--border-radius-md); padding: 2rem; border: 1px solid var(--color-grey-light);">
            <h4 style="font-family: var(--font-body); font-weight: 600; color: var(--color-forest); margin-bottom: 0.5rem;">What is the AI Wellness Assessment?</h4>
            <p style="color: var(--color-grey); font-size: 0.95rem;">Starting on Silver tier, you can compile biological health scores. The algorithm syncs your Garmin, Whoop, Fitbit, or Apple Health watch metrics (Heart Rate Variability, sleeping heart rates) to tailor recovery sequences specifically to your current neurological stress load.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach button event handlers to membership select
  const joinBtns = container.querySelectorAll(".btn-membership-join");
  joinBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tierId = btn.getAttribute("data-tier");

      // We will redirect to the booking page, pre-selecting membership tier
      window.location.hash = `#/booking?membership=${tierId}`;
    });
  });
}
