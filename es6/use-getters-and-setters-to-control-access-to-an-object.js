// Only change code below this line
class Thermostat{
    constructor(fahrenheit){
      this.celsius = 5/9 * (fahrenheit - 32);
    }
    get temperature() {
      return this.celsius;
    }
    set temperature(celsiusTemperature){
      this.celsius = celsiusTemperature;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius