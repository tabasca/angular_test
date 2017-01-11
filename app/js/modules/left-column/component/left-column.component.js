'use strict';

// Register `leftColumn` component, along with its associated controller and template
angular.
    module('leftColumn').
        component('leftColumn', {
            templateUrl: 'js/layout/left-column/left-column.html',
            bindings: {
                selected: '='
            },
            controller: ['$http', 'orderByFilter', 'filterFilter',
                function LeftColumnController($http, orderBy, filterFilter) {

                    var self = this;
                    self.propertyName = 'none';
                    self.reverse = true;

                    $http.get('json/surnames.json').then(function(response) {
                        self.items = response.data;
                        self.initialItems = self.items;
                    });

                    self.change = function () {
                        self.items = self.initialItems;
                        self.filteredItems = [];

                        self.filteredItems = filterFilter(self.items, self.searchValue);
                        self.items = self.filteredItems;
                    };

                    self.sortBy = function (prop) {
                        self.reverse = (prop !== null && self.propertyName === prop)
                            ? !self.reverse : false;
                        self.propertyName = prop;

                        self.items = orderBy(self.items, prop, self.reverse);
                    };

                }
            ]
        });
