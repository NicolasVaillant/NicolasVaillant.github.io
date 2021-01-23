//PLOEMEL : P
        const tempsp = document.querySelector('.tempsp')
        const temperaturep = document.querySelector('.temperaturep')
        const localisationp = document.querySelector('.locationp')
        const blocvillep = document.querySelector('.bloc-ville-p')
        temperaturep.onclick = lien_temp_p;
        temperaturep.style.cursor = "pointer";
        function lien_temp_p(){
            window.open("https://meteofrance.com/previsions-meteo-france/ploemel/56400");
        }
//CHATILLON : C
        const tempsc = document.querySelector('.tempsc')
        const temperaturec = document.querySelector('.temperaturec')
        const blocvillec = document.querySelector('.bloc-ville-c')
        temperaturec.onclick = lien_temp_c;
        temperaturec.style.cursor = "pointer";
        function lien_temp_c(){
            window.open("https://meteofrance.com/previsions-meteo-france/chatillon/92320");
        }

//SAINT-ETIENNE : S
        const tempss = document.querySelector('.tempss')
        const temperatures = document.querySelector('.temperatures')
        const localisations = document.querySelector('.locations')
        const blocvilles = document.querySelector('.bloc-ville-s')
        temperatures.onclick = lien_temp_s;
        temperatures.style.cursor = "pointer";
        function lien_temp_s(){
            window.open("https://meteofrance.com/previsions-meteo-france/saint-etienne/42000");
        }

//ACTUALITE
        const actu_html_0 = document.querySelector('.actu_html_0')
        const actu_html_1 = document.querySelector('.actu_html_1')
        const actu_html_2 = document.querySelector('.actu_html_2')
        const actu_html_3 = document.querySelector('.actu_html_3')
//DATE
        const date_html = document.querySelector('.date_html')
        const heure_maj = document.querySelector('.heure_maj')

