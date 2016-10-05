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
  // result object
  var resultObj = {};

  // iterate each object in companySalesData
  for(obj of salesData){
    var curSalesData = 0;
    var curSalesTax = 0;
    var rate = salesTaxRates[obj.province];

    for(sale of obj.sales){
      curSalesData += sale;
    }

    if(!resultObj[obj.name]){
      resultObj[obj.name] = {totalSales:0, totalTaxes:0};
    }

    resultObj[obj.name].totalSales += curSalesData;
    curSalesTax = rate * curSalesData;
    resultObj[obj.name].totalTaxes += curSalesTax;
  }
  return resultObj;
}

function salesTaxReport(sales, taxes){
  var result = calculateSalesTax(sales, taxes);
  console.log(result);
}

var results = salesTaxReport(companySalesData, salesTaxRates);


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
};
*/
