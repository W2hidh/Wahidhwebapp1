/* ===============================
   FADE-IN ON SCROLL
================================ */
const fadeItems = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeItems.forEach(item => fadeObserver.observe(item));


/* ===============================
   DASHBOARD COUNTER (ON VIEW)
================================ */
const counters = document.querySelectorAll(".dash-value");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = +counter.dataset.target;
    let current = 0;
    const increment = target / 80;

    const update = () => {
      if (current < target) {
        current += increment;
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    update();
    counterObserver.unobserve(counter);
  });
}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));


/* ===============================
   CHART.JS – SAFE LOAD
================================ */
const chartCanvas = document.getElementById("reachChart");

if (chartCanvas) {
  const ctx = chartCanvas.getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [{
        data: [
          1200,1600,2000,2800,3400,4200,5100,
          6200,7200,8600,9400,10200,11800,13500,
          15000,16800,18500,20500,22800,24800,
          26500,28500,30200,32000,33800,36000,
          38000,40200,42500,45000
        ],
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56,189,248,0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: {
          ticks: { color: "#94a3b8" },
          grid: { color: "rgba(255,255,255,0.05)" }
        }
      }
    }
  });
}


/* ===============================
   REEL AUTOPLAY + DOUBLE TAP
================================ */
document.querySelectorAll(".reel").forEach(reel => {
  const video = reel.querySelector("video");
  if (!video) return;

  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.isIntersecting ? video.play() : video.pause();
    });
  }, { threshold: 0.6 });

  videoObserver.observe(video);

  let lastTap = 0;
  reel.addEventListener("click", () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      reel.classList.add("liked");
      setTimeout(() => reel.classList.remove("liked"), 600);
    }
    lastTap = now;
  });
});


/* ===============================
   REDIRECT TO INSTAGRAM
================================ */
document.querySelectorAll(".insta-post").forEach(post => {
  post.addEventListener("click", () => {
    const link = post.dataset.link;
    if (link) window.open(link, "_blank");
  });
});

document.querySelectorAll(".post-actions i").forEach(icon => {
  icon.addEventListener("click", e => e.stopPropagation());
});
