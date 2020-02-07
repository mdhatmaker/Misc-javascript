document.writeln('hello, Satoshi\n');

function pr(xstr) {
    document.writeln(xstr);
}

function pa() {
    document.writeln(arr);
}


var arr = ["Hello", 45, true];
pr(arr);
document.writeln(arr[1]);
arr.push("World");
document.writeln(arr.length);
arr[3] = "Hello";
pr(arr);

arr.unshift(3);     // add as the first element
pr(arr);
xa = arr.shift();   // remove first element and return it
arr.push(3);        // add as the last element
pr(arr);
xa = arr.pop();     // remove last element and return it
pr(arr);

arr0 = [32, false, "js", 12, 56, 90];
pr(arr0);
pr(arr0.join(";"));

pr(arr0.slice(1,4));

// JavaScript's objects are equivalent to "dictionaries" in other languages: an
// unordered collection of key-value pairs.
var o1 = {key1: "Hello", key2: "World"};
pr(o1["key1"]);
pr(o1.key2);
o1.key3 = true;
pr(o1.key4);






