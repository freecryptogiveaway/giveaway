$(document).ready(function() {
    $('#FromLogin').on('submit', function(e) {
        e.preventDefault();
        $('#submitSignup').attr('disabled', '');
        $("#output-login").html('<span class="text-info"><i class="fa fa-spinner fa-spin"></i> Checking info.. Please wait..</span>');
        $(this).ajaxSubmit({
            target: '#output-login',
            success: afterSuccess1
        })
    })
});
$(document).ready(function() {
    $('#ContactForm').on('submit', function(e) {
        e.preventDefault();
        $('#submitContact').attr('disabled', '');
        $("#output").html('<div class="alert alert-info" role="alert"><i class="fa fa-spinner fa-spin"></i> Sending email.. Please wait..</div>');
        $(this).ajaxSubmit({
            target: '#output',
            success: afterSuccess2
        })
    })
});
function afterSuccess1() {
    $('#submitSignup').removeAttr('disabled')
}
function afterSuccess2() {
    $('#submitContact').removeAttr('disabled')
}