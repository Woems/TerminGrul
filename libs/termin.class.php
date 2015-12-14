<?php
  class Termin
  {
    protected $db = null;
    function __construct()
    {
      global $db;
      $this->db = $db;
    }
    function allbyuser($userid)
    {
      $ret = $this->db->prepare("SELECT *, termin.id AS tid, termin.changed AS tchanged FROM termin JOIN user WHERE user.`id`=termin.`creater` AND `creater`=? ORDER BY tchanged DESC");
      $ret->execute(array($userid));
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    function allbymitglieder($userid)
    {
      $ret = $this->db->prepare("SELECT *, t.changed AS tchanged  FROM `termin` t LEFT JOIN `termin-mitglieder` m ON (m.`terminid`=t.`id`) LEFT JOIN `user` u ON (u.`id`=t.`creater`) WHERE m.`userid`=? OR t.`creater`=? GROUP BY t.id ORDER BY tchanged DESC");
      $ret->execute(array($userid,$userid));
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    function byID($terminid)
    {
      $ret = $this->db->prepare("SELECT *, termin.id AS tid, termin.changed AS tchanged FROM termin JOIN user WHERE user.`id`=termin.`creater` AND termin.`uniqueid`=?");
      $ret->execute(array($terminid));
      return $ret->fetch(PDO::FETCH_ASSOC);
    }
    function mitglieder($id)
    {
      $ret = $this->db->prepare("SELECT * FROM `termin-mitglieder` AS m JOIN user AS u WHERE m.`userid`=u.`id` AND m.`terminid`=?");
      $ret->execute(array($id));
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
    function zeiten($id)
    {
      $ret = $this->db->prepare("SELECT *,`termin-zeiten`.id AS zid FROM `termin-zeiten` JOIN user WHERE `termin-zeiten`.`creater`=user.`id` AND `termin-zeiten`.`terminid`=? AND `termin-zeiten`.`zeit` > NOW() ORDER BY `termin-zeiten`.`zeit`");
      $ret->execute(array($id));
      return $ret->fetchAll(PDO::FETCH_ASSOC);
    }
	function votes($terminid)
	{
      $ret = $this->db->prepare("SELECT z.id,z.zeit,c.user AS creater,v.vote,u.user FROM `termin-zeiten` z LEFT JOIN `user` c ON (c.id=z.creater) LEFT JOIN `termin-votes` v ON (z.id = v.zeitenid) LEFT JOIN `user` u ON (u.id=v.userid) WHERE z.terminid=? ORDER BY `zeit`, vote DESC, v.changed");
      $ret->execute(array($terminid));
      $tmp=$ret->fetchAll(PDO::FETCH_ASSOC);
	  $out=array();
	  foreach ($tmp as $row)
	  {
	    $out[$row["id"]]["id"]=$row["id"];
	    $out[$row["id"]]["zeit"]=$row["zeit"];
	    $out[$row["id"]]["creater"]=$row["creater"];
		if (isset($row["vote"])) $out[$row["id"]]["user"][]=array("vote"=>$row["vote"], "user"=>$row["user"]);
	  }
	  return $out;
	}
	function create($name, $desc, $user)
	{
	  $uid=md5(uniqid($user));
      $ret = $this->db->prepare("INSERT INTO termin (`id`, `uniqueid`, `termin`, `desc`, `creater`) VALUE(NULL, ?, ?, ?, ?)");
      $ret->execute(array($uid, $name, $desc, $user));
      return $uid;
	}
	function mitgliederadd($terminid, $userid)
	{
      $ret = $this->db->prepare("INSERT INTO `termin-mitglieder` (`terminid`, `userid`) VALUE(?, ?) ON DUPLICATE KEY UPDATE userid=?;");
      $ret->execute(array($terminid, $userid, $userid));
      return $this->db->lastInsertId();
	}
	function dateadd($terminid, $userid, $zeit)
	{
	  $t=$this->byID($terminid);
	  if (!isset($t) || !isset($t["tid"])) return;
	  if (($timestamp = strtotime($zeit)) === false) { return false; }
	  $this->mitgliederadd($t["tid"], $userid);
      $ret = $this->db->prepare("INSERT INTO `termin-zeiten` (`id`, `terminid`, `creater`, `zeit`) VALUE(NULL, ?, ?, ?)");
      $ret->execute(array($t["tid"], $userid, date('Y-m-d H:i:s', $timestamp)));
      return $this->db->lastInsertId();
	}
	function vote($terminid, $userid, $zeitid, $vote)
	{
	  $t=$this->byID($terminid);
	  if (!isset($t) || !isset($t["tid"])) return;
	  $this->mitgliederadd($t["tid"], $userid);
      $ret = $this->db->prepare("INSERT INTO `termin-votes` (`terminid`, `userid`, `zeitenid`, `vote`) VALUE (?, ?, ?, ?) ON DUPLICATE KEY UPDATE vote=?;");
      $ret->execute(array($t["tid"], $userid, $zeitid, $vote, $vote));
      return $this->db->lastInsertId();
	}
    

   /*
	function last($anz)
    {
      $ret = $this->db->prepare("SELECT * FROM item, typ WHERE item.typid=typ.id ORDER BY item.changed DESC LIMIT 10");      
      $ret->execute(array(intval($anz)));
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
    */
  }
?>