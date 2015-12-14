<?php include($this->templatedir.'header.php') ?>
    <div class="container">
<?php include($this->templatedir.'menu.php') ?>
    </div>
    <div class="container">
      
      <h1 class="page-header">Profil</h4>
      <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li class="active">Profil</li>
      </ol>
	  <div class="row">
	    <div class="col-md-4 text-center">
		  <div class="panel panel-default">
            <div class="panel-body">
              <img id="profile-img" class="img-circle" src="images/avatar.png" />
			  <h3><?=$usr["user"]?></h3>
		    </div>
		  </div><!-- /panel -->
		</div><!-- /col -->
	    <div class="col-md-4">
		  <div class="panel panel-default">
		    <div class="panel-heading">
              <h3 class="panel-title">Eigenschaften</h3>
            </div><!-- /panel-heading -->
            <div class="panel-body">
			<ul>
		    <li>ID: <?=$usr["id"]?></li>
		    <li>Name: <?=$usr["user"]?></li>
		    <li>Status: <?=$usr["disabled"]==1?"Disabled":"Enabled"?></li>
		    <li>Letzter Login: <?=$usr["lastlogin"]?></li>
		    <li>Letzte &Auml;nderung: <?=$usr["changed"]?></li>
		    <?php //print_r($usr); ?>
		  </ul>
		    </div>
		  </div>
		</div><!-- /col -->
	    <div class="col-md-4">
		  <div class="panel panel-default">
		    <div class="panel-heading">
              <h3 class="panel-title">Eigenschaften</h3>
            </div><!-- /panel-heading -->
            <div class="panel-body">
		    </div>
		  </div>
		</div><!-- /col -->
	  </div>
      <footer>
        <p>&copy; Woems 2015</p>
      </footer>
    </div>
<?php $jsfile=array("public/termin.js"); include($this->templatedir.'footer.php') ?>
