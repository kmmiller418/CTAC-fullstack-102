var weekend;
var holiday;
var time;

// time = 17
// weekend = false;
// holiday = false;

if (weekend || holiday) {
    console.log("The store is closed");
} else {
    if (time < 18 && time > 8) {
        console.log("The store is open for business.");
    } else {
        console.log("The store is closed.");
    }
}

//AS FUNCTION

function storeOpen(weekend, holiday, time){
    if (weekend || holiday) {
        console.log("The store is closed");
    } else {
        if (time < 18 && time > 8) {
            console.log("The store is open for business.");
        } else {
            console.log("The store is closed.");
        }    }
}

// storeOpen(true,false,13);
// storeOpen(false,true,16);
// storeOpen(false,false,10);
// storeOpen(false,false,17);
// storeOpen(false,false,21);
