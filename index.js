const express = require('express');
const fs = require('fs');
const HummusRecipe = require('hummus-recipe');
const nodemailer = require('nodemailer');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');

const {Result} = require('./surveyModel.js');

// For debugging:
// pry = require('pryjs');

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '9c8420a170a4df',
    pass: '94bd3df888e72e'
  }
});

const app = express();

const sess = {
  secret: 'american ninja',
  cookie: {}
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'american ninja',
  cookie: {
    maxAge: 60000
  }
}));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  console.log(req.session.id);
  res.sendFile(__dirname + '/index.html');
});


app.post('/', function(request, response, next) {
  console.log(JSON.stringify(request.body));
  console.log(request.session.id);

  const outputFile = __dirname + "/outfiles/" + request.session.id + ".pdf";
  // eval(pry.it);
  // deletePdf();

  createPdf(request,outputFile);

  sendEmail(request.body.Email,request.body.Name,outputFile);

  var filename = "SurveyResults.pdf";
  filename = encodeURIComponent(filename);
  response.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
  response.setHeader('Content-type', 'application/pdf');

  response.sendFile(outputFile);

});


function deletePdf() {
  fs.stat('output.pdf', function(err, stats) {
    if (err) {
      return console.error(err);
    } else {
      fs.unlink('output.pdf', function(err) {
        if (err) return console.log(err);
        console.log('old file deleted successfully');
      })
    }
  });
}

