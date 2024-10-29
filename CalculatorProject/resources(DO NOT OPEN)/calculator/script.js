//cyfry
{
    document.querySelector('button[value="0"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "0";

            document.querySelector("#meantime-result").value = "0";
        }
        else if(helper != "="){

            document.querySelector("#calculator-screen").value += "0";

            document.querySelector("#meantime-result").value += "0";
        }
        else
        {
            wynik = null;

            document.querySelector("#calculator-screen").value = "0";

            document.querySelector("#meantime-result").value = "0";

            helper = "";
        };
    });


    document.querySelector('button[value="1"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "1";

            document.querySelector("#meantime-result").value = "1";
        }
        else if(helper != "="){
            document.querySelector("#calculator-screen").value += "1";

            document.querySelector("#meantime-result").value += "1";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "1";

            document.querySelector("#meantime-result").value = "1";

            helper = "";
        };
    });


    document.querySelector('button[value="2"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "2";

            document.querySelector("#meantime-result").value = "2";
        }
        else if(helper != "="){
            document.querySelector("#calculator-screen").value += "2";

            document.querySelector("#meantime-result").value += "2";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "2";

            document.querySelector("#meantime-result").value = "2";

            helper = "";
        };
    });


    document.querySelector('button[value="3"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "3";

            document.querySelector("#meantime-result").value = "3";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "3";

            document.querySelector("#meantime-result").value += "3";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "3";

            document.querySelector("#meantime-result").value = "3";

            helper = "";
        }
    });


    document.querySelector('button[value="4"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {
            document.querySelector("#calculator-screen").value = "4";

            document.querySelector("#meantime-result").value = "4";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "4";

            document.querySelector("#meantime-result").value += "4";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "4";

            document.querySelector("#meantime-result").value = "4";

            helper = "";
        };
    });


    document.querySelector('button[value="5"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "5";

            document.querySelector("#meantime-result").value = "5";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "5";

            document.querySelector("#meantime-result").value += "5";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "5";

            document.querySelector("#meantime-result").value = "5";

            helper = "";
        };
    });


    document.querySelector('button[value="6"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "6";

            document.querySelector("#meantime-result").value = "6";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "6";

            document.querySelector("#meantime-result").value += "6";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "6";

            document.querySelector("#meantime-result").value = "6";

            helper = "";
        };
    });


    document.querySelector('button[value="7"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "7";

            document.querySelector("#meantime-result").value = "7";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "7";

            document.querySelector("#meantime-result").value += "7";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "7";

            document.querySelector("#meantime-result").value = "7";

            helper = "";
        };
    });


    document.querySelector('button[value="8"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "8";

            document.querySelector("#meantime-result").value = "8";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "8";

            document.querySelector("#meantime-result").value += "8";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "8";

            document.querySelector("#meantime-result").value = "8";

            helper = "";
        };
    });


    document.querySelector('button[value="9"]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "0") {

            document.querySelector("#calculator-screen").value = "9";

            document.querySelector("#meantime-result").value = "9";
        }
        else if(helper != "=") {
            document.querySelector("#calculator-screen").value += "9";

            document.querySelector("#meantime-result").value += "9";
        }
        else
        {
            wynik = null;
            
            document.querySelector("#calculator-screen").value = "9";

            document.querySelector("#meantime-result").value = "9";

            helper = "";
        };
    });
}



//czyszczenie
{
    document.querySelector('#all-clear').addEventListener("click", function () {
        document.querySelector("#calculator-screen").value = "0";

        document.querySelector("#meantime-result").value = "0";

        wynik = null;

        helper = "";
    });
}



//zmiennoprzecinkowe
{
    document.querySelector('#decimal').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value.includes(".") || document.querySelector("#calculator-screen").value == "") {
            alert("Panie Macieju, niech Pan mnie nie załamuje...");
        }
        else {
            document.querySelector("#calculator-screen").value += ".";

            document.querySelector("#meantime-result").value += ".";
        }
    });
}



