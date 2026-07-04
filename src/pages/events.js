// Events Component
import { EVENTS } from '../data.js';
import { showNotification } from '../app.js';

export function render(container) {
  // Save current dynamic spots in memory to allow reductions on registration
  if (!window.eventSpotsLeft) {
    window.eventSpotsLeft = {};
    EVENTS.forEach(e => {
      window.eventSpotsLeft[e.id] = e.spotsLeft;
    });
  }

  function renderGrid() {
    container.innerHTML = `
      <!-- Header Section -->
      <section class="section" style="padding-top: 4rem; padding-bottom: 2rem;">
        <div class="section-header">
          <span class="section-subtitle">Community & Learning</span>
          <h1 class="section-title">Sanctuary Events & Retreats</h1>
          <p class="section-desc">Join immersive workshops, guest lectures from longevity researchers, and weekend wellness retreats designed to expand your wellness practice.</p>
        </div>
      </section>

      <!-- Events List -->
      <section class="section" style="padding-bottom: 6rem;">
        <div class="events-grid">
          ${EVENTS.map(ev => {
            const spots = window.eventSpotsLeft[ev.id];
            const isSoldOut = spots === 0;

            return `
              <div class="card-luxury event-card" id="eventCard_${ev.id}">
                <div class="event-card-img" style="background-image: url('./assets/${ev.id}.png'); background-color: var(--color-sage-light);"></div>
                
                <div class="event-card-body">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: baseline;">
                      <span class="event-date-badge">${ev.type} &bull; ${ev.date}</span>
                      <span style="font-size: 0.8rem; font-weight: 600; color: ${spots <= 5 ? 'var(--color-red)' : 'var(--color-grey)'};">
                        ${isSoldOut ? 'Sold Out' : `Only ${spots} spots left!`}
                      </span>
                    </div>
                    <h3 class="event-title">${ev.title}</h3>
                    <p class="event-desc">${ev.description}</p>
                    <p class="event-meta">⏱ ${ev.time} &bull; 👤 Instructor: ${ev.instructor}</p>
                  </div>
                  
                  <div class="event-footer">
                    <span style="font-family: var(--font-brand); font-size: 1.3rem; font-weight: 700; color: var(--color-gold-hover);">$${ev.price}</span>
                    <button class="btn-book-event" data-event-id="${ev.id}" ${isSoldOut ? 'disabled style="background-color: var(--color-grey-light); color: var(--color-grey); cursor: not-allowed;"' : ''}>
                      ${isSoldOut ? 'Sold Out' : 'Register Now'}
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Registration Modal Overlay -->
      <div class="mobile-nav-overlay" id="eventModalOverlay" style="background-color: rgba(17,40,31,0.85); align-items: center; justify-content: center;">
        <div class="card-glass" style="background-color: var(--color-white); max-width: 450px; width: 90%; padding: 3rem 2rem; position: relative;">
          <button type="button" id="closeEventModalBtn" style="position: absolute; top: 1rem; right: 1rem; border: none; background: transparent; cursor: pointer; font-size: 1.5rem; color: var(--color-grey);">&times;</button>
          
          <span class="badge-gold">Event Registration</span>
          <h3 id="modalEventTitle" style="font-size: 1.4rem; margin-bottom: 1.5rem; color: var(--color-forest);">Event Name</h3>
          
          <form class="checkout-form" id="eventRegForm">
            <div class="form-field" style="margin-bottom: 1rem;">
              <label for="regName">Full Name</label>
              <input type="text" id="regName" class="form-input" required>
            </div>
            
            <div class="form-field" style="margin-bottom: 1.5rem;">
              <label for="regEmail">Email Address</label>
              <input type="email" id="regEmail" class="form-input" required>
            </div>

            <div style="background-color: var(--color-alabaster); padding: 1rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-grey-light); font-size: 0.85rem; color: var(--color-grey); margin-bottom: 1.5rem;">
              Registering places a temporary hold. Confirmed ticketing link will be sent to your email.
            </div>
            
            <button type="submit" class="btn-cta" style="width: 100%; padding: 0.75rem;">Confirm Registration</button>
          </form>
        </div>
      </div>
    `;

    // Hook Register triggers
    const registerBtns = container.querySelectorAll('.btn-book-event');
    const modalOverlay = container.querySelector('#eventModalOverlay');
    const closeBtn = container.querySelector('#closeEventModalBtn');
    const regForm = container.querySelector('#eventRegForm');
    const modalTitle = container.querySelector('#modalEventTitle');

    let activeEventId = null;

    registerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const evId = btn.getAttribute('data-event-id');
        const evObj = EVENTS.find(e => e.id === evId);
        
        if (evObj) {
          activeEventId = evId;
          modalTitle.textContent = evObj.title;
          
          // Open Modal
          modalOverlay.classList.add('open');
          modalOverlay.style.opacity = '1';
          modalOverlay.style.pointerEvents = 'auto';
        }
      });
    });

    function closeModal() {
      modalOverlay.classList.remove('open');
      modalOverlay.style.opacity = '0';
      modalOverlay.style.pointerEvents = 'none';
      regForm.reset();
      activeEventId = null;
    }

    closeBtn.addEventListener('click', closeModal);

    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (activeEventId && window.eventSpotsLeft[activeEventId] > 0) {
        // Decrease spots in memory
        window.eventSpotsLeft[activeEventId]--;
        
        showNotification("Registered", "Pre-registration confirmed! Check email inbox.", "success");
        closeModal();
        
        // Re-render schedule list to show updated spot values
        renderGrid();
      }
    });
  }

  renderGrid();
}
