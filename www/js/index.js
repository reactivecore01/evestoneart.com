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
					name: "prodigy",
					img : "images/prodigy/main.jpg",
					title : "Prodigy Moments After",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "kayapo",
					img : "images/kayapo/main.jpg",
					title : "Kayapo Boy",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : "",
				    clearfix : "clearfix visible-xs"
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
					soldTo : "",
				    clearfix : "clearfix visible-xs visible-sm visible-md visible-lg"
				}, {
					name: "african_boy",
					img : "images/african_boy/main.jpg",
					title : "African Boy With Turtle",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : ""
				}, {
					name: "african_girl",
					img : "images/african_girl/main.jpg",
					title : "African Girl",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "",
				}, {
					name: "sister1",
					img : "images/sister1/main.jpg",
					title : "Little Sister 1",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "",
					horizontal: "true",
				    clearfix : "clearfix visible-xs visible-sm visible-md visible-lg"
				}, {
					name: "mother",
					img : "images/mother/main.jpg",
					title : "Mother To Myself",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : ""
				}, ]
			};
			$("#available-works").html(app.thumbnailTpl(params));

			// Setup the thumbnails for the Sold Works
			// -------------------------------------------------------------
			params = {
				alist : [ {
					name: "shiva",
					img : "images/shiva/main.jpg",
					title : "Shiva Child",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : "sold to Michel Dufresne"
				}, {
					name: "egyptian",
					img : "images/egyptian/main.jpg",
					title : "Egyptian Girl",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "sold to Iryna Voloshyna",
				    clearfix : "clearfix visible-xs"
				}, {
					name: "german",
					img : "images/german/main.jpg",
					title : "German Girl",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "sold to Reshaunna and Mini Davidson"
				}, {
					name: "sister2",
					img : "images/sister2/main.jpg",
					title : "Little Sister 2",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "sold to Ramona Petrova",
				    clearfix : "clearfix visible-xs visible-sm visible-md visible-lg"
				}, {
					name: "homecoming",
					img : "images/homecoming/main.jpg",
					title : "Homecoming",
					medium : 'Pastel on paper. 24"x36"',
					soldTo : "sold to Reshaunna Davidson",
					horizontal: "true",
				    clearfix : "clearfix visible-xs"
				}, {
					name: "indian",
					img : "images/indian/main.jpg",
					title : "Indian Girl",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "sold to Susan Hollenbeck"
				}, {
					name: "untitled2",
					img : "images/untitled2/main.jpg",
					title : "Untitled",
					medium : 'Charcoal on paper. 24"x36"',
					soldTo : "sold to Susan Hollenbeck",
				    clearfix : "clearfix visible-xs visible-sm visible-md visible-lg"
				}, {
					name: "self_portrait",
					img : "images/self_portrait/main.jpg",
					title : "Self Portrait",
					medium : 'Pastel on paper. 13 1/2"x16 3/4"',
					soldTo : "sold to Theadora Woodside"
				}, {
					name: "ponies",
					img : "images/ponies/main.jpg",
					title : "Ponies",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Michel Dufresne",
				    clearfix : "clearfix visible-xs"
				}, {
					name: "mare",
					img : "images/mare/main.jpg",
					title : "Mare and Foal",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Private Collector"
				}, {
					name: "untitled",
					img : "images/untitled/main.jpg",
					title : "Untitled",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Kristina Sheshaberidze",
				    clearfix : "clearfix visible-xs visible-sm visible-md visible-lg"
				}, {
					name: "springboks",
					img : "images/springboks/main.jpg",
					title : "Springboks",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Private Collector",
				}, {
					name: "cub",
					img : "images/cub/main.jpg",
					title : "Cub",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Katherine Garvey",
				    clearfix : "clearfix visible-xs"
				}, {
					name: "tiger",
					img : "images/tiger/main.jpg",
					title : "White Tiger",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to private collector",
				}, {
					name: "wolfe",
					img : "images/wolfe/main.jpg",
					title : "Wolf",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to private collector",
				    clearfix : "clearfix visible-xs visible-sm visible-md visible-lg"
				}, {
					name: "horse_sketch",
					img : "images/horse_sketch/main.jpg",
					title : "Horse Sketch",
					medium : 'Charcoal on paper. 18"x24"',
					soldTo : "sold to Stacy Ramos",
				}, {
					name: "yearlings",
					img : "images/yearlings/main.jpg",
					title : "The Yearlings",
					medium : 'Charcoal sketch on paper. 18"x24"',
					soldTo : "sold to Elizabeth Bristol",
				    clearfix : "clearfix visible-xs"
				}, {
					name: "turtle",
					img : "images/turtle/main.jpg",
					title : "Turtle",
					medium : 'Pastel on paper. 18"x24"',
					horizontal: "true",
					soldTo : "sold to Private Collector"
				}, {
					name: "caracals",
					img : "images/caracals/main.jpg",
					title : "Caracals",
					medium : 'Pastel on paper. 18"x24"',
					soldTo : "sold to Brock Seiler"
				}, ]
			};
			$("#sold-works").html(app.thumbnailTpl(params));
			
			// Setup the carousels
			// -------------------------------------------------------------
			// Prodigy carousel
			// -------------------------------------------------------------
			console.log('Setup Prodigy carousel');
			params = {
			    name : "prodigy",
				caption : "Prodigy Moments After",
				mainImg : "images/prodigy/main.jpg",
				alist : [ {
					img : "images/prodigy/details1.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details2.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details3.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details4.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details5.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details6.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details7.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details8.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details9.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details10.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details11.jpg",
					alt : "Detail of Prodigy Moments After"
				}, {
					img : "images/prodigy/details12.jpg",
					alt : "Detail of Prodigy Moments After"
				}, ]
			};
			$("#prodigy").html(app.carouselTpl(params));
			$('#prodigy').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
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
				}, {
					img : "images/kayapo/details5.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details6.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details7.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details8.jpg",
					alt : "Detail of Kayapo Boy"
				}, {
					img : "images/kayapo/details9.jpg",
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
				}, {
					img : "images/ponies/details6.jpg",
					alt : "Detail of Ponies"
				}, {
					img : "images/ponies/details7.jpg",
					alt : "Detail of Ponies"
				}, ]
			};
			$("#ponies").html(app.carouselTpl(params));
			$('#ponies').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// mare carousel
			// -------------------------------------------------------------
			params = {
			    name : "mare",
				caption : "Mare and Foal",
				mainImg : "images/mare/main.jpg",
				alist : [ {
					img : "images/mare/details1.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details2.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details3.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details4.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details5.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details6.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details7.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details8.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details9.jpg",
					alt : "Detail of Mare and Foal"
				}, {
					img : "images/mare/details10.jpg",
					alt : "Detail of Mare and Foal"
				}, ]
			};
			$("#mare").html(app.carouselTpl(params));
			$('#mare').on('slid.bs.carousel', function(e) {
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
			// springboks carousel
			// -------------------------------------------------------------
			params = {
			    name : "springboks",
				caption : "Springboks",
				mainImg : "images/springboks/main.jpg",
				alist : [ {
					img : "images/springboks/details1.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details2.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details3.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details4.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details5.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details6.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details7.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details8.jpg",
					alt : "Detail of Springboks"
				}, {
					img : "images/springboks/details9.jpg",
					alt : "Detail of Springboks"
				}, ]
			};
			$("#springboks").html(app.carouselTpl(params));
			$('#springboks').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// wolfe carousel
			// -------------------------------------------------------------
			params = {
			    name : "wolfe",
				caption : "Wolf",
				mainImg : "images/wolfe/main.jpg",
				alist : [ {
					img : "images/wolfe/details1.jpg",
					alt : "Detail of Wolf"
				}, {
					img : "images/wolfe/details2.jpg",
					alt : "Detail of Wolf"
				}, {
					img : "images/wolfe/details3.jpg",
					alt : "Detail of Wolf"
				}, {
					img : "images/wolfe/details4.jpg",
					alt : "Detail of Wolf"
				}, {
					img : "images/wolfe/details5.jpg",
					alt : "Detail of Wolf"
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
			
			// -------------------------------------------------------------
			// egyptian carousel
			// -------------------------------------------------------------
			params = {
			    name : "egyptian",
				caption : "Egyptian Girl",
				mainImg : "images/egyptian/main.jpg",
				alist : [ {
					img : "images/egyptian/details1.jpg",
					alt : "Detail of Egyptian Girl"
				}, {
					img : "images/egyptian/details2.jpg",
					alt : "Detail of Egyptian Girl"
				}, {
					img : "images/egyptian/details3.jpg",
					alt : "Detail of Egyptian Girl"
				}, {
					img : "images/egyptian/details4.jpg",
					alt : "Detail of Egyptian Girl"
				}, {
					img : "images/egyptian/details5.jpg",
					alt : "Detail of Egyptian Girl"
				}, ]
			};
			$("#egyptian").html(app.carouselTpl(params));
			$('#egyptian').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// german carousel
			// -------------------------------------------------------------
			params = {
			    name : "german",
				caption : "German Girl",
				mainImg : "images/german/main.jpg",
				alist : [ {
					img : "images/german/details1.jpg",
					alt : "Detail of German Girl"
				}, {
					img : "images/german/details2.jpg",
					alt : "Detail of German Girl"
				}, {
					img : "images/german/details3.jpg",
					alt : "Detail of German Girl"
				}, {
					img : "images/german/details4.jpg",
					alt : "Detail of German Girl"
				}, ]
			};
			$("#german").html(app.carouselTpl(params));
			$('#german').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// indian carousel
			// -------------------------------------------------------------
			params = {
			    name : "indian",
				caption : "Indian Girl",
				mainImg : "images/indian/main.jpg",
				alist : [ ]
			};
			$("#indian").html(app.carouselTpl(params));
			$('#indian').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// untitled2 carousel
			// -------------------------------------------------------------
			params = {
			    name : "indian",
				caption : "Untitled",
				mainImg : "images/untitled2/main.jpg",
				alist : [ ]
			};
			$("#untitled2").html(app.carouselTpl(params));
			$('#untitled2').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// Caracals carousel
			// -------------------------------------------------------------
			params = {
			    name : "caracals",
				caption : "Caracals",
				mainImg : "images/caracals/main.jpg",
				alist : [ {
					img : "images/caracals/details1.jpg",
					alt : "Detail of Caracals"
				}, {
					img : "images/caracals/details2.jpg",
					alt : "Detail of Caracals"
				}, {
					img : "images/caracals/details3.jpg",
					alt : "Detail of Caracals"
				}, {
					img : "images/caracals/details4.jpg",
					alt : "Detail of Caracals"
				}, {
					img : "images/caracals/details5.jpg",
					alt : "Detail of Caracals"
				}, {
					img : "images/caracals/details6.jpg",
					alt : "Detail of Caracals"
				}, {
					img : "images/caracals/details7.jpg",
					alt : "Detail of Caracals"
				}, ]
			};
			$("#caracals").html(app.carouselTpl(params));
			$('#caracals').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			// -------------------------------------------------------------
			// Homecoming carousel
			// -------------------------------------------------------------
			params = {
			    name : "homecoming",
				caption : "Homecoming",
				mainImg : "images/homecoming/main.jpg",
				alist : [ {
					img : "images/homecoming/details1.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details2.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details3.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details4.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details5.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details6.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details7.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details8.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details9.jpg",
					alt : "Detail of Homecoming"
				}, {
					img : "images/homecoming/details10.jpg",
					alt : "Detail of Homecoming"
				}, ]
			};
			$("#homecoming").html(app.carouselTpl(params));
			$('#homecoming').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			
			// -------------------------------------------------------------
			// Turtle carousel
			// -------------------------------------------------------------
			params = {
			    name : "turtle",
				caption : "Turtle",
				mainImg : "images/turtle/main.jpg",
				alist : [ {
					img : "images/turtle/details1.jpg",
					alt : "Detail of Turtle"
				}, {
					img : "images/turtle/details2.jpg",
					alt : "Detail of Turtle"
				}, {
					img : "images/turtle/details3.jpg",
					alt : "Detail of Turtle"
				}, ]
			};
			$("#turtle").html(app.carouselTpl(params));
			$('#turtle').on('slid.bs.carousel', function(e) {
				lazyContainer(e);
			});
			
			
		});

		// Compile the templates
		app.thumbnailTpl = Handlebars.compile($("#thumbnail-tpl").html());
		app.carouselTpl = Handlebars.compile($("#carousel-tpl").html());

	},

};
