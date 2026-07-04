// Booking Wizard Component
import { SERVICES, CLASSES, MEMBERSHIPS } from '../data.js';
import { appState, showNotification } from '../app.js';

export function render(container) {
  // Parse incoming parameters from URL. e.g., ?service=ice-bath, ?class=class-1, ?membership=gold
  const hash = window.location.hash;
  let preselectedServiceId = null;
  let preselectedClassId = null;
  let preselectedMembershipId = null;

  if (hash.includes('?')) {
    const query = hash.split('?')[1];
    const params = new URLSearchParams(query);
    preselectedServiceId = params.get('service');
    preselectedClassId = params.get('class');
    preselectedMembershipId = params.get('membership');
  }

  // Find all individual services across categories for Step 1
  const allServices = [];
  for (const catKey in SERVICES) {
    SERVICES[catKey].items.forEach(item => {
      allServices.push({
        id: item.id,
        name: item.name,
        duration: item.duration,
        price: item.price,
        category: SERVICES[catKey].title
      });
    });
  }

  // Wizard state variables
  let currentStep = 1;
  let selectedItem = null; // can be a service object or class object or membership
  let selectedItemType = ''; // 'service', 'class', or 'membership'
  let selectedDate = new Date(); // default today
  let selectedTimeSlot = '';

  // Setup current calendar date pointers
  let calendarMonth = selectedDate.getMonth();
  let calendarYear = selectedDate.getFullYear();

  // If we have a preselected item, set state and jump to step 2
  if (preselectedServiceId) {
    const s = allServices.find(srv => srv.id === preselectedServiceId);
    if (s) {
      selectedItem = s;
      selectedItemType = 'service';
      currentStep = 2;
    }
  } else if (preselectedClassId) {
    const c = CLASSES.find(cls => cls.id === preselectedClassId);
    if (c) {
      selectedItem = {
        id: c.id,
        name: c.name,
        instructor: c.instructor,
        duration: "60 mins",
        price: 30, // class base price
        day: c.day,
        time: c.time
      };
      selectedItemType = 'class';
      selectedTimeSlot = c.time; // locked to class time
      currentStep = 2;
    }
  } else if (preselectedMembershipId) {
    const m = MEMBERSHIPS.find(mem => mem.id === preselectedMembershipId);
    if (m) {
      selectedItem = {
        id: m.id,
        name: `${m.name} Membership`,
        duration: "Weekly Subscription",
        price: m.price,
        badge: m.badge
      };
      selectedItemType = 'membership';
      currentStep = 3; // jump directly to checkout for memberships
    }
  }

  // Render wizard shell
  container.innerHTML = `
    <section class="section" style="padding-top: 4rem; padding-bottom: 6rem;">
      <div class="booking-wizard">
        
        <!-- Steps Navigator -->
        <div class="booking-steps-nav">
          <div class="booking-step-indicator ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}" data-step="1">
            <span class="booking-step-num">1</span> Selection
          </div>
          <div class="booking-step-indicator ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}" data-step="2">
            <span class="booking-step-num">2</span> Date & Time
          </div>
          <div class="booking-step-indicator ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}" data-step="3">
            <span class="booking-step-num">3</span> Checkout
          </div>
          <div class="booking-step-indicator ${currentStep >= 4 ? 'active' : ''}" data-step="4">
            <span class="booking-step-num">4</span> Confirmation
          </div>
        </div>

        <div class="booking-wizard-content">
          <!-- STEP 1: Selection Pane -->
          <div class="booking-step-pane ${currentStep === 1 ? 'active' : ''}" id="stepPane1">
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1rem;">
              Select a Recovery Therapy or Class
            </h2>
            
            <div class="booking-services-grid">
              ${allServices.map(srv => `
                <div class="booking-service-item" data-id="${srv.id}" data-type="service">
                  <input type="radio" name="selectedService" class="booking-service-radio" id="radio_${srv.id}">
                  <div class="booking-service-info">
                    <h3>${srv.name}</h3>
                    <p>${srv.category}</p>
                    <div class="booking-service-meta">
                      <span>⏱ ${srv.duration}</span>
                      <span>💰 $${srv.price}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- STEP 2: Calendar Pane -->
          <div class="booking-step-pane ${currentStep === 2 ? 'active' : ''}" id="stepPane2">
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1rem;">
              Choose Date and Time
            </h2>
            
            <div class="booking-calendar-wrapper">
              <!-- Calendar Grid -->
              <div class="booking-calendar">
                <div class="calendar-header">
                  <button type="button" class="calendar-nav-btn" id="prevMonthBtn">&lt;</button>
                  <h3 id="calendarMonthTitle">July 2026</h3>
                  <button type="button" class="calendar-nav-btn" id="nextMonthBtn">&gt;</button>
                </div>
                <div class="calendar-weekdays">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
                <div class="calendar-days" id="calendarDaysContainer"></div>
              </div>

              <!-- Time Slots -->
              <div class="booking-slots-container">
                <h3>Select Time Slot</h3>
                <div class="booking-slots-grid" id="slotsGrid">
                  <!-- Slots will be rendered here dynamically -->
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 3: Checkout Pane -->
          <div class="booking-step-pane ${currentStep === 3 ? 'active' : ''}" id="stepPane3">
            <h2 style="font-size: 1.8rem; margin-bottom: 2rem; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1rem;">
              Complete Booking & Payment
            </h2>
            
            <div class="checkout-grid">
              <!-- Personal Details and Stripe Mock -->
              <form class="checkout-form" id="checkoutForm">
                <div class="form-row">
                  <div class="form-field">
                    <label for="checkoutFirstName">First Name</label>
                    <input type="text" id="checkoutFirstName" class="form-input" required>
                  </div>
                  <div class="form-field">
                    <label for="checkoutLastName">Last Name</label>
                    <input type="text" id="checkoutLastName" class="form-input" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-field">
                    <label for="checkoutEmail">Email</label>
                    <input type="email" id="checkoutEmail" class="form-input" required>
                  </div>
                  <div class="form-field">
                    <label for="checkoutPhone">Phone Number</label>
                    <input type="tel" id="checkoutPhone" class="form-input" required>
                  </div>
                </div>

                ${selectedItemType !== 'membership' ? `
                  <div style="border: 1px solid var(--color-grey-light); border-radius: var(--border-radius-md); padding: 1.25rem; background-color: var(--color-alabaster);">
                    <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--color-forest);">Stripe Payment Gateway</h4>
                    <p style="font-size: 0.8rem; color: var(--color-grey); margin-bottom: 1rem;">Secure, sandboxed connection. Enter any mock card detail to test.</p>
                    
                    <div class="form-field">
                      <label>Credit Card Info</label>
                      <div class="mock-stripe-input-wrapper">
                        <span class="mock-stripe-icon">stripe</span>
                        <input type="text" class="mock-stripe-input" placeholder="4242 4242 4242 4242   MM/YY   CVC" required>
                      </div>
                    </div>
                  </div>
                ` : `
                  <div style="border: 1px solid var(--color-grey-light); border-radius: var(--border-radius-md); padding: 1.25rem; background-color: var(--color-alabaster);">
                    <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--color-forest);">Setup Membership Billing</h4>
                    <p style="font-size: 0.8rem; color: var(--color-grey); margin-bottom: 1rem;">You will be billed weekly starting today. Cancel or pause anytime in the portal.</p>
                    
                    <div class="form-field">
                      <label>Credit Card Info</label>
                      <div class="mock-stripe-input-wrapper">
                        <span class="mock-stripe-icon">stripe</span>
                        <input type="text" class="mock-stripe-input" placeholder="4242 4242 4242 4242   MM/YY   CVC" required>
                      </div>
                    </div>
                  </div>
                `}
              </form>

              <!-- Order Summary Card -->
              <div class="checkout-summary" id="checkoutSummaryCard">
                <!-- Summary content rendered dynamically -->
              </div>
            </div>
          </div>

          <!-- STEP 4: Success Pane -->
          <div class="booking-step-pane ${currentStep === 4 ? 'active' : ''}" id="stepPane4">
            <!-- Renders success detail on final validation -->
            <div class="booking-success-view" id="successViewBlock"></div>
          </div>
        </div>

        <!-- Wizard Action Buttons -->
        <div class="booking-wizard-actions" id="wizardActions">
          <button type="button" class="btn-back-wizard" id="prevBtn" ${currentStep === 1 ? 'disabled style="opacity: 0; pointer-events: none;"' : ''}>Back</button>
          <button type="button" class="btn-cta" id="nextBtn">Continue</button>
        </div>

      </div>
    </section>
  `;

  // --- Grab Elements ---
  const indicators = container.querySelectorAll('.booking-step-indicator');
  const panes = container.querySelectorAll('.booking-step-pane');
  const prevBtn = container.getElementById('prevBtn');
  const nextBtn = container.getElementById('nextBtn');
  const wizardActions = container.getElementById('wizardActions');

  // Step 1 Click selections
  const serviceItems = container.querySelectorAll('.booking-service-item');
  serviceItems.forEach(item => {
    // If preselected, trigger visual highlights
    const id = item.getAttribute('data-id');
    if (selectedItem && selectedItem.id === id) {
      item.classList.add('selected');
      const radio = item.querySelector('.booking-service-radio');
      if (radio) radio.checked = true;
    }

    item.addEventListener('click', () => {
      serviceItems.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      const radio = item.querySelector('.booking-service-radio');
      if (radio) radio.checked = true;

      const foundService = allServices.find(s => s.id === id);
      if (foundService) {
        selectedItem = foundService;
        selectedItemType = 'service';
      }
    });
  });

  // --- Step 2: Calendar Render & Month navigation ---
  const prevMonthBtn = container.getElementById('prevMonthBtn');
  const nextMonthBtn = container.getElementById('nextMonthBtn');
  const monthTitle = container.getElementById('calendarMonthTitle');
  const daysContainer = container.getElementById('calendarDaysContainer');
  const slotsGrid = container.getElementById('slotsGrid');

  if (prevMonthBtn && nextMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      calendarMonth--;
      if (calendarMonth < 0) {
        calendarMonth = 11;
        calendarYear--;
      }
      renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
      calendarMonth++;
      if (calendarMonth > 11) {
        calendarMonth = 0;
        calendarYear++;
      }
      renderCalendar();
    });
  }

  function renderCalendar() {
    if (!daysContainer) return;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthTitle.textContent = `${months[calendarMonth]} ${calendarYear}`;

    daysContainer.innerHTML = '';

    // First day of month (0 = Sun, 1 = Mon...)
    const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();
    // Shift index to match Mon-Sun sequence (Mon=0, Sun=6)
    const shiftedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    const totalDays = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const today = new Date();

    // Render empty spaces for preceding month days
    for (let i = 0; i < shiftedFirstDay; i++) {
      const span = document.createElement('span');
      daysContainer.appendChild(span);
    }

    // Render month days
    for (let day = 1; day <= totalDays; day++) {
      const dayBtn = document.createElement('button');
      dayBtn.type = 'button';
      dayBtn.className = 'calendar-day';
      dayBtn.textContent = day;

      const dateObj = new Date(calendarYear, calendarMonth, day);
      
      // Disable past days
      if (dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        dayBtn.disabled = true;
      }

      // Highlight selected
      if (selectedDate && 
          selectedDate.getDate() === day && 
          selectedDate.getMonth() === calendarMonth && 
          selectedDate.getFullYear() === calendarYear) {
        dayBtn.classList.add('selected');
      }

      dayBtn.addEventListener('click', () => {
        container.querySelectorAll('.calendar-day').forEach(b => b.classList.remove('selected'));
        dayBtn.classList.add('selected');
        selectedDate = new Date(calendarYear, calendarMonth, day);
        renderTimeSlots();
      });

      daysContainer.appendChild(dayBtn);
    }
  }

  function renderTimeSlots() {
    if (!slotsGrid) return;
    slotsGrid.innerHTML = '';

    // If it's a preselected Group Class, time slot is fixed
    if (selectedItemType === 'class') {
      slotsGrid.innerHTML = `
        <button type="button" class="booking-slot-btn selected" disabled>${selectedItem.time}</button>
      `;
      return;
    }

    // Standard hours slots list
    const morningSlots = ["07:00 AM", "08:30 AM", "10:00 AM", "11:30 AM"];
    const afternoonSlots = ["01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];
    const eveningSlots = ["07:00 PM", "08:30 PM"];
    const allSlots = [...morningSlots, ...afternoonSlots, ...eveningSlots];

    allSlots.forEach(slot => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'booking-slot-btn';
      btn.textContent = slot;

      // Disable some slots randomly to simulate existing bookings
      if (Math.random() < 0.25) {
        btn.disabled = true;
      }

      if (selectedTimeSlot === slot) {
        btn.classList.add('selected');
      }

      btn.addEventListener('click', () => {
        container.querySelectorAll('.booking-slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTimeSlot = slot;
      });

      slotsGrid.appendChild(btn);
    });
  }

  // --- Step 3: Checkout summary card calculations ---
  function renderCheckoutSummary() {
    const summaryCard = container.getElementById('checkoutSummaryCard');
    if (!summaryCard) return;

    const basePrice = selectedItem ? selectedItem.price : 0;
    let finalPrice = basePrice;
    let tierDiscountText = '';
    
    // Check if active user has a membership and applies a discount
    const isLoggedIn = appState.state.isLoggedIn;
    const user = appState.state.user;

    if (isLoggedIn && user && selectedItemType !== 'membership') {
      const tier = user.tier;
      if (tier === 'silver') {
        finalPrice = basePrice * 0.85; // 15% off
        tierDiscountText = 'Silver Member 15% discount applied';
      } else if (tier === 'gold') {
        // Gold tier has free recovery zones & group classes, sports massages are 20% off
        if (selectedItem.category === 'Recovery Zone' || selectedItemType === 'class') {
          finalPrice = 0;
          tierDiscountText = 'Gold Member benefit: Recovery sessions & classes are included';
        } else {
          finalPrice = basePrice * 0.80; // 20% off
          tierDiscountText = 'Gold Member 20% discount applied';
        }
      } else if (tier === 'platinum') {
        if (selectedItem.category === 'Recovery Zone' || selectedItemType === 'class') {
          finalPrice = 0;
          tierDiscountText = 'Platinum Member benefit: Unlimited recoveries & classes included';
        } else {
          finalPrice = basePrice * 0.70; // 30% off
          tierDiscountText = 'Platinum Member 30% discount applied';
        }
      }
    }

    const formattedDate = selectedItemType !== 'membership' 
      ? selectedDate.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      : 'Billed Weekly';

    summaryCard.innerHTML = `
      <h3>Sanctuary Booking Summary</h3>
      <div class="summary-details">
        <div class="summary-row">
          <span>Sanctuary Item</span>
          <span>${selectedItem ? selectedItem.name : ''}</span>
        </div>
        ${selectedItemType !== 'membership' ? `
          <div class="summary-row">
            <span>Date & Time</span>
            <span>${formattedDate}<br>${selectedTimeSlot}</span>
          </div>
          <div class="summary-row">
            <span>Session Duration</span>
            <span>${selectedItem.duration}</span>
          </div>
        ` : `
          <div class="summary-row">
            <span>Subscription Structure</span>
            <span>Billed weekly, cancel anytime</span>
          </div>
        `}
        <div class="summary-row" style="margin-top: 1rem; border-top: 1px solid rgba(17,40,31,0.08); padding-top: 0.5rem;">
          <span>Subtotal</span>
          <span>$${basePrice.toFixed(2)}</span>
        </div>
        ${tierDiscountText ? `
          <div class="summary-row" style="color: var(--color-green-success); font-size: 0.85rem; font-style: italic;">
            <span>Discount Benefit</span>
            <span>-$${(basePrice - finalPrice).toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="summary-row total" style="margin-top: 0.5rem; padding-top: 0.5rem;">
          <span>Total Balance</span>
          <span>$${finalPrice.toFixed(2)}</span>
        </div>
      </div>
      
      ${tierDiscountText ? `
        <div class="summary-pricing-tier">
          🛡️ ${tierDiscountText}
        </div>
      ` : ''}
    `;

    // Auto-fill form fields if member is logged in
    if (isLoggedIn && user) {
      const names = user.name.split(' ');
      container.getElementById('checkoutFirstName').value = names[0] || '';
      container.getElementById('checkoutLastName').value = names.slice(1).join(' ') || '';
      container.getElementById('checkoutEmail').value = user.email || '';
      container.getElementById('checkoutPhone').value = user.phone || '';
    }
  }

  // --- Step 4: Success confirmation screen loader ---
  function renderSuccessConfirmation() {
    const successView = container.getElementById('successViewBlock');
    if (!successView) return;

    const formattedDate = selectedItemType !== 'membership'
      ? selectedDate.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      : 'Weekly Billing Cycle';

    // Mock booking ID
    const bookingId = "LOTUS-BK-" + Math.floor(Math.random() * 900000 + 100000);

    successView.innerHTML = `
      <div class="success-icon-wrapper">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h2>Sanctuary Reserved</h2>
      <p>Your session has been successfully booked and synchronized with the club register.</p>
      
      <div class="booking-details-box">
        <h4>Reservation Details</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--color-grey);">Reservation ID:</span>
            <strong style="color: var(--color-forest);">${bookingId}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--color-grey);">Selected Therapy:</span>
            <strong>${selectedItem ? selectedItem.name : ''}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--color-grey);">Scheduled Date:</span>
            <strong>${formattedDate}</strong>
          </div>
          ${selectedItemType !== 'membership' ? `
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--color-grey);">Scheduled Time:</span>
              <strong>${selectedTimeSlot}</strong>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="success-actions">
        <a href="#/portal" class="btn-cta">Go to Member Portal</a>
        <a href="#/" class="btn-secondary-white" style="border-color: var(--color-forest); color: var(--color-forest);">Return Home</a>
      </div>
    `;

    // Save this booking to our local AppState storage!
    if (selectedItemType === 'membership') {
      // If joining a membership, change user status in state
      const userMail = container.getElementById('checkoutEmail').value;
      const firstName = container.getElementById('checkoutFirstName').value;
      const lastName = container.getElementById('checkoutLastName').value;
      const tierName = selectedItem.id;
      
      appState.login(userMail, `${firstName} ${lastName}`);
      appState.state.user.tier = tierName;
      appState.saveState();
      
      showNotification("Welcome to Lotus", `Your ${tierName.toUpperCase()} membership is now active!`, "success");
    } else {
      // Standard service booking
      appState.addBooking({
        serviceName: selectedItem.name,
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTimeSlot
      });
    }
  }

  // --- Step Navigation Buttons Logic ---
  nextBtn.addEventListener('click', () => {
    if (currentStep === 1) {
      if (!selectedItem) {
        showNotification("Selection Required", "Please select a therapy or class to proceed.", "error");
        return;
      }
      currentStep = 2;
    } else if (currentStep === 2) {
      if (!selectedTimeSlot) {
        showNotification("Time Required", "Please select a scheduled time slot to proceed.", "error");
        return;
      }
      currentStep = 3;
    } else if (currentStep === 3) {
      // Trigger HTML Form Validation
      const form = container.getElementById('checkoutForm');
      if (form && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
      currentStep = 4;
    }

    updateWizardUI();
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      // If we preselected an item from an external page, back button should take us back there
      if (currentStep === 2 && (preselectedServiceId || preselectedClassId)) {
        window.history.back();
        return;
      }
      if (currentStep === 3 && preselectedMembershipId) {
        window.history.back();
        return;
      }
      currentStep--;
      updateWizardUI();
    }
  });

  function updateWizardUI() {
    // Show/Hide Panes
    panes.forEach((p, index) => {
      if (index + 1 === currentStep) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Update Step Indicators
    indicators.forEach((ind, index) => {
      const idx = index + 1;
      if (idx === currentStep) {
        ind.className = 'booking-step-indicator active';
      } else if (idx < currentStep) {
        ind.className = 'booking-step-indicator completed';
      } else {
        ind.className = 'booking-step-indicator';
      }
    });

    // Configure Button display states
    if (currentStep === 1) {
      prevBtn.style.opacity = '0';
      prevBtn.style.pointerEvents = 'none';
      nextBtn.textContent = 'Select Slot & Date';
    } else {
      prevBtn.style.opacity = '1';
      prevBtn.style.pointerEvents = 'auto';
      
      if (currentStep === 2) {
        nextBtn.textContent = 'Proceed to Checkout';
      } else if (currentStep === 3) {
        nextBtn.textContent = selectedItemType === 'membership' ? 'Activate Membership' : 'Confirm & Pay';
      } else if (currentStep === 4) {
        // Final confirmation screen hide action buttons
        wizardActions.style.display = 'none';
      }
    }

    // Dynamic setups for each step
    if (currentStep === 2) {
      renderCalendar();
      renderTimeSlots();
    } else if (currentStep === 3) {
      renderCheckoutSummary();
    } else if (currentStep === 4) {
      renderSuccessConfirmation();
    }
  }

  // Set initial wizard steps
  updateWizardUI();
}
