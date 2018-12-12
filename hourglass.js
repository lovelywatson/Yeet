// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let a = 0;let b = 1;let c = 2;
    let d = 0;let e = 1;let f = 2;
    let value;
    let high;
    let prev;
    while (a<4) {
        print('A: '+a+' B:'+b+' C: '+c+' D: '+d+' E: '+e+' F: '+f);
        let row1 = (arr[a][d] + arr[a][e] + arr[a][f]);
        let row2 = (arr[b][e]);
        let row3 = (arr[c][d] + arr[c][e] + arr[c][f]);
        value = (row1 + row2 + row3);        
        print('Added Row1 '+row1+' Row2 '+row2+' and Row 3'+row3+' to make ---------------   ' +value);
        
        if (value >= high || high == undefined) {
            high = value;
            print ('I am the high '+ high);
        }
        
        if (d<3) {
            d++;
            e++;
            f++;
        } else {
        print("RESSETTING VALUES");
            d = 0;
            e = 1;
            f = 2;
            a++;
            b++;
            c++;
           print (a,b,c,d,e,f);
        } 
    }
    return high;
}


let arr = [
[-9,-9,-9,1,1,1],
[0,1,0,0,0,0], 
[0,-9,0,4,3,2], 
[-9,-9,-9,1,2,3], 
[0,0,8,6,6,0],
[0,0,0,-2,0,0] 
];

print (hourglassSum(arr));
