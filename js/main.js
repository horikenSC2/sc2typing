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
  "mothership core",
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
  "concussive Shells",
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
  "smart sarvos",
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
  "pneumatized carapase",
  "contaminate",
  "oversight",
  "tissue regeneration",
  "caustic spray",
  "consume",
  "abduct",
  "blinding cloud",
  "parastic bomb",
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
  ]

  shuffle();
  
  const target=document.getElementById('target');
  const scoreLabel=document.getElementById('score');
  const finalscoreLabel=document.getElementById('finalscore');
  const missLabel=document.getElementById('miss');
  const finalmissLabel=document.getElementById('finalmiss');
  const timerLabel=document.getElementById('timer');
  const btn=document.getElementById('btn');
  const rankLabel=document.getElementById('rank');
  const rankpicture=document.getElementById('rankpicture')
  const restart=document.getElementById('restart')
  let word;
  let loc;
  let score;
  let miss;
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
    placement();
    $('#modal-wrapper').fadeIn(500);
    console.log(isPlaying);
  }

  function placement(){
    let point=score-miss;
    console.log(point);
    if(point<50){
      rankLabel.textContent="You are Bronze Typer";
      rankpicture.src="img/bronze.png"
    }else if(50<=point&&point<78){
      rankLabel.textContent="You are Silver Typer";
      rankpicture.src="img/silver.png"
    }else if(78<=point&&point<106){
      rankLabel.textContent="You are Gold Typer";
      rankpicture.src="img/gold.png"
    }else if(106<=point&&point<134){
      rankLabel.textContent="You are Platinum Typer";
      rankpicture.src="img/platinum.png"
    }else if(134<=point&&point<162){
      rankLabel.textContent="You are Diamond Typer";
      rankpicture.src="img/diamond.png"
    }else if(162<=point&&point<190){
      rankLabel.textContent="You are Master Typer";
      rankpicture.src="img/master.png"
    }else if(190<=point){
      rankLabel.textContent="You are Grandmaster Typer";
      rankpicture.src="img/gm.png"
    }
  }
  function updateTimer(){
    const timeLeft=(timeLimit-(Date.now()-startTime))/1000;
    timerLabel.textContent=`${timeLeft.toFixed(2)}`;
    timeoutId=setTimeout(updateTimer,10);
    if(timeLeft<0){
        isPlaying="false";
        clearTimeout(timeoutId);
        $('.info').hide();
        $('#restart').hide();
        target.textContent="Play Again?"
        $('#btn').show();
        showResult();
      }
  }

  function countDown(){
    loc=0;
    score=0;
    miss=0;
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
  
  btn.addEventListener('click',()=>{
    if(isPlaying===true){
      return;
    }
    if(isCountdowning===true){
      return;
    }
    countDownStartTime=Date.now();
    countDown();
    isCountdowning=true;
    $('#btn').hide();
    $('.info').fadeIn();
    setTimeout(()=>{
      isPlaying=true;
      startTime=Date.now();
      updateTimer();
      $('#restart').css('display','inline-block');
    },3000)
  });

  restart.addEventListener('click',()=>{
    if(isPlaying!==true){
      return;
    }
    isPlaying="false";
    clearTimeout(timeoutId);
    countDownStartTime=Date.now();
    countDown();
    isCountdowning=true;
    $('#btn').hide();
    $('.info').fadeIn();
    setTimeout(()=>{
      isPlaying=true;
      startTime=Date.now();
      updateTimer();
    },3000)
  });

  window.addEventListener('keydown',e=>{
    if(isPlaying!==true){
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



}