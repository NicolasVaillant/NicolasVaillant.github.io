
<?php


//$hostname = '{imap.gmail.com:993/debug/imap/ssl/novalidate-cert}'; 
//$username = 'vnico56@gmail.com'; $password = 'akspmsebzjegtxrd'; 
//$inbox = imap_open($hostname,$username,$password) or die('Cannot connect to Gmail: ' . imap_last_error());


 //Establishing connection
 $url = "{imap.gmail.com:993/debug/imap/ssl/novalidate-cert}INBOX";
 $id = "vnico56@gmail.com";
 $pwd = "akspmsebzjegtxrd";
 $imap = imap_open($url, $id, $pwd);
 
 //list of mailboxes
 $list = imap_listmailbox($imap, $url, "*");

 $headers = imap_headers($imap); //Obtenir objets des mails 

 $last = imap_num_msg($imap);

 $single_mail_1 = imap_headerinfo($imap, $last);
 $single_mail_2 = imap_headerinfo($imap, $last - 1);
 $single_mail_3 = imap_headerinfo($imap, $last - 2);

 $test = imap_num_recent($imap); //Nombre de mail récent

 $single_mail_body = imap_body($imap, $last);

//Messages récents
echo "<pre>";
    echo "Nombre de messages récents : ";
    print_r($test);
echo "</pre>";

echo "<pre>";
    //VARIABLES
    $date_1 =  $single_mail_1->date;
    $date_2 =  $single_mail_2->date;
    $date_3 =  $single_mail_3->date;

    $sujet_1 =  $single_mail_1->subject;
    $sujet_2 =  $single_mail_2->subject;
    $sujet_3 =  $single_mail_3->subject;

    $sender_1 =  $single_mail_1->fromaddress;
    $sender_2 =  $single_mail_2->fromaddress;
    $sender_3 =  $single_mail_3->fromaddress;

    //echo ("\n"."Objet : ");
    //echo $headers[$last - 1];
    //print_r($single_mail_1);
        //print_r($headers);

    echo ("\n"."Heure : ".$date_1);
    echo date("\n"."d-m, H:i", strtotime($date_1));
    if (!empty($sujet_1)){
        echo ("\n".$sujet_1);
    } else {
        echo ("\n"."Aucun objet");
    }
    echo ("\n"."De : ".$sender_1);

    echo ("\n"."\n"."Heure : ".$date_2);
    if (!empty($sujet_2)){
        echo ("\n".$sujet_2);
    } else {
        echo ("\n"."Aucun objet");
    }
    echo("\n"."De : ".$sender_2); // "<p style='color:blue;'>" . //'<div class="name">'.


    echo ("\n"."\n"."Heure : ".$date_3);
    if (!empty($sujet_3)){
        echo ("\n".$sujet_3);
    } else {
        echo ("\n"."Aucun objet");
    }
    echo ("\n"."De : ".$sender_3);

echo "</pre>";
 
 //Closing the connection
 imap_close($imap);  
?>
<style>
.name{
    background:red;
}
</style>