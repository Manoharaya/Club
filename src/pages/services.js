// Services Directory Page Component
import { SERVICES } from '../data.js';

export function render(container, serviceId) {
  // If a specific service ID is requested, render its detail page
  if (serviceId) {
    renderServiceDetail(container, serviceId);
    return;
  }

  // Otherwise, render the general tabbed directory
  renderDirectory(container);
}

function renderDirectory(container) {
  // Check if there is a category selector in URL hash (e.g. ?zone=studio)
  const hash = window.location.hash;
  let activeTab = 'recovery'; // default
  
  if (hash.includes('?zone=')) {
    activeTab = hash.split('?zone=')[1] || 'recovery';
  }

  container.innerHTML = `
    <section class="section" style="padding-top: 4rem; padding-bottom: 2rem;">
      <div class="section-header">
        <span class="section-subtitle">Lotus Offerings</span>
        <h1 class="section-title">Therapies & Experiences</h1>
        <p class="section-desc">Select a sanctuary zone to explore our evidence-based, premium recovery, clinical treatments, and wellness studio programs.</p>
      </div>
    </section>

    <section class="section" style="padding-bottom: 6rem;">
      <div class="services-tabs-container">
        <!-- Tabs Navigation -->
        <div class="services-tabs-nav" id="servicesTabsNav">
          <button class="tab-btn ${activeTab === 'recovery' ? 'active' : ''}" data-category="recovery">Recovery Zone</button>
          <button class="tab-btn ${activeTab === 'studio' ? 'active' : ''}" data-category="studio">Wellness Studio</button>
          <button class="tab-btn ${activeTab === 'treatments' ? 'active' : ''}" data-category="treatments">Recovery Treatments</button>
          <button class="tab-btn ${activeTab === 'performance' ? 'active' : ''}" data-category="performance">Performance Centre</button>
          <button class="tab-btn ${activeTab === 'longevity' ? 'active' : ''}" data-category="longevity">Longevity Programs</button>
        </div>

        <!-- Dynamic Category Header and Description -->
        <div id="categoryHeaderBlock" style="margin-bottom: 3rem; text-align: center; max-width: 700px; margin-left: auto; margin-right: auto;">
          <h2 id="categoryTitle" style="font-size: 1.8rem; margin-bottom: 0.75rem;">${SERVICES[activeTab].title}</h2>
          <p id="categoryDesc" style="color: var(--color-grey); font-size: 1.05rem;">${SERVICES[activeTab].description}</p>
        </div>

        <!-- Services Grid Container -->
        <div class="services-list-grid" id="servicesGrid">
          ${renderCategoryCards(activeTab)}
        </div>
      </div>
    </section>
  `;

  // Attach interactive tab clicking events
  const tabButtons = container.querySelectorAll('.tab-btn');
  const servicesGrid = container.getElementById('servicesGrid');
  const categoryTitle = container.getElementById('categoryTitle');
  const categoryDesc = container.getElementById('categoryDesc');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabButtons.forEach(b => b.classList.remove('active'));
      // Add active to current
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      
      // Update URL hash without re-routing fully (to preserve states if needed)
      // or update search query params
      const cleanHash = window.location.hash.split('?')[0];
      history.pushState(null, '', `${cleanHash}?zone=${cat}`);

      // Update Header block
      categoryTitle.textContent = SERVICES[cat].title;
      categoryDesc.textContent = SERVICES[cat].description;

      // Re-render cards
      servicesGrid.innerHTML = renderCategoryCards(cat);
    });
  });
}

