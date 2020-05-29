'use strict';

{
  const timeLimit=30*1000;

  const words=["probe",
  "zealot",
  "stalker",
  "adept",
  "sentry",
  "high templar",
  "dark templar",
  "immortal",
  "disruptor",
  "colossus",
  "archon",
  "observer",
  "warp prism",
  "phoenix",
  "void ray",
  "oracle",
  "tempest",
  "carrier",
  "interceptor",
  "mothership",
  "nexus",
  "pylon",
  "assimilator",
  "gateway",
  "forge",
  "cybernetics core",
  "shield battery",
  "photon cannon",
  "robotics facility",
  "warp gate",
  "stargate",
  "twilight council",
  "templar archives",
  "dark shrine",
  "robotics bay",
  "fleet beacon",
  "larva",
  "cocoon",
  "drone",
  "queen",
  "creep tumor",
  "zergling",
  "baneling",
  "roach",
  "ravager",
  "hydralisk",
  "lurker",
  "infestor",
  "swarm host",
  "locust",
  "ultralisk",
  "overlord",
  "overseer",
  "changeling",
  "mutalisk",
  "corruptor",
  "viper",
  "brood lord",
  "broodling",
  "infested terran",
  "hatchery",
  "spawning pool",
  "extractor",
  "evolution chamber",
  "baneling nest",
  "roach warren",
  "spine crawler",
  "spore crawler",
  "lair",
  "hydralisk den",
  "lurker den",
  "infestation pit",
  "spire",
  "nydus network",
  "nydus worm",
  "hive",
  "greater spire",
  "ultralisk cavern",
  "scv",
  "marine",
  "marauder",
  "reaper",
  "ghost",
  "hellion",
  "hellbat",
  "widow mine",
  "siege tank",
  "cyclone",
  "thor",
  "mule",
  "viking",
  "medivac",
  "liberator",
  "raven",
  "banshee",
  "battlecruiser",
  "auto-turret",
  "command center",
  "planetary fortress",
  "orbital command",
  "supply depot",
  "refinery",
  "barracks",
  "engineering bay",
  "bunker",
  "sensor tower",
  "missile turret",
  "factory",
  "ghost academy",
  "starport",
  "armory",
  "fusion core",
  "tech lab",
  "reactor",
  "stimpack",
  "combat shield",
  "concussive shells",
  "kd8 charge",
  "combat drugs",
  "jet pack",
  "steady targeting",
  "emp round",
  "cloak",
  "tac nuke strike",
  "personal cloaking",
  "enhanced shockwave",
  "infernal pre-igniter",
  "smart servos",
  "drilling claws",
  "mag-field accelerator",
  "lock on",
  "explosive payload",
  "high impact payload",
  "ignite afterburners",
  "rapid reignition system",
  "advanced ballistics",
  "interference matrix",
  "anti-armor missile",
  "corvid reactor",
  "hyperflight rotors",
  "weapon refit",
  "yamato cannon",
  "tactical jump",
  "transfusion",
  "metabolic boost",
  "adrenal glands",
  "centrifugal hooks",
  "rapid regeneration",
  "glial reconstitution",
  "tunneling claws",
  "corrosive bile",
  "muscular augments",
  "grooved spines",
  "adaptive talons",
  "seismic spines",
  "fungal growth",
  "neural parasite",
  "microbial shroud",
  "pathogen glands",
  "chitinous plating",
  "anabolic synthesis",
  "mutate ventral sacs",
  "pneumatized carapace",
  "contaminate",
  "oversight",
  "tissue regeneration",
  "caustic spray",
  "consume",
  "abduct",
  "blinding cloud",
  "parasitic bomb",
  "swarm seeds",
  "charge",
  "blink",
  "psionic transfer",
  "resonating glaives",
  "force field",
  "guardian shield",
  "hallucination",
  "feedback",
  "psionic storm",
  "shadow stride",
  "barrier",
  "purification nova",
  "cliff walk",
  "extended thermal lance",
  "gravitic boosters",
  "gravitic drive",
  "graviton beam",
  "anion pulse-crystals",
  "prismatic alignment",
  "flux vanes",
  "activate pulsar beam",
  "revelation",
  "stasis ward",
  "mass recall",
  "time warp",
  "neosteel armor",
  "scanner sweep",
  "chrono boost",
  "strategic recall",
  "battery overcharge",
  "serral",
  "reynor",
  "neeb",
  "special",
  "time",
  "heromarine",
  "elazer",
  "showtime",
  "scarlett",
  "uthermal",
  "harstem",
  "kelazhur",
  "stephano",
  "dark",
  "trap",
  "classic",
  "maru",
  "soo",
  "rogue",
  "hero",
  "stats",
  "ty",
  "dear",
  "gumiho",
  "ragnarok",
  "parting",
  "hurricane",
  "zest",
  "innovation",
  "sos",
  "cure",
  "solar",
  "artosis",
  "tastelss",
  "incontrol",
  "totalbiscuit",
  ]

  const target=document.getElementById('target');
  const scoreLabel=document.getElementById('score');
  const finalscoreLabel=document.getElementById('finalscore');
  const missLabel=document.getElementById('miss');
  const finalmissLabel=document.getElementById('finalmiss');
  const finalpointLabel=document.getElementById('finalpoint');
  const timerLabel=document.getElementById('timer');
  const btn=document.getElementById('btn');
  const rankLabel=document.getElementById('rank');
  const rankpicture=document.getElementById('rankpicture');
  const tonextrank=document.getElementById('tonextrank');

  let word;
  let loc;
  let score;
  let miss;
  let point;
  let number=0;
  let startTime;
  let countDownStartTime;
  let isPlaying=false;
  let isCountdowning=false;
  let timeoutId;

  function shuffle(){
    for (let i = words.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
  }
  
  function updateTarget(){
    let underbar=""
    for(let i=0;i<loc;i++){
      underbar+="_";
    }
    if(word[loc]===" "){
      underbar+="_"
      loc++;
    }
    target.textContent=underbar+word.substring(loc);
  }

  $('#close-modal').click(function(){
    $('#modal-wrapper').fadeOut();
  });

  function showResult(){
    finalmissLabel.textContent=miss;
    finalscoreLabel.textContent=score;
    point=score-miss;
    finalpointLabel.textContent=point
    placement();
    $('#modal-wrapper').fadeIn(500);
    console.log(isPlaying);
  }

  function placement(){
    if(point<50){
      rankLabel.textContent="You are Bronze Typer";
      rankpicture.src="img/bronze.png"
      tonextrank.textContent=`${50-point} point to Silver`
    }else if(50<=point&&point<77){
      rankLabel.textContent="You are Silver Typer";
      rankpicture.src="img/silver2.png"
      tonextrank.textContent=`${77-point} point to Gold`
    }else if(77<=point&&point<105){
      rankLabel.textContent="You are Gold Typer";
      rankpicture.src="img/gold.png"
      tonextrank.textContent=`${105-point} point to Platinum`
    }else if(105<=point&&point<133){
      rankLabel.textContent="You are Platinum Typer";
      rankpicture.src="img/platinum.png"
      tonextrank.textContent=`${133-point} point to Diamond`
    }else if(133<=point&&point<161){
      rankLabel.textContent="You are Diamond Typer";
      rankpicture.src="img/diamond.png"
      tonextrank.textContent=`${161-point} point to Master`
    }else if(161<=point&&point<185){
      rankLabel.textContent="You are Master Typer";
      rankpicture.src="img/master.png"
      tonextrank.textContent=`${185-point} point to Grandmaster`
    }else if(185<=point){
      rankLabel.textContent="You are Grandmaster Typer";
      rankpicture.src="img/gm.png"
    }
  }
  function updateTimer(){
    const timeLeft=(timeLimit-(Date.now()-startTime))/1000;
    timerLabel.textContent=`${timeLeft.toFixed(2)}`;
    timeoutId=setTimeout(updateTimer,10);
    if(timeLeft<0){
        isPlaying=false;
        clearTimeout(timeoutId);
        $('.info').hide();
        $('#restart').hide();
        target.textContent="Play Again?"
        $('#btn').show();
        $('#btn').html('Press <span class="enter">Enter</span> to Replay');
        showResult();
      }
  }

  function countDown(){
    loc=0;
    score=0;
    miss=0;
    number=0;
    timerLabel.textContent="30.00"
    scoreLabel.textContent=score;
    missLabel.textContent=miss;
    const countDownTimeLeft=(3*1000-(Date.now()-countDownStartTime))/1000;
    target.textContent=countDownTimeLeft.toFixed(2);
    const countdownTimeoutId=setTimeout(countDown,10);
    if(countDownTimeLeft<0){
      clearTimeout(countdownTimeoutId);
      word=words[0];
      target.textContent=word;
      isCountdowning=false;
    }
  }
  
  window.addEventListener('keydown',e=>{
    if(isPlaying===true){
      return;
    }
    if(isCountdowning===true){
      return;
    }
    if(e.key==="Enter"){
      $('#modal-wrapper').fadeOut();
      shuffle();
      countDownStartTime=Date.now();
      countDown();
      isCountdowning=true;
      $('#btn').hide();
      $('.info').fadeIn();
      setTimeout(()=>{
        isPlaying=true;
        startTime=Date.now();
        updateTimer();
        $('#restart').show();
      },3000)
    }
  });

  // btn.addEventListener('click',()=>{
  //   if(isPlaying===true){
  //     return;
  //   }
  //   if(isCountdowning===true){
  //     return;
  //   }
  //   shuffle();
  //   countDownStartTime=Date.now();
  //   countDown();
  //   isCountdowning=true;
  //   $('#btn').hide();
  //   $('.info').fadeIn();
  //   setTimeout(()=>{
  //     isPlaying=true;
  //     startTime=Date.now();
  //     updateTimer();
  //     $('#restart').show();
  //   },3000)
  // });

  window.addEventListener('keydown',e=>{
    console.log(e.key)
    if(isPlaying===false){
      return;
    }
    if(word[loc]===e.key){
      loc++;
      updateTarget();
      score++;
      scoreLabel.textContent=score;
      if(loc===word.length){
        loc=0;
        number++;
        word=words[number];
        target.textContent=word;
      }
    }else{
      miss++;
      missLabel.textContent=miss;
    }
  });
  
  window.addEventListener('keydown',e=>{
    if(isPlaying===false){
      return;
    }
    if(e.key==='Escape'){
      shuffle();
      isPlaying=false;
      clearTimeout(timeoutId);
      countDownStartTime=Date.now();
      countDown();
      isCountdowning=true;
      $('#btn').hide();
      $('#restart').hide();
      $('.info').fadeIn();
      setTimeout(()=>{
        isPlaying=true;
        startTime=Date.now();
        updateTimer();
        $('#restart').show();
      },3000)
    }
  });

}
