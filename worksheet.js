const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

document.write("characters json : ", JSON.stringify(characters), "<br>")

//***MAP***
document.write("<br>", "***MAP***", "<br>")
//1. Get array of all names
const names = characters.map(character => character.name);
document.write("1. Get array of all names : ",JSON.stringify(names), "<br>");

//2. Get array of all heights
const heights = characters.map(character => character.height);
document.write("2. Get array of all heights : ",JSON.stringify(heights), "<br>");

//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map(({ name, height }) => ({ name, height }));
document.write("3. Get array of objects with just name and height properties : ", JSON.stringify(nameAndHeight))

//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0]);
document.write("<br>", "4. Get array of all first names : ",JSON.stringify(firstNames), "<br>");



//***REDUCE***
document.write("<br>", "***REDUCE***", "<br>")
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, character) => acc + character.mass, 0);
document.write("1. Get total mass of all characters : ",totalMass, "<br>");

//2. Get total height of all characters
const totalHight = characters.reduce((acc, character) => acc + character.height, 0);
document.write("2. Get total height of all characters : ",totalHight, "<br>");

//3. Get total number of characters by eye color
const eyeColorCount = characters.reduce((acc, character) => {
    acc[character.eye_color] = (acc[character.eye_color] || 0) + 1;
    return acc;
},{});
document.write("3. Get total number of characters by eye color : ",JSON.stringify(eyeColorCount), "<br>");

//4. Get total number of characters in all the character names
const totalCharacters = characters.reduce((acc, character) => {
    return acc + character.name.length;
}, 0);
document.write("4. Get total number of characters in all the character names : ", totalCharacters, "<br>")

//***FILTER***
document.write("<br>", "***FILTER***", "<br>")
//1. Get characters with mass greater than 100
const charactersWithMassGreaterThan100 = characters.filter((character) => {
    return character.mass > 100;
});
document.write("1. Get characters with mass greater than 100 : ", JSON.stringify(charactersWithMassGreaterThan100), "<br>")

//2. Get characters with height less than 200
const charactersWithHeightLessThan200 = characters.filter((character) => {
    return character.height < 200
})
document.write("2. Get characters with height less than 200 : ", JSON.stringify(charactersWithHeightLessThan200), "<br>")

//3. Get all male characters
const maleCharacters = characters.filter((character) =>{
    return character.gender === 'male'
})
document.write("3. Get all male characters : ", JSON.stringify(maleCharacters), "<br>")

//4. Get all female characters
const femaleCharacters = characters.filter((character) => {
    return character.gender === 'female'
})
document.write("4. Get all female characters : ", JSON.stringify(maleCharacters), "<br>")

//***SORT***
document.write("<br>", "***SORT***", "<br>")
//1. Sort by mass
const charactersSortedByMass = characters.sort((a, b) => {
    return a.mass - b.mass;
});
document.write("1. Sort by mass : ", JSON.stringify(charactersSortedByMass), "<br>")

//2. Sort by height
const charactersSortedByHeight = characters.sort((a, b) => {
    return a.height - b.height;
});
document.write("2. Sort by height : ", JSON.stringify(charactersSortedByHeight), "<br>")

//3. Sort by name
const charactersSortedByName = characters.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
document.write("3. Sort by name : ", JSON.stringify(charactersSortedByName), "<br>")

//4. Sort by gender
const charactersSortedByGender = characters.sort((a, b) => {
    if (a.gender < b.gender) {
      return -1;
    } else if (a.gender > b.gender) {
      return 1;
    } else {
      return 0;
    }
  });
  document.write("4. Sort by gender : ", JSON.stringify(charactersSortedByName), "<br>")

//***EVERY***
document.write("<br>", "***EVERT***", "<br>")
//1. Does every character have blue eyes?
const EveryCharacterHaveBlueEyes = characters.every(x => x.eye_color === "blue")
document.write("1. Does every character have blue eyes? : ", EveryCharacterHaveBlueEyes, "<br>")

//2. Does every character have mass more than 40?
const EveryCharacterMassMoreThan40 = characters.every(x => x.mass > 40)
document.write("2. Does every character have mass more than 40? : ", EveryCharacterMassMoreThan40, "<br>")

//3. Is every character shorter than 200?
const EveryCharacterShorterThan200 = characters.every(x => x.height < 200)
document.write("3. Is every character shorter than 200? : ", EveryCharacterShorterThan200, "<br>")

//4. Is every character male?
const EveryCharacterMale = characters.every(x => x.gender === "male")
document.write("4. Is every character male? : ", EveryCharacterMale, "<br>")

//***SOME***
document.write("<br>", "***SOME***", "<br>")
//1. Is there at least one male character?
const AtLeastOneMaleCharacter = characters.some((characters) =>{
    return characters.gender === "male";
})
document.write("1. Is there at least one male character? : ", AtLeastOneMaleCharacter, "<br>")

//2. Is there at least one character with blue eyes?
const AtLeastOneBlueEyesCharacter = characters.some((characters) =>{
    return characters.eye_color === "blue";
})
document.write("2. Is there at least one character with blue eyes? : ", AtLeastOneBlueEyesCharacter, "<br>")

//3. Is there at least one character taller than 210?
const AtLeastOneCharacterTallerThan210 = characters.some((characters) =>{
    return characters.height > 210;
})
document.write("3. Is there at least one character taller than 210? : ", AtLeastOneCharacterTallerThan210, "<br>")

//4. Is there at least one character that has mass less than 50?
const AtLeastOneCharacterMassLessThan50 = characters.some((characters) =>{
    return characters.mass < 50;
})
document.write("4. Is there at least one character that has mass less than 50? : ", AtLeastOneCharacterMassLessThan50, "<br>")

