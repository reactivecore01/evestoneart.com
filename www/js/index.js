// -------------------------------------------------------------------------
// Load images lazily in carousel
// =========================================================================
function lazyContainer(e) {
	var nd = $(e.relatedTarget).find("img");
	if (nd) {
		var url = nd.attr('data-src');
		if (url) {
			nd.attr("src", url); // set value : src = url
		}
	}
};

// -------------------------------------------------------------------------
// Application main entry point
// =========================================================================
var app = {

	// Application Constructor
	initialize : function() {

		$(document).ready(function() {

			// Setup the thumbnails
			// -------------------------------------------------------------
			var availWorksParams = {
				alist : [ {
					name: "kayapo",
					img : "images/kayapo_767.jpg",
					title : "Kayapo Boy",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "yanomami",
					img : "images/yanomami_767.jpg",
					title : "Yanomami Girl",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "shiva",
					img : "images/shiva_767.jpg",
					title : "Shiva Child",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : "sold to Michel Dufresne"
				}, {
					name: "sister2",
					img : "images/little_sister2_767.jpg",
					title : "Little Sister 2",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : ""
				}, ]
			};
			$("#available-works").html(app.thumbnailTpl(availWorksParams));
			
			// Setup the carousels
			// -------------------------------------------------------------
			// Yanomami carousel
			// -------------------------------------------------------------
			console.log('Setup Yanomami carousel');
			var yanomamiParams = {
			    name : "yanomami",
				caption : "Yanomami Girl",
				mainImg : "images/yanomami_767.jpg",
				alist : [ {
					img : "images/yanomami_0_767.jpg",
					alt : "Detail of Yanomami Girl"
				}, {
					img : "images/yanomami_1_767.jpg",
					alt : "Detail of Yanomami Girl"
				}, {
					img : "images/yanomami_2_767.jpg",
					alt : "Detail of Yanomami Girl"
				}, {
					img : "images/yanomami_3_767.jpg",
					alt : "Detail of Yanomami Girl"
				}, ]
			};

			$("#yanomami").html(app.carouselTpl(yanomamiParams));
			$('#yanomami').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			// -------------------------------------------------------------
			// Kayapo carousel
			// -------------------------------------------------------------
			console.log('Setup Kayapo carousel');
			var kayapoParams = {
			    name : "kayapo",
				caption : "Kayapo Boy",
				mainImg : "images/kayapo_767.jpg",
				alist : [ {
					img : "images/kayapo_0_767.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo_1_767.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo_2_767.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo_3_720.jpg",
					alt : "Detail of Kayapo Boy"
				}, ]
			};

			$("#kayapo").html(app.carouselTpl(kayapoParams));
			$('#kayapo').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
		});

		// Compile the templates
		app.thumbnailTpl = Handlebars.compile($("#thumbnail-tpl").html());
		app.carouselTpl = Handlebars.compile($("#carousel-tpl").html());

	},

};