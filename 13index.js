const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = Number(item.price); 

    if (typeof item.name !== 'string' || item.name.trim() === '') {
      console.log("Invalid item name.");
      return;
    }

    if (isNaN(price) || price < 0) {
      console.log("Invalid price.");
      return;
    }

    item.price = price;             
    this.items.push(item);         
    this.total += price;          
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};


checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
checkout.addItem({ name: "Milk", price: 3.50 });
checkout.addItem({ name: "", price: 10 });                 
checkout.addItem({ name: "Invalid", price: "abc" });       

console.log(checkout.getTotal());
