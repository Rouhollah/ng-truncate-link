var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $scope.text =
    "By this directive you can truncate your link. just put your link on link of directive and enjoy"+
    " of it. the directive has a more ability. this paragraph truncated by number=50. please refer to its help.";
  $scope.text2 = "By this filter you can truncate your text. you can set a number and then you see"+
  " the characters as many as you have specified. this paragraph truncated by number=25. please refer to its help for syntax.";

});

app.directive("drTruncateLink", function () {
  return {
    restrict: "E",
    scope: {
      link: "@link",
      more: "@more",
      less: "@less",
      text: "=text",
      number: "@number",
      class: "@class",
      target:"@target"
    },
    template: `<a href="{{link}}"  class="{{class}}" target="{{target}}">{{truncate}}</a>
    <span style="cursor:pointer;" id="word" ng-click="checkCondition()">{{replace?more:less}}</span>`,
    link: function (scope, element, attr) {
      var res = scope.text.substring(scope.number, scope.text.length);
      scope.truncate = scope.text.replace(res, "...");
      scope.replace = true;
      scope.checkCondition = function () {
        if (scope.replace) {
          scope.showFullText();
        } else {
          scope.hideFullText();
        }
      }
      scope.showFullText = function () {
        scope.truncate = scope.text;
        scope.replace = false;
      }

      scope.hideFullText = function () {
        var org = scope.text.substring(scope.number, scope.text.length);
        scope.truncate = scope.text.replace(res, "...");
        scope.replace = true;
      }
    }
  };
});

app.filter("truncateText", function () {
  return function (text, number) {
    if (text!=null && text.trim()!="") {
      if (text.length > number) {
        var res = text.substring(number, text.length);
        var tr = text.replace(res, "...");
        text = tr;
        return text;
      }
    }
    return text;
  };
});
