var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(mentor1,mentor2,mentor3,mentor4,mentor5){
    mentor1 = mentor1.toUpperCase();
    mentor2 = mentor2.toUpperCase();
    mentor3 = mentor3.toUpperCase();
    mentor4 = mentor4.toUpperCase();
    mentor5 = mentor5.toUpperCase();
    console.log('\n',`HELLO ${mentor1}`,'\n',`HELLO ${mentor2}`,'\n',`HELLO ${mentor3}`,'\n',`HELLO ${mentor4}`,'\n',`HELLO ${mentor5}`);
}

greeting(mentor1,mentor2,mentor3,mentor4,mentor5);