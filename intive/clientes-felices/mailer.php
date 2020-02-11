<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $company = trim($_POST["company"]);



        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($company) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            header('Location:mensajeNoEnviado.html');
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "mkt@intive-fdv.com";

        // Set the email subject.
        $subject = "Contacto desde landing - Caso de Exito - Dropcar";

        // Build the email content.
        $email_content = "Nombre: $name\n";
        $email_content .= "Empresa: $company\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Mensaje: $message\n";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            header('Location:mensajeEnviado.html');
            exit;
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            header('Location:mensajeNoEnviado.html');
            exit;
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        header('Location:mensajeNoEnviado.html');
        exit;
    }

?>
