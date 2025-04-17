let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

const form = document.getElementById('itemForm');
const tbody = document.getElementById('inventoryBody');

function saveAndRender() {
  localStorage.setItem('inventory', JSON.stringify(inventory));
  renderTable();
}

function renderTable() {
  tbody.innerHTML = '';
  inventory.forEach((item, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.desc}</td>
      <td>${item.qty}</td>
      <td>
        <input type="number" min="0" value="${item.qty}" onchange="updateQty(${index}, this.value)" />
        <button onclick="changeQty(${index}, -1)">-</button>
        <button onclick="changeQty(${index}, 1)">+</button>
      </td>
      <td><button onclick="deleteItem(${index})" style="color:red;">Delete</button></td>
    `;

    tbody.appendChild(row);
  });

  console.log("Inventory rendered:", inventory);  // ✅ Debug
}

window.changeQty = function(index, change) {
  inventory[index].qty = Math.max(0, inventory[index].qty + change);
  saveAndRender();
};

window.updateQty = function(index, newQty) {
  inventory[index].qty = Math.max(0, parseInt(newQty));
  saveAndRender();
};

window.deleteItem = function(index) {
  inventory.splice(index, 1);
  saveAndRender();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const desc = document.getElementById('desc').value.trim();
  const qty = parseInt(document.getElementById('qty').value);

  if (name && desc && !isNaN(qty)) {
    inventory.push({ name, desc, qty });
    saveAndRender();
    form.reset();
  } else {
    alert("Please enter valid details!");
  }
});

renderTable();
