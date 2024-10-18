function checkEmail() {
  const emailPattern = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$")
  const emailField = document.querySelector("#email")

  if (emailPattern.test(emailField.value)) {
    emailField.setCustomValidity("")
    emailField.style.background = "lightgreen"
  } else {
    emailField.setCustomValidity("Please enter a valid email address.")
    emailField.style.background = "pink"
  }
  emailField.reportValidity()
}

function checkPcode() {
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Swiss postcodes must have exactly 4 digits: e.g. CH-1950 or 1950."
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "French postcodes must have exactly 5 digits: e.g. F-75012 or 75012."
    ],
    de: [
      "^(D-)?\\d{5}$",
      "German postcodes must have exactly 5 digits: e.g. D-12345 or 12345."
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Dutch postcodes must have exactly 4 digits, followed by 2 letters except SA, SD and SS."
    ],
    uk: [
      "^[A-Z]{1,2}[0-9]{1,2}[A-Z]?(\\s*[0-9][A-Z]{1,2})?$",
      "UK postcodes must have between 6-8 digits and a space in the middle."
    ]
  }
  const country = document.querySelector("#country").value
  const constraint = new RegExp(constraints[country][0], "")
  const pcodeField = document.querySelector("#pcode")

  if (constraint.test(pcodeField.value)) {
    pcodeField.setCustomValidity("")
    pcodeField.style.background = "lightgreen"
  } else {
    pcodeField.setCustomValidity(constraints[country][1])
    pcodeField.style.background = "pink"
  }
  pcodeField.reportValidity()
}

function checkPword() {
  const pwordPattern = new RegExp("^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$")
  const pwordField = document.querySelector("#pword")
  
  if (pwordPattern.test(pwordField.value)) {
    pwordField.setCustomValidity("")
    pwordField.style.background = "lightgreen"
  } else {
    pwordField.setCustomValidity("Passwords must include 1 digit, 1 lowercase and 1 uppercase letter, 1 special symbol and be 8-16 characters long.")
    pwordField.style.background = "pink"
  }
  pwordField.reportValidity()
}

function confirmPword() {
  const pword = document.querySelector("#pword").value
  const confirmPwordField = document.querySelector("#confirmPword")

  if (pword === confirmPwordField.value) {
    confirmPwordField.setCustomValidity("")
    confirmPwordField.style.background = "lightgreen"
  } else {
    confirmPwordField.setCustomValidity("Passwords do not match.")
    confirmPwordField.style.background = "pink"
  }
  confirmPwordField.reportValidity()
}

window.onload = () => {
    document.querySelector("#email").onblur = checkEmail
  //   document.querySelector("#country").onchange = checkPcode
    document.querySelector("#pcode").onblur = checkPcode
    document.querySelector("#pword").onblur = checkPword
    document.querySelector("#confirmPword").onblur = confirmPword
  }

const submitBtn = document.querySelector("#button")

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (document.querySelector("#email").style.background === "lightgreen"
    && document.querySelector("#pcode").style.background === "lightgreen"
    && document.querySelector("#pword").style.background === "lightgreen"
    && document.querySelector("#confirmPword").style.background === "lightgreen") {
      alert("High Five!")
  } else {
    checkEmail()
    checkPcode()
    checkPcode()
    confirmPword()
  }
})
