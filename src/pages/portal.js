// Member Portal Component
import { appState, showNotification } from '../app.js';
import { SERVICES } from '../data.js';

export function render(container) {
  // Check auth state
  const isLoggedIn = appState.state.isLoggedIn;
  const user = appState.state.user;

  if (!isLoggedIn || !user) {
    renderLogin(container);
    return;
  }

  renderDashboard(container, user);
}

function renderLogin(container) {
  container.innerHTML = `
    <section class="section" style="padding-top: 5rem; padding-bottom: 8rem;">
      <div class="card-glass portal-login-card">
        <span class="badge-gold">Sanctuary Entrance</span>
        <h2>Access Member Portal</h2>
        <p>Log in to manage bookings, track wearable biometrics, and view your AI Longevity Assessments.</p>
        
        <form class="checkout-form" id="portalLoginForm" style="text-align: left;">
          <div class="form-field" style="margin-bottom: 1.25rem;">
            <label for="loginName">First & Last Name</label>
            <input type="text" id="loginName" class="form-input" placeholder="e.g. Alex Mercer" required>
          </div>
          
          <div class="form-field" style="margin-bottom: 2rem;">
            <label for="loginEmail">Email Address</label>
            <input type="email" id="loginEmail" class="form-input" placeholder="e.g. alex.mercer@gmail.com" required>
          </div>
          
          <button type="submit" class="btn-cta" style="width: 100%; padding: 0.8rem;">Enter Sanctuary Portal</button>
        </form>
        
        <div style="margin-top: 2rem; border-top: 1px solid var(--color-grey-light); padding-top: 1.5rem;">
          <p style="font-size: 0.85rem; color: var(--color-grey); margin-bottom: 1rem;">Testing the platform?</p>
          <button id="quickLoginBtn" class="btn-secondary-white" style="border-color: var(--color-sage); color: var(--color-forest); width: 100%;">
            Quick Demo Access (Mock Gold Member)
          </button>
        </div>
      </div>
    </section>
  `;

  // Login handlers
  const loginForm = container.querySelector('#portalLoginForm');
  const quickBtn = container.querySelector('#quickLoginBtn');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = container.querySelector('#loginName').value;
    const email = container.querySelector('#loginEmail').value;
    appState.login(email, name);
    showNotification("Welcome", `Logged in successfully as ${name}`, "success");
    render(container); // Re-render page
  });

  quickBtn.addEventListener('click', () => {
    // Standard gold login
    appState.login("alex.mercer@gmail.com", "Alex Mercer");
    showNotification("Demo Mode Active", "Logged in as Gold Tier Member", "success");
    render(container);
  });
}

function renderDashboard(container, user) {
  let activePane = 'dashboard';

  container.innerHTML = `
    <section class="section" style="padding-top: 3rem; padding-bottom: 6rem; max-width: 1300px;">
      <div class="portal-dashboard">
        
        <!-- Sidebar Navigation -->
        <aside class="portal-sidebar">
          <div class="portal-user-profile">
            <div class="user-avatar-placeholder">
              ${user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3>${user.name}</h3>
            <p>${user.tier.toUpperCase()} Member</p>
            <span style="font-size: 0.75rem; color: var(--color-grey); margin-top: 0.25rem; display: block;">Joined ${user.joinDate}</span>
          </div>

          <nav class="portal-nav">
            <button class="portal-nav-btn active" data-pane="dashboard">
              ⏱ Dashboard
            </button>
            <button class="portal-nav-btn" data-pane="bookings">
              📅 My Bookings
            </button>
            <button class="portal-nav-btn" data-pane="ai">
              🧬 AI Longevity & Wearables
            </button>
            <button class="portal-nav-btn" data-pane="rewards">
              💎 Referrals & Rewards
            </button>
            <li class="divider" style="height: 1px; background-color: var(--color-grey-light); margin: 0.5rem 0; list-style: none;"></li>
            <button class="portal-nav-btn" id="logoutBtn" style="color: var(--color-red);">
              🚪 Log Out
            </button>
          </nav>
        </aside>

        <!-- Main Dashboard Content Panes -->
        <main class="portal-content" id="portalContentContainer">
          <!-- Panes dynamically loaded here -->
        </main>

      </div>
    </section>
  `;

  // Attach pane buttons events
  const navButtons = container.querySelectorAll('.portal-nav-btn[data-pane]');
  const portalContent = container.querySelector('#portalContentContainer');

  function switchPane(paneId) {
    navButtons.forEach(btn => {
      if (btn.getAttribute('data-pane') === paneId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    activePane = paneId;

    if (paneId === 'dashboard') {
      renderDashboardPane(portalContent, user);
    } else if (paneId === 'bookings') {
      renderBookingsPane(portalContent, user);
    } else if (paneId === 'ai') {
      renderAIPane(portalContent, user);
    } else if (paneId === 'rewards') {
      renderRewardsPane(portalContent, user);
    }
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchPane(btn.getAttribute('data-pane'));
    });
  });

  // Logout Action
  const logoutBtn = container.querySelector('#logoutBtn');
  logoutBtn.addEventListener('click', () => {
    appState.logout();
    showNotification("Logged Out", "You have signed out of your session.", "info");
    renderLogin(container);
  });

  // Initial render
  switchPane('dashboard');
}

