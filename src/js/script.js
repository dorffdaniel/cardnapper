let hamburguer = document.querySelector('.hamburguer');
let navList = document.querySelector('.navList');

hamburguer.addEventListener('click', ()=>{
    navList.classList.toggle('ativado');
    hamburguer.classList.toggle('ativar');
});


function validateMonth(input) {
    let value = parseInt(input.value);
    if (value > 12) input.value = 12;
    if (value < 1) input.value = "";
};


function validateYear(input) {
    let currentYear = new Date().getFullYear();
    let enteredYear = input.value;

    // Apenas permite até 4 dígitos
    if (enteredYear.length > 4) {
      input.value = enteredYear.slice(0, 4);
    }

    // Só valida quando o usuário digitou os 4 dígitos completos
    if (enteredYear.length === 4 && parseInt(enteredYear) < currentYear) {
      alert("O ano não pode ser menor que " + currentYear);
      input.value = "";
    }
  };

  const btnVerificar = document.querySelector('.btnVerificar');
  let bordas = document.querySelectorAll('.borda');
  let resul = document.querySelector('.resultado');
  let form = document.querySelector('.form');

  btnVerificar.addEventListener('click', ()=>{  
    let todosPreenchidos = true;

    bordas.forEach((event)=>{
        if(event.value ==''){
            event.classList.add('borda-erro');
            todosPreenchidos = false;       
        }else{
            event.classList.remove('borda-erro');
        }
    });

    if(todosPreenchidos){
        resul.style.display = 'flex'
        form.style.display = 'none'
    }
  });
