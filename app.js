const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// Break on attribute modification
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '+poop');

// Styled
//console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('OH NOO');

// Error :|
console.error('ERROR');

// Info
console.info('asdf Crocodiles eat 3-4 people a year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); // gives you a dropdown of all elem props

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  // console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Ray');
console.count('Ray');
console.count('Ray');
console.count('Ray');
console.count('Ray');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// table (prints array of objects w/ same props as table)
console.table(dogs);
