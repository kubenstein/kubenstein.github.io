angular.module("jakubniewczas").filter("nl2br",["$sce",function(r){return function(n,e){var e=e||!0,t=e?"<br />":"<br>",n=(n+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1"+t+"$2");return r.trustAsHtml(n)}}]);