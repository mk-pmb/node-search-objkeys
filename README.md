-*- coding: utf-8, tab-width: 2 -*-

searchObjKeys
=============

```javascript
function searchObjKeys(obj, keyWant, maxDepth)
```
* `obj`: The object in which to search for keys
* `keyWant`: The name (string) or pattern (regexp) to find in key names.
* `maxDepth`: (optional) If a number, limit on how deep to dive.
You can use `true` as a shorthand for `Number.POSITIVE_INFINITY`.
If neither a number nor `true`, `defaultMaxDepth` is used.
