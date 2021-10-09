var vg_1 = "NYC_listings_map.vg.json"; 
var vg_2 = "HOMEWORK10.vg.json"; 

vegaEmbed("#NYC_map", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#NYC_bubble", vg_2).then(function(result) {}).catch(console.error);