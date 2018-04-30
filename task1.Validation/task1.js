var form = document.createElement("form");
form.setAttribute("name","login");
form.setAttribute("action","google.com");

var inputAge = document.createElement("input");
inputAge.setAttribute("type","text");
inputAge.setAttribute("name","age");
inputAge.placeholder = "age";
style(inputAge);

var inputUser = document.createElement("input");
inputUser.setAttribute("type","text");
inputUser.setAttribute("name","username");
inputUser.placeholder = "username";
style(inputUser);

var inputDate = document.createElement("input");
inputDate.setAttribute("type","text");
inputDate.setAttribute("name","date");
inputDate.placeholder = "date";
style(inputDate);

var inputSubmit = document.createElement("input");
inputSubmit.setAttribute("type","submit");
inputSubmit.setAttribute("value","Validate Me");
inputSubmit.style.background = "green";
style(inputSubmit);

function style(name){
name.style.margin = "5px";
name.style.borderRadius = "4px";
}

form.appendChild(inputAge);
form.appendChild(inputUser);
form.appendChild(inputDate);
form.appendChild(inputSubmit);

document.getElementsByTagName('body')[0].appendChild(form);


form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let inputAgeVal = inputAge.value;
    let inputUserVal = inputUser.value;
    let inputDateVal = inputDate.value;

    var regexNum = /^\d+$/;
    var regexUser = /^user_[a-z]*/;
    var regexDate = /^((0[1-9]|[12]\d|3[01])[/](0[1-9]|1[0-2])[/][12]\d{3})$/;

    var validationAge = (!regexNum.test(inputAgeVal));
    var validationUsername = (!regexUser.test(inputUserVal));
    var validationDate = (!regexDate.test(inputDateVal));

    if(validationAge || validationUsername || validationDate){
        if(validationAge){
        alert("Age is invalid");
        }
        if(validationUsername){
        alert("Username is invalid");
        }
        if(validationDate){
        alert("Date is invalid");
        }
    }else{
        alert("Data is right");
    }
    
});




