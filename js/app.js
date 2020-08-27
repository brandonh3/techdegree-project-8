// ===============================
//          Variables
// ===============================

const employeesList = document.querySelector('.employee-cards');
const employeeCards = document.getElementsByClassName('card');
let users;
let employeeCard;
let cardImg;
let cardInfo;
let img;
let name;
let email;
let city;



// ===============================
//     Create Employee Cards
// ===============================

function randomUser(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}


fetch('https://randomuser.me/api/?results=12&nat=us') 

    .then((resp) => resp.json())
    .then(function (data) {
        users = data.results;
        return users.map(function (user) {
            employeeCard = randomUser('div'),
                cardImg = randomUser('div'),
                cardInfo = randomUser('div'),
                img = randomUser('img'),
                name = randomUser('h3'),
                email = randomUser('p'),
                city = randomUser('p');
            employeeCard.classList.add('card');
            cardImg.classList.add('card-img');
            cardInfo.classList.add('card-info');
            img.src = user.picture.large;
            name.innerHTML = `${user.name.first} ${user.name.last}`;
            email.innerHTML = `${user.email}`;
            city.innerHTML = `${user.location.city}`;
            append(cardImg, img),
            append(cardInfo, name),
            append(cardInfo, email),
            append(cardInfo, city),
            append(employeeCard, cardImg),
            append(employeeCard, cardInfo);

            append(employeesList, employeeCard);
        }) 
    })

    .catch(function (error) {
        console.log(error);
    });


// ===============================
//     Create Employee Modals
// ===============================

