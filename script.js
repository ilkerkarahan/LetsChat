//Select Dom element
const sendMessage = document.querySelector('.send-message')
let inputMessage = document.getElementById('inputMessage')

let person1 = document.getElementsByClassName('selectPersonImg')[0]
let person2 = document.getElementsByClassName('selectPersonImg')[1]

let name1 = document.querySelector('.name')
let profil = document.getElementById('profil')

let content = document.querySelector('.content')

//select write person
person1.addEventListener('click', function () {
    if (!person1.classList.contains('active')) {
        person1.classList.add('active')
        person2.classList.remove('active')
        profil.src = 'img/person2-50x50.webp'
        name1.textContent = 'Marla'
    }
})
person2.addEventListener('click', function () {
    if (!person2.classList.contains('active')) {
        person2.classList.add('active')
        person1.classList.remove('active')
        profil.src = 'img/person1-50x50.webp'
        name1.textContent = 'Tyler'
    }
})


//send message click 
 sendMessage.addEventListener('click', function () {
    inputTextRec()
})


//enter press send message
inputMessage.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
       inputTextRec()
    }
})

//send message input value
function inputTextRec() {
    if (person1.classList.contains('active')) {
        if (!(inputMessage.value === '')) {

            content.innerHTML += `
        <div class="message-first">
        <div class = "d-flex">
             <img src="img/person1-50x50.webp" alt="person1" class="imgDesign2 img-fluid">
             <p class="message1 text-left">${inputMessage.value}</p>
        </div>
        </div>
        `
            inputMessage.value = ''
        } 
    } else {
        if (!(inputMessage.value === '')) {
        
           content.innerHTML += `
        <div class="message-second">
        <div class = "d-flex">
            <p class="message2 text-left">${inputMessage.value}</p>
            <img src="img/person2-50x50.webp" alt="person2" class="imgDesign3 img-fluid">
        </div>
        </div>
        `
            inputMessage.value = ''
        }
    }
}




