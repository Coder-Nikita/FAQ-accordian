const acc= document.querySelectorAll('.accordian')

acc.forEach(elm => {
   const icon= elm.querySelector('.icon')
   const ans= elm.querySelector('.answer')

   elm.addEventListener('click',() => {
        if(icon.classList.contains('active')){
            icon.classList.remove('active')
            ans.style.maxHeight= null;
        }else{
            icon.classList.add('active')
            ans.style.maxHeight= ans.scrollHeight + 'px'
        }
    
    
   })
})