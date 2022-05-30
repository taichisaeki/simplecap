# SimpleCap

======================================================  
Google WebSpeech APIを活用した、音声認識キャプションツールです。  

CaptionlineやWebCaptionerなどのWebベースキャプションサービスを基に、誤変換対策などを追加しています。  


## Description
従来からあるWebベースキャプションツールを参考に、誤変換対策機能の追加などをしています。  

このツールは、利用者のみである程度のキャプションを行えることを目標にしています。  

今後、支援者からのリアルタイムキャプションなどの機能も追加予定です。

## Demo
デモページはこちら  
(https://taichisaeki.github.io/simplecap)

## Requirement
①"音認開始"を押す  
②キャプションが開始される  
※"データのリセット"は、変換候補のlocalstrageを削除します。全く違う内容で認識を行う際はここを押下してください。

## Install
$ npm install simplecap

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## 参考にした資料・サービス
・Webカメラの映像に自動字幕を重ねるWebページ  
https://github.com/1heisuzuki/speech-to-text-webcam-overlay
・Web Speech APIで途切れない音声認識
https://monomonotech.jp/kurage/iot/webspeechapi_voice_recognition.html
・CaptionLine  
https://captionline.org  
・WebCaptioner  
https://webcaptioner.com
