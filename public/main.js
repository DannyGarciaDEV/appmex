function convert() {
  const dollars = document.getElementById("dollars").value;
  const rate = 19.89; // conversion rate from dollars to pesos
  const pesos = dollars * rate;
  document.getElementById("result").innerHTML = `$${dollars} is equivalent to ${pesos.toFixed(2)} pesos.`;
}


function getWord(){
  let wordM = document.querySelector('#word').value 
const url = `https://api.mymemory.translated.net/get?q=${wordM}&langpair=en|es`// tranlator wordM is gonna be in english to spanish
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       document.querySelector('#esp').innerText = ` Translation: ${data.responseData.translatedText}` // translate the word to spanish

    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

document.querySelector('#translate').addEventListener('click', getWord)





function voice() {
  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  recognition.onresult = function (event) {
    console.log(event);
    let recognizedText = event.results[0][0].transcript;
    document.getElementById("word").value = recognizedText;
    speak(recognizedText);
  };
  recognition.start();
}
// function voice() {
//   let recognition = new webkitSpeechRecognition();
//   recognition.lang = "es-ES";
//   recognition.onresult = function (event) {
//     console.log(event);
//     let recognizedText = event.results[0][0].transcript;
//     document.getElementById("word").value = recognizedText;
//     speak(recognizedText);
//   };
//   recognition.start();
// }

