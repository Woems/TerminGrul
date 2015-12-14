<?php
  class index_controler
  {
    //protected $user = false;
    function __construct()
    {
      
    }
    private function login()
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
      if (isREQUEST("email") && isREQUEST("nick") && isREQUEST("password1") && isREQUEST("password2") && REQUEST("password1")==REQUEST("password2"))
      { 
        $dbuser->create(REQUEST("nick"), REQUEST("email"), REQUEST("password1"));
      }
      return $dbuser->logedin();
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

      if (isREQUEST(array("name", "desc")))
      { // Termin erstellen
         $t = new Termin();
         $id = $t->create(REQUEST("name"),REQUEST("desc"),$usr["id"]);
         //$template->add("termin",$t->byid($t));
         //$template->add("mitglieder",$t->mitglieder($t));
         //$template->view("termin");
         $template->redirect("?s=termin&id=".$id);
         $template->view("termin_neu");
      } else if (GET("id"))
      { // Termin aufrufen
         $t = new Termin();
         $tbid = $t->byid(GET("id"));
         if (!isset($tbid) || !isset($tbid["id"]))
         {
           $template->redirect(".");
           $template->view("termin_neu");
           return;
         }
         $template->add("termin",$tbid);
         $template->add("zeiten",$t->zeiten($tbid["tid"]));
         $template->add("votes",$t->votes($tbid["tid"]));
         $template->add("mitglieder",$t->mitglieder($tbid["tid"]));
         $template->view("termin");
      } else { // Neuer Termin
        $template->view("termin_neu");
      }
    }
    function run($template)
    {
      $dbuser = new User();
      if (isREQUEST("activate"))
      {
        if ($dbuser->activate(REQUEST("activate"))>0)
          $template->add("regsuccess", "Benuter aktiviert");
        else
          $template->add("regerror", "Fehler beim aktivieren des Users"); 
      }
      if (isREQUEST("logout"))
      {
        $dbuser->logout();      
      }
      if (isREQUEST("user") && isREQUEST("password"))
      {
        $usr = $dbuser->logout()->login(REQUEST("user"), REQUEST("password"));
        if (!$usr) $template->add("error","Login fehlgeschlagen");
      }
      if (!$usr=$dbuser->logedin()) { $template->view("login"); return; }
      
      
      $t = new Termin();
      $template->add("usr", $usr); // für die User Infos oben Rechts
      $template->add("byuser", $t->allbyuser($usr["id"]));
      $template->add("bymitglied", $t->allbymitglieder($usr["id"]));
      $template->view("main");
    }
    function register($template)
    {
      $dbuser = new User();
      if (isREQUEST("logout"))
      {
        $dbuser->logout();      
      }
      if (isREQUEST("user") && isREQUEST("password"))
      {
        $usr = $dbuser->logout()->login(REQUEST("user"), REQUEST("password"));
        if (!$usr) $template->add("error","Login fehlgeschlagen");
      }
      if ($usr=$dbuser->logedin()) { $template->redirect("."); return; }

      // Alle Angaben korrekt?
      if (!isREQUEST("email") || !preg_match("/[a-z0-9-]*@[a-z0-9-]*\.[a-z]*/i",REQUEST("email")) )
      { $template->add("regerror", "EMail nicht angegeben oder falsch"); $template->view("login"); return; } 
      if (!isREQUEST("nick"))
      { $template->add("regerror", "Nick nicht angegeben"); $template->view("login"); return; }
      if (!isREQUEST("password1") || !isREQUEST("password2") || REQUEST("password1")!=REQUEST("password2"))
      { $template->add("regerror", "Passswort nicht angegeben oder ungleich"); $template->view("login"); return; }

      // Existiert der Benuter schon?
      if ($dbuser->exist(REQUEST("nick"), REQUEST("email")))
      { $template->add("regerror", "Nick oder Mail existieren schon"); $template->view("login"); return; }
      
      // Benutzer anlegen
      $activationpass=str_shuffle(md5(rand()));
      $dbuser->create(REQUEST("nick"), REQUEST("email"), REQUEST("password1"), $activationpass);
      $mail = new Mail();
      global $CONFIG;
      $mail->userActivation(
        REQUEST("nick"),
        REQUEST("email"),
        $CONFIG["ServerDir"]."?activate=".$activationpass
      );
      $template->add("regsuccess", "Mail wurde versandt"); $template->view("login");
    }
  }

?>
