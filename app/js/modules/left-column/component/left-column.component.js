'use strict';

// Register `leftColumn` component, along with its associated controller and template
angular.
    module('leftColumn').
        component('leftColumn', {
            templateUrl: 'js/layout/left-column/left-column.html',
            controller: ['$scope', 'orderByFilter', 'filterFilter',
                function LeftColumnController($scope, orderBy, filterFilter) {

                    var self = this;
                    self.propertyName = 'none';
                    self.reverse = true;

                    self.change = function () {
                        self.items = self.initial;
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
