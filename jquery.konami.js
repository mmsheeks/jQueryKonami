(function ( $ ) {

	var konamiCute = {
	    vk_up: "38",
	    vk_down: "40",
	    vk_left: "37",
	    vk_right: "39",
	    vk_a: "65",
	    vk_b: "66",
	    keys: [],
	    konami: "",

	    init: function(opts) {
	    	if(opts) {
	    		for (var name in opts) { konamiCute[name] = opts[name]}
	    	}
	    	konamiCute.konami = konamiCute.vk_up + "," + konamiCute.vk_up + "," + konamiCute.vk_down + "," + konamiCute.vk_down + "," + konamiCute.vk_left + "," + konamiCute.vk_right + "," + konamiCute.vk_left + "," + konamiCute.vk_right + "," + konamiCute.vk_b + "," + konamiCute.vk_a;

	    	this.on("keydown", function(e){
		        konamiCute.keys.push(e.which);
		        if (konamiCute.keys.toString().indexOf(konamiCute.konami) >= 0) {
		            konamiCute.onSuccess();
		            konamiCute.keys = [];
		        };
		    });
	    },

	    onSuccess: function() {
	    	alert('yay');
	    }
	    
	}
	
	$.fn.konami = function(options) {
		if(!options) {
			return konamiCute.init.apply(this);
		} else if ( typeof options === 'object' ) {
			return konamiCute.init.apply(this,options);
		} else {
			return false;
		}

	};

}) ( jQuery );
