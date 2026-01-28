const output = document.getElementById("output");

function print(title, content) {
  const div = document.createElement("div");
  div.className = "result";
  div.innerHTML = `<h2>${title}</h2>${content}`;
  output.appendChild(div);
}


//cau 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

//cau2
const products = [
  new Product(1, "iPhone 15", 35000000, 10, "Phones", true),
  new Product(2, "Samsung S23", 28000000, 5, "Phones", true),
  new Product(3, "MacBook Air", 32000000, 0, "Laptops", true),
  new Product(4, "Dell XPS", 30000000, 3, "Laptops", false),
  new Product(5, "AirPods Pro", 6500000, 20, "Accessories", true),
  new Product(6, "Apple Watch", 12000000, 15, "Accessories", true),
];

print("Câu 2: Danh sách sản phẩm", 
  products.map(p => p.name).join("<br>")
);

// cau 3
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));

print(
  "Câu 3: Name & Price",
  namePriceList.map(p => `${p.name} - ${p.price}`).join("<br>")
);


//câu 4
const inStock = products.filter(p => p.quantity > 0);

print(
  "Câu 4: Sản phẩm còn hàng",
  inStock.map(p => p.name).join("<br>")
);


//cau5
const hasExpensive = products.some(p => p.price > 30000000);

print(
  "Câu 5: Có sản phẩm > 30 triệu?",
  hasExpensive ? "Có" : "Không"
);


//cau6
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable);

print(
  "Câu 6: Accessories đều đang bán?",
  accessoriesAvailable ? "Đúng" : "Sai"
);


//câu7
const totalValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);

print(
  "Câu 7: Tổng giá trị kho",
  totalValue.toLocaleString("vi-VN") + " VNĐ"
);


//cau 8
let result8 = "";

for (const p of products) {
  result8 += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}<br>`;
}

print("Câu 8: for...of", result8);


//câu9
let result9 = "";

for (const p of products) {
  result9 += "<strong>Product</strong><br>";
  for (const key in p) {
    result9 += `${key}: ${p[key]}<br>`;
  }
  result9 += "<br>";
}

print("Câu 9: for...in", result9);


//câu 10
const sellingInStock = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

print(
  "Câu 10: Đang bán & còn hàng",
  sellingInStock.join("<br>")
);


