import $ from '../core';

$.prototype.animateOverTome = function(dur, cb, fin) {
	let timeStart;
	function _animateOverTome(time) {
		if (!timeStart) timeStart = time;
		let timeElapsed = time - timeStart;
		let complection = Math.min(timeElapsed / dur, 1);
		cb(complection);
		if (timeElapsed < dur) {
			requestAnimationFrame(_animateOverTome)
		} else {
			if (typeof fin === 'function') fin();
		}
	}
	return _animateOverTome;
};

$.prototype._fadeInThis = function ( self, dur, display, fin) {
	self.style.display = display || 'block';
	const _fadeIn = (complection) => {
		self.style.opacity = complection;
	}
	const ani = this.animateOverTome(dur, _fadeIn, fin);
	requestAnimationFrame(ani);
}

$.prototype._fadeOutThis = function ( self, dur, fin) {
	const _fadeOut = (complection) => {
		self.style.opacity = 1 - complection;
		if (complection === 1) self.style.display = 'none';
	}
	const ani = this.animateOverTome(dur, _fadeOut, fin);
	requestAnimationFrame(ani);
}

$.prototype.fadeIn = function (dur, display, fin) {
	for (let i = 0; i < this.length; i++) {
		this._fadeInThis(this[i], dur, display, fin)
	}
	return this;
}

$.prototype.fadeOut = function (dur, fin) {
	for (let i = 0; i < this.length; i++) {
		this._fadeOutThis(this[i], dur, fin)
	}
	return this;
}

$.prototype.fadeToggle = function (dur, display, fin) {
	for (let i = 0; i < this.length; i++) {
		if (window.getComputedStyle(this[i]).display === 'none') {
			this._fadeInThis(this[i], dur, display, fin)
		} else {
			this._fadeOutThis(this[i], dur, fin)
		}
	}
	return this;
}