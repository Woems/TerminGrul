	    <p>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href=".">TerminGrul</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse navbar-right">
              <ul class="nav navbar-nav">
                <li><a href="?s=termin"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Neu</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-inbox" aria-hidden="true"></span></a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> <?=$usr["user"]?> <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="?a=user"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Profil</a></li>
                    <li><a href="?a=user&s=config"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Einstellungen</a></li>
                    <li><a href="?logout"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout</a></li>
                    <!--<li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>-->
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
		</p>