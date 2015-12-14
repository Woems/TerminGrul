<?php
  class error_controler
  {
    function __construct()
    {
    }
    function run($template)
    {
      $template->view("error");
    }
  }

?>
