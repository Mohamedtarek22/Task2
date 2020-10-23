var buttons = document.getElementsByTagName("button");
var result = document.getElementById("result");

for (var thisButton of buttons) {
	thisButton.addEventListener("click", function () {
		if (this.innerHTML == "=") result.value = eval(result.value);
		else if (this.innerHTML == "C") result.value = "";
		else result.value += this.innerHTML;
	});
}
