let hasLicence = true;
let age = 21;
let isDrunk = false;
/* ычвф */
let canDrive = (hasLicence && age >= 18 && !isDrunk);
console.log(`${canDrive ? 'Может' : 'Не может'} водить машину`);