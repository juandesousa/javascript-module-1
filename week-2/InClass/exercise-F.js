function checkUser(userName, userType) {

    const user = userName.trim().charAt(0);
    const capital = user.toUpperCase();
    const large = userName.trim().length;
    
    console.log(user)
    if(user === ' '){
        return "Username invalid"
    }

    if(userType == 'admin' || userType == 'manager'){
        return "Username valid";
    }

    if(user == capital && large >= 5 && large <= 10){
        return "Username valid";
    }else{
        return "Username invalid";
    }
}

console.log(checkUser(' Juan','manager'));