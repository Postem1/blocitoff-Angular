(function(){
    function MainCtrl($firebaseArray) {
        var tasksRef = firebase.database().ref().child("tasks");
        this.tasks = $firebaseArray(tasksRef);
        
        //used to maintain "this" context in async
        var self = this
        
        //expiration logic
        this.tasks.$loaded()
            .then(function(){
                self.tasks.forEach(function(task){
                    var currentTime = new Date();
                    var sevenDays = 604800000;
                    if (currentTime.getTime() - task.createdAt >= 604800000){
                        task.expired = true;
                    }
                    self.tasks.$save(task);
                }) 
            });
        
        //adds task from ng-model
        this.addTask = function(){
            var taskObj = 
                {   name: this.newTask,
                    completed: false,
                    expired: false,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                };
            this.tasks.$add(taskObj);
            this.newTask = "";
        }
        
        //marking task as complete
        this.completeTask = function(task){
            task.completed = true;
            this.tasks.$save(task);
        };
    }

    angular.module('blocitoff')
        .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();