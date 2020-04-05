const express = require("express");
const fs = require("fs");
const app = express();
const nodemailer = require("nodemailer");

var cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const config = require("./config");
const createPDF = require("./createSurvey.js");

console.log(config.mailconn);
let transport = nodemailer.createTransport(config.mailconn);

const {
  db: { database, username, password, dialect, dbhost },
} = config;
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: dbhost,
  dialectOptions: { connectTimeout: 1000 },
});

const ResultModel = require("./surveyModel.js");
const Result = ResultModel(sequelize, DataTypes);
sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

const sess = {
  secret: "american ninja",
  cookie: {},
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "american ninja",
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  console.log(req.session.id);
  res.sendFile(__dirname + "/index.html");
});

//Main method
app.post("/", function (request, response, next) {
  console.log(JSON.stringify(request.body));
  console.log(request.session.id);
  // request.body = JSON.parse(
  //   '{"industry":"FMCG","annualTurnover":"5,001-10,000","totalEmployees":"<500","organizationLevel":"CHRO or Senior HR Professional","interest":["How to be the Next-Gen CFO"],"priorities":["harmonization","business","advisory"],"financeTrans":["adoption","governance","advisoryCapabilities"],"externalFactors":["solutions","volatility","development"],"financeAspects":["Corporate Reporting","Financial Management","Audit and Assurance"],"financePrep":"Too early/ have other key priorities","compAndSkills":["Technical skills and Ethics","Intelligence","Creative"],"Name":"Obi-wan Kenobi jhsdg fdsfhgds","Organization":"h dfds dsf dsjfhdsj dsfhdsjfhsdh","Title":"j sdhfjdsf jsdhgf"}'
  // );

  const outputFile = __dirname + "/outfiles/" + request.session.id + ".pdf";
  // const outputFile = __dirname + "/outfiles/output.pdf";

  persistSurvey(request.body);
  createPDF(request, outputFile);

  sendEmail(request.body.Email, request.body.Name, outputFile);

  var filename = "SurveyResults.pdf";
  filename = encodeURIComponent(filename);
  response.setHeader(
    "Content-disposition",
    'inline; filename="' + filename + '"'
  );
  response.setHeader("Content-type", "application/pdf");

  response.sendFile(outputFile);
  console.log("Control in index.js ------ 2");
});

function persistSurvey(input) {
  Result.create({
    sector: input.industry,
    name: input.Name,
    org: input.Organization,
    title: input.Title,
    phone: input.Phone,
    email: input.Email,
    orgLevel: input.organizationLevel,
    turnover: input.annualTurnover,
    employees: input.totalEmployees,
    interests: JSON.stringify(input.interest),
    priorities: JSON.stringify(input.priorities),
    transformation: JSON.stringify(input.financeTrans),
    factors: JSON.stringify(input.externalFactors),
    aspects: JSON.stringify(input.financeAspects),
    preparedness: input.financePrep,
    competencies: JSON.stringify(input.compAndSkills),
    financeSkills: JSON.stringify(input.financeSkills),
    skillGaps: JSON.stringify(input.financeSkillGaps),
  })
    .catch(function (err) {
      console.log(err);
    })
    .then(function (item) {
      console.log(item.id);
    });
}

function sendEmail(emailId, name, outputFilePath) {
  const message = {
    from: "noreply@acca.com", // Sender address
    to: emailId, // List of recipients
    subject: "Building the next-gen CFOs: Survey Summary",
    html:
      "<p>Dear " +
      name +
      ",</p><p>Thank you for completing the follow-up survey to ACCA and SHRM India's study on Building the next - gen CFOs. You may refer to the enclosed one - page summary for understanding your response vis - a - vis the study respondents. Our representative will connect with you soon to outline the implications and how other organizations are preparing for the road ahead. </p><br>The detailed study report is attached.<br><br>Regards,<br>ACCA",
    attachments: [
      {
        filename: "SurveyResults.pdf",
        path: outputFilePath,
      },
    ],
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
