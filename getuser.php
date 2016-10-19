<?php
//$q = intval($_GET['q']);
$con = mysqli_connect('localhost','root','','caca_bugs');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
//$sql="SELECT * FROM user WHERE email = '".$q."'";
$sql="SELECT * FROM user";
$result = mysqli_query($con,$sql);

// echo "<table>
// <tr>
// <th>id</th>
// <th>email</th>
// <th>nome</th>
// </tr>";
// while($row = mysqli_fetch_array($result)) {
//     echo "<tr>";
//     echo "<td>" . $row['id'] . "</td>";
//     echo "<td>" . $row['email'] . "</td>";
//     echo "<td>" . $row['nome'] . "</td>";
//     echo "</tr>";
// }
// echo "</table>";

$arrayReturn = array();

while($row = mysqli_fetch_array($result)) {
    $arrayReturn[] = array('id' => $row['id'], 'nome' => $row['nome']);
}

echo json_encode($arrayReturn);

mysqli_close($con);
