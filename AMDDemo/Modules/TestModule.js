/**
 * Created by jingli on 16/11/8.
 */

define(function (require) {
    var add = require('AddModule');
    var multiply = require('MultiplyModule');

    return function (x, y) {
      return add(x, y) * multiply(x, y);
    };
});