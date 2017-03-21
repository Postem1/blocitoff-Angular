(function() {
    function MainCtrl(TaskManager) {
        this.taskManager = TaskManager;
        
        this.addTask = function(){
            TaskManager.addTask(this.newTask, this.priorityLevel);
        }
        
        //marking task as complete
        this.completeTask = function(task) {
            TaskManager.completeTask(task)
        };
        
        //remove task from database
        this.removeTask = function(task) {
            TaskManager.removeTask(task);
        };
    }
    
    angular.module('blocitoff')
        .controller('MainCtrl', ['TaskManager', MainCtrl]);
})();