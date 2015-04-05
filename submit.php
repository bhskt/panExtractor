<?php
include "pq.php";
$request=curl_init("https://incometaxindiaefiling.gov.in/e-Filing/Services/KnowYourPan.html");
curl_setopt_array($request,[
	CURLOPT_RETURNTRANSFER=>true,
	CURLOPT_COOKIEFILE=>"cookie.txt",
	CURLOPT_POST=>true,
	CURLOPT_POSTFIELDS=>[
		"userNameDetails.firstName"=>$argv[1],
		"userNameDetails.surName"=>$argv[2],
		"dateOfBirth"=>$argv[3],
		"captchaCode"=>$argv[4]
	],
	CURLOPT_TIMEOUT=>5
]);
RETRY:
$res=phpQuery::newDocument(curl_exec($request));
$data=trim(pq("table.grid tr:nth-child(3)")->text());
if(stripos($data,"active")>0){
	$data=preg_replace("/\s+/s"," ",$data);
	echo $argv[3]." ".$data;
} elseif(curl_errno($request)){
	goto RETRY;
}
curl_close($request);
?>