<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    // error_reporting(E_ALL ^ E_NOTICE); // hide all basic notices from PHP

    if(isset($_POST['submitted'])) {

        if (!isset($_POST['phone']) && !isset($_POST['email'])) {
            header('HTTP/1.1 400 Bad Request', true, 400);
            exit;
        }

        // require a name from user
        $name = trim($_POST['name']);
        $phone = trim($_POST['phone']);
        $email = trim($_POST['email']);

        if (($phone === '') && ($email === '')) {
            header('HTTP/1.1 400 Bad Request', true, 400);
            exit;
        }

        // we need at least some content
        if(trim($_POST['comments']) !== '') {
            if(function_exists('stripslashes')) {
                $comments = stripslashes(trim($_POST['comments']));
            } else {
                $comments = trim($_POST['comments']);
            }
        }

        if (isset($_POST['theme'])) {
            if(!(trim($_POST['theme']) === '')) {
                $theme = trim($_POST['theme']);
            }
        }

        // upon no failure errors let's email now!

        // $emailTo = 'mikhail.vnukov@gmail.com';
        $emailTo = 'russian-attraction@mail.ru';
        $subject = 'Новая заявка: '.$email;
        $body = "Имя: $name \r\nТелефон: $phone \r\nEmail: $email";


        if (isset($theme)) {
            $body .= "\r\nМодель: ";

            if (theme === 'chosing') {
                $body .= 'Выбор аттракциона';
            }

            if (theme === 'law') {
                $body .= 'Юридические тонкости и полиция';
            }

            if (theme === 'delivery') {
                $body .= 'Вопросы по доставке';
            }
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