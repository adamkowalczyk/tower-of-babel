var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

// assign new variable names to each object property
var {first: firstName, family: familyName} = json.name; 
var {year: birthYear, month: birthMonth, day: birthDay} = json.birth;

// official soultion:
// var {name: {family: familyName}, birth: {day: birthDay}} = json;

// NB - possbile to only assign some properties to new vars, just specify via object notation.
// non specified properties are ignored.

console.log(familyName);
console.log(birthDay);