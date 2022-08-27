function f1(){
    let input = document.getElementById("input").value;
    let check = document.getElementById("drop").value;
    if(check=="ctof"){
        let fah=(input * (9 / 5)) + 32;
        fah=fah.toFixed(4);
        result.value=(fah.toString()).concat(" ","°F");
    }
    else if(check=="ftoc"){
        let cel=((input-32)*(5/9))
        let c="celsius"
        cel=cel.toFixed(4);
        result.value=(cel.toString()).concat(" ","°C");
    }
    else{
        alert("Please select the type to convert")
    }
}