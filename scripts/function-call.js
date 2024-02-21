function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function updateSeatAndPrice() {
    const seatNumberElement = document.getElementById('seat-number');
    const bookSeatElement = document.getElementById('book-seat');
    const totalPriceElement = document.getElementById('tk');
    const grandPriceElement = document.getElementById('grandTk');

    // 
    const newSeatList = document.getElementById('seatList');
    const economyClassList = document.getElementById('economyClass');
    const priceClassList = document.getElementById('priceClass');

    // 
    newSeatList.innerHTML = '';
    economyClassList.innerHTML = '';
    priceClassList.innerHTML = '';
    bookSeatElement.textContent = selectedSeats.length;
   
    
    const seatsLeft = 40 - selectedSeats.length;
    seatNumberElement.textContent = seatsLeft;
    
    const bookedSeats = selectedSeats.length;
    bookSeatElement.textContent = bookedSeats;

    let pricePerSeat = 0;
    if (bookedSeats === 1) {
        pricePerSeat = 550;
    } else if (bookedSeats > 1 && bookedSeats <= 4) {
        pricePerSeat = bookedSeats  * 550;
        console.log(pricePerSeat);
    }
    const totalPrice = pricePerSeat;
    totalPriceElement.textContent = totalPrice;
    grandPriceElement.textContent = totalPrice;   

    // 
    selectedSeats.forEach(seatId => {
        const seatListItem = document.createElement('div');
        seatListItem.textContent = seatId;
        const economyListItem = document.createElement('div');
        economyListItem.textContent = "Economy";
        const priceListItem = document.createElement('div');
        priceListItem.textContent = "550";
        
        newSeatList.appendChild(seatListItem);
        economyClassList.appendChild(economyListItem);
        priceClassList.appendChild(priceListItem);
      
      });
}

function applyCoupon() {
    const couponInput = document.getElementById('couponText');
    const couponCode = couponInput.value.trim().toUpperCase();

    let discountPercentage = 0;

    if (couponCode === 'NEW15') {
        discountPercentage = 15;
    } else if (couponCode === 'COUPLE20') {
        discountPercentage = 20;
    }

    const totalPriceElement = document.getElementById('tk');
    const grandPriceElement = document.getElementById('grandTk');

    let totalPrice = parseFloat(totalPriceElement.textContent);
    let discountedPrice = totalPrice - (totalPrice * (discountPercentage / 100));

    grandPriceElement.textContent = discountedPrice.toFixed(2);
}

// 
const nextButton = document.getElementById('nextBtn');
const pName = document.querySelector("#pName");
const pNum = document.querySelector("#pNum");
const pEmail = document.querySelector("#pEmail");
// const passName = pName.value;
// const passNum = pNum.value;
// const passEmail = pEmail.value;
nextButton.addEventListener('click', () => {
    if(selectedSeats.length > 0 && selectedSeats.length <= 4){
        console.log('meraj is a snake');
        clickAll();
      }
      else{
        alert('please FillUp All');
      }
});

 

