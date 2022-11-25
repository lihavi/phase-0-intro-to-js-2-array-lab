let  cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    let name_1= ["Milo", "Otis", "Garfield",name];
    return name_1;}
function prependCat(name){
    let name_2=[name,'Milo', 'Otis', 'Garfield'];
    return name_2
}
function removeLastCat(){
    let caats= cats.slice(0,cats.length-1)
    return caats;
}
function removeFirstCat(){
    let catts= cats.slice(1)
    return catts;
}
