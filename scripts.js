// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const minecraftButtons = document.querySelectorAll('.input-group:nth-of-type(1) .option-button');
    const billingCycleButtons = document.querySelectorAll('.input-group:nth-of-type(2) .option-button');
    const orderSummaryMonthlyCost = document.querySelector('.order-summary p:nth-of-type(1)');
    const orderSummaryTotalCost = document.querySelector('.order-summary p:nth-of-type(2)');

    minecraftButtons.forEach(button => {
        button.addEventListener('click', function() {
            minecraftButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    billingCycleButtons.forEach(button => {
        button.addEventListener('click', function() {
            billingCycleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateOrderSummary();
        });
    });

    function updateOrderSummary() {
        const selectedBillingCycle = document.querySelector('.input-group:nth-of-type(2) .option-button.active').textContent;

        let monthlyCost = 0;
        let totalCost = 0;

        if (selectedBillingCycle.includes('Monthly')) {
            monthlyCost = 15;
            totalCost = 15;
        } else if (selectedBillingCycle.includes('Yearly')) {
            monthlyCost = 15;
            totalCost = 180;
        }

        orderSummaryMonthlyCost.innerHTML = `<strong>Monthly Cost:</strong> ₹${monthlyCost}`;
        orderSummaryTotalCost.innerHTML = `<strong>Total Cost:</strong> ₹${totalCost}`;
    }
});
