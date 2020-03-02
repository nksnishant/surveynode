function doOnCurrentPageChanged(survey) {
    document
        .getElementById('pageSelector')
        .value = survey.currentPageNo;
    document
        .getElementById('surveyPrev')
        .style
        .display = !survey.isFirstPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyNext')
        .style
        .display = !survey.isLastPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyComplete')
        .style
        .display = survey.isLastPage
            ? "inline"
            : "none";
    document
        .getElementById('surveyProgress')
        .innerText = "Page " + (
    survey.currentPageNo + 1) + " of " + survey.visiblePageCount + ".";
    if (document.getElementById('surveyPageNo'))
        document
            .getElementById('surveyPageNo')
            .value = survey.currentPageNo;
    }
function setupPageSelector(survey) {
    var selector = document.getElementById('pageSelector');
    for (var i = 0; i < survey.visiblePages.length; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = "Page " + (
        i + 1);
        selector.add(option);
    }
}

Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "Software developer survey.",
    pages: [
        {
            questions: [
                {
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
    .add(function (result) {
      console.log(result);
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
        post('/', JSON.stringify(result.data, null, 3));
    });

survey.showTitle = false;

function onAngularComponentInit() {
    Survey
        .SurveyNG
        .render("surveyElement", {
            model: survey,
            onCurrentPageChanged: doOnCurrentPageChanged

        });
}

var HelloApp = ng
    .core
    .Component({selector: 'ng-app', template: '<div id="surveyContainer" class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div> '})
    .Class({
        constructor: function () {},
        ngOnInit: function () {
            onAngularComponentInit();
        }
    });
document.addEventListener('DOMContentLoaded', function () {
    ng
        .platformBrowserDynamic
        .bootstrap(HelloApp);
});

setupPageSelector(survey);
doOnCurrentPageChanged(survey);
survey.showTitle = false;



function post(path, params, method='post') {
  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
