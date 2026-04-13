 <!-- C:\Users\jf\Bayeux\elem.php  -->
 <?php
 //header("Content-Type: application/json; charset=UTF-8");
 // images dans static/images/
 echo nl2br("  elem.php \n " );
 $sql= "SELECT name, image   , position_x , position_y , position_z , wiki FROM elements where position_x < 1000" ;

$stmt = $conn->prepare($sql);
// Execute the SQL query
$stmt->execute();
$result =  $stmt->get_result();

?>