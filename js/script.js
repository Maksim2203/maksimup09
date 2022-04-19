let popupСall = document.querySelector('.popup-call')
let openPopupСall = document.querySelectorAll('.call-btn')
let closePopupCall = document.querySelector('.popup-close')

openPopupСall .forEach(element => {
   element.addEventListener('click',function(){
    popupСall.style.display = 'flex'
   })
});

closePopupCall.addEventListener('click',function(){
    popupСall.style.display = 'none'
})

// let popupDiscount = document.querySelector('popup-discount')
// let openPopupDiscount = document.querySelector('popup-discount')

const questions = document.querySelectorAll('.panel-group');

questions.forEach((questions) => {
    questions.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest('.panel-heading')){
                const allContent = questions.querySelectorAll('.panel-collapse');
                allContent.forEach((content) => {
                    content.style.display = 'none';
                })
                let panel = e.target.closest('.panel');
                let textPart = panel.querySelector('.panel-collapse');
                textPart.style.display = 'block';
            }
        })
    })
    
