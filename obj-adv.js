var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var companyObject = {};

  for (var info in salesData) {
    var companyName = salesData[info].name;
    var companyProvince = salesData[info].province;
    var companySales = 0;
    for (i = 0; i < salesData[info].sales.length; i++){
      companySales += salesData[info].sales[i];
    }
    var companyTax = 0;
    for (var provTax in taxRates) {
      if (provTax === companyProvince) {
        companyTax = taxRates[provTax];
      }
    }

    if (!companyObject[companyName]){
      companyObject[companyName] = {
        totalSales: 0,
        totalTaxes: 0
      }
    }

    companyObject[companyName].totalSales += companySales;
    companyObject[companyName].totalTaxes += companySales * companyTax;

  }
  return JSON.stringify(companyObject, null, ' ')
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results)


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/




















// ------------------------------ ORIGINAL SOLUTION

// var salesTaxRates = {
//  AB: 0.05,
//  BC: 0.12,
//  SK: 0.10
// };

// var companySalesData = [
//  {
//    name: "Telus",
//    province: "BC",
//    sales: [ 100, 200, 400 ]
//  },
//  {
//    name: "Bombardier",
//    province: "AB",
//    sales: [ 80, 20, 10, 100, 90, 500 ]
//  },
//  {
//    name: "Telus",
//    province: "SK",
//    sales: [ 500, 100 ]
//  }
// ];

// function calculateSalesTax(salesData, taxRates) {
// var output = {};

// // how you want output to look like
// /*
// output :
// {
//    key1 : value1
//    key2: value2
// }
// key1 & key 2 = company names
// value1 & value2 = {totalSales: total, totalTax: tax}

// // check if key 1 alreaady exists
// if it does -> add the new information to it (characterPositions)
// if does not exist -> create it
// */
//    var companyObject = {};
//    for (var el in salesData){
//       // console.log(el);

//       var totalSales = 0;
//       var companyName = salesData[el].name;
//       var provinceName = salesData[el].province;
//       for (i = 0; i < salesData[el].sales.length; i++){
//          totalSales = totalSales + salesData[el].sales[i];
//       }
//       var totalSalesWithTaxes = 0
//       for (var et in taxRates){
//          // console.log(et);
//          if (et === provinceName){
//             totalSalesWithTaxes = taxRates[et];
//          } else {
//             continue;
//          }
//       }
//       // console.log(totalSalesWithTaxes);
//       // console.log(totalSales);
//       // console.log(companyObject[companyName])
//       if (!companyObject[companyName]){
//          companyObject[companyName] = {
//             totalSales: 0,
//             totalTaxes: 0
//          }
//       }

//       companyObject[companyName]["totalSales"] += totalSales;
//       companyObject[companyName]["totalTaxes"] += totalSalesWithTaxes * totalSales;


//    // console.log(companyName+" in "+provinceName+": "+totalSales);



//    // console.log(totalSalesWithTaxes);
//  }
//    var prettyText = JSON.stringify(companyObject, null, 2);

//    console.log(prettyText);
// }

// calculateSalesTax(companySalesData, salesTaxRates);

// // var results = calculateSalesTax(companySalesData, salesTaxRates);

// // Expected Results:
// // {
// //   Telus: {
// //     totalSales: 1300
// //     totalTaxes: 144
// //   },
// //   Bombardier: {
// //     totalSales: 800,
// //     totalTaxes: 40
// //   }