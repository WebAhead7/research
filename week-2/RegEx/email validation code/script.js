
const input = document.querySelector('#email');
const small = document.querySelector('small');
const submit = document.querySelector('#submit');



const emailValidation = (e) =>{       
    e.preventDefault();  

    const checker = /([a-zA-Z0-9_\.-]{5,})+@(([a-zA-Z0-9-]{3,})+(\.))([a-zA-Z0-9\.]{2,10})$/g
               
    if(!checker.test(input.value)){
        small.classList.remove('pass');
        small.classList.add('failed');
        small.innerText = 'Keep trying! NOT VALID';
    } else {
        small.classList.remove('failed');
        small.classList.add('pass');
        small.innerText = 'Yahaa! THIS EMAIL IS VALID';
    }
}

submit.addEventListener('click',(e)=> emailValidation(e));































// test 1 : ///([a-zA-Z0-9_\.-])?((?!\$|#|&|%|@|!).)+@(([a-zA-Z0-9-]{3,})+(\.))([a-zA-Z0-9\.]{2,10})$/

// test 2 : ///([a-zA-Z0-9_\.-])+@(([a-zA-Z0-9-]{3,})+(\.))([a-zA-Z0-9\.]{2,10})$/