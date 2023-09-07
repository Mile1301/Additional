const getItemsBtn = document.querySelector(".getItemsBtn");

const totalItemsCount = document.querySelector(".totalItemsCount");

const listItemsContainer = document.querySelector(".listItemsContainer");

const placeholders = document.querySelectorAll(".placeholder");

const detailsBody = document.querySelector(".details-body");

const domesticCost = document.querySelector(".domesticCost");
const importedCost = document.querySelector(".importedCost");
const domesticCount = document.querySelector(".domesticCount");
const importedCount = document.querySelector(".importedCount");

const modal = document.querySelector(".modal");

let receiptsFetched = false;

function fetchReceipts() {
  if (!receiptsFetched) {
    fetch("https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1")
      .then((res) => res.json())
      .then((value) => {
        // console.log(value);
        renderOnPage(value);
      });
  } else openModal();
  receiptsFetched = true;
}

function openModal() {
  modal.showModal();
}

const renderOnPage = (items) => {
  totalItemsCount.innerHTML = items.length;
  getItemsBtn.classList.add("active");

  for (let placeholder of placeholders) {
    placeholder.classList.add("hidden");
  }
  detailsBody.classList.remove("hidden");

  items
    .sort((a, b) => {
      if (a.domestic && !b.domestic) return -1;
      if (!a.domestic && b.domestic) return 1;

      return a.name.localeCompare(b.name);
    })
    .forEach((item) => {
      listItemsContainer.innerHTML += `
      <div class="receipt-item">
      <span class="item-isDomestic ${item.domestic ? "domestic" : "imported"}">${item.domestic ? "Domestic" : "Imported"}</span>
      <div>
      <span class="item-name">Item: ${item.name}</span>
      <span class="item-price">Price : $${item.price}</span>
      <span class="item-description">${item.description.substring(0, 10)}... </span>
      <span class="item-weight">Weight: ${item.weight ? item.weight : "N/A"} </span>
      </div>
      </div>
     `;
    });

  listItemsContainer.innerHTML += `<h4>*Grouped by origin and product name</h4> `;

  domesticCost.innerHTML += items.filter((item) => item.domestic).reduce((acc, el) => acc + el.price, 0);
  importedCost.innerHTML += items.filter((item) => !item.domestic).reduce((acc, el) => acc + el.price, 0);
  domesticCount.innerHTML += items.filter((item) => item.domestic).length;
  importedCount.innerHTML += items.filter((item) => !item.domestic).length;
};

// Get items button logic
getItemsBtn.addEventListener("click", fetchReceipts);

// Close button logic
document.querySelector(".closeBtn").addEventListener("click", () => {
  location.reload();
  window.scrollTo({ top });
});
