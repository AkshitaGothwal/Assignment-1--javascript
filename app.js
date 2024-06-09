let array1 = ["The cat", "A dog", "The bird", "A fish", "The monkey"];
let array2 = ["jumps", "runs", "flies", "swims", "climbs"];
let array3 = ["quickly", "slowly", "gracefully", "awkwardly", "silently"];
let array4 = ["a tree", "a house", "a car", "a mountain", "a river"];
let array5 = ["in the park", "on the street", "at the zoo", "in the forest", "by the lake"];

var arrayofarrays = [array1, array2, array3, array4, array5];

var synth = window.speechSynthesis;


var speakButton = document.querySelector('button');

let string1; let string2; let string3; let string4; let string5; let storystring="";

// Functions
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function speakstory(string) {



    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

document.getElementById("btn1").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array1.length);
    string1 = array1[randomindex];
    document.getElementById("area1").value = string1;
    console.log(string1);
});

document.getElementById("btn2").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array2.length);
    string2 = array2[randomindex];
    document.getElementById("area2").value = string2;
    console.log(string2);
});

document.getElementById("btn3").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array3.length);
    string3 = array3[randomindex];
    document.getElementById("area3").value = string3;
    console.log(string3);
});

document.getElementById("btn4").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array4.length);
    string4 = array4[randomindex];
    document.getElementById("area4").value = string4;
    console.log(string4);
});

document.getElementById("btn5").addEventListener("click", function() {
    let randomindex = Math.floor(Math.random() * array5.length);
    string5 = array5[randomindex];
    document.getElementById("area5").value = string5;
    console.log(string5);
});

// Event Listeners
document.getElementById("btn6").addEventListener("click", function() {
    addedstring = combine(string1, string2, string3, string4, string5);
    console.log(addedstring);
    document.getElementById("area").value = addedstring;
    speakNow(addedstring);
}
);

// Function which will add each 5 different strings
function combine(string1, string2, string3, string4, string5) {
    console.log("combine " + string1);
    let newstring = string1 + " " + string2 + " " + string3 + " " + string4 + " " + string5;
    console.log(newstring);
    return newstring;
}


// Event listener which will generate the entire story
document.getElementById("btn7").addEventListener("click", function() {
    storystring = "";
    for (let j = 1; j <= 20; j++) {
        for (let i = 0; i < arrayofarrays.length; i++) {
            let randomindex = Math.floor(Math.random() * arrayofarrays[i].length);
            storystring += arrayofarrays[i][randomindex] + " ";
        }
        if (storystring.endsWith(" ")) {
            storystring = storystring.trim() + ". ";
        }
    }
    document.getElementById("storyarea").value = storystring;
    console.log(storystring);
});

document.getElementById("btn8").addEventListener("click", function()
{
	speakstory(storystring);
});

document.getElementById("btn9").addEventListener("click", function()
{
	synth.cancel();
}
);

  