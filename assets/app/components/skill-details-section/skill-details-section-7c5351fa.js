angular.module("jakubniewczas").directive("skillDetailsSection",["$rootScope","$http","$translate","$location","$routeParams","$filter",function(t,e,o,i,n,s){return{scope:{},templateUrl:"/assets/app/components/skill-details-section/skill-details-section.tpl-3daa4a60.html",controller:["$scope","$rootScope",function(t,l){function a(){t.skillId=n.id,l.$on("$translateChangeSuccess",function(){c()}),c(),u()}function c(){e.get("/api/v1/skills/"+o.use()+".json").then(function(e){item=r(e.data,n.id),item||i.path("/"),t.skill=item})}function u(){"#/"===l.previousHash&&setTimeout(function(){document.querySelector(".about-me-section").scrollIntoView({behavior:"smooth"})},300)}function r(t,e){return s("filter")(t,{id:e},!0)[0]}t.goBack=function(){i.path("/")},a()}]}}]);