// --- Pane 1: Dashboard Panel ---
function renderDashboardPane(mountPoint, user) {
  const upcomingCount = user.bookings.filter(b => b.status === 'upcoming').length;
  
  mountPoint.innerHTML = `
    <div class="portal-pane active">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1.5rem; margin-bottom: 2rem;">
        <div>
          <h2 style="font-size: 1.8rem; color: var(--color-forest);">Welcome back, ${user.name.split(' ')[0]}</h2>
          <p style="color: var(--color-grey); font-size: 0.95rem;">Here is a summary of your recovery cycles and biometric syncs.</p>
        </div>
        <a href="#/booking" class="btn-cta">Book Sanctuary Session</a>
      </div>

      <div class="analytics-cards-container" style="margin-bottom: 3rem;">
        <div class="analytic-card">
          <div class="analytic-label">Upcoming Sessions</div>
          <div class="analytic-value">${upcomingCount}</div>
          <span style="font-size: 0.85rem; color: var(--color-grey);">Active bookings in register</span>
        </div>

        <div class="analytic-card">
          <div class="analytic-label">Loyalty Balance</div>
          <div class="analytic-value">${user.points} pts</div>
          <span style="font-size: 0.85rem; color: var(--color-gold-hover);">Gold tier points active</span>
        </div>
      </div>

      <!-- Quick Biometrics Card -->
      <div class="card-glass" style="background-color: var(--color-alabaster); border-color: var(--color-grey-light); padding: 2rem; margin-bottom: 2rem;">
        <h3 style="font-size: 1.2rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(17,40,31,0.08); padding-bottom: 0.5rem;">
          ❤️ Wearable Biometrics Status
        </h3>
        <p style="font-size: 0.9rem; color: var(--color-grey); margin-bottom: 1.5rem;">Connected to Apple Health & WHOOP. Metrics synced 8 minutes ago.</p>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
          <div style="background: var(--color-white); border: 1px solid var(--color-grey-light); padding: 1rem; border-radius: var(--border-radius-md); text-align: center;">
            <div style="font-size: 0.75rem; color: var(--color-grey); text-transform: uppercase;">HRV Baseline</div>
            <div style="font-size: 1.4rem; font-weight: 600; color: var(--color-gold-hover); margin: 0.25rem 0;">68 ms</div>
            <span style="font-size: 0.75rem; color: var(--color-green-success); font-weight: 500;">Stable</span>
          </div>

          <div style="background: var(--color-white); border: 1px solid var(--color-grey-light); padding: 1rem; border-radius: var(--border-radius-md); text-align: center;">
            <div style="font-size: 0.75rem; color: var(--color-grey); text-transform: uppercase;">Resting HR</div>
            <div style="font-size: 1.4rem; font-weight: 600; color: var(--color-gold-hover); margin: 0.25rem 0;">54 bpm</div>
            <span style="font-size: 0.75rem; color: var(--color-green-success); font-weight: 500;">Excellent</span>
          </div>

          <div style="background: var(--color-white); border: 1px solid var(--color-grey-light); padding: 1rem; border-radius: var(--border-radius-md); text-align: center;">
            <div style="font-size: 0.75rem; color: var(--color-grey); text-transform: uppercase;">Sleep Score</div>
            <div style="font-size: 1.4rem; font-weight: 600; color: var(--color-gold-hover); margin: 0.25rem 0;">88%</div>
            <span style="font-size: 0.75rem; color: var(--color-green-success); font-weight: 500;">8h 12m</span>
          </div>

          <div style="background: var(--color-white); border: 1px solid var(--color-grey-light); padding: 1rem; border-radius: var(--border-radius-md); text-align: center;">
            <div style="font-size: 0.75rem; color: var(--color-grey); text-transform: uppercase;">Recovery Index</div>
            <div style="font-size: 1.4rem; font-weight: 600; color: var(--color-gold-hover); margin: 0.25rem 0;">72%</div>
            <span style="font-size: 0.75rem; color: var(--color-gold-hover); font-weight: 500;">Optimal</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- Pane 2: Bookings Register ---
function renderBookingsPane(mountPoint, user) {
  if (user.bookings.length === 0) {
    mountPoint.innerHTML = `
      <div class="portal-pane active">
        <h2 style="font-size: 1.8rem; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1.5rem; margin-bottom: 2rem;">My Bookings Register</h2>
        <div style="text-align: center; padding: 4rem 2rem; color: var(--color-grey);">
          <p style="margin-bottom: 2rem;">You do not have any registered upcoming recovery sessions.</p>
          <a href="#/booking" class="btn-cta">Book Sanctuary Session</a>
        </div>
      </div>
    `;
    return;
  }

  mountPoint.innerHTML = `
    <div class="portal-pane active">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1.5rem; margin-bottom: 2rem;">
        <h2 style="font-size: 1.8rem; color: var(--color-forest);">My Bookings Register</h2>
        <a href="#/booking" class="btn-cta" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">Book New Session</a>
      </div>

      <div class="portal-bookings-list">
        ${user.bookings.map(b => `
          <div class="portal-booking-card" id="bookingCard_${b.id}">
            <div class="portal-booking-info">
              <h4>${b.serviceName}</h4>
              <p>📅 ${new Date(b.date).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} &bull; ⏱ ${b.time}</p>
            </div>
            
            <div style="display: flex; align-items: center; gap: 1.5rem;">
              <span class="portal-booking-status upcoming">Confirmed</span>
              <button class="btn-cancel-booking" data-booking-id="${b.id}">Cancel</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Attach cancel events
  mountPoint.querySelectorAll('.btn-cancel-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-booking-id');
      if (confirm("Are you sure you want to cancel this sanctuary booking?")) {
        appState.cancelBooking(id);
        const card = mountPoint.querySelector(`#bookingCard_${id}`);
        if (card) card.remove();
        
        // If list is now empty, re-render pane
        if (appState.state.user.bookings.length === 0) {
          renderBookingsPane(mountPoint, appState.state.user);
        }
      }
    });
  });
}

