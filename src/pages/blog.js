// Blog & Insights Component
import { BLOGS } from "../data.js";

export function render(container, blogId) {
  // If an article ID is requested, render the full post
  if (blogId) {
    renderBlogPost(container, blogId);
    return;
  }

  // Otherwise, render the grid of articles
  renderGrid(container);
}

function renderGrid(container) {
  let activeCategory = "All";
  const categories = [
    "All",
    "Recovery",
    "Biohacking",
    "Longevity",
    "Nutrition",
    "Athlete Health",
    "Wellness",
    "Mental Health",
  ];

  function getFilteredBlogs() {
    if (activeCategory === "All") return BLOGS;
    return BLOGS.filter((b) => b.category === activeCategory);
  }

  function renderBlogCards() {
    const listGrid = container.querySelector("#blogListGrid");
    if (!listGrid) return;

    const filtered = getFilteredBlogs();

    if (filtered.length === 0) {
      listGrid.innerHTML = `
        <div style="grid-column: span 3; text-align: center; padding: 4rem 2rem; color: var(--color-grey);">
          <p>No articles published in this category yet. Check back soon for new scientific insights.</p>
        </div>
      `;
      return;
    }

    listGrid.innerHTML = filtered
      .map(
        (post) => `
      <div class="card-luxury blog-post-card">
        <div class="blog-post-img" style="background-image: url('./assets/${post.id}.png'); background-color: var(--color-sage-light);"></div>
        <div class="blog-post-content">
          <div class="blog-post-meta">
            <span class="badge-gold" style="margin-bottom: 0;">${post.category}</span>
            <span>⏱ ${post.readTime}</span>
          </div>
          <h3 class="blog-post-title">${post.title}</h3>
          <p class="blog-post-excerpt">${post.excerpt}</p>
          
          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--color-grey-light);">
            <a href="#/blog/${post.id}" class="btn-read-more">Read Insights &rarr;</a>
          </div>
        </div>
      </div>
    `,
      )
      .join("");
  }

  container.innerHTML = `
    <!-- Header Section -->
    <section class="section" style="padding-top: 2rem; ">
      <div class="section-header">
        <span class="section-subtitle">Science & Insights</span>
        <h1 class="section-title">The Longevity Log</h1>
        <p class="section-desc">Evidence-based literature examining cellular recovery, circadian mechanics, autophagic pathways, and hormonal balance.</p>
      </div>
    </section>

    <!-- Categories and Grid -->
    <section class="section" style="padding-bottom: 2rem;">
      <!-- Category Buttons -->
      <div class="blog-categories" id="blogCatsContainer">
        ${categories
          .map(
            (cat) => `
          <button class="blog-cat-btn ${cat === activeCategory ? "active" : ""}" data-cat="${cat}">
            ${cat}
          </button>
        `,
          )
          .join("")}
      </div>

      <!-- Articles Grid -->
      <div class="blog-grid" id="blogListGrid">
        <!-- Rendered dynamically -->
      </div>
    </section>
  `;

  // Attach button click events to category buttons
  const catButtons = container.querySelectorAll(".blog-cat-btn");
  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      catButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-cat");
      renderBlogCards();
    });
  });

  // Initial render
  renderBlogCards();
}

function renderBlogPost(container, blogId) {
  const post = BLOGS.find((b) => b.id === blogId);

  if (!post) {
    container.innerHTML = `
      <div class="section text-center" style="padding: 100px 20px;">
        <h2>Article Not Found</h2>
        <p style="color: var(--color-grey); margin-bottom: 20px;">The publication you requested is not in the library.</p>
        <a href="#/blog" class="btn-cta">Return to Insights</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <section class="section" style="padding-top: 3rem; padding-bottom: 6rem;">
      <div class="article-detail">
        <div class="article-header">
          <a href="#/blog" class="btn-back-services" style="margin-bottom: 2rem;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Insights
          </a>
          
          <div class="article-meta">
            <span class="badge-gold" style="margin-bottom: 0;">${post.category}</span>
            <span>By ${post.author}</span>
            <span>&bull;</span>
            <span>Published ${post.date}</span>
            <span>&bull;</span>
            <span>⏱ ${post.readTime}</span>
          </div>
          
          <h1 class="article-title">${post.title}</h1>
        </div>

        <div class="article-banner" style="background-image: url('./assets/${post.id}.png'); background-color: var(--color-sage-light);"></div>

        <article class="article-content">
          ${post.content}
        </article>

        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-grey-light); text-align: center;">
          <h4 style="font-size: 1.1rem; margin-bottom: 1.5rem; font-family: var(--font-body); font-weight: 600; color: var(--color-forest);">Ready to experience the science firsthand?</h4>
          <a href="#/booking" class="btn-cta">Book Sanctuary Session</a>
        </div>
      </div>
    </section>
  `;
}
