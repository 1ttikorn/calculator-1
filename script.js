function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter both height and weight.");
        return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

    displayResult(bmi);
}

function displayResult(bmi) {
    var resultDiv = document.getElementById("result");

    var resultText = "Your BMI is: " + bmi;

    if (bmi < 18.5) {
        resultText += " - Underweight";
    } else if (bmi < 25) {
        resultText += " - Normal weight";
    } else if (bmi < 30) {
        resultText += " - Overweight";
    } else {
        resultText += " - Obesity";
    }

    resultDiv.innerHTML = resultText;
}
