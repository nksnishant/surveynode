const HummusRecipe = require("hummus-recipe");

module.exports = function createPdf(request, outputFile) {
  // console.log(request.body);

  //Intro section
  const pdfDoc = new HummusRecipe("input.pdf", outputFile);
  console.log(__dirname + "/public/fonts/Avenir.ttc");
  pdfDoc.registerFont("Avenir", __dirname + "/public/fonts/Avenir.ttc");
  pdfDoc.registerFont("Fyra", __dirname + "/public/fonts/fyra.otf");

  pdfDoc
    // edit 1st page
    .editPage(1)
    .text(request.body.Name, 183, 97, {
      color: "#000000",
      fontSize: 12,
      bold: true,
      font: "Avenir",
      // align: 'left top',
      textBox: {
        width: 300,
        textAlign: "left top",
        padding: 0,
      },
    })
    .text(
      request.body.Title +
        ", " +
        request.body.Organization +
        "   |   " +
        request.body.industry +
        "   |   Annual Turnover : " +
        request.body.annualTurnover +
        "   |   Employees : " +
        request.body.totalEmployees,
      30,
      115,
      {
        color: "#000000",
        fontSize: 10,
        bold: false,
        font: "Avenir",
        // align: 'left top',
        textBox: {
          width: 900,
          textAlign: "left top",
          padding: 0,
        },
      }
    );

  // Interested in
  if (request.body.interest[0]) {
    pdfDoc.text("a. " + request.body.interest[0], 30, 182, {
      color: "#000000",
      fontSize: 9,
      bold: false,
      font: "Avenir",
      // align: 'left top',
      textBox: {
        width: 700,
        textAlign: "left top",
        padding: 0,
      },
    });
  }
  if (request.body.interest[1]) {
    pdfDoc.text("b. " + request.body.interest[1], 30, 195, {
      color: "#000000",
      fontSize: 9,
      bold: false,
      font: "Avenir",
      // align: 'left top',
      textBox: {
        width: 300,
        textAlign: "left top",
        padding: 0,
      },
    });
  }
  //Priorities
  var sortedPriorities = request.body.priorities;
  const kp11 =
    __dirname + "/assets/images/pngs/" + sortedPriorities[0] + ".png";
  const kp12 =
    __dirname + "/assets/images/pngs/" + sortedPriorities[1] + ".png";
  const kp13 =
    __dirname + "/assets/images/pngs/" + sortedPriorities[2] + ".png";

  var sortedFinanceTrans = request.body.financeTrans;
  const tf11 =
    __dirname + "/assets/images/pngs/" + sortedFinanceTrans[0] + ".png";
  const tf12 =
    __dirname + "/assets/images/pngs/" + sortedFinanceTrans[1] + ".png";
  const tf13 =
    __dirname + "/assets/images/pngs/" + sortedFinanceTrans[2] + ".png";

  const rank1 = __dirname + "/assets/images/pngs/Icon1.png";
  const rank2 = __dirname + "/assets/images/pngs/Icon2.png";
  const rank3 = __dirname + "/assets/images/pngs/Icon3.png";
  const tick = __dirname + "/assets/images/pngs/tick.png";

  pdfDoc
    //Question 1
    .image(kp11, 27, 336, {
      scale: 0.2,
      keepAspectRatio: true,
    })
    .image(kp12, 127, 336, {
      scale: 0.2,
      keepAspectRatio: true,
    })
    .image(kp13, 227, 336, {
      scale: 0.2,
      keepAspectRatio: true,
    })
    //ranks
    .image(rank1, 33, 342, {
      scale: 0.2,
      keepAspectRatio: true,
    })
    .image(rank2, 133, 342, {
      scale: 0.2,
      keepAspectRatio: true,
    })
    .image(rank3, 233, 342, {
      scale: 0.2,
      keepAspectRatio: true,
    })
    //Question 2
    .image(tf11, 260, 465, {
      scale: 0.14,
      keepAspectRatio: true,
    })
    .image(tf12, 330, 465, {
      scale: 0.14,
      keepAspectRatio: true,
    })
    .image(tf13, 400, 465, {
      scale: 0.14,
      keepAspectRatio: true,
    })
    //ranks
    .image(rank1, 264, 469, {
      scale: 0.15,
      keepAspectRatio: true,
    })
    .image(rank2, 334, 469, {
      scale: 0.15,
      keepAspectRatio: true,
    })
    .image(rank3, 404, 469, {
      scale: 0.15,
      keepAspectRatio: true,
    });

  //End Page 1
  pdfDoc.endPage();

  pdfDoc
    // edit 2nd page
    .editPage(2);

  // 9 - Readiness for Transformation
  var lineDims;
  var readiness = request.body.financePrep;
  if (request.body.organizationLevel === "CHRO or Senior HR Professional") {
    switch (readiness) {
      case "Very prepared, have a structured roadmap": //brown
        lineDims = [
          [260, 184],
          [300, 184],
          [300, 198],
        ];
        break;
      case "Somewhat prepared, working on the details": //yellow
        lineDims = [
          [257, 153],
          [300, 153],
          [300, 198],
        ];
        break;
      case "Discussions have started, but still early days": //orange
        lineDims = [
          [232, 135],
          [300, 135],
          [300, 198],
        ];
        break;
      case "Too early/ have other key priorities": //green
        lineDims = [
          [260, 173],
          [300, 173],
          [300, 198],
        ];
        break;
      default:
      // code block
    }
  } else {
    switch (readiness) {
      case "Very prepared, have a structured roadmap": //brown
        lineDims = [
          [351, 137],
          [300, 137],
          [300, 198],
        ];
        break;
      case "Somewhat prepared, working on the details": //yellow
        lineDims = [
          [332, 184],
          [300, 184],
          [300, 198],
        ];
        break;
      case "Discussions have started, but still early days": //orange
        lineDims = [
          [375, 140],
          [375, 120],
          [300, 120],
          [300, 198],
        ];
        break;
      case "Too early/ have other key priorities": //green
        lineDims = [
          [340, 143],
          [300, 143],
          [300, 198],
        ];
        break;
      default:
      // code block
    }
  }
  pdfDoc.line(lineDims, {
    color: "blue",
    width: 1,
    dash: [10, 3],
  });

  // Competencies and skills
  let compAndSkills = request.body.compAndSkills;
  let textProps = {
    // color: "#c55a11",
    fontSize: 25,
    bold: false,
    font: "Fyra",
    align: "center center",
    textBox: {
      width: 30,
      textAlign: "center",
      padding: 0,
    },
  };
  compAndSkills.forEach((value, index) => {
    let number = index + 1;
    switch (value) {
      case "Technical skills and Ethics":
        pdfDoc.text(number, 80, 390, textProps);
        break;
      case "Intelligence":
        pdfDoc.text(number, 150, 390, textProps);
        break;
      case "Creative":
        pdfDoc.text(number, 220, 390, textProps);
        break;
      case "Digital":
        pdfDoc.text(number, 290, 390, textProps);
        break;
      case "Emotional Intelligence":
        pdfDoc.text(number, 360, 390, textProps);
        break;
      case "Vision":
        pdfDoc.text(number, 430, 390, textProps);
        break;
      case "Experience":
        pdfDoc.text(number, 500, 390, textProps);
        break;
    }
  });

  pdfDoc
    .endPage()
    // end and save
    .endPDF();
};
