//logic code for the password the comparison START
function varify(inputtxt) { //based on the input of the user the function is carried out 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,15}$/;// this is setting the passw varaible to any lowercase letter from a-z
                                                       //uppercase form A - Z
                                                       //checking if it can be divided and checks for a length
if(inputtxt.value.match(passw)) {//this is checikng to see if the input selected by the user matches the contents of the passw varable  
alert('True');//true condition
}else{ 
alert('False');//false condition
}
}
//logic code for the password the comparison END 