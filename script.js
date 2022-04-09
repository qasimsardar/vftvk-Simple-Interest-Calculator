function compute()
{
    
    p = document.getElementById("principal").value;
    if (p == ""){
        alert("Don't leave the 'Amount' field empty!")
    }
    else if(p <= '0'){
        alert("Enter a value greater than 0")
    }
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