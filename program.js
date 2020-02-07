document.writeln('Hello, world!');
for (i=0; i<5; i++) {
	try {
		document.writeln(5/i);
	}
	catch (ex) {
		document.writeln("Error: " + ex);
	}
}

document.writeln(false ? "T" : "F");

//a = 4;
try {
	document.writeln(a === 15);
}
catch (ex) {
	document.writeln("!!! " + ex);
}
document.writeln(typeof a);

document.writeln(!true);

function add(a,b)
{
	return a+b;
}

document.writeln(add(5,2));

var empty_object = {};

var stooge = {
	"first-name": "Jerome",
	"last-name": "Howard"
};

var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2004-09-22 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2004-09-23 10:42",
		city: "Los Angeles"
	}
};
flight.status = 'overdue';

document.writeln(flight.departure.time);
document.writeln(stooge["first-name"]);
document.writeln(flight.status);

var middle = stooge["middle-name"] || "(none)";
document.writeln(middle);
var x = stooge;
x.nickname = "Curly";

var a = {}, b = {}, c = {};
a.name = "A";
document.writeln(b.name);
a = b = c = {};
a.name = "A";
document.writeln(b.name);

for (name in flight) {
	document.writeln(name + ":" + flight[name]);
}

document.writeln("===================================== " + Date());
var xstr = "This-is-a-string";
document.writeln(xstr.charAt(0));
var astr;
document.writeln(astr);

document.writeln(xstr.charAt(2));
document.writeln(xstr.charAt(6));



var myArray = ["Hello", 45, true];
document.writeln(myArray[1]);
document.writeln(myArray);
myArray.push("World");
document.writeln(myArray.length);

var arr0 = [32,false,"js",12,56,90];
arr0.join(";")	// join all elements of array with semicolon
document.writeln(arr0);
document.writeln(arr0.slice(1,4));

var myObj = {key1: "Hello", key2: "World"};

var myObj2 = {myKey: "myValue", "my other key": 4};

