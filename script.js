
let units=prompt('enter units');
bill=0
if(units<=100){
    bill=units*1
}
else if(units>100 && units<=300){
    bill=100*1+(units-100)*1.5
}
else if(units>300){
    bill=100*1+200*1.5+(units-300)*2
}
else{
    bill="invalid"
}
console.log(bill)
//---------------------------

let weight=+prompt('enter your weight');
let destination=prompt('enter your Destination');
 let cost=0;
if(weight<=1){
     if(destination==='local'){
        cost=5;
    }
    else if(destination==='national'){
         cost=8;
    }
    else if(destination==='international'){
        cost=15;
    }
}
else if(weight>1 && weight<=5){
    if(destination==='local'){
        cost=10;
    }
    else if(destination==='national'){
        cost=15;
    }
    else if(destination==='international'){
        cost=30;
    }
}
else if(weight>5 && weight<=10){
    if(destination==='local'){
        cost=20;
    }
    else if(destination==="national"){
        cost=25;
    }
    else if(destination==="international"){
        cost=50;
    }
}
else if(weight>10){
    if(destination==='local'){
        cost=30
    }
    else if(destination==='national'){
        cost=35
    }
    else if(destination==='international'){
        cost=70
    }
}
else{
    console.log('in valid number')
}
console.log(cost)

//---------------------------------------------------
let income=prompt('enter amount')
if(income<=250000){
    document.write('No Tax')
}
else if(income>250000 && income<=500000){
    income-=250000
    document.write(`${income*0.05}`)
}
else if(income>500000 && income<=1000000){
    income-=500000
    document.write(`${income*0.20+12500}`)
}
else if(income>1000000 ){
    income-=1000000
    document.write(`${income*0.30+112500}`)
}
else{
    document.write('invalid Text')
}

