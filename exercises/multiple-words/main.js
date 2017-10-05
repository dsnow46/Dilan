var ourString = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever drinking the right vinegar fanny pack pull minim right chicharrones migas.";
 

function duplicates(str) {
    const arr = str.split(" ");
    const dupes = arr.filter((word, i, array) => array.indexOf(word) !== array.lastIndexOf(word)).filter(())
}

console.log(duplicates(ourString));