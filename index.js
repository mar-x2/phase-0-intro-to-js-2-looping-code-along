const names =["Guadalupe", "Ollie", "Aki"];

function writeCards(names, eventName) {
    const bnk = [];
    for (let i = 0; i < names.length; i++) {
        bnk.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return bnk;
}

writeCards(cards);



function countDown(bob){
 while (bob >= 0) {
     console.log(bob--);
};
};