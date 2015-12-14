<?php
    function isPOST($key)
    {
      if (gettype($key)!="array") return isset($_POST[$key]);
      $r=true;
      foreach ($key as $k)
        $r=$r && isset($_POST[$k]);
      return $r;
    }
    function isGET($key)
    {
      if (gettype($key)!="array") return isset($_GET[$key]);
      $r=true;
      foreach ($key as $k)
        $r=$r && isset($_GET[$k]);
      return $r;
    }
    function isGETPOST($key)
    {
      return isPOST($key) && isGET($key);
    }
    function isREQUEST($key)
    {
      if (gettype($key)!="array") return isset($_REQUEST[$key]);
      $r=true;
      foreach ($key as $k)
        $r=$r && isset($_REQUEST[$k]);
      return $r;
    }
    function GET($key,$def="")
    {
      return isset($_GET[$key])?$_GET[$key]:$def;
    }
    function POST($key,$def="")
    {
      return isset($_POST[$key])?$_POST[$key]:$def;
    }
    function GETPOST($key,$def="")
    {
      return isPOST($key)?POST($key,$def):GET($key,$def);
    }
    function REQUEST($key,$def="")
    {
      return isset($_REQUEST[$key])?$_REQUEST[$key]:$def;
    }
    function isFILE($key)
    {
      return isset($_FILES[$key]) && is_uploaded_file($_FILES[$key]['tmp_name']);
    }
?>