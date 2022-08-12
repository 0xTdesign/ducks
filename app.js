
function getDuck() {
    let output = ""
     let ducks = prompt("How many ducks you going to Mint ");
    
     let duckMessage
    
    if (ducks < 5){
        duckMessage = "Little Duckling"
    }
    else if (ducks > 10) {
        duckMessage = "Duck Whale"
    }
    
    else {
        duckMessage = "Quack Quack "
    }
    
    for ( let i = 1;i <= ducks; i++) {
        output = output + "<img src='duck-01.png' alt='duck' class='duck'/>" + " " + i
        console.log(i)
    }
    
    return document.write(duckMessage + output);
    
     }
    