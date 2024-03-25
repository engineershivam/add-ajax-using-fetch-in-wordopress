<?php
/************ Fetch Ajax *************/

function ajaxcall() {

    $title = $_POST['post_title'];

	$a = [
		"name"=>"shivam",
		"title"=>$title,
	];
	echo json_encode($a);
	exit;
}
add_action('wp_ajax_ajaxcall', 'ajaxcall' );
add_action('wp_ajax_nopriv_ajaxcall', 'ajaxcall');

/************ Fetch Ajax *************/

?>