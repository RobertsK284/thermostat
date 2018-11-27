function Thermostat() {
  this._Temperature = 20;
  this.powerSavingMode = true
  this.maxTemperature = 25
  this.backgroundColour = {
    "low-usage": "green",
    "medium-usage": "grey",
    "high-usage": "red"
  };
}

Thermostat.prototype.temperature = function() {
  return this._Temperature; };

Thermostat.prototype.up = function(n) {
  this._Temperature+=n;
  if (this._Temperature > this.maxTemperature) {
    this._Temperature = this.maxTemperature;
  }
}

Thermostat.prototype.down = function(n) {
  this._Temperature-=n;
  if (this._Temperature < 10) { this._Temperature = 10; }
}

Thermostat.prototype.reset = function() {
  this._Temperature = 20;
}
Thermostat.prototype.TogglePowerSavingMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
  if (this.powerSavingMode == false) {
    this.maxTemperature = 32;
  }
  else { this.maxTemperature = 25};
}

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._Temperature < 18) { return "low-usage" }
  if (this._Temperature >= 18 && this._Temperature < 25) {
    return "medium-usage"
  }
  return "high-usage";
}
