window.addEventListener("load", function() {
    'use strict';

    function rand(min, max) {
        var rand = Math.random() * (max + 1 - min) + min;
        return Math.floor(rand);
    }
    
    function updatePassword() {
        var chars = "";
        var result = "";


        if (document.getElementById("lowerChars").checked) {
            chars += "abcdefghijklmnopqrstuvwxyz";
        }

        if (document.getElementById("upperChars").checked) {
            chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (document.getElementById("numericChars").checked) {
            chars += "0123456789";
        }

        if (document.getElementById("symbolChars").checked) {
            chars += "~`@#$%^&*()-_=+{}[]:;/\\|<>?,.\"'";
        }

        var num = parseInt(document.getElementById("range").value);

        if (chars.length) {
            for(var i=0; i<num; i++) {
                var key = rand(0, chars.length-1);
                result += chars[key];
            }
        }

        document.getElementById("range-value").innerHTML = num;
        document.getElementById("password").value = result;
    }

    function copyPassword() {
        var input = document.getElementById("password");
        input.select();
        input.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
    
    
    document.getElementById("range").addEventListener("input", updatePassword);
    document.getElementById("btn-generate").addEventListener("click", updatePassword);
    document.getElementById("btn-copy").addEventListener("click", copyPassword);

    document.getElementById("lowerChars").addEventListener("change", updatePassword);
    document.getElementById("upperChars").addEventListener("change", updatePassword);
    document.getElementById("numericChars").addEventListener("change", updatePassword);
    document.getElementById("symbolChars").addEventListener("change", updatePassword);
    
    updatePassword();
});