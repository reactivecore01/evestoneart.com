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

			// Setup the thumbnails for the Available Works
			// -------------------------------------------------------------
			var params = {
				alist : [ {
					name: "kayapo",
					img : "images/kayapo/main.jpg",
					title : "Kayapo Boy",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "yanomami",
					img : "images/yanomami/main.jpg",
					title : "Yanomami Girl",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "nude",
					img : "images/nude/main.jpg",
					title : "Nude",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "african_boy",
					img : "images/african_boy/main.jpg",
					title : "African Boy With Turtle",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : ""
				}, ]
			};
			$("#available-works1").html(app.thumbnailTpl(params));
			params = {
					alist : [ {
						name: "sister1",
						img : "images/sister1/main.jpg",
						title : "Little Sister 1",
						medium : 'Charcoal on paper. 24"x36"',
						soldTo : ""
					}, {
						name: "african_girl",
						img : "images/african_girl/main.jpg",
						title : "African Girl",
						medium : 'Charcoal on paper. 24"x36"',
						soldTo : ""
					}, {
						name: "self_portrait",
						img : "images/self_portrait/main.jpg",
						title : "Self Portrait",
						medium : 'Pastel on paper. 13 1/2"x16 3/4"',
						soldTo : ""
					}, {
						name: "mother",
						img : "images/mother/main.jpg",
						title : "Mother To Myself",
						medium : 'Charcoal on paper. 24"x36"',
						soldTo : ""
					}, ]
				};
			$("#available-works2").html(app.thumbnailTpl(params));

			// Setup the thumbnails for the Sold Works
			// -------------------------------------------------------------
			params = {
				alist : [ {
					name: "tiger",
					img : "images/tiger/main.jpg",
					title : "White Tiger",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to private collector"
				}, {
					name: "ponies",
					img : "images/ponies/main.jpg",
					title : "Ponies",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Michel Dufresne",
					clearfix : "true"
				}, {
					name: "cub",
					img : "images/cub/main.jpg",
					title : "Cub",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Katherine Garvey"
				}, {
					name: "untitled",
					img : "images/untitled/main.jpg",
					title : "Untitled",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Kristina Sheshaberidze"
				}, ]
			};
			$("#sold-works1").html(app.thumbnailTpl(params));
			params = {
					alist : [ {
						name: "wolfe",
						img : "images/wolfe/main.jpg",
						title : "Wolfe",
						medium : 'Pastel on paper. 18"x24"',
						soldTo : "sold to private collector"
					}, {
						name: "horse_sketch",
						img : "images/horse_sketch/main.jpg",
						title : "Horse Sketch",
						medium : 'Charcoal on paper. 18"x24"',
						soldTo : "sold to Stacy Ramos"
					}, {
						name: "yearlings",
						img : "images/yearlings/main.jpg",
						title : "The Yearlings",
						medium : 'Charcoal sketch on paper. 18"x24"',
						soldTo : "sold to Katherine Garvey"
					}, {
						name: "shiva",
						img : "images/shiva/main.jpg",
						title : "Shiva Child",
						medium : 'Pastel on paper. 24"x36"',
						soldTo : "sold to Michel Dufresne"
					}, ]
				};
			$("#sold-works2").html(app.thumbnailTpl(params));
			params = {
					alist : [ {
						name: "sister2",
						img : "images/sister2/main.jpg",
						title : "Little Sister 2",
						medium : 'Charcoal on paper. 24"x36"',
						soldTo : "sold to Ramona Petrova"
					}, ]
				};
			$("#sold-works3").html(app.thumbnailTpl(params));
			
			// Setup the carousels
			// -------------------------------------------------------------
			// Yanomami carousel
			// -------------------------------------------------------------
			console.log('Setup Yanomami carousel');
			params = {
			    name : "yanomami",
				caption : "Yanomami Girl",
				mainImg : "images/yanomami/main.jpg",
				alist : [ {
					img : "images/yanomami/details1.jpg",
					alt : "Detail of Yanomami Girl"
				}, {
					img : "images/yanomami/details2.jpg",
					alt : "Detail of Yanomami Girl"
				}, {
					img : "images/yanomami/details3.jpg",
					alt : "Detail of Yanomami Girl"
				}, {
					img : "images/yanomami/details4.jpg",
					alt : "Detail of Yanomami Girl"
				}, ]
			};
			$("#yanomami").html(app.carouselTpl(params));
			$('#yanomami').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// Kayapo carousel
			// -------------------------------------------------------------
			console.log('Setup Kayapo carousel');
			params = {
			    name : "kayapo",
				caption : "Kayapo Boy",
				mainImg : "images/kayapo/main.jpg",
				alist : [ {
					img : "images/kayapo/details1.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details2.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details3.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details4.jpg",
					alt : "Detail of Kayapo Boy"
				}, ]
			};
			$("#kayapo").html(app.carouselTpl(params));
			$('#kayapo').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// Nude carousel
			// -------------------------------------------------------------
			params = {
			    name : "nude",
				caption : "Nude",
				mainImg : "images/nude/main.jpg",
				alist : [ {
					img : "images/nude/details1.jpg",
					alt : "Detail of Nude"
				}, {
					img : "images/nude/details2.jpg",
					alt : "Detail of Nude"
				}, {
					img : "images/nude/details3.jpg",
					alt : "Detail of Nude"
				}, {
					img : "images/nude/details4.jpg",
					alt : "Detail of Nude"
				}, ]
			};
			$("#nude").html(app.carouselTpl(params));
			$('#nude').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// african_boy carousel
			// -------------------------------------------------------------
			params = {
			    name : "african_boy",
				caption : "African Boy With Turtle",
				mainImg : "images/african_boy/main.jpg",
				alist : [ {
					img : "images/african_boy/details1.jpg",
					alt : "Detail of African Boy With Turtle"
				}, {
					img : "images/african_boy/details2.jpg",
					alt : "Detail of African Boy With Turtle"
				}, {
					img : "images/african_boy/details3.jpg",
					alt : "Detail of African Boy With Turtle"
				}, ]
			};
			$("#african_boy").html(app.carouselTpl(params));
			$('#african_boy').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// sister1 carousel
			// -------------------------------------------------------------
			params = {
			    name : "sister1",
				caption : "Little Sister 1",
				mainImg : "images/sister1/main.jpg",
				alist : [ {
					img : "images/sister1/details1.jpg",
					alt : "Detail of Little Sister 1"
				}, {
					img : "images/sister1/details2.jpg",
					alt : "Detail of Little Sister 1"
				}, {
					img : "images/sister1/details3.jpg",
					alt : "Detail of Little Sister 1"
				}, {
					img : "images/sister1/details4.jpg",
					alt : "Detail of Little Sister 1"
				}, {
					img : "images/sister1/details5.jpg",
					alt : "Detail of Little Sister 1"
				}, {
					img : "images/sister1/details6.jpg",
					alt : "Detail of Little Sister 1"
				}, ]
			};
			$("#sister1").html(app.carouselTpl(params));
			$('#sister1').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// african_girl carousel
			// -------------------------------------------------------------
			params = {
			    name : "african_girl",
				caption : "African Girl",
				mainImg : "images/african_girl/main.jpg",
				alist : [ {
					img : "images/african_girl/details1.jpg",
					alt : "Detail of African Girl"
				}, {
					img : "images/african_girl/details2.jpg",
					alt : "Detail of African Girl"
				}, {
					img : "images/african_girl/details3.jpg",
					alt : "Detail of African Girl"
				}, {
					img : "images/african_girl/details4.jpg",
					alt : "Detail of African Girl"
				}, ]
			};
			$("#african_girl").html(app.carouselTpl(params));
			$('#african_girl').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// self_portrait carousel
			// -------------------------------------------------------------
			params = {
			    name : "self_portrait",
				caption : "Self Portrait",
				mainImg : "images/self_portrait/main.jpg",
				alist : [ {
					img : "images/self_portrait/details1.jpg",
					alt : "Detail of Self Portrait"
				}, {
					img : "images/self_portrait/details2.jpg",
					alt : "Detail of Self Portrait"
				}, {
					img : "images/self_portrait/details3.jpg",
					alt : "Detail of Self Portrait"
				}, {
					img : "images/self_portrait/details4.jpg",
					alt : "Detail of Self Portrait"
				}, {
					img : "images/self_portrait/details5.jpg",
					alt : "Detail of Self Portrait"
				}, ]
			};
			$("#self_portrait").html(app.carouselTpl(params));
			$('#self_portrait').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// mother carousel
			// -------------------------------------------------------------
			params = {
			    name : "mother",
				caption : "Mother To Myself",
				mainImg : "images/mother/main.jpg",
				alist : [ {
					img : "images/mother/details1.jpg",
					alt : "Detail of Mother To Myself"
				}, {
					img : "images/mother/details2.jpg",
					alt : "Detail of Mother To Myself"
				}, {
					img : "images/mother/details3.jpg",
					alt : "Detail of Mother To Myself"
				}, ]
			};
			$("#mother").html(app.carouselTpl(params));
			$('#mother').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// tiger carousel
			// -------------------------------------------------------------
			params = {
			    name : "tiger",
				caption : "White Tiger",
				mainImg : "images/tiger/main.jpg",
				alist : [ {
					img : "images/tiger/details1.jpg",
					alt : "Detail of White Tiger"
				}, {
					img : "images/tiger/details2.jpg",
					alt : "Detail of White Tiger"
				}, {
					img : "images/tiger/details3.jpg",
					alt : "Detail of White Tiger"
				}, {
					img : "images/tiger/details4.jpg",
					alt : "Detail of White Tiger"
				}, {
					img : "images/tiger/details5.jpg",
					alt : "Detail of White Tiger"
				}, ]
			};
			$("#tiger").html(app.carouselTpl(params));
			$('#tiger').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// ponies carousel
			// -------------------------------------------------------------
			params = {
			    name : "ponies",
				caption : "Ponies",
				mainImg : "images/ponies/main.jpg",
				alist : [ {
					img : "images/ponies/details1.jpg",
					alt : "Detail of Ponies"
				}, {
					img : "images/ponies/details2.jpg",
					alt : "Detail of Ponies"
				}, {
					img : "images/ponies/details3.jpg",
					alt : "Detail of Ponies"
				}, {
					img : "images/ponies/details4.jpg",
					alt : "Detail of Ponies"
				}, {
					img : "images/ponies/details5.jpg",
					alt : "Detail of Ponies"
				}, ]
			};
			$("#ponies").html(app.carouselTpl(params));
			$('#ponies').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// cub carousel
			// -------------------------------------------------------------
			params = {
			    name : "cub",
				caption : "Cub",
				mainImg : "images/cub/main.jpg",
				alist : [ {
					img : "images/cub/details1.jpg",
					alt : "Detail of Cub"
				}, {
					img : "images/cub/details2.jpg",
					alt : "Detail of Cub"
				}, {
					img : "images/cub/details3.jpg",
					alt : "Detail of Cub"
				}, {
					img : "images/cub/details4.jpg",
					alt : "Detail of Cub"
				}, ]
			};
			$("#cub").html(app.carouselTpl(params));
			$('#cub').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// untitled carousel
			// -------------------------------------------------------------
			params = {
			    name : "untitled",
				caption : "Untitled",
				mainImg : "images/untitled/main.jpg",
				alist : [ {
					img : "images/untitled/details1.jpg",
					alt : "Detail of Untitled"
				}, {
					img : "images/untitled/details2.jpg",
					alt : "Detail of Untitled"
				}, {
					img : "images/untitled/details3.jpg",
					alt : "Detail of Untitled"
				}, {
					img : "images/untitled/details4.jpg",
					alt : "Detail of Untitled"
				}, {
					img : "images/untitled/details5.jpg",
					alt : "Detail of Untitled"
				}, ]
			};
			$("#untitled").html(app.carouselTpl(params));
			$('#untitled').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// wolfe carousel
			// -------------------------------------------------------------
			params = {
			    name : "wolfe",
				caption : "Wolfe",
				mainImg : "images/wolfe/main.jpg",
				alist : [ {
					img : "images/wolfe/details1.jpg",
					alt : "Detail of Wolfe"
				}, {
					img : "images/wolfe/details2.jpg",
					alt : "Detail of Wolfe"
				}, {
					img : "images/wolfe/details3.jpg",
					alt : "Detail of Wolfe"
				}, {
					img : "images/wolfe/details4.jpg",
					alt : "Detail of Wolfe"
				}, {
					img : "images/wolfe/details5.jpg",
					alt : "Detail of Wolfe"
				}, ]
			};
			$("#wolfe").html(app.carouselTpl(params));
			$('#wolfe').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// horse_sketch carousel
			// -------------------------------------------------------------
			params = {
			    name : "horse_sketch",
				caption : "Horse Sketch",
				mainImg : "images/horse_sketch/main.jpg",
				alist : [ {
					img : "images/horse_sketch/details1.jpg",
					alt : "Detail of Horse Sketch"
				}, {
					img : "images/horse_sketch/details2.jpg",
					alt : "Detail of Horse Sketch"
				}, {
					img : "images/horse_sketch/details3.jpg",
					alt : "Detail of Horse Sketch"
				}, {
					img : "images/horse_sketch/details4.jpg",
					alt : "Detail of Horse Sketch"
				}, ]
			};
			$("#horse_sketch").html(app.carouselTpl(params));
			$('#horse_sketch').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// yearlings carousel
			// -------------------------------------------------------------
			params = {
			    name : "yearlings",
				caption : "The Yearlings",
				mainImg : "images/yearlings/main.jpg",
				alist : [ {
					img : "images/yearlings/details1.jpg",
					alt : "Detail of The Yearlings"
				}, {
					img : "images/yearlings/details2.jpg",
					alt : "Detail of The Yearlings"
				}, {
					img : "images/yearlings/details3.jpg",
					alt : "Detail of The Yearlings"
				}, {
					img : "images/yearlings/details4.jpg",
					alt : "Detail of The Yearlings"
				}, {
					img : "images/yearlings/details5.jpg",
					alt : "Detail of The Yearlings"
				}, ]
			};
			$("#yearlings").html(app.carouselTpl(params));
			$('#yearlings').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// shiva carousel
			// -------------------------------------------------------------
			params = {
			    name : "shiva",
				caption : "Shiva Child",
				mainImg : "images/shiva/main.jpg",
				alist : [ {
					img : "images/shiva/details1.jpg",
					alt : "Detail of Shiva Child"
				}, {
					img : "images/shiva/details2.jpg",
					alt : "Detail of Shiva Child"
				}, {
					img : "images/shiva/details3.jpg",
					alt : "Detail of Shiva Child"
				}, {
					img : "images/shiva/details4.jpg",
					alt : "Detail of Shiva Child"
				}, {
					img : "images/shiva/details5.jpg",
					alt : "Detail of Shiva Child"
				}, {
					img : "images/shiva/details6.jpg",
					alt : "Detail of Shiva Child"
				}, ]
			};
			$("#shiva").html(app.carouselTpl(params));
			$('#shiva').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// sister2 carousel
			// -------------------------------------------------------------
			params = {
			    name : "sister2",
				caption : "Little Sister 2",
				mainImg : "images/sister2/main.jpg",
				alist : [ {
					img : "images/sister2/details1.jpg",
					alt : "Detail of Little Sister 2"
				}, {
					img : "images/sister2/details2.jpg",
					alt : "Detail of Little Sister 2"
				}, {
					img : "images/sister2/details3.jpg",
					alt : "Detail of Little Sister 2"
				}, {
					img : "images/sister2/details4.jpg",
					alt : "Detail of Little Sister 2"
				}, {
					img : "images/sister2/details5.jpg",
					alt : "Detail of Little Sister 2"
				}, {
					img : "images/sister2/details6.jpg",
					alt : "Detail of Little Sister 2"
				}, ]
			};
			$("#sister2").html(app.carouselTpl(params));
			$('#sister2').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			
		});

		// Compile the templates
		app.thumbnailTpl = Handlebars.compile($("#thumbnail-tpl").html());
		app.carouselTpl = Handlebars.compile($("#carousel-tpl").html());

	},

};