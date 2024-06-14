document.addEventListener('DOMContentLoaded', () => {
  const dailyCallsContent = document.getElementById('daily-calls-content');
  const discountUpdatesContent = document.getElementById('discount-updates-content');

  fetch('content.json')
    .then(response => response.json())
    .then(data => {
      const { dailyCalls, discounts } = data;

      // Display daily calls
      dailyCallsContent.innerHTML = '';
      dailyCalls.forEach(call => {
        const callElement = document.createElement('p');
        callElement.textContent = call;
        dailyCallsContent.appendChild(callElement);
      });

      // Display discount updates
      discountUpdatesContent.innerHTML = '';
      discounts.forEach(discount => {
        const discountElement = document.createElement('p');
        discountElement.textContent = discount;
        discountUpdatesContent.appendChild(discountElement);
      });
    })
    .catch(error => {
      console.error('Error fetching content:', error);
      dailyCallsContent.innerHTML = '<p>Error loading daily top calls.</p>';
      discountUpdatesContent.innerHTML = '<p>Error loading discount updates.</p>';
    });
});
