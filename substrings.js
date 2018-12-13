// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let match = 0;
    let alpha = ('abcdefghijklmnopqrstuvwxyz');
    let str1 = s1.split('');
    let str2 = s2.split('');
    let alphabet = alpha.split('');

    for (const letter in alphabet) {
        if (str1.includes(alphabet[letter]) && str2.includes(alphabet[letter])) {
            return ("YES");
        }
    }
    return ("NO");
}
