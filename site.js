
const menuButton = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.navlinks');
if(menuButton && navLinks){
  menuButton.addEventListener('click',()=>navLinks.classList.toggle('open'));
}

// Booking form: works without a backend by opening a prepared email.
// Later this can be swapped for a Cloudflare Pages Function.
const bookingForm = document.querySelector('#bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = new FormData(bookingForm);
    const lines = [
      `Name: ${f.get('name')||''}`,
      `Organization / Event: ${f.get('organization')||''}`,
      `Email: ${f.get('email')||''}`,
      `Event date(s): ${f.get('dates')||''}`,
      `Location: ${f.get('location')||''}`,
      `Estimated attendance: ${f.get('attendance')||''}`,
      `Inquiry type: ${f.get('type')||''}`,
      ``,
      `${f.get('message')||''}`
    ];
    const subject = encodeURIComponent(`PLURQuest booking inquiry — ${f.get('organization')||f.get('name')||'Website'}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:booking@plurquest.com?subject=${subject}&body=${body}`;
  });
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
