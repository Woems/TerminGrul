<?php
  class Item
  {
    protected $db = null;
    function __construct()
    {
      global $db;
      $this->db = $db;
    }
    function byID($id)
    {
      $ret = $this->db->prepare("SELECT * FROM item, typ WHERE item.typid=typ.id WHERE id=? LIMIT 1");
      $ret->execute(array($id));
      return $ret->fetch(PDO::FETCH_ASSOC);
    }
    function last($anz)
    {
      $ret = $this->db->prepare("SELECT * FROM item, typ WHERE item.typid=typ.id ORDER BY item.changed DESC LIMIT 10");      
      $ret->execute(array(intval($anz)));
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    function all()
    {
      $ret = $this->db->prepare("SELECT * FROM item, typ WHERE item.typid=typ.id");
      $ret->execute();
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    function random()
    {
      $ret = $this->db->prepare("SELECT * FROM item, typ WHERE item.typid=typ.id ORDER BY RAND() LIMIT 1");
      $ret->execute();
      return $ret->fetch(PDO::FETCH_ASSOC);
    }
    function typ()
    {
      $ret = $this->db->prepare("SELECT * FROM typ ORDER BY maxanz, typ");
      $ret->execute();
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    /*
    function byUser($id)
    {
      $ret = $this->db->prepare("SELECT * FROM `have`, `game` WHERE have.gameId=game.id AND have.userid=? AND have.count!=0 ORDER BY name");
      $ret->execute(array($id));
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    */
    function addPicture($name, $mimetype, $data)
    {
      $ret = $this->db->prepare("INSERT INTO image (id, filename, mimetype, image) VALUE(NULL, ?, ?, ?)");
      $ret->execute(array($name, $mimetype, $data));
      return $this->db->lastInsertId();
    }
    function addItem($name, $typ, $description, $image)
    {
      $ret = $this->db->prepare("INSERT INTO item (id, item, typid, description, image) VALUE(NULL, ?, ?, ?, ?)");
      $ret->execute(array($name, $typ, $description, $image));
      return $this->db->lastInsertId();
    }
    function getPicture($id)
    {
      $ret = $this->db->prepare("SELECT * FROM image WHERE id=?");
      $ret->execute(array($id));
      return $ret->fetch(PDO::FETCH_ASSOC);
    }
  }
?>