function truthCheck(collection, pre) {
  let retval = true;
  console.log(collection);
  collection.forEach(p=>console.log(p[pre]));
  console.log(collection.every(p=>
                                p.hasOwnProperty(pre)
                                &&p[pre]!==undefined
                                &&p[pre]!==""
                                &&p[pre]!==0
                                &&p[pre]!==null
                                )
                                ); 
  /*
  return collection.every(p=>
                                p.hasOwnProperty(pre)
                                &&p[pre]!==undefined
                                &&p[pre]!==""
                                &&p[pre]!==0
                                &&p[pre]!==null
                                &&!Object.is(p[pre],NaN)
                            );
 */
  return collection.every(p=>p.hasOwnProperty(pre)
                             &&!!p[pre] /*Truthy*/
                          );

}

const getVal = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");



