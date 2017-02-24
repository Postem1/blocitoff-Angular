(function(){
    function MainCtrl($firebaseArray) {
        var tasksRef = firebase.database().ref().child("tasks");
        this.tasks = $firebaseArray(tasksRef);
    }

    angular.module('blocitoff')
        .controller('MainCtrl', ['$firebaseArray', MainCtrl]);
})();