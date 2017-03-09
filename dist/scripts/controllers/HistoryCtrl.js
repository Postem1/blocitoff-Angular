(function(){
    function HistoryCtrl($firebaseArray){
        var tasksRef = firebase.database().ref().child("tasks");
        this.tasks = $firebaseArray(tasksRef);
        
    }
    
    angular.module('blocitoff')
        .controller('HistoryCtrl', ['$firebaseArray', HistoryCtrl])
})();