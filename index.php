<?php
  ini_set('display_errors', true);
  error_reporting(E_ALL);
  require_once("config/config.php");
  require_once("libs/get_post.lib.php");
  //require_once("libs/lib_template.php");
  //require_once("libs/lib_item.php");
  //require_once("libs/lib_game.php");

  function autoloader($classname)
  {
    if (file_exists("libs/".strtolower($classname).".class.php"))
      require_once("libs/".strtolower($classname).".class.php");
  }
  spl_autoload_register("autoloader");

  $controler=GET('action',GET('a'));
  if ($controler=="") $controler="index";
  $run=GET('subaction',GET('s'));
  if ($run=="") $run="run";

  if (!file_exists('controler/'.$controler.'.controler.php')) $controler='error';
  include('controler/'.$controler.'.controler.php');
  $controler=$controler."_controler";
  $c = new $controler();
  $templ = new Template();
  $templ->add("title",$CONFIG['Title']);
  if (!is_callable(array($controler, $run))) $run="run";
  $c->$run($templ);
  $templ->run();
?>
