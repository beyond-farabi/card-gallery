const facts = [
  {
    id: 1,
    subject: "Gurita",
    fact: "Punya tiga jantung dan darah berwarna biru karena mengandung hemosianin, bukan hemoglobin.",
    category: "biologi",
    image: "https://images.unsplash.com/photo-1510637234398-d25c9570a0a0?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source: "Smithsonian Ocean"
  },
  {
    id: 2,
    subject: "Hiu",
    fact: "Sudah ada sejak sekitar 450 juta tahun lalu, jauh sebelum pohon pertama muncul di daratan.",
    category: "biologi",
    image: "https://images.unsplash.com/photo-1563186627-0d185db94083?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source: "American Museum of Natural History"
  },
  {
    id: 3,
    subject: "Tardigrada",
    fact: "Hewan mikroskopis ini bertahan hidup setelah dipaparkan langsung ke vakum ruang angkasa pada misi FOTON-M3.",
    category: "biologi",
    image: "https://picsum.photos/seed/tardigrada/400/300",
    source: "Current Biology (2008)"
  },
  {
    id: 4,
    subject: "Venus",
    fact: "Satu hari di Venus lebih lama daripada satu tahunnya. Rotasinya 243 hari Bumi, orbitnya hanya 225 hari.",
    category: "astronomi",
    image: "https://picsum.photos/seed/venus/400/300",
    source: "NASA"
  },
  {
    id: 5,
    subject: "Bintang neutron",
    fact: "Materinya begitu padat sehingga satu sendok teh saja diperkirakan berbobot sekitar satu miliar ton.",
    category: "astronomi",
    image: "https://picsum.photos/seed/neutron/400/300",
    source: "NASA"
  },
  {
    id: 6,
    subject: "Pohon dan bintang",
    fact: "Jumlah pohon di Bumi ditaksir sekitar 3 triliun, jauh lebih banyak daripada perkiraan bintang di galaksi Bima Sakti.",
    category: "astronomi",
    image: "https://picsum.photos/seed/pohon/400/300",
    source: "Nature (2015)"
  },
  {
    id: 7,
    subject: "Cleopatra",
    fact: "Hidup lebih dekat ke masa pendaratan manusia di Bulan daripada ke masa pembangunan Piramida Giza.",
    category: "sejarah",
    image: "https://picsum.photos/seed/cleopatra/400/300",
    source: "Smithsonian Magazine"
  },
  {
    id: 8,
    subject: "Universitas Oxford",
    fact: "Sudah mengajar sejak sekitar tahun 1096, lebih tua daripada Kekaisaran Aztek yang berdiri pada 1325.",
    category: "sejarah",
    image: "https://picsum.photos/seed/oxford/400/300",
    source: "University of Oxford"
  },
  {
    id: 9,
    subject: "Perang Inggris-Zanzibar",
    fact: "Perang terpendek dalam catatan sejarah, berlangsung sekitar 38 menit pada 27 Agustus 1896.",
    category: "sejarah",
    image: "https://picsum.photos/seed/zanzibar/400/300",
    source: "Royal Museums Greenwich"
  },
  {
    id: 10,
    subject: "Petir",
    fact: "Memanaskan udara di sekitarnya hingga sekitar 30.000 derajat Celsius, sekitar lima kali lebih panas dari permukaan Matahari.",
    category: "fisika",
    image: "https://picsum.photos/seed/petir/400/300",
    source: "National Weather Service"
  },
  {
    id: 11,
    subject: "Menara Eiffel",
    fact: "Bisa bertambah tinggi sekitar 15 sentimeter saat musim panas karena pemuaian termal pada rangka besinya.",
    category: "fisika",
    image: "https://picsum.photos/seed/eiffel/400/300",
    source: "Société d'Exploitation de la Tour Eiffel"
  },
  {
    id: 12,
    subject: "Awan kumulus",
    fact: "Meski tampak ringan, satu awan kumulus berukuran sedang bisa mengandung air seberat ratusan ton.",
    category: "fisika",
    image: "https://picsum.photos/seed/awan/400/300",
    source: "USGS Water Science School"
  },
  {
    id: 13,
    subject: "Challenger Deep",
    fact: "Titik terdalam samudra yang diketahui, berada sekitar 10.935 meter di bawah permukaan laut di Palung Mariana.",
    category: "geografi",
    image: "https://picsum.photos/seed/mariana/400/300",
    source: "NOAA"
  },
  {
    id: 14,
    subject: "Antartika",
    fact: "Merupakan gurun terbesar di dunia. Definisi gurun didasarkan pada curah hujan rendah, bukan suhu panas.",
    category: "geografi",
    image: "https://picsum.photos/seed/antartika/400/300",
    source: "British Antarctic Survey"
  },
  {
    id: 15,
    subject: "Rusia",
    fact: "Wilayahnya membentang melintasi 11 zona waktu, terluas di antara semua negara di dunia.",
    category: "geografi",
    image: "https://picsum.photos/seed/rusia/400/300",
    source: "CIA World Factbook"
  }
];