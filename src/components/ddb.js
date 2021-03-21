import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function DDB() {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div>
            <button onClick={() => {listen()}}>
                Start ddb
            </button>
            <button onClick={() => {dont_listen()}}>
                Stop ddb
            </button>
        </div>
    )

    var interval = 0;

    function listen() {
        var responses = ["Oh...ok", "Mhmm", "All 👂s", "Alright..."]
        SpeechRecognition.startListening()
        alert("Please talk out your problems\n\n Press \"Stop Listening\" after entirely talking out the problem and after you have hopefully fixed your problem")
        interval = setInterval(() => {
            var res = Math.floor(Math.random() * (3 + 1));
            alert(responses[res]);
        }, 7000);
    }

    function dont_listen() {
        SpeechRecognition.stopListening()
        alert("Ok... hope you've fixed the bug! Happy Coding!")
        clearInterval(interval);
    }
}