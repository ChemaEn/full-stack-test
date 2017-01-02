var app = angular.module('app', []);

app.controller("mainController", function ($scope, $http) {
    $scope.Blog = {};
    $scope.today = new Date();

    function init() {
        var url = '/Blog/Get';
        $http({
            url: url,
            method: "GET"
        }).success(function (data) {
            var data = data.Data;
            $scope.Blog = JSON.parse(data[0]);
        }).error(function (error, status) {
        });


        $scope.Blog = [];

        $scope.post = {};
        $scope.post.Id = 1;
        $scope.post.Title = "Cualidades";
        $scope.post.Date = $scope.today;
        $scope.post.Content = "Las cualidades mejor que me describen tengo son las ganas de aprender más para desarrollarme de cara a profesión, la facilidad para trabajar en grupo y las ganas de resolver problemas y resolverlos bien.";
        $scope.Blog.push($scope.post);
        
        $scope.post1 = {};
        $scope.post1.Id = 2;
        $scope.post1.Title = "Puntos fuertes";
        $scope.post1.Date = $scope.today;
        $scope.post1.Content = "Mis puntos fuertes son que no paro hasta conseguir solucionar el problema que tenga que resolver y las ganas que tengo de crecer profesionalmente.";
        $scope.Blog.push($scope.post1);

        $scope.post2 = {};
        $scope.post2.Id = 1;
        $scope.post2.Title = "Puntos débiles";
        $scope.post2.Date = $scope.today;
        $scope.post2.Content = "Mis puntos débiles son que puedo llegar a ser algo cabezota, si tengo una idea, la intento realizar sea como sea.";
        $scope.Blog.push($scope.post2);
    }

    init();

    

});

