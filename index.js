document.getElementById("data-submission").addEventListener('submit', function(event){
    event.preventDefault()

 var name = document.getElementById("name").value
 var email = document.getElementById("email").value
 var mobile = document.getElementById("Mobile").value
 var address = document.getElementById("Address").value

 var submitdataContainer = document.getElementById('data-submission')
 submitdataContainer.innerHTML = `
 <h4>Name:  ${name}</h4>
 <h4>Email:  ${email}</h4>
 <h4>Mobile:  ${mobile}</h4>
 <h4>Address:  ${address}</h4>
 `
 
console.log("name:",name);
console.log("Email:",email);
console.log("mobile:", mobile);
console.log('address:', address)

alert("your data has been sumitted")
})