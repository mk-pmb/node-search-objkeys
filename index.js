/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, node: true */
'use strict';

var sok, hasOwn = Function.call.bind(Object.prototype.hasOwnProperty),
  posInf = Number.POSITIVE_INFINITY;

sok = function searchObjKeys(obj, keyWant, maxDepth) {
  var results = [];
  if ('object' !== typeof obj) { return results; }
  if ('number' !== typeof maxDepth) {
    maxDepth = (maxDepth === true ? sok.defaultMaxDepth : posInf);
  }
  if ('string' === typeof keyWant) {
    if (hasOwn(obj, keyWant)) { results[results.length] = [keyWant]; }
  }
  if (keyWant instanceof RegExp) {
    Object.keys(obj).forEach(function (ownKey) {
      if (keyWant.exec(ownKey)) { results[results.length] = [ownKey]; }
    });
  }
  if (maxDepth < 1) { return results; }
  maxDepth -= 1;
  Object.keys(obj).forEach(function (subKey) {
    sok(obj[subKey], keyWant, maxDepth).forEach(function (paths) {
      results[results.length] = [subKey].concat(paths);
    });
  });
  return results;
};

sok.defaultMaxDepth = 32;


module.exports = sok;
