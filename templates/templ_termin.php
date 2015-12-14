<?php include($this->templatedir.'header.php') ?>
    <div class="container">
<?php include($this->templatedir.'menu.php') ?>
    </div>
    <div class="jumbotron jumbotron-blau">
      <div class="container" title="Erstell von <?=$termin["user"]?>">
        <h1><?=$termin["termin"]?></h1>
        <p><?=$termin["desc"]?></p>
      </div>
    </div>
    <div class="container">
      <h4>Mitglieder:</h4>
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="btn-group  btn-group-xs" role="group">
            <?php foreach ($mitglieder as $m): ?>
              <button type="button" class="btn btn-default"><?=$m["user"]?></button>
            <?php endforeach ?>
            <!--<button type="button" class="btn btn-primary" id="useradd">Hinzuf&uuml;gen</button>-->
          </div>
        </div><!-- /panel-body -->
      </div><!-- /panel -->
      <h4>Termine</h4>
      <p>
        <ul class="list-group">
          <?php setlocale(LC_TIME, "de_DE"); ?>
          <?php foreach ($votes as $z): ?>
          <?php $badge=array(0=>0,1=>0,2=>0); if (isset($z["user"])) foreach ($z["user"] as $usr) { $badge[$usr["vote"]]=$badge[$usr["vote"]]+1; } ?>

          <li class="list-group-item" title="by <?=$z["creater"]?>"><nobr><?=strftime("%a, %d.%m.%Y %H:%M.%S",strtotime($z["zeit"]))?></nobr> <span class="badge"><?=$badge[2]?></span>
          <div class="btn-group btn-group-xs" role="group">
            <button type="button" class="btn btn-success zeit-btn" data-val="2" data-id="<?=$z["id"]?>">Ja</button>
            <button type="button" class="btn btn-warning zeit-btn" data-val="1" data-id="<?=$z["id"]?>">Vielleicht</button>
            <button type="button" class="btn btn-danger zeit-btn" data-val="0" data-id="<?=$z["id"]?>">Nein</button>
          </div>
          <?php if (!isset($z["user"]) || count($z["user"])<1): ?>
          <span class="label label-default">Bitte Abstimmen!</span>
          <?php else: ?>
          <?php foreach ($z["user"] as $usr): ?>
          <span class="label <?=array(2=>"label-success", 1=>"label-warning", 0=>"label-danger")[$usr["vote"]]?>"><?=$usr["user"]?></span>
          <?php endforeach ?>
          <?php endif ?>
          <?php endforeach ?>
        </ul><!-- list-group -->
      </p>
      <p>
        <form class="form-inline">
          <input type="hidden" id="terminid" name="id" value="<?=$termin["uniqueid"]?>">
          <div class="form-group" id="datef">
            <label class="sr-only" for="exampleInputFile">Datum:</label>
            <input id="date" name="date" placeholder="Termin" class="form-control" type="date">
            <span id="datumIcon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>
            <span id="datumStatus" class="sr-only"></span>
          </div>
          <input type="submit" id="dateadd" name="dateadd" class="btn btn-primary" value="Hinzuf&uuml;gen">
        </form>
      </p>
      <footer>
        <p>&copy; Woems 2015</p>
      </footer>
    </div>
<?php $jsfile=array("public/termin.js"); include($this->templatedir.'footer.php') ?>
