function numberValue(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}


function money(value) {
    return "KSh " + value.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


/* =========================
   MAIZE YIELD CALCULATOR
========================= */

function calculateYield() {

    const kg = numberValue("yieldKg");
    const area = numberValue("yieldArea");
    const output = document.getElementById("yieldResult");

    if (kg <= 0 || area <= 0) {
        output.textContent = "Please enter values greater than zero.";
        return;
    }

    const yieldPerAcre = kg / area;

    output.textContent =
        "Estimated yield: " +
        yieldPerAcre.toLocaleString("en-KE", {
            maximumFractionDigits: 2
        }) +
        " kg per acre.";
}


/* =========================
   FARM COST CALCULATOR
========================= */

function calculateCost() {

    const seed = numberValue("seedCost");
    const fertilizer = numberValue("fertCost");
    const labour = numberValue("labourCost");
    const other = numberValue("otherCost");

    const total = seed + fertilizer + labour + other;

    document.getElementById("costResult").textContent =
        "Estimated total cost: " + money(total);
}


/* =========================
   FARM PROFIT CALCULATOR
========================= */

function calculateProfit() {

    const production = numberValue("profitKg");
    const price = numberValue("profitPrice");
    const costs = numberValue("profitCosts");

    const revenue = production * price;
    const profit = revenue - costs;

    document.getElementById("profitResult").textContent =
        "Estimated revenue: " +
        money(revenue) +
        " | Estimated profit: " +
        money(profit);
}


/* =========================
   COST PER ACRE CALCULATOR
========================= */

function calculateAcreCost() {

    const totalCost = numberValue("acreCost");
    const area = numberValue("acreArea");
    const output = document.getElementById("acreResult");

    if (totalCost <= 0 || area <= 0) {
        output.textContent = "Please enter values greater than zero.";
        return;
    }

    const costPerAcre = totalCost / area;

    output.textContent =
        "Estimated cost per acre: " +
        money(costPerAcre);
}