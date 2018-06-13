/*
service
factory
provider
*/
angular.module('todo').factory('todoStorage', function(){
  var TODO_DATA = 'TODO_DATA'; // js에서 대문자로 정의하는 변수는 상수이다.
  var storage = {
    todos: [],

    // 함수명을 지정할 때 _가 먼저 시작되는 변수는 private 변수라고 생각하면 됨.
    // data를 localStorage에 저장할 때 사용하는 함수
    _saveToLocalStorage: function(data){
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },

    // localStorage에 저장한 data를 가져올 때 사용하는 함수
    _getFromLocalStorage: function(){
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },

    get : function () {
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },
    
    remove : function (todo) {
      // find todo index in todos
      var idx = storage.todos.findIndex(function (item){
        //alert("item : "+item.createdAt+"\ntodo : "+todo.createdAt);
        return item.createdAt === todo.createdAt;
      });
              
      // then, remove from todos
      if(idx > -1){
        storage.todos.splice(idx, 1);
        storage._saveToLocalStorage(storage.todos);
      }
    },
    
    add : function (newTodoTitle) {       
      storage.todos.push({
        title : newTodoTitle,
        completed : false,
        createdAt : Date.now()
      });

      storage._saveToLocalStorage(storage.todos);
    },

    update : function () {
      storage._saveToLocalStorage(storage.todos);
    }
  }
  return storage;
})

