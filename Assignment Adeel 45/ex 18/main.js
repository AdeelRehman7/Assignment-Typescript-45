var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placestovisit = ["tokyo", "pakistan", "america", "china", "japan"];
console.log("original order:", placestovisit);
console.log("alphabetical order:", __spreadArray([], placestovisit, true).sort());
console.log("original order after sorting:", placestovisit);
console.log("reverse alphabetic order:", __spreadArray([], placestovisit, true).sort().reverse());
console.log("original order after reverse sorting:", placestovisit);
placestovisit.reverse();
console.log("reversed order:", placestovisit);
placestovisit.reverse();
console.log("back to original order:", placestovisit);
placestovisit.sort();
console.log("sorted in alphabetical order:", placestovisit);
placestovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placestovisit);
