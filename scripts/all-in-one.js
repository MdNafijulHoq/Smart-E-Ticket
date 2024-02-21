function clickAll(){
    hideElementById('first-section');
    showElementById('second-section'); 
}
function clickOne(){
    hideElementById('second-section');
    showElementById('first-section');
}

const seatButtons = document.querySelectorAll('.seat-btn');
let selectedSeats = [];
let totalPrice = 0;


for (let i = 0; i < seatButtons.length; i++) {
    const button = seatButtons[i];
    button.addEventListener('click', () => {
        const seatId = button.id;
        if (selectedSeats.includes(seatId)) {
            // Seat already selected, so deselect it
            button.style.backgroundColor = '';
            button.style.color = 'black';
            selectedSeats = selectedSeats.filter(id => id !== seatId);
            updateSeatAndPrice();
        } 
        else {
            if (selectedSeats.length < 4) {
                // Seat not selected, so select it
                button.style.backgroundColor = 'green';
                button.style.color = 'white';
                selectedSeats.push(seatId);
                updateSeatAndPrice();
            } 
            else {
                alert('You can not select maximum 4 seats.');
            }
        }
    });
}

document.getElementById('applyBtn').addEventListener('click', function() {
    applyCoupon();
});