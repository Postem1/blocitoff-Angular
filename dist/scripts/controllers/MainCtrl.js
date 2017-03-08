(function(){
    function MainCtrl($firebaseArray) {
        var tasksRef = firebase.database().ref().child("tasks");
        this.tasks = $firebaseArray(tasksRef);
        
        var self = this
        
        this.tasks.$loaded()
            .then(function(){
                self.tasks.forEach(function(task){
                    var currentTime = new Date();
                    console.log("current time is:" + currentTime);
                    console.log("task created at:" + task.createdAt);
                    console.log("current time getTime is:" + currentTime.getTime())
                }) 
            })
        
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
    }

    angular.module('blocitoff')
        .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();