 <!-- scripts/load_images2.php   -->
 <?php
// scripts/load_images2.php 

session_start();

require_once 'scripts/connexion.php';
echo nl2br(" Connected successfully  \n " );

// load elements in $results
require_once 'scripts/elem.php';



echo '<div class="box_tapis">';
echo nl2br("   \n " );

// Process the result set

  // Output data of each row
  while($row = $result->fetch_assoc()) {
    echo nl2br(" - Name: " .$row["name"]. " " .$row["image"]. " \n" );
	
	echo  nl2br(" <SPAN style='position: absolute; top: 0px; left:" . $row["position_x"]."px;width: 1003px; height: 400px'> " );
	// $source_image = 
	
	echo "
	  <a href= " .$row['wiki']." >
	  <IMG ID = " .$row["name"]. " 
	       SRC=". $row['image']."
	  		title =".$row["name"]."
	  		alt=' iamge Odon'>
	  	  </a>
	</SPAN> " ;
	}
echo '</div>' ;

$conn= null;
?>
