const btn = document.getElementById('button');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'en cours de transmission...';

   const serviceID = 'default_service';
   const templateID = 'benoit_portfolio';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'envoyer un Mail';
      alert('Mail envoyé!');
    }, (err) => {
      btn.value = 'envoyer un Mail';
      alert(JSON.stringify(err));
    });
});
