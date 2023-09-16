function file(Hello) {
    let count = 0;
    for (let i = 0; i < Hello.length; i++) {
        const new_file = Hello.charAt(i);  // charAt bu helloning indexlarini butun songa aylantirib bersin deyopman.
        if (!isNaN(new_file)) {  // isNaN bu oldingi qiymatlarni raqam ga aylantirsin deb buyruq berish.
           count++;
        }
     }
     return count;
 }
 
 const input = "gf3h5nb12";
 const result = file(input);
 console.log(result);