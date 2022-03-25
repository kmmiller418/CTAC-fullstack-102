
var candySize;
var candyName;

// candySize = 'small';
// candyName = 'Choco Chunks';

// candySize = 'large';
// candyName = 'Crackle Crisps';

// candySize = 'jumbo';
// candyName = 'All My Toffee';

// candySize = 'lArGe';
// candyName = 'Mint Chip Supreme';

// candySize = 'snack';
// candyName = 'Darkest Cocoa';

switch (candySize) {
    case 'small':
        console.log("This " + candyName + " costs $1.00");
        break;
    case 'medium':
        console.log("This " + candyName + " costs $1.75");
        break;
    case 'large':
        console.log("This " + candyName +  " costs $2.50");
        break;
    case 'jumbo':
        console.log("This " + candyName + " costs $4.75");
        break;
    default: 
        console.log("Associate please look up price and check if valid.");
}


//AS A FUNCTION

function candyStore(candyName, candySize){
    var price;
    switch (candySize) {
        case 'small':
            price = "$1.00";
            break;
        case 'medium':
            price = "$1.75";
            break;
        case 'large':
            price = "$2.50";
            break;
        case 'jumbo':
            price = "$4.75";
            break;
        default: 
            console.log("Associate please look up price and check if valid.");
            break;
    }
    if (price){
        console.log("This " + candyName + " costs " + price);
    }
}

candyStore('Choco Chunks', 'small');
candyStore('Crackle Crisps','large');
candyStore('All My Toffee', 'jumbo');
candyStore('Mint Chip Supreme', 'lArGe');
candyStore('Darkest Cocoa', 'snack');