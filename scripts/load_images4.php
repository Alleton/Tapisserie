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
 $sql= "SELECT name, image   , position_x , position_y , position_z , wiki FROM elements where  position_x < 1000 " ;

$stmt = $conn->prepare($sql);
// Execute the SQL query
$stmt->execute();
$result =  $stmt->get_result();



//echo '<div class="box_tapis">';
echo nl2br("   \n " );
echo nl2br(" load images  \n " );

// Process the result set

  // Output data of each row
  $outp =  $result->fetch_all(MYSQLI_ASSOC);
  $json_res = json_encode($outp);
  echo $json_res ;

//  echo '</div>' ;

$conn= null;
return  $json_res ;
}
?>
