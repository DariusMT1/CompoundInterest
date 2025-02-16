document.getElementById('interest-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const principle = parseFloat(document.getElementById('principle').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseInt(document.getElementById('time').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly_contribution').value);
    const compoundingFrequency = parseInt(document.getElementById('compounding_frequency').value);
    const currency = document.getElementById('currency').value;

    const yearlyData = calculateCompoundInterest(principle, rate, time, compoundingFrequency, monthlyContribution);
    const finalBalance = yearlyData[yearlyData.length - 1];

    displayResults(yearlyData, finalBalance, currency);
});

function calculateCompoundInterest(principle, rate, time, compoundingFrequency, monthlyContribution) {
    let total = principle;
    const yearlyData = [];
    for (let year = 1; year <= time; year++) {
        for (let month = 1; month <= 12; month++) {
            total = total * Math.pow((1 + rate / (100 * compoundingFrequency)), compoundingFrequency / 12);
            total += monthlyContribution;
        }
        yearlyData.push(total);
    }
    return yearlyData;
}

function displayResults(yearlyData, finalBalance, currency) {
    const tableBody = document.getElementById('result-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    const currencySymbols = {
        'USD': '$',
        'EUR': '€',
        'RON': 'lei',
        'GBP': '£',
        'JPY': '¥',
        'CHF': 'CHF'
    };

    yearlyData.forEach((balance, index) => {
        const row = tableBody.insertRow();
        const yearCell = row.insertCell(0);
        const balanceCell = row.insertCell(1);
        yearCell.textContent = index + 1;
        balanceCell.textContent = `${currencySymbols[currency]}${balance.toFixed(2)}`;
    });

    const ctx = document.getElementById('balanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearlyData.map((_, index) => index + 1),
            datasets: [{
                label: 'Balance',
                data: yearlyData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: `Balance (${currencySymbols[currency]})`
                    }
                }
            }
        }
    });
}
