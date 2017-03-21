(function() {
    function TaskManager($firebaseArray) {
        tasksRef = firebase.database().ref().child("tasks");
        
         var tasks = $firebaseArray(tasksRef);

        //expiration logic 
        tasks.$loaded()
        .then(function() {
            tasks.forEach(function(task) {
                var currentTime = new Date();
                var sevenDays = 604800000;
                if (currentTime.getTime() - task.createdAt >= sevenDays) {
                    task.active = false;
                }
                tasks.$save(task);
            }) 
        });
        
        var TaskManager = {};
        
        TaskManager.tasks = tasks;
        
        //adds task from ng-model
        TaskManager.addTask = function(taskName, priority) {
            var taskObj = 
                {   name: taskName,
                    completed: false,
                    active: true,
                    priority: priority,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                };
            tasks.$add(taskObj);
            this.newTask = "";
            this.priorityLevel = "";
        };
        
        //marking task as complete
        TaskManager.completeTask = function(task) {
            task.completed = true;
            tasks.$save(task);
        };
        
        //remove task from database
        TaskManager.removeTask = function(task) {
            tasks.$remove(task);
        };
        
        return TaskManager;
    }
    
    angular.module("blocitoff")
        .factory("TaskManager", ["$firebaseArray", TaskManager])
})();