const tourPrice = document.getElementById('tour-price');

const tourPriceValues = [
    document.getElementById('start-tour-price'), // 0
    document.getElementById('end-tour-price') // 1
]
const tourDurationValue = document.getElementById('tour-duration-value');
const tourDuration = document.getElementById('tour-duration');

noUiSlider.create(tourPrice, {
    start: [10000, 5000000],
    connect: true,
    range: {
        'min': 10000,
        'max': 5000000
    }
});

tourPrice.noUiSlider.on('update', function(values, handle) {

    tourPriceValues[handle].innerHTML = (Math.round(values[handle])).toLocaleString('en-IN', {

        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
});

noUiSlider.create(tourDuration, {
    start: [3, 20],
    step: 1,
    connect: true,
    range: {
        'min': 2,
        'max': 60
    }
});


tourDuration.noUiSlider.on('update', function(values) {
    tourDurationValue.innerHTML = Math.round(values[0]) + ' - ' + Math.round(values[1]) + ' days'
});