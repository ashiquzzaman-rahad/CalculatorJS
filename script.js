const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "ERROR";
    }
}

function clearDisplay(){
    display.value = "";
}

function deleteNum(){
    valueNew = display.value.slice(0,-1);
    display.value = valueNew;
}
