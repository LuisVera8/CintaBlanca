// {
//     var elem = document.getElementById("reporte");
//     if (elem.value=="reporte") elem.value = "Open Curtain";
//     else elem.value = "reporte";
// }

// $(".form-signin").click(function () {
//     $(".home").hide();
// });

// $(".form-signin").click(function () {
//     $(".cards").show();
//     $(".footer").show();
//     $("#reporte").show();
// });

// $(".carta").click(function () {
//     $(".cards").hide();
// });

// $(".carta").click(function () {
//     $(".problema").show();
//     $("#reporte").show();

//     $(".footer").show();
   
// });



// $("#reporte").click(function () {
//     $(".form").show();
//     $("#reporte").hide();
//     $(".problema").hide();
//     $("#subir").show();
//     $(".footer").show();
   
// });


// $(".close").click(function () {
//     $(".form").hide();
//     $(".cards").show();
   
// });






// // $(".footer").click(function () {


// //     $(".footer").hide();
// //     $("#subir").show();
// // });

// function myFunction() {
//     let x = document.getElementById("titulo").value;
//     document.getElementById("demo").innerHTML = x;
//   }

function func(n) {
    if (n<=1)
    return 1;
    return n*
    func(n-1);
}

func(5)