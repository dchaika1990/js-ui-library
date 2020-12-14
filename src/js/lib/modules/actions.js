import $ from '../core';

$.prototype.html = function(content) {
	for (let i = 0; i < this.length; i++) {
		if (content) {
			this[i].innerHTML = content;
		} else {
			return this[i].innerHTML;
		}
	}
	return this;
};

$.prototype.eq = function(i) {
	const swap = this[i];
	Object.keys(this).forEach((key) => delete this[key]);
	this[0] = swap;
	this.length = 1;
	return this;
};

$.prototype.index = function() {
	const parent = this[0].parentNode;
	const children = [...parent.children];
	const findMyIndex = item => item === this[0];
	return children.findIndex(findMyIndex);
};

$.prototype.find = function(selector) {
	let numberOfItems = 0;
	let counter = 0;
	const copyObj = Object.assign({}, this);
	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].querySelectorAll(selector);
		if (arr.length === 0) continue;
		Object.keys(this).forEach((key) => delete this[key]);
		for (let j = 0; j < arr.length; j++) {
			this[counter] = arr[j];
			counter++;
		}
		numberOfItems += arr.length;
	}
	this.length = numberOfItems;
	return this;
};

$.prototype.closest = function(selector) {
	let counter = 0;
	for (let i = 0; i < this.length; i++) {
		this[i] = this[i].closest(selector) || '';
		counter++;
	}
	const objLength = Object.keys(this).length;
	for (; counter < objLength; counter++) {
		delete this[counter]
	}
	return this;
}

$.prototype.siblings = function(selector) {
	let numberOfItems = 0;
	let counter = 0;
	const copyObj = Object.assign({}, this);
	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].parentNode.children;
		Object.keys(this).forEach((key) => delete this[key]);
		for (let j = 0; j < arr.length; j++) {
			if (copyObj[i] === arr[j]) continue;
			this[counter] = arr[j];
			counter++;
		}
		numberOfItems += arr.length - 1;
	}
	this.length = numberOfItems;
	return this;
};