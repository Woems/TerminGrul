<?php  $CONFIG=array(   "DBSERVER" => "localhost",   "DBDATABASE" => "TerminGrul",   "DBUSER" => "TerminGrul",   "DBPASSWORD" => "J3TqqBadsVuJ2L3N",   "Title" => "TerminGrul"  );  $db = new PDO('mysql:host='.$CONFIG["DBSERVER"].';dbname='.$CONFIG["DBDATABASE"].';charset=utf8', $CONFIG["DBUSER"], $CONFIG["DBPASSWORD"]);?>