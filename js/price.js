$(function () {
    prefixes = {
        it: 39,
    };
    const country = localStorage.getItem('country');
    phonePrefix = prefixes[country] || prefixes.it

    if (country == 'IT') {
        it_selected = 'selected="selected"';
    } else {
        it_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="IT" ' + it_selected + '>Italy</option>');

    var change = 0,
        updatePrices = function (item) {
            change = 1;

            $(item.children).each(function () {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'IT';
            }

            if (sel == 'IT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EURO');
                $('.old_price_sig').html('EURO');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EURO');
                $('.new_price_sig').html('EURO');
                $('select').val('IT').trigger('change');
                initializeMask({ mask: "(+3\\9\\)999999[9999]", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select").change(function () {
        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
    $(document).ready(function () {
        $("[name=phone]").keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            } else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    });
});