function openClose(){
    var obj = document.getElementsByClassName('osushi');
    for(var i=0;i<obj.length;i++){
        //非表示ならインライン要素に変更。表示状態なら非表示に変更。
        if(obj[i].style.display == "inline-block"){
            obj[i].style.display = "none";
        }
        else{
            obj[i].style.display = "inline-block";
        }
    }
}

document.onmousedown = function(e) {
    var e = e || window.event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    var elemtag = elem.tagName;

    if(elemtag == "SPAN") {
        var value1 = localStorage.getItem(elemId);
        value1 = JSON.parse(value1);
        //console.log(value1.join('\n'));
        document.getElementById("cadition").innerHTML = value1.join(' > ');
        openClose();
    } else {
        return false;
    }
}


function vr_function() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';
    recognition.interimResults = true;
    recognition.maxAlternatives = 4;
    var last_finished = '';
    let current_transcripts = '';
    let transcript = '';

    var canditadearry = [];

    var date = new Date() ;
    var timestamp = date.getTime() ;
    var span = document.createElement("span");
    span.setAttribute("id", timestamp);
    span.setAttribute("class", 'results');


    var segmenter = new TinySegmenter();                 // インスタンス生成

    recognition.onresult = function(event) {
        var results = event.results;

            for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript = event.results[i][0].transcript;
            
            if (event.results[i].isFinal) {
                last_finished = results[i][0].transcript;
                var result_log = last_finished + "。" + '<br>';
                
                for (var j = 0; j<recognition.maxAlternatives; j++){
                    canditadearry.push(results[i][j].transcript);
                    localStorage.setItem(timestamp, JSON.stringify(canditadearry));
                    //console.log(results[i][j].transcript);
                }

                document.getElementById('result_text').appendChild(span);
                document.getElementById(timestamp).insertAdjacentHTML('beforeend', result_log);
                vr_function();
            } else {
                current_transcripts += results[i][0].transcript;
                document.getElementById('innter_text').innerHTML = '<span style="color: darkgray;">' + results[i][0].transcript + '</span>';
                flag_speech = 1;
            }

            
            }
        }

       
          

            //document.getElementById("result_text").innerHTML = '<i style="color:#ddd;">' + interimTranscript + '</i>' + '<br>';
        //$("#result_text").empty();
        /*for (var i = event.resultIndex; i<results.length; i++){
            if(results[i].isFinal){
                for (var j = 0; j<recognition.maxAlternatives; j++){
                    $("#result_text").append("<p>" + "ランク" + j + " " + results[i][j].transcript +
                                                    ": " + results[i][j].confidence +
                                                "</p>");
                }
            }
        }*/



    flag_speech = 0;
    //要検討 document.getElementById('stbtn').textContent = "認識中・・";
    recognition.start();
}
