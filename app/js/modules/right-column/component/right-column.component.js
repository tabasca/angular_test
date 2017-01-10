'use strict';

// Register `rightColumn` component, along with its associated controller and template
angular.
    module('rightColumn').
        component('rightColumn', {
            templateUrl: 'js/layout/right-column/right-column.html',
            controller: ['$scope', 'filterFilter',
                function RightColumnController($scope, filterFilter) {

                    var self = this;

                    this.flags = ['sun', 'flower', 'flash', 'heart'];

                    this.checkedFlags = [];

                    self.sortBy = function (prop) {

                        if (self.checkedFlags.indexOf(prop) === -1) {
                            self.checkedFlags.push(prop);
                        } else {
                            self.checkedFlags.splice(self.checkedFlags.indexOf(prop), 1);
                        }

                        self.items = self.initial;
                        self.filteredItems = [];

                        self.checkedFlags.forEach(function (flag) {
                            self.filteredItems = filterFilter(self.items, flag);
                            self.items = self.filteredItems;
                        });

                    };

                }
            ]
        });
