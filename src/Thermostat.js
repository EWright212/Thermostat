Thermostat = function () {
  this.temperature = 20;
  this.mintemp = 10
  this.powerSaver = true
};

var thermostat = new Thermostat();

Thermostat.prototype.increase  = function() {
  return(this.temperature += 1);
}

Thermostat.prototype.decrease  = function() {
  if (this.temperature === this.mintemp) {
  } else {
    return(this.temperature -= 1);
  }
}

Thermostat.prototype.powerSaverSwitch  = function() {
  this.powerSaver = (this.powerSaver ? false : true);
}
