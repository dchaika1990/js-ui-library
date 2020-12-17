import $ from '../core';

$.prototype.each = function (cb) {
	for (let i = 0; i < this.length; i++) {
		cb();
	}
}