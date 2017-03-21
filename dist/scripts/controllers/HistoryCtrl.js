(function(){
    function HistoryCtrl(TaskManager){
        this.taskManager = TaskManager;
    }
    
    angular.module('blocitoff')
        .controller('HistoryCtrl', ['TaskManager', HistoryCtrl])
})();