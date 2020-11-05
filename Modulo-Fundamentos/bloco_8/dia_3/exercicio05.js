    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acc, char) => 
    acc + char.split('')
        .reduce((store, charA) => 
            charA === 'a' || charA === 'A' ? 
                store + 1 : store, 0), 0);
}
assert.deepEqual(containsA(), 20);