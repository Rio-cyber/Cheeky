const button= document.querySelector("button");
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();
recognition.onstart = function(){
    console.log("Speech Recognition started");
};

recognition.onresult = function(event){
    console.log(event);

    const spokenwords = event.results[0][0].transcript;
    console.log("Spoken words are",spokenwords);
    computerSpeech(spokenwords);
};


function computerSpeech(words) {
 const speech = new SpeechSynthesisUtterance();
 speech.lang="en-US";
 speech.pitch=0.9;
 speech.volume=1;
 speech.rate=1;
 determineWords(speech,words);
 window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){
    if(words.includes("How are you")){
        speech.text = "Incredibly good looking"
    }
    if(words.includes("Hey")){
        speech.text = "Hey"
    }
    if(words.includes("Who am i")){
        speech.text = "You are my master"
    }
    if(words.includes("I am heartbroken")){
        speech.text = "Then ask me for a date";
        
    }
    if(words.includes("Why?"))
        {
            speech.text = "Did you say wifee  oh well i dont mind";
        }
        if(words.includes("You are very arrogant"))
        {
            speech.text = "nope";
        }
    if(words.includes("Will you go on a date with me?")){
        speech.text = "Yeah ofcourse";
        window.open("scene.html");
    }
    if(words.includes("I am angry")){
        speech.text = "Do this now";
        window.open("relax.html");
    }
    if(words.includes("Are you deaf?")){
       speech.text="AAAAAAAAAAAAAAAAAAAAAAAAAAA nope"; 
    }
    if(words.includes("Why meditate?")){
        speech.text="Just do it"; 
     }
}
button.addEventListener("click",()=>{
    recognition.start();
});