/**
 *  The family spending system:
 *  Create an object who will have 2 props, both must be an array:
 *  --> Revenues: []
 *  --> Outgoings: []
 *  Now, create a function who'll calculate the total of revenues and
 *  outgoings, showing for the family if the balance are positive or negative.
 *  After this function must return the final balance.
 */

const FAMILY_FINANCIAL_OBJECT = {
  revenues: [5000, 2312.32, 4000.11, 1000, 10000, 2345, 1000.32],
  outgoings: [15000, 1000, 5000, 4444.44, 5000],
};

function getFinancialFamilyData(familyFinancialDataObject) {
  let totalOfRevenues = 0,
    totalOfOutgoings = 0,
    finalBalanced = 0;

  for (let familyItems in familyFinancialDataObject) {
    if (familyItems === "revenues") {
      for (let familyRevenuesItem of familyFinancialDataObject[familyItems])
        totalOfRevenues += familyRevenuesItem;
    } else {
      for (let familyOutgoingsItem of familyFinancialDataObject[familyItems])
        totalOfOutgoings += familyOutgoingsItem;
    }
  }

  finalBalanced = totalOfRevenues - totalOfOutgoings

  return (`
    ====================== \n
    The family has: \n
    Total of revenues: R$ ${totalOfRevenues} \n
    Total of outgoings: R$ ${totalOfOutgoings} \n
    The final balance is: R$ ${finalBalanced.toFixed(2)} \n
    ======================
  `)
}

console.log(getFinancialFamilyData(FAMILY_FINANCIAL_OBJECT));
