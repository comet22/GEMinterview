<?php
$conn = new mysqli("localhost", "22ruiz", "testinG123!", "22ruiz");
if($conn->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT question, answer0, answer1, answer2, answer3, correct FROM questions";
$result = mysqli_query($conn, $sql);

$questions = array();

while($row = mysqli_fetch_array($result)) {
  $questions[] = $row['question'] . " " . $row['answer0'] . " " . $row['answer1'] . " " . $row['answer2'] . " " . $row['answer3'] . " " . $row['correct'];
}

$i = 0;
while($i < count($questions)) {
    echo $questions[$i] . " ";
    $i = $i + 1;
}
?>