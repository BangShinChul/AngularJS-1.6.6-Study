angular.module('todo').controller('TodoCtrl', function($scope, todoStorage){
  //controller connecting with view
  
  $scope.todos = todoStorage.get();
  
  $scope.name = 'Chris';
          
  $scope.remove = function (todo) {
    todoStorage.remove(todo);
  };
          
  $scope.add = function (newTodoTitle) {
    //alert(newTodoTitle);
    todoStorage.add(newTodoTitle);
    // empty form
    $scope.newTodoTitle = "";
  };

  $scope.update = function () {
    todoStorage.update();
  };

});

