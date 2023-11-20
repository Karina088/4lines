document.addEventListener("DOMContentLoaded", function() {
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbersValue = function(input) {
        return input.value.replace(/\D/g, "");
    }
    let onPhoneInput = function(e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            formattedInputValue = "",
            selectionStart = input.selectionStart;

        //    console.log('inputValue', InputNumbersValue);

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            console.log('Редактированиев в середине строки', e);
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            // Russian phone numbers
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            }
        } else {
            // Not Russian numbers
            // formattedInputValue = input.value = "+" + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    let onPhoneKeyDown = function(e) {
        let input = e.target1
        console.log(e.keyCode, e.target.value);
        if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {
            e.target.value = "";
        }
    }
    let onPhonePaste = function(e) {
        let pastedText = e.clipboardData || window.clipboardData,
            input = e.target,
            inputNumbersValue = getInputNumbersValue(input);

        if (pasted) {
            let pastedText = pasted.getData("Text");
            if (!/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
            }
        }
    }
    for (i = 0; i < phoneInputs.length; i++) {
        let input = phoneInputs[i];
        input.addEventListener("input", onPhoneInput);
        input.addEventListener("keydown", onPhoneKeyDown);
        input.addEventListener("paste", onPhonePaste);
    }
});

//  Validate Form

/* ===== FORMS ===== */
$(document).ready(function() {
    $('form button[type=submit]').on('click', function() {
        // if ( $(this).hasClass('disabled_btn') || $(this).hasClass('loading') ) { return false; }

        var send_btn = $(this);
        var form = $(this).closest('form');
        var is_errors = false;

        $(form).find('input, textarea, select').each(function() {
            if ($(this).attr('required') && !$(this).val()) {
                $(this).addClass('has__errors');
                is_errors = true;
            } else {
                $(this).removeClass('has__errors');
            }
        });

        if (is_errors) { return false; }

        // $(send_btn).addClass('loading');
    });
    $('input, textarea, select').on('input', function() {
        if ($(this).attr('required')) {
            if ($(this).val().trim()) { $(this).removeClass('has__errors'); } else { $(this).addClass('has__errors'); }
        }
    });
});