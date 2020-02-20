'use strict';

describe("Thermostat", function () {
  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("has a default of 20", function () {
    expect(thermostat.temperature).toEqual(20);
  });
  it("can be increased by 1", function () {
    thermostat.increase()
    expect(thermostat.temperature).toEqual(21);
  });
  it("can be decreased by 1", function () {
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(19);
  });
  it("can't be decreased below 10", function () {
    thermostat.temperature = 10
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(10);
  });
  it("has a power saving mode, default to on", function () {
    expect(thermostat.powerSaver).toBe(true);
  });
  it("has a power saving mode, can turn off", function () {
    thermostat.powerSaverSwitch()
    expect(thermostat.powerSaver).toBe(false);
  });
  it("has a power saving mode, can turn on", function () {
    thermostat.powerSaverSwitch()
    thermostat.powerSaverSwitch()
    expect(thermostat.powerSaver).toBe(true);
  });
  it("has a max temp of 32 degrees if power saver off", function () {
    thermostat.powerSaverSwitch()
    expect(thermostat.maxTemp).toEqual(32);
  });
  it("has a max temp of 25 degrees if power saver on", function () {
    expect(thermostat.maxTemp).toEqual(25);
  });
  it("can't increase beyond max temp, powerSaver on", function () {
    thermostat.temperature = 25
    thermostat.increase()
    expect(thermostat.maxTemp).toEqual(25);
  });
  it("can't increase beyond max temp, powerSaver off", function () {
    thermostat.powerSaverSwitch()
    thermostat.temperature = 32
    thermostat.increase()
    expect(thermostat.temperature).toEqual(32);
  });
  it("can reset temp to 20", function () {
    thermostat.temperature = 25
    thermostat.resetSwitch()
    expect(thermostat.temperature).toEqual(20);
  });
  it("can recognise low usage <18 ", function () {
    thermostat.temperature = 17
    expect(thermostat.energyUsageChecker()).toEqual("low-usage");
  });
  it("can recognise medium usage", function () {
    expect(thermostat.energyUsageChecker()).toEqual("medium-usage");
  });
  it("can recognise high usage >= 25", function () {
    thermostat.temperature = 25
    expect(thermostat.energyUsageChecker()).toEqual("high-usage");
  });
});
