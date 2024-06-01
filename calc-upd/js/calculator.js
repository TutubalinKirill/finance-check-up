document.addEventListener("DOMContentLoaded", function () {
  var calculateButton = document.getElementById("calculateButton");
  var returnButton = document.getElementById("returnButton");
  var inputWrapper = document.querySelector(".input-wrapper");
  var tablesWrapper = document.querySelector(".tables-wrapper");

  calculateButton.addEventListener("click", function () {
    var mySalary = parseFloat(document.getElementById("mySalary").value) || 0;
    var familySalary =
      parseFloat(document.getElementById("familySalary").value) || 0;
    var capitalIncome =
      parseFloat(document.getElementById("capitalIncome").value) || 0;
    var bonuses = parseFloat(document.getElementById("bonuses").value) || 0;
    var otherIncomeMonth =
      parseFloat(document.getElementById("otherIncomeMonth").value) || 0;
    var otherIncomeYear =
      parseFloat(document.getElementById("otherIncomeYear").value) || 0;

    var regularExpenses =
      parseFloat(document.getElementById("regularExpenses").value) || 0;
    var creditPayments =
      parseFloat(document.getElementById("creditPayments").value) || 0;
    var otherExpenses =
      parseFloat(document.getElementById("otherExpenses").value) || 0;
    var otherAnnualExpenses =
      parseFloat(document.getElementById("otherAnnualExpenses").value) || 0;

    var propertyValue =
      parseFloat(document.getElementById("propertyValue").value) || 0;
    var costOfTheVehicle =
      parseFloat(document.getElementById("costOfTheVehicle").value) || 0;
    var costOfLuxuryGoods =
      parseFloat(document.getElementById("costOfLuxuryGoods").value) || 0;
    var otherNonIncomeAssets =
      parseFloat(document.getElementById("otherNonIncomeAssets").value) || 0;

    var bankDeposit =
      parseFloat(document.getElementById("bankDeposit").value) || 0;
    var business = parseFloat(document.getElementById("business").value) || 0;
    var investmentPortfolio =
      parseFloat(document.getElementById("investmentPortfolio").value) || 0;
    var otherIncomeGeneratingAssets =
      parseFloat(
        document.getElementById("otherIncomeGeneratingAssets").value
      ) || 0;

    var mortgageDebt =
      parseFloat(document.getElementById("mortgageDebt").value) || 0;
    var autoLoanDebt =
      parseFloat(document.getElementById("autoLoanDebt").value) || 0;
    var consumerLoanDebt =
      parseFloat(document.getElementById("consumerLoanDebt").value) || 0;
    var otherDebts =
      parseFloat(document.getElementById("otherDebts").value) || 0;

    // Формулы для вычисления
    var monthlyIncome =
      mySalary +
      familySalary +
      capitalIncome +
      otherIncomeMonth +
      (bonuses + otherIncomeYear) / 12;

    var annualIncome =
      (mySalary + familySalary + capitalIncome + otherIncomeMonth) * 12 +
      (bonuses + otherIncomeYear);

    var monthlyExpenses =
      regularExpenses +
      creditPayments +
      (otherExpenses + otherAnnualExpenses) / 12;

    var annualExpenses =
      regularExpenses * 12 +
      creditPayments * 12 +
      otherExpenses +
      otherAnnualExpenses;

    var annualProfit = annualIncome - annualExpenses;

    var nonIncomeAssets =
      propertyValue +
      costOfTheVehicle +
      costOfLuxuryGoods +
      otherNonIncomeAssets;
    var incomeAssets =
      bankDeposit +
      business +
      investmentPortfolio +
      otherIncomeGeneratingAssets;

    var assets = nonIncomeAssets + incomeAssets;
    var liabilities =
      mortgageDebt + autoLoanDebt + consumerLoanDebt + otherDebts;

    // Вывод результатов
    document.getElementById("monthlyIncome").innerText =
      monthlyIncome.toFixed(2);
    document.getElementById("annualIncome").innerText = annualIncome.toFixed(2);
    document.getElementById("monthlyExpenses").innerText =
      monthlyExpenses.toFixed(2);
    document.getElementById("annualExpenses").innerText =
      annualExpenses.toFixed(2);
    document.getElementById("annualProfit").innerText = annualProfit.toFixed(2);
    document.getElementById("assets").innerText = assets.toFixed(2);
    document.getElementById("liabilities").innerText = liabilities.toFixed(2);
    var profitability = ((annualProfit / annualIncome) * 100).toFixed(2);
    var debtBurden = ((creditPayments / monthlyIncome) * 100).toFixed(2);
    var wealthDistribution = (assets - liabilities).toFixed(2);
    var independenceCoefficient = (
      (capitalIncome / monthlyExpenses) *
      100
    ).toFixed(2);

    document.getElementById("profitability").innerText = profitability;
    document.getElementById("debt_burden").innerText = debtBurden;
    document.getElementById("wealthDistribution").innerText =
      wealthDistribution;
    document.getElementById("independent-coef").innerText =
      independenceCoefficient;

    inputWrapper.style.display = "none";
    tablesWrapper.style.display = "flex";
    calculateButton.style.display = "none";
    returnButton.style.display = "inline-block";
  });

  returnButton.addEventListener("click", function () {
    inputWrapper.style.display = "flex";
    tablesWrapper.style.display = "none";
    calculateButton.style.display = "inline-block";
    returnButton.style.display = "none";
  });
});

function generatePDF() {
  if (typeof html2pdf !== "undefined") {
    var element = document.getElementById("results-table");

    var opt = {
      margin: 0.5,
      filename: "financial_report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    };

    html2pdf().from(element).set(opt).save();
  } else {
    alert("Библиотека html2pdf не доступна. Проверьте подключение.");
  }
}

var exportPDFButton = document.getElementById("exportPDFButton");
exportPDFButton.addEventListener("click", function () {
  generatePDF();
});
