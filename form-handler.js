document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const response = await fetch("https://formspree.io/f/mjvqekyb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        alert("Thank you for your message. We'll get back to you soon!");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    });
  });
  