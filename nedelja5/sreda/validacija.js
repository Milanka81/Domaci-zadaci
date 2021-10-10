// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!
let isValidate = true
let btn = document.querySelector('.submit')

let firstName = document.querySelector('#name')
let lastName = document.querySelector('#surname')
let password = document.querySelector('#password')
let passwordConfirm = document.querySelector('#password-confirm')

let divUsersList = document.querySelector('.users-list')

let divCheckbox = document.querySelector('.div-checkboxes')
let HTML = document.querySelector('#check-1');
let CSS = document.querySelector('#check-2');
let Javascript = document.querySelector('#check-3');
let PHP = document.querySelector('#check-4');


let divCity = document.querySelectorAll('#city')
let divGender = document.querySelector('div-genders');
let genderMale = document.querySelector('#gender-male')
let genderFemale = document.querySelector('#gender-female')


let firstNameError = document.querySelector('#name-error')
let lastNameError = document.querySelector('#surname-error')
let passwordError = document.querySelector('#password-error')
let confirmError = document.querySelector('#confirm-error')
let courseError = document.querySelector('#checkBox-error')
let cityError = document.querySelector('#city-error')
let genderError = document.querySelector('#gender-error')

let users = []

btn.addEventListener('click', () => {
    if(isValidate){
        let userReview = document.createElement('div')
        userReview.classList.add('user-review')

        let user = {
            first_name: capitalizeFirstLetter(firstName.value).trim(),
            last_name: capitalizeFirstLetter(lastName.value).trim(),
            usr_password: password.value,
            usr_course: divCheckbox.value
        }
    
        userReview.innerHTML = `
         Name : ${capitalizeFirstLetter(firstName.value).trim()} <br>
         Last Name: ${capitalizeFirstLetter(lastName.value).trim()} <br>
         Password: ${password.value} <br>
         Course: ${divCheckbox.value}`

        divUsersList.append(userReview)
        users.push(user)
        console.log(users);
        firstName.value = ''
        lastName.value = ''
        password.value = ''
        passwordConfirm.value = ''
        
    }
    
    if (firstName.value == "") {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field is requierd"
        isValidate = false
    } else if (firstName.value.length < 5) {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field must include minimum five character"
        isValidate = false
    } else if (firstName.value.length > 15) {
        firstNameError.textContent = ""
        firstNameError.textContent = "This field must have less then fifteen characters"
        isValidate = false
    }
    if (lastName.value == "") {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field is requierd"
        isValidate = false
    } else if (lastName.value.length < 5) {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field must have minimum five character"
        isValidate = false
    } else if (lastName.value.length > 20) {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field can't have more than twenty characters"
        isValidate = false
    }
    if (password.value == "") {
        passwordError.textContent = ""
        passwordError.textContent = "This field is requierd"
        isValidate = false
    } else if (password.value.length < 8) {
        passwordError.textContent = ""
        passwordError.textContent = "This field can't have less then eight characters"
        isValidate = false
    } else if (!stringHasNumber(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include number"
        isValidate = false
    } else if (!stringHasUpperCase(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "This field must include uppercase"
        isValidate = false
    }
    if (passwordConfirm.value == "") {
        confirmError.textContent = ""
        confirmError.textContent = "This field is requierd"
        isValidate = false
    } else if (passwordConfirm.value !== password.value) {
        confirmError.textContent = ""
        confirmError.textContent = "This field doesn't match with password"
        isValidate = false
    }
    if (HTML.checked !== true && CSS.checked !== true && Javascript.checked !== true && PHP.checked !== true) {
        courseError.textContent = "Mark any of checkbox";
    }
    if( divCity.value !== '1' ||divCity.value !== '2' ||divCity.value !== '3' ||divCity.value !== '4') {
       cityError.textContent = "This field is required" 
    }
    if(genderMale !== true && genderFemale !== true  ) {
        genderError.textContent = "Select gender"
    }}
)

function stringHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function stringHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

