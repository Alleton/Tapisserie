 <!-- scripts/load_images.php   -->
 <?php
// scripts/load_images.php 




//require_once 'scripts/connexion.php';
 

function charge($scene){
	$host = 'localhost';
	 $dbname = 'bayeux';
	 $user = 'bayeux';
	 $pass = '1024'; // Mettez votre mot de passe si nécessaire
	 
try {
    $conn = new mysqli($host, $user, $pass,$dbname);
    //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
echo nl2br(" Connected successfully  \n " );
echo $scene ;

// load elements in $results
// require_once 'scripts/elem.php';
 echo nl2br("  elem.php \n " );
 $sql= "SELECT name, image   , position_x , position_y , position_z , wiki , deplacement , final_x
     FROM elements where  scene = (?) ";
 

$stmt = $conn->prepare( $sql);
$stmt->bind_param("d",$scene);
// Execute the SQL query
$stmt->execute();
$result =  $stmt->get_result();
//  affiche result


//echo '<div class="box_tapis">';
echo nl2br("   \n " );
echo nl2br(" load images  \n " );

// Process the result set

  // Output data of each row
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    //echo nl2br(" - Name: " .$row["name"]. " " .$row["image"]. " \n" );

  echo  nl2br(" <SPAN style='position: absolute; top: 0px; left:" . $row["position_x"]."px;width: 1003px; height: 400px'> " );
  // $source_image = 

  echo "
    <a href= " .$row['wiki']." >
    <IMG ID = " .$row["name"]. " 
         SRC=". $row['image']."
    		title =".$row["name"]."
    		alt=' iamge Odon'
			deplace =  ".$row["deplacement"]." 
			left    =  ".$row["position_x"]."
			final_x = ".$row["final_x"]."
			>
    	  </a>" ;
//  echo '</div>' ;
}
$conn= null;
}
?>
