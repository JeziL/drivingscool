$(document).ready(function () {
    var val = $('#id_applyType').val();
    if (val == 1) {
        $('.field-origLicType, .field-licChangeDate').show();
    } else {
        $('.field-origLicType, .field-licChangeDate').hide();
    }

    $('#id_applyType').change(function () {
        var val = this.value;
        if (val == 1) {
            $('.field-origLicType, .field-licChangeDate').slideDown('medium');
        } else {
            $('.field-origLicType, .field-licChangeDate').slideUp('medium');
        }
    });
});
