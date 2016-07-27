angular.module('starter.controllers', [])

.controller('MusicCtrl', ['$scope', 'MediaManager', function($scope, MediaManager) {
    $scope.dynamicTrack = {};

    $scope.tracks = [
        {
            url: 'http://www.oh2o.org/wp-content/uploads/2016/07/ss2016_07_10.mp3',
            artist: 'Some artist',
            title: 'Some audio title'
        }
    ];

    $scope.stopPlayback = function() {
        MediaManager.stop();
    };
    
    $scope.playTrack = function(index) {
        $scope.dynamicTrack = $scope.tracks[index];

        $scope.togglePlayback = !$scope.togglePlayback;    
    };
}]);
