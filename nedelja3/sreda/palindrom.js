// 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  
{
  let najduziPalindrom = function(s) {
    let trenutnoNajduzi = [0, 1];

    for (let i=1; i< s.length; i++){
        let neparni = expandAroundCenter(s, i-1, i+1);  
        let parni = expandAroundCenter(s, i-1, i);
        let najduzi = neparni[1] - neparni[0] > parni[1] - parni[0] ? neparni : parni; 
        trenutnoNajduzi = trenutnoNajduzi[1] - trenutnoNajduzi[0] > najduzi [1] - najduzi[0] ?  trenutnoNajduzi : najduzi 
    } 
    return s.slice(trenutnoNajduzi[0], trenutnoNajduzi[1]);
};

function expandAroundCenter(s, levi, desni){
    while (levi >= 0 && desni < s.length){
        if(s[levi] !== s[desni]) break;
        levi--;
        desni++;
    }
    return[levi + 1, desni] 
}

console.log(najduziPalindrom('HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE'));
}

//Objasnjenje sam nasla na netu, iskreno, nikad se ovog ne bih sama setila :)