<?
	if(!isset($license)){
		return;
	}

	$link = mysql_connect("localhost", "fbookclient", "fbookclient")
    or die(mysql_error());
	mysql_select_db("fbookclient") or die("db error");
	
	$query = "select issue_date,last_date from license where license='$license'";
	$result = mysql_query($query);
	
	if($row = mysql_fetch_array($result)){
		echo substr($row['issue_date'],0,10).",".substr($row['last_date'],0,10);
	}else{
		echo "not registed";		
	}
	mysql_free_result($result);
	mysql_close($link);		
?>