// CHALLENGE 
// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English


// SOLUTION
function consonantCount(str) {
    const consonant = 'bcdfghjklmnpqrstvwxzy'
    let count = 0
    str.toLowerCase().split('').forEach((el, i)=> {
      consonant.includes(el) ? count++ : count
    })
    
    return count 
  }
  
  
consonantCount('Bbbbb')