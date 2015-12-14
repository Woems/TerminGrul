<?php include($this->templatedir.'header.php') ?>
    <div class="container">
<?php include($this->templatedir.'menu.php') ?>
	  <div class="row row-small">
        <div class="col-sm-12">
		  <form class="form-horizontal">
            <fieldset>
                <input type="hidden" name="s" value="termin">
                <!-- Form Name -->
                <!--<legend>Termin</legend>-->

				<!-- Text input-->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="name">Termin Name</label>  
				  <div class="col-md-4">
				  <input id="name" name="name" placeholder="Name" class="form-control input-md" required="" type="text">
					
				  </div>
				</div>

				<!-- Textarea -->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="desc">Beschreibung</label>
				  <div class="col-md-4">                     
					<textarea class="form-control" id="desc" name="desc"></textarea>
				  </div>
				</div>
				<!-- Button (Double) -->
				<div class="form-group">
				  <label class="col-md-4 control-label" for="ok"></label>
				  <div class="col-md-8">
					<input type="submit" id="ok" name="ok" class="btn btn-success" value="Ok">
					<input type="reset" id="cancel" name="cancel" class="btn btn-danger" value="Abbrechen">
				  </div>
				</div>
			</fieldset>
		  </form>
		</div>
	  </div>
	  <footer>
        <p>&copy; Woems 2015</p>
      </footer>
    </div>
<?php include($this->templatedir.'footer.php') ?>
