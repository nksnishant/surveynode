function CustomEmailValidator(value) {
  return /^([\w-.]+@(?!gmail\.com)(?!yahoo\.com)(?!hotmail\.com)(?!outlook\.com)(?!mail\.com)([\w-]+.)+[\w-]{2,4})?$/.test(
    value
  );
}

// Register the function for use in SurveyJS expressions
Survey.FunctionFactory.Instance.register(
  "CustomEmailValidator",
  CustomEmailValidator
);

Survey.StylesManager.applyTheme("modern");
var debug = true;

var json = {
  pages: [
    {
      title:
        "How is your organization gearing up? Take the survey now and get a copy of the study report.",
      questions: [
        {
          type: "dropdown",
          name: "industry",
          title: "Industry/Sector:",
          isRequired: debug == undefined ? true : debug,
          //hasNone: true,
          hasOther: true,
          colCount: 4,
          choices: [
            "Audit & Accounting",
            "BFSI",
            "Construction",
            "Education",
            "FMCG",
            "Healthcare and Hospitals",
            "IT/ITES",
            "Manufacturing",
            "Media and Telecommunications",
            "Real estate",
            "Services",
            "Transport"
          ]
        },

        {
          type: "dropdown",
          name: "annualTurnover",
          title:
            "Annual turnover in Rupees Crores(in case of MNC, please specify for India unit only)",
          isRequired: debug == undefined ? true : debug,
          hasNone: true,
          colCount: 4,
          choices: ["<1.000", "1,000-5,000", "5,001-10,000", ">10,000"]
        },
        {
          type: "dropdown",
          name: "totalEmployees",
          title:
            "Number of employees in my organization(in case of MNC, please specify for India unit only)",
          isRequired: debug == undefined ? true : debug,
          hasNone: true,
          colCount: 4,
          choices: ["<500", "500-750", "751-1,000", "1,001-5,000", ">5,000"]
        },
        {
          type: "radiogroup",
          name: "organizationLevel",
          title: "My level within the Organization:",
          isRequired: debug == undefined ? true : debug,
          colCount: 2,
          choices: [
            "CFO",
            "Senior Finance Professional(Finance Head,VP,Director and above)",
            "CHRO or Senior HR Professional"
          ]
        },
        {
          type: "checkbox",
          name: "interest",
          title: "I am interested in",
          hasSelectAll: true,
          isRequired: debug == undefined ? true : debug,
          //hasOther: true,
          colCount: 2,
          choices: [
            "What the Finance function needs to gear up for 2030 and beyond",
            "How to be the Next-Gen CFO"
          ]
        }
      ]
    },

    {
      questions: [
        {
          type: "sortablelist",
          name: "priorities",
          isRequired: debug == undefined ? true : debug,
          validators: [
            {
              type: "expression",
              text: "Please select at least three responses.",
              expression: "{priorities.length} >= 3"
            }
          ],
          title:
            "What are the key priorities for your organization's finance function over the next few years?",
          choices: [
            {
              value: "advisory",
              text: "Advising CEO and/or other key stakeholders"
            },
            {
              value: "business",
              text: "Enabling business transformation"
            },
            {
              value: "harmonization",
              text: "Harmonization of accounting and business Standards"
            },
            {
              value: "financeTechnology",
              text: "Finance technology/systems upgrade"
            },
            {
              value: "hiring",
              text: "Hiring next-gen talent in Finance"
            },
            {
              value: "developing",
              text: "Developing/building talent capability and skills"
            },
            {
              value: "increasing",
              text: "Increasing gender diversity"
            },
            {
              value: "managing",
              text: "Managing generational aspirations and expectations"
            },
            {
              value: "otherPriorities",
              text: "Others"
            }
          ]
        },
        {
          type: "sortablelist",
          name: "financeTrans",
          isRequired: debug == undefined ? true : debug,
          validators: [
            {
              type: "expression",
              text: "Please select at least three responses.",
              expression: "{financeTrans.length} >= 3"
            }
          ],
          title:
            "What transformation in Finance function do you foresee over next few years for effectively facilitating and successfully delivering these priorities?",
          choices: [
            {
              value: "adoption",
              text:
                "Adoption of latest technology & technology-based approaches"
            },
            {
              value: "advisoryCapabilities",
              text: "Enhanced advisory capabilities"
            },
            {
              value: "governance",
              text: "Increased governance and fiduciary obligations"
            },
            {
              value: "change",
              text:
                "Acting as change agent for the function as well as the company"
            },
            {
              value: "collaboration",
              text:
                "Active collaboration and partnership with and outside the business"
            },
            {
              value: "peopleCapabilities",
              text: "People capabilities and team structure"
            },
            {
              value: "analytics",
              text: "Data mining and analytics"
            },
            {
              value: "financeTransOthers",
              text: "Others"
            }
          ]
        },
        {
          type: "sortablelist",
          name: "externalFactors",
          isRequired: debug == undefined ? true : debug,
          validators: [
            {
              type: "expression",
              text: "Please select at least three responses.",
              expression: "{externalFactors.length} >= 3"
            }
          ],
          title:
            "What external factors will have the most influence on the transformation aspects?",
          choices: [
            {
              value: "development",
              text:
                "Development of intelligent automated accounting systems and new analytical  methodologies"
            },
            {
              value: "solutions",
              text: "Advent of cloud computing solutions"
            },
            {
              value: "volatility",
              text: "Rate of change and economic volatility"
            },
            {
              value: "finance",
              text: "Cashless and cryptocurrency"
            },
            {
              value: "regulation",
              text: "Increased regulation and governance"
            },
            {
              value: "startups",
              text: "Emergence of unicorn startups and new-age companies"
            },
            {
              value: "increasing",
              text: "Globalization and cross-geography implications"
            },
            {
              value: "others",
              text: "Others"
            }
          ]
        },

        {
          type: "sortablelist",
          name: "financeAspects",
          isRequired: debug == undefined ? true : debug,
          validators: [
            {
              type: "expression",
              text: "Please select at least three responses.",
              expression: "{financeAspects.length} >= 3"
            }
          ],
          title:
            "Which aspects of Finance function would be most impacted by the transformation?",
          choices: [
            {
              value: "Audit and Assurance",
              text: "Audit and Assurance"
            },
            {
              value: "Corporate Reporting",
              text: "Corporate Reporting"
            },
            {
              value: "Financial Management",
              text: "Financial Management"
            },
            {
              value: "Strategic Planning and Performance Management",
              text: "Strategic Planning and Performance Management"
            },
            {
              value: "Tax",
              text: "Tax"
            },
            {
              value: "Governance, Risk and Ethics",
              text: "Governance, Risk and Ethics"
            },
            {
              value: "others",
              text: "Others"
            }
          ]
        },

        {
          type: "radiogroup",
          name: "financePrep",
          title:
            "How prepared are you or is your organization's Finance function for enabling this transformation?",
          isRequired: debug == undefined ? true : debug,
          colCount: 2,
          choices: [
            "Very prepared, have a structured roadmap",
            "Somewhat prepared, working on the details",
            "Discussions have started, but still early days",
            "Too early/ have other key priorities"
          ]
        }
      ]
    },
    {
      questions: [
        {
          type: "matrix",
          name: "compAndSkills",
          isRequired: debug == undefined ? true : debug,
          title:
            "How critical would the following competencies and skills be for job success of senior Finance professionals in 2030 and beyond?",
          columns: [
            {
              value: "Not Critical",
              text: "Not Critical"
            },
            {
              value: "Somewhat Critical",
              text: "Somewhat Critical"
            },
            {
              value: "Highly Critical",
              text: "Highly Critical"
            }
          ],
          rows: [
            {
              value: "Technical skills and Ethics",
              text:
                "Technical skills and Ethics: The skills and abilities to perform activities consistently to a defined standard while maintaining the highest standards of integrity, independence and skepticism."
            },
            {
              value: "Intelligence",
              text:
                "Intelligence: The ability to acquire and use knowledge: thinking, reasoning and solving problems."
            },
            {
              value: "Creative",
              text:
                "Creative: The ability to use existing knowledge in a new situation, to make connections, explore potential outcomes, and generate new ideas."
            },
            {
              value: "Digital",
              text:
                "Digital: The awareness and application of existing and emerging digital technologies, capabilities, practices and strategies."
            },
            {
              value: "Emotional Intelligence",
              text:
                "Emotional Intelligence: The ability to identify your own emotions and those of others, harness and apply them to tasks, and regulate and manage them."
            },
            {
              value: "Vision",
              text:
                "Vision: The ability to anticipate future trends accurately by extrapolating existing trends and facts, and filling the gaps by thinking innovatively."
            },
            {
              value: "Experience",
              text:
                "Experience: The ability and skills to understand customer expectations, meet desired outcomes and create value."
            },
            {
              value: "others",
              text: "Others"
            }
          ]
        },
        {
          type: "checkbox",
          name: "financeSkills",
          title:
            "What skills would you place emphasis on building/developing for successful Finance professionals of the future?",
          hasSelectAll: true,
          isRequired: debug == undefined ? true : debug,
          hasOther: true,
          colCount: 2,
          choices: [
            "Ethics and Professionalism",
            "Commercial Acumen",
            "Audit, Assurance and Advisory",
            "Corporate and Business Reporting",
            "Financial Management",
            "Governance, Risk and Control",
            "Leadership and Management",
            "Stakeholder Relationship Management",
            "Strategy, Technology and Innovation",
            "Sustainable Management Accounting",
            "Tax Advisory",
            "Communication Skills",
            "Presentation Skills",
            "Personal Brand and presence"
          ]
        },
        {
          type: "checkbox",
          name: "financeSkillGaps",
          title:
            "What talent and skill gaps do you foresee in Finance function in the coming years?",
          hasSelectAll: true,
          isRequired: debug == undefined ? true : debug,
          hasOther: true,
          colCount: 2,
          choices: [
            "Data scientists",
            "Finance technology experts",
            "Cross-geographic/cross-cultural experience",
            "Emerging reporting platforms e.g. Tableau",
            "Data mining and analytics",
            "Business Partnering",
            "Decision support",
            "Others"
          ]
        }
      ]
    },
    {
      questions: [
        {
          type: "text",
          name: "Name",
          title: "Name",
          isRequired: debug == undefined ? true : debug
        },
        {
          type: "text",
          name: "Organization",
          title: "Organization",
          isRequired: debug == undefined ? true : debug
        },
        {
          type: "text",
          name: "Title",
          title: "Title",
          isRequired: debug == undefined ? true : debug
        },
        {
          type: "text",
          name: "Phone",
          title: "Phone",
          isRequired: debug == undefined ? true : debug,
          validators: [
            {
              type: "numeric",
              minlength: 10,
              maxlength: 10
            }
          ]
        },
        {
          type: "text",
          name: "Email",
          title: "Company Email Address",
          isRequired: debug == undefined ? true : debug,
          validators: [
            {
              type: "expression",
              text: "Please enter a valid email address. Personal email addresses are not allowed.",
              expression: "CustomEmailValidator({Email})"
            }
          ]
        }
      ]
    }
  ],
  completedHtml:
    "<p>Thank you for completing the survey.</p><p>Please wait while your report downloads. The report will also be emailed.</p><p>You will now be redirected to ACCA homepage.</p>"
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  console.log(window.location.pathname);
  $.ajax({
    type: "POST",
    url: "/",
    data: JSON.stringify(result.data, null, 3),
    contentType: "application/json",
    xhrFields: {
      responseType: "blob"
    },
    success: function(data) {
      var filename = "SurveyResults.pdf";
      var linkelem = document.createElement("a");
      try {
        var blob = new Blob([data], {
          type: "application/octet-stream"
        });

        if (typeof window.navigator.msSaveBlob !== "undefined") {
          //   IE workaround for "HTML7007: One or more blob URLs were revoked
          // by closing the blob for which they were created.
          //These URLs will no longer resolve as the data backing the URL has been freed."
          window.navigator.msSaveBlob(blob, filename);
        } else {
          var URL = window.URL || window.webkitURL;
          var downloadUrl = URL.createObjectURL(blob);
          // use HTML5 a[download] attribute to specify filename
          var a = document.createElement("a");

          // safari doesn't support this yet
          if (typeof a.download === "undefined") {
            window.location = downloadUrl;
          } else {
            a.href = downloadUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.target = "_blank";
            a.click();
          }
        }
        document.location = "https://www.accaglobal.com/";
      } catch (ex) {
        console.log(ex);
      }
    }
  });
  // document
  //   .querySelector('#surveyResult')
  //   .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
});

function doOnCurrentPageChanged(survey) {
  if (!survey.isFirstPage) {
    $("#header").hide();
  } else {
    $("#header").show();
  }
}

$("#surveyElement").Survey({
  model: survey,
  onCurrentPageChanged: doOnCurrentPageChanged
});

doOnCurrentPageChanged(survey);
