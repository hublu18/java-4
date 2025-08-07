let closeEye = document.querySelector('.close_eye');
let openEye = document.querySelector('.eye_on');
let input =document.querySelector('.input')
closeEye.addEventListener("click", function(e){
    e.preventDefault();
    closeEye.classList.add('first_active');
    openEye.classList.add('first_active');
    input.type ='text';
})
openEye.addEventListener("click", function(e){
    e.preventDefault();
    closeEye.classList.remove('first_active');
    openEye.classList.remove('first_active');
    input.type= 'password'
})