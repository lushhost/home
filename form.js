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
        'Zombie Plan | Premium': { 'Monthly': '₹255', 'Yearly': '₹1035' },
        'Creeper Plan | Premium': { 'Monthly': '₹169', 'Yearly': '₹988' },
        'Enderman Plan | Premium': { 'Monthly': '₹300', 'Yearly': '₹1430' },
        'Dragon Plan | Premium': { 'Monthly': '₹499', 'Yearly': '₹1799' }
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
