let datalist = {};
localStorage.setItem("datalist", JSON.stringify(datalist));



window.onload = function() {
    const DICT_PATH = "/kuromoji/dict";
    const story = "ここまで音声認識を行ってきましがいかがでしょうか";

	const ids = [];
	const names = [];

	// Kuromoji
	kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
		const tokens = tokenizer.tokenize(story);// 解析データの取得
		tokens.forEach((token)=>{// 解析結果を順番に取得する
			console.log(token);
		});
	});
}

function vr_function() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'ja';
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    var last_finished = '';
    let current_transcripts = '';
    let transcript = '';

    var date = new Date() ;
    var timestamp = date.getTime() ;
    var span = document.createElement("span");
    span.setAttribute("id", timestamp);


    recognition.onresult = function(event) {
        var results = event.results;

            for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript = event.results[i][0].transcript;
            
            if (event.results[i].isFinal) {
                last_finished = results[i][0].transcript;
                var result_log = last_finished + "。" + '<br>';
                document.getElementById('result_text').appendChild(span);
                document.getElementById(timestamp).insertAdjacentHTML('beforeend',result_log);
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
