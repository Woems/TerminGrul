<?php
  // grullist nr5MpjEYAvWnVuY8
  require_once("config/config.php");  
  require_once("libs/get_post.lib.php");
  require_once("libs/user.class.php");
  require_once("libs/termin.class.php");
  $u=new User();
  if (isREQUEST("user") && isREQUEST("passwd")) $u->login(REQUEST("user"), REQUEST("passwd"));
  if ($usr = $u->logedin())
  {
	$ret=array();
	switch (REQUEST("action",REQUEST("a","")))
	{
	  case "user": $ret=$usr; break;
	  case "dateadd": $t=new Termin(); $ret=$t->dateadd(REQUEST("t"), $usr["id"], REQUEST("z")); break;
	  case "vote": $t=new Termin(); $ret=$t->vote(REQUEST("t"), $usr["id"], REQUEST("z"), REQUEST("v")); break;
	  default: $ret=array( "error" => "action: ".(isset($_GET["action"])?$_GET["action"]:"undefined"));
	}
	
	echo json_encode($ret);
  } else {
    header("HTTP/1.0 401 Unauthorized");
	echo json_encode(array( "error" => "401"));
  }
?>
