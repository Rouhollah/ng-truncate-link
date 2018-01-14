 
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$compile) {
    // $scope.number=20;
    $scope.text="By listening to this event, you can remove event listeners that might cause memory leaks."+
    " Listeners registered to scopes and elements are automatically cleaned up when they are destroyed,"+
    " but if you registered a listener on a service, or registered a listener on a DOM node that isn't being deleted,"+
    " you'll have to clean it up yourself or you risk introducing a memory leak.";
    // $scope.link=null;

    //     var res = $scope.text.substring( $scope.number, $scope.text.length);
    //     var tempText1="...";
    //     var tr=$scope.text.replace(res,"...");
    //     document.getElementById("myTruncated").remove();
    //     var tagA=document.createElement("a");
    //     tagA.setAttribute('id', 'newA');
    //     tagA.setAttribute('href', 'about.html');
    //     tagA.text=tr;
    //     console.log(tagA);

    //     var tag_I_Show=document.createElement("i");
    //     tag_I_Show.setAttribute('id', 'showIt');
    //     tag_I_Show.onclick=showFullText;
    //     tag_I_Show.innerHTML="show";
    //     console.log(tag_I_Show);

    //     var tag_I_Hide=document.createElement("i");
    //     tag_I_Hide.setAttribute('id', 'HideIt');
    //     tag_I_Hide.onclick=hideFullText;
    //     tag_I_Hide.innerHTML="hide";
    //     console.log(tag_I_Hide);

    //     document.body.appendChild(tagA);
    //     document.body.appendChild(tag_I_Show);
       
    // function showFullText(){
    //     console.log("showFullText");
    //     document.getElementById("newA").innerHTML=$scope.text ;
    //     document.getElementById("showIt").remove();
    //     document.body.appendChild(tag_I_Hide);
    // }
    // function hideFullText(){
    //     console.log("hideFullText");
    //     var res = $scope.text.substring( $scope.number, $scope.text.length);
    //     var tempText1="...";
    //     var tr=$scope.text.replace(res,"...");
    //     document.getElementById("newA").innerHTML=tr;
    //     document.getElementById("HideIt").remove();
    //     document.body.appendChild(tag_I_Show);
    // }
});

app.directive("drTruncateLink", function() {
    return {
        restrict : "E",
        template : `<a id="@id" href="=link"  class="@class"></a>`,
        scope:{
            link:'=',
            id:'@',
            class:'@',
            text:'=',
            number1:'='
        },
        link:function(scope,element,attr){
            debugger;
            console.log(element);
            var res = element.text.substring( attr.number1, element.text.length);
            var tempText1="...";
            var tr=text.replace(res,"...");
            document.getElementById("myId").remove();
            var tagA=document.createElement("a");
            tagA.setAttribute('id', 'newA');
            tagA.setAttribute('href', 'about.html');
            tagA.text=tr;
            console.log(tagA);
    
            var tag_I_Show=document.createElement("i");
            tag_I_Show.setAttribute('id', 'showIt');
            tag_I_Show.onclick=showFullText;
            tag_I_Show.innerHTML="show";
            console.log(tag_I_Show);
    
            var tag_I_Hide=document.createElement("i");
            tag_I_Hide.setAttribute('id', 'HideIt');
            tag_I_Hide.onclick=hideFullText;
            tag_I_Hide.innerHTML="hide";
            console.log(tag_I_Hide);
    
            document.body.appendChild(tagA);
            document.body.appendChild(tag_I_Show);
           
        function showFullText(){
            console.log("showFullText");
            document.getElementById("newA").innerHTML=$scope.text ;
            document.getElementById("showIt").remove();
            document.body.appendChild(tag_I_Hide);
        }
        function hideFullText(){
            console.log("hideFullText");
            var res = $scope.text.substring( $scope.number, $scope.text.length);
            var tempText1="...";
            var tr=$scope.text.replace(res,"...");
            document.getElementById("newA").innerHTML=tr;
            document.getElementById("HideIt").remove();
            document.body.appendChild(tag_I_Show);
        }
        }
    };
});

app.filter("truncateLink", function () {
    return function (text,number,show,hide) {
        $scope.number=document.getElementById("input").value
        if (text.length > number) {
            var res = text.substring(number, text.length);
           // var tr = link.replace(res, "...");
            if (show && hide) {
                 $scope.truncated = text.replace(res, " " + show);
            }

            return $scope.truncated;
        }
        return text;
    }
});