function renderCategoryCards(categoryKey) {
  const items = SERVICES[categoryKey].items;
  return items.map(item => `
    <div class="card-luxury service-card">
      <div class="service-card-body">
        <div>
          <span class="badge-gold">${item.duration} &bull; $${item.price}</span>
          <h3 class="service-card-title">${item.name}</h3>
          <p class="service-card-desc">${item.description}</p>
          
          <h4 class="service-benefits-title">Key Physiological Benefits:</h4>
          <ul class="service-benefits-list">
            ${item.benefits.slice(0, 3).map(b => `
              <li class="service-benefit-item">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div style="display: flex; gap: 0.75rem; margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--color-grey-light);">
          <a href="#/services/${item.id}" class="btn-service-book" style="flex: 1; border-color: var(--color-sage); color: var(--color-forest);">Scientific Details</a>
          <a href="#/booking?service=${item.id}" class="btn-service-book" style="flex: 1; background-color: var(--color-forest); color: var(--color-white); border-color: var(--color-forest);">Book Session</a>
        </div>
      </div>
    </div>
  `).join('');
}

function renderServiceDetail(container, serviceId) {
  // Search for the service in all categories
  let targetService = null;
  let targetCategory = null;

  for (const catKey in SERVICES) {
    const found = SERVICES[catKey].items.find(i => i.id === serviceId);
    if (found) {
      targetService = found;
      targetCategory = SERVICES[catKey];
      break;
    }
  }

  if (!targetService) {
    container.innerHTML = `
      <div class="section text-center" style="padding: 100px 20px;">
        <h2>Service Not Found</h2>
        <p style="color: var(--color-grey); margin-bottom: 20px;">We were unable to locate the requested therapy.</p>
        <a href="#/services" class="btn-cta">Return to Directory</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <section class="section" style="padding-top: 3rem; padding-bottom: 6rem;">
      <div class="service-detail-header">
        <a href="#/services" class="btn-back-services">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Directory
        </a>
        <span style="color: var(--color-grey); font-size: 0.9rem;">${targetCategory.title} / ${targetService.name}</span>
      </div>

      <div class="service-detail-container">
        <!-- Visual Column -->
        <div>
          <div class="service-detail-img" style="background-image: url('./assets/service_${targetService.id}.png'); background-color: var(--color-sage-light);"></div>
          
          <div style="background-color: var(--color-white); border: 1px solid var(--color-grey-light); border-radius: var(--border-radius-lg); padding: 2rem; margin-top: 2rem; box-shadow: var(--shadow-sm);">
            <h4 style="font-family: var(--font-body); font-weight: 600; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em; color: var(--color-sage-dark); margin-bottom: 1rem;">
              Session Mechanics & Prep
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem; color: var(--color-grey);">
              <li><strong>Duration:</strong> ${targetService.duration} individual session</li>
              <li><strong>Standard Pricing:</strong> $${targetService.price} single entry (discounts apply for Gold/Platinum members)</li>
              <li><strong>Preparations:</strong> We provide premium towels, organic shower amenities, and drinking water. Please wear comfortable athletic attire or swimwear.</li>
            </ul>
          </div>
        </div>

        <!-- Information Column -->
        <div class="service-detail-body">
          <span class="badge-gold">Clinical Wellness Protocol</span>
          <h1>${targetService.name}</h1>
          <p class="service-detail-desc">${targetService.description}</p>
          
          <div style="background-color: var(--color-white); padding: 2rem; border-radius: var(--border-radius-lg); border: 1px solid var(--color-grey-light); margin-bottom: 2.5rem;">
            <h4 style="font-family: var(--font-brand); color: var(--color-forest); font-size: 1.1rem; margin-bottom: 1rem;">Science-Backed Description</h4>
            <p style="font-size: 0.95rem; color: var(--color-grey); line-height: 1.6;">${targetService.details}</p>
          </div>

          <div class="service-detail-benefits">
            <h3>Physiological Benefits & Biomarkers:</h3>
            <div class="service-detail-benefits-grid">
              ${targetService.benefits.map((b, index) => `
                <div class="service-detail-benefit-card">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <div>
                    <h4>Benefit ${index + 1}</h4>
                    <p>${b}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="service-detail-ctas">
            <a href="#/booking?service=${targetService.id}" class="btn-cta" style="flex: 1; padding: 1rem;">Book Session Now</a>
            <a href="#/memberships" class="btn-secondary-white" style="flex: 1; text-align: center; border-color: var(--color-forest); color: var(--color-forest); padding: 1rem;">View Member Pricing</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
