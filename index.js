var arr=[
	{name:'Puka',type:'cat',toys:5},
	{name:'Punch',type:'cat',toys:9},
	{name:'Nick',type:'dog',toys:7},
	{name:'Champ',type:'dog',toys:4}
	];

/* I really hate writing console.log() over and over, cl() is much quicker  :)  */	
function cl(input){
	console.log(input);
}
	
//////////////////////////////////////////////////////////

var names = arr.map(function(e){
	return e.name;
});

/* Below we are using reduce to mimic the map function above */
var names2 = arr.reduce(function(names,e){
	names.push(e.name);
	return names;
},[]);
//////////////////////////////////////////////////////////

var cats = arr.filter(function(e){
	return e.type=='cat';
});

/* Below we are using reduce to mimic the filter function above */
var cats2 = arr.reduce(function(felines,e){
	if(e.type=='cat'){
		felines.push(e);
	}
	return felines;
},[]);

//////////////////////////////////////////////////////////

var catNames = arr.filter(function(e){
	return e.type=='cat';
}).map(function(cats){
	return cats.name;
});

/* Below we are chaining two separate reduce functions to mimic the filter/map function above*/

var catNames2 = arr.reduce(function(felines,e){
	if(e.type=='cat'){
		felines.push(e);
	}
	return felines;
},[]).reduce(function(names,e){
	names.push(e.name);
	return names;
},[]);

//////////////////////////////////////////////////////////

/* This is how you can use reduce to perfrom a mathematcial opeartion, in this case we are showing the total number of toys from all of our pets  */
var allToys = arr.reduce(function(total,e){
	return e.toys+total;
},0);

cl('Map:');
cl(names);
cl('Reduce:');
cl(names2);
cl('-----------------------');
cl('Filter:');
cl(cats);
cl('Reduce:');
cl(cats2);
cl('-----------------------');
cl('Filter chained to map:')
cl(catNames);
cl('Reduce chained to reduce:')
cl(catNames2);
cl('-----------------------');
cl('Reduce:');
cl(allToys);


