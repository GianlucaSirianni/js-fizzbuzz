

// for (let i = 1; i<=100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
 
//      console.log ('FizzBuzz')
//     }
 
//     else if (i % 3 === 0){
//      console.log ('Fizz')
//     }
 
//     else if (i % 5 === 0 ) {
//      console.log ('Buzz')
//     }
 
//     else {
//      console.log (i)
//     }
//  }

let container = document.getElementById("fzbz");


for (let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        container.innerHTML += "<p>FizzBuzz</p>";
        console.log("FizzBuzz");
    } else if ( i % 3 == 0 ){
        container.innerHTML += "<p>Fizz</p>";
        console.log("Fizz");
    }  else if (i % 5 == 0 ){
        container.innerHTML += "<p>Buzz</p>";
        console.log("Buzz");
    } else {
        container.innerHTML += `<p>${i}</p>`;
        console.log(i);
    }
}