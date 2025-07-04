function checkIfDivides(str: string, divStr: string) {
    console.log("divStr: " + divStr);
    if (str.length % divStr.length === 0) {
        const mult = str.length / divStr.length;

        let concatedStr = "";
        for (let i = 0; i < mult; i++) {
            concatedStr += divStr;
        }
        console.log("concatedStr: " + concatedStr);
        return str == concatedStr;
    }
    return false;
}

function gcdOfStrings(str1: string, str2: string): string {
    let div = "";
    let actualDiv = "";
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1[i] === str2[i]) {
            const checkResultForStr1 =  checkIfDivides(str1, div + str1[i]);
            const checkResultForStr2 =  checkIfDivides(str2, div + str1[i]);
            div += str1[i];
            if (checkResultForStr1 && checkResultForStr2) {
                actualDiv = div;
            }
        }
    }
    return actualDiv;
}
