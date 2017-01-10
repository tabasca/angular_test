'use strict';

// Register `itemList` component, along with its associated controller and template
angular.
    module('itemList').
    component('itemList', {
        templateUrl: 'js/layout/item-list/item-list.html',
        controller: ['$http',
            function ItemListController($http) {

                var self = this;

                $http.get('json/items.json').then(function(response) {
                    self.items = response.data;
                    self.initial = self.items;
                });

            }
        ],
        bindings: {
            items: '=',
            initial: '=',
        }
    });
