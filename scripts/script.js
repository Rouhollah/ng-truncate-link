var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $scope.text =
    "By listening to this event, you can remove event listeners that might cause memory leaks." +
    " Listeners registered to scopes and elements are automatically cleaned up when they are destroyed," +
    " but if you registered a listener on a service, or registered a listener on a DOM node that isn't being deleted," +
    " you'll have to clean it up yourself or you risk introducing a memory leak.";
  $scope.text2 = "این همه درد سر فایده نداره دیگه تو ، تو دلم جایی نداری";
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
      class: "@class"
    },
    template: `<a href="{{link}}"  class="{{class}}">{{truncate}}</a>
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
    if (text.length > number) {
      var res = text.substring(number, text.length);
      var tr = text.replace(res, "...");
      text = tr;
      return text;
    }
  };
});
