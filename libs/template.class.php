<?php
  class Template
  {
    protected $templatedir="templates/templ_";
    protected $views=array();
    protected $varList=array();
    public function add($name, $value)
    {
      $this->varList[$name]=$value;
    }
  	public function view($name)
  	{
      if (!file_exists($this->templatedir.$name.".php")) die("Can not read View: ".$name);
      $this->views[]=$name;
  	}
  	public function run()
  	{
      foreach ($this->varList as $key => $value)
      {
        ${$key}=$value;
      }
      foreach ($this->views as $value)
      {
        include($this->templatedir.$value.".php");
      }
  	}
  	public function redirect($url)
  	{
      header('Location: '.$url);
      //echo "<a href='$url'>neue Seite</a>";
  	}
  }
?>
