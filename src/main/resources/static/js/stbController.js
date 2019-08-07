$(document).ready(function () {
    if (document.cookie == '') {
        document.getElementById("wrapper").style.display = 'none';
        bootbox.alert({
            message: "<p class='text-danger'>Lütfen Giriş Yapınız</p>",
            size: 'small',
            buttons: {
                ok: {
                    label: 'Tamam',
                    className: 'btn-danger'
                }
            },
        });
        window.setTimeout(function () {
            window.location = "http://localhost:8024/webService-1.0/login";
        }, 500)

    } else {
        var allcookies = document.cookie;
        cookiearray = allcookies.split(';');
        name = cookiearray[0].split('=')[0];
        value = cookiearray[0].split('=')[1];
        $("#un").html("<i class='fa fa-user fa-fw'></i>" + value + "<b class='caret'></b>")
    }
    userName = $.cookie('username');

    function getRole(un) {
        $.ajax({
            url: 'http://localhost:8024/webService-1.0/users/' + un,
            dataType: 'json',
            type: 'GET',
            cache: false,
            success: function (data) {

                userR = data.role;
                userP = data.password;
                userN = data.userName;
                userId = data.id;

                if (userR.includes('User')) {
                    document.getElementById("allUsers").style.display = 'none';
                    document.getElementById("newUser").style.display = 'none';
                    document.getElementById("userInfo").style.display = 'none';
                    document.getElementById("stbInfo").style.display = 'none';
                }
            }
        });
    }

    getRole(userName)

    $("#logOut").click(function () {
        deleteAllCookies()
        window.setTimeout(function () {
            window.location = "http://localhost:8024/webService-1.0/login";//localhost
            // window.location = "http://10.138.50.102:7001/webService-1.0/login";//http://10.138.50.102:7001
        }, 0);
    });
    $("#titleBar").html("<div class='col-lg-12'><h1  class='page-header'>Tüm STB Verileri</h1></div>");

    var table = $('#stbTable').DataTable({

        sDom: "<'row'<'col-md-12'><'col-md-3'l><'col-md-6'B><'col-md-3'f>><'row'<'col-md-12't>><'row'<'col-md-6'i><'col-md-6'p>>",
        lengthMenu: [
            [10, 25, 50, 75, -1],
            ['10', '25 ', '50 ', '75 ', 'Tüm ']
        ],
        buttons: [
            {
                extend: 'copyHtml5',
                text: '<i class="fa fa-files-o"></i>',
                titleAttr: 'Panoya Kopyala'
            },

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
            },
            {extend: 'colvis', text: 'Gösterilecek Sütunlar'}
        ],
        "pagingType": "full_numbers",
        "language": {
            buttons: {
                copyTitle: 'Panoya Kopyala',
                copySuccess: {
                    _: '%d satır kopyalandı',
                    1: '1 satır kopyalandı'
                }
            },
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
        "sAjaxSource": "http://localhost:8024/webService-1.0/logs/getalllogs",
        "sAjaxDataProp": "",
        "columns": [
            {"data": "executionId"},
            {"data": "senderSerialNo"},
            {"data": "successful"},
            {
                "data": "recordDate"
                , "render": function (data) {
                    var date = new Date(data);
                    var month = date.getMonth() + 1;
                    return date.getDate() + "/" + (month.length > 1 ? month : +month) + "/" + date.getFullYear();
                }
            }
        ], "order": [[1, 'asc']]

    });
    table.buttons().container()
        .appendTo('#stbTable_wrapper .col-md-6:eq(0)');

    $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var min = $('#min').datepicker("getDate");
            var max = $('#max').datepicker("getDate");
            var startDate = new Date(data[3]);
            if (min == null && max == null) {
                return true;
            }
            if (min == null && startDate <= max) {
                return true;
            }
            if (max == null && startDate >= min) {
                return true;
            }
            if (startDate <= max && startDate >= min) {
                return true;
            }
            return false;
        }
    );

    $("#min").datepicker({
        onSelect: function () {
            table.draw();
        }, changeMonth: true, changeYear: true,
        dateFormat: "dd/mm/yy",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        dayNamesMin: ["Pa", "Pt", "Sl", "Ça", "Pe", "Cu", "Ct"],
        firstDay: 1
    });
    $("#max").datepicker({
        onSelect: function () {
            table.draw();
        }, changeMonth: true, changeYear: true,
        dateFormat: "dd/mm/yy",
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        dayNamesMin: ["Pa", "Pt", "Sl", "Ça", "Pe", "Cu", "Ct"],
        firstDay: 1
    });
    $('#min, #max').change(function () {
        table.draw();
    });
    $("#profile").click(function () {
        document.getElementById("divStb").style.display = 'none';
        document.getElementById("divUser").style.display = 'none';
        document.getElementById("ph").style.display = 'none';
        document.getElementById("dashboardAdmin").style.display = 'block';
        $("#titleBar").html("<div class='col-lg-12'><h1  class='page-header'>Yönetim Paneli</h1></div>");
        document.getElementById("totalStb").innerHTML = $('#stbTable').DataTable().data().count();
        document.getElementById("totalUsers").innerHTML = $('#userTable').DataTable().data().count();
        document.getElementById("userInfoId").innerHTML = userId;
        document.getElementById("userInfoUserName").innerHTML = userN;


    })

    $("#allStb,#btnStbDetails").click(function () {
        document.getElementById("divStb").style.display = 'block';
        document.getElementById("ph").style.display = 'block';
        document.getElementById("divUser").style.display = 'none';
        document.getElementById("dashboardAdmin").style.display = 'none';
        $("#titleBar").html("<div class='col-lg-12'><h1  class='page-header'>Tüm STB Verileri</h1></div>");
    });
    var userR, userN, userP, userId;
    $('#userInfoEditBtn').click(function () {
        $("#lblId").html(userId);
        document.getElementById("editUserName").value = userN;
        document.getElementById("editPassword").value = userP;
        document.getElementById("editRole").value = userR;
        document.getElementById("editRole").disabled = true;
    });
});

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}





