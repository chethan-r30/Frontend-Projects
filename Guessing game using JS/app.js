const max = prompt("enter a max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit!");
        break;
    }
    else if(guess == random){
        console.log("you are right! congrats! the random number was",random);
        break;
    }
    else if(guess < random){
          guess = prompt("Hint : The guess was too small!! Please try again");
    }
    else{
        guess = prompt("Hint : The guess was large!! Please try again");
    }

}
