function compute()
{
    
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    let SI = (p*r*y)/100;
    let total = +SI + +p;
    let fYear = +2022 + +y ;


    document.getElementById("results").innerHTML="If you deposit " + p + "$, at an interest rate of " + r + "% you'll receive " + total + "$ in the year " + fYear;

}

function rangeValueDisplay(){
    r = document.getElementById("rate").value;
    document.getElementById("rateDisplay").innerHTML= r + "%";
}   