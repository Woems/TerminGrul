$(document).ready(function(){
   //$("").css("border", "10px solid gray");
  $('#useradd').click(function () {
    alert("lol");
  });
  $('#dateadd').click(function () {
	$.getJSON( "json.php", {
	  a: "dateadd",
	  t: $("#terminid").val(),
	  z: $("#date").val()
	}).done(function( data ) {
	  if (!data)
	  {
	    $("#datef").removeClass("has-error has-success").addClass("has-feedback has-warning");
	    $("#datumStatus").html("(warning)");
	    $("#datumIcon").removeClass("glyphicon-remove glyphicon-ok").addClass("glyphicon-warning-sign");
	    $('#date').val("Datumsformat falsch: "+$('#date').val());
		return;
	  }
	  $("#datef").removeClass("has-warning has-error").addClass("has-feedback has-success");
	  $("#datumStatus").html("(success)");
	  $("#datumIcon").removeClass("glyphicon-remove glyphicon-warning-sign").addClass("glyphicon-ok");
	  $('#date').val("OK");
	  location.reload();
	}).fail(function( data ) {
	  $("#datef").removeClass("has-warning has-success").addClass("has-feedback has-error");
	  $("#datumStatus").html("(error)");
	  $("#datumIcon").removeClass("glyphicon-warning-sign glyphicon-ok").addClass("glyphicon-remove");
	  $('#date').val("Connection failed");
	});
	return false;
  });
  
  $(".zeit-btn").click(function () {
  buttons=$(this).parent();
  buttons.hide();
  $.getJSON( "json.php", {
	  a: "vote",
	  t: $("#terminid").val(),
	  z: $(this).attr("data-id"),
	  v: $(this).attr("data-val")
	}).done(function( data ) {
	  if (!data)
	  {
	    alert("Fehler bei der Übermittlung");
        buttons.show();
		return;
	  }
        //buttons.show();
	  location.reload();
	}).fail(function( data ) {
	    alert("Connection failed");
        buttons.show();
	});
	return false;
  });
});