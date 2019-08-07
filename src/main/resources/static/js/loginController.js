$(document).ready(function () {
    $('#loginPassword,#loginUserName').keyup(function (e) {
        var isOk = false;
        $('#loginPassword,#loginUserName').each(function () {
            console.log($(this).val().length)
            if ($(this).val().length < 5) {
                isOk = true;
            }
        });

        if (isOk) {
            $("#btnLogin").attr("disabled", true);
        } else {
            $("#btnLogin").attr("disabled", false);
        }
        if (e.keyCode === 13) {
            $("#btnLogin").click();

        }
    });

    $("#btnLogin").click(function (event) {
        event.preventDefault();
        if ($('#rememberMe').val()) {
            rememberMe();
        }
        getLogin()
    });

    fillByMemory()

});
function rememberMe() {
    $.cookie('username', $('#loginUserName').val());
    $.cookie('password', $('#loginPassword').val());
}

function fillByMemory() {
    if (!!$.cookie('username'))
        $('#loginUserName').val($.cookie('username'));

}
$("#btnSingUp").click(function (event) {
    event.preventDefault();
    saveUser();
    $("#signUpDiv").dialog('close');
    $("#notification").html("<p style='background-color:#47b028; color:white; padding:20px 20px 20px 20px'>" +
        "Yeni Kullanıcı Kaydı Başarılı! <br>" +
        "</p>");
    document.getElementById("notification").style.display = 'none';
});

function getLogin() {

    var dt = {
        uname: $("#loginUserName").val(),
        pw: $("#loginPassword").val()
    }
    $.ajax({
        url: "http://localhost:8024/webService-1.0/users/login/" + dt.uname + "&" + dt.pw,//localHost:8024
        // url: "http://10.138.50.102:7001/webService-1.0/users/login/" + dt.uname + "&" + dt.pw,//http://10.138.50.102:7001
        type: "GET",
        crossDomain: true,
        async: false,
        dataType: "text",
        success: function (data) {
            if (data.includes('Admin') || data.includes('User')) {
                $("#notification").html("<div class='alert alert-success'>Giriş Başarılı</div>")
                window.setTimeout(function () {
                    window.location = "http://localhost:8024/webService-1.0/";//localHost:8024
                    // window.location = "http://10.138.50.102:7001/webService-1.0/";//http://10.138.50.102:7001
                }, 300);
            } else {
                $("#notification").html("<p style='background-color:#b01700; color:white; padding:20px 20px 20px 20px'>" +
                    "Giriş Başarısız! <br>" +
                    "</p>");
            }
        }
    });
}





