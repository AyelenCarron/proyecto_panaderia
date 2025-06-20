const selectOrigen = document.getElementById ("selectOrigen");
const bloqueOtro = document.getElementById ("bloqueOtro");
const contactForm = document.getElementById('contactForm');

selectOrigen.addEventListener("change",function(){
    const op= this.value;
    if(op == "otro"){
        bloqueOtro.classList.remove("escondido");
    }else if(op == "otro")
        bloqueOtro.classList.add("escondido");
})

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Mensaje enviado');

    
    contactForm.reset();
});