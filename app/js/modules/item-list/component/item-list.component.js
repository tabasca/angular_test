'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
    module('itemList').
    component('itemList', {
        templateUrl: 'js/layout/item-list/item-list.html',
        controller: ['$http', '$scope',
            function ItemListController($http, $scope) {

                var self = this;

                $http.get('json/items.json').then(function(response) {
                    self.items = response.data;
                    self.initial = self.items;
                });

                $scope.checkedItem = null;

                $scope.checkItem = function (item) {
                    $scope.selected = ($scope.selected === item ? null : item);
                    $scope.$parent.$parent.item = ($scope.selected === item ? item : null);
                };
                
                $scope.isChecked = function (item) {
                    return $scope.selected === item;
                }

            }
        ],
        bindings: {
            items: '=',
            initial: '=',
            selected: '='
        }
    });
