<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DashBoard</title>
    <link rel="stylesheet" href="dashboard_css.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script>
        $(document).ready(function()
        {
            setInterval(function(){
                var dt=new Date();
                $(".container_mail").text("Time : " + dt.getHours() + " : " + dt.getMinutes() + " : " + dt.getSeconds());
            },1000);

        //TEMPERATURE
        chatillon_loc();
        ste_loc();
        ploemel_loc();
        temperature_chambre_nico();

        //ACTUALITE
        actu();

        //WIND
        wind();

        // SPOTIFY FRAMES
            spotify_iframe()
        //MISE EN FORME
        //bouton_send()

        //ACTUALISATION
        setInterval(actu, 3600000);      //3600000ms : 1H
        setInterval(chatillon_loc, 900000);     //900000ms : 15min
        setInterval(ste_loc, 900000);
        setInterval(ploemel_loc, 900000);
        setInterval(temperature_chambre_nico, 300000);  //300000ms : 5min

        });



    </script>
</head>

<body>
<div class="content">
    <div id="gauche">
            <!-- PLOEMEL -->
        <div id="head_deroulant">
            <div id="div_deroulant">
                <div>
                    <p id="temp_chambre" style="color:white; float: left"></p>
                    <p id="text_temp_chambre" style="color:white; float:right"></p>
                </div>
            </div>
                <div class="container" id="container_1">
                    <div class="icon"><img id="wiconp" src="" alt="Weather icon"></div>
                    <div class="bloc-info-p">
                        <p class="locationp"></p>
                        <p class="tempsp"></p>
                    </div>
                    <div class="wind_div">
                        <img id="wind_img" src="wind.png" alt="Wind">
                    </div>
                    <div class="bloc-ville-p">
                        <p class="temperaturep" style="color:white"></p>
                    </div>
                </div>


        </div>
     <!-- CHATILLON -->
        <div class="container">
            <div class="icon"><img id="wiconc" src="" alt="Weather icon"></div>
                <div class="bloc-info-c">
                    <p style="font-size : 20px; padding-top:10px;">Châtillon</p>
                    <p class="tempsc"></p>
                </div>
                <div class="bloc-ville-c">
                    <p class="temperaturec" style="color:white"></p>
                </div>
        </div>
     <!-- SAINT- ETIENNE -->
        <div class="container">
            <div class="icon"><img id="wicons" src="" alt="Weather icon"></div>
                <div class="bloc-info-s">
                    <p class="locations"></p>
                    <p class="tempss"></p>
                </div>
                <div class="bloc-ville-s">
                    <p class="temperatures" style="color:white"></p>
                </div>
        </div>

        <div class="container-actu">
            <div class="header-actu">
                <div style="float:left"><p class="titre">Actualités</p></div>


                    <div id="date_actu">
                        <p class="date_html"></p>
                    </div>
                     <div id ="heure_actu">
                        <p class="heure_maj"></p>
                    </div>
                </div>
            <div class="bloc-info-actu">
    <!-- INFORMATION 0 -->
                    <div class="info_0">
                        <div class="image_actu">
                            <img id="simg_0" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                            <div class="txt-actu"><p class="actu_html_0"  style="display:contents"></p></div>
                        </div>
                    </div>
                <hr class="actu_land">
    <!-- INFORMATION 1 -->
                    <div class="info_1">
                        <div class="image_actu">
                            <img id="simg_1" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                            <div class="txt-actu"><p class="actu_html_1" style="display:contents"></p></div>
                        </div>
                    </div>
                <hr class="actu_land">
    <!-- INFORMATION 2 -->
                    <div class="info_2">
                        <div class="image_actu">
                            <img id="simg_2" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                            <div class="txt-actu"><p class="actu_html_2" style="display:contents"></p></div>
                        </div>
                    </div>
                <hr class="actu_land">
    <!-- INFORMATION 3 -->
                <div class="info_3">
                    <div class="image_actu">
                        <img id="simg_3" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                        <div class="txt-actu"><p class="actu_html_3" style="display:contents"></p></div>
                    </div>
                </div>
                <hr class="actu_port">
    <!-- INFORMATION 4 -->
                <div class="info_4">
                    <div class="image_actu">
                        <img id="simg_4" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                        <div class="txt-actu"><p class="actu_html_4" style="display:contents">------------TEXTE n°4------------</p></div>
                    </div>
                </div>
                <hr class="actu_port">
    <!-- INFORMATION 5 -->
                <div class="info_5">
                    <div class="image_actu">
                        <img id="simg_5" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                        <div class="txt-actu"><p class="actu_html_5" style="display:contents">------------TEXTE n°5------------</p></div>
                    </div>
                </div>
                <hr class="actu_port">
    <!-- INFORMATION 6 -->
                <div class="info_6">
                    <div class="image_actu">
                        <img id="simg_6" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                        <div class="txt-actu"><p class="actu_html_6" style="display:contents">------------TEXTE n°6------------</p></div>
                    </div>
                </div>
                <hr class="actu_port">
    <!-- INFORMATION 7 -->
                <div class="info_7">
                    <div class="image_actu">
                        <img id="simg_7" src="actu.jpg" alt="Actu img" style="border-radius:5px; width:150px; height:auto;">
                        <div class="txt-actu"><p class="actu_html_7" style="display:contents">------------TEXTE n°7------------</p></div>
                    </div>
                </div>



            </div>
        </div>
    </div>
    <div id="centre">

        <div class="frame_note" style="color: white;">
            <div class="titre_note"><p style="padding-left: 15px;font-size: 26px;">Note </p></div>
            <div class="note">
                <div class="input" id="text_div">
                    <label class="container_tab" id="check_a">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <input  id="a" type="text"  onfocusout="unfoc_a()">
                    <label class="container_tab" id="check_b">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <input  id="b" type="text"  onfocusout="unfoc_b()">
                    <label class="container_tab" id="check_c">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <input  id="c" type="text"  onfocusout="unfoc_c()">
                    <label class="container_tab" id="check_d">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <input  id="d" type="text"  onfocusout="unfoc_d()">

                    <label class="container_tab" id="check_e";>
                        <input type="checkbox" id="check_e_tab">
                        <span class="checkmark"></span>
                    </label>
                    <input  id="e" type="text"  onfocusout="unfoc_e()">
                </div>

            </div>
            <div class="boutons_textarea" style="margin-top: 10px;color: white;">
                <div id="bouton_send"><p class="text_bouton_send">Send</p> </div>
                <div class="bouton_copy"><p class="text_bouton_copy">Copy</p> </div>
                <p id="obj" style="padding-top: 50px"></p>
            </div>
        </div>
    </div>
    <script>
                const a_res = document.getElementById('a');
                const b_res= document.getElementById('b');
                const c_res = document.getElementById('c');
                const d_res = document.getElementById('d');
                const e_res = document.getElementById('e');

                const bouton_send = document.getElementById('bouton_send');

                const key_a = "stockage_text_a";
                const key_b = "stockage_text_b";
                const key_c = "stockage_text_c";
                const key_d = "stockage_text_d";
                const key_e = "stockage_text_e";

                const local_text_a = localStorage.getItem(key_a);
                const local_text_b = localStorage.getItem(key_b);
                const local_text_c = localStorage.getItem(key_c);
                const local_text_d = localStorage.getItem(key_d);
                const local_text_e = localStorage.getItem(key_e);

                //------------------------------------------------------------
                let a = document.getElementById("a");
                let b = document.getElementById("b");
                let c = document.getElementById("c");
                let d = document.getElementById("d");
                let e = document.getElementById("e");
                let div_a = document.getElementById("check_a");
                let div_b = document.getElementById("check_b");
                let div_c = document.getElementById("check_c");
                let div_d = document.getElementById("check_d");
                let div_e = document.getElementById("check_e");

                let check_e_tab = document.getElementById("check_e_tab");
                //------------------------------------------------------------

                bouton_send.onclick = function(){
                    if (check_e_tab.checked == true) {
                        localStorage.getItem(key_e);
                    } else{
                        array_text_e = JSON.parse(local_text_e);
                        e_res.value = array_text_e;
                    }
                }

                //------------------------------------------------------------

                if (local_text_a === null) {
                    div_a.style.display = "none";
                    array_text_a = [];
                } else if (local_text_a != null) {
                    div_a.style.display = "block";
                    array_text_a = JSON.parse(local_text_a);
                    a_res.value = array_text_a;

                }
                if (local_text_b === null) {
                    div_b.style.display = "none";
                    array_text_b = [];
                } else if (local_text_b != null) {
                    div_b.style.display = "block";
                    array_text_b = JSON.parse(local_text_b);
                    b_res.value = array_text_b;
                }
                if (local_text_c === null) {
                    div_c.style.display = "none";
                    array_text_c = [];
                } else if (local_text_c != null) {
                    div_c.style.display = "block";
                    array_text_c = JSON.parse(local_text_c);
                    c_res.value = array_text_c;
                }


                if (local_text_d === null){
                    div_d.style.display="none";
                    array_text_d = [];
                } else if (local_text_d != null) {
                    div_d.style.display = "block";
                    array_text_d = JSON.parse(local_text_d);
                    d_res.value = array_text_d;
                }

                if (local_text_e === null) {
                    div_e.style.display = "block";
                    array_text_e = JSON.parse(local_text_e);
                    e_res.value = array_text_e;
                } else {
                    div_e.style.display="none";
                    array_text_e = [];
                }



                //-----------------------------------------|



                function unfoc_a() {
                    valeur_a = a_res.value;
                //array_text_a.push(valeur_a);  //Pour stocker plusieurs valeurs dans le local storage dans un même item
                localStorage.setItem(key_a, JSON.stringify(valeur_a));
                }
                function unfoc_b() {
                    valeur_b = b_res.value;
                    localStorage.setItem(key_b, JSON.stringify(valeur_b));
                }
                function unfoc_c() {
                    valeur_c = c_res.value;
                    localStorage.setItem(key_c, JSON.stringify(valeur_c));
                }
                function unfoc_d() {
                    valeur_d = d_res.value;
                    localStorage.setItem(key_d, JSON.stringify(valeur_d));
                }
                function unfoc_e() {
                    valeur_e = e_res.value;
                    localStorage.setItem(key_e, JSON.stringify(valeur_e));
                }
            </script>

    <div id="droite">
        <div class="frame_musique" style="color: white;">
            <div class="titre_musique"><p style="padding-left: 15px;font-size: 26px;">Musique</p></div>
                <div class="musique">
                    <select name="select_spotify" id="sel_spot"
                            onchange="
                    change_spot = document.getElementById('spotify_iframe');

                    if (this.selectedIndex == 1){ //ORELSAN
                        var src_iframe = 'https://open.spotify.com/embed/album/5nyLaTsztHW8mI1KAWeGkS';
                    }else if (this.selectedIndex == 2){ //47TER
                        var src_iframe = 'https://open.spotify.com/embed/album/4e7ePEb65YZL6niyu77tzn';
                    } else if (this.selectedIndex == 3){ //PLK
                        var src_iframe = 'https://open.spotify.com/embed/album/0IBVzjJxYn6o69T4FfXMLi';
                    } else if (this.selectedIndex == 4){ //Lomepal
                        var src_iframe = 'https://open.spotify.com/embed/album/5dZVLJVUZduRmYFINFgE7Y';
                    } else if (this.selectedIndex == 5){ //Damso
                        var src_iframe = 'https://open.spotify.com/embed/album/7JJ1Zqwc0m0cDyXXodXCqb';
                    }

                    change_spot.style.height = 225 + 'px';
                    change_spot.style.marginTop = 10 + 'px';
                    change_spot.style.marginRight = 15 + 'px';
                    change_spot.style.marginLeft = 15 + 'px';
                    change_spot.style.borderRadius = '10px';
                    change_spot.src = src_iframe;
                    ">
                        <option selected="selected">Définir la musique</option>
                        <option value="Orelsan">Orelsan</option>
                        <option value="47TER">47ter</option>
                        <option value="PLK">PLK</option>
                        <option value="Lomepal">Lomepal</option>
                        <option value="Damso">Damso</option>
                    </select>

                    <div class="frame_sp" id ="result_spot">
                        <iframe src="" id="spotify_iframe" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <!--
                    <div class="container_mail">
                        <p> HEURE </p>
                    </div>
                    -->
                </div>
        </div>
    </div>

    <div class="short">
        <div class="container_shortcut">
            <div class="ent_istp"><a href="https://ent.istp-france.com/ENT/Eleve/default.aspx" target="_blank"><img class="img_ent" src="img/istp_ent.jpg" alt=""></a></div>
            <div class="ent_istp"><a href="" target="_blank"><img class="img_ent" src="img/istp_ent.jpg" alt=""></a></div>
        </div>
    </div>

    </div>
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
        echo("\n"."De : ".$sender_2);


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
</div>
    <script type="text/javascript" src="dashboard.js"></script>
</body>

</html>