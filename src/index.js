 const backToTopBtn = document.getElementById("backToTop");
    const toggleBtn = document.getElementById("themeToggle");

    window.onscroll = () => {
      backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

  const form = document.getElementById('contactForm');
  const popup = document.getElementById('popup');

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop the page from refreshing

    const formData = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/xzzeknjg', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      popup.style.display = 'block';
      form.reset();
      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000);
    } else {
      alert("Oops! Something went wrong.");
    }
  });

  
  

