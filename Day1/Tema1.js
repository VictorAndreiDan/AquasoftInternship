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
console.log("Rezolvare Day1 - Dan Victor\n\n");
console.log("// 1.1. ES6 - Metode (exemple, explicatii).");
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
const { reject } = require('lodash');
const ld = require('lodash');
copyDayOne = ld.cloneDeep(dayOneAquasoft);
copyDayOne.task = "ANOTHER TASK";
console.log("Dupa schimbarea valorii key task din copie, NU s-a schimbat si vloarea din original: ",Object.keys(copyDayOne)[0],":", copyDayOne.task,Object.keys(dayOneAquasoft)[0],":", dayOneAquasoft.task);

// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).
console.log("\n\n// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).");
// accessor methods nu modifica array pe care este folosit, returneaza un rezultat
let arrExample = [5, 10, 15, 20, 25];
const arrExample2 = [1, 2 ,3];
let resArray = arrExample.concat(arrExample2);
console.log("Concat pentru array", arrExample,"si", arrExample2, "rezulta:", resArray);
// join returneaza un string format din elementele din array separate de valoarea introdusa
console.log("Join cu elementul < pentru arr:", arrExample, "", arrExample.join("<"));
// filter returneaza toate elementele ce corespund functiei introduse
console.log("Folosim filter pentru a returna toate elementele pare din arr:", arrExample, "=>", arrExample.filter(result => {return result%2==0;}));
// slice care poate imparti un array
console.log("Impartim arr:", arrExample, "si returnez doar ultimele 2 elemente: ", arrExample.slice(-2));
// index of returneaza primul index la care se afla valoarea(-1 daca nu exista) si includes returneaza true sau false daca valoarea exista in array
console.log("Indexul lui 15", arrExample.indexOf(15), "si daca arr contine 35", arrExample.includes(35));
// Array iteration foreach, map
console.log("Array iteration cu foreach - pentru fiecare element din arr afisez true sau false daca este par: ");
arrExample.forEach((item) => {console.log(item%2==0);});
// Map returneaza un array rezultat din efectuarea unei functii asupra fiecarui element din array
resArray = arrExample.map((item) => {return item*2;});
console.log("Map pentru a crea un alt array care contine valori duble fata de arr", resArray);
// Reduce merge in mod recursiv prin array si efectueaza functia pentru a ajungle la un singur rezultat
console.log("Reduce pentru a adauga fiecare element din arr", arrExample, "=>", arrExample.reduce((res, item) =>{return res+item;}, 0));
// Some - daca macar un element indeplineste conditia atunci returneaza true, altfel false
console.log("Some pentru a vedea daca exista vreaun element in arr care se divide cu 4", arrExample.some((item) => {return item%4==0;}));
// Every - true daca toate elementele indeplinesc conditia, false altfel
console.log("Every pentru a vedea daca toate elementele din arr se divid cu 5", arrExample.every((item) => {return item%5==0;}));
// Find - returneaza un item daca indeplineste conditia
const arrObjects = [{key: 1},{key: 2},{key: 3}];
console.log("Find pentru a gasi elementul cu key 2 din arrObjects", arrObjects, "=>", arrObjects.find((item)=>{return item.key == 2;}));
// Find index returneaza indexul unui element care indeplineste conditia
console.log("Find pentru a gasi indexul elementului cu key 2 din arrObjects", arrObjects, "=>", arrObjects.findIndex((item)=>{return item.key == 2;}));
// Mutator Methods
console.log("Pop returneaza ultimul element din arr", arrExample, arrExample.pop());
arrExample[4] = 25;
console.log("Shift returneaza primul element din arr", arrExample, arrExample.shift());
arrExample[4] = 5;
console.log("Sort pentru a sorta arr", arrExample);
arrExample.sort((item1, item2)=>{
    if(item1<item2) return -1;
    if(item2<item1) return 1;
    return 0;
});
console.log(arrExample);
// splice sterge elemente si inlocuieste
arrExample.splice(-2, 2, 33, 44);
console.log("Splice pentru a sterge ultimele 2 elemente si a le inlocuii cu 33 si 44", arrExample);

