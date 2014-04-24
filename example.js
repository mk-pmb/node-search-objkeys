/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';

var searchObjKeys = require('search-objkeys'),
  nestedData = {
    pets: {
      Fred: { animal: 'cat' },
      Ferd: { animal: 'horse' },
      Scot: { animal: 'cow', cowbell: 'needs more' }
    },
    houses: [ 'a dog house' ]
  };


function demo(keyWant, maxDepth) {
  var found;
  console.log('Searching for ' + (keyWant instanceof RegExp ? String(keyWant)
    : JSON.stringify(keyWant)) + ' to depth ' + String(maxDepth) + ':');
  found = searchObjKeys(nestedData, keyWant, maxDepth);
  console.dir(found);
  console.log('');
}


demo('animal');

demo('cowbell');

demo(/^[a-z]/);

demo(/^[a-z]/, 1);

demo(/^[A-Z]/);

demo(/[dl]$/);
