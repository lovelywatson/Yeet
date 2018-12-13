function twoStrings(s1, s2) {
    let match = 0;
    let first, second;
    let str1 = Array.from(s1);
    let str2 = Array.from(s2);

    if (str1.length > str2.length) {
        first = str2;
        second = str1;
    } else {
        first = str1;
        second = str2;
    }
    console.log("Str 1 " + s1 + " Str2 " + s2);
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
            if (first[i] == second[j]) {
                match++;
                break;
            }
        }
        if (match > 0) {
            return ("YES");
            i = first.length;
            break;
        } 
        
         
    }
    if (match == 0) {
        return ("NO");
    }
    

}
