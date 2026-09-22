// =========================================
// KENYA FARM GUIDE
// FARM CALCULATORS
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Kenya Farm Guide calculators loaded successfully.");


    // =========================================
    // YIELD CALCULATOR
    // =========================================

    const yieldForm = document.getElementById("yieldForm");

    if (yieldForm) {

        yieldForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const grainInput = document.getElementById("grain");
            const areaInput = document.getElementById("area");
            const result = document.getElementById("yieldResult");

            const grain = parseFloat(grainInput.value);
            const area = parseFloat(areaInput.value);

            if (grain <= 0 || area <= 0) {

                result.textContent =
                    "Please enter valid grain and area values.";

                return;
            }

            const yieldPerAcre = grain / area;

            result.innerHTML =
                "<strong>Estimated yield:</strong> " +
                yieldPerAcre.toLocaleString("en-KE", {
                    maximumFractionDigits: 2
                }) +
                " kg per acre";
        });
    }


    // =========================================
    // FARM COST CALCULATOR
    // =========================================

    const costForm = document.getElementById("costForm");

    if (costForm) {

        costForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const seedCost =
                parseFloat(document.getElementById("seedCost").value) || 0;

            const fertilizerCost =
                parseFloat(document.getElementById("fertilizerCost").value) || 0;

            const labourCost =
                parseFloat(document.getElementById("labourCost").value) || 0;

            const otherCost =
                parseFloat(document.getElementById("otherCost").value) || 0;

            const totalCost =
                seedCost +
                fertilizerCost +
                labourCost +
                otherCost;

            document.getElementById("costResult").innerHTML =
                "<strong>Total production cost:</strong> KES " +
                totalCost.toLocaleString("en-KE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
        });
    }


    // =========================================
    // PROFIT CALCULATOR
    // =========================================

    const profitForm = document.getElementById("profitForm");

    if (profitForm) {

        profitForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const quantity =
                parseFloat(document.getElementById("quantity").value);

            const price =
                parseFloat(document.getElementById("price").value);

            const totalCost =
                parseFloat(document.getElementById("totalCost").value);

            const result =
                document.getElementById("profitResult");

            if (
                !Number.isFinite(quantity) ||
                !Number.isFinite(price) ||
                !Number.isFinite(totalCost)
            ) {

                result.textContent =
                    "Please enter valid values in all fields.";

                return;
            }

            const revenue = quantity * price;

            const profit = revenue - totalCost;

            result.innerHTML =
                "<strong>Expected revenue:</strong> KES " +
                revenue.toLocaleString("en-KE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }) +
                "<br><br>" +

                "<strong>Estimated result after costs:</strong> KES " +
                profit.toLocaleString("en-KE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
        });
    }


    // =========================================
    // COST PER ACRE CALCULATOR
    // =========================================

    const costPerAcreForm =
        document.getElementById("costPerAcreForm");

    if (costPerAcreForm) {

        costPerAcreForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const totalFarmCost =
                parseFloat(
                    document.getElementById("totalFarmCost").value
                );

            const farmArea =
                parseFloat(
                    document.getElementById("farmArea").value
                );

            const result =
                document.getElementById("costPerAcreResult");

            if (
                !Number.isFinite(totalFarmCost) ||
                !Number.isFinite(farmArea) ||
                farmArea <= 0
            ) {

                result.textContent =
                    "Please enter valid farm cost and area values.";

                return;
            }

            const costPerAcre =
                totalFarmCost / farmArea;

            result.innerHTML =
                "<strong>Estimated cost per acre:</strong> KES " +
                costPerAcre.toLocaleString("en-KE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
        });
    }

});