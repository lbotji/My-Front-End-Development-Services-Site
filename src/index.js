const toggle = document.getElementById("darkToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);

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

  
  

