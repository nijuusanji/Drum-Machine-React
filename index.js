const audioClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  
  function App() {
    
      const [volume,setVolume] = React.useState(1);
    
      const mapAudio = audioClips.map((clip) => (
            <Pad key={clip.id} clip={clip} volume={volume} />
           ));
      
      return (
        <div className="min-vh-100">
         <div className="text-center" id="display">
          <h2 id="top">Drum Machine</h2>
           <div className = "showgrid">
              {mapAudio}
           </div>
           <br/>
           <h5>Volume</h5>
           <input 
             type="range" 
             step="0.01"
             onChange={(e) => setVolume(e.target.value)}
             value={volume}
             max="1" 
             min="0" 
             className="w-50"
            />
           <div
             className="bg-secondary p-3 mt-5 mx-auto w-50" id="showKey">
             <h4>Hello World</h4>
           </div>      
         </div>
        </div>
      )
  }
  
  
  
  function Pad({clip , volume}) {
    const [active,setActive] = React.useState(false);
    
    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown',handleKeyPress);
      }
    },[])
    
    const handleKeyPress = (e) => {
    if(e.keyCode === clip.keyCode) {
      playSound();
      }
    }
    
    const playSound = () => {
      const audioTag =  document.getElementById(clip.keyTrigger);
      setActive(true);
      setTimeout(() => setActive(false),200);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      
      document.querySelector("h4").innerText = audioTag.id;
  
      }
    
    return (
      <div
        onClick={playSound}
        id="trigger"
        className={`btn p-5 m-3 ${active && "btn-inverse"}`}>
        <audio className="clip" id={clip.keyTrigger} src={clip.url} />
        {clip.keyTrigger}
      </div>
    )
  }
  
  
  
  ReactDOM.render(<App />, document.getElementById('drum-machine'));
  