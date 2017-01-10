'use strict';

angular.
    module('core').
        filter('groupBy', function() {

            var uniqueItems = function (data, key) {
                var result = new Array();
                console.log(result);

                for (var i = 0; i < data.length; i++) {
                    var value = data[i][key];

                    if (result.indexOf(value) == -1) {
                        result.push(value);
                    }

                }

                console.log(result);

                return result;
            };

            return function (collection, key) {
                console.log(key);
                console.log(collection);
                if (collection === null) return;
                return uniqueItems(collection, key);
            };

        });