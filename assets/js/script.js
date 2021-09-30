let currentTime = $(moment().hour())[0];
let blockHolder = $("#block-holder");
let timeText = $("#currentDay");
let textArea = $(".textarea");

let textArea9 = $("#9");
let textArea10 = $("#10");
let textArea11 = $("#11");
let textArea12 = $("#12");
let textArea13 = $("#13");
let textArea14 = $("#14");
let textArea15 = $("#15");
let textArea16 = $("#16");
let textArea17 = $("#17");

let saveButton9 = $(".saveBtn9");
let saveButton10 = $(".saveBtn10");
let saveButton11 = $(".saveBtn11");
let saveButton12 = $(".saveBtn12");
let saveButton13 = $(".saveBtn13");
let saveButton14 = $(".saveBtn14");
let saveButton15 = $(".saveBtn15");
let saveButton16 = $(".saveBtn16");
let saveButton17 = $(".saveBtn17");

// blockHolder.on("click", function saveLocal(e) {
//     let button = $(e.target)
//     console.log(button.closest('textarea').val())
// });

timeRender();
colorTextBoxes();

saveButton9.on('click',localSave9)
saveButton10.on('click',localSave10)
saveButton11.on('click',localSave11)
saveButton12.on('click',localSave12)
saveButton13.on('click',localSave13)
saveButton14.on('click',localSave14)
saveButton15.on('click',localSave15)
saveButton16.on('click',localSave16)
saveButton17.on('click',localSave17)

textArea9.text(localStorage.getItem('userReminder9'))
textArea10.text(localStorage.getItem('userReminder10'))
textArea11.text(localStorage.getItem('userReminder11'))
textArea12.text(localStorage.getItem('userReminder12'))
textArea13.text(localStorage.getItem('userReminder13'))
textArea14.text(localStorage.getItem('userReminder14'))
textArea15.text(localStorage.getItem('userReminder15'))
textArea16.text(localStorage.getItem('userReminder16'))
textArea17.text(localStorage.getItem('userReminder17'))

function timeRender() {
    let timeTick = setInterval(function () {
        timeText.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
}

function colorTextBoxes() {
    for (let i = 9; i < textArea.length + 9; i++) {
        if ($("#" + i).attr("id") < currentTime) {
            $("#" + i).addClass("past");
        } else if ($("#" + i).attr("id") == currentTime) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
    }
}

function localSave9() {
    localStorage.setItem("userReminder9", textArea9.val());
}
function localSave10() {
    localStorage.setItem("userReminder10", textArea10.val());
}
function localSave11() {
    localStorage.setItem("userReminder11", textArea11.val());
}
function localSave12() {
    localStorage.setItem("userReminder12", textArea12.val());
}
function localSave13() {
    localStorage.setItem("userReminder13", textArea13.val());
}
function localSave14() {
    localStorage.setItem("userReminder14", textArea14.val());
}
function localSave15() {
    localStorage.setItem("userReminder15", textArea15.val());
}
function localSave16() {
    localStorage.setItem("userReminder16", textArea16.val());
}
function localSave17() {
    localStorage.setItem("userReminder17", textArea17.val());
}

// localStorage.setItem(key, value);
// localStorage.getItem(key)
