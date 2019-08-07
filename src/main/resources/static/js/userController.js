$('#signUpUserName,#signUpPassword').keyup(function () {
    var isOk = false;
    $('#signUpUserName,#signUpPassword').each(function () {
        if ($(this).val().length <= 5) {
            isOk = true;
        }
    });

    if (isOk) {
        $("#btnSingUp").attr("disabled", true);
    } else {
        $("#btnSingUp").attr("disabled", false);
    }
});
var table = $('#userTable').DataTable({
    sDom: "<'row'<'col-md-12'><'col-md-3'l><'col-md-6'B><'col-md-3'f>><'row'<'col-md-12't>><'row'<'col-md-6'i><'col-md-6'p>>",
    lengthMenu: [
        [5, 10, 15, -1],
        ['5 ', '10 ', '15 ', 'Tüm ']
    ],
    buttons: [
        {
            extend: 'excelHtml5',
            text: '<i class="fa fa-file-excel-o"></i>',
            titleAttr: 'Excel\'e aktar'
        },
        {
            extend: 'csvHtml5',
            text: '<i class="fa fa-file-text-o"></i>',
            titleAttr: 'CSV dosyasına aktar'
        },
        {
            extend: 'pdfHtml5',
            text: '<i class="fa fa-file-pdf-o"></i>',
            titleAttr: 'PDF dosyasına aktar'
        }
    ],
    "pagingType": "full_numbers",
    "language": {
        "sDecimal": ",",
        "sEmptyTable": "Tabloda herhangi bir veri mevcut değil",
        "sInfo": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
        "sInfoEmpty": "Kayıt yok",
        "sInfoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "_MENU_ Satır Göster",
        "sLoadingRecords": "Yükleniyor...",
        "sProcessing": "İşleniyor...",
        "sSearch": '',
        "searchPlaceholder": "Ara...",
        "sZeroRecords": "Eşleşen kayıt bulunamadı",
        "oPaginate": {
            "sFirst": "İlk",
            "sLast": "Son",
            "sNext": "Sonraki",
            "sPrevious": "Önceki"
        },
        "oAria": {
            "sSortAscending": ": artan sütun sıralamasını aktifleştir",
            "sSortDescending": ": azalan sütun sıralamasını aktifleştir"
        },
        "select": {
            "rows": {
                "_": "%d kayıt seçildi",
                "0": "",
                "1": "1 kayıt seçildi"
            }
        },
    },
    "sAjaxSource": "http://localhost:8024/webService-1.0/users/getallusers",
    "sAjaxDataProp": "",
    "columns": [
        {"data": "id"},
        {"data": "userName"},
        {"data": "password"},
        {"data": "role"},
        {
            "defaultContent": '<button class="btn btn-danger" data-toggle="modal" data-target="#modalDelete">Sil</button> &nbsp <button class="btn btn-info" data-toggle="modal" data-target="#modalEdit"> Düzenle </button>'
        }
    ], "order": [[0, 'asc']],


});
setInterval(function () {
    table.ajax.reload();
}, 30000);
$('#userTable tbody').on('click', '.btn-danger', function () {
    var data = table.row($(this).parents('tr')).data();
    uid = data.id;
    $("#lblDelUserName").html(data.userName + " kullanıcısını silmek istediğinizden emin misiniz?");
});
$('#userTable tbody').on('click', '.btn-info', function () {
    var data = table.row($(this).parents('tr')).data();
    $("#lblId").html(data.id);
    document.getElementById("editUserName").value = data.userName;
    document.getElementById("editPassword").value = data.password;
    document.getElementById("editRole").value = data.role;
});
var uid;
$("#btnSave").click(function () {
    var formData = {
        userName: $("#newUserName").val(),
        password: $("#newPassword").val(),
        role: $("#newRole").val()
    }
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8024/webService-1.0/users/saveuser",
        data: JSON.stringify(formData),
        dataType: 'json'
    }).done(function () {
            document.getElementById("modalNew").style.display = 'none';
            bootbox.alert({
                message: "<p class='text-success'>Kayıt başarılı!</p>",
                size: 'small',
                buttons: {
                    ok: {
                        label: 'Tamam',
                        className: 'btn-success'
                    }
                },
            });
        }
    ).fail(function () {
        document.getElementById("modalNew").style.display = 'none';
        bootbox.alert({
            message: "<p class='text-danger'>Kayıt başarısız!</p>",
            size: 'small',
            buttons: {
                ok: {
                    label: 'Tamam',
                    className: 'btn-danger'
                }
            },
        });
    })
});
$("#btnDelete").click(function () {
    uid = document.getElementById("lbldelId").innerHTML;
    $.ajax({
        type: "DELETE",
        contentType: "application/json",
        url: "http://localhost:8024/webService-1.0/users/" + uid,
    }).done(function () {

            document.getElementById("modalDelete").style.display = 'none';
            bootbox.alert({
                message: "<p class='text-success'>Kullanıcı silindi!</p>",
                size: 'small',
                buttons: {
                    ok: {
                        label: 'Tamam',
                        className: 'btn-success'
                    }
                },
            });
            $('#userTable').ajax.reload();
        }
    ).fail(function () {
        bootbox.alert({
            message: "<p class='text-danger'>Kullanıcı silme başarısız!</p>",
            size: 'small',
            buttons: {
                ok: {
                    label: 'Tamam',
                    className: 'btn-danger'
                }
            },
        });
    })
});
$("#allUsers,#btnUserDetails").click(function () {
    table.ajax.reload();
    document.getElementById("divUser").style.display = 'block';
    document.getElementById("divStb").style.display = 'none';
    document.getElementById("ph").style.display = 'none';
    document.getElementById("dashboardAdmin").style.display = 'none';
    $("#titleBar").html("<div class='col-lg-12'><h1  class='page-header'>Tüm Kullanıcı Verileri</h1></div>");
});
$("#btnUpdate").click(function () {

    var userId = document.getElementById("lblId").innerHTML;
    var formData = {
        userName: $("#editUserName").val(),
        password: $("#editPassword").val(),
        role: $("#editRole").val()
    }
    $.ajax({
        type: "PUT",
        contentType: "application/json",
        url: "http://localhost:8024/webService-1.0/users/updateuser/" + userId,
        data: JSON.stringify(formData),
        dataType: 'json'
    }).done(function () {

            document.getElementById("modalEdit").style.display = 'none';
            bootbox.alert({
                message: "<p class='text-success'>Kayıt başarılı!</p>",
                size: 'small',
                buttons: {
                    ok: {
                        label: 'Tamam',
                        className: 'btn-success'
                    }
                },
            });
            table.ajax.reload();
        }
    ).fail(function () {
        document.getElementById("modalEdit").style.display = 'none';
        bootbox.alert({
            message: "<p class='text-danger'>Kayıt başarısız!</p>",
            size: 'small',
            buttons: {
                ok: {
                    label: 'Tamam',
                    className: 'btn-danger'
                }
            },
        });
    })


})