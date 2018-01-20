(function(angular) {
  const app = angular.module("truncateLinkModule", []);

  app.directive("ngTruncateLink", function() {

    var template1='<a href="{{link}}"  class="{{class}}" target="{{target}}">{{truncate}}</a>'+
    '<span style="cursor:pointer;" class="wordForTruncate" ng-click="checkCondition()">{{replace?more:less}}</span>';
    var template2='<span  class="{{class}}" >{{truncate}}</span>'+
    '<span style="cursor:pointer;" class="wordForTruncate" ng-click="checkCondition()">{{replace?more:less}}</span>';

    return {
      restrict: "E",
      scope: {
        link: "@link",
        more: "@more",
        less: "@less",
        text: "=",
        number: "@number",
        class: "@class",
        target:"@target"
      },
      template: function(element, attr) {
        if (attr.link) {
          return template1;
        } else {
          return template2;
        }
    },
      link: function(scope, element, attr) {
        var res = scope.text.substring(scope.number, scope.text.length);
        scope.truncate = scope.text.replace(res, "... ");
        scope.replace = true;
        scope.checkCondition = function() {
          if (scope.replace) {
            scope.showFullText();
          } else {
            scope.hideFullText();
          }
        };
        scope.showFullText = function() {
          scope.truncate = scope.text;
          scope.replace = false;
        };

        scope.hideFullText = function() {
          var org = scope.text.substring(scope.number, scope.text.length);
          scope.truncate = scope.text.replace(res, "... ");
          scope.replace = true;
        };
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
