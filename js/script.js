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