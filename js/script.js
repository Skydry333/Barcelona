$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

//------------------------------------------------COUNTER-------------------------------
const txtItem = document.querySelector('.textarea');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.text__limit span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener('input', symbolCounter);

function symbolCounter(){
    const txtCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounterResult;
}


//---------------------------------------validation form-------------------------------------

const forma = document.forms.form;
const text_fild = forma.text;
const error = document.querySelector('.valid__error');
const letter_area = document.querySelector('.form');
let data = new Date();
let year = data.getFullYear();
let month = data.getMonth();
let day = data.getDate();
let time_h = data.getHours();
let time_m = data. getMinutes();

forma.addEventListener('submit', (event) =>{
    if(!text_fild.value){
        error.classList.add('active');
        event.preventDefault();
    } else{
        letter_area.insertAdjacentHTML(
            'beforebegin',
            `<div class="fan__letter">
            <div class="fan__container">
                <div class="letter__text">
                    <p>${text_fild.value}</p>
                </div>
                <div class="letter__data">
                    <div class="letter__row">
                        <div class="letter__date">
                            <h6> ${day}.${month+1}.${year} <span>${time_h}:${time_m + 0}</span></h6>
                        </div>                    
                    </div>  
                </div>
            </div>
        </div>`
        )
        text_fild.value = '';
    }
    text_fild.addEventListener('focus', (event)=>{
        error.classList.remove('active');
    })
})