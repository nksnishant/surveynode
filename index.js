const express = require('express');
const fs = require('fs');

//q3 - brown - [420,97],[370,97],[370,127]
//q3 - blue - [420,97],[400,97],[395,123]
//q3 - red - [420,97],[410,97],[410,128]
//q3 - green - [420,97],[402,97],[435,155],[422,155]

// q3 - hr - blue [435,97],[540,97],[540,122]
// q3 - hr - brown [435,97],[520,97],[520,120]
// q3 - hr - green [435,97],[508,97],[508,130]
// q3 - hr - red [435,97],[500,97],[500,140]


const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', function (request, response) {
    console.log(request.body);
    console.log(request.body.email);
})

// app.get('/', (req,res) => res.send("Hello there"));


const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
const kp11 = __dirname + "/assets/images/pngs/Q1-1.png";
const kp12 = __dirname + "/assets/images/pngs/Q1-2.png";
const kp13 = __dirname + "/assets/images/pngs/Q1-3.png";
const kp14 = __dirname + "/assets/images/pngs/Q1-4.png";
const kp15 = __dirname + "/assets/images/pngs/Q1-5.png";
const kp16 = __dirname + "/assets/images/pngs/Q1-6.png";
const kp17 = __dirname + "/assets/images/pngs/Q1-7.png";
const kp18 = __dirname + "/assets/images/pngs/Q1-8.png";
const kp19 = __dirname + "/assets/images/pngs/Q1-9.png";

const tf11 = __dirname + "/assets/images/pngs/Q2-1.png";
const tf12 = __dirname + "/assets/images/pngs/Q2-2.png";
const tf13 = __dirname + "/assets/images/pngs/Q2-3.png";
const tf14 = __dirname + "/assets/images/pngs/Q2-4.png";
const tf15 = __dirname + "/assets/images/pngs/Q2-5.png";
const tf16 = __dirname + "/assets/images/pngs/Q2-6.png";
const tf17 = __dirname + "/assets/images/pngs/Q2-7.png";
const tf18 = __dirname + "/assets/images/pngs/Q2-8.png";

const rank1 = __dirname + "/assets/images/pngs/Icon1.png";
const rank2 = __dirname + "/assets/images/pngs/Icon2.png";
const rank3 = __dirname + "/assets/images/pngs/Icon3.png";

// for the ai application option
const offset = 3;

// pdfDoc
//     // edit 1st page
//     .editPage(1)
//     // .text('Add some texts to an existing pdf file', 150, 300)
//     // .rectangle(20, 20, 40, 100)
//     // .comment('Add 1st comment annotaion', 200, 300)
//     //Question 1
//     .image(kp19, 24, 228, {scale: 0.14, keepAspectRatio: true})
//     .image(kp16, 94, 228, {scale: 0.14, keepAspectRatio: true})
//     .image(kp12, 164,228, {scale: 0.14, keepAspectRatio: true})
//     //ranks
//     .image(rank1, 28, 232, {scale: .14, keepAspectRatio: true})
//     .image(rank2, 98, 232, {scale: .14, keepAspectRatio: true})
//     .image(rank3, 168, 232, {scale: .14, keepAspectRatio: true})
//     // .text('1. Advising CEO and/or other key stakeholders', 20, 110)
//     //Question 2
//     .image(tf12, 24, 392, {scale: 0.14, keepAspectRatio: true})
//     .image(kp17, 94, 392, {scale: 0.14, keepAspectRatio: true})
//     .image(kp18, 164,392, {scale: 0.14, keepAspectRatio: true})
//     //ranks
//     .image(rank1, 28, 396, {scale: .14, keepAspectRatio: true})
//     .image(rank2, 98, 396, {scale: .14, keepAspectRatio: true})
//     .image(rank3, 168, 396, {scale: .14, keepAspectRatio: true})
//     //Question 3
//     // .line([
//     //   [420,97],
//     //   [370,97],
//     //   [370,127]
//     // ])
//     .line([
//       [435,97],[508,97],[508,130]
//     ],{ color: 'blue', width: 1, dash: [10, 3] })
// pdfDoc
//     .endPage()
//     // end and save
//     .endPDF();


// app.get('/', function (req, res) {
//   // console.log(createPdf());
//
// })

app.listen(3000, () =>
  console.log("Server started on port 3000")
);
