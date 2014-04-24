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
//  Searching for "animal" to depth undefined:
//  [ [ 'pets', 'Fred', 'animal' ],
//    [ 'pets', 'Ferd', 'animal' ],
//    [ 'pets', 'Scot', 'animal' ] ]

demo('cowbell');
//  Searching for "cowbell" to depth undefined:
//  [ [ 'pets', 'Scot', 'cowbell' ] ]

demo(/^[a-z]/);
//  Searching for /^[a-z]/ to depth undefined:
//  [ [ 'pets' ],
//    [ 'houses' ],
//    [ 'pets', 'Fred', 'animal' ],
//    [ 'pets', 'Ferd', 'animal' ],
//    [ 'pets', 'Scot', 'animal' ],
//    [ 'pets', 'Scot', 'cowbell' ] ]

demo(/^[a-z]/, 1);
//  Searching for /^[a-z]/ to depth 1:
//  [ [ 'pets' ], [ 'houses' ] ]

demo(/^[A-Z]/);
//  Searching for /^[A-Z]/ to depth undefined:
//  [ [ 'pets', 'Fred' ], [ 'pets', 'Ferd' ], [ 'pets', 'Scot' ] ]

demo(/[dl]$/);
//  Searching for /[dl]$/ to depth undefined:
//  [ [ 'pets', 'Fred' ],
//    [ 'pets', 'Ferd' ],
//    [ 'pets', 'Fred', 'animal' ],
//    [ 'pets', 'Ferd', 'animal' ],
//    [ 'pets', 'Scot', 'animal' ],
//    [ 'pets', 'Scot', 'cowbell' ] ]
