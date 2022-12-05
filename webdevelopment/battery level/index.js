let animation=document.getElementById("charge");
// let batteryLevel=document.querySelector(".batteryLevel").innerText;



navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
      // window.reload();
    });
    function updateChargeInfo() {
      if(battery.charging){
        animation.setAttribute("class","active");
        document.querySelector("#text>h2").innerText="Battery Charging"
        
      }
      else{
        animation.setAttribute("class","stop");
        document.querySelector("#text>h2").innerText="Charger Disconnected"
      }
      console.log(`Battery charging? ${battery.charging ? "yes" : "no"}`);
    }
  
    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {  
      // let batteryLevel=document.getElementsByClassName("batteryLevel")
      // let bat=battery.level*100
      console.log(`Battery level: ${battery.level * 100}%`);
      // batteryLevel.innerContent=`${bat}`
      document.querySelector(".level").innerText=`${battery.level * 100}%`;
      if((battery.level * 100)<=50){
        document.getElementById("charge").style.background="orange"
        document.getElementById("smallbox").style.background="orange"
        document.getElementById("smallbox").style.borderColor="orange"
        document.getElementById("box").style.borderColor="orange"
      }
      if((battery.level * 100)<=30){
        document.getElementById("charge").style.background="red"
        document.getElementById("smallbox").style.background="red"
        document.getElementById("smallbox").style.borderColor="red"
        document.getElementById("box").style.borderColor="red"
      }
      
    }
  
    battery.addEventListener("chargingtimechange", () => {
      updateChargingInfo();
    });
    function updateChargingInfo() {
      console.log(`Battery charging time: ${battery.chargingTime} seconds`);
    }
  
    battery.addEventListener("dischargingtimechange", () => {
      updateDischargingInfo();
    });
    function updateDischargingInfo() {
      console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
    }
  })
  

  function darkMode(){
    document.querySelector("body").style.backgroundColor="#121212";
    document.querySelector(".status").style.color="white"
    document.querySelector(".level").style.color="white"
  }

  function LiteMode(){
    document.querySelector("body").style.backgroundColor="white"
    document.querySelector(".status").style.color="black"
  }

  // darkmode();
  // LiteMode();

  