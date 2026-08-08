const gallery = document.getElementById("gallery");

function renderCards(list) {
    // kosongkan wadah lebih dulu
    // kita ingin fungsi ini dipanggil ulang saat filter berubah tentu saja
    // tanpa dikosongkan, kartu lama menumpuk dengan kartu baru.
    gallery.innerHTML = "";

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

renderCards(facts);