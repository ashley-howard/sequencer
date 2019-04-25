function sequencer(){
    const kick = new Tone.Player('./drums/kick-electro02.wav').toMaster();
    const snare = new Tone.Player('./drums/snare-block.wav').toMaster();
    const tom = new Tone.Player('./drums/tom-analog.wav').toMaster();
    const hihat = new Tone.Player('./drums/hihat-acoustic02.wav').toMaster();
    const clap = new Tone.Player('./drums/clap-808.wav').toMaster();
    let index = 0; // go through each input to check if each sound is playing
 
    Tone.Transport.scheduleRepeat(repeat,'8n'); // how many times it should loop "8 notes"
    Tone.Transport.start(); // starts counting

    function repeat(){
        let step = index % 8;

        let kickInputs = document.querySelector(`.kick input:nth-child(${step +1})`); //so it starts from 1
        let snareInputs = document.querySelector(`.snare input:nth-child(${step +1})`); //so it starts from 1
        let tomInputs = document.querySelector(`.tom input:nth-child(${step +1})`); //so it starts from 1
        let hihatInputs = document.querySelector(`.hihat input:nth-child(${step +1})`); //so it starts from 1
        let clapInputs = document.querySelector(`.clap input:nth-child(${step +1})`); //so it starts from 1
        
        if(kickInputs.checked){
            kick.start();
        }
        if(snareInputs.checked){
            snare.start();
        }
        if(tomInputs.checked){
            tom.start();
        }
        if(hihatInputs.checked){
            hihat.start();
        }
        if(clapInputs.checked){
            clap.start();
        }

        index++;
    }
}

sequencer();

// more info (change bpm etc): https://tonejs.github.io/docs/r13/Transport