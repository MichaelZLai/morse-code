var alphabet = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
}
module.exports =  {
  encode: function(answer){
    //splits the answer string and makes everything lowercase
    let characters = answer.toLowerCase().split("")
    //iterated through the array with map and replaces with the alphabet equivalent
    let morse = characters.map( letter => {
      //ternary operator that returns either the alphabet or space
        //--same as--
        //   if (alphabet[letter]){
        //     return alphabet[letter]
        //   }else{
        //     return " "
        //   }
      return alphabet[letter] ? alphabet[letter] : " "
    })
    //joining with a space between the array
    let morseString = morse.join(" ")

    return morseString


      }
    }

    //////////// FUNCTIONAL WAY OF SOLVING
    //////////// function(str){
    ////////////   return str.toLowerCase()
    ////////////             .split("")
    ////////////             .map(letter => {
    ////////////               return alphabet[letter] || " "
    ////////////             })
    ////////////             .join(" ")
    //////////// }
