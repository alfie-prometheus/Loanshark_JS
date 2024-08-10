function formatNumber(input) {
    // Remove non-numeric characters
    let number = input.value.replace(/\D/g, '');
  
    // Add commas as thousands separators
    number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Update the input value directly
    input.value = number;
  }
  