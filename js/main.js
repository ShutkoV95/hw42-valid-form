const doc = document;
const form1 = doc.forms.form1;
const formItems = form1.inputs.elements;
const phone = doc.querySelector('.phone__input');
const nameUser = doc.querySelector('.name__input');
const errorName = doc.querySelector('.errorInfo__name');
const errorPhone = doc.querySelector('.errorInfo__phone');



oninputAll();
oninputName();
oninputPhone();


form1.onsubmit = function(event) {
    event.preventDefault();
    availabInfo();
    availabName();
    availabPhone();
}



function availabInfo() {
    let submitState = true;
    for(let input of formItems) {
        const parentEl = input.parentElement;
        const value = input.value.trim();
        if (value == '') {
            submitState = false;
            parentEl.style.border = '1px solid red';
        } else {
            parentEl.style.border = '1px solid green';
        } 
    }
}


function availabName() {
    let submitState = true;

    const parentEl = nameUser.parentElement;
    const value = nameUser.value.trim();

    if (value.length < 3) {
        submitState = false;
        parentEl.style.border = '1px solid red';
        errorName.style.display = 'flex';
    } else {
        parentEl.style.border = '1px solid green';
        errorName.style.display = '';
    } 
}

function availabPhone() {
    let submitState = true;
    const parentEl = phone.parentElement;
    const value = Number(phone.value.trim());
    if (!value) {
        submitState = false;
        parentEl.style.border = '1px solid red';
        errorPhone.style.display = 'flex';
    } else {
        parentEl.style.border = '1px solid green';
        errorPhone.style.display = '';
    }

}


function oninputAll(){ 
    for(let input of formItems) {
        input.oninput = function() {
            let value = this.value.trim();
            if (value == '') {
                this.parentElement.style.border = '1px solid red';
                return;
            } 
            this.parentElement.style.border = '1px solid green';
        }
    }
}

function oninputName(){ 
    nameUser.oninput = function() {
        let valueName = this.value.trim();
        if (valueName.length < 3) {
            this.parentElement.style.border = '1px solid red';
            return;
        } 
        this.parentElement.style.border = '1px solid green';
    }
}


function oninputPhone(){
    phone.oninput = function() {
        let valuePhone = Number(this.value.trim());
        if (!valuePhone) {
            this.parentElement.style.border = '1px solid red';
            return;
        } 
        this.parentElement.style.border = '1px solid green';
    }
}
