let Rudy = {
    id: 'valentine-1',
    name: 'Rudy',
    message: 'It\'d be rude not to say happy Valentine\'s day!'
};

let Pomengranate = {
    id: 'valentine-2',
    name: 'Pomegranate',
    message: 'You da POM! Happy Valentine\'s Day!'
};

let Schmitty = {
    id: 'valentine-3',
    name: 'Schmitty',
    message: 'We\'re schmitten with you, our Valentine!'
};

let arrayOfValentineObjects = [Rudy, Pomengranate, Schmitty];

function setHTMLValentinesName(valentine) {
    // Put logic to set HTML name here
    let htmlName = document.getElementById(`${valentine.id}--name`);
    console.log(`${valentine.id}--name`);
    htmlName.innerHTML = valentine.name;
}

function setHTMLValentinesMessage(valentine) {
    // Put logic to set HTML message here
    let htmlMessage = document.getElementById(`${valentine.id}--message`);
    console.log(htmlMessage);
    htmlMessage.innerHTML = valentine.message;
}

function processValentines() {
    for (let i = 0; i < arrayOfValentineObjects.length; i++) {
        setHTMLValentinesName(arrayOfValentineObjects[i]);
        setHTMLValentinesMessage(arrayOfValentineObjects[i]);
    }
}

processValentines();