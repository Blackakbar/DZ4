const wrapper = document.querySelector('.wrapper');

const request = new XMLHttpRequest();
request.open("GET", "people.json");
request.setRequestHeader("Content-type", "application/json");
request.addEventListener("load", () => {
    const peopleData = JSON.parse(request.responseText);
        peopleData.forEach(person => {
            const personCard = document.createElement('div');
            personCard.setAttribute('class', 'person-card');
            personCard.innerHTML = `
                <img src="${person.image}">
                <div>Name: <span class="name"></span></div>
                <div>Age: <span class="age"></span></div>
                <div>Bio: <span class="bio"></span></div>
                <button class="btn">get data</button>
            `;
     wrapper.append(personCard);

    const btn = personCard.querySelector(".btn");

    btn.addEventListener('click', () => {
        const nameElement = personCard.querySelector('.name');
        const ageElement = personCard.querySelector('.age');
        const bioElement = personCard.querySelector('.bio');
            nameElement.textContent = person.name;
            ageElement.textContent = person.age;
            bioElement.textContent = person.bio;
    });
        });

});

request.send();