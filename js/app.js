var notes = {
    c: document.querySelector('#cAudio'),
    d: document.querySelector('#dAudio'),
    e: document.querySelector('#eAudio'),
    f: document.querySelector('#fAudio'),
    g: document.querySelector('#gAudio'),
    a: document.querySelector('#aAudio'),
    b: document.querySelector('#bAudio')
}

function playNote(letter){
   notes[letter].play()
   notes[letter].currentTime = 0;
    notes[letter].play()
    
}

//document.querySelector('#c').addEventListener('click', function(){
 //   playNote(this.id)
//})

document.querySelectorAll('.box').forEach(function(box){
    box.addEventListener('click', function(){
        playNote(this.id)
        
    })
})   



document.addEventListener("keydown", function(event){
    console.log(event)
    
    if(event.keyCode === 67){
        playNote("c")
    }
    if(event.keyCode === 68){
        playNote("d")
    }
    if(event.keyCode === 70){
        playNote("e")
    }
    if(event.keyCode === 71){
        playNote("f")
    }
    if(event.keyCode === 65){
        playNote("g")
    }
    if(event.keyCode === 66){
        playNote("a")
    }
    if(event.keyCode === 66){
        playNote("b")
    }
    
    
})
