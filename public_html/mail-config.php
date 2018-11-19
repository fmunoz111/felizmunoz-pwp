<?php
/**
 * mail-config.php
 * This file contains your reCAPTCHA API keys and your recipient's email addresses.
 *
 * @param string $siteKey your public reCAPTCHA API key
 * @param string $secret your secret reCAPTCHA API key
 * @param array $MAIL_RECIPIENTS array of email addresses and corresponding recipient names to send form responses to
 *
 * @author Rochelle Lewis <rlewis37@cnm.edu>
 *
 * This file contains sensitive information and should ALWAYS be gitignored!
 **/

//the SendGrid SMTP authorization
$smtpUser = '-- SendGrid USER --';
$smtpSecret = '-- SendGrid SECRET --';

// your Google reCAPTCHA keys here
$siteKey = '6LcLznsUAAAAAKr5Yy3iDrIqmDMEQVG6SAhemrEs';
$secret = '6LcLznsUAAAAAPqUGX58uCejY4AngwuY3_TTicDH';

/**
 * attach the recipients to the message
 * notice this an array that can include or omit the the recipient's real name
 * use the recipients' real name where possible; this reduces the probability of the Email being marked as spam
 **/
$MAIL_RECIPIENTS = ["fmunoz273@gmail.com" => "Feliz Munoz"];