const Country = (country) => {
    const divCountry = document.createElement('div')

     const pName = document.createElement('p')
     pName.textContent = country.name
  

     const pCap = document.createElement('p')
     pCap.textContent = `Capital: ${country.capital}`

     const img = document.createElement('img')
     img.src = country.flag
     img.alt = `Flag of ${country.name}` 

     divCountry.append(pName, pCap,img)

     return divCountry
}
 
export default Country;