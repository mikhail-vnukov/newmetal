<?php
	ini_set('display_errors', 1);
	error_reporting(E_ALL);

	// error_reporting(E_ALL ^ E_NOTICE); // hide all basic notices from PHP

	if(isset($_POST['submitted'])) {
		// require a name from user
		$name = trim($_POST['name']);
		$phone = trim($_POST['phone']);
		$email = trim($_POST['email']);

		// we need at least some content
		if(trim($_POST['comments']) !== '') {
			if(function_exists('stripslashes')) {
				$comments = stripslashes(trim($_POST['comments']));
			} else {
				$comments = trim($_POST['comments']);
			}
		}

		if (isset($_POST['model'])) {
			if(!(trim($_POST['model']) === '')) {
				$model = trim($_POST['model']);
			}
		}

		// upon no failure errors let's email now!

		// $emailTo = 'mikhail.vnukov@gmail.com';
		$emailTo = 'russian-attraction@mail.ru';
		$subject = 'Новая заявка: '.$email;
		$body = "Имя: $name \r\nТелефон: $phone \r\nEmail: $email";


		if (isset($model)) {
			$body .= "\r\nМодель: ";
			$body .= ($model === "standart") ? "Стандарт" : "Лето-2013";
		}

		if (isset($comments)) {
			$body .= "\r\nВопрос: $comments";
		}

		$headers = 'From: <admin@russian-attraction.ru>' . "\r\n" . 'Reply-To: ' . $email .
		 		"\r\nMIME-Version: 1.0" . "\r\n" .
               	"Content-type: text/plain; charset=UTF-8" . "\r\n";

		mail($emailTo, $subject, $body, $headers);
	}
?>