<?php include($this->templatedir.'header.php') ?>
    <div class="container">
<?php include($this->templatedir.'menu.php') ?>
    </div>
    <div class="jumbotron hidden-xs jumbotron-blau">
      <div class="container">
        <h1>Terminverwaltung</h1>
        <p>Hier kannst du Termine planen lassen, auch wenn nicht mal eine Location oder eine grobe Terminvorstellung besteht</p>
        <p>
          <a class="btn btn-lg btn-primary" href="?s=termin" role="button">Neuen Termin suchen &raquo;</a>
        </p>
      </div>
    </div>
	<div class="container">
	  <div class="row">
        <?php for ($z=0; $z < 3; $z++): ?>
        <div class="col-sm-4">
          <?php for ($i=$z; $i < count($bymitglied); $i+=3): ?>
		  <div class="panel panel-blau text-center">
		    <div class="panel-heading">
		      <h2><?=$bymitglied[$i]["termin"]?><br><small>von <?=$bymitglied[$i]["user"]?></small></h2>
			</div>
			<!--<div class="panel-body">
		      <?=str_replace("\n","<br>",$bymitglied[$i]["desc"])?>
			</div>-->
			<a href="?s=termin&id=<?=$bymitglied[$i]["uniqueid"]?>">
			<div class="panel-footer">
		      <span class="pull-left">View details</span>
			  <span class="pull-right">&raquo;</span>
			  <div class="clearfix"></div>
			</div>
			</a>
		  </div>
          <?php endfor ?>
		</div>
        <?php endfor ?>
	  </div>
	  <footer>
        <p>&copy; Woems 2015</p>
      </footer>
    </div>
<?php include($this->templatedir.'footer.php') ?>
