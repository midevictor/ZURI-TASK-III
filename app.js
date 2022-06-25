// let username = prompt("What is your name?");
// let height = prompt("How tall are you in cm?");
// let country = prompt("Where are you from?");
function displayDetails() {
    let username = prompt("What is your name?");
    document.write(`<h2>Hello ${username}</h2>`);
    while (validateUsername(username) === false) {
        username = prompt("Please, kindly enter a valid name?");
    }

    let height = prompt("How tall are you in cm?");
    document.write(`<p>You are ${height} cm tall.</p>`);
    while (validateHeigth(height) === false) {
        height = prompt("Please, Kindly enter a valid Height");
    }

    let country = prompt("Where are you from?");
    document.write(`<p>You are from ${country}</p>`);
    while (validateCountry(country) === false) {
        country = prompt("Where are you from?");
    }
}
displayDetails();
alert('Welcome to our Website');

// document.write(`<h2>Hello ${name}</h2>`);
// document.write(`<p>You are ${height} cm tall.</p>`);
// document.write(`<p>You are from ${country}</p>`);


function validateUsername(username) {

    if (username === null) {
        return 'Username is required';
    }
    if (username.length > 20) {
        return false;
    } else {
        return true;
    }

}

function validateHeigth(height) {
    if (height === null) {
        return false;
    } else {
        return true;
    }
}

function validateCountry(country) {
    if (country === null) {
        return false;
    } else {
        return true;
    }
}