// ===== Efek animasi teks di halaman utama =====
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text h2");
  if(heroText){
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(20px)";
    heroText.style.transition = "all 1s ease-out";

    setTimeout(() => {
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }, 300);
  }
});

// ===== Efek tombol Lihat Resep =====
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
  btn.addEventListener("click", (e) => {
    // Untuk demo, tampilkan alert
    // Hapus alert jika ingin tombol langsung menuju halaman
    e.preventDefault(); 
   
    window.location.href = btn.href; // pindah ke halaman resep
  });
});

// ===== Scroll animation untuk daftar resep =====
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.8s ease-out";
  observer.observe(card);
});
