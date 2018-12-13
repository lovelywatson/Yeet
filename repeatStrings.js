function repeatedString(s, n) {

    let arr = [...s];
    const len =(arr.length);
    let inword = 0;
    let result = 0;
    
    //Count how many of that letter are in a word
    for (let i =0;i<len;i++){
        if ('a' == arr[i]){
        inword++;
        }
    }
    print(inword);
    //Check if the word is divided evenly.
    if (n%len==0){
        inword= ((n/len)*inword);
    }else{
        let remain = n%len;
        inword = Math.floor(n/len)*inword;
        print(inword + " "+remain+"");
        for(let i=0; i < remain; i++){
                 if ('a' == arr[i]){
                inword++;
               }
            }
  
    }
    print(inword);
}
    
let s ="gfcaaaecbg";
let n =547602;
repeatedString(s, n);
