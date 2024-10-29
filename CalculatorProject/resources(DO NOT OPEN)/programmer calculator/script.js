//zamiana-systemow
{
    //prevent-default
    document.querySelector("#submit1").addEventListener("click", function (event) {
        event.preventDefault()
    });

    //konwersja
    {
        var number;

        document.querySelector("#submit1").addEventListener("click", function () {

            switch (document.querySelector("#options-from").value) {
                case "Binary":
                    switch (document.querySelector("#options-to").value) {
                        case "Binary":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 2);
                            document.querySelector("#result-1").value = number.toString(2);
                            break;
                        case "Four":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 2);
                            document.querySelector("#result-1").value = number.toString(4);
                            break;
                        case "Octal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 2);
                            document.querySelector("#result-1").value = number.toString(8);
                            break;
                        case "Decimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 2);
                            document.querySelector("#result-1").value = number
                            break;
                        case "Hexadecimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 2);
                            document.querySelector("#result-1").value = number.toString(16).toUpperCase();
                            break;
                    }
                    break;
                case "Four":
                    switch (document.querySelector("#options-to").value) {
                        case "Binary":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 4);
                            document.querySelector("#result-1").value = number.toString(2);
                            break;
                        case "Four":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 4);
                            document.querySelector("#result-1").value = number.toString(4);
                            break;
                        case "Octal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 4);
                            document.querySelector("#result-1").value = number.toString(8);
                            break;
                        case "Decimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 4);
                            document.querySelector("#result-1").value = number
                            break;
                        case "Hexadecimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 4);
                            document.querySelector("#result-1").value = number.toString(16).toUpperCase();
                            break;
                    }
                    break;
                case "Octal":
                    switch (document.querySelector("#options-to").value) {
                        case "Binary":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 8);
                            document.querySelector("#result-1").value = number.toString(2);
                            break;
                        case "Four":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 8);
                            document.querySelector("#result-1").value = number.toString(4);
                            break;
                        case "Octal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 8);
                            document.querySelector("#result-1").value = number.toString(8);
                            break;
                        case "Decimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 8);
                            document.querySelector("#result-1").value = number
                            break;
                        case "Hexadecimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 8);
                            document.querySelector("#result-1").value = number.toString(16).toUpperCase();
                            break;
                    }
                    break;
                case "Decimal":
                    switch (document.querySelector("#options-to").value) {
                        case "Binary":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 10);
                            document.querySelector("#result-1").value = number.toString(2);
                            break;
                        case "Four":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 10);
                            document.querySelector("#result-1").value = number.toString(4);
                            break;
                        case "Octal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 10);
                            document.querySelector("#result-1").value = number.toString(8);
                            break;
                        case "Decimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 10);
                            document.querySelector("#result-1").value = number;
                            break;
                        case "Hexadecimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 10);
                            document.querySelector("#result-1").value = number.toString(16).toUpperCase();
                            break;
                    }
                    break;
                case "Hexadecimal":
                    switch (document.querySelector("#options-to").value) {
                        case "Binary":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 16);
                            document.querySelector("#result-1").value = number.toString(2);
                            break;
                        case "Four":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 16);
                            document.querySelector("#result-1").value = number.toString(4);
                            break;
                        case "Octal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 16);
                            document.querySelector("#result-1").value = number.toString(8);
                            break;
                        case "Decimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 16);
                            document.querySelector("#result-1").value = number
                            break;
                        case "Hexadecimal":
                            number = parseInt(document.querySelector("#number-to-conv-1").value, 16);
                            document.querySelector("#result-1").value = number.toString(16).toUpperCase();
                            break;
                    }
                    break;
            };
        });
    }
}

//dzielenie z resztą
{
    document.querySelector("#submit2").addEventListener("click", function (event) {
        event.preventDefault()

        let dzielna = parseInt(document.querySelector("#number-to-div-1").value);
        let dzielnik = parseInt(document.querySelector("#number-to-div-2").value);
        let wynik = 0;

        if ((dzielna - dzielnik) < 0) {
            alert("Wynik: " + wynik + " Reszta: " + dzielnik);
            return;
        }

        while ((dzielna - dzielnik) >= 0) {
            wynik++;
            dzielna -= dzielnik;
        }

        alert("Wynik: " + wynik + " Reszta: " + dzielna);
    });
}

//ZM
{
    //prevent-default
    document.querySelector("#submit3").addEventListener("click", function (event) {
        event.preventDefault()
    });

    document.querySelector("#switch").addEventListener("click", function (event) {
        event.preventDefault()
    });

    //switch-mode
    document.querySelector("#switch").addEventListener("click", function () {
        let tmp = document.querySelector("#options-from-zm").value;

        console.log(tmp);

        document.querySelector("#options-from-zm").value = document.querySelector("#options-to-zm").value;

        document.querySelector("#options-to-zm").value = tmp;
    });

    //ZM-conversion
    {
        document.querySelector("#submit3").addEventListener("click", function () {
            var input_value = document.querySelector("#number-to-conv-2").value;

            if (document.querySelector("#options-from-zm").value == "ZM") {
                if (input_value[0] == 0) {
                    let converted = parseInt(input_value.substring(1), 2);

                    document.querySelector("#result-2").value = converted;
                }
                else {
                    let converted = parseInt(input_value.substring(1), 2);

                    converted = (-converted);

                    document.querySelector("#result-2").value = converted;
                }
            }
            else {
                if (parseInt(input_value) < 0) {
                    let converted = parseInt(input_value, 10);

                    converted = (-converted);

                    converted = converted.toString(2);

                    if (converted != "NaN") {
                        converted = "1".concat(converted);
                    }

                    document.querySelector("#result-2").value = converted;
                }
                else {
                    let converted = parseInt(input_value, 10);

                    converted = converted.toString(2);

                    console.log(converted);

                    if (converted != "NaN") {
                        converted = "0".concat(converted);
                    }

                    document.querySelector("#result-2").value = converted;
                }
            }
        });
    }
}

