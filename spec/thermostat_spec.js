describe('Thermostat', function() {
  var thermostat;
	beforeEach(function() {
    thermostat = new Thermostat();
		});
	it('temperature starts at 20', function() {
		expect(thermostat.temperature()).toEqual(20);
	});
  it('temperature can be increased with up function', function() {
    thermostat.up(1);
    expect(thermostat.temperature()).toEqual(21);
  });
  it('temperature can be decreased with a down function', function(){
    thermostat.down(1);
    expect(thermostat.temperature()).toEqual(19);
  });
  it('minimum temperature should be 10', function() {
    thermostat.down(30);
    expect(thermostat.temperature()).toEqual(10);
  });
  it('if powerSavingMode = true, max temperature = 25', function() {
    thermostat.up(40);
    expect(thermostat.temperature()).toEqual(25);
  });
  it('if powerSavingMode = false, max temperature = 32', function() {
    thermostat.powerSavingMode = true;
    thermostat.TogglePowerSavingMode();
    thermostat.up(40);
    expect(thermostat.temperature()).toEqual(32);
  });
  it('powerSavingMode is on by default', function () {
    expect(thermostat.powerSavingMode).toEqual(true)
  });
  it('can reset the temperature', function () {
    thermostat.up(10);
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });
  it('can ask about current energy usage when temperature is below 18', function() {
    thermostat.down(3);
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage")
  });
  it('can ask about current energy usage when temperature is greater or equal to 18 and under 25', function() {
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage")
  });
  it('can ask about current energy usage when temperature is greater or equal to 25', function() {
    thermostat.up(5)
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage")
  });
  it('TogglePowerSavingMode can change PowerSavingMode to false', function() {
    thermostat.powerSavingMode = true;
    thermostat.TogglePowerSavingMode();
    expect(thermostat.powerSavingMode).toEqual(false);
  });
  it('TogglePowerSavingMode can change PowerSavingMode to false', function() {
    thermostat.powerSavingMode = false;
    thermostat.TogglePowerSavingMode();
    expect(thermostat.powerSavingMode).toEqual(true);
  });
});
