function txtphone_onkeypress() {
    console.log(event.key)
    if (event.key == "Enter") {
        console.log(event.target.value.length);
        if (event.target.value.length >= 8) {
            send();
        }
    }
}

function send() {
    let prefix = document.getElementById("txt-prefix").value;
    let tel = document.getElementById("txt-phone").value;
    if (tel.startsWith("0")) {
        tel = tel.slice(1);
    }
    window.open(`https://web.whatsapp.com/send?phone=${prefix}${tel}`, "_blank");
}
