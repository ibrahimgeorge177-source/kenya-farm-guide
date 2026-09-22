// =========================================
// KENYA FARM GUIDE
// FARM CALCULATORS
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Kenya Farm Guide calculators loaded successfully.");


    // =========================================
    // HELPER FUNCTIONS
    // =========================================

    function getValue(id) {
        const element = document.getElementById(id);

        if (!element) {
            console.error("Element not found:", id);
            return NaN;
        }

        return parseFloat(element.value);
    }


    function formatNumber(value) {
        return value.toLocaleString("en-KE", {
            maximumFractionDigits: 2
        });
    }


    function formatCurrency(value) {
        return "KES " + value.toLocaleString("en-KE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }


    // =========================================
    // 1. YIELD CALCULATOR
    // =========================================

    const yieldForm = document.getElementById("yieldForm");

    if (yieldForm) {

        yieldForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const grain = getValue("grain");
            const area = getValue("area");
            const result = document.getElementById("yieldResult");

            if (!Number.isFinite(grain) || grain <= 0) {

                result.innerHTML =
                    "Please enter a harvested grain amount greater than 0 kg.";

                return;
            }

            if (!Number.isFinite(area) || area <= 0) {

                result.innerHTML =
                    "Please enter a cultivated area greater than 0 acres.";

                return;
            }

            const yieldPerAcre = grain / area;

            result.innerHTML =
                "<strong>Estimated yield:</strong> " +
                formatNumber(yieldPerAcre) +
                " kg per acre";
        });
    }


    // =========================================
    // 2. FARM COST CALCULATOR
    // =========================================

    const costForm = document.getElementById("costForm");

    if (costForm) {

        costForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const seedCost = getValue("seedCost") || 0;
            const fertilizerCost = getValue("fertilizerCost") || 0;
            const labourCost = getValue("labourCost") || 0;
            const otherCost = getValue("otherCost") || 0;

            const totalCost =
                seedCost +
                fertilizerCost +
                labourCost +
                otherCost;

            document.getElementById("costResult").innerHTML =
                "<strong>Total production cost:</strong> " +
                formatCurrency(totalCost);
        });
    }


    // =========================================
    // 3. REVENUE & PROFIT CALCULATOR
    // =========================================

    const profitForm = document.getElementById("profitForm");

    if (profitForm) {

        profitForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const quantity = getValue("quantity");
            const price = getValue("price");
            const totalCost = getValue("totalCost");

            const result =
                document.getElementById("profitResult");

            if (!Number.isFinite(quantity) || quantity <= 0) {

                result.innerHTML =
                    "Please enter an expected production amount greater than 0 kg.";

                return;
            }

            if (!Number.isFinite(price) || price < 0) {

                result.innerHTML =
                    "Please enter a valid selling price.";

                return;
            }

            if (!Number.isFinite(totalCost) || totalCost < 0) {

                result.innerHTML =
                    "Please enter a valid production cost.";

                return;
            }

            const revenue = quantity * price;
            const profit = revenue - totalCost;

            result.innerHTML =
                "<strong>Expected revenue:</strong> " +
                formatCurrency(revenue) +
                "<br><br>" +

                "<strong>Estimated result after costs:</strong> " +
                formatCurrency(profit);
        });
    }


    // =========================================
    // 4. COST PER ACRE CALCULATOR
    // =========================================

    const costPerAcreForm =
        document.getElementById("costPerAcreForm");

    if (costPerAcreForm) {

        costPerAcreForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const totalFarmCost =
                getValue("totalFarmCost");

            const farmArea =
                getValue("farmArea");

            const result =
                document.getElementById("costPerAcreResult");

            if (
                !Number.isFinite(totalFarmCost) ||
                totalFarmCost < 0
            ) {

                result.innerHTML =
                    "Please enter a valid total farm cost.";

                return;
            }

            if (
                !Number.isFinite(farmArea) ||
                farmArea <= 0
            ) {

                result.innerHTML =
                    "Please enter a cultivated area greater than 0 acres.";

                return;
            }

            const costPerAcre =
                totalFarmCost / farmArea;

            result.innerHTML =
                "<strong>Estimated cost per acre:</strong> " +
                formatCurrency(costPerAcre);
        });
    }


    // =========================================
    // 5. BREAK-EVEN PRICE CALCULATOR
    // =========================================

    const breakEvenForm =
        document.getElementById("breakEvenForm");

    if (breakEvenForm) {

        breakEvenForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const totalCost =
                getValue("breakEvenCost");

            const quantity =
                getValue("breakEvenQuantity");

            const result =
                document.getElementById("breakEvenResult");

            if (
                !Number.isFinite(totalCost) ||
                totalCost < 0
            ) {

                result.innerHTML =
                    "Please enter a valid production cost.";

                return;
            }

            if (
                !Number.isFinite(quantity) ||
                quantity <= 0
            ) {

                result.innerHTML =
                    "Please enter expected production greater than 0 kg.";

                return;
            }

            const breakEvenPrice =
                totalCost / quantity;

            result.innerHTML =
                "<strong>Estimated break-even price:</strong> " +
                formatCurrency(breakEvenPrice) +
                " per kg";
        });
    }


    // =========================================
    // 6. SEED REQUIREMENT CALCULATOR
    // =========================================

    const seedForm =
        document.getElementById("seedForm");

    if (seedForm) {

        seedForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const area =
                getValue("seedArea");

            const seedRate =
                getValue("seedRate");

            const result =
                document.getElementById("seedResult");

            if (!Number.isFinite(area) || area <= 0) {

                result.innerHTML =
                    "Please enter a farm area greater than 0 acres.";

                return;
            }

            if (!Number.isFinite(seedRate) || seedRate <= 0) {

                result.innerHTML =
                    "Please enter a seed rate greater than 0 kg per acre.";

                return;
            }

            const seedRequired =
                area * seedRate;

            result.innerHTML =
                "<strong>Estimated seed requirement:</strong> " +
                formatNumber(seedRequired) +
                " kg";
        });
    }


    // =========================================
    // 7. FERTILIZER REQUIREMENT CALCULATOR
    // =========================================

    const fertilizerForm =
        document.getElementById("fertilizerForm");

    if (fertilizerForm) {

        fertilizerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const area =
                getValue("fertilizerArea");

            const rate =
                getValue("fertilizerRate");

            const result =
                document.getElementById("fertilizerResult");

            if (!Number.isFinite(area) || area <= 0) {

                result.innerHTML =
                    "Please enter a farm area greater than 0 acres.";

                return;
            }

            if (!Number.isFinite(rate) || rate <= 0) {

                result.innerHTML =
                    "Please enter a fertilizer rate greater than 0 kg per acre.";

                return;
            }

            const fertilizerRequired =
                area * rate;

            result.innerHTML =
                "<strong>Estimated fertilizer requirement:</strong> " +
                formatNumber(fertilizerRequired) +
                " kg";
        });
    }


    // =========================================
    // CLEAR BUTTONS
    // =========================================

    function clearCalculator(formId, resultId) {

        const form = document.getElementById(formId);
        const result = document.getElementById(resultId);

        if (form) {
            form.reset();
        }

        if (result) {
            result.innerHTML = "";
        }
    }


    const clearYield =
        document.getElementById("clearYield");

    if (clearYield) {

        clearYield.addEventListener("click", function () {

            clearCalculator(
                "yieldForm",
                "yieldResult"
            );

        });
    }


    const clearCost =
        document.getElementById("clearCost");

    if (clearCost) {

        clearCost.addEventListener("click", function () {

            clearCalculator(
                "costForm",
                "costResult"
            );

        });
    }


    const clearProfit =
        document.getElementById("clearProfit");

    if (clearProfit) {

        clearProfit.addEventListener("click", function () {

            clearCalculator(
                "profitForm",
                "profitResult"
            );

        });
    }


    const clearCostPerAcre =
        document.getElementById("clearCostPerAcre");

    if (clearCostPerAcre) {

        clearCostPerAcre.addEventListener("click", function () {

            clearCalculator(
                "costPerAcreForm",
                "costPerAcreResult"
            );

        });
    }


    const clearBreakEven =
        document.getElementById("clearBreakEven");

    if (clearBreakEven) {

        clearBreakEven.addEventListener("click", function () {

            clearCalculator(
                "breakEvenForm",
                "breakEvenResult"
            );

        });
    }


    const clearSeed =
        document.getElementById("clearSeed");

    if (clearSeed) {

        clearSeed.addEventListener("click", function () {

            clearCalculator(
                "seedForm",
                "seedResult"
            );

        });
    }


    const clearFertilizer =
        document.getElementById("clearFertilizer");

    if (clearFertilizer) {

        clearFertilizer.addEventListener("click", function () {

            clearCalculator(
                "fertilizerForm",
                "fertilizerResult"
            );

        });
    }


    console.log("All farm calculators are ready.");

});