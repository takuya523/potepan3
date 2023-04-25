let result = document.getElementById("result");

function number(num) {
  if(result.value === "0") {
    result.value = num.value.slice(1);
  }
  result.value = result.value + num.value;
 }

function zero(num) {
  if(result.value === "0") {
    return;
  } else {
    result.value = result.value + num.value;
  }
 }

function zeroZero(num) {
  if(result.value === "") {
    return;
  } else if(result.value ==="0") {
    return;
  } else {
    result.value = result.value + num.value;
  }
}

function edit(num) {
  if(result.value.slice(-1) === "/") {
    return;
  } else if(result.value.slice(-1) === "*") {
    return;
  } else if(result.value.slice(-1) === "-") {
    return;
  } else if(result.value.slice(-1) === ".") {
    return;
  } else if(result.value.slice(-1) === "+") {
    return;
  } else if(result.value === "") {
    return;
  } else {
    result.value = result.value + num.value;
  }
}


function update() {
  result.value = "";
}

 function calc() {
  if(result.value === "") {
    return;
  }
  result.value = new Function("return " + result.value)();
 }