
function jumpingOnClouds(c) {
let jump=0;
let i=0;
    
    while(i<c.length-1){
        print("Round "+i+ " I've done "+jump+" Jumps");
        if (c[(i+2)]==0){
            i++;
        }
        jump++;
        i++;
        print("Round "+i+ " I've done "+jump+" Jumps");
    }
    return jump;
} 

const c = [0,1,0,0,1,0,0,0];
print (jumpingOnClouds(c));
