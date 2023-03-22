
// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}


function firstBotMessage() {
    let firstMessage = "<strong> Olá </strong> 🖐, Fala pra mim, quer ajuda com algo? to aqui pra isso! <br> <br> ah é, se quiser saber os comandos só digitar <strong> !comandos </strong>"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);

    
}

firstBotMessage();

// function secondMessage(){
//     let secondMessage = 
//     document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + secondMessage + '</span></p>';

//     let time= getTime();
//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);

// }


function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}


function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Atendimento favoritado, Obrigado!")
}


$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});