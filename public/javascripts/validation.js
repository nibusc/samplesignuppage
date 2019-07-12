$(document).ready(function() {
    $("#signup-form").validate({
        rules:
            {
                username: {
                    required: true,
                    minlength: 4
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                }
            },
        messages:
            {
                username: {
                    required: "please1",
                    minlength: "min len4"
                },

                password: {
                    required: "please2",
                    minlength: "min leng"
                },

                confirm_password: {
                    required: "pass required",
                    minlength:
                        5,
                    equalTo:
                        "password dont match"
                }
            },

    });
});


