// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  console.log(id);
  console.log(prop);
  console.log(value);
  if(""!==value){
    console.log("true");
  }
  var record = collection[id];
  if("artist"===prop){
   if(""!==value){
     record[prop] = value;
   }else{
     delete record[prop];
   }
  }else if("tracks"===prop){
    if(record.hasOwnProperty("tracks")){
      if(""!=value){
      record.tracks.push(value);
      }else{
        delete record.tracks;
      }
    }else{
      if(""!=value){
      record.tracks = [value];
       }else{
         delete record.tracks;
       }
    }
  }else if("album"===prop){
    record[prop] = value;
  }
  
  collection[id] = record; 
  return collection;
}

updateRecords(5439, "artist", "ABBA");