// 1.6. Promise. Callback.
console.log("\n\n// 1.6. Promise. Callback.");
// promise si callback sunt elemente de asynchronous programming, ele pot fi folosite pentru a nu bloca programul cu linii de cod care dureaza mai mult decat restul liniilor
// totul este pus pe alt thread si cand este terminat se intoarce in main thread si se rezolva
// Callback functions sunt chemate in momentul in care un task a fost completat
// Putem folosi callback functions pentru setTiomeout iar dupa ce durata de dimp a trecut va fi chemata functia callback
setTimeout(()=>{console.log("Dupa 1 secunda afisam pe ecran!");}, 1000);
// Promise returnneaza o indicatie ca functia a fost rezolvata cu succes sau nu si cand aceasta indicatie este data putem rula functia in continuare
var val = 0;
console.log("Am creat o variabila val:", val);
function changeVal(newVal){
    // functia returneaza un promise care asteapta sa se termine functia async setTimeout si in functie de rezultat returneaza resolve sau reject in caz de eroare
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            val = newVal;
            if(val == newVal){
                resolve();
            }
            else{
                reject();
            }
        },2000);
    });
}
// dupa ce resolve a fost chemat de promise din functia changeVal afisam pe ecran
changeVal(99).then(()=>{console.log("Dupa ce promise a fost rezolvat afisam valoarea variabilei:",val)});

// 1.7. Async. Await. 
// in asynchronous programming functiile async sunt rezolvate la timpul lor pe un thread diferit pentru  a nu incetinii threadul principal iar dupa executarea functie se intoarce 
// la threadul curent
// Await este un keyword folosit pentru atunci cand vrem sa asteptam rezolvarea unei functii async inainte sa trecem mai departe (de exemplu citirea dintr-un database care returneaza un promise)
// putem astepta pentru ca acea citire din database sa se termine si dupa rulam codul in continuare

async function doSomethingAsync(){
    // await asteapta pentru primise sa fie rezolvat si dupa se trece la urmatoarele linii de cod din aceasta functie
    await changeVal(53);
    const commentary = "\n\n// 1.7. Async. Await. \n// in asynchronous programming functiile async sunt rezolvate la timpul lor pe un thread diferit pentru  a nu incetinii threadul principal iar dupa executarea functie se intoarce \n// la threadul curent\n// Await este un keyword folosit pentru atunci cand vrem sa asteptam rezolvarea unei functii async inainte sa trecem mai departe (de exemplu citirea dintr-un database care returneaza un promise)\n// putem astepta pentru ca acea citire din database sa se termine si dupa rulam codul in continuare";
    console.log(commentary);
    console.log("Dupa ce await a fost rezolvat afisam valoarea variabilei:",val);
}
doSomethingAsync();


// 1.8. Closures.
// Closures se refera la momentul in care o functie are acces la variabile din afara scopului lor
// un exemplu de closure este atunci cand am schimbat valoarea variabilei val care a fost creata in afara functiilor 
// dar schimbarea valorii a fost facut in interiorul functiilor

async function closuresDemo(){
    // astept pentru o afisare mai curata a datelor
    await changeVal(567);
    let outsideVariable = "Variabila din afara functie";
    function doSomething(){
        console.log("Logging a variable from outside the scope of this function:   ", outsideVariable);
    }
    console.log("\n\n// 1.8. Closures.");
    console.log("// Closures se refera la momentul in care o functie are acces la variabile din afara scopului lor");
    console.log("// un exemplu de closure este atunci cand am schimbat valoarea variabilei val care a fost creata in afara functiilor ");
    console.log("// dar schimbarea valorii a fost facut in interiorul functiilor");
    doSomething();
    // functia are acces la variabila in timp real ci nu doar la valoarea care a avut-o variabila in momentul crearii functiei
    outsideVariable = "Variabila din afara functiei schimbata";
    doSomething();
}
closuresDemo();