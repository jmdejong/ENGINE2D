ENGINE2D.InputState = function () {
	this.type = -1;
	this.state = -1;
	this.event = undefined;
	this.previous = null;
	this.next = null;
};

ENGINE2D.InputState.prototype = {

	constructor: ENGINE2D.InputState,

	Update: function (type, state, event, previous, next) {
		this.type = type;
		this.state = state;
		this.event = event;
		this.previous = previous;
		this.next = next;

		return this;
	},

	GetNext: function () {
		return this.next;
	},

	GetPrevious: function () {
		return this.previous;
	},

	GetState: function () {
		return this.state;
	},

	GetEvent: function () {
		return this.event;
	}
};