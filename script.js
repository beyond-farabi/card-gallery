const gallery = document.getElementById("gallery");

const searchInput = document.getElementById("search");
const filtersEl = document.getElementById("filters");

// state kriteria
let searchQuery = "";
let activeCategory = "all";


function renderCards(list) {
    // kosongkan wadah lebih dulu
    // kita ingin fungsi ini dipanggil ulang saat filter berubah tentu saja
    // tanpa dikosongkan, kartu lama menumpuk dengan kartu baru.
    gallery.innerHTML = "";

    // kalau list benar-benar kosong:
    // - buat <p> dengan className "empty"
    // - isi teks: "Tidak ada fakta yang cocok" (ini misal)
    // - masukkan ke gallery
    // - return
    if (list.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "empty";
        emptyState.textContent = "Tidak ada fakta yang cocok";
        gallery.appendChild(emptyState);
        return;
    }

    // buat satu kartu untuk setiap item
    list.forEach((item) => {
        const card = document.createElement("article");
        card.className = "card";

        

        // gambar
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.subject;
        card.appendChild(img);

        // judul
        const h2 = document.createElement("h2");
        h2.textContent = item.subject;
        card.appendChild(h2);

        // kategori
        const category = document.createElement("span");
        category.className = "category";
        category.textContent = item.category;
        card.appendChild(category);
        

        // fakta
        const fact = document.createElement("p");
        fact.textContent = item.fact;
        card.appendChild(fact);

        // sumber
        const source = document.createElement("small");
        source.className = "source";
        source.textContent = "Sumber: " + item.source;
        card.appendChild(source);

        gallery.appendChild(card);
    });
}

function getFilteredFacts() {
    // kembalikan array hasil saring dari `facts`
    return facts.filter((item) => {
        const cocokKategori =  activeCategory === "all" || item.category === activeCategory;
        const cocokPencarian = item.subject.toLowerCase().includes(searchQuery) || item.fact.toLowerCase().includes(searchQuery);

        return cocokKategori && cocokPencarian;
    });
}

function renderFilters() {
    const categories = ["all", ...new Set(facts.map((item) => item.category))]
    filtersEl.innerHTML = "";

    categories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.category = cat;
        btn.textContent = cat === "all" ? "Semua" : cat;

        if (cat === activeCategory) {
            btn.className = "active";
        }

        filtersEl.appendChild(btn);
    });
}

filtersEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;

    // simpan btn.dataset.category ke activCategory
    activeCategory = btn.dataset.category;

    // panggil renderFilters() supaya class "active" pindah
    renderFilters();

    // panggil render
    render();
});

// satu pintu untuk gambar ulang
function render() {
    renderCards(getFilteredFacts());
}

// sekarang dengarkan ketikan pengguna
searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value.toLowerCase();
    render();
})



renderFilters();
render();