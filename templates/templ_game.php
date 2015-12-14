<?php include($this->templatedir.'header.php') ?>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="page-header"><a href="."><span class="glyphicon glyphicon-home" aria-hidden="true"></span> </a><?=$game["game"]?> from <?=$game["user"]?></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Game</h3>
            </div>
            <div class="panel-body">
			  <?php print_r($spielt) ?>
              <div class="list-group">
              <?php foreach($games as $i): ?>
                <a href="?action=game&id=<?=$i['id']?>" class="list-group-item">
                  <h4 class="list-group-item-heading"><?=$i['game']?></h4>
                  <p class="list-group-item-text"><?=$i['aktiv']?"Aktiv":"Inaktiv"?> <?=$i['changed']?></p>                  
                </a>
              <?php endforeach ?>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Die neusten Items</h3>
            </div>
            <div class="panel-body">
              
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Recourcen</h3>
            </div>
            <div class="panel-body">
			  <table width="100%">
			    <tr><th>Money:</th><td><?=$spielt["money"]?></td></tr>
			  </table>
            </div>
          </div>
        </div>
      </div>
    </div>
<?php include($this->templatedir.'footer.php') ?>
