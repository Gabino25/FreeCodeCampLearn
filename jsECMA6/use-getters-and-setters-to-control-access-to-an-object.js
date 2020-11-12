// Only change code below this line
class Thermostat{
  constructor(temperature){
    this._temperature = temperature;
  }
  get temperature(){
    return 5/9*(this._temperature-32); 
  }
  set temperature(p){
    this._temperature = p;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos);
