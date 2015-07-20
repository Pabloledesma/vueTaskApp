new Vue({
	el: '#demo',
	data: {
		name: 'foobar'
	},

	ready: function(){

		var that = this;

		setInterval(function(){
			that.name = 'Updated';
		}, 5000);
	}

	
})