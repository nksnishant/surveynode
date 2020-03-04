Survey
  .StylesManager
  .applyTheme("modern");

var json = {
  title: "Survey.",
  pages: [{
      title: "How is your organization gearing up? Take the survey now and get a copy of the study report.",
      questions: [

        {
          type: "dropdown",
          name: "industry",
          title: "Industry/Sector:",
          //isRequired: true,
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
          title: "Annual turnover in Rupees Crores(in case of MNC, please specify for India unit only)",
          //isRequired: true,
          hasNone: true,
          colCount: 4,
          choices: [
            "<1.000",
            "1,000-5,000",
            "5,001-10,000",
            ">10,000"
          ]
        },
        {
          type: "dropdown",
          name: "totalEmployees",
          title: "Number of employees in my organization(in case of MNC, please specify for India unit only",
          //isRequired: true,
          hasNone: true,
          colCount: 4,
          choices: [
            "<500",
            "500-750",
            "751-1,000",
            "1,001-5,000",
            ">5,000"
          ]
        },
        {
          type: "radiogroup",
          name: "organizationLevel",
          title: "My level within the Organization:",
          //isRequired: true,
          colCount: 2,
          choices: [
            "CFO",
            "Senior Finance Professional(Finance Head,VP,Director and above)",
            "CHRO or Senior HR Professional"
          ]
        }
      ]
    }, {

      questions: [{
          type: "matrix",
          name: "priorities",
          title: "What are the key priorities for your organization's finance function over the next few years?",
          columns: [{
              value: 1,
              text: "1"
            },
            {
              value: 2,
              text: "2"
            },
            {
              value: 3,
              text: "3"
            },
            {
              value: 4,
              text: "4"
            },
            {
              value: 5,
              text: "5"
            }
          ],
          rows: [{
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
          type: "matrix",
          name: "financeTrans",
          title: "What transformation in Finance function do you foresee over next few years for effectively facilitating and successfully delivering these priorities?",
          columns: [{
              value: 1,
              text: "1"
            },
            {
              value: 2,
              text: "2"
            },
            {
              value: 3,
              text: "3"
            },
            {
              value: 4,
              text: "4"
            },
            {
              value: 5,
              text: "5"
            }
          ],
          rows: [{
              value: "adoption",
              text: "Adoption of latest technology & technology-based approaches"
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
              text: "Acting as change agent for the function as well as the company"
            },
            {
              value: "collaboration",
              text: "Active collaboration and partnership with and outside the business"
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
          type: "matrix",
          name: "externalFactors",
          title: "What external factors will have the most influence on the transformation aspects?",
          columns: [{
              value: 1,
              text: "1"
            },
            {
              value: 2,
              text: "2"
            },
            {
              value: 3,
              text: "3"
            },
            {
              value: 4,
              text: "4"
            },
            {
              value: 5,
              text: "5"
            }
          ],
          rows: [{
              value: "development",
              text: "Development of intelligent automated accounting systems and new analytical  methodologies"
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
          type: "matrix",
          name: "financeAspects",
          title: "Which aspects of Finance function would be most impacted by the transformation?",
          columns: [{
              value: 1,
              text: "1"
            },
            {
              value: 2,
              text: "2"
            },
            {
              value: 3,
              text: "3"
            },
            {
              value: 4,
              text: "4"
            },
            {
              value: 5,
              text: "5"
            }
          ],
          rows: [{
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
          title: "How prepared are you or is your organization's Finance function for enabling this transformation?",
          //isRequired: true,
          colCount: 2,
          choices: [
            "Very prepared, have a structured roadmap",
            "Somewhat prepared, working on the details",
            "Discussions have started, but still early days",
            "Too early/ have other key priorities"
          ]
        }
      ]
    }, {

      questions: [{
          type: "matrix",
          name: "compAndSkills",
          title: "What competencies and skills would be most critical for job success of senior Finance professionals in 2030 and beyond?",
          columns: [{
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
          rows: [{
              value: "Technical skills and Ethics",
              text: "Technical skills and Ethics: The skills and abilities to perform activities consistently to a defined standard while maintaining the highest standards of integrity, independence and skepticism."
            },
            {
              value: "Intelligence",
              text: "Intelligence: The ability to acquire and use knowledge: thinking, reasoning and solving problems."
            },
            {
              value: "Creative",
              text: "Creative: The ability to use existing knowledge in a new situation, to make connections, explore potential outcomes, and generate new ideas."
            },
            {
              value: "Digital",
              text: "Digital: The awareness and application of existing and emerging digital technologies, capabilities, practices and strategies."
            },
            {
              value: "Emotional Intelligence",
              text: "Emotional Intelligence: The ability to identify your own emotions and those of others, harness and apply them to tasks, and regulate and manage them."
            },
            {
              value: "Vision",
              text: "Vision: The ability to anticipate future trends accurately by extrapolating existing trends and facts, and filling the gaps by thinking innovatively."
            },
            {
              value: "Experience",
              text: "Experience: The ability and skills to understand customer expectations, meet desired outcomes and create value."
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
          title: "What skills would you place emphasis on building/developing, at each of the following stages, for successful Finance professionals of the future?",
          hasSelectAll: true,
          //isRequired: true,
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
          title: "What talent and skill gaps do you foresee in Finance function in the coming years? How critical are these for future success?",
          hasSelectAll: true,
          //isRequired: true,
          hasOther: true,
          colCount: 2,
          choices: [
            "Data scientists",
            "Finance technology experts",
            "Audit, Assurance and Advisory",
            "Cross-geographic/cross-cultural experience",
            "Emerging reporting platforms e.g. Tableau",
            "Data mining and analytics",
            "Business Partnering",
            "Decision support"
          ]
        },
      ]
    },
    {
      questions: [{
          type: "text",
          name: "Name",
          title: "Name",
          isRequired: true
        },
        {
          type: "text",
          name: "Organization",
          title: "Organization",
          isRequired: true
        },
        {
          type: "text",
          name: "Title",
          title: "Title",
          isRequired: true
        },
        {
          type: "text",
          name: "Phone",
          title: "Phone",
          isRequired: true
        },
        {
          type: "text",
          name: "Email",
          title: "Email",
          isRequired: true
        }
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey
  .onComplete
  .add(function(result) {
    $.ajax({
        type: 'POST',
        url: '/',
        data: JSON.stringify(result.data, null, 3),
        success: function(data) { alert('data: ' + JSON.stringify(data)); },
        contentType: "application/json",
        dataType: 'json'
    });
    // document
    //   .querySelector('#surveyResult')
    //   .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
  });

$("#surveyElement").Survey({
  model: survey
});
