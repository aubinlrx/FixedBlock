var FixedMenu = function(div, menuClass) {
	var self = this;
	this.menu = null;
	this.menuClass = null;
	this.menuOffsetTop = null;
	this.spacer = null;
	this.parentEl = null;
	this.space = 208;

	this.__construct__ = function() {
		self.menu = document.getElementById(div);
		self.menuClass = menuClass;
		self.spacer = document.getElementById('spacer');
		self.parentEl = self.menu.parentNode;
		self.menuOffsetTop = self.getOffsetTop(self.menu);
		self.render();
	}

	this.scroll = function() {
		if(self.menu.className != self.menuClass && window.pageYOffset > self.getOffsetTop(self.menu)) {
			self.menu.className = self.menuClass;
			self.spacer = document.createElement('div');
			self.spacer.id = "spacer";
			self.spacer.style.height = self.menu.offsetHeight+"px";
			self.parentEl.insertBefore(self.spacer, self.menu);

		} else if(self.menu.className == self.menuClass && window.pageYOffset < self.getOffsetTop(self.spacer)){
			self.menu.className = "";
			self.parentEl.removeChild(self.spacer);
		}
	}

	this.getOffsetTop = function(el) {
		var test = el.offsetTop + ( el.offsetParent ? self.getOffsetTop(el.offsetParent) : 0 );
		return test;
	}

	this.render = function(e) {
		if (window.addEventListener){
        	window.addEventListener('scroll', self.scroll, false);
		} else if(window.attachEvent) {
			window.attachEvent('onscroll', self.scroll);
		}
	}

	this.__construct__();

}