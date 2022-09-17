$(function () {
  $("#spinner").hide();
  $("#save-btn").hide();

  $("form").on("submit", (e) => {
    e.preventDefault();
    let url = $("#url").val();
    let size = $("#size").val();

    // to clear ui
    $("#qrcode").html("");

    if (url === "") {
      alert("Please enter a valid URL.");
    } else {
      $("#spinner").show();
      setTimeout(() => {
        $("#spinner").hide();
        generateQRCode(url, size);
        setTimeout(() => {
          $("#qrcode").addClass("card shadow");
          let qrlink = $("#qrcode img").attr("src");
          createBtn(qrlink);
        }, 100);
      }, 1000);
    }
  });

  //   to create download button
  const createBtn = (src) => {
    let a = $("<div></div>").html(
      `<a id="save-btn" class="btn btn-success btn-sm w-100" href="${src}" download>Download <i class="fa-solid fa-download"></i>
        </a>`
    );
    a.addClass("text-center");
    $("#qrcode").append(a);
  };

  // to Generate QR code
  const generateQRCode = (url, size) => {
    const qrcode = new QRCode("qrcode", {
      text: url,
      width: size,
      height: size,
    });
  };
});
