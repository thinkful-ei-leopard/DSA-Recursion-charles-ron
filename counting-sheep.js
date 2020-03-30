// example 1
// INPUT: 3
// OUTPUT:
// 3: Another sheep jumped over the fence
// 2: anotehr sheep jumped over the fence
// 1: another sheep jumped over the fence
// All the sheep jumped over the fence
function countingSheep(sheep) {
  // base case
  if (sheep <= 0) {
    return console.log('All the sheep jumped over the fence');
  }

  // general case
  console.log(`${sheep}: Another sheep jumped over the fence`);
  countingSheep(sheep - 1);
}

countingSheep(5);