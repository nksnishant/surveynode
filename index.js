const express = require('express');
const fs = require('fs');
const HummusRecipe = require('hummus-recipe');
var bodyParser = require('body-parser');
pry = require('pryjs');

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', function(request, response) {
  console.log(JSON.stringify(request.body));

  //To-DO move this to a function
  var sortedPriorities = sortByValue(request.body.priorities);
  const kp11 = __dirname + "/assets/images/pngs/" + sortedPriorities[0][1] + ".png";
  const kp12 = __dirname + "/assets/images/pngs/" + sortedPriorities[1][1] + ".png";
  const kp13 = __dirname + "/assets/images/pngs/" + sortedPriorities[2][1] + ".png";

  var sortedFinanceTrans = sortByValue(request.body.financeTrans);
  const tf11 = __dirname + "/assets/images/pngs/" + sortedFinanceTrans[0][1] + ".png";
  const tf12 = __dirname + "/assets/images/pngs/" + sortedFinanceTrans[1][1] + ".png";
  const tf13 = __dirname + "/assets/images/pngs/" + sortedFinanceTrans[2][1] + ".png";

  const rank1 = __dirname + "/assets/images/pngs/Icon1.png";
  const rank2 = __dirname + "/assets/images/pngs/Icon2.png";
  const rank3 = __dirname + "/assets/images/pngs/Icon3.png";


  const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
  pdfDoc
    // edit 1st page
    .editPage(1)
      //Question 1
      .image(kp11, 24, 228, {scale: 0.14, keepAspectRatio: true})
      .image(kp12, 94, 228, {scale: 0.14, keepAspectRatio: true})
      .image(kp13, 164,228, {scale: 0.14, keepAspectRatio: true})
      //ranks
      .image(rank1, 28, 232, {scale: .14, keepAspectRatio: true})
      .image(rank2, 98, 232, {scale: .14, keepAspectRatio: true})
      .image(rank3, 168, 232, {scale: .14, keepAspectRatio: true})
      // .text('1. Advising CEO and/or other key stakeholders', 20, 110)
      //Question 2
      .image(tf11, 24, 392, {scale: 0.14, keepAspectRatio: true})
      .image(tf12, 94, 392, {scale: 0.14, keepAspectRatio: true})
      .image(tf13, 164,392, {scale: 0.14, keepAspectRatio: true})
      //ranks
      .image(rank1, 28, 396, {scale: .14, keepAspectRatio: true})
      .image(rank2, 98, 396, {scale: .14, keepAspectRatio: true})
      .image(rank3, 168, 396, {scale: .14, keepAspectRatio: true})

    // 9 - Readiness for Transformation
    var lineDims;
    var readiness = request.body.financePrep;
    if(request.body.organizationLevel = "CHRO or Senior HR Professional"){
      switch(readiness) {
        case "Very prepared, have a structured roadmap": //brown
          lineDims = [[435,97],[520,97],[520,120]];
          break;
        case "Somewhat prepared, working on the details": //red
          lineDims = [[435,97],[500,97],[500,140]];
          break;
        case "Discussions have started, but still early days": //blue
          lineDims = [[435,97],[540,97],[540,122]];
          break;
        case "Too early/ have other key priorities": //green
          lineDims = [[435,97],[508,97],[508,130]];
          break;
        default:
          // code block
      }
    }else{
      switch(readiness) {
        case "Very prepared, have a structured roadmap": //brown
          lineDims = [[420,97],[370,97],[370,127]];
          break;
        case "Somewhat prepared, working on the details": //red
          lineDims = [[420,97],[410,97],[410,128]];
          break;
        case "Discussions have started, but still early days": //blue
          lineDims = [[420,97],[400,97],[395,123]];
          break;
        case "Too early/ have other key priorities": //green
          lineDims = [[420,97],[402,97],[435,155],[422,155]];
          break;
        default:
          // code block
      }
    }
    pdfDoc
        .line(lineDims, { color: 'blue', width: 1, dash: [10, 3] })

  //10 Competencies and skills
  var compAndSkills = request.body.compAndSkills;
  for (var key in compAndSkills) {
    if (compAndSkills.hasOwnProperty(key)) {
      console.log(key);
      var val = compAndSkills[key];
      switch (key) {
        case "Technical skills and Ethics":
          pdfDoc.
          text(val, 328, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Intelligence":
          pdfDoc.
          text(val, 365, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Creative":
          pdfDoc.
          text(val, 402, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Digital":
          pdfDoc.
          text(val, 435, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Emotional Intelligence":
          pdfDoc.
          text(val, 472, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Vision":
          pdfDoc.
          text(val, 508, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Experience":
          pdfDoc.
          text(val, 542, 235, {
            color: '#ff8c00',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          })
          break;
        case "Others":
          console.log(val);
          break;
        default:
          // code block
      }
    }
  }

  //TO-DO coordinates need to be updated and checkbox needs to be inserted
  // 11 Future talents and skills
  var financeSkillGaps = request.body.financeSkillGaps;
  for (var key in financeSkillGaps) {
    var val = "*"; //checkbox symbol;
    switch (key) {
      case "Data scientists":
        pdfDoc.
        text(val, 320, 370, {
          color: '#ff8c00',
          fontSize: 5
        })
        break;
      case "Finance technology experts":
        pdfDoc.
        text(val, 365, 370, {
          color: '#ff8c00',
          fontSize: 5
        })
        break;
      case "Audit, Assurance and Advisory":
        pdfDoc.
        text(val, 402, 370, {
          color: '#ff8c00',
          fontSize: 5
        })
        break;
      case "Cross-geographic/cross-cultural experience":
        pdfDoc.
        text(val, 435, 370, {
          color: '#ff8c00',
          fontSize: 5
        })
        break;
      case "Emerging reporting platforms e.g. Tableau":
        pdfDoc.
        text(val, 472, 370, {
          color: '#ff8c00',
          fontSize: 5
        })
        break;
      case "Data mining and analytics":
        pdfDoc.
        text(val, 508, 370, {
          color: '#ff8c00',
          fontSize: 5
        })
        break;
      case "Business Partnering":
        pdfDoc.
        text(val, 542, 370, {
          color: '#ff8c00',
          fontSize: 5,
        })
        break;
      case "Decision support":
        text(val, 542, 370, {
          color: '#ff8c00',
          fontSize: 5,
        })
        break;
      default:
        // code block
    }
  }



  pdfDoc.
  text("\u2713", 505, 370, {
    color: '#000000',
    fontSize: 12,
    bold: true,
    align: 'center center',
  })


  pdfDoc
    .endPage()
    // end and save
    .endPDF();

  // console.log(jsonData.Name);
  // console.log(jsonData.priorities);

  // console.log(jsonQ.sort(request.body.priorities));
  // eval(pry.it);
  // createPdf();


  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({
    status: true
  }));
})

// app.get('/', (req,res) => res.send("Hello there"));

function createPdf() {
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

  pdfDoc
    // edit 1st page
    .editPage(1)
    //Question 1
    .image(kp19, 24, 228, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(kp16, 94, 228, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(kp12, 164, 228, {
      scale: 0.14,
      keepAspectRatio: true
    })
    //ranks
    .image(rank1, 28, 232, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank2, 98, 232, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank3, 168, 232, {
      scale: .14,
      keepAspectRatio: true
    })
    // .text('1. Advising CEO and/or other key stakeholders', 20, 110)
    //Question 2
    .image(tf12, 24, 392, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(kp17, 94, 392, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(kp18, 164, 392, {
      scale: 0.14,
      keepAspectRatio: true
    })
    //ranks
    .image(rank1, 28, 396, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank2, 98, 396, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank3, 168, 396, {
      scale: .14,
      keepAspectRatio: true
    })
    //Question 3
    // .line([
    //   [420,97], [370,97], [370,127]
    // ])
    .line([
      [435, 97],
      [508, 97],
      [508, 130]
    ], {
      color: 'blue',
      width: 1,
      dash: [10, 3]
    })

  pdfDoc
    .endPage()
    // end and save
    .endPDF();


}


// for the ai application option
const offset = 3;



// app.get('/', function (req, res) {
//   // console.log(createPdf());
//
// })

function sortByValue(jsObj) {
  var sortedArray = [];
  for (var i in jsObj) {
    // Push each JSON Object entry in array by [value, key]
    sortedArray.push([jsObj[i], i]);
  }
  return sortedArray.sort();
}

app.listen(3000, () =>
  console.log("Server started on port 3000")
);
