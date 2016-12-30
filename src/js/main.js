'use strict';

import itemList from './modules/item-list/item-list.module';

// Define the `testApp` module
var myapp = angular.module('testApp', [
    'ngRoute',
    itemList
]);