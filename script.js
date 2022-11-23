console.log("page loaded...");

var requestSpan = document.querySelector("#request");

var connectionSpan = document.querySelector("#connection");

var user = document.querySelector("#user");



function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit(){
    user.innerText = "Sarah Marshall";
}