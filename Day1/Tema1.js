// Day 1 - repetarea conceptelor de ES6 
// 1.1. ES6 - Metode (exemple, explicatii).
// 1.2. Diferenta dintre var, let, const.
// 1.3. Spread operator.
// 1.4. Obiecte. Cum se itereaza un obiect, deep copy.
// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).
// 1.6. Promise. Callback.
// 1.7. Async. Await. 
// 1.8. Closures.

// methods - array.map, arrow functions binding this to obj, array.filter
// binding this to obj
// spread operator = ...

// 1.1. ES6 - Metode (exemple, explicatii).

// metodele sunt functii care se gasesc in interiorul obiectelor 
// functie in afara unui obiect
console.log("METODE\nMetodele sunt functii care se gasesc in interiorul obiectelor");
function doSomething(){
    return "Day 1 of Aquasoft Internship! (from function)";
}
// metoda din interiorul unui obiect
const obj = {
    property1: "something",
    doSomething(){
        // doSomething este metoda obiectului obj
        return "Day 1 of Aquasoft Internship! (from method)";
    }
};
console.log("Functia \'doSomething\' din afara unui obiect: ",doSomething());
console.log("Metoda \'doSomething\' din interiorul unui obiect: ",obj.doSomething());
// in metodele din obiecte putem accesa proprietarile obiectului folosing keyword-ul 'this'
class Car{
    constructor(brand){
        this.brand = brand;
    }
    advertisement(){
        // metoda returneaza brandul corect pentru fiecare obiect
        console.log("Car Brand: ", this.brand);
    }
}
// folosing keyword-ul this metodele returneaza brandul corect pentru fiecare obiect masina
console.log("Folosind keyword-ul \'this\' metodele returneaza brandul corect pentru fiecare obiect masina");
const car1 = new Car("Audi");
const car2 = new Car("Dacia");
car1.advertisement();
car2.advertisement();
// arrow functions nu dau rebind la this
console.log("Arrow functions nu dau rebind la this");
const objArrowMethodExample = {
    name: "Numele Obiectului",
    doSomething(){
        // this returneaza obiectul objArrowMethodExample
        console.log("this in metoda normala in interiorul unui obiect returneaza nume obiect: ", this.name);
    },
    doSomethingCallback(){
        // this returneaza obiectul window pentru web sau global pentru node
        setTimeout(function() {console.log("this in metoda callback in interiorul unui obiect nu returneaza numele deoarece avem rebind la this pentru obiectul global/window: ", this.name);}, 0);
    },
    doSomethingCallbackArrow(){
        setTimeout(() => {console.log("this in metoda callback ARROW in interiorul unui obiect returneaza numele deoarece NU s-a facut rebind pentru this: ", this.name);}, 0);
    }
}

//objArrowMethodExample.doSomething();
//objArrowMethodExample.doSomethingCallback();
//objArrowMethodExample.doSomethingCallbackArrow();

// 1.2. Diferenta dintre var, let, const.

console.log("\n\n// 1.2. Diferenta dintre var, let, const.");

// variabilele create cu var pot fi accesate pe  tot scopul functiei iar cele facute cu let sau const pot fi accesate doar la nivelul blocului
console.log("Variabilele create cu var pot fi accesate pe  tot scopul functiei iar cele facute cu let sau const pot fi accesate doar la nivelul blocului");
function letVarConstExample(){
    let a = 2;
    while(a > 1){
        // acest while se executa doar o singura data pentru exemplu
        a--;
        // variabila var va fi accesibila peste tot
        var varA = 33;
        // variabila let va fi accesibila doar in block-ul while
        let letA = 22;
        console.log("Avem variabila construita cu let in interiorul blocului de cod current - while: ", letA);
        // constanta const va fi accesibila doar in block si nu poate fi modificata
        const constA = 11;
        try {
            constA = 99;
        } catch (error) {
            console.log("constant nu poate fi modificata");
        }
    }
    console.log("var in afara while poate fi accesat: ", varA);
    try{
        console.log("let in afara while NU poate fi accesat", letA);
    }
    catch (err){
        // nu mai afisez eroare deoarece incarca ecranul mult - console.log(err);
        console.log("let in afara while NU poate fi accesat");
    }
    try{
        console.log("const in afara while NU poate fi accesat", constA);
    }
    catch (err){
        // nu mai afisez eroare deoarece incarca ecranul mult - console.log(err);
        console.log("const in afara while NU poate fi accesat");
    }
}
letVarConstExample();

// 1.3. Spread operator.
console.log("\n\n// 1.3. Spread operator.");
// operatorul spread este folosint pentru concatenarea/expandarea a obiecte, arrays , strings
// spread nu afecteaza obiectele sursa
console.log("Operatorul spread este folosint pentru concatenarea/expandarea a obiecte, arrays , strings \nSpread nu afecteaza obiectele sursa");
const arr1 = [11, 22];
const arr2 = [33, 44];
let result = [...arr1, ...arr2];
console.log("spread folosit pe arr1:", arr1, "arr2:", arr2, "rezulta:", result);
const obj1 = {first: "FIRST"};
const obj2 = {second: "SECOND"};
let resultObj = {...obj1, ...obj2};
console.log("spread folosit pe obj1:", obj1, "obj2:", obj2, "rezulta:", resultObj);

// 1.4. Obiecte. Cum se itereaza un obiect, deep copy.
console.log("\n\n// 1.4. Obiecte. Cum se itereaza un obiect, deep copy.");
// putem itera peste un obiect folosind for si accesand fiecare element in ordine dupa key
console.log("Putem itera peste un obiect folosind for si accesand fiecare element in ordine dupa key");
let dayOneAquasoft = {
    task: "NodeJs Basics",
    durationHours: 32,
    success: true
}
for(let key in dayOneAquasoft){
    console.log("object key-value pair: ", key, ":", dayOneAquasoft[key]);
}
// putem accesa doar keys sau doar values
console.log("Putem accesa doar keys sau doar values: ", Object.keys(dayOneAquasoft), Object.values(dayOneAquasoft));
// shallow copy este un pointer catre adresa din memorie a celuilat obiect iar orice modificare pe copie afecteaza si originalul
console.log("Shallow copy este un pointer catre adresa din memorie a celuilat obiect iar orice modificare pe copie afecteaza si originalul");
let copyDayOne = dayOneAquasoft;
copyDayOne.task = "NEW TASK";
console.log("Dupa schimbarea valorii key task din copie, s-a schimbat si vloarea din original: ",Object.keys(copyDayOne)[0],":", copyDayOne.task,Object.keys(dayOneAquasoft)[0],":", dayOneAquasoft.task);
// putem rezolva problema folosind spread operator atat timp cat nu avem nested objects
// json stringify si parse pierd tipul initial al variabilelor deci este un  partial deep copy
// putem folosi libraria lodash pentru a crea un deep copy
console.log("putem rezolva problema folosind spread operator atat timp cat nu avem nested objects \njson stringify si parse pierd tipul initial al variabilelor deci este un  partial deep copy \nputem folosi libraria lodash pentru a crea un deep copy");
console.log("sau putem crea o solutie recursiva locala pentru a copia");
const ld = require('lodash');
copyDayOne = ld.cloneDeep(dayOneAquasoft);
copyDayOne.task = "ANOTHER TASK";
console.log("Dupa schimbarea valorii key task din copie, NU s-a schimbat si vloarea din original: ",Object.keys(copyDayOne)[0],":", copyDayOne.task,Object.keys(dayOneAquasoft)[0],":", dayOneAquasoft.task);

// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).
console.log("\n\n// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).");
