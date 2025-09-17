const zahlInput = document.getElementById("zahlInput");
const berechnenBtn = document.getElementById("berechnenBtn");
const ergebnisse = document.getElementById("ergebnisse");

berechnenBtn.addEventListener("click", () => {
    const zahl = parseInt(zahlInput.value);
    if (isNaN(zahl)) {
        ergebnisse.innerHTML = "<p>Bitte gib eine gültige Zahl ein!</p>";
        return;
    }

    const fakten = [];

    // 1. Hälfte
    fakten.push(`Hälfte: ${zahl / 2}`);

    // 2. Doppelte
    fakten.push(`Doppelte: ${zahl * 2}`);

    // 3. Quersumme
    const quersumme = zahl.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
    fakten.push(`Quersumme: ${quersumme}`);

    // 4. Primzahl
    fakten.push(`Primzahl: ${isPrim(zahl) ? "Ja" : "Nein"}`);

    // 5. Gerade/Ungerade
    fakten.push(`Gerade/Ungerade: ${zahl % 2 === 0 ? "Gerade" : "Ungerade"}`);

    // 6. Quadrat
    fakten.push(`Quadrat: ${zahl ** 2}`);

    // 7. Kubik
    fakten.push(`Kubik: ${zahl ** 3}`);

    // 8. Wurzel
    fakten.push(`Wurzel: ${Math.sqrt(zahl)}`);

    // 9. Binär
    fakten.push(`Binär: ${zahl.toString(2)}`);

    // 10. Hexadezimal
    fakten.push(`Hexadezimal: ${zahl.toString(16).toUpperCase()}`);

    // 11. Teilbarkeit 2-9
    const teilbar = [];
    for (let i = 2; i <= 9; i++) {
        if (zahl % i === 0) teilbar.push(i);
    }
    fakten.push(`Teilbar durch: ${teilbar.length > 0 ? teilbar.join(", ") : "Keine"}`);

    // 12. Summe der geraden Ziffern
    const geradeZiffernSum = zahl.toString().split('').filter(d => parseInt(d) % 2 === 0).reduce((a,b) => a + parseInt(b), 0);
    fakten.push(`Summe der geraden Ziffern: ${geradeZiffernSum}`);

    // 13. Summe der ungeraden Ziffern
    const ungeradeZiffernSum = zahl.toString().split('').filter(d => parseInt(d) % 2 !== 0).reduce((a,b) => a + parseInt(b), 0);
    fakten.push(`Summe der ungeraden Ziffern: ${ungeradeZiffernSum}`);

    // 14. Zahl rückwärts
    fakten.push(`Zahl rückwärts: ${zahl.toString().split('').reverse().join('')}`);

    // 15. Anzahl der Ziffern
    fakten.push(`Anzahl der Ziffern: ${zahl.toString().length}`);

    // 16. Größte und kleinste Ziffer
    const ziffern = zahl.toString().split('').map(d => parseInt(d));
    fakten.push(`Größte Ziffer: ${Math.max(...ziffern)}, Kleinste Ziffer: ${Math.min(...ziffern)}`);

    // 17. Palindrom?
    fakten.push(`Palindrom: ${zahl.toString() === zahl.toString().split('').reverse().join('') ? "Ja" : "Nein"}`);

    // 18. Fibonacci?
    fakten.push(`Fibonacci-Zahl: ${isFibonacci(zahl) ? "Ja" : "Nein"}`);

    // 19. Primfaktorzerlegung
    fakten.push(`Primfaktorzerlegung: ${primfaktor(zahl).join(" × ")}`);

    // 20. Römische Zahl
    fakten.push(`Römische Zahl: ${toRömisch(zahl)}`);

    ergebnisse.innerHTML = fakten.map(f => `<p>${f}</p>`).join('');
});

// Hilfsfunktionen
function isPrim(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isFibonacci(n) {
    function isPerfectSquare(x) {
        return Math.sqrt(x) % 1 === 0;
    }
    return isPerfectSquare(5*n*n + 4) || isPerfectSquare(5*n*n - 4);
}

function primfaktor(n) {
    const faktoren = [];
    let zahl = n;
    for (let i = 2; i <= zahl; i++) {
        while (zahl % i === 0) {
            faktoren.push(i);
            zahl /= i;
        }
    }
    return faktoren;
}

function toRömisch(num) {
    if (num <= 0) return "N/A";
    const römisch = [
        ["M",1000],["CM",900],["D",500],["CD",400],
        ["C",100],["XC",90],["L",50],["XL",40],
        ["X",10],["IX",9],["V",5],["IV",4],["I",1]
    ];
    let res = "";
    for (const [buchstabe, wert] of römisch) {
        while (num >= wert) {
            res += buchstabe;
            num -= wert;
        }
    }
    return res;
}
