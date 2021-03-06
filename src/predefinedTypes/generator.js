"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = require('./data');
var FS = require("fs");
function undefinedOrString(value) {
    if (value == undefined || value == null)
        return 'undefined';
    else
        return "\"" + value + "\"";
}
function undefinedOrArray(value, isString) {
    if (isString === void 0) { isString = false; }
    if (value == undefined || value == null)
        return 'undefined';
    else
        return isString ? "['" + value.join("', '") + "']" : "[" + value.join(', ') + "]";
}
function getFunctionName(name) {
    name = name.replace(/ /g, '').replace(/\./g, '');
    return name;
}
var codes = ['//This file is generated automatically', '//Data is taken from https://raw.githubusercontent.com/brutella/hc/master/gen/metadata.json', "import Characteristic from '../characteristic';", "import {OnWrite} from '../characteristic';", "import Service from '../service';", "", "//Characteristics"];
for (var _i = 0, _a = data.Characteristics; _i < _a.length; _i++) {
    var characteristic = _a[_i];
    var type = characteristic.UUID;
    var valueFormat = characteristic.Format.replace(/^int32$/g, 'int');
    var isHidden = false;
    var hasNotifications = characteristic.Properties.indexOf('cnotify') > -1;
    var hasValue = characteristic.Properties.indexOf('read') > -1;
    var isReadonly = characteristic.Properties.indexOf('write') <= -1;
    var additionalAuthorization = false;
    var valueUnit = characteristic.Unit;
    var description = characteristic.Name;
    var minValue = characteristic.Constraints ? characteristic.Constraints.MinimumValue : undefined;
    var maxValue = characteristic.Constraints ? characteristic.Constraints.MaximumValue : undefined;
    var stepValue = characteristic.Constraints ? characteristic.Constraints.StepValue : undefined;
    var maxLength = undefined;
    var validValues = (characteristic.Constraints && characteristic.Constraints.ValidValues) ? Object.keys(characteristic.Constraints.ValidValues).map(function (value) { return parseInt(value); }) : undefined;
    var validRangeValues = undefined;
    var code = "export function " + getFunctionName(description) + "(ID: number, value: any, onWrite?: OnWrite): Characteristic {\n    let characteristic = new Characteristic(ID, '" + type + "', '" + valueFormat + "', " + isHidden + ", " + hasNotifications + ", " + hasValue + ", " + isReadonly + ", " + additionalAuthorization + ", " + undefinedOrString(valueUnit) + ", " + undefinedOrString(description) + ", " + minValue + ", " + maxValue + ", " + stepValue + ", " + maxLength + ", " + undefinedOrArray(validValues) + ", " + validRangeValues + ");\n    if (value != null && value != undefined)\n        characteristic.setValue(value);\n    if (onWrite)\n        characteristic.onWrite = onWrite;\n    return characteristic;\n}";
    codes.push(code);
}
codes.push("");
codes.push("//Services");
for (var _b = 0, _c = data.Services; _b < _c.length; _b++) {
    var service = _c[_b];
    var type = service.UUID;
    var name = service.Name;
    var code = "export function " + getFunctionName(name) + "(ID: number, characteristics: Characteristic[], isHidden: boolean = false, isPrimary: boolean = false, linkedServices: number[] = []): Service {\n    let service = new Service(ID, '" + type + "', isHidden, isPrimary, linkedServices);\n    \n    let requiredCharacteristics = " + undefinedOrArray(service.RequiredCharacteristics, true) + ";\n    let optionalCharacteristics = " + undefinedOrArray(service.OptionalCharacteristics, true) + ";\n    \n    for (let type of requiredCharacteristics) {\n        let OK = false;\n        \n        for (let characteristic of characteristics) {\n            if (characteristic.getType() == type) {\n                OK = true;\n                break;\n            }\n        }\n        \n        if (!OK)\n            throw new Error(type + 'is required for this service: ' + ID);\n    }\n    \n    for (let characteristic of characteristics) {\n        if (requiredCharacteristics.indexOf(characteristic.getType()) <= -1 && optionalCharacteristics.indexOf(characteristic.getType()) <= -1)\n            throw new Error(ID + ' can not contain ' + characteristic.getType());\n            \n        service.addCharacteristic(characteristic);\n    }\n    \n    return service;\n}";
    codes.push(code);
}
FS.writeFileSync('predefined.ts', codes.join("\n\n"));
