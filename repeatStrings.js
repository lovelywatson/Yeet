function repeatedString(s, n) {

    let arr = [...s];
    const len =(arr.length);
    let inword = 0;
    let result = 0;
    
    //Count how many of that letter are in a word
    for (let i =0;i<len;i++){
        if (arr[0] == arr[i]){
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
        for(let i=remain; i < n; i++){
                 if (arr[0] == arr[i]){
                inword++;
               }
            }
  
    }
    print(inword);
}
    
let s ="aba";
let n =10;
repeatedString(s, n);
