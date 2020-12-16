import $ from '../core';

$.prototype.attr = function(name, value = '') {
	if (!name) return this;
	for (let i = 0; i < this.length; i++) {
		if (this[i].setAttribute) {
			if (!value) {
				return this[i].getAttribute(name)
			} else {
				this[i].setAttribute(name, value)
			}
		}
	}
	return this;
}

$.prototype.removeAttr = function(name) {
	if (!name) return this;
	for (let i = 0; i < this.length; i++) {
		if (this[i].removeAttribute) {
			this[i].removeAttribute(name)
		}
	}
	return this;
}

$.prototype.toggleAttr = function(name, value = '') {
	if (!name) return this;
	for (let i = 0; i < this.length; i++) {
		if (this[i].setAttribute || this[i].removeAttr) {
			if (this[i].hasAttribute(name)) {
				this[i].removeAttribute(name)
			} else{
				this[i].setAttribute(name, value)
			}
		}
	}
	return this;
}