
const listmail = ['frank@gmail.com, john@gmail.com, kevin@gmail.com, jimmy@gmail.com, tim@gmail.com, tom@gmail.com'];

let email prompt('scrivi la tua email');

console.log(email);

if (listmail.includes(email))
{
    console.log (puoi accedere);
}

else {
    console.log(non puoi accedere);
}

const email = document.getElementById("email");
