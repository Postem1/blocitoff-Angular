(function(){
    function TaskManager($firebaseArray){
        
        var tasksRef = firebase.database().ref().child("tasks");
        this.tasks = $firebaseArray(tasksRef);
        
        var TaskManager = {};
        
         //adds task from ng-model
        this.addTask = function() {
            var taskObj = 
                {   name: this.newTask,
                    completed: false,
                    active: true,
                    priority: this.priorityLevel,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                };
            this.tasks.$add(taskObj);
            this.newTask = "";
            this.priorityLevel = "";
        };
        
        //marking task as complete
        this.completeTask = function(task) {
            task.completed = true;
            this.tasks.$save(task);
        };
        
        //remove task from database
        this.removeTask = function(task) {
            this.tasks.$remove(task);
        };
        
        
        return TaskManager;
    }
    
    angular.module("blocitoff")
        .factory("TaskManager", ["$firebaseArray", TaskManager])
})();