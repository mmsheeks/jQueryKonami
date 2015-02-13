(function ( $ ) {

	var konamiClass = {

		success: 9,  
	    last: 0,
	    step: 0,
	    pressed: 0,
	    vk_up: 38,
	    vk_down: 40,
	    vk_left: 37,
	    vk_right: 39,
	    vk_a: 65,
	    vk_b: 66,

		init: function(opts) {
			if(opts) {
				konamiClass.onSuccess = opts.onSuccess;
			}
	    	$(document).on("keyup", function (e) {
			    konamiClass.detect(e.which);
			});
	    },
	    
	    detect: function(k) {
	    	konamiClass.pressed = k;
	        if(k == konamiClass.vk_up) {
	        	konamiClass.onVkUp(k);
	        }
	        if(k == konamiClass.vk_down) {
	        	konamiClass.onVkDown(k);
	        }
	        if(k == konamiClass.vk_left) {
	        	konamiClass.onVkLeft(k);
	        }
	        if(k == konamiClass.vk_right) {
	        	konamiClass.onVkRight(k);
	        }
	        if(k == konamiClass.vk_b) {
	        	konamiClass.onVkB(k);
	        }
	        if(k == konamiClass.vk_a) {
	        	konamiClass.onVkA(k);
	        }
	    },

		onVkUp: function(k) {
            if(konamiClass.step == 0) {
                konamiClass.good(k);
            }
            else if(konamiClass.step > 1) {
                konamiClass.reset();
            }
            else {
                if(konamiClass.last == konamiClass.vk_up) {
                    konamiClass.good(k)
                }
            }
		},

		onVkDown: function(k){
			if(konamiClass.step < 2) {
				konamiClass.reset();
			}
			else if(konamiClass.step == 2 || konamiClass.step == 3) {
				konamiClass.good(k);
			} else {
				konamiClass.reset();
			}
		},

		onVkLeft: function(k) {
			if(konamiClass.step == 4 || konamiClass.step == 6) {
				konamiClass.good(k);
			} else {
				konamiClass.reset();
			}
		},

		onVkRight: function(k) {
			if(konamiClass.step == 5 || konamiClass.step == 7) {
				konamiClass.good(k);
			} else {
				konamiClass.reset();
			}
		},

		onVkA: function(k) {
			if(konamiClass.step == 9) {
				konamiClass.good(k);
			} else {
				konamiClass.reset();
			}
		},

		onVkB: function(k) {
			if(konamiClass.step == 8) {
				konamiClass.good(k);
			} else {
				konamiClass.reset();
			}
		},
	    
	    reset: function() {
	        konamiClass.step = 0;
	        konamiClass.pressed = 0;
	        konamiClass.last = 0;
	    },
	        
	    good: function() {
	        if(konamiClass.step == konamiClass.success) {
	            konamiClass.onSuccess();
	            konamiClass.reset();
	        }
	        konamiClass.last = konamiClass.pressed;
	        konamiClass.step++;
	        return;
	    },

	    onSuccess: function() {
	    	alert('Konami! Yay!');
	    }
	};
	
	$.fn.konami = function(options) {
		if(!options) {
			return konamiClass.init.apply(this);
		} else if ( typeof options === 'object' ) {
			return konamiClass.init(options);
		} else {
			return false;
		}

	};

}) ( jQuery );
