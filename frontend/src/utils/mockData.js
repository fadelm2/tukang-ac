export const mockData = {
  services: [
    {
      name: 'Instalasi AC',
      icon: 'settings',
      description: 'Pemasangan AC baru dengan garansi dan kualitas terjamin',
      features: [
        'Survey lokasi gratis',
        'Instalasi profesional',
        'Testing & commissioning',
        'Garansi 1 tahun'
      ]
    },
    {
      name: 'Service & Perbaikan',
      icon: 'wrench',
      description: 'Perbaikan semua jenis kerusakan AC dengan spare part original',
      features: [
        'Diagnosa menyeluruh',
        'Spare part original',
        'Teknisi bersertifikat',
        'Garansi service 30 hari'
      ]
    },
    {
      name: 'Cuci AC',
      icon: 'droplets',
      description: 'Pembersihan menyeluruh untuk performa AC maksimal',
      features: [
        'Cuci evaporator & condenser',
        'Pembersihan filter',
        'Cek freon & tekanan',
        'Disinfektan & anti bakteri'
      ]
    },
    {
      name: 'Perawatan Rutin',
      icon: 'clock',
      description: 'Paket perawatan berkala untuk menjaga performa AC',
      features: [
        'Jadwal maintenance rutin',
        'Cek komponen berkala',
        'Pembersihan filter',
        'Laporan kondisi AC'
      ]
    }
  ],
  pricing: [
    {
      name: 'Cuci AC',
      description: 'Pembersihan AC standar',
      price: 'Rp 75.000',
      features: [
        'Cuci indoor unit',
        'Cuci outdoor unit',
        'Cek freon',
        'Pembersihan filter',
        'Garansi 7 hari'
      ],
      popular: false
    },
    {
      name: 'Service AC',
      description: 'Perbaikan dan perawatan',
      price: 'Rp 150.000',
      features: [
        'Diagnosa lengkap',
        'Cuci AC menyeluruh',
        'Isi freon (jika perlu)',
        'Ganti spare part (harga terpisah)',
        'Garansi service 30 hari'
      ],
      popular: true
    },
    {
      name: 'Instalasi AC',
      description: 'Pemasangan AC baru',
      price: 'Rp 450.000',
      features: [
        'Survey lokasi gratis',
        'Instalasi lengkap',
        'Pipa & kabel 3 meter',
        'Bracket outdoor',
        'Garansi instalasi 1 tahun'
      ],
      popular: false
    }
  ],
  brands: [
    'Daikin',
    'LG',
    'Samsung',
    'Panasonic',
    'Sharp',
    'Mitsubishi',
    'Gree',
    'Polytron',
    'Electrolux',
    'Changhong',
    'Midea',
    'Aqua',
    'Aux',
    'TCL',
    'Haier',
    'York'
  ],
  testimonials: [
    {
      name: 'Budi Santoso',
      location: 'Jakarta Selatan',
      comment: 'Pelayanan sangat memuaskan! Teknisi datang tepat waktu dan bekerja sangat profesional. AC saya yang error langsung normal kembali.'
    },
    {
      name: 'Siti Nurhaliza',
      location: 'Tangerang',
      comment: 'Harga transparan dan tidak ada biaya tambahan. Hasil cuci AC-nya bersih banget, dinginnya kembali seperti baru. Recommended!'
    },
    {
      name: 'Andi Wijaya',
      location: 'Bekasi',
      comment: 'Sudah langganan 2 tahun untuk service rutin kantor. Selalu puas dengan hasilnya. Teknisinya ramah dan berpengalaman.'
    }
  ]
};