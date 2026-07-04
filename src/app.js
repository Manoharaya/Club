// Lotus Health Club - Central Application State & Router
import { SERVICES, MEMBERSHIPS, CLASSES, BLOGS, EVENTS } from './data.js';

// --- State Management ---
class AppState {
  constructor() {
    this.storageKey = 'lotus_club_state';
    this.defaultUser = {
      name: "Marcus Aurelius",
      email: "marcus.aurelius@rome.org",
      phone: "+61 411 222 333",
      tier: "gold",
      joinDate: "January 10, 2026",
      points: 850,
      referralCode: "LOTUS-MARCUS-888",
      wearables: { apple: true, garmin: false, fitbit: false, whoop: true },
      bookings: [
        { id: "bk-1", serviceName: "Ice Bath Therapy", date: "2026-07-06", time: "09:00 AM", status: "upcoming" },
        { id: "bk-2", serviceName: "Athlete Recovery Yoga", date: "2026-07-08", time: "06:00 PM", status: "upcoming" }
      ],
      aiAssessment: {
        score: 72,
        date: "2026-06-20",
        biometrics: { hrv: "68 ms", sleep: "7h 15m", stress: "Moderate", recovery: "72%" },
        recommendations: [
          "Alternate Ice Bath (4°C) with Infrared Sauna 3x weekly.",
          "Add 15 minutes of Box Breathing before bedtime to lower cortisol.",
          "Prioritize Yin Yoga on Wednesdays to release restricted range of motion."
        ]
      }
    };
    
    this.state = this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing stored state, resetting.", e);
      }
    }
    // Return initial state
    return {
      user: { ...this.defaultUser },
      isLoggedIn: true // Start logged in for demo purposes, can log out/in
    };
  }

  saveState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  }

  login(email, name = "Demo Member") {
    this.state.isLoggedIn = true;
    this.state.user = {
      ...this.defaultUser,
      name: name,
      email: email,
      points: 100 // new member welcome points
    };
    this.saveState();
    this.updateHeaderUI();
  }

  logout() {
    this.state.isLoggedIn = false;
    this.state.user = null;
    this.saveState();
    this.updateHeaderUI();
  }

  addBooking(bookingData) {
    if (!this.state.user) return;
    const newBooking = {
      id: "bk-" + Date.now(),
      ...bookingData,
      status: "upcoming"
    };
    this.state.user.bookings.unshift(newBooking);
    this.state.user.points += 50; // reward points for booking
    this.saveState();
    
    // Simulate Confirmation Notification
    showNotification("Booking Confirmed", `Your session for ${bookingData.serviceName} is scheduled.`, "success");
    simulateNotificationTriggers(bookingData);
  }

  cancelBooking(bookingId) {
    if (!this.state.user) return;
    this.state.user.bookings = this.state.user.bookings.filter(b => b.id !== bookingId);
    this.saveState();
    showNotification("Booking Cancelled", "Your booking was successfully cancelled.", "success");
  }

  saveAIAssessment(assessmentResult) {
    if (!this.state.user) return;
    this.state.user.aiAssessment = assessmentResult;
    this.state.user.points += 150; // massive points for taking the AI assessment
    this.saveState();
  }

  updateHeaderUI() {
    const portalBtn = document.getElementById('portalBtn');
    if (portalBtn) {
      if (this.state.isLoggedIn && this.state.user) {
        portalBtn.classList.add('logged-in');
        portalBtn.querySelector('.portal-text').textContent = this.state.user.name;
      } else {
        portalBtn.classList.remove('logged-in');
        portalBtn.querySelector('.portal-text').textContent = "Member Portal";
      }
    }
  }
}

export const appState = new AppState();

