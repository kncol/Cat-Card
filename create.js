let addUnder = document.querySelector('.addOn');
let check = document.querySelector('.form-check-input');

console.log('page open', sessionStorage);

let birthdayChosen = sessionStorage.getItem('birthdayChosen');
let congratsChosen = sessionStorage.getItem('congratsChosen');
let otherChosen = sessionStorage.getItem('otherChosen');

let thing = false;

let birthday = document.querySelector('#birthdayCard');
let congrats = document.querySelector('#congratsCard');
let other = document.querySelector('#otherCard');
let label = document.querySelector('.text-center.fs-1');
let card = document.querySelector('#card');
let info = document.querySelector('#info');
let otherInfo = document.querySelector('.otherInfo');
let submit = document.querySelector('#submit');

let form1 =  document.querySelector('.form-control.one.brown');
let form2 = document.querySelector('.form-control.two.brown');
let addedInfo;
let message;

let label2 = document.querySelector('.form-label.two');

let output = document.querySelector('#output');
let cat = document.querySelector('#imageHere');
let extra1 = document.querySelector('#extra');

let selectedCat = document.querySelector('.form-select');

let formName = sessionStorage.getItem('name');
let specific = sessionStorage.getItem('specific');
let theCat = sessionStorage.getItem('theCat');

let theAddedInfo = sessionStorage.getItem('theAddedInfo');

let checked = sessionStorage.getItem('checked');
let addedMessage = sessionStorage.getItem('message');

if (output){
    console.log(formName);
    console.log(specific);
    console.log(theCat);
    if (birthdayChosen === "true"){
        if (formName && specific && theCat){
            let nth = "th";
            if (specific < 10){
                nth = "nd";
            }
            output.textContent = `Happy ${specific}${nth} Birthday, ${formName}!`;
            createImg(theCat);
            if (checked){
                extra1.textContent = `${addedMessage}`;
            }
        }
        else{
            output.textContent = "Sorry, there seems to be missing information for your card!";
        }
    }
    else if (congratsChosen === "true"){
        if (formName && specific && theCat){
            output.textContent = `Congratulations on ${specific}, ${formName}!`;
            createImg(theCat);
            if (checked){
                extra1.textContent = `${addedMessage}`;
            }
        }
        else{
            output.textContent = "Sorry, there seems to be missing information for your card!";
        }
    }
    else if (otherChosen === "true"){
        console.log(theAddedInfo);
        if (theAddedInfo && theCat){
            output.textContent = `${theAddedInfo}`;
            createImg(theCat);
        }
        else{
            output.textContent = "Sorry, there seems to be missing information for your card!";
        }
    }
    
}


if (birthday){
birthday.addEventListener('click', function(){

    sessionStorage.setItem('birthdayChosen', "true");
    sessionStorage.setItem('congratsChosen', "false");
    sessionStorage.setItem('otherChosen', "false");

    form1.value = "";
    form2.value = "";

    console.log('resetting birthday');
    sessionStorage.setItem('name', "");
    sessionStorage.setItem('specific', "");
    sessionStorage.setItem('theCat', "");
    sessionStorage.setItem('checked', "");


    card.style.display = 'block';
    info.style.display = 'block';
    otherInfo.style.display = 'none';
    label.textContent = "Birthday Card";
    form1.placeholder = "Enter whoever you are wishing a happy birthday";
    label2.textContent = "Age";
    form2.placeholder = "Enter the age that they are turning";
})}

if (congrats){
congrats.addEventListener('click', function(){

    sessionStorage.setItem('birthdayChosen', "false");
    sessionStorage.setItem('congratsChosen', "true");
    sessionStorage.setItem('otherChosen', "false");

    form1.value = "";
    form2.value = "";

    console.log('resetting congrats');
    sessionStorage.setItem('name', "");
    sessionStorage.setItem('specific', "");
    sessionStorage.setItem('theCat', "");
    sessionStorage.setItem('checked', "");

    card.style.display = 'block';
    info.style.display = 'block';
    otherInfo.style.display = 'none';
    label.textContent = "Congratulations Card";
    form1.placeholder = "Enter whoever you are congratulating";
    label2.textContent = "Specified Congrats (Ex: Congratulations '____')";
    form2.placeholder = "Enter the specific reason which you are congragulating them for";
        
})}

if (other){
other.addEventListener('click', function(){

    sessionStorage.setItem('birthdayChosen', "false");
    sessionStorage.setItem('congratsChosen', "false");
    sessionStorage.setItem('otherChosen', "true");

    form1.value = "";
    form2.value = "";

    card.style.display = 'block';
    label.textContent = "Other";
    info.style.display = 'none';
    otherInfo.style.display = 'block';
    let template = `
    <label for="addedInfo" class="form-label fs-5">Add whatever you want your custom card to say!</label>
    <div class="mb-4 form-floating">
    <textarea class="form-control" id="addedInfo" style="height: 120px"></textarea>
    </div>
    `;
    otherInfo.innerHTML = template;
    addedInfo = document.getElementById('addedInfo');
    document.body.insertAdjacentElement(otherInfo);
    
})}

if (check){
check.addEventListener('click', function(){
    if (thing){
        thing = false;
        sessionStorage.setItem('checked', "false");
        addUnder.innerHTML = "";
    }
    else{
        sessionStorage.setItem('checked', "true");
        thing = true;
        let template = `
        <label for="message" class="form-label fs-5">Extra comment(s) you want on the card</label>
        <div class="mb-4 form-floating">
        <textarea class="form-control brown" id="message" style="height: 120px"></textarea>
        </div>`;
        addUnder.innerHTML = template;
        message = document.getElementById('message');
        document.body.insertAdjacentElement(addUnder);
    }
        
})}

if (submit){
submit.addEventListener('click', function(event){
    event.preventDefault();
    birthdayChosen = sessionStorage.getItem('birthdayChosen');
    congratsChosen = sessionStorage.getItem('congratsChosen');
    otherChosen = sessionStorage.getItem('otherChosen');
    console.log(form1.value);
    console.log(form2.value);
    console.log(selectedCat.value);
    if (birthdayChosen === "true" || congratsChosen === "true"){
        console.log("THE CLAW AS CHOSEN US");
        if (form1.value !== "" && form2.value !== "" && selectedCat.value !== ""){
            console.log("SAVE THE CAT STUFF");
            sessionStorage.setItem('name', form1.value);
            sessionStorage.setItem('specific', form2.value);
            sessionStorage.setItem('theCat', selectedCat.value);
            if (thing && message && message.value !== ""){
                sessionStorage.setItem('message', message.value);
            }
        }
    }
    else if (otherChosen === "true"){
        if (addedInfo.value !== "" && selectedCat.value !== ""){
            sessionStorage.setItem('theAddedInfo', addedInfo.value);
            sessionStorage.setItem('theCat', selectedCat.value);
        }        
    }
})}

function chosenCat(num){
    num = Number(num);
    if (num === 1){
        return "Orange1.png";
    }
    else if (num === 2){
        return "Sim1.png";
    }
    else if (num === 3){
        return "Black1.png";
    }
    else if (num === 4){
        return "Pip1.png";
    }
    else if (num === 5){
        return "Bean1.png";
    }
    else if (num === 6){
        return "Tux1.png";
    }
}

function createImg(num){
    let img = document.createElement("img");
    img.src = chosenCat(num);
    img.style.maxWidth = "50%";
    img.style.height = "auto";
    cat.appendChild(img);
}