Thermostat = function () {
  this.standardTemp = 20
  this.temperature = this.standardTemp;
  this.minTemp = 10
  this.powerSaver = true
  this.maxTemp = 25
  this.energyUsageLow = 18
  this.energyUsageHigh = 25
};

var thermostat = new Thermostat();

Thermostat.prototype.increase  = function() {
  if (this.temperature === this.maxTemp) {
    return;
  }
  this.temperature += 1;
  }


Thermostat.prototype.decrease  = function() {
  if (this.temperature === this.minTemp) {
    return;
  } 
  this.temperature -= 1;
}

Thermostat.prototype.powerSaverSwitch  = function() {
  if (this.powerSaver == true) {
    this.powerSaver = false;
    this.maxTemp = 32;
  } else {
    this.powerSaver = true;
    this.maxTemp = 25;
  }
}

Thermostat.prototype.resetSwitch  = function() {
  this.temperature = this.standardTemp;
}

Thermostat.prototype.energyUsageChecker = function() {
  if (this.temperature < this.energyUsageLow) {
    return "low-usage";
  } else if (this.temperature >= this.energyUsageHigh) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
}

