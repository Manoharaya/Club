// Timetable Component
import { CLASSES, INSTRUCTORS, CLASS_TYPES } from '../data.js';

export function render(container) {
  // Set up default filter values
  let selectedDay = 'All';
  let selectedInstructor = 'All';
  let selectedType = 'All';

  function getFilteredClasses() {
    return CLASSES.filter(cls => {
      const matchDay = selectedDay === 'All' || cls.day === selectedDay;
      const matchInst = selectedInstructor === 'All' || cls.instructor === selectedInstructor;
      const matchType = selectedType === 'All' || cls.type === selectedType;
      return matchDay && matchInst && matchType;
    });
  }

  function renderGrid() {
    const filtered = getFilteredClasses();
    const gridWrapper = container.querySelector('#timetableGridWrapper');
    if (!gridWrapper) return;

    if (filtered.length === 0) {
      gridWrapper.innerHTML = `
        <div class="timetable-no-results">
          <p>No classes match your selected filters. Please adjust your criteria.</p>
        </div>
      `;
      return;
    }

    // Group filtered classes by time slots to render them neatly
    const groupedByTime = {};
    filtered.forEach(cls => {
      if (!groupedByTime[cls.time]) {
        groupedByTime[cls.time] = [];
      }
      groupedByTime[cls.time].push(cls);
    });

    // Sort time keys chronologically (simplified for demo sorting)
    const sortedTimes = Object.keys(groupedByTime).sort((a, b) => {
      const getVal = (t) => {
        const parts = t.split(' ');
        const [hr, min] = parts[0].split(':').map(Number);
        const pm = parts[1] === 'PM';
        return (hr % 12 + (pm ? 12 : 0)) * 60 + min;
      };
      return getVal(a) - getVal(b);
    });

    gridWrapper.innerHTML = `
      <table class="timetable-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Class Schedule</th>
          </tr>
        </thead>
        <tbody>
          ${sortedTimes.map(time => {
            const list = groupedByTime[time];
            return `
              <tr>
                <td class="timetable-time-cell">${time}</td>
                <td class="timetable-classes-cell">
                  <div class="timetable-class-cards">
                    ${list.map(cls => {
                      const isFull = cls.spots === 0;
                      const isLow = cls.spots > 0 && cls.spots <= 3;
                      
                      let spotsText = `${cls.spots} / ${cls.maxSpots} spots`;
                      let spotsClass = '';
                      if (isFull) {
                        spotsText = 'Fully Booked';
                        spotsClass = 'low';
                      } else if (isLow) {
                        spotsText = `Only ${cls.spots} left!`;
                        spotsClass = 'low';
                      }

                      return `
                        <div class="timetable-card ${cls.type}">
                          <div class="timetable-card-header">
                            <span class="timetable-card-title">${cls.name}</span>
                            <span class="timetable-card-spots ${spotsClass}">${spotsText}</span>
                          </div>
                          
                          <div class="timetable-card-instructor">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>${cls.instructor}</span>
                          </div>
                          
                          <div class="timetable-card-footer">
                            <span class="timetable-card-type">${cls.day} &bull; ${cls.type}</span>
                            <button class="btn-book-class" data-class-id="${cls.id}" ${isFull ? 'disabled style="background-color: var(--color-grey-light); color: var(--color-grey); cursor: not-allowed;"' : ''}>
                              ${isFull ? 'Full' : 'Book'}
                            </button>
                          </div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;

    // Attach click events to "Book" class buttons
    gridWrapper.querySelectorAll('.btn-book-class').forEach(btn => {
      btn.addEventListener('click', () => {
        const classId = btn.getAttribute('data-class-id');
        const targetCls = CLASSES.find(c => c.id === classId);
        if (targetCls) {
          // Pre-select service/class in booking wizard
          window.location.hash = `#/booking?class=${classId}`;
        }
      });
    });
  }

  container.innerHTML = `
    <!-- Header Section -->
    <section class="section" style="padding-top: 4rem; padding-bottom: 2rem;">
      <div class="section-header">
        <span class="section-subtitle">Weekly Calendar</span>
        <h1 class="section-title">Studio Timetable</h1>
        <p class="section-desc">Filter by day, instructor, or category to structure your training week alongside restorative yoga and breathing classes.</p>
      </div>
    </section>

    <!-- Filters and Timetable Layout -->
    <section class="section" style="padding-bottom: 6rem;">
      <div class="timetable-container">
        
        <!-- Filter Controls -->
        <div class="timetable-filters">
          <!-- Day Filter -->
          <div class="filter-group">
            <label for="dayFilter">Day</label>
            <select id="dayFilter" class="filter-select">
              <option value="All">All Days</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>

          <!-- Class Type Filter -->
          <div class="filter-group">
            <label for="typeFilter">Class Type</label>
            <select id="typeFilter" class="filter-select">
              <option value="All">All Types</option>
              ${CLASS_TYPES.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
            </select>
          </div>

          <!-- Instructor Filter -->
          <div class="filter-group">
            <label for="instructorFilter">Instructor</label>
            <select id="instructorFilter" class="filter-select">
              <option value="All">All Instructors</option>
              ${INSTRUCTORS.map(i => `<option value="${i}">${i}</option>`).join('')}
            </select>
          </div>

          <!-- Reset Button -->
          <button id="resetFilters" class="btn-reset-filters">Clear Filters</button>
        </div>

        <!-- Rendered Schedule Grid -->
        <div class="timetable-grid-wrapper" id="timetableGridWrapper">
          <!-- Table rendered here -->
        </div>

      </div>
    </section>
  `;

  // Attach event listeners to select elements
  const dayFilter = container.querySelector('#dayFilter');
  const typeFilter = container.querySelector('#typeFilter');
  const instructorFilter = container.querySelector('#instructorFilter');
  const resetBtn = container.querySelector('#resetFilters');

  dayFilter.addEventListener('change', (e) => {
    selectedDay = e.target.value;
    renderGrid();
  });

  typeFilter.addEventListener('change', (e) => {
    selectedType = e.target.value;
    renderGrid();
  });

  instructorFilter.addEventListener('change', (e) => {
    selectedInstructor = e.target.value;
    renderGrid();
  });

  resetBtn.addEventListener('click', () => {
    selectedDay = 'All';
    selectedInstructor = 'All';
    selectedType = 'All';
    
    dayFilter.value = 'All';
    typeFilter.value = 'All';
    instructorFilter.value = 'All';
    
    renderGrid();
  });

  // Initial render
  renderGrid();
}
