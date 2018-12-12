function countingValleys(n, s) {
    let directions = [...s];
    let prev = 0;
    let level = 0;
    let stepup = 0;
    let stepdown = 0;
    
    for (let i=0; i < n; i++){
        
        if (directions[i] == 'D'){
        level--;
                if (level == -1 && prev==0){
                stepdown++;
                }
        } else if (directions[i] == 'U'){
        level++;
                if (level == 0 && prev==-1 ){
                    stepup++;
                }
        }
        prev = level;
        print(level);
        
    }
    
    print("Stepup: " +stepup+ " Stepdown: " +stepdown)
    if ( stepdown==stepup || stepup > stepdown){
            return stepdown;
        } else {
            return stepup;
        }

} 

const s = 'UDDDUDUU';
const n = 8;
print (countingValleys( n, s ));
