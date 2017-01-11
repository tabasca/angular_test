'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
    module('itemList').
    component('itemList', {
        templateUrl: 'js/layout/item-list/item-list.html',
        controller: ['$scope',
            function ItemListController($scope) {

                var self = this;

                $scope.checkedItem = null;

                $scope.checkItem = function (item) {
                    self.selected = (self.selected === item ? null : item);
                };
                
                $scope.isChecked = function (item) {
                    return self.selected === item;
                }

            }
        ],
        bindings: {
            items: '<',
            selected: '='
        }
    });
