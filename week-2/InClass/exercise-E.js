function feel(feelings){
    if(feelings==='happy'){
        return "Good job, you're doing great!"
    }else if(feelings==='sad'){
        return "Every cloud has a silver lining"
    }else if(typeof feelings === 'number'){
        return "Beep beep boop"
    }else{
        return "I'm sorry, I'm still learning about feelings!"
    }
}

console.log(feel('happy'))