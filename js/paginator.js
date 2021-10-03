function Paginator(pageSize, selector) {
	this.page = 0;
	this.pageSize = pageSize;
	this.selector = selector;
}

Paginator.prototype.set = function(page, pageSize) {
	if(!pageSize)
		pageSize = this.pageSize;

	if(!this.checkInPage(page)){
		if(page < 0){
			page = this.getlastPage();
		}else{
			page = 0;
		}
	}

	this.page = page;
	this.pageSize = pageSize;
	this.render();
};

Paginator.prototype.render = function(pageSize) {
	if(pageSize)
		this.pageSize = pageSize;

	var page = this.page + 1;
	var x = this.selector();

	for (var i = 0; i < x.length; i++) {
		if(i <= this.pageSize * page - 1 && i > this.pageSize * page - this.pageSize - 1)
			x[i].style.display = "";
		else	
			x[i].style.display = "none";
	}
};

Paginator.prototype.next = function() {
	this.set(this.page + 1);
	this.render();
};

Paginator.prototype.prev = function() {
	this.set(this.page - 1);
	this.render();
};

Paginator.prototype.checkInPage = function(page) {
	var length = this.selector().length;

	if(page * this.pageSize + 1 > length || page < 0)
		return false;

	return true;
};

Paginator.prototype.getlastPage = function() {
	var length = this.selector().length;

	return Math.ceil(length / this.pageSize) - 1;
};
