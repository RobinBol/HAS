"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characteristic_1 = require("../characteristic");
var service_1 = require("../service");
function AccessoryFlags(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000A6-0000-1000-8000-0026BB765291', 'uint32', false, true, true, true, false, undefined, "Accessory Flags", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.AccessoryFlags = AccessoryFlags;
function Active(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B0-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Active", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Active = Active;
function AdministratorOnlyAccess(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000001-0000-1000-8000-0026BB765291', 'bool', false, true, true, false, false, undefined, "Administrator Only Access", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.AdministratorOnlyAccess = AdministratorOnlyAccess;
function AirParticulateDensity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000064-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Air Particulate Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.AirParticulateDensity = AirParticulateDensity;
function AirParticulateSize(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000065-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Air Particulate Size", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.AirParticulateSize = AirParticulateSize;
function AirQuality(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000095-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Air Quality", undefined, undefined, undefined, undefined, [0, 1, 2, 3, 4, 5], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.AirQuality = AirQuality;
function AudioFeedback(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000005-0000-1000-8000-0026BB765291', 'bool', false, true, true, false, false, undefined, "Audio Feedback", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.AudioFeedback = AudioFeedback;
function BatteryLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000068-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, "percentage", "Battery Level", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.BatteryLevel = BatteryLevel;
function Brightness(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000008-0000-1000-8000-0026BB765291', 'int', false, true, true, false, false, "percentage", "Brightness", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Brightness = Brightness;
function CarbonDioxideDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000092-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Carbon Dioxide Detected", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CarbonDioxideDetected = CarbonDioxideDetected;
function CarbonDioxideLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000093-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Carbon Dioxide Level", 0, 100000, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CarbonDioxideLevel = CarbonDioxideLevel;
function CarbonDioxidePeakLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000094-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Carbon Dioxide Peak Level", 0, 100000, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CarbonDioxidePeakLevel = CarbonDioxidePeakLevel;
function CarbonMonoxideDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000069-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Carbon Monoxide Detected", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CarbonMonoxideDetected = CarbonMonoxideDetected;
function CarbonMonoxideLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000090-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Carbon Monoxide Level", 0, 100, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CarbonMonoxideLevel = CarbonMonoxideLevel;
function CarbonMonoxidePeakLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000091-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Carbon Monoxide Peak Level", 0, 100, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CarbonMonoxidePeakLevel = CarbonMonoxidePeakLevel;
function ChargingState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000008F-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Charging State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ChargingState = ChargingState;
function ColorTemperature(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000CE-0000-1000-8000-0026BB765291', 'uint32', false, true, true, false, false, undefined, "Color Temperature", 140, 500, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ColorTemperature = ColorTemperature;
function ContactSensorState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000006A-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Contact Sensor State", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ContactSensorState = ContactSensorState;
function CoolingThresholdTemperature(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000000D-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "celsius", "Cooling Threshold Temperature", 10, 35, 0.1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CoolingThresholdTemperature = CoolingThresholdTemperature;
function CurrentAirPurifierState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000A9-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Air Purifier State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentAirPurifierState = CurrentAirPurifierState;
function CurrentAmbientLightLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000006B-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, "lux", "Current Ambient Light Level", 0.0001, 100000, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentAmbientLightLevel = CurrentAmbientLightLevel;
function CurrentDoorState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000000E-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Door State", undefined, undefined, undefined, undefined, [0, 1, 2, 3, 4], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentDoorState = CurrentDoorState;
function CurrentFanState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000AF-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Fan State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentFanState = CurrentFanState;
function CurrentHeaterCoolerState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B1-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Heater Cooler State", undefined, undefined, undefined, undefined, [0, 1, 2, 3], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentHeaterCoolerState = CurrentHeaterCoolerState;
function CurrentHeatingCoolingState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000000F-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Heating Cooling State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentHeatingCoolingState = CurrentHeatingCoolingState;
function CurrentHorizontalTiltAngle(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000006C-0000-1000-8000-0026BB765291', 'int', false, true, true, true, false, "arcdegrees", "Current Horizontal Tilt Angle", -90, 90, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentHorizontalTiltAngle = CurrentHorizontalTiltAngle;
function CurrentHumidifierDehumidifierState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B3-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Humidifier Dehumidifier State", undefined, undefined, undefined, undefined, [0, 1, 2, 3], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentHumidifierDehumidifierState = CurrentHumidifierDehumidifierState;
function CurrentPosition(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000006D-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, "percentage", "Current Position", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentPosition = CurrentPosition;
function CurrentRelativeHumidity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000010-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, "percentage", "Current Relative Humidity", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentRelativeHumidity = CurrentRelativeHumidity;
function CurrentSlatState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000AA-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Current Slat State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentSlatState = CurrentSlatState;
function CurrentTemperature(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000011-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, "celsius", "Current Temperature", 0, 100, 0.1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentTemperature = CurrentTemperature;
function CurrentTiltAngle(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C1-0000-1000-8000-0026BB765291', 'int', false, true, true, true, false, "arcdegrees", "Current Tilt Angle", -90, 90, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentTiltAngle = CurrentTiltAngle;
function CurrentVerticalTiltAngle(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000006E-0000-1000-8000-0026BB765291', 'int', false, true, true, true, false, "arcdegrees", "Current Vertical Tilt Angle", -90, 90, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.CurrentVerticalTiltAngle = CurrentVerticalTiltAngle;
function DigitalZoom(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000011D-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, undefined, "Digital Zoom", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.DigitalZoom = DigitalZoom;
function FilterChangeIndication(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000AC-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Filter Change Indication", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.FilterChangeIndication = FilterChangeIndication;
function FilterLifeLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000AB-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Filter Life Level", 0, 100, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.FilterLifeLevel = FilterLifeLevel;
function FirmwareRevision(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000052-0000-1000-8000-0026BB765291', 'string', false, false, true, true, false, undefined, "Firmware Revision", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.FirmwareRevision = FirmwareRevision;
function HardwareRevision(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000053-0000-1000-8000-0026BB765291', 'string', false, false, true, true, false, undefined, "Hardware Revision", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.HardwareRevision = HardwareRevision;
function HeatingThresholdTemperature(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000012-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "celsius", "Heating Threshold Temperature", 0, 25, 0.1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.HeatingThresholdTemperature = HeatingThresholdTemperature;
function HoldPosition(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000006F-0000-1000-8000-0026BB765291', 'bool', false, false, false, false, false, undefined, "Hold Position", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.HoldPosition = HoldPosition;
function Hue(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000013-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "arcdegrees", "Hue", 0, 360, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Hue = Hue;
function Identify(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000014-0000-1000-8000-0026BB765291', 'bool', false, false, false, false, false, undefined, "Identify", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Identify = Identify;
function ImageMirroring(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000011F-0000-1000-8000-0026BB765291', 'bool', false, true, true, false, false, undefined, "Image Mirroring", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ImageMirroring = ImageMirroring;
function ImageRotation(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000011E-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "arcdegrees", "Image Rotation", 0, 270, 90, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ImageRotation = ImageRotation;
function LeakDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000070-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Leak Detected", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LeakDetected = LeakDetected;
function LockControlPoint(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000019-0000-1000-8000-0026BB765291', 'tlv8', false, false, false, false, false, undefined, "Lock Control Point", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LockControlPoint = LockControlPoint;
function LockCurrentState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000001D-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Lock Current State", undefined, undefined, undefined, undefined, [0, 1, 2, 3], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LockCurrentState = LockCurrentState;
function LockLastKnownAction(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000001C-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Lock Last Known Action", undefined, undefined, undefined, undefined, [0, 1, 2, 3, 4, 5, 6, 7, 8], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LockLastKnownAction = LockLastKnownAction;
function LockManagementAutoSecurityTimeout(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000001A-0000-1000-8000-0026BB765291', 'uint32', false, true, true, false, false, "seconds", "Lock Management Auto Security Timeout", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LockManagementAutoSecurityTimeout = LockManagementAutoSecurityTimeout;
function LockPhysicalControls(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000A7-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Lock Physical Controls", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LockPhysicalControls = LockPhysicalControls;
function LockTargetState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000001E-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Lock Target State", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.LockTargetState = LockTargetState;
function Logs(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000001F-0000-1000-8000-0026BB765291', 'tlv8', false, true, true, true, false, undefined, "Logs", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Logs = Logs;
function Manufacturer(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000020-0000-1000-8000-0026BB765291', 'string', false, false, true, true, false, undefined, "Manufacturer", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Manufacturer = Manufacturer;
function Model(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000021-0000-1000-8000-0026BB765291', 'string', false, false, true, true, false, undefined, "Model", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Model = Model;
function MotionDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000022-0000-1000-8000-0026BB765291', 'bool', false, true, true, true, false, undefined, "Motion Detected", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.MotionDetected = MotionDetected;
function Mute(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000011A-0000-1000-8000-0026BB765291', 'bool', false, true, true, false, false, undefined, "Mute", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Mute = Mute;
function Name(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000023-0000-1000-8000-0026BB765291', 'string', false, false, true, true, false, undefined, "Name", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Name = Name;
function NightVision(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000011B-0000-1000-8000-0026BB765291', 'bool', false, true, true, false, false, undefined, "Night Vision", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.NightVision = NightVision;
function NitrogenDioxideDensity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C4-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Nitrogen Dioxide Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.NitrogenDioxideDensity = NitrogenDioxideDensity;
function ObstructionDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000024-0000-1000-8000-0026BB765291', 'bool', false, true, true, true, false, undefined, "Obstruction Detected", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ObstructionDetected = ObstructionDetected;
function OccupancyDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000071-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Occupancy Detected", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.OccupancyDetected = OccupancyDetected;
function On(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000025-0000-1000-8000-0026BB765291', 'bool', false, true, true, false, false, undefined, "On", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.On = On;
function OpticalZoom(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000011C-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, undefined, "Optical Zoom", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.OpticalZoom = OpticalZoom;
function OutletInUse(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000026-0000-1000-8000-0026BB765291', 'bool', false, true, true, true, false, undefined, "Outlet In Use", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.OutletInUse = OutletInUse;
function OzoneDensity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C3-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Ozone Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.OzoneDensity = OzoneDensity;
function PairSetup(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000004C-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, false, false, undefined, "Pair Setup", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PairSetup = PairSetup;
function PairVerify(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000004E-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, false, false, undefined, "Pair Verify", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PairVerify = PairVerify;
function PairingFeatures(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000004F-0000-1000-8000-0026BB765291', 'uint8', false, false, true, true, false, undefined, "Pairing Features", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PairingFeatures = PairingFeatures;
function PairingPairings(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000050-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, false, false, undefined, "Pairing Pairings", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PairingPairings = PairingPairings;
function PM10Density(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C7-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "PM10 Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PM10Density = PM10Density;
function PM25Density(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C6-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "PM2.5 Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PM25Density = PM25Density;
function PositionState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000072-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Position State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.PositionState = PositionState;
function ProgrammableSwitchEvent(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000073-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Programmable Switch Event", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ProgrammableSwitchEvent = ProgrammableSwitchEvent;
function RelativeHumidityDehumidifierThreshold(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C9-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, undefined, "Relative Humidity Dehumidifier Threshold", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.RelativeHumidityDehumidifierThreshold = RelativeHumidityDehumidifierThreshold;
function RelativeHumidityHumidifierThreshold(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000CA-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, undefined, "Relative Humidity Humidifier Threshold", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.RelativeHumidityHumidifierThreshold = RelativeHumidityHumidifierThreshold;
function ResetFilterIndication(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000AD-0000-1000-8000-0026BB765291', 'uint8', false, false, false, false, false, undefined, "Reset Filter Indication", 1, 1, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ResetFilterIndication = ResetFilterIndication;
function RotationDirection(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000028-0000-1000-8000-0026BB765291', 'int', false, true, true, false, false, undefined, "Rotation Direction", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.RotationDirection = RotationDirection;
function RotationSpeed(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000029-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "percentage", "Rotation Speed", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.RotationSpeed = RotationSpeed;
function Saturation(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000002F-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "percentage", "Saturation", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Saturation = Saturation;
function SecuritySystemAlarmType(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000008E-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Security System Alarm Type", 0, 1, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SecuritySystemAlarmType = SecuritySystemAlarmType;
function SecuritySystemCurrentState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000066-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Security System Current State", undefined, undefined, undefined, undefined, [0, 1, 2, 3, 4], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SecuritySystemCurrentState = SecuritySystemCurrentState;
function SecuritySystemTargetState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000067-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Security System Target State", undefined, undefined, undefined, undefined, [0, 1, 2, 3], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SecuritySystemTargetState = SecuritySystemTargetState;
function SelectedRTPStreamConfiguration(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000117-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, false, false, undefined, "Selected RTP Stream Configuration", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SelectedRTPStreamConfiguration = SelectedRTPStreamConfiguration;
function SerialNumber(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000030-0000-1000-8000-0026BB765291', 'string', false, false, true, true, false, undefined, "Serial Number", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SerialNumber = SerialNumber;
function ServiceLabelIndex(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000CB-0000-1000-8000-0026BB765291', 'uint8', false, false, true, true, false, undefined, "Service Label Index", 1, 255, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ServiceLabelIndex = ServiceLabelIndex;
function ServiceLabelNamespace(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000CD-0000-1000-8000-0026BB765291', 'uint8', false, false, true, true, false, undefined, "Service Label Namespace", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.ServiceLabelNamespace = ServiceLabelNamespace;
function SetupEndpoints(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000118-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, false, false, undefined, "Setup Endpoints", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SetupEndpoints = SetupEndpoints;
function SlatType(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C0-0000-1000-8000-0026BB765291', 'uint8', false, false, true, true, false, undefined, "Slat Type", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SlatType = SlatType;
function SmokeDetected(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000076-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Smoke Detected", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SmokeDetected = SmokeDetected;
function StatusActive(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000075-0000-1000-8000-0026BB765291', 'bool', false, true, true, true, false, undefined, "Status Active", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.StatusActive = StatusActive;
function StatusFault(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000077-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Status Fault", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.StatusFault = StatusFault;
function StatusJammed(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000078-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Status Jammed", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.StatusJammed = StatusJammed;
function StatusLowBattery(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000079-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Status Low Battery", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.StatusLowBattery = StatusLowBattery;
function StatusTampered(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000007A-0000-1000-8000-0026BB765291', 'uint8', false, true, true, true, false, undefined, "Status Tampered", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.StatusTampered = StatusTampered;
function StreamingStatus(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000120-0000-1000-8000-0026BB765291', 'tlv8', false, true, true, true, false, undefined, "Streaming Status", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.StreamingStatus = StreamingStatus;
function SulphurDioxideDensity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C5-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Sulphur Dioxide Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SulphurDioxideDensity = SulphurDioxideDensity;
function SupportedAudioStreamConfiguration(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000115-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, true, false, undefined, "Supported Audio Stream Configuration", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SupportedAudioStreamConfiguration = SupportedAudioStreamConfiguration;
function SupportedRTPConfiguration(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000116-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, true, false, undefined, "Supported RTP Configuration", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SupportedRTPConfiguration = SupportedRTPConfiguration;
function SupportedVideoStreamConfiguration(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000114-0000-1000-8000-0026BB765291', 'tlv8', false, false, true, true, false, undefined, "Supported Video Stream Configuration", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SupportedVideoStreamConfiguration = SupportedVideoStreamConfiguration;
function SwingMode(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B6-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Swing Mode", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.SwingMode = SwingMode;
function TargetAirPurifierState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000A8-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Air Purifier State", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetAirPurifierState = TargetAirPurifierState;
function TargetAirQuality(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000AE-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Air Quality", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetAirQuality = TargetAirQuality;
function TargetDoorState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000032-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Door State", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetDoorState = TargetDoorState;
function TargetFanState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000BF-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Fan State", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetFanState = TargetFanState;
function TargetHeaterCoolerState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B2-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Heater Cooler State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetHeaterCoolerState = TargetHeaterCoolerState;
function TargetHeatingCoolingState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000033-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Heating Cooling State", undefined, undefined, undefined, undefined, [0, 1, 2, 3], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetHeatingCoolingState = TargetHeatingCoolingState;
function TargetHorizontalTiltAngle(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000007B-0000-1000-8000-0026BB765291', 'int', false, true, true, false, false, "arcdegrees", "Target Horizontal Tilt Angle", -90, 90, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetHorizontalTiltAngle = TargetHorizontalTiltAngle;
function TargetHumidifierDehumidifierState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B4-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Humidifier Dehumidifier State", undefined, undefined, undefined, undefined, [0, 1, 2], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetHumidifierDehumidifierState = TargetHumidifierDehumidifierState;
function TargetPosition(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000007C-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, "percentage", "Target Position", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetPosition = TargetPosition;
function TargetRelativeHumidity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000034-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "percentage", "Target Relative Humidity", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetRelativeHumidity = TargetRelativeHumidity;
function TargetSlatState(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000BE-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Target Slat State", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetSlatState = TargetSlatState;
function TargetTemperature(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000035-0000-1000-8000-0026BB765291', 'float', false, true, true, false, false, "celsius", "Target Temperature", 10, 38, 0.1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetTemperature = TargetTemperature;
function TargetTiltAngle(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C2-0000-1000-8000-0026BB765291', 'int', false, true, true, false, false, "arcdegrees", "Target Tilt Angle", -90, 90, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetTiltAngle = TargetTiltAngle;
function TargetVerticalTiltAngle(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '0000007D-0000-1000-8000-0026BB765291', 'int', false, true, true, false, false, "arcdegrees", "Target Vertical Tilt Angle", -90, 90, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TargetVerticalTiltAngle = TargetVerticalTiltAngle;
function TemperatureDisplayUnits(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000036-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, undefined, "Temperature Display Units", undefined, undefined, undefined, undefined, [0, 1], undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.TemperatureDisplayUnits = TemperatureDisplayUnits;
function Version(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000037-0000-1000-8000-0026BB765291', 'string', false, true, true, true, false, undefined, "Version", undefined, undefined, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Version = Version;
function VOCDensity(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000C8-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "VOC Density", 0, 1000, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.VOCDensity = VOCDensity;
function Volume(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '00000119-0000-1000-8000-0026BB765291', 'uint8', false, true, true, false, false, "percentage", "Volume", 0, 100, 1, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.Volume = Volume;
function WaterLevel(ID, value, onWrite) {
    var characteristic = new characteristic_1.default(ID, '000000B5-0000-1000-8000-0026BB765291', 'float', false, true, true, true, false, undefined, "Water Level", 0, 100, undefined, undefined, undefined, undefined);
    if (value != null && value != undefined)
        characteristic.setValue(value);
    if (onWrite)
        characteristic.onWrite = onWrite;
    return characteristic;
}
exports.WaterLevel = WaterLevel;
function AccessoryInformation(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000003E-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000014-0000-1000-8000-0026BB765291', '00000020-0000-1000-8000-0026BB765291', '00000021-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '00000030-0000-1000-8000-0026BB765291', '00000052-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000053-0000-1000-8000-0026BB765291', '000000A6-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_1 = requiredCharacteristics; _i < requiredCharacteristics_1.length; _i++) {
        var type = requiredCharacteristics_1[_i];
        var OK = false;
        for (var _a = 0, characteristics_1 = characteristics; _a < characteristics_1.length; _a++) {
            var characteristic = characteristics_1[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_2 = characteristics; _b < characteristics_2.length; _b++) {
        var characteristic = characteristics_2[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.AccessoryInformation = AccessoryInformation;
function AirPurifier(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000BB-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['000000B0-0000-1000-8000-0026BB765291', '000000A9-0000-1000-8000-0026BB765291', '000000A8-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['000000A7-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '000000B6-0000-1000-8000-0026BB765291', '00000029-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_2 = requiredCharacteristics; _i < requiredCharacteristics_2.length; _i++) {
        var type = requiredCharacteristics_2[_i];
        var OK = false;
        for (var _a = 0, characteristics_3 = characteristics; _a < characteristics_3.length; _a++) {
            var characteristic = characteristics_3[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_4 = characteristics; _b < characteristics_4.length; _b++) {
        var characteristic = characteristics_4[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.AirPurifier = AirPurifier;
function AirQualitySensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000008D-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000095-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '000000C3-0000-1000-8000-0026BB765291', '000000C4-0000-1000-8000-0026BB765291', '000000C5-0000-1000-8000-0026BB765291', '000000C6-0000-1000-8000-0026BB765291', '000000C7-0000-1000-8000-0026BB765291', '000000C8-0000-1000-8000-0026BB765291', '00000090-0000-1000-8000-0026BB765291', '00000093-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_3 = requiredCharacteristics; _i < requiredCharacteristics_3.length; _i++) {
        var type = requiredCharacteristics_3[_i];
        var OK = false;
        for (var _a = 0, characteristics_5 = characteristics; _a < characteristics_5.length; _a++) {
            var characteristic = characteristics_5[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_6 = characteristics; _b < characteristics_6.length; _b++) {
        var characteristic = characteristics_6[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.AirQualitySensor = AirQualitySensor;
function BatteryService(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000096-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000068-0000-1000-8000-0026BB765291', '0000008F-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_4 = requiredCharacteristics; _i < requiredCharacteristics_4.length; _i++) {
        var type = requiredCharacteristics_4[_i];
        var OK = false;
        for (var _a = 0, characteristics_7 = characteristics; _a < characteristics_7.length; _a++) {
            var characteristic = characteristics_7[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_8 = characteristics; _b < characteristics_8.length; _b++) {
        var characteristic = characteristics_8[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.BatteryService = BatteryService;
function CameraRTPStreamManagement(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000110-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000114-0000-1000-8000-0026BB765291', '00000115-0000-1000-8000-0026BB765291', '00000116-0000-1000-8000-0026BB765291', '00000117-0000-1000-8000-0026BB765291', '00000120-0000-1000-8000-0026BB765291', '00000118-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_5 = requiredCharacteristics; _i < requiredCharacteristics_5.length; _i++) {
        var type = requiredCharacteristics_5[_i];
        var OK = false;
        for (var _a = 0, characteristics_9 = characteristics; _a < characteristics_9.length; _a++) {
            var characteristic = characteristics_9[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_10 = characteristics; _b < characteristics_10.length; _b++) {
        var characteristic = characteristics_10[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.CameraRTPStreamManagement = CameraRTPStreamManagement;
function CarbonDioxideSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000097-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000092-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000093-0000-1000-8000-0026BB765291', '00000094-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_6 = requiredCharacteristics; _i < requiredCharacteristics_6.length; _i++) {
        var type = requiredCharacteristics_6[_i];
        var OK = false;
        for (var _a = 0, characteristics_11 = characteristics; _a < characteristics_11.length; _a++) {
            var characteristic = characteristics_11[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_12 = characteristics; _b < characteristics_12.length; _b++) {
        var characteristic = characteristics_12[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.CarbonDioxideSensor = CarbonDioxideSensor;
function CarbonMonoxideSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000007F-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000069-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000090-0000-1000-8000-0026BB765291', '00000091-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_7 = requiredCharacteristics; _i < requiredCharacteristics_7.length; _i++) {
        var type = requiredCharacteristics_7[_i];
        var OK = false;
        for (var _a = 0, characteristics_13 = characteristics; _a < characteristics_13.length; _a++) {
            var characteristic = characteristics_13[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_14 = characteristics; _b < characteristics_14.length; _b++) {
        var characteristic = characteristics_14[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.CarbonMonoxideSensor = CarbonMonoxideSensor;
function ContactSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000080-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000006A-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_8 = requiredCharacteristics; _i < requiredCharacteristics_8.length; _i++) {
        var type = requiredCharacteristics_8[_i];
        var OK = false;
        for (var _a = 0, characteristics_15 = characteristics; _a < characteristics_15.length; _a++) {
            var characteristic = characteristics_15[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_16 = characteristics; _b < characteristics_16.length; _b++) {
        var characteristic = characteristics_16[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.ContactSensor = ContactSensor;
function Door(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000081-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000006D-0000-1000-8000-0026BB765291', '00000072-0000-1000-8000-0026BB765291', '0000007C-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['0000006F-0000-1000-8000-0026BB765291', '00000024-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_9 = requiredCharacteristics; _i < requiredCharacteristics_9.length; _i++) {
        var type = requiredCharacteristics_9[_i];
        var OK = false;
        for (var _a = 0, characteristics_17 = characteristics; _a < characteristics_17.length; _a++) {
            var characteristic = characteristics_17[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_18 = characteristics; _b < characteristics_18.length; _b++) {
        var characteristic = characteristics_18[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Door = Door;
function Doorbell(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000121-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000073-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000008-0000-1000-8000-0026BB765291', '00000119-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_10 = requiredCharacteristics; _i < requiredCharacteristics_10.length; _i++) {
        var type = requiredCharacteristics_10[_i];
        var OK = false;
        for (var _a = 0, characteristics_19 = characteristics; _a < characteristics_19.length; _a++) {
            var characteristic = characteristics_19[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_20 = characteristics; _b < characteristics_20.length; _b++) {
        var characteristic = characteristics_20[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Doorbell = Doorbell;
function Fan(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000040-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000025-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000028-0000-1000-8000-0026BB765291', '00000029-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_11 = requiredCharacteristics; _i < requiredCharacteristics_11.length; _i++) {
        var type = requiredCharacteristics_11[_i];
        var OK = false;
        for (var _a = 0, characteristics_21 = characteristics; _a < characteristics_21.length; _a++) {
            var characteristic = characteristics_21[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_22 = characteristics; _b < characteristics_22.length; _b++) {
        var characteristic = characteristics_22[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Fan = Fan;
function Fanv2(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000B7-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['000000B0-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['000000AF-0000-1000-8000-0026BB765291', '000000BF-0000-1000-8000-0026BB765291', '000000A7-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '00000028-0000-1000-8000-0026BB765291', '00000029-0000-1000-8000-0026BB765291', '000000B6-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_12 = requiredCharacteristics; _i < requiredCharacteristics_12.length; _i++) {
        var type = requiredCharacteristics_12[_i];
        var OK = false;
        for (var _a = 0, characteristics_23 = characteristics; _a < characteristics_23.length; _a++) {
            var characteristic = characteristics_23[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_24 = characteristics; _b < characteristics_24.length; _b++) {
        var characteristic = characteristics_24[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Fanv2 = Fanv2;
function FilterMaintenance(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000BA-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['000000AC-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['000000AB-0000-1000-8000-0026BB765291', '000000AD-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_13 = requiredCharacteristics; _i < requiredCharacteristics_13.length; _i++) {
        var type = requiredCharacteristics_13[_i];
        var OK = false;
        for (var _a = 0, characteristics_25 = characteristics; _a < characteristics_25.length; _a++) {
            var characteristic = characteristics_25[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_26 = characteristics; _b < characteristics_26.length; _b++) {
        var characteristic = characteristics_26[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.FilterMaintenance = FilterMaintenance;
function GarageDoorOpener(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000041-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000000E-0000-1000-8000-0026BB765291', '00000032-0000-1000-8000-0026BB765291', '00000024-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['0000001D-0000-1000-8000-0026BB765291', '0000001E-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_14 = requiredCharacteristics; _i < requiredCharacteristics_14.length; _i++) {
        var type = requiredCharacteristics_14[_i];
        var OK = false;
        for (var _a = 0, characteristics_27 = characteristics; _a < characteristics_27.length; _a++) {
            var characteristic = characteristics_27[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_28 = characteristics; _b < characteristics_28.length; _b++) {
        var characteristic = characteristics_28[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.GarageDoorOpener = GarageDoorOpener;
function HeaterCooler(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000BC-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['000000B0-0000-1000-8000-0026BB765291', '000000B1-0000-1000-8000-0026BB765291', '000000B2-0000-1000-8000-0026BB765291', '00000011-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['000000A7-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '000000B6-0000-1000-8000-0026BB765291', '0000000D-0000-1000-8000-0026BB765291', '00000012-0000-1000-8000-0026BB765291', '00000036-0000-1000-8000-0026BB765291', '00000029-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_15 = requiredCharacteristics; _i < requiredCharacteristics_15.length; _i++) {
        var type = requiredCharacteristics_15[_i];
        var OK = false;
        for (var _a = 0, characteristics_29 = characteristics; _a < characteristics_29.length; _a++) {
            var characteristic = characteristics_29[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_30 = characteristics; _b < characteristics_30.length; _b++) {
        var characteristic = characteristics_30[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.HeaterCooler = HeaterCooler;
function HumidifierDehumidifier(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000BD-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000010-0000-1000-8000-0026BB765291', '000000B3-0000-1000-8000-0026BB765291', '000000B4-0000-1000-8000-0026BB765291', '000000B0-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['000000A7-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '000000B6-0000-1000-8000-0026BB765291', '000000B5-0000-1000-8000-0026BB765291', '000000C9-0000-1000-8000-0026BB765291', '000000CA-0000-1000-8000-0026BB765291', '00000029-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_16 = requiredCharacteristics; _i < requiredCharacteristics_16.length; _i++) {
        var type = requiredCharacteristics_16[_i];
        var OK = false;
        for (var _a = 0, characteristics_31 = characteristics; _a < characteristics_31.length; _a++) {
            var characteristic = characteristics_31[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_32 = characteristics; _b < characteristics_32.length; _b++) {
        var characteristic = characteristics_32[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.HumidifierDehumidifier = HumidifierDehumidifier;
function HumiditySensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000082-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000010-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_17 = requiredCharacteristics; _i < requiredCharacteristics_17.length; _i++) {
        var type = requiredCharacteristics_17[_i];
        var OK = false;
        for (var _a = 0, characteristics_33 = characteristics; _a < characteristics_33.length; _a++) {
            var characteristic = characteristics_33[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_34 = characteristics; _b < characteristics_34.length; _b++) {
        var characteristic = characteristics_34[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.HumiditySensor = HumiditySensor;
function LeakSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000083-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000070-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_18 = requiredCharacteristics; _i < requiredCharacteristics_18.length; _i++) {
        var type = requiredCharacteristics_18[_i];
        var OK = false;
        for (var _a = 0, characteristics_35 = characteristics; _a < characteristics_35.length; _a++) {
            var characteristic = characteristics_35[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_36 = characteristics; _b < characteristics_36.length; _b++) {
        var characteristic = characteristics_36[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.LeakSensor = LeakSensor;
function LightSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000084-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000006B-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_19 = requiredCharacteristics; _i < requiredCharacteristics_19.length; _i++) {
        var type = requiredCharacteristics_19[_i];
        var OK = false;
        for (var _a = 0, characteristics_37 = characteristics; _a < characteristics_37.length; _a++) {
            var characteristic = characteristics_37[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_38 = characteristics; _b < characteristics_38.length; _b++) {
        var characteristic = characteristics_38[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.LightSensor = LightSensor;
function Lightbulb(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000043-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000025-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000008-0000-1000-8000-0026BB765291', '00000013-0000-1000-8000-0026BB765291', '0000002F-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291', '000000CE-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_20 = requiredCharacteristics; _i < requiredCharacteristics_20.length; _i++) {
        var type = requiredCharacteristics_20[_i];
        var OK = false;
        for (var _a = 0, characteristics_39 = characteristics; _a < characteristics_39.length; _a++) {
            var characteristic = characteristics_39[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_40 = characteristics; _b < characteristics_40.length; _b++) {
        var characteristic = characteristics_40[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Lightbulb = Lightbulb;
function LockManagement(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000044-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000019-0000-1000-8000-0026BB765291', '00000037-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['0000001F-0000-1000-8000-0026BB765291', '00000005-0000-1000-8000-0026BB765291', '0000001A-0000-1000-8000-0026BB765291', '00000001-0000-1000-8000-0026BB765291', '0000001C-0000-1000-8000-0026BB765291', '0000000E-0000-1000-8000-0026BB765291', '00000022-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_21 = requiredCharacteristics; _i < requiredCharacteristics_21.length; _i++) {
        var type = requiredCharacteristics_21[_i];
        var OK = false;
        for (var _a = 0, characteristics_41 = characteristics; _a < characteristics_41.length; _a++) {
            var characteristic = characteristics_41[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_42 = characteristics; _b < characteristics_42.length; _b++) {
        var characteristic = characteristics_42[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.LockManagement = LockManagement;
function LockMechanism(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000045-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000001D-0000-1000-8000-0026BB765291', '0000001E-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_22 = requiredCharacteristics; _i < requiredCharacteristics_22.length; _i++) {
        var type = requiredCharacteristics_22[_i];
        var OK = false;
        for (var _a = 0, characteristics_43 = characteristics; _a < characteristics_43.length; _a++) {
            var characteristic = characteristics_43[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_44 = characteristics; _b < characteristics_44.length; _b++) {
        var characteristic = characteristics_44[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.LockMechanism = LockMechanism;
function Microphone(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000112-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000011A-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000119-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_23 = requiredCharacteristics; _i < requiredCharacteristics_23.length; _i++) {
        var type = requiredCharacteristics_23[_i];
        var OK = false;
        for (var _a = 0, characteristics_45 = characteristics; _a < characteristics_45.length; _a++) {
            var characteristic = characteristics_45[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_46 = characteristics; _b < characteristics_46.length; _b++) {
        var characteristic = characteristics_46[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Microphone = Microphone;
function MotionSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000085-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000022-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_24 = requiredCharacteristics; _i < requiredCharacteristics_24.length; _i++) {
        var type = requiredCharacteristics_24[_i];
        var OK = false;
        for (var _a = 0, characteristics_47 = characteristics; _a < characteristics_47.length; _a++) {
            var characteristic = characteristics_47[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_48 = characteristics; _b < characteristics_48.length; _b++) {
        var characteristic = characteristics_48[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.MotionSensor = MotionSensor;
function OccupancySensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000086-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000071-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_25 = requiredCharacteristics; _i < requiredCharacteristics_25.length; _i++) {
        var type = requiredCharacteristics_25[_i];
        var OK = false;
        for (var _a = 0, characteristics_49 = characteristics; _a < characteristics_49.length; _a++) {
            var characteristic = characteristics_49[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_50 = characteristics; _b < characteristics_50.length; _b++) {
        var characteristic = characteristics_50[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.OccupancySensor = OccupancySensor;
function Outlet(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000047-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000025-0000-1000-8000-0026BB765291', '00000026-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_26 = requiredCharacteristics; _i < requiredCharacteristics_26.length; _i++) {
        var type = requiredCharacteristics_26[_i];
        var OK = false;
        for (var _a = 0, characteristics_51 = characteristics; _a < characteristics_51.length; _a++) {
            var characteristic = characteristics_51[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_52 = characteristics; _b < characteristics_52.length; _b++) {
        var characteristic = characteristics_52[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Outlet = Outlet;
function SecuritySystem(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000007E-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000066-0000-1000-8000-0026BB765291', '00000067-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '0000008E-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_27 = requiredCharacteristics; _i < requiredCharacteristics_27.length; _i++) {
        var type = requiredCharacteristics_27[_i];
        var OK = false;
        for (var _a = 0, characteristics_53 = characteristics; _a < characteristics_53.length; _a++) {
            var characteristic = characteristics_53[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_54 = characteristics; _b < characteristics_54.length; _b++) {
        var characteristic = characteristics_54[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.SecuritySystem = SecuritySystem;
function ServiceLabel(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000CC-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['000000CD-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_28 = requiredCharacteristics; _i < requiredCharacteristics_28.length; _i++) {
        var type = requiredCharacteristics_28[_i];
        var OK = false;
        for (var _a = 0, characteristics_55 = characteristics; _a < characteristics_55.length; _a++) {
            var characteristic = characteristics_55[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_56 = characteristics; _b < characteristics_56.length; _b++) {
        var characteristic = characteristics_56[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.ServiceLabel = ServiceLabel;
function Slat(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '000000B9-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['000000C0-0000-1000-8000-0026BB765291', '000000AA-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291', '000000C1-0000-1000-8000-0026BB765291', '000000C2-0000-1000-8000-0026BB765291', '000000B6-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_29 = requiredCharacteristics; _i < requiredCharacteristics_29.length; _i++) {
        var type = requiredCharacteristics_29[_i];
        var OK = false;
        for (var _a = 0, characteristics_57 = characteristics; _a < characteristics_57.length; _a++) {
            var characteristic = characteristics_57[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_58 = characteristics; _b < characteristics_58.length; _b++) {
        var characteristic = characteristics_58[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Slat = Slat;
function SmokeSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000087-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000076-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_30 = requiredCharacteristics; _i < requiredCharacteristics_30.length; _i++) {
        var type = requiredCharacteristics_30[_i];
        var OK = false;
        for (var _a = 0, characteristics_59 = characteristics; _a < characteristics_59.length; _a++) {
            var characteristic = characteristics_59[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_60 = characteristics; _b < characteristics_60.length; _b++) {
        var characteristic = characteristics_60[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.SmokeSensor = SmokeSensor;
function Speaker(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000113-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000011A-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000119-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_31 = requiredCharacteristics; _i < requiredCharacteristics_31.length; _i++) {
        var type = requiredCharacteristics_31[_i];
        var OK = false;
        for (var _a = 0, characteristics_61 = characteristics; _a < characteristics_61.length; _a++) {
            var characteristic = characteristics_61[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_62 = characteristics; _b < characteristics_62.length; _b++) {
        var characteristic = characteristics_62[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Speaker = Speaker;
function StatelessProgrammableSwitch(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000089-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000073-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291', '000000CB-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_32 = requiredCharacteristics; _i < requiredCharacteristics_32.length; _i++) {
        var type = requiredCharacteristics_32[_i];
        var OK = false;
        for (var _a = 0, characteristics_63 = characteristics; _a < characteristics_63.length; _a++) {
            var characteristic = characteristics_63[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_64 = characteristics; _b < characteristics_64.length; _b++) {
        var characteristic = characteristics_64[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.StatelessProgrammableSwitch = StatelessProgrammableSwitch;
function Switch(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '00000049-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000025-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_33 = requiredCharacteristics; _i < requiredCharacteristics_33.length; _i++) {
        var type = requiredCharacteristics_33[_i];
        var OK = false;
        for (var _a = 0, characteristics_65 = characteristics; _a < characteristics_65.length; _a++) {
            var characteristic = characteristics_65[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_66 = characteristics; _b < characteristics_66.length; _b++) {
        var characteristic = characteristics_66[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Switch = Switch;
function TemperatureSensor(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000008A-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['00000011-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000075-0000-1000-8000-0026BB765291', '00000077-0000-1000-8000-0026BB765291', '00000079-0000-1000-8000-0026BB765291', '0000007A-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_34 = requiredCharacteristics; _i < requiredCharacteristics_34.length; _i++) {
        var type = requiredCharacteristics_34[_i];
        var OK = false;
        for (var _a = 0, characteristics_67 = characteristics; _a < characteristics_67.length; _a++) {
            var characteristic = characteristics_67[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_68 = characteristics; _b < characteristics_68.length; _b++) {
        var characteristic = characteristics_68[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.TemperatureSensor = TemperatureSensor;
function Thermostat(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000004A-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000000F-0000-1000-8000-0026BB765291', '00000033-0000-1000-8000-0026BB765291', '00000011-0000-1000-8000-0026BB765291', '00000035-0000-1000-8000-0026BB765291', '00000036-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['00000010-0000-1000-8000-0026BB765291', '00000034-0000-1000-8000-0026BB765291', '0000000D-0000-1000-8000-0026BB765291', '00000012-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_35 = requiredCharacteristics; _i < requiredCharacteristics_35.length; _i++) {
        var type = requiredCharacteristics_35[_i];
        var OK = false;
        for (var _a = 0, characteristics_69 = characteristics; _a < characteristics_69.length; _a++) {
            var characteristic = characteristics_69[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_70 = characteristics; _b < characteristics_70.length; _b++) {
        var characteristic = characteristics_70[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Thermostat = Thermostat;
function Window(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000008B-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000006D-0000-1000-8000-0026BB765291', '0000007C-0000-1000-8000-0026BB765291', '00000072-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['0000006F-0000-1000-8000-0026BB765291', '00000024-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_36 = requiredCharacteristics; _i < requiredCharacteristics_36.length; _i++) {
        var type = requiredCharacteristics_36[_i];
        var OK = false;
        for (var _a = 0, characteristics_71 = characteristics; _a < characteristics_71.length; _a++) {
            var characteristic = characteristics_71[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_72 = characteristics; _b < characteristics_72.length; _b++) {
        var characteristic = characteristics_72[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.Window = Window;
function WindowCovering(ID, characteristics, isHidden, isPrimary, linkedServices) {
    if (isHidden === void 0) { isHidden = false; }
    if (isPrimary === void 0) { isPrimary = false; }
    if (linkedServices === void 0) { linkedServices = []; }
    var service = new service_1.default(ID, '0000008C-0000-1000-8000-0026BB765291', isHidden, isPrimary, linkedServices);
    var requiredCharacteristics = ['0000006D-0000-1000-8000-0026BB765291', '0000007C-0000-1000-8000-0026BB765291', '00000072-0000-1000-8000-0026BB765291'];
    var optionalCharacteristics = ['0000006F-0000-1000-8000-0026BB765291', '0000007B-0000-1000-8000-0026BB765291', '0000007D-0000-1000-8000-0026BB765291', '0000006C-0000-1000-8000-0026BB765291', '0000006E-0000-1000-8000-0026BB765291', '00000024-0000-1000-8000-0026BB765291', '00000023-0000-1000-8000-0026BB765291'];
    for (var _i = 0, requiredCharacteristics_37 = requiredCharacteristics; _i < requiredCharacteristics_37.length; _i++) {
        var type = requiredCharacteristics_37[_i];
        var OK = false;
        for (var _a = 0, characteristics_73 = characteristics; _a < characteristics_73.length; _a++) {
            var characteristic = characteristics_73[_a];
            if (characteristic.getType() == type) {
                OK = true;
                break;
            }
        }
        if (!OK)
            throw new Error(type + 'is required for this service: ' + ID);
    }
    for (var _b = 0, characteristics_74 = characteristics; _b < characteristics_74.length; _b++) {
        var characteristic = characteristics_74[_b];
        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)
            throw new Error(ID + ' can not contain ' + characteristic.getType());
        service.addCharacteristic(characteristic);
    }
    return service;
}
exports.WindowCovering = WindowCovering;
