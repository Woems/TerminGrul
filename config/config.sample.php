<?php  $CONFIG=array(   "DBSERVER" => "localhost",   "DBDATABASE" => "TerminGrul",   "DBUSER" => "TerminGrul",   "DBPASSWORD" => "123456",   "Title" => "TerminGrul"      "MailHost" => 'mx.freenet.de',   "MailUser" => '123@freenet.de',   "MailPasswort" => 'ABC'   "MailAdresse" => '123@freenet.de',   "MailName" => 'TerminGrul'     );  $db = new PDO('mysql:host='.$CONFIG["DBSERVER"].';dbname='.$CONFIG["DBDATABASE"].';charset=utf8', $CONFIG["DBUSER"], $CONFIG["DBPASSWORD"]);?>