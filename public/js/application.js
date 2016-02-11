$(document).ready( function() {
	console.log("entered");
	$("button").click( function(event) {
		console.log($(this));
		var id = $(this).attr('url_id') 
		event.preventDefault();
		
		$('tr#' + id ).remove()
	});
});


$(document).ready( function() {
	$(".slide").hide().slideDown(1500);
});


$("form").on( "submit", function(event) {
	event.preventDefault();
	console.log($(this).serialize());
	$.post( "/create", $(this).serialize())
	  .done(function( data ) {
	  	var link = $.parseJSON(data)
	  	$('.display_shorturl').html("");
	  	$('table').append('<tr><td><a href=\"http://'+ link.long_url +'\">' + link.long_url + '</a></td><td><a href=\"localhost:9393/' + link.short_url +'\">' + link.short_url + '</a></td><td><a>' + link.click_count + '</a></td><td>' + '<button class="button" url_id="url_<%= url.id%>">Delete</button>' + '</td></tr>');
	  	$('.display_shorturl').append(">>> " + "Your shortened URL is: " + "<a href='/" + link.short_url + "'>" + link.short_url + "</a>" + " <<<");
	  });
});


// $("form").submit( function(event) {
// 	event.preventDefault();
// 	$.ajax({
// 		type: 'POST',
// 		url: '/create',
// 		dataType: 'JSON',
// 		data: $(this).serialize(),
// 		success: function(data){
// 			$("table").append("<tr>"
//                            + "<td>"+ "<a href='/" + data.long_url + "'>" + data.long_url + "</a></td>"
//                            + "<td>"+ "<a href='/" + data.short_url + "'>" + data.short_url + "</a></td>"
//                            + "<td>"+ data.click_count + "</td>"
//                            + "</tr>");
// 		}
// 	});
// });



// $(document).ready( function() {
// 	$(".enter").click( function() {
// 		$(this).rotate({
// 			angle:0,
// 			animateTo:360
// 		});
// 	});
// });

