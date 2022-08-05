"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const colors = require("./colors");
const color_1 = require("./color");
const removeValues = (object) => {
    for (const key of Object.keys(object)) {
        if (object[key] instanceof color_1.Color)
            object[key] = '';
        else
            object[key] = removeValues(object[key]);
    }
    return object;
};
const dark = removeValues(colors.dark);
const light = removeValues(colors.light);
const mirage = removeValues(colors.mirage);
assert.deepEqual(light, mirage, 'Light and Mirage schemes have different properties');
assert.deepEqual(light, dark, 'Light and Dark schemes have different properties');
assert.deepEqual(mirage, dark, 'Mirage and Dark schemes have different properties');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX190ZXN0X18uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvX190ZXN0X18udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFDaEMsbUNBQWtDO0FBQ2xDLG1DQUErQjtBQUUvQixNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ3RDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNyQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxhQUFLO1lBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTs7WUFDN0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUM3QztJQUNELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3hDLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLG9EQUFvRCxDQUFDLENBQUE7QUFDckYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGtEQUFrRCxDQUFDLENBQUE7QUFDakYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLG1EQUFtRCxDQUFDLENBQUEifQ==