//Create the pdf file and store it in output.pdf
function createPdf(request,outputFile) {
  var sortedPriorities = request.body.priorities;
  const kp11 = __dirname + "/assets/images/pngs/" + sortedPriorities[0] + ".png";
  const kp12 = __dirname + "/assets/images/pngs/" + sortedPriorities[1] + ".png";
  const kp13 = __dirname + "/assets/images/pngs/" + sortedPriorities[2] + ".png";

  var sortedFinanceTrans = request.body.financeTrans;
  const tf11 = __dirname + "/assets/images/pngs/" + sortedFinanceTrans[0] + ".png";
  const tf12 = __dirname + "/assets/images/pngs/" + sortedFinanceTrans[1] + ".png";
  const tf13 = __dirname + "/assets/images/pngs/" + sortedFinanceTrans[2] + ".png";

  const rank1 = __dirname + "/assets/images/pngs/Icon1.png";
  const rank2 = __dirname + "/assets/images/pngs/Icon2.png";
  const rank3 = __dirname + "/assets/images/pngs/Icon3.png";
  const tick = __dirname + "/assets/images/pngs/tick.png";

  const pdfDoc = new HummusRecipe('input.pdf', outputFile);
  pdfDoc
    // edit 1st page
    .editPage(1)
    //Question 1
    .image(kp11, 23, 250, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(kp12, 93, 250, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(kp13, 163, 250, {
      scale: 0.14,
      keepAspectRatio: true
    })
    //ranks
    .image(rank1, 27, 254, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank2, 97, 254, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank3, 167, 254, {
      scale: .14,
      keepAspectRatio: true
    })
    // .text('1. Advising CEO and/or other key stakeholders', 20, 110)
    //Question 2
    .image(tf11, 23, 416, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(tf12, 93, 416, {
      scale: 0.14,
      keepAspectRatio: true
    })
    .image(tf13, 163, 416, {
      scale: 0.14,
      keepAspectRatio: true
    })
    //ranks
    .image(rank1, 27, 420, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank2, 97, 420, {
      scale: .14,
      keepAspectRatio: true
    })
    .image(rank3, 167, 420, {
      scale: .14,
      keepAspectRatio: true
    });

  // 9 - Readiness for Transformation
  var lineDims;
  var readiness = request.body.financePrep;
  if (request.body.organizationLevel === "CHRO or Senior HR Professional") {
    switch (readiness) {
      case "Very prepared, have a structured roadmap": //brown
        lineDims = [
          [435, 97],
          [520, 97],
          [520, 120]
        ];
        break;
      case "Somewhat prepared, working on the details": //red
        lineDims = [
          [435, 97],
          [500, 97],
          [500, 140]
        ];
        break;
      case "Discussions have started, but still early days": //blue
        lineDims = [
          [435, 97],
          [540, 97],
          [540, 122]
        ];
        break;
      case "Too early/ have other key priorities": //green
        lineDims = [
          [435, 97],
          [508, 97],
          [508, 130]
        ];
        break;
      default:
        // code block
    }
  } else {
    switch (readiness) {
      case "Very prepared, have a structured roadmap": //brown
        lineDims = [
          [420, 97],
          [370, 97],
          [370, 127]
        ];
        break;
      case "Somewhat prepared, working on the details": //red
        lineDims = [
          [420, 97],
          [410, 97],
          [410, 128]
        ];
        break;
      case "Discussions have started, but still early days": //blue
        lineDims = [
          [420, 97],
          [400, 97],
          [395, 123]
        ];
        break;
      case "Too early/ have other key priorities": //green
        lineDims = [
          [420, 97],
          [402, 97],
          [435, 155],
          [422, 155]
        ];
        break;
      default:
        // code block
    }
  }
  pdfDoc
    .line(lineDims, {
      color: 'blue',
      width: 1,
      dash: [10, 3]
    });

  //10 Competencies and skills
  var compAndSkills = request.body.compAndSkills;
  for (var key in compAndSkills) {
    if (compAndSkills.hasOwnProperty(key)) {
      var val = compAndSkills[key];
      switch (key) {
        case "Technical skills and Ethics":
          pdfDoc.
          text(val, 328, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Intelligence":
          pdfDoc.
          text(val, 365, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Creative":
          pdfDoc.
          text(val, 402, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Digital":
          pdfDoc.
          text(val, 435, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Emotional Intelligence":
          pdfDoc.
          text(val, 472, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Vision":
          pdfDoc.
          text(val, 508, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Experience":
          pdfDoc.
          text(val, 542, 237, {
            color: '#c55a11',
            fontSize: 5,
            bold: false,
            font: 'Avenir',
            align: 'center center',
            textBox: {
              width: 30,
              textAlign: 'center',
              padding: 0
            },
          });
          break;
        case "Others":
          console.log(val);
          break;
        default:
          // code block
      }
    }
  }

  // 11 Future talents and skills
  var financeSkillGaps = request.body.financeSkillGaps;
  for (i in financeSkillGaps) {
    switch (financeSkillGaps[i]) {
      case 'Data scientists':
        pdfDoc.image(tick, 325, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      case 'Finance technology experts':
        pdfDoc.image(tick, 360, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      case 'Cross-geographic/cross-cultural experience':
        pdfDoc.image(tick, 395, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      case 'Emerging reporting platforms e.g. Tableau':
        pdfDoc.image(tick, 432, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      case 'Data mining and analytics':
        pdfDoc.image(tick, 470, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      case 'Business Partnering':
        pdfDoc.image(tick, 503, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      case 'Decision support':
        pdfDoc.image(tick, 540, 365, {
          scale: 0.2,
          keepAspectRatio: true
        });
        break;
      default:
        // code block
    }
  }

  // 5 Interested in
  if (request.body.interest[0]) {
    pdfDoc.
    text("a. " + request.body.interest[0], 298, 605, {
      color: '#000000',
      fontSize: 7,
      bold: false,
      font: 'Avenir',
      // align: 'left top',
      textBox: {
        width: 300,
        textAlign: 'left top',
        padding: 0
      },
    })
  }
  if (request.body.interest[1]) {
    pdfDoc.
    text("b. " + request.body.interest[1], 298, 615, {
      color: '#000000',
      fontSize: 7,
      bold: false,
      font: 'Avenir',
      // align: 'left top',
      textBox: {
        width: 300,
        textAlign: 'left top',
        padding: 0
      },
    })
  }



  pdfDoc
    .endPage()
    // end and save
    .endPDF();

}

function sendEmail(emailId,name,outputFilePath) {
  const message = {
    from: 'noreply@acca.com', // Sender address
    to: emailId, // List of recipients
    subject: 'Building the next-gen CFOs: Survey Summary',
    html: '<p>Dear ' + name +',<\/p><p>Thank you for completing the follow-up survey to ACCA and SHRM India\'s study on Building the next - gen CFOs. You may refer to the enclosed one - page summary for understanding your response vis - a - vis the study respondents. Our representative will connect with you soon to outline the implications and how other organizations are preparing for the road ahead. <\/p><br>The detailed study report is attached.<br><br>Regards,<br>ACCA',
    attachments: [{
      filename: 'SurveyResults.pdf',
      path: outputFilePath
    }]
  };

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});
