<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?=$title?>">
    <meta name="author" content="Woems">
    <link rel="icon" href="/favicon.ico">

    <title><?=$title?></title>

    <!-- Bootstrap core CSS -->
    <link href="public/bootstrap/3.2.0-dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="public/bootstrap/3.2.0-dist/css/bootstrap-theme.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="public/advanced.css" rel="stylesheet">
<?php if(isset($cssfile)) foreach($cssfile as $c): ?>
    <link href="<?=$c?>" rel="stylesheet">
<?php endforeach; ?>
<?php if(isset($css)): ?>
	  <style>
<?=$css?>
    </style>
<?php endif; ?>
  </head>

  <body>
 
