<?php
  class user_controler
  {
    function __construct()
    {
    }
	function termin($template)
	{
	  $dbuser = new User();
	  if (isREQUEST("logout"))
	  {
	    $dbuser->logout();	  
	  }
	  if (isREQUEST("user") && isREQUEST("password"))
	  {
	    $usr = $dbuser->logout()->login(REQUEST("user"), REQUEST("password"));
	  }
	  if (!$usr=$dbuser->logedin()) { $template->view("login"); return; }
	  $template->add("usr", $usr); // für die User Infos oben Rechts

	}
    function run($template)
    {
	  $dbuser = new User();
	  if (isREQUEST("logout"))
	  {
	    $dbuser->logout();	  
	  }
	  if (isREQUEST("user") && isREQUEST("password"))
	  {
	    $usr = $dbuser->logout()->login(REQUEST("user"), REQUEST("password"));
	  }
	  if (!$usr=$dbuser->logedin()) { $template->view("login"); return; }
	  $template->add("usr", $usr); // für die User Infos oben Rechts

	  //$t = new Termin();
	  //$template->add("byuser", $t->allbyuser($usr["id"]));
	  //$template->add("bymitglied", $t->allbymitglieder($usr["id"]));
      $template->view("user");
    }
  }

?>
