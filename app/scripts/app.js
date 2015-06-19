'use strict';

var app = angular.module('sheepsheadApp', []);

app.factory('uuid', function() {
  return window.uuid;
});

