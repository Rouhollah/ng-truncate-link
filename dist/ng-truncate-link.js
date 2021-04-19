(function(angular) {
  const app = angular.module("truncateLinkModule", []);

  app.directive("ngTruncateLink", function ($compile) {
    return {
        restrict:"E",
        scope: {
            link: "@link",
            more: "@more",
            less: "@less",
            text: "=",
            number: "@number",
            class: "@class",
            target: "@target"
        },
        link: function (scope, element) {
            scope.checkCondition = function () {
                if (scope.replace) {
                    scope.showFullText();
                } else {
                    scope.hideFullText();
                }
            };
            scope.showFullText = function () {
                scope.truncate = scope.text;
                scope.replace = false;
            };

            scope.hideFullText = function () {
                var result = scope.text.substring(scope.number, scope.text.length);
                scope.truncate = scope.text.replace(result, "... ");
                scope.replace = true;
            };
            if (scope.link) {
                if (scope.text && scope.text.length >parseInt(scope.number)) {
                    var res1 = scope.text.substring(scope.number, scope.text.length);
                    scope.truncate = scope.text.replace(res1, "... ");
                    scope.replace = true;
                    scope.currentTemplate =
                        `<a href="{{ link }}"  class="{{ class }}" target="{{ target }}"> {{ truncate }} </a>
                        <span  class="ngToggleText" ng-click="checkCondition()"  >{{ replace ? more : less}}</span>`;
                    let linkFn = $compile(scope.currentTemplate);
                    let content = linkFn(scope);
                    element.append(content);
                } else {
                    scope.truncate = scope.text;
                    scope.currentTemplate =
                        `<a href="{{link}}"  class="{{class}}" target="{{target}}">{{ truncate }} </a>`;
                    let linkFn = $compile(scope.currentTemplate);
                    let content = linkFn(scope);
                    element.append(content);
                }
            }
            else {
                if (scope.text && scope.text.length > parseInt(scope.number)) {
                    var res = scope.text.substring(scope.number, scope.text.length);
                    scope.truncate = scope.text.replace(res, "... ");
                    scope.replace = true;
                    scope.currentTemplate =
                        `<span  class="{{class}}" >{{truncate}}</span>
                        <span  class="ngToggleText" ng-click="checkCondition()">{{ replace ? more : less }}</span>`;
                    let linkFn = $compile(scope.currentTemplate);
                    let content = linkFn(scope);
                    element.append(content);
                } else {
                    scope.truncate = scope.text;
                    scope.currentTemplate =
                        `<span  class="{{ class }}" >{{ truncate }}</span> </a>`;
                    let linkFn = $compile(scope.currentTemplate);
                    let content = linkFn(scope);
                    element.append(content);
                }
            }

        }
    };
});

  app.filter("truncateText", function() {
    return function(text, number) {
      if (text != null && text.trim() != "") {
        if (text.length > number) {
          var res = text.substring(number, text.length);
          var tr = text.replace(res, "... ");
          text = tr;
          return text;
        }
      }
      return text;
    };
  });
  
})(window.angular);
