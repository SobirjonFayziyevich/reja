function fruit (str1, str2) {
  // ikkila qatorni harf qatoriga ayirib aifbbo tartibida saqlaymiz.


  const new_fruit1 = str1.split('').sort().join('');
  const new_fruit2 = str2.split('').sort().join('');

  //harflar qatorini solishtiramiz.
  return new_fruit1 === new_fruit2; 
}
const string1 = "hayr";
const string2 = "ryah";
const result = fruit(string1, string2);
console.log(result);



