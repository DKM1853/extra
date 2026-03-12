global.window={};
const data=require('./js/products-data.js');

function parsePriceEntries(priceObj, category) {
  var unitMap = {
    per_sqft: category === 'granite' || category === 'cobblestones' ? "₹/sqft" : "Per Sq.Ft",
    piece: "Per Piece",
    "1kg": "Per 1 Kg",
    "500g": "Per 500g",
    per_ton: "Per Ton",
  };
  var result = [];
  Object.entries(priceObj||{}).forEach(function(entry){
    var key = entry[0], val = entry[1];
    if(val===null||val===undefined||val===""||val===0) return;
    var label = unitMap[key]||key;
    if(/^[0-9]+-[0-9]+$/.test(key)) label = key + " kg";
    result.push({label:label, value: val});
  });
  return result;
}

console.log('Pebble prices:');
data.PRODUCTS.products.filter(p=>p.category==='pebbles').forEach(p=>{
  console.log(p.id, parsePriceEntries(p.price,p.category));
});
