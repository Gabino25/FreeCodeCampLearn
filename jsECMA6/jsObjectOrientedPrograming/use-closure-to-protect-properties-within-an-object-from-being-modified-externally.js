function Bird() {
  let weight = 15;
  this.getWeight = function (){
    return weight;
  }
}

let avelardo = new Bird(); 
console.log(avelardo); 
console.log(avelardo.weight);
console.log(avelardo.getWeight());