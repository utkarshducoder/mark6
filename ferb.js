var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";
//outputDiv.innerText = " Utkarsh Gupta ";


//console.log(txtInput);

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something error has occured in the server! please try after some time");
}

function clickHandler(){
    /*console.log("clicked");
    console.log("input",txtInput.value);*/
    //outputDiv.innerText = "bleh bleh bleh bleh" +txtInput.value;
    var inputText = txtInput.value;    //txtInput.value value lega aur use store krwaega inputText me 
    
    fetch(getTranslationURL(inputText))    //fetch krega inputText ko
    .then(response => response.json())     //yha se response.json me se
    .then(json => {                           //aur json lega translated text me se value
        var translatedText = json.contents.translated;   
        outputDiv.innerText = translatedText; //yha pr output show hoga yaani ki var outputDiv me 
        })
    .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler)

