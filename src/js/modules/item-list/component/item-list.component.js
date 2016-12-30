'use strict';

// Register `itemList` component, along with its associated controller and template
export default angular.
    module('itemList').
    component('itemList', {
        template:
        '<ul>' +
        '<li ng-repeat="item in $ctrl.items">' +
        '<span>{{item.name}}</span>' +
        '<p>{{items.flags}}</p>' +
        '</li>' +
        '</ul>',
        controller: function ItemListController() {
            this.items = [
                {
                    name: 'item',
                    flags: ['flower', 'heart', 'sun', 'flash']
                }, {
                    name: 'item',
                    flags: ['flower', 'heart', 'sun', 'flash']
                }, {
                    name: 'item',
                    flags: ['flower', 'heart', 'sun', 'flash']
                }
            ];
        }
    });