//U1
{
    //prevent-default
    document.querySelector("#submit4").addEventListener("click", function (event) {
        event.preventDefault()
    });

    document.querySelector("#switch2").addEventListener("click", function (event) {
        event.preventDefault()
    });

    //switch-button
    document.querySelector("#switch2").addEventListener("click", function () {
        let tmp = document.querySelector("#options-from-u1").value;

        console.log(tmp);

        document.querySelector("#options-from-u1").value = document.querySelector("#options-to-u1").value;

        document.querySelector("#options-to-u1").value = tmp;
    });

    //conversion
    {
        document.querySelector("#submit4").addEventListener("click", function () {
            var input_value = document.querySelector("#number-to-conv-3").value;

            if (document.querySelector("#options-from-u1").value == "U1") {
                if (input_value[0] == 0) {
                    let converted = parseInt(input_value.substring(1), 2);

                    document.querySelector("#result-3").value = converted;
                }
                else {
                    let converted = parseInt(input_value.substring(1), 2);

                    converted = (-converted);

                    document.querySelector("#result-3").value = converted;
                }
            }
            else {
                if (parseInt(input_value) < 0) {
                    let converted = parseInt(input_value, 10);

                    converted = (-converted);

                    converted = converted.toString(2);

                    if (converted != "NaN") {
                        for (let i = converted.length; i < 7; i++) {
                            converted = "0".concat(converted);
                        }

                        converted = "1".concat(converted);
                    }

                    document.querySelector("#result-3").value = converted;
                }
                else {
                    let converted = parseInt(input_value, 10);

                    converted = converted.toString(2);

                    if (converted != "NaN") {
                        for (let i = converted.length; i < 7; i++) {
                            converted = "0".concat(converted);
                        }

                        converted = "0".concat(converted);
                    }

                    document.querySelector("#result-3").value = converted;
                }
            }

        });
    }
}

//U2
{
    //prevent-default
    document.querySelector("#submit5").addEventListener("click", function (event) {
        event.preventDefault()
    });

    document.querySelector("#switch3").addEventListener("click", function (event) {
        event.preventDefault()
    });

    //switch-button
    document.querySelector("#switch3").addEventListener("click", function () {
        let tmp = document.querySelector("#options-from-u2").value;

        console.log(tmp);

        document.querySelector("#options-from-u2").value = document.querySelector("#options-to-u2").value;

        document.querySelector("#options-to-u2").value = tmp;
    });

    //conversion
    {
        document.querySelector("#submit5").addEventListener("click", function () {
            var input_value = document.querySelector("#number-to-conv-4").value;

            if (document.querySelector("#options-from-u2").value == "U2") {
                if (input_value[0] == 0) {
                    let converted = parseInt(input_value, 2);

                    if (converted > 127) {
                        alert("Zbyt duża liczba na 8 bitowy system U2.");
                        return;
                    }

                    for (let i = input_value.length; i < 8; i++) {
                        input_value = "0".concat(input_value);
                    }

                    document.querySelector("#number-to-conv-4").value = input_value;
                    document.querySelector("#result-4").value = converted;
                }
                else {
                    let converted = "";

                    if (parseInt(input_value, 2) > 255) {
                        alert("Zbyt mała liczba na 8 bitowy system U2.");
                        return;
                    }

                    for (let i = input_value.length; i < 8; i++) {
                        input_value = "1".concat(input_value);
                    }
                    document.querySelector("#number-to-conv-4").value = input_value;

                    input_value = parseInt(input_value, 2);
                    input_value -= 1;
                    input_value = input_value.toString(2);


                    for (let i = 0; i < input_value.length; i++) {
                        if (input_value[i] == "1") {
                            converted += "0";
                        }
                        else {
                            converted += "1";
                        }
                    }

                    if (parseInt(converted, 2) == 0) {
                        converted = "1".concat(converted);
                    }

                    converted = parseInt(converted, 2);
                    document.querySelector("#result-4").value = (-converted);
                }
            }
            else {
                if (parseInt(input_value) < 0) {
                    let converted = "";

                    input_value = parseInt(input_value.substring(1), 10);
                    input_value = input_value.toString(2);
                    console.log(input_value);

                    if (parseInt(input_value, 2) > 128) {
                        alert("Zbyt mała liczba na 8 bitowy system U2.")
                    }

                    for (let i = 0; i < input_value.length; i++) {
                        if (input_value[i] == "1") {
                            converted += "0";
                        }
                        else {
                            converted += "1";
                        }
                    }

                    for (let i = converted.length; i < 8; i++) {
                        converted = "1".concat(converted);
                    }

                    converted = parseInt(converted, 2) + 1;
                    converted = converted.toString(2);
                    console.log(converted);

                    document.querySelector("#result-4").value = converted;
                }
                else {
                    let converted = "";
                    converted = parseInt(input_value, 10);

                    if (converted > 127) {
                        alert("Zbyt duża liczba na 8 bitowy system U2.");
                        return;
                    }

                    converted = converted.toString(2);

                    for (let i = converted.length; i < 8; i++) {
                        converted = "0".concat(converted);
                    }

                    document.querySelector("#result-4").value = converted;
                }
            }
        });
    }
}

