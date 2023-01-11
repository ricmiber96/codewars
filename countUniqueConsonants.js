function countConsonants(str) {
    const CONSONANT_STRING = 'bcdfghjklmnpqrstvwxzy'
    let stringNormalized = str.replace(/ /g,'').toLowerCase()
    const arrayConsonants = []
    stringNormalized.split("").forEach((element,i) =>{  
        if (CONSONANT_STRING.includes(element) &&  !arrayConsonants.includes(element)) arrayConsonants.push(element)
    })
    console.log(arrayConsonants.length);
    return arrayConsonants.length
}

countConsonants("sillystring")