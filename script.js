const gallery = document.getElementById("gallery");

const searchInput = document.getElementById("search");
const filtersEl = document.getElementById("filters");

// state kriteria
let searchQuery = "";
let activeCategory = "all";

// iniate buat rendering input
let searchTimer;

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

let facts = [];

function openModal(item) {
    modalContent.innerHTML = "";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.subject;
    modalContent.appendChild(img);

    // tambahkan h2 (item.subject), p (item.fact), small (sumber), polanya persis sama dengan renderCards.
    const heading = document.createElement("h2");
    heading.textContent = item.subject;
    modalContent.appendChild(heading);

    const parag = document.createElement("p");
    parag.textContent = item.fact;
    modalContent.appendChild(parag);

    const src = document.createElement("small");
    src.textContent = "Sumber: " + item.source;

    modalContent.appendChild(src);

    modal.showModal();
}

gallery.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    if (!card) return;

    // cari objek datanya dari card.dataset.id
    const item = facts.find((f) => f.id === Number(card.dataset.id));
    if (!item) return;
    openModal(item);
});

modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.close();
})

searchInput.addEventListener("input", (event) => {
    const value = event.target.value;

    // batalkan timer sebelumnya (kalau ada)
    // clearTimeout(searchTimer)
    // aman dipanggil meski searchTimer masih undefined - tidak error

    clearTimeout(searchTimer);

    // jadwalkan yang baru (pake setTimeout())
    searchTimer = setTimeout(() => {
        // console.log("render dipanggil:", value);
        searchQuery = value.toLowerCase();
        render();
    }, 300);
});

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
        card.dataset.id = item.id;

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

// // sekarang dengarkan ketikan pengguna
// searchInput.addEventListener("input", (event) => {
//     searchQuery = event.target.value.toLowerCase();
//     render();
// })

function renderLoading() {
    gallery.innerHTML = "";
    const msg = document.createElement("p");
    msg.className = "empty";
    msg.textContent = "Memuat fakta...";
    gallery.appendChild(msg);
}

async function loadFacts() {

    // panggil renderLoading sebelum fetch dimulai
    renderLoading();

    try {
        // fetch("data.json")
        const response = await fetch("data.json");

        // guard clause  kalau response.ok bernilai false, lempar error
        // throw new Error("Gagal memat data");
        if (!response.ok) {
            throw new Error("Gagal memuat data");
        }

        // ubah response jadi objek Javascript, simpan ke facts
        facts = await response.json();

        renderFilters();
        render();
    } catch (error) {

        console.log("Gagal memua data.json", error);
        gallery.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "empty";
        msg.textContent = "Gagal memuat data. Coba muat ulang halaman.";
        gallery.appendChild(msg);
    }
}

loadFacts();