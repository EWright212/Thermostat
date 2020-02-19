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
  it("has a power saving mode, can turn off", function () {
    thermostat.powerSaverSwitch()
    thermostat.powerSaverSwitch()
    expect(thermostat.powerSaver).toBe(true);
  });
});
