<?php
 if (isset($_SESSION["tiempo"])) {  
    $_SESSION["tiempo"] = time();
}

class ctrl_contact{
	function send_email_contact(){
		$message = [
			'type' => 'contact',
			'inputName' => $_POST['name'],
			'fromEmail' => $_POST['email'],
			'inputMatter' => $_POST['matter'],
			'inputMessage' => $_POST['message']
		];
		 $email = json_decode(mail::send_email($message), true);
		if (!empty($email)) {
			if ($email['message'] == "Queued. Thank you."){
				echo json_encode("Succes");
			}else {
				echo json_encode('Error');
			}
		}else {
			echo json_encode('Error');
		}
	}
}