// --- Pane 3: AI Wellness & Wearables Sync ---
function renderAIPane(mountPoint, user) {
  // If user hasn't taken the AI assessment, show the interactive wizard
  if (!user.aiAssessment) {
    renderAIWizard(mountPoint);
    return;
  }

  // Otherwise, render reports and wearables sync
  renderAIReports(mountPoint, user);
}

function renderAIWizard(mountPoint) {
  let activeQuestion = 1;
  const totalQuestions = 4;
  const answers = {};

  const questions = [
    {
      id: "q1",
      title: "How many hours of sleep did you average over the past 3 nights?",
      options: [
        { text: "Under 6 hours (Highly Deprived)", score: 40 },
        { text: "6 - 7 hours (Moderate)", score: 65 },
        { text: "7 - 8.5 hours (Optimal)", score: 95 },
        { text: "Over 8.5 hours (High Repair)", score: 85 }
      ]
    },
    {
      id: "q2",
      title: "Evaluate your level of systemic muscular soreness or joint stiffness:",
      options: [
        { text: "Severe (Highly fatigued, acute DOMS)", score: 35 },
        { text: "Moderate (Standard gym fatigue)", score: 70 },
        { text: "Negligible (Fully recovered)", score: 95 }
      ]
    },
    {
      id: "q3",
      title: "Describe your mental stress threshold or focus levels today:",
      options: [
        { text: "Sympathetic Dominant (Overwhelmed, anxious)", score: 45 },
        { text: "Moderate (Standard task load)", score: 75 },
        { text: "Parasympathetic Dominant (Calm, highly focused)", score: 98 }
      ]
    },
    {
      id: "q4",
      title: "What is your physical training volume this week?",
      options: [
        { text: "De-loading / Recovering", score: 90 },
        { text: "Standard training (3-4 workouts)", score: 75 },
        { text: "Intense competitive volume (Ironman / AFL)", score: 50 }
      ]
    }
  ];

  function renderQuestion() {
    const q = questions[activeQuestion - 1];
    const progressFill = (activeQuestion / totalQuestions) * 100;

    mountPoint.innerHTML = `
      <div class="portal-pane active">
        <div class="ai-wizard-header">
          <h2>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="ai-sparkle">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            AI Wellness Assessment Simulator
          </h2>
          <p style="color: var(--color-grey); font-size: 0.85rem;">Powered by Life Science AI algorithms.</p>
          <div class="ai-progress-bar">
            <div class="ai-progress-fill" style="width: ${progressFill}%"></div>
          </div>
        </div>

        <div class="ai-question-card">
          <span class="badge-gold">Question ${activeQuestion} of ${totalQuestions}</span>
          <h3>${q.title}</h3>
          
          <div class="ai-options-list">
            ${q.options.map((opt, index) => `
              <div class="ai-option-label" data-index="${index}">
                <input type="radio" name="aiOpt" class="ai-opt-radio" id="opt_${index}">
                <span style="font-weight: 500; font-size: 0.95rem;">${opt.text}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="ai-wizard-footer">
          <button type="button" class="btn-back-wizard" id="aiBackBtn" ${activeQuestion === 1 ? 'disabled style="opacity:0;"' : ''}>Previous</button>
          <button type="button" class="btn-cta" id="aiNextBtn">Continue</button>
        </div>
      </div>
    `;

    // Click options
    const optLabels = mountPoint.querySelectorAll('.ai-option-label');
    optLabels.forEach(label => {
      label.addEventListener('click', () => {
        optLabels.forEach(l => l.classList.remove('selected'));
        label.classList.add('selected');
        const radio = label.querySelector('.ai-opt-radio');
        if (radio) radio.checked = true;

        const idx = Number(label.getAttribute('data-index'));
        answers[q.id] = q.options[idx];
      });
    });

    // Button controls
    const nextBtn = mountPoint.querySelector('#aiNextBtn');
    const backBtn = mountPoint.querySelector('#aiBackBtn');

    nextBtn.addEventListener('click', () => {
      if (!answers[q.id]) {
        showNotification("Selection Required", "Please select an answer to continue.", "error");
        return;
      }

      if (activeQuestion < totalQuestions) {
        activeQuestion++;
        renderQuestion();
      } else {
        // Calculate final score
        const score1 = answers["q1"].score;
        const score2 = answers["q2"].score;
        const score3 = answers["q3"].score;
        const score4 = answers["q4"].score;
        const avgScore = Math.round((score1 + score2 + score3 + score4) / 4);

        // Generate recommendations based on scores
        const recs = [];
        if (avgScore < 60) {
          recs.push("Schedule severe recovery sequence: 4°C Cold Plunge (2 mins) + Epsom Salt Floatation (60 mins) to decompress the nervous system.");
          recs.push("Skip high-intensity studio training. Prioritize Yin Yoga or Stretch & Mobility classes today.");
          recs.push("Complete 20 minutes of dual-spectrum Red Light Therapy to accelerate muscular repair.");
        } else if (avgScore < 80) {
          recs.push("Perform contrast recovery rotation: Infrared Sauna (30 mins) followed by Ice Bath plunge (2 mins).");
          recs.push("Utilize dynamic pneumatic compression boots (Normatec) for 30 minutes to flush lower body metabolic fatigue.");
          recs.push("Add 10 minutes of box breathing (4-4-4-4 sequence) before sleep cycles.");
        } else {
          recs.push("Physical indices optimal. Schedule bio-hacking performance protocols (Red light ATP charging + Reformer Pilates).");
          recs.push("Maintain sleep schedule. Wearable sync shows high resting heart rate variability.");
        }

        const newAssessment = {
          score: avgScore,
          date: new Date().toISOString().split('T')[0],
          biometrics: {
            hrv: avgScore < 60 ? "42 ms" : avgScore < 80 ? "65 ms" : "90 ms",
            sleep: avgScore < 60 ? "5h 45m" : avgScore < 80 ? "7h 15m" : "8h 30m",
            stress: avgScore < 60 ? "Severe" : avgScore < 80 ? "Moderate" : "Low",
            recovery: `${avgScore}%`
          },
          recommendations: recs
        };

        appState.saveAIAssessment(newAssessment);
        showNotification("Assessment Completed", "Your AI Wellness protocol has been generated (+150 points!).", "success");
        
        // Re-render
        renderDashboard(mountPoint.closest('.section').parentNode, appState.state.user);
      }
    });

    if (backBtn && activeQuestion > 1) {
      backBtn.addEventListener('click', () => {
        activeQuestion--;
        renderQuestion();
      });
    }
  }

  renderQuestion();
}

function renderAIReports(mountPoint, user) {
  const report = user.aiAssessment;
  
  let scoreClass = 'warn';
  let scoreText = 'Needs Recovery';
  if (report.score >= 80) {
    scoreClass = 'good';
    scoreText = 'Fully Optimized';
  } else if (report.score >= 60) {
    scoreClass = 'warn';
    scoreText = 'Moderate Stress';
  }

  mountPoint.innerHTML = `
    <div class="portal-pane active">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1.5rem; margin-bottom: 2.5rem;">
        <div>
          <h2 style="font-size: 1.8rem; display: flex; align-items: center; gap: 0.5rem; color: var(--color-forest);">
            🧬 AI Longevity & Wellness Report
          </h2>
          <p style="color: var(--color-grey); font-size: 0.95rem;">Calculated ${new Date(report.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <button class="btn-secondary-white" id="retakeAssessmentBtn" style="border-color: var(--color-sage); color: var(--color-forest);">Retake Assessment</button>
      </div>

      <div class="ai-report-grid">
        <!-- Metrics Column -->
        <div>
          <div style="text-align: center; background-color: var(--color-alabaster); padding: 3rem 2rem; border-radius: var(--border-radius-lg); border: 1px solid var(--color-grey-light); margin-bottom: 2rem;">
            <span class="badge-gold">Unified Wellness Index</span>
            <div style="font-family: var(--font-brand); font-size: 4rem; font-weight: 700; color: var(--color-gold); line-height: 1; margin: 1rem 0;">
              ${report.score}<span style="font-size: 1.5rem; color: var(--color-grey);">/100</span>
            </div>
            <strong class="analytic-status ${scoreClass}" style="font-size: 1.1rem;">${scoreText}</strong>
          </div>

          <h3 style="font-size: 1.1rem; margin-bottom: 1.25rem;">Wearable Synchronized Biomarkers:</h3>
          <div class="analytics-cards-container">
            <div class="analytic-card">
              <div class="analytic-label">HRV (Vagal Tone)</div>
              <div class="analytic-value">${report.biometrics.hrv}</div>
              <span class="analytic-status ${report.score >= 80 ? 'good' : 'warn'}">${report.score >= 80 ? 'High (Resting)' : 'Compressed'}</span>
            </div>
            
            <div class="analytic-card">
              <div class="analytic-label">Sleep Duration</div>
              <div class="analytic-value">${report.biometrics.sleep}</div>
              <span class="analytic-status ${report.score >= 80 ? 'good' : 'warn'}">${report.score >= 80 ? '94% Efficient' : 'Fragmented'}</span>
            </div>

            <div class="analytic-card">
              <div class="analytic-label">Nervous Load</div>
              <div class="analytic-value">${report.biometrics.stress}</div>
              <span class="analytic-status ${report.score >= 80 ? 'good' : 'warn'}">${report.score >= 80 ? 'Parasympathetic' : 'Sympathetic'}</span>
            </div>

            <div class="analytic-card">
              <div class="analytic-label">Cellular Power</div>
              <div class="analytic-value">${report.biometrics.recovery}</div>
              <span class="analytic-status good">ATP Syncing</span>
            </div>
          </div>
        </div>

        <!-- Prescriptions Column -->
        <div>
          <h3 style="font-size: 1.1rem; margin-bottom: 1.25rem;">AI Recovery Prescriptions:</h3>
          <p style="color: var(--color-grey); font-size: 0.9rem; margin-bottom: 1.5rem;">Targeted protocols mapped by Life Science AI to optimize cellular cleansing and systemic stress management.</p>
          
          <div class="rec-list">
            ${report.recommendations.map(r => `
              <div class="rec-card">
                <h4>Biomarker Target</h4>
                <p>${r}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Wearables Sync section -->
      <div class="wearable-sync-section">
        <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Connected Wearable Systems</h3>
        <p style="color: var(--color-grey); font-size: 0.9rem;">Lotus Health Club interfaces with sports platforms to auto-update recommendations daily.</p>
        
        <div class="wearables-grid">
          <!-- Apple Health -->
          <div class="wearable-card ${user.wearables.apple ? 'synced' : ''}" data-device="apple">
            <div class="wearable-name"> Apple Health</div>
            <div class="wearable-status">${user.wearables.apple ? 'Synced' : 'Disconnect'}</div>
          </div>
          <!-- Garmin -->
          <div class="wearable-card ${user.wearables.garmin ? 'synced' : ''}" data-device="garmin">
            <div class="wearable-name">Garmin Connect</div>
            <div class="wearable-status">${user.wearables.garmin ? 'Synced' : 'Disconnect'}</div>
          </div>
          <!-- Fitbit -->
          <div class="wearable-card ${user.wearables.fitbit ? 'synced' : ''}" data-device="fitbit">
            <div class="wearable-name">Fitbit</div>
            <div class="wearable-status">${user.wearables.fitbit ? 'Synced' : 'Disconnect'}</div>
          </div>
          <!-- WHOOP -->
          <div class="wearable-card ${user.wearables.whoop ? 'synced' : ''}" data-device="whoop">
            <div class="wearable-name">WHOOP</div>
            <div class="wearable-status">${user.wearables.whoop ? 'Synced' : 'Disconnect'}</div>
          </div>
        </div>
      </div>

    </div>
  `;

  // Retake event
  mountPoint.querySelector('#retakeAssessmentBtn').addEventListener('click', () => {
    user.aiAssessment = null;
    appState.saveState();
    renderAIWizard(mountPoint);
  });

  // Wearables Click Handlers
  mountPoint.querySelectorAll('.wearable-card').forEach(card => {
    card.addEventListener('click', () => {
      const device = card.getAttribute('data-device');
      const isSynced = user.wearables[device];
      
      // Toggle sync state
      user.wearables[device] = !isSynced;
      appState.saveState();

      if (!isSynced) {
        card.classList.add('synced');
        card.querySelector('.wearable-status').textContent = 'Synced';
        showNotification("Device Synced", `${device.toUpperCase()} biometric telemetry is connected.`, "success");
      } else {
        card.classList.remove('synced');
        card.querySelector('.wearable-status').textContent = 'Disconnect';
        showNotification("Device Disconnected", `${device.toUpperCase()} biometric telemetry disabled.`, "info");
      }
    });
  });
}

// --- Pane 4: Rewards & Referral System ---
function renderRewardsPane(mountPoint, user) {
  mountPoint.innerHTML = `
    <div class="portal-pane active">
      <div style="border-bottom: 1px solid var(--color-grey-light); padding-bottom: 1.5rem; margin-bottom: 2rem;">
        <h2 style="font-size: 1.8rem; color: var(--color-forest);">Loyalty Rewards & Referral Program</h2>
        <p style="color: var(--color-grey); font-size: 0.95rem;">Accumulate wellness points by booking therapies, completing bio-assessments, and referring friends.</p>
      </div>

      <div class="rewards-header">
        <h3>Your Current Point Balance</h3>
        <div class="rewards-points-count">${user.points}</div>
        <p style="margin-top: 0.5rem; color: var(--color-sage-light); font-size: 0.9rem;">Qualifies for Gold Level redemptions</p>
      </div>

      <!-- Referral link generator -->
      <div class="referral-box">
        <h4 style="font-family: var(--font-body); font-weight: 600; color: var(--color-forest); font-size: 1rem; margin-bottom: 0.5rem;">Refer a Friend & Earn Points</h4>
        <p style="color: var(--color-grey); font-size: 0.85rem;">Send your unique link. When they join a weekly membership, you earn <strong>250 points</strong> and they receive a <strong>waived sign-up fee</strong>.</p>
        
        <div class="referral-link-input-group">
          <input type="text" id="referralLinkInput" value="https://lotushealthclub.com.au/#/join?ref=${user.referralCode}" readonly>
          <button type="button" id="copyReferralLinkBtn">Copy Link</button>
        </div>
      </div>

      <!-- Rewards Roadmap -->
      <h3 style="font-size: 1.1rem; margin-top: 3rem; margin-bottom: 1.25rem;">Rewards Redemption Milestones:</h3>
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem; border: 1px solid var(--color-grey-light);">
        <thead>
          <tr style="background-color: var(--color-forest); color: var(--color-white);">
            <th style="padding: 1rem;">Points Required</th>
            <th style="padding: 1rem;">Sanctuary Reward</th>
            <th style="padding: 1rem; text-align: right;">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--color-grey-light);">
            <td style="padding: 1rem; font-weight: 600; color: var(--color-gold-hover);">500 pts</td>
            <td style="padding: 1rem; color: var(--color-grey);">Free Compression Therapy Session (30 mins)</td>
            <td style="padding: 1rem; text-align: right;">
              <button class="btn-book-class" style="background-color: var(--color-green-success);" ${user.points >= 500 ? '' : 'disabled style="background-color: var(--color-grey-light); cursor: not-allowed;"'}>Redeem</button>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid var(--color-grey-light);">
            <td style="padding: 1rem; font-weight: 600; color: var(--color-gold-hover);">1000 pts</td>
            <td style="padding: 1rem; color: var(--color-grey);">Free Float Therapy Session (60 mins)</td>
            <td style="padding: 1rem; text-align: right;">
              <button class="btn-book-class" style="background-color: var(--color-green-success);" ${user.points >= 1000 ? '' : 'disabled style="background-color: var(--color-grey-light); cursor: not-allowed;"'}>Redeem</button>
            </td>
          </tr>
          <tr>
            <td style="padding: 1rem; font-weight: 600; color: var(--color-gold-hover);">1500 pts</td>
            <td style="padding: 1rem; color: var(--color-grey);">Custom Sports Massage or Clinical Physio (60 mins)</td>
            <td style="padding: 1rem; text-align: right;">
              <button class="btn-book-class" style="background-color: var(--color-green-success);" ${user.points >= 1500 ? '' : 'disabled style="background-color: var(--color-grey-light); cursor: not-allowed;"'}>Redeem</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // Copy referral event
  const copyBtn = mountPoint.querySelector('#copyReferralLinkBtn');
  const copyInput = mountPoint.querySelector('#referralLinkInput');

  copyBtn.addEventListener('click', () => {
    copyInput.select();
    copyInput.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyInput.value).then(() => {
      showNotification("Copied", "Referral link copied to clipboard.", "success");
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  });

  // Redeem point click
  const redeemButtons = mountPoint.querySelectorAll('.btn-book-class[style*="background-color: var(--color-green-success)"]');
  redeemButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Find row details
      const pointsReq = parseInt(btn.closest('tr').querySelector('td').textContent);
      
      if (user.points >= pointsReq) {
        user.points -= pointsReq;
        appState.saveState();
        showNotification("Reward Redeemed", `Claim voucher created successfully. Deducted ${pointsReq} points.`, "success");
        
        // Refresh rewards pane
        renderRewardsPane(mountPoint, user);
        
        // Update profile stats in sidebar
        const avatarCell = mountPoint.closest('.portal-dashboard').querySelector('.portal-user-profile');
        if (avatarCell) {
          renderDashboard(mountPoint.closest('.section').parentNode, user);
          // navigate back to rewards
          mountPoint.closest('.portal-dashboard').querySelector('.portal-nav-btn[data-pane="rewards"]').click();
        }
      }
    });
  });
}