//FONCTIONS

        function ploemel_loc(){
        //Ploemel 47.6545024 -3.0605312
            window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.6545024&lon=-3.0605312&lang=fr&units=metric&appid=95e0be7242009f92744147d50180d16b')
            .then(res => res.json())
            .then((resJson) => {
            console.log(resJson)
            //res1Json.main.temp = document.getElementById('tempsp').innerHTML;

            condp = resJson.weather[0].description;<!--resultatsAPI.current.weather[0].description-->
            tempsp.innerText = condp.charAt(0).toUpperCase() + condp.substr(1);
            temperaturep.innerText = (resJson.main.temp).toFixed(1) + '°C';
            if (resJson.main.temp <= 25.0 && resJson.main.temp > 10.0){
                blocvillep.style.backgroundColor="#70af85";
                temperaturep.setAttribute("style", "color:white");
            } else if (resJson.main.temp < 50.0 && resJson.main.temp > 25.0){
                blocvillep.style.backgroundColor="#ff4646";
                temperaturep.setAttribute("style", "color:white");
            } else if (resJson.main.temp <= 10.0 && resJson.main.temp > -50.0){
                blocvillep.style.backgroundColor="#f1f1f1";
                temperaturep.setAttribute("style", "color:#11698e");
            } else{
                blocvillep.style.backgroundColor="#11698e";
                temperaturep.setAttribute("style", "color:white");
            }
            localisationp.innerText  = resJson.name;
            var iconcodep = resJson.weather[0].icon;
            var iconurlp = "http://openweathermap.org/img/w/" + iconcodep + ".png";
            var x = document.getElementById("wiconp");
            x.setAttribute("src", iconurlp);
            })
        }
        function ste_loc(){
        //Saint-E 45.4379997253418 4.389527320861816
            window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.4379997253418&lon=4.389527320861816&lang=fr&units=metric&appid=95e0be7242009f92744147d50180d16b')
            .then(res1 => res1.json())
            .then((res1Json) => {
            console.log(res1Json)
            //res1Json.main.temp = document.getElementById('temps-s').innerHTML;

            conds = res1Json.weather[0].description;<!--resultatsAPI.current.weather[0].description-->
            tempss.innerText = conds.charAt(0).toUpperCase() + conds.substr(1);
            temperatures.innerText = (res1Json.main.temp).toFixed(1) + '°C';
            if (res1Json.main.temp <= 25.0 && res1Json.main.temp > 10.0) {
                blocvilles.style.backgroundColor="#70af85";
                temperatures.setAttribute("style", "color:white");

            } else if (res1Json.main.temp < 50.0 && res1Json.main.temp > 25.0){
                blocvilles.style.backgroundColor="#ff4646";
                temperatures.setAttribute("style", "color:white");

            } else if (res1Json.main.temp <= 10.0 && res1Json.main.temp > -50.0){
                blocvilles.style.backgroundColor="#f1f1f1";
                temperatures.setAttribute("style", "color:#11698e");
            } else{
                blocvilles.style.backgroundColor="#11698e";
                temperatures.setAttribute("style", "color:white");

            }
            localisations.innerText = res1Json.name;
            var iconcodes = res1Json.weather[0].icon;
            var iconurls = "http://openweathermap.org/img/w/" + iconcodes + ".png";
            var y = document.getElementById("wicons");
            y.setAttribute("src", iconurls);
            })
        }
        function chatillon_loc(){
        //Chatillon 48.862725 2.287592
            window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.862725&lon=2.287592&lang=fr&units=metric&appid=95e0be7242009f92744147d50180d16b')
            .then(res2 => res2.json())
            .then((res2Json) => {
            console.log(res2Json) // AFFICHAGE DANS LA CONSOLE - NON OBLIGATOIRE
            //res2Json.main.temp = document.getElementById('temps-c').innerHTML;

            condc = res2Json.weather[0].description;<!--resultatsAPI.current.weather[0].description-->
            tempsc.innerText = condc.charAt(0).toUpperCase() + condc.substr(1);
            temperaturec.innerText = (res2Json.main.temp).toFixed(1) + '°C';
            if (res2Json.main.temp < 50.0 && res2Json.main.temp > 10.0) {
                blocvillec.style.backgroundColor="#70af85";
                temperaturec.setAttribute("style", "color:white")
            } else if (res2Json.main.temp < 50.0 && res2Json.main.temp > 25.0){
                blocvillec.style.backgroundColor="#ff4646";
                temperaturec.setAttribute("style", "color:white")
            } else if (res2Json.main.temp <= 10.0 && res2Json.main.temp > -50.0){
                blocvillec.style.backgroundColor="#f1f1f1";
                temperaturec.setAttribute("style", "color:#11698e");
            } else{
                blocvillec.style.backgroundColor="#11698e";
                temperaturec.setAttribute("style", "color:white")
            }

            var iconcodec = res2Json.weather[0].icon;
            var iconurlc = "http://openweathermap.org/img/w/" + iconcodec + ".png";
            var z = document.getElementById("wiconc");
            z.setAttribute("src", iconurlc);
            })
        }
        function actu(){

            window.fetch('http://newsapi.org/v2/top-headlines?'+'country=fr&' +'apiKey=55cddbaaa6f24144a436a1fefb9d5eac')
            .then(res_actu => res_actu.json())
            .then((res_actu) => {
            console.log(res_actu)

            var actu_noms = [];
            var nombre_actu = 5;

            for(i=0; i<=nombre_actu; i++)
            {
               actu_noms.push(res_actu.articles[i].title);
               actu_info_0 = actu_noms[i]
            }

            actu_info_0 = res_actu.articles[0].title;
            actu_info_1 = res_actu.articles[1].title;
            actu_info_2 = res_actu.articles[2].title;
            actu_info_3 = res_actu.articles[3].title;

            actu_name_0 = res_actu.articles[0].source.name;
            actu_name_1 = res_actu.articles[1].source.name;
            actu_name_2 = res_actu.articles[2].source.name;
            actu_name_3 = res_actu.articles[3].source.name;

            actu_info_4 = res_actu.articles[4].title;
            actu_info_5 = res_actu.articles[5].title;
            actu_info_6 = res_actu.articles[6].title;

            actu_name_4 = res_actu.articles[4].source.name;
            actu_name_5 = res_actu.articles[5].source.name;
            actu_name_6 = res_actu.articles[6].source.name;

            actu_info_7 = res_actu.articles[7].title;
            actu_info_8 = res_actu.articles[8].title;
            actu_info_9 = res_actu.articles[9].title;

            actu_name_7 = res_actu.articles[7].source.name;
            actu_name_8 = res_actu.articles[8].source.name;
            actu_name_9 = res_actu.articles[9].source.name;

            if (actu_info_0.length > 80){
                info_0 = actu_info_0.slice(0,80);
                actu_0_slice = info_0 + "... - " + actu_name_0;
            } else {
                actu_0_slice = actu_info_0;}
            if (actu_info_1.length > 80){
                info_1 = actu_info_1.slice(0,80);
                actu_1_slice = info_1 + "... - " + actu_name_1;
            } else{
                actu_1_slice = actu_info_1;}
            if (actu_info_2.length > 80){
                info_2 = actu_info_2.slice(0,80);
                actu_2_slice = info_2 + "... - " + actu_name_2;
            } else{
                actu_2_slice = actu_info_2;}
            if (actu_info_3.length > 80){
                info_3 = actu_info_3.slice(0,80);
                actu_3_slice = info_3 + "... - " + actu_name_3;
            } else{
                actu_3_slice = actu_info_3;}
            if (actu_info_4.length > 80){
                info_4 = actu_info_4.slice(0,80);
                actu_4_slice = info_4 + "... - " + actu_name_4;
            } else{
                actu_4_slice = actu_info_4;}
            if (actu_info_5.length > 80){
                info_5 = actu_info_5.slice(0,80);
                actu_5_slice = info_5 + "... - " + actu_name_5;
            } else{
                actu_5_slice = actu_info_5;}
            if (actu_info_6.length > 80){
                info_6 = actu_info_6.slice(0,80);
                actu_6_slice = info_6 + "... - " + actu_name_6;
            } else{
                actu_6_slice = actu_info_6;}
            if (actu_info_7.length > 80){
                    info_7 = actu_info_7.slice(0,80);
                    actu_7_slice = info_7 + "... - " + actu_name_7;
                } else{
                actu_7_slice = actu_info_7;}
            if (actu_info_8.length > 80){
                    info_8 = actu_info_8.slice(0,80);
                    actu_8_slice = info_8 + "... - " + actu_name_8;
                } else{
                actu_8_slice = actu_info_8;}
            if (actu_info_9.length > 80){
                    info_9 = actu_info_9.slice(0,80);
                    actu_9_slice = info_9 + "... - " + actu_name_9;
                } else{
                actu_9_slice = actu_info_9;}

            //DATES ARTICLES
            actu_info_date_0 = res_actu.articles[0].publishedAt;
            year_0 = actu_info_date_0.slice(0,4);
            month_0 = actu_info_date_0.slice(5,7);
            day_0 = actu_info_date_0.slice(8,10);
            date_0 = day_0 + "-" + month_0 + "-" + year_0;
            date_html.innerText = date_0;

            var dt = new Date();
            //date_maj = dt.getHours() + " : " + dt.getMinutes();
            var h=dt.getHours();
                if (h<10) {h = "0" + h}
            var m=dt.getMinutes();
                if (m<10) {m = "0" + m}

                date_maj = h+" : "+m;

            heure_maj.innerText = "Mise à jour à " + date_maj ;

            function premier_appel_actu(){
                function anim_premier_0(){
                    $( ".info_0" ).animate({opacity: 1}, 800);
                }
                function anim_premier_1(){
                    $( ".info_1" ).animate({opacity: 1}, 800);
                }
                function anim_premier_2(){
                    $( ".info_2" ).animate({opacity: 1}, 800);
                }
                function anim_premier_3(){
                    $( ".info_3" ).animate({opacity: 1}, 800);
                }
                setTimeout(anim_premier_0, 0);
                setTimeout(anim_premier_1, 235);
                setTimeout(anim_premier_2, 470);
                setTimeout(anim_premier_3, 700);

            //LIAISON HTML
                function set_text(){
                    actu_html_1.innerText = actu_1_slice;
                    actu_html_2.innerText = actu_2_slice;
                    actu_html_3.innerText = actu_3_slice;
                }
                actu_html_0.innerText = actu_0_slice;
                setTimeout(set_text, 250);

            //IMAGE 0
                var img_0 = document.getElementById("simg_0");
                var div_actu_0 = document.getElementById("div_actu_0");
                div_actu_0.onclick = lien_0;
                img_0.style.borderRadius = "5px"
                img_0.style.width = 130 + "px";
                img_0.style.cursor = "pointer";
                function lien_0(){
                    window.open(res_actu.articles[0].url);
                }
                if (res_actu.articles[0].urlToImage === null | actu_name_0 === "Boursorama" | actu_name_0 === "Ozap"){
                    img_0.style.height = 50 + "px";
                    img_0.style.marginTop = 10 + "px";
                    img_0.setAttribute("src", "actu.jpg");
                } else if (res_actu.articles[0].urlToImage != null){
                    img_0.style.height = 75 + "px";
                    img_0.style.marginTop = 0 + "px";
                    var iconcode_html_0 = res_actu.articles[0].urlToImage;
                    img_0.setAttribute("src", iconcode_html_0);
                }
            //IMAGE 1
                var img_1 = document.getElementById("simg_1");
                var div_actu_1 = document.getElementById("div_actu_1");
                div_actu_1.onclick = lien_1;
                img_1.style.borderRadius = "5px"
                img_1.style.width = 130 + "px";
                img_1.style.cursor = "pointer";
                function lien_1(){
                    window.open(res_actu.articles[1].url);
                }
                if (res_actu.articles[1].urlToImage === null | actu_name_1 === "Boursorama" | actu_name_1 === "Ozap"){
                    function setIMG_actu_1(){
                        img_1.style.height = 50 + "px";
                        img_1.style.marginTop = 10 + "px";
                        img_1.setAttribute("src", "actu.jpg");
                    }
                    setTimeout(setIMG_actu_1, 150);
                } else if (res_actu.articles[1].urlToImage != null){
                    img_1.style.height = 75 + "px";
                    img_1.style.marginTop = 0 + "px";
                    var iconcode_html_1 = res_actu.articles[1].urlToImage;
                    function setIMG_1(){
                        img_1.setAttribute("src", iconcode_html_1);
                    }
                    setTimeout(setIMG_1, 150);
                }

            //IMAGE 2
                var img_2 = document.getElementById("simg_2");
                var div_actu_2 = document.getElementById("div_actu_2");
                div_actu_2.onclick = lien_2;
                img_2.style.borderRadius = "5px"
                img_2.style.width = 130 + "px";
                img_2.style.cursor = "pointer";
                function lien_2(){
                    window.open(res_actu.articles[2].url);
                }
                if (res_actu.articles[2].urlToImage === null | actu_name_2 === "Boursorama" | actu_name_2 === "Ozap"){
                    function setIMG_actu_2(){
                        img_2.style.height = 50 + "px";
                        img_2.style.marginTop = 10 + "px";
                        img_2.setAttribute("src", "actu.jpg");
                    }
                    setTimeout(setIMG_actu_2, 150);
                } else if (res_actu.articles[2].urlToImage != null){
                    img_2.style.height = 75 + "px";
                    img_2.style.marginTop = 0 + "px";
                    var iconcode_html_2 = res_actu.articles[2].urlToImage;
                    function setIMG_2(){
                        img_2.setAttribute("src", iconcode_html_2);
                    }
                    setTimeout(setIMG_2, 150);
                }

            //IMAGE 3
                var img_3 = document.getElementById("simg_3");
                var div_actu_3 = document.getElementById("div_actu_3");
                div_actu_3.onclick = lien_3;
                img_3.style.borderRadius = "5px"
                img_3.style.width = 130 + "px";
                img_3.style.cursor = "pointer";
                function lien_3(){
                    window.open(res_actu.articles[3].url);
                }
                if (res_actu.articles[3].urlToImage === null | actu_name_3=== "Boursorama" | actu_name_3 === "Ozap"){
                    function setIMG_actu_3(){
                        img_3.style.height = 50 + "px";
                        img_3.style.marginTop = 10 + "px";
                        img_3.setAttribute("src", "actu.jpg");
                    }
                    setTimeout(setIMG_actu_3, 150);
                } else if (res_actu.articles[3].urlToImage != null){
                    img_3.style.height = 75 + "px";
                    img_3.style.marginTop = 0 + "px";
                    var iconcode_html_3 = res_actu.articles[3].urlToImage;
                    function setIMG_3(){
                        img_3.setAttribute("src", iconcode_html_3);
                    }
                    setTimeout(setIMG_3, 150);
                }

                function animation_v_second(){
                    function anim_premier_0_2(){
                        $( ".info_0" ).animate({opacity: 0}, 800);
                    }
                    function anim_premier_1_2(){
                        $( ".info_1" ).animate({opacity: 0}, 800);
                    }
                    function anim_premier_2_2(){
                        $( ".info_2" ).animate({opacity: 0}, 800);
                    }
                    function anim_premier_2_3(){
                        $( ".info_3" ).animate({opacity: 0}, 800);
                    }
                    setTimeout(anim_premier_0_2, 0);
                    setTimeout(anim_premier_1_2, 235);
                    setTimeout(anim_premier_2_2, 470);
                    setTimeout(anim_premier_2_3, 700);

                    setTimeout(second_appel_actu, 1500);
                }
                setTimeout(animation_v_second, 20000);
            }

            function second_appel_actu(){
                function anim_second_0(){
                    $( ".info_0" ).animate({opacity: 1}, 1000);
                }
                function anim_second_1(){
                    $( ".info_1" ).animate({opacity: 1}, 1000);
                }
                function anim_second_2(){
                    $( ".info_2" ).animate({opacity: 1}, 1000);
                }
                function anim_second_3(){
                    $( ".info_3" ).animate({opacity: 1}, 1000);
                }
            //$( ".info_0" ).animate({left: '0px'});
            setTimeout(anim_second_0, 0);
            setTimeout(anim_second_1, 235);
            setTimeout(anim_second_2, 470);
            setTimeout(anim_second_3, 700);

            //LIAISON HTML
                function set_text_2(){
                    actu_html_1.innerText = actu_5_slice;
                    actu_html_2.innerText = actu_6_slice;
                    actu_html_3.innerText = actu_7_slice;
                }
                actu_html_0.innerText = actu_4_slice;
                setTimeout(set_text_2, 250);


            //IMAGE 4
                var img_0 = document.getElementById("simg_0");
                var div_actu_0 = document.getElementById("div_actu_0");
                div_actu_0.onclick = lien_4;
                img_0.style.borderRadius = "5px"
                img_0.style.width = 130 + "px";
                img_0.style.cursor = "pointer";
                function lien_4(){
                    window.open(res_actu.articles[4].url);
                }
                if (res_actu.articles[4].urlToImage === null | actu_name_4 === "Boursorama" | actu_name_4 === "Ozap"){
                    img_0.style.height = 50 + "px";
                    img_0.style.marginTop = 10 + "px";
                    img_0.setAttribute("src", "actu.jpg");
                } else if (res_actu.articles[4].urlToImage != null){
                    img_0.style.height = 75 + "px";
                    img_0.style.marginTop = 0 + "px";
                    var iconcode_html_4 = res_actu.articles[4].urlToImage;
                    img_0.setAttribute("src", iconcode_html_4);
                }
            //IMAGE 5
                var img_1 = document.getElementById("simg_1");
                var div_actu_1 = document.getElementById("div_actu_1");
                div_actu_1.onclick = lien_5;
                img_1.style.borderRadius = "5px"
                img_1.style.width = 130 + "px";
                img_1.style.cursor = "pointer";
                function lien_5(){
                    window.open(res_actu.articles[5].url);
                }

                if (res_actu.articles[5].urlToImage === null | actu_name_5 === "Boursorama" | actu_name_5 === "Ozap"){
                    function setIMG_actu_5(){
                        img_1.style.height = 50 + "px";
                        img_1.style.marginTop = 10 + "px";
                        img_1.setAttribute("src", "actu.jpg");
                    }
                    setTimeout(setIMG_actu_5, 150);
                } else if (res_actu.articles[5].urlToImage != null){
                    img_1.style.height = 75 + "px";
                    img_1.style.marginTop = 0 + "px";
                    var iconcode_html_5 = res_actu.articles[5].urlToImage;
                    function setIMG_5(){
                        img_1.setAttribute("src", iconcode_html_5);
                    }
                    setTimeout(setIMG_5, 150);


                }
            //IMAGE 6
                var img_2 = document.getElementById("simg_2");
                var div_actu_2 = document.getElementById("div_actu_2");
                div_actu_2.onclick = lien_6;
                img_2.style.borderRadius = "5px"
                img_2.style.width = 130 + "px";
                img_2.style.cursor = "pointer";
                function lien_6(){
                    window.open(res_actu.articles[6].url);
                }

                if (res_actu.articles[6].urlToImage === null | actu_name_6 === "Boursorama" | actu_name_6 === "Ozap"){
                    function setIMG_actu_6(){
                        img_2.style.height = 50 + "px";
                        img_2.style.marginTop = 10 + "px";
                        img_2.setAttribute("src", "actu.jpg");
                    }
                    setTimeout(setIMG_actu_6, 150);
                } else if (res_actu.articles[6].urlToImage != null){
                    img_2.style.height = 75 + "px";
                    img_2.style.marginTop = 0 + "px";
                    var iconcode_html_6 = res_actu.articles[6].urlToImage;
                    function setIMG_6(){
                        img_2.setAttribute("src", iconcode_html_6);
                    }
                    setTimeout(setIMG_6, 150);
                }
            //IMAGE 7
                var img_3 = document.getElementById("simg_3");
                var div_actu_3 = document.getElementById("div_actu_3");
                div_actu_3.onclick = lien_7;
                img_3.style.borderRadius = "5px"
                img_3.style.width = 130 + "px";
                img_3.style.cursor = "pointer";
                function lien_7(){
                    window.open(res_actu.articles[7].url);
                }

                if (res_actu.articles[7].urlToImage === null | actu_name_7 === "Boursorama" | actu_name_7 === "Ozap"){
                    function setIMG_actu_7(){
                        img_3.style.height = 50 + "px";
                        img_3.style.marginTop = 10 + "px";
                        img_3.setAttribute("src", "actu.jpg");
                    }
                    setTimeout(setIMG_actu_7, 150);
                } else if (res_actu.articles[7].urlToImage != null){
                    img_3.style.height = 75 + "px";
                    img_3.style.marginTop = 0 + "px";
                    var iconcode_html_7 = res_actu.articles[7].urlToImage;
                    function setIMG_7(){
                        img_3.setAttribute("src", iconcode_html_7);
                    }
                    setTimeout(setIMG_7, 150);
                }


                function animation_v_premier(){
                    function anim_second_0_2(){
                        $( ".info_0" ).animate({opacity: 0}, 800);
                    }
                    function anim_second_1_2(){
                        $( ".info_1" ).animate({opacity: 0}, 800);
                    }
                    function anim_second_2_2(){
                        $( ".info_2" ).animate({opacity: 0}, 800);
                    }
                    function anim_second_2_3(){
                        $( ".info_3" ).animate({opacity: 0}, 800);
                    }
                    setTimeout(anim_second_0_2, 0);
                    setTimeout(anim_second_1_2, 235);
                    setTimeout(anim_second_2_2, 470);
                    setTimeout(anim_second_2_3, 700);

                    setTimeout(premier_appel_actu, 1500);
                }

            setTimeout(animation_v_premier, 20000);
            }

            premier_appel_actu();

            })
        }
        /*
        function spotify_iframe(){
            let div_spot = document.getElementById("spotify_iframe");

            div_spot.addEventListener("mouseenter", function( event ) {
                event.target.style.height = 225 + "px";
                event.target.style.width = 450 + "px";
                event.target.style.transition = "height 0.2s ease-in";
            });
            div_spot.addEventListener("mouseleave", function( event ) {
                event.target.style.height = 80 + "px";

            });

        }*/
        function temperature_chambre_nico(){
            let div_der = document.getElementById("div_deroulant");
            let text_temp = document.getElementById("temp_chambre"); //température :
            let text_chambre = document.getElementById("text_temp_chambre");

            window.fetch('https://23f6e228.dns1.jeedom.com/core/api/jeeApi.php?apikey=4ZRm4xOOXiaQEbnryQYP5Kh1kqfn7Jg3L8UhIbWjiBgYTlv6&type=cmd&id=3389\n' +
                    '\n')
                .then(resu => resu.json())
                .then((resuJson) => {
                    if (resuJson >= 22){
                        div_der.style.backgroundColor="#ff4646";
                        div_der.style.transition = "backgroundColor 1.5s ease-in-out 1.5s";
                    } else if (resuJson < 22){
                        div_der.style.backgroundColor="#70af85";
                        div_der.style.transition = "backgroundColor 1.5s ease-in-out 1.5s";
                    } else {
                        div_der.style.backgroundColor="#11698e";
                        div_der.style.transition = "backgroundColor 1.5s ease-in-out 1.5s";
                    }

                    var dt = new Date();
                    //date_maj = dt.getHours() + " : " + dt.getMinutes();
                    var h=dt.getHours();
                    if (h<10) {h = "0" + h}
                    var m=dt.getMinutes();
                    if (m<10) {m = "0" + m}

                    date_maj_temp = h+" : "+m;

                    div_der.addEventListener("mouseenter", function( event ) {
                    function set_mouse_enter(){
                        event.target.style.height = 130 + "px";
                        function set_text_temp(){
                            text_temp.innerText = "Température chambre (Mise à jour à " + date_maj_temp + ") : ";
                            text_chambre.innerText = resuJson + "°C" ;

                            text_temp.style.marginTop = "100px";
                            text_temp.style.marginLeft = "15px";

                            text_chambre.style.marginTop = "100px";
                            text_chambre.style.marginRight = "15px";
                            text_chambre.style.fontSize = "34px";

                        }
                        setTimeout(set_text_temp, 100);
                        event.target.style.transition = "height 0.2s ease-in";

                    }
                    setTimeout(set_mouse_enter, 100);
                });
                    div_der.addEventListener("mouseleave", function( event ) {
                    function set_mouse_leave() {
                        event.target.style.height = 90 + "px";

                        function unset_div_temp(){
                            text_chambre.style.marginTop = "";
                            text_chambre.style.marginLeft = "";
                            text_temp.style.marginTop = "";
                            text_temp.style.marginLeft = "";
                            text_temp.style.marginRight = "";
                            text_chambre.innerText="";
                            text_temp.innerText ="";
                        }

                        setTimeout(unset_div_temp, 10);

                    }
                    setTimeout(set_mouse_leave, 200);
                });
                })
        }
        /*
        function bouton_send(){

            const bouton = document.querySelector('.bouton_send');
            const text = document.querySelector('.text_bouton_send');

            bouton.addEventListener("mouseenter", function( event ) {
                event.target.style.backgroundColor="#0F4C75";
                text.style.color = "white";
            });

            bouton.addEventListener("mouseleave", function( event ) {
                event.target.style.backgroundColor="white";
                text.style.color ="#0F4C75";
            });
            bouton.addEventListener("click", event => {
                var dataObject = document.getElementById('text_div').innerHTML;
                var obj = document.getElementById('obj').innerHTML;
                console.log(localStorage);
                localStorage.setItem('dataObject', JSON.stringify(dataObject));
                var retrievedObject = localStorage.getItem('dataObject');

                obj.innerText = retrievedObject;

                console.log(retrievedObject);
            });
        }
        */
        function wind(){
            let wind = document.getElementById("wind_img");
            //47.5687 et -3.0787
            window.fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.5687&lon=-3.0787&lang=fr&units=metric&appid=95e0be7242009f92744147d50180d16b')
                .then(ycc => ycc.json())
                .then((yccJson) => {
                    console.log(yccJson.wind.speed)
                });

            wind.onclick = wind_clk;
            function wind_clk(){
                window.open("https://www.windmorbihan.com");
            }
        }
