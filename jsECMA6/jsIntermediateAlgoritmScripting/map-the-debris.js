

function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let const1 = 2*Math.PI;
  
  const getOrbPer=  function(obj){
    let orbPeriod = Math.round(
                      const1*Math.sqrt(Math.pow(earthRadius+obj.avgAlt,3)/GM)
                      );
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
  }
  arr.forEach(p=>getOrbPer(p));
  return arr;
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
