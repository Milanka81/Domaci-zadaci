
import { getAllCountries } from "../service"
import Countries from "./Countries"

const Country = (country, countries, random15)=>{
    const divCountry = document.createElement('div')
    divCountry.classList.add('country')

    const p = document.createElement('p')
    p.innerHTML = `Country : ${country.name}`

    const img = document.createElement('img')
    img.classList.add('flag')
    img.src = country.flag
    img.width = '10px'
    img.alt = `Flag of ${country.name}`

    img.addEventListener('click',(e)=>{
        document.body.innerHTML = ''
    
        let noviDiv = document.createElement('div')

        let jezici = []
        for (let i = 0; i < country.languages.length; i++) {
            jezici.push(country.languages[i].name)
        } 

        noviDiv.innerHTML = `
        <img src='${e.target.src}'/>
        <p>${country.name}</p>
        <p>${country.capital}</p>
        <p>${country.population}</p>
        <p>${country.timezones}</p>
        <p>${jezici}</p>`

        let btnPrev = document.createElement('button')
        btnPrev.textContent = 'Prethodna'
        
        let btnNext = document.createElement('button')
        btnNext.textContent = 'Sledeca'
        let btnBack = document.createElement('button')
        btnBack.textContent = 'Nazad na drzave'
        btnBack.addEventListener('click', ()=>{
            document.body.innerHTML = ''
    
            getAllCountries().then(res=>{
                let random15 = []
                let niz = res.data
                for (let i = 0; i < 15; i++) {
                  
                  random15.push(niz[Math.floor(Math.random()* niz.length)])
                }
              
                  console.log(...Countries(random15));
                  document.body.append(...Countries(random15));
              })
        
              
            
        })

        noviDiv.append(btnBack,btnNext, btnPrev)

        document.body.append(noviDiv)
        console.log(noviDiv);
        
    })

    const pCap = document.createElement('p')
    pCap.innerHTML = `Capital: ${country.capital}`

    divCountry.append(p, pCap,img,document.createElement('hr'))

    return divCountry
}

export default Country