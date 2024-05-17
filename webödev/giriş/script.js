const form = document.querySelector("form");
const fullName = document.getElementById("isim");
const email = document.getElementById("email");
const phone = document.getElementById("telefon");
const subject = document.getElementById("konu");
const mess = document.getElementById("mesaj");

function sendEmail() {
    const bodyMessage = `İsim: ${isim.value} <br>Email: ${email.value} <br>
    Telefon: ${telefon.value} <br> Mesaj: ${mesaj.value} `;


    Email.send({
        SecureToken: "13675953-cb90-474d-9c3f-7acf8cf7cf02",
        To: 'mynameismmaa@gmail.com',
        From: "mynameismmaa@gmail.com",
        Subject: konu.value,
        Body: bodyMessage,
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Başarılı.",
                    text: "Mesaj Gönderme İşleminiz Başarı İle Gerçekleşti.",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt .email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Geçerli bir email adresi giriniz.";
        }
        else {
            errorTxtEmail.innerText = "Boşluk bırakılamaz! "
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error")
        && !phone.classList.contains("error") && !subject.classList.contains("error")
        && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});