// --- Notification Toast System ---
export function showNotification(title, message, type = "info") {
  const container = document.getElementById('notification-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-header">${title}</div>
    <div class="toast-msg">${message}</div>
  `;

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

// Simulate confirmation email & SMS popups after short delay
function simulateNotificationTriggers(bookingData) {
  setTimeout(() => {
    showNotification(
      "✉️ Confirmation Email Sent", 
      `Sent to ${appState.state.user.email} with receipt and preparations.`,
      "info"
    );
  }, 1500);

  setTimeout(() => {
    showNotification(
      "📱 SMS Reminder Queued",
      `SMS reminder queued for ${appState.state.user.phone} 2 hours before your session.`,
      "info"
    );
  }, 3000);
}

// --- Client-Side Router ---
const container = document.getElementById('app');

// Dynamic Page Loader Cache
const pages = {
  home: () => import('./pages/home.js').then(m => m.render),
  about: () => import('./pages/about.js').then(m => m.render),
  services: () => import('./pages/services.js').then(m => m.render),
  memberships: () => import('./pages/memberships.js').then(m => m.render),
  timetable: () => import('./pages/timetable.js').then(m => m.render),
  booking: () => import('./pages/booking.js').then(m => m.render),
  corporate: () => import('./pages/corporate.js').then(m => m.render),
  blog: () => import('./pages/blog.js').then(m => m.render),
  events: () => import('./pages/events.js').then(m => m.render),
  portal: () => import('./pages/portal.js').then(m => m.render),
  contact: () => import('./pages/contact.js').then(m => m.render)
};

async function router() {
  showLoader();
  
  // Close mobile navigation overlay just in case it was open
  closeMobileMenu();

  const hash = window.location.hash || '#/';
  
  // Parse routes. Example: #/services/ice-bath -> path = 'services', subPath = 'ice-bath'
  const hashParts = hash.slice(2).split('?')[0].split('/');
  const path = hashParts[0] || 'home';
  const param = hashParts[1] || null;

  // Highlight current nav links
  updateActiveNavLinks(path);

  try {
    if (pages[path]) {
      const renderFn = await pages[path]();
      // Render content
      container.innerHTML = '';
      await renderFn(container, param);
    } else {
      // 404 Page
      container.innerHTML = `
        <div class="section text-center" style="padding: 100px 20px;">
          <h1 style="font-size: 4rem; margin-bottom: 20px;">IV-IV</h1>
          <p style="color: var(--color-grey); margin-bottom: 30px;">This path has returned to nature. The wellness sanctuary you seek could not be found.</p>
          <a href="#/" class="btn-cta">Return to Sanctuary</a>
        </div>
      `;
    }
  } catch (error) {
    console.error("Router error loading page:", path, error);
    container.innerHTML = `
      <div class="section text-center" style="padding: 100px 20px;">
        <h2>Vexation in the Sanctuary</h2>
        <p style="color: var(--color-red); margin-top: 10px;">An error occurred while preparing this space.</p>
        <button onclick="window.location.reload()" class="btn-cta" style="margin-top: 20px;">Reload Sanctuary</button>
      </div>
    `;
  }
}

function showLoader() {
  container.innerHTML = `
    <div class="app-loader">
      <div class="spinner"></div>
    </div>
  `;
}

// Update desktop & mobile nav link active states
function updateActiveNavLinks(path) {
  const currentPath = path === 'home' ? '' : path;
  
  // Desktop Links
  document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#/${currentPath}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile Links
  document.querySelectorAll('.mobile-nav .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#/${currentPath}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// --- Mobile Navigation Logic ---
const menuToggleBtn = document.querySelector('.mobile-nav-toggle');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');

if (menuToggleBtn && mobileOverlay) {
  menuToggleBtn.addEventListener('click', () => {
    const isOpen = menuToggleBtn.classList.toggle('open');
    mobileOverlay.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  });
}

function closeMobileMenu() {
  if (menuToggleBtn && mobileOverlay) {
    menuToggleBtn.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

// Close menu if a link is clicked
document.querySelectorAll('.mobile-nav-link, .mobile-booking-btn').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// --- Scroll Styling ---
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// --- Footer Newsletter Form ---
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMsg = document.getElementById('newsletterMsg');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput) {
      showNotification("Subscribed", "You have joined the Lotus Health Club newsletter.", "success");
      newsletterMsg.textContent = "Thank you for joining our newsletter.";
      newsletterMsg.style.color = "var(--color-gold)";
      emailInput.value = '';
      setTimeout(() => {
        newsletterMsg.textContent = '';
      }, 5000);
    }
  });
}

// --- Startup Initialization ---
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  appState.updateHeaderUI();
  router();
});
