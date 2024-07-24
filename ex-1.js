function sortCustomerName(customers) {
  for (let i = 0; i < customers.length; i++) {
    for (let j = 0; j < customers.length; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));

//big o เป็น On2 เพราะลูปสองรอบ
