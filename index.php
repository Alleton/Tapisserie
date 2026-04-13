
<HTML>
 <!-- C:\Users\jf\Bayeux\tap.php  -->
 
  lang="fr" 
  <head>
    <meta charset="utf-8" />
    <title>Ma page tap.php  C:\Users\jf\Bayeux\tap </title>
  </head>
  
<BODY>
<link rel="stylesheet" href="style.css">

<?php 
$scene = 1;
if(isset($_GET['scene'])){
    $scene = $_GET['scene'];
	}
echo $scene ;	

?>	
<form>
  <input type="hidden" id="scene" value="<?php echo $scene; ?>">
</form>
	
<h1>Tapisserie</h1>


<div id = "box_tapis" class="box_tapis">
<?php 

	require_once 'scripts/load_images.php' ;
 	$les_images_json = charge($scene) ;
	
	?>


</div>
<div class="block">
	<a>I use the alternate box model.
	</a>
  <form>
     <input id="machine_buttons" class="button_styled" type="button" value="Start machine" />
	 <input id="animate" class="button_styled" type="button" value="Animate" />
	 <input id="next_buttons"  class="button_styled" type="button" value="Next" />
	
	 
  </form>
  <p>The machine is stopped ..</p>
  <!-- javascript  -->

  <script src="scripts/tapestry.js"></script>
  
   
</div>

<div class="block">
   Essai php
   <BR>
   Today is <?php echo date("l"); ?>. Here's the latest new,

	<?php
 		include 'scripts/today.php';
		
 	?>
 
 	</div>



 
	<Div>	
	
	 <script>


		
	  //Code JavaScript
	  document.write("variable A Recuperee <br>") ;
	 
	  
	   </script>
	
     <!-- end of javascript  -->
   
  

	
	</div>
</BODY>
</HTML>


