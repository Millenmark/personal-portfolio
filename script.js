const emailBtn = document.querySelector('.email-btn')

AOS.init();

let typed = new Typed('#element', {
  strings: ['Millen Mark is a web developer and UI/UX designer who creates visually appealing and user-friendly digital experiences. With extensive experience gained through coding bootcamp, Millen has honed his proficiency in coding and design to create dynamic and responsive websites that impress clients. He stays up-to-date with the latest industry trends and technologies and is eager to apply his skills to an entry-level position where he can continue to learn and grow.'],
  typeSpeed: 1,
  startDelay: 2000,
})

setTimeout(() => {
  emailBtn.style.visibility = "visible"
  emailBtn.classList.add('animate__bounce')
}, 16500)

Path.map("#/").to(() => {
  fetch("hero.html")
    .then(response => response.text())
    .then(html => {
      // Render the HTML content
      document.querySelector("#content").innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
});