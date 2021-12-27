const email = document.getElementById('email');
const firstname = document.getElementById('name');
const surname = document.getElementById('surname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const province = document.getElementById('province');
const code = document.getElementById('postal-code');
const number = document.getElementById('number');
var button = document.getElementById("submit");
var flag = true;

button.onclick = function() {
    checkInputs();

    if (flag === false) {
        return false;
    }
    else {
        return true;
    }
}

function checkInputs() {
    //Retrieve input values
    var emailValue = email.value.trim();
    var firstnameValue = firstname.value.trim();
    var surnameValue = surname.value.trim();
    var addressValue = address.value.trim();
    var cityValue = city.value.trim();
    var provinceValue = province.value;
    var codeValue = code.value.trim();
    var numberValue = number.value.trim();

    //Validate Email
	if(emailValue === '') 
    {
		setErrorFor(email, 'Please enter an email address');
        flag = false;
	} 
    else if (!isEmail(emailValue)) 
    {
		setErrorFor(email, 'Not a valid email address');
        flag = false;
	} 
    else 
    {
		setSuccessFor(email);
        flag = true;
	}

    //Validate name
    if (firstnameValue === '') 
    {
        setErrorFor(firstname, 'Please enter your first name');
        flag = false;
    } 
    else if (/[^a-z]/i.test(firstnameValue)) 
    {
        setErrorFor(firstname, 'Your name may only contain letters');
        flag = false;
    } 
    else 
    {
        setSuccessFor(firstname);
        flag = true;
    }

    //Validate surname
    if (surnameValue === '') 
    {
        setErrorFor(surname, 'Please enter your surname');
        flag = false;
    } 
    else if (/[^a-z]/i.test(surnameValue)) 
    {
        setErrorFor(surname, 'Your surname may only contain letters');
        flag = false;
    } 
    else 
    {
        setSuccessFor(surname);
        flag = true;
    }

    //Validate address
    if (addressValue === '')
    {
        setErrorFor(address, 'Please enter an address');
        flag = false;
    }
    else    
    {
        setSuccessFor(address);
        flag = true;
    }

    //Validate city
    if (cityValue === '')
    {
        setErrorFor(city, 'Please enter a city');
        flag = false;
    }
    else if (/[^a-z]/i.test(cityValue))
    {
        setErrorFor(city, 'Invalid city');
        flag = false;
    }
    else
    {
        setSuccessFor(city);
        flag = true;
    }

    //Validate Province
    if (provinceValue == '')
    {
        setErrorFor(province, 'Please select a Province');
        flag = false;
    }
    else
    {
        setSuccessFor(province);
        flag = true;
    }

    //Validate Postal Code
    if (codeValue === '')
    {
        setErrorFor(code, 'Please enter a postal code');
        flag = false;
    }
    else if (!/[^a-z]/i.test(codeValue))
    {
        setErrorFor(code, 'Please enter a valid code');
        flag = false;
    }
    else
    {
        setSuccessFor(code);
        flag = true;
    }

    //Validate Number
    if (numberValue === '')
    {
        setErrorFor(number, 'Please enter your number');
        flag = false;
    }
    else if (!/[^a-z]/i.test(numberValue) || numberValue.length != 10)
    {
        setErrorFor(number, 'Please enter a valid number');
        flag = false;
    }
    else
    {
        setSuccessFor(number);
        flag = true;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


