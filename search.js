// ===== Pencarian resep =====
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if(searchForm){
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      if(title.includes(keyword)){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
