function validateForm() {
    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = "";

    if (name === "") {
        error += "Name is required.\n";
    }

    if (message === "") {
        error += "Message is required.\n";
    }

    if (error !== "") {
        alert(error);
        return false;
    }

    alert("Message sent successfully! (Demo)");
    return true;
}
