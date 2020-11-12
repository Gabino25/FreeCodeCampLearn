let dataset;
let gdp;
let svg; 
const w = 600;
const h = 600;
const padding = 2;
let minx; 
let maxx;
let miny; 
let maxy;
let mingdp; 
let maxgdp; 
let scalex;
let scaley; 
let axisx; 
let axisy;

  document.addEventListener('DOMContentLoaded', function(){
     const req = new XMLHttpRequest();
    req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
    req.send();
    req.onload = function onloadRequisition(){
  console.log("Entra",req.responseText);
  const json = JSON.parse(req.responseText);
  console.log(json);
    console.log(Object.keys(json));
      dataset = json["data"];
      gdp = json["data"].map(p=>p[1]);
      dataset = dataset.map((p)=>{let retval = [];retval.push(new Date(p[0]));retval.push(p[1]);
                                  return retval;});
      
      
      console.log(dataset.length); 
      console.log(dataset[0]); 
      miny = d3.min(dataset,(p)=>p[1]);
      maxy = d3.max(dataset,(p)=>p[1]);
      minx = d3.min(dataset,(p)=>p[0]);
      maxx = d3.max(dataset,(p)=>p[0]);
      mingdp = d3.min(gdp); 
      maxgdp = d3.min(gdp); 
      console.log(maxx.getMonth());
      console.log("minx->",minx,"maxx->",maxx); 
      console.log("miny->",miny,"maxy->",maxy); 
      
      scalex = d3.scaleTime()
                    .domain([minx,maxx])
                    .range([0,600]);
      
      scaley = d3.scaleLinear()
                    .domain([miny,maxy])
                    .range([598,2]);
      
      var tooltip = d3.select(".visHolder").append("div")
  .attr("id", "tooltip")
  .style("opacity", 0);

var overlay = d3.select('.visHolder').append('div')
  .attr('class', 'overlay')
  .style('opacity', 0);
      
      const svg = d3.select("#container")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       // Add your code below this line
       .data(dataset)
  .enter()
  .append("rect")
       // Add your code above this line
       .attr("x", (d,idx)=>{return scalex(d[0])})
       .attr("y", (d,idx)=>{return scaley(d[1])})
       .attr("width", padding)
       .attr("height", (d,idx)=>{return d[1]})
       .attr("data-date",(d,idx)=>{return json["data"][idx][0]})
       .attr("data-gdp",(d,idx)=>{return json["data"][idx][1]})
       .attr('class', 'bar')
       .on('mouseover', function(d, idx) {
           d3.select("#tooltip")
             .style("display","block")
             .attr("data-date",json["data"][idx][0])
             .html(json["data"][idx][0]+","+json["data"][idx][1]);
         })
        .on('mouseout', function(d, idx) {
            d3.select("#tooltip")
              .style("display","none")
         })
      ;
      
      
      axisx = d3.axisBottom()
    .scale(scalex);
      
       var xAxisGroup = svg.append('g')
    .call(axisx)
    .attr('id', 'x-axis');
      
     axisy = d3.axisLeft(scaley);
    
  var yAxisGroup = svg.append('g')
    .call(axisy)
    .attr('id', 'y-axis')
    .attr('transform', 'translate(40, 0)'); 
      
}
    
  }); 



