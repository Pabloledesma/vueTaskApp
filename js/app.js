new Vue({
	el: '#demo',
	data: {
		
		columns: ['name', 'age'],

		people: [
			{name: 'John Doe', age: 20},
			{name: 'Pablo Ledesma', age: 32},
			{name: 'Agelica Lozano', age: 19},
			{name: 'Federico Aristisabal', age: 35},
			{name: 'Alam Brito', age: 40},
			{name: 'Tito Puentes', age: 21},
		],

		sortKey: '',

		reverse: false,

		search: ''
	}, 

	methods: {
		sortBy: function(key){
			this.reverse = (this.sortKey == key) ? ! this.reverse : false;
			this.sortKey = key;
		}
	}
	
});