//operacje
{
    var wynik = null;
    var helper = "";

    //dodawanie
    {
        document.querySelector('button[value="+"]').addEventListener("click", function () {
            if (wynik == null) {
                wynik = parseFloat(document.querySelector("#calculator-screen").value);
                document.querySelector("#meantime-result").value += "+";
            };

            if (document.querySelector("#calculator-screen").value == "" ) {
                switch (helper) {
                    case "+":
                        alert("Podaj składnik dzbanie")
                        break;
                    case "-":
                        alert("Podaj odjemną/odjemnik dzbanie")
                        break;
                    case '*':
                        alert("Podaj czynnik dzbanie")
                        break;
                    case '/':
                        alert("Podaj dzielną/dzielnik dzbanie")
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (helper) {
                    case "+":
                        wynik += parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case "-":
                        wynik -= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '*':
                        wynik *= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '/':
                        wynik /= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    default:
                        break;
                }
                helper = "+";
                switch (helper) {
                    case "+":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "+";
                        break;
                    case "-":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "-";
                        break;
                    case '*':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "*";
                        break;
                    case '/':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "/";
                        break;
                    default:
                        break;
                }
                document.querySelector("#calculator-screen").value = null;
            }
            console.log(wynik);
        });
    }

    //odejmowanie
    {
        document.querySelector('button[value="-"]').addEventListener("click", function () {
            if (wynik == null) {
                wynik = parseFloat(document.querySelector("#calculator-screen").value);
                document.querySelector("#meantime-result").value += "-";
            };

            if (document.querySelector("#calculator-screen").value == "") {
                switch (helper) {
                    case "+":
                        alert("Podaj składnik dzbanie")
                        break;
                    case "-":
                        alert("Podaj odjemną/odjemnik dzbanie")
                        break;
                    case '*':
                        alert("Podaj czynnik dzbanie")
                        break;
                    case '/':
                        alert("Podaj dzielną/dzielnik dzbanie")
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (helper) {
                    case "+":
                        wynik += parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case "-":
                        wynik -= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '*':
                        wynik *= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '/':
                        wynik /= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    default:
                        break;
                }
                helper = "-";
                switch (helper) {
                    case "+":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "+";
                        break;
                    case "-":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "-";
                        break;
                    case '*':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "*";
                        break;
                    case '/':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "/";
                        break;
                    default:
                        break;
                }
                document.querySelector("#calculator-screen").value = null;
            }
            console.log(wynik);
        });
    }

    //mnożenie
    {
        document.querySelector('button[value="*"]').addEventListener("click", function () {
            if (wynik == null) {
                wynik = parseFloat(document.querySelector("#calculator-screen").value);
                document.querySelector("#meantime-result").value += "*";
            };

            if (document.querySelector("#calculator-screen").value == "") {
                switch (helper) {
                    case "+":
                        alert("Podaj składnik dzbanie")
                        break;
                    case "-":
                        alert("Podaj odjemną/odjemnik dzbanie")
                        break;
                    case '*':
                        alert("Podaj czynnik dzbanie")
                        break;
                    case '/':
                        alert("Podaj dzielną/dzielnik dzbanie")
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (helper) {
                    case "+":
                        wynik += parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case "-":
                        wynik -= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '*':
                        wynik *= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '/':
                        wynik /= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    default:
                        break;
                }
                helper = "*";
                switch (helper) {
                    case "+":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "+";
                        break;
                    case "-":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "-";
                        break;
                    case '*':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "*";
                        break;
                    case '/':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "/";
                        break;
                    default:
                        break;
                }
                document.querySelector("#calculator-screen").value = null;
            }
            console.log(wynik);
        });
    }

    //dzielenie
    {
        document.querySelector('button[value="/"]').addEventListener("click", function () {
            if (wynik == null) {
                wynik = parseFloat(document.querySelector("#calculator-screen").value);
                document.querySelector("#meantime-result").value += "/";
            };

            if (document.querySelector("#calculator-screen").value == "") {
                switch (helper) {
                    case "+":
                        alert("Podaj składnik dzbanie")
                        break;
                    case "-":
                        alert("Podaj odjemną/odjemnik dzbanie")
                        break;
                    case '*':
                        alert("Podaj czynnik dzbanie")
                        break;
                    case '/':
                        alert("Podaj dzielną/dzielnik dzbanie")
                        break;
                    default:
                        break;
                }
            }
            else {
                switch (helper) {
                    case "+":
                        wynik += parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case "-":
                        wynik -= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '*':
                        wynik *= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    case '/':
                        wynik /= parseFloat(document.querySelector("#calculator-screen").value);
                        break;
                    default:
                        break;
                }
                helper = "/";
                switch (helper) {
                    case "+":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "+";
                        break;
                    case "-":
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "-";
                        break;
                    case '*':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "*";
                        break;
                    case '/':
                        document.querySelector("#meantime-result").value = wynik.toFixed(2) + "/";
                        break;
                    default:
                        break;
                }
                document.querySelector("#calculator-screen").value = null;
            }
            console.log(wynik);
        });
    }
}


//wynik
{
    document.querySelector('button[value="="]').addEventListener("click", function () {
        if (document.querySelector("#calculator-screen").value == "") {
            switch (helper) {
                case "+":
                    alert("Podaj składnik dzbanie")
                    break;
                case "-":
                    alert("Podaj odjemną/odjemnik dzbanie")
                    break;
                case '*':
                    alert("Podaj czynnik dzbanie")
                    break;
                case '/':
                    alert("Podaj dzielną/dzielnik dzbanie")
                    break;
                default:
                    break;
            }
        }
        else {
            switch (helper) {
                case "+":
                    wynik += parseFloat(document.querySelector("#calculator-screen").value);
                    break;
                case "-":
                    wynik -= parseFloat(document.querySelector("#calculator-screen").value);
                    break;
                case '*':
                    wynik *= parseFloat(document.querySelector("#calculator-screen").value);
                    break;
                case '/':
                    wynik /= parseFloat(document.querySelector("#calculator-screen").value);
                    break;
                default:
                    break;
            }
            helper = "=";
            document.querySelector("#calculator-screen").value = wynik.toFixed(4);
            document.querySelector("#meantime-result").value += "=";
            document.querySelector("#meantime-result").value += wynik.toFixed(2);
            console.log("Helper: " + helper)
        }
    });
}
