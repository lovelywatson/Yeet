
function sockMerchant(n, ar) {
    pairs = 0;
    print (ar);
    ar.sort();
    for (let i=0; i<ar.length; i++){
        if (ar[i]==ar[i+1]){
            pairs++;
            i++;
        }
    }
    print (ar);
    
    return (pairs);
} 

const arr = [2,2,2,3,10,1,2,10];
const n = 7;
print (sockMerchant( n, arr ));
