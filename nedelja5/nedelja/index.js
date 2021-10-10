

// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi 
// nacin naznaci" da je item uradjen).//

import obj from "./service.js"


const inputText = document.querySelector('#input-text')
const divUserList = document.querySelector('.user-list')
const forma = document.querySelector('#forma')


obj.data.forEach(el =>{
    const divItem = document.createElement('div')
    divItem.classList.add('item')

    const pText = document.createElement('p')
    pText.innerHTML = el.desc

    const checkb = document.createElement("input")
    checkb.setAttribute("type", "checkbox")

    const btn = document.createElement('button')
    btn.textContent = 'Delete'

    checkb.addEventListener('change', function() {
        if(el.done == true){
            pText.innerHTML = el.desc + "&#10004 " 
     }
    })

    btn.addEventListener('click', () =>{
        divItem.remove()
        obj.deleteById(el.id)
        console.log(obj.data);
    
    })

    divItem.append(pText, checkb)
    divItem.append(btn)
    divUserList.append(divItem)
    
})

console.log(obj.data);




forma.addEventListener('submit', (event) =>{
    event.preventDefault()

    const divItem = document.createElement('div')
    divItem.classList.add('item')

    let p = document.createElement('p')
    p.textContent = inputText.value

    const checkb = document.createElement("input")
    checkb.setAttribute("type", "checkbox")
    checkb.classList.add('checkbox1')

    const btn = document.createElement('button')
    btn.textContent = 'Delete'

    btn.addEventListener('click', () =>{
        divItem.remove()
        obj.deleteById()
        console.log(obj.data);
    })
let item = {
    desc: inputText.value,
    done: checkb.value
    
}

    checkb.addEventListener('change', function() {
        if (this.checked) {
            item.done == true
            p.innerHTML = item.desc + "&#10004 " 
            
          }
    })
    

    
    obj.add(item)
    divItem.append(p, checkb, btn)
    divUserList.append(divItem)
    
    console.log(obj.data);
})
    


