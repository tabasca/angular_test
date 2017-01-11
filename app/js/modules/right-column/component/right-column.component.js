'use strict';

// Register `rightColumn` component, along with its associated controller and template
angular.
    module('rightColumn').
        component('rightColumn', {
            templateUrl: 'js/layout/right-column/right-column.html',
            bindings: {
                selected: '='
            },
            controller: ['$http', 'filterFilter',
                function RightColumnController($http, filterFilter) {

                    var self = this;

                    this.flags = ['sun', 'flower', 'flash', 'heart'];

                    this.checkedFlags = [];

                    $http.get('json/names.json').then(function(response) {
                        self.items = response.data;
                        self.originalItems = self.items;
                    });

                    self.sortBy = function (prop) {

                        self.items = self.originalItems;

                        if (self.checkedFlags.indexOf(prop) === -1) {
                            self.checkedFlags.push(prop);
                        } else {
                            self.checkedFlags.splice(self.checkedFlags.indexOf(prop), 1);
                        }

                        self.filteredItems = [];

                        self.checkedFlags.forEach(function (flag) {
                            self.filteredItems = filterFilter(self.items, flag);
                            self.items = self.filteredItems;
                        });

                    };

                }
            ]
        });
