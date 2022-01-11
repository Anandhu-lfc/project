var chatbtn=document.querySelector('.scbtn')
var modal=document.querySelector('.modalcont')
var clmodal=document.querySelector('.cl')

chatbtn.addEventListener('click',()=>{
    modal.classList.add('mo-active')
})

clmodal.addEventListener('click',()=>{
    modal.classList.remove('mo-active')
})

const text=['inspiring creativity through arts','inspiring creativity through arts','inspiring creativity through arts']
let count=0
let index=0
let currentext=''
let letter=''
function type(){
    if(count === text.length){
        count=0
    }
    currentext=text[count]
    letter=currentext.slice(0, ++index)
    document.querySelector('.typing').textContent=letter
    if(letter.length === currentext.length){
        count++
        index=0
    }
    setTimeout(type,400)

}
type()