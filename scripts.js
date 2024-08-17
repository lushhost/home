document.addEventListener('DOMContentLoaded', function() {
    const planSelect = document.getElementById('Plan');
    const billingCycleSelect = document.getElementById('billing-cycle');
    const couponContainer = document.getElementById('coupon-container');
    const couponInput = document.getElementById('Coupon-Code');

    const planPrices = {
        'Wood Plan | Budget': { 'Monthly': '₹15', 'Yearly': '₹180' },
        'Stone Plan | Budget': { 'Monthly': '₹30', 'Yearly': '₹360' },
        'Coal Plan | Budget': { 'Monthly': '₹55', 'Yearly': '₹660' },
        'Iron Plan | Budget': { 'Monthly': '₹80', 'Yearly': '₹960' },
        'Zombie Plan | Premium': { 'Monthly': '₹219', 'Yearly': '₹1011' },
        'Creeper Plan | Premium': { 'Monthly': '₹155', 'Yearly': '₹1319' },
        'Enderman Plan | Premium': { 'Monthly': '₹320', 'Yearly': '₹1799' },
        'Dragon Plan | Premium': { 'Monthly': '₹415', 'Yearly': '₹2130' }
    };

    function updateBillingCycleOptions() {
        const selectedPlan = planSelect.value;
        const prices = planPrices[selectedPlan];

        billingCycleSelect.innerHTML = `
            <option value="Monthly">Monthly (${prices['Monthly']})</option>
            <option value="Yearly">Yearly (${prices['Yearly']})</option>
        `;

        // Show or hide the coupon code input based on the plan type
        if (selectedPlan.includes('Premium')) {
            couponContainer.style.display = 'block';
        } else {
            couponContainer.style.display = 'none';
            couponInput.value = ''; // Clear the coupon code if switching to a Budget plan
        }
    }

    planSelect.addEventListener('change', updateBillingCycleOptions);
    updateBillingCycleOptions(); // Initialize on page load

    document.getElementById('plan-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const couponCode = couponInput.value.trim();

        // Check if the coupon code is valid
        const validCoupons = ['SAVE10', 'LUSHBXC'];
        if (couponCode && !validCoupons.includes(couponCode)) {
            alert('Invalid Coupon Code! The code will be ignored.');
            couponInput.value = ''; // Clear invalid coupon code
        }

        // Save form data and redirect to confirmation page
        const formData = new FormData(this);
        const details = {};
        formData.forEach((value, key) => {
            details[key] = value;
        });
        localStorage.setItem('formDetails', JSON.stringify(details));
        window.location.href = 'confirmation.html';
    });
});
