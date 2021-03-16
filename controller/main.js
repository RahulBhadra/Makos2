var app = angular.module("myApp", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "pages/role.html",
            controller: "dashCtrl"
        })
        .when('/ctiming', {
            templateUrl: 'pages/clinic_timing.html',
            controller: 'ctimingCtrl'
        })
        .when('/appointments', {
            templateUrl: 'pages/appointment.html',
            // controller: 'monthtargetCtrl'
        })

    .when('/followups', {
        templateUrl: 'pages/follow_ups.html',
        // controller: 'productinsCtrl'
    })

    .when('/patients', {
            templateUrl: 'pages/patient.html',
            // controller: 'deliveryrepCtrl'
        })
        .when('/logout', {
            templateUrl: 'model/logout.php'
        })
    .otherwise({
        template: "<h1>Error 404! Not Found </h1>"
    });
});

// *** Clinic Timing Controller Section ****
app.controller('ctimingCtrl', function($scope,$http) {

// Insertion function for role Section 
    $scope.ctimingsave = function() {
        console.log($scope.days);
        console.log($scope.mor_from);
        console.log($scope.mor_to);
        console.log($scope.even_from);
        console.log($scope.even_to);
        $http({
            url: "model/doc_time_set.php",
            method: "POST",
            data:{
              "days": $scope.days,
              "mor_from":$scope.mor_from,
              "mor_to":$scope.mor_to,
              "even_from":$scope.even_from,
              "even_to":$scope.even_to
            }
        }).then(
            function(data) {
                console.log(data.data);
                alert(data.data);
                $scope.viewtiming();
                $scope.days=null;
                $scope.mor_from=null;
                $scope.mor_to=null;
                $scope.even_from=null;
                $scope.even_to=null;
            },
            function() {
                alert("Error! Fetching Problem in sendData()");
            });
    };

// *** View the Role Data ***
$scope.viewtiming = function() {
        $http({
            url: "model/doc_view.php",
            method: "GET",
        }).then(
            function(data) {
                console.log(data.data);
                $scope.timingview=data.data;
            },
            function() {
                alert("Error! Fetching Problem in sendData()");
            });
    };
// *** Edit role section
$scope.roleedit = function(type,type1) {
    $http({
        url: "model/role_update.php",
        method: "POST",
        data:{
            "idd":type,
            "rolename":document.getElementById("myTable").rows[type1].cells[1].innerHTML
        }
    }).then(
        function(data) {
            console.log(data.data);
            alert(data.data);
            $scope.roleview();
        },
        function() {
            alert("Error! Fetching Problem in sendData()");
        });
};

// *** Delete Role section 
$scope.roledelete = function(type) {
    $http({
        url: "model/role_delete.php",
        method: "POST",
        data:{
            "idd":type
        }
    }).then(
        function(data) {
            console.log(data.data);
            alert(data.data);
            $scope.roleview();
        },
        function() {
            alert("Error! Fetching Problem in sendData()");
        });
 };

});
// *** End of Role Controller 