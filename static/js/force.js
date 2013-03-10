var forceDiagram = {

	width: 960,
	height: 500,
	color: d3.scale.category20(),
	force: d3.layout.force()
			.charge(-120)
			.linkDistance(30)
			.size([this.width, this.height]),

	init: function() {
		document.addEventListener('force', this.activateEvent.bind(this), false);
	},

	activateEvent: function() {
		console.log('force event');
		this.reset();
	},

	reset: function() {
		var that = this;
		var svg = d3.select("#sna").append("svg")
			.attr("width", this.width)
			.attr("height", this.height);

		this.force.nodes(graph.nodes)
			.links(graph.links)
			.start();

		var link = svg.selectAll(".link")
			.data(graph.links)
			.enter().append("line")
			.attr("class", "link")
			.style("stroke-width", function(d) {
			return Math.sqrt(d.value);
		});

		var node = svg.selectAll(".node")
			.data(graph.nodes)
			.enter().append("circle")
			.attr("class", "node")
			.attr("r", 5)
			.style("fill", function(d) {
			return that.color(d.group);
		}).call(this.force.drag);

		node.append("title")
			.text(function(d) {
			return d.name;
		});

		this.force.on("tick", function() {
			link.attr("x1", function(d) {
				return d.source.x;
			})
				.attr("y1", function(d) {
				return d.source.y;
			})
				.attr("x2", function(d) {
				return d.target.x;
			})
				.attr("y2", function(d) {
				return d.target.y;
			});

			node.attr("cx", function(d) {
				return d.x;
			})
				.attr("cy", function(d) {
				return d.y;
			});
		});
	}

}