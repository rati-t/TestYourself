function calc(){
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var c = parseInt(document.querySelector("#YourAnswer").value);
    var op = document.querySelector("#operator").value;
    var guess;
    var client_result = "Wrong";

    if(op == "add"){
      guess = a + b;
      if(c == guess){
          client_result = "Right";
      }
    }
    else if (op == "min") {
      guess = a - b;
      if(c == guess){
          client_result = "Right";
      }
    }
    else if (op == "div") {
      guess = a /  b;
      if(c == guess){
          client_result = "Right";
      }
    }
    else if (op == "mul") {
      guess = a * b;
      if(c == guess){
          client_result = "Right";
      }
    }
    document.querySelector("#result").innerHTML = client_result;
    document.querySelector("#guess").innerHTML = guess;
}
