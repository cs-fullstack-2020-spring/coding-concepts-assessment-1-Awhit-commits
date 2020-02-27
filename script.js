//Define Variables
let name="";
let email="";
let message="";
let contactInfo = [];

//Using a while loop to contiously prompt the user if they leave a field blank

while (name ==""||email==""||message=="") {
    name=prompt("Please enter a name:")
   

    //Creating conditions to check  if any of the 3 fields were left blank and starting the loop over if condiition was true
    if (name == "") {
        alert("Please type a name")
        continue;
    }
    

    email= prompt("Please enter an e-mail address:")
    if(email ==""){
        alert("Please type an email")
        continue;
    }
    

    message = prompt("Leave a message:")
    if (message=="") {
        alert("Please leave a message")
        continue;
        
    } 
    //Adding info into an array for later usage
    contactInfo.push(name);
    contactInfo.push(email);
    contactInfo.push(message);
}
//A small call to console to ensure that eveything was added into the array that was needed
//
//A confirm message stating if the user would like to leave their contact Info 
confirmed = confirm("Would you like to leave your information")

//Setting a condition if the user hits "Ok" or "Cancel"
if (confirmed ==true) {
    alert(`Thank you ${name}\nEmail:${email}\nMessage:${message} `)
   for (let index = 0; index < contactInfo.length; index++) {
       const element = contactInfo[index];
       console.log(element);
       
   }
}else{
    alert(`Maybe Next Time`);
}