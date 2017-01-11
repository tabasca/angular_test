'use strict';

// Register `mainView` component, along with its associated controller and template
angular.
module('mainView').
component('mainView', {
    templateUrl: 'js/layout/main-view/main-view.html',
    controller: [function MainViewController() {
        var self = this;

        self.activeItem = null;

    }]
});
