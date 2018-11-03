var pets = ['cat', 'dog', 'rat'];
/*pets.length === 3,
i, which represents the array key starts at 0 and goes to 2
thus we will cycle through the array
*/
for (i = 0; i < pets.length; i++){
  pets[i] = pets[i] + 's';
}

console.log(pets);
