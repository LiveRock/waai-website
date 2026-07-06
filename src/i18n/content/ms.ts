import type { LocaleContent } from './types';

const ms: LocaleContent = {
  features: {
    'auto-responder': {
      title: 'Auto-Balas WhatsApp',
      shortTitle: 'Auto-Balas',
      headline: 'Jangan Biarkan Pelanggan Menanti Lagi',
      description:
        'Respons berkuasa AI serta-merta untuk setiap mesej WhatsApp. Padanan berasaskan peraturan mengendalikan soalan biasa dalam milisaat, dengan sandaran LLM pintar untuk selebihnya.',
      metaDescription: 'Balas secara automatik setiap mesej WhatsApp dengan ketepatan berkuasa AI. Padanan berasaskan peraturan serta sandaran LLM pintar.',
      benefits: [
        { title: 'Respons Bawah Saat', description: 'Padanan kabur mencari jawapan yang betul sebelum pelanggan selesai menaip mesej seterusnya.' },
        { title: 'Sandaran Pintar', description: 'Apabila tiada peraturan sepadan, AI anda masuk dengan respons kontekstual yang berguna — bukan "saya tidak faham" yang generik.' },
        { title: 'Tersedia 24/7', description: 'Ejen AI anda tidak pernah tidur, tidak pernah bercuti, dan tidak pernah bermasam muka.' },
      ],
      howItWorks: [
        { title: 'Sediakan Soal Jawab Anda', description: 'Tambah soalan dan jawapan biasa — import dari CSV atau taip sendiri.' },
        { title: 'Konfigurasi AI Anda', description: 'Pilih pembekal AI anda dan sesuaikan gesaan sistem agar sepadan dengan nada jenama anda.' },
        { title: 'Mula Siaran', description: 'Setiap mesej WhatsApp yang masuk mendapat respons serta-merta dan tepat secara automatik.' },
      ],
      useCases: [
        { title: 'Automasi FAQ', description: 'Urus "Apakah waktu operasi anda?" dan "Di mana anda berada?" tanpa bersusah payah.' },
        { title: 'Pertanyaan Produk', description: 'Auto-balas soalan harga, ketersediaan dan spesifikasi serta-merta.' },
        { title: 'Sokongan Luar Waktu', description: 'Teruskan berkhidmat kepada pelanggan apabila pasukan anda luar talian.' },
      ],
    },
    'knowledge-base': {
      title: 'Pangkalan Pengetahuan',
      shortTitle: 'Pangkalan Pengetahuan',
      headline: 'Kepakaran Perniagaan Anda, Sentiasa Tersedia',
      description:
        'Bina pangkalan pengetahuan Soal Jawab yang komprehensif untuk AI anda rujuk. Import ratusan entri melalui CSV, susun mengikut keutamaan, dan biarkan padanan kabur mencari jawapan terbaik setiap kali.',
      metaDescription: 'Bina pangkalan pengetahuan Soal Jawab pintar dengan import CSV, padanan kabur dan kawalan keutamaan. Kepakaran anda, sentiasa tersedia.',
      benefits: [
        { title: 'Import Pukal', description: 'Muat naik ratusan pasangan Soal Jawab melalui CSV atau JSON. Pangkalan pengetahuan anda berkembang dalam beberapa minit, bukan minggu.' },
        { title: 'Padanan Pintar', description: 'Padanan kabur mengendalikan salah eja, variasi dan padanan separuh — pelanggan tidak perlu ayat yang tepat.' },
        { title: 'Sistem Keutamaan', description: 'Kawal jawapan mana yang diutamakan apabila berbilang padanan ditemui.' },
      ],
      howItWorks: [
        { title: 'Tambah Pengetahuan Anda', description: 'Taip pasangan Soal Jawab secara individu atau import pukal dari hamparan.' },
        { title: 'Susun & Utamakan', description: 'Tetapkan kategori, keutamaan dan frasa pencetus untuk setiap entri.' },
        { title: 'Uji & Laksana', description: 'Gunakan sembang ujian terbina dalam untuk mengesahkan jawapan, kemudian mula siaran dengan yakin.' },
      ],
      useCases: [
        { title: 'Katalog Produk', description: 'Benarkan pelanggan bertanya tentang mana-mana produk dan dapatkan butiran tepat serta-merta.' },
        { title: 'FAQ Polisi', description: 'Penghantaran, pemulangan, waranti — jawab soalan polisi tanpa campur tangan manusia.' },
        { title: 'Panduan Onboarding', description: 'Pelanggan baharu mendapat jawapan serta-merta untuk soalan pemasangan dan permulaan.' },
      ],
    },
    'logic-flows': {
      title: 'Aliran Logik',
      shortTitle: 'Aliran Logik',
      headline: 'Bina Perbualan yang Menukar',
      description:
        'Cipta aliran perbualan berbilang langkah dengan logik bercabang, syarat dan tindakan. Pandu pelanggan melalui tempahan, kelayakan, pesanan — semuanya tanpa menulis satu baris kod pun.',
      metaDescription: 'Bina perbualan WhatsApp berbilang langkah dengan logik bercabang, syarat dan pembolehubah. Tiada kod diperlukan.',
      benefits: [
        { title: 'Pembina Aliran Visual', description: 'Reka perbualan kompleks dengan editor langkah demi langkah yang intuitif. Tiada pengkodan diperlukan.' },
        { title: 'Pencabangan Pintar', description: 'Arahkan pelanggan secara berbeza berdasarkan respons mereka, waktu, atau mana-mana pembolehubah.' },
        { title: 'Sistem Pembolehubah', description: 'Tangkap dan gunakan semula maklumat merentas perbualan — nama, pilihan, pengiraan.' },
      ],
      howItWorks: [
        { title: 'Reka Aliran Anda', description: 'Tambah langkah mesej, soalan dan syarat untuk membina perbualan anda.' },
        { title: 'Tetapkan Pencetus', description: 'Takrif kata kunci atau frasa yang melancarkan aliran secara automatik.' },
        { title: 'Uji & Aktifkan', description: 'Lalui aliran dalam mod ujian, kemudian laksanakan untuk mengendalikan perbualan sebenar.' },
      ],
      useCases: [
        { title: 'Kelayakan Bakal Pelanggan', description: 'Tanya soalan kelayakan dan arahkan bakal pelanggan panas kepada pasukan jualan anda secara automatik.' },
        { title: 'Tempahan Janji Temu', description: 'Pandu pelanggan melalui slot tersedia dan sahkan tempahan melalui Google Kalendar.' },
        { title: 'Pemprosesan Pesanan', description: 'Pandu pelanggan melalui pemilihan produk, penyesuaian dan penempatan pesanan.' },
      ],
    },
    'ai-chatbot': {
      title: 'Chatbot AI',
      shortTitle: 'Chatbot AI',
      headline: 'Jenama Anda, Dikuasakan oleh Mana-mana AI',
      description:
        'Pilih daripada OpenAI, Anthropic, z.ai, atau bawa model anda sendiri. Konfigurasikan personaliti, nada dan kepakaran agar sepadan dengan perniagaan anda. Sokongan berbilang pembekal bermakna anda tidak pernah terkunci.',
      metaDescription: 'Chatbot AI berbilang pembekal untuk WhatsApp. Pilih OpenAI, Anthropic, z.ai atau model anda sendiri. Jenama anda, AI anda.',
      benefits: [
        { title: 'Berbilang Pembekal', description: 'Tukar antara OpenAI, Anthropic, z.ai, llama.cpp dan OpenRouter tanpa mengubah persediaan anda.' },
        { title: 'Suara Jenama', description: 'Sesuaikan gesaan sistem supaya AI bercakap dalam nada dan gaya jenama anda.' },
        { title: 'Sedar Konteks', description: 'AI memahami sejarah perbualan dan menggunakan pangkalan pengetahuan anda untuk jawapan tepat.' },
      ],
      howItWorks: [
        { title: 'Pilih Pembekal Anda', description: 'Pilih OpenAI, Anthropic, z.ai atau mana-mana titik akhir serasi OpenAI.' },
        { title: 'Sesuaikan Gesaan', description: 'Tulis gesaan sistem yang menangkap suara dan kepakaran jenama anda.' },
        { title: 'Tetapkan Model', description: 'Pilih model yang sesuai dengan keperluan dan belanjawan anda — daripada pantas dan murah kepada berkuasa dan halus.' },
      ],
      useCases: [
        { title: 'Sokongan Pelanggan', description: 'Urus pertanyaan sokongan kompleks dengan AI yang memahami produk dan polisi anda.' },
        { title: 'Pembantu Jualan', description: 'Syorkan produk, jawab soalan teknikal dan pandu keputusan pembelian.' },
        { title: 'Bot Perundingan', description: 'Sediakan perundingan dan penilaian awal berdasarkan kepakaran anda.' },
      ],
    },
    'team-inbox': {
      title: 'Peti Masuk Pasukan',
      shortTitle: 'Peti Masuk Pasukan',
      headline: 'AI Mengendalikan Rutin. Anda Mengendalikan Selebihnya.',
      description:
        'Pantau semua perbualan WhatsApp dalam masa nyata. Masuk dengan balasan manusia apabila AI tidak mencukupi. Serah antara AI dan ejen manusia dengan lancar tanpa pelanggan menyedarinya.',
      metaDescription: 'Pantau perbualan WhatsApp dalam masa nyata. Masuk dengan balasan manusia apabila AI tidak mencukupi. Serah lancar.',
      benefits: [
        { title: 'Pemantauan Langsung', description: 'Tonton perbualan berkembang dalam masa nyata dengan senarai mesej yang segar-semula automatik.' },
        { title: 'Serah Manusia', description: 'Alih ambil mana-mana perbualan dengan balasan manual. AI undur sehingga anda selesai.' },
        { title: 'Sejarah Penuh', description: 'Setiap mesej direkodkan — cari, tapis dan semak mana-mana perbualan pada bila-bila masa.' },
      ],
      howItWorks: [
        { title: 'AI Mengendalikannya', description: 'Mesej masuk mendapat respons AI serta-merta berdasarkan pangkalan pengetahuan dan aliran anda.' },
        { title: 'Anda Memantau', description: 'Tonton semua perbualan dari papan pemuka anda. Kemas kini masa nyata, tiada segarkan diperlukan.' },
        { title: 'Masuk Apabila Perlu', description: 'Taip balasan manual untuk mengambil alih. AI jeda dan sambung semula apabila anda selesai.' },
      ],
      useCases: [
        { title: 'Pengurusan Eskalasi', description: 'Isu kompleks diekalasi kepada manusia manakala AI mengendalikan yang mudah.' },
        { title: 'Pengendalian VIP', description: 'Masuk ke perbualan pelanggan bernilai tinggi untuk sentuhan peribadi.' },
        { title: 'Jaminan Kualiti', description: 'Semak perbualan AI dan betulkan respons untuk meningkatkan ketepatan dari semasa ke semasa.' },
      ],
    },
    campaigns: {
      title: 'Kempen WhatsApp',
      shortTitle: 'Kempen',
      headline: 'Capai Pelanggan Di Mana Mereka Benar-benar Membaca',
      description:
        'Mesej WhatsApp mempunyai kadar pembukaan 98%. Hantar kempen, promosi dan kemas kini tertentu terus ke telefon pelanggan. Pemesejan berasaskan templat yang mematuhi polisi WhatsApp.',
      metaDescription: 'Hantar kempen WhatsApp dengan kadar pembukaan 98%. Pemesejan berasaskan templat, penghantaran tertentu dan pematuhan polisi.',
      benefits: [
        { title: 'Kadar Pembukaan 98%', description: 'Mesej WhatsApp dibuka. E-mel tidak boleh menandingi tahap perhatian itu.' },
        { title: 'Berasaskan Templat', description: 'Templat mesej diluluskan terlebih dahulu memastikan kempen anda mematuhi polisi WhatsApp.' },
        { title: 'Penghantaran Tertentu', description: 'Segmen khalayak anda dan hantar mesej yang betul kepada orang yang betul.' },
      ],
      howItWorks: [
        { title: 'Cipta Templat', description: 'Reka templat mesej anda dengan pembolehubah dinamik untuk pemperibadian.' },
        { title: 'Dapatkan Kelulusan', description: 'Hantar templat anda kepada WhatsApp untuk kelulusan — biasanya dalam 24 jam.' },
        { title: 'Hantar Kempen Anda', description: 'Siar mesej anda kepada kenalan terpilih dengan satu klik.' },
      ],
      useCases: [
        { title: 'Jualan Kilat', description: 'Hantar promosi sensitif masa yang pelanggan benar-benar lihat dan tindakkan.' },
        { title: 'Peringatan Janji Temu', description: 'Kurangkan tidak hadir dengan peringatan janji temu automatik melalui WhatsApp.' },
        { title: 'Pelancaran Produk', description: 'Umumkan produk atau perkhidmatan baharu terus kepada pangkalan pelanggan anda.' },
      ],
    },
    analytics: {
      title: 'Papan Pemuka Analitik',
      shortTitle: 'Analitik',
      headline: 'Tahu Apa yang Berkesan. Baiki Apa yang Tidak.',
      description:
        'Jejak volum mesej, sumber respons, populariti pencetus dan corak perbualan. Lihat dengan tepat prestasi ejen AI anda dan di mana perlu diperbaiki.',
      metaDescription: 'Jejak volum mesej WhatsApp, prestasi AI, topik popular dan corak perbualan. Pengoptimuman berasaskan data.',
      benefits: [
        { title: 'Cerapan Mesej', description: 'Jejak volum masuk/keluar, masa respons dan aliran perbualan dari semasa ke semasa.' },
        { title: 'Pecahan Sumber', description: 'Lihat bagaimana respons terbahagi antara peraturan, AI, aliran dan ejen manusia.' },
        { title: 'Topik Popular', description: 'Temui soalan paling kerap ditanya dan aliran paling banyak digunakan untuk mengoptimumkan persediaan anda.' },
      ],
      howItWorks: [
        { title: 'Mesej Mengalir Masuk', description: 'Setiap interaksi WhatsApp dijejak dan dikategorikan secara automatik.' },
        { title: 'Papan Pemuka Kemas Kini', description: 'Carta dan metrik disegarkan setiap hari dengan data terkini.' },
        { title: 'Bertindak atas Cerapan', description: 'Gunakan data untuk menambah Soal Jawab yang hilang, memperbaiki aliran dan mengoptimumkan gesaan AI.' },
      ],
      useCases: [
        { title: 'Pengesanan Prestasi', description: 'Pantau berapa banyak perbualan yang dikendalikan AI berbanding ejen manusia.' },
        { title: 'Analisis Jurang', description: 'Cari soalan yang AI tidak boleh jawab dan tambahkannya ke pangkalan pengetahuan anda.' },
        { title: 'Pengukuran ROI', description: 'Jejak volum mesej untuk mengukur penjimatan masa dan kos.' },
      ],
    },
    'document-generation': {
      title: 'Penjanaan Dokumen',
      shortTitle: 'Penjanaan Dokumen',
      headline: 'Daripada Perbualan ke Dokumen dalam Saat',
      description:
        'Jana hamparan Excel, dokumen Word, PDF, Google Docs dan Google Sheets terus daripada data sembang. Invois, laporan, sebut harga — dicipta dan dihantar secara automatik.',
      metaDescription: 'Jana Excel, Word, PDF, Google Docs dan Sheets daripada perbualan WhatsApp. Invois, sebut harga dan laporan secara autopilot.',
      benefits: [
        { title: 'Berbilang Format', description: 'Jana Excel, Word, PDF atau Google Docs dan Sheets natif — apa sahaja yang aliran kerja anda perlukan.' },
        { title: 'Didorong Data', description: 'Gunakan pembolehubah dan konteks perbualan untuk mengisi dokumen dengan data pelanggan sebenar.' },
        { title: 'Penghantaran Auto', description: 'Dokumen dijana dan dihantar kepada pelanggan melalui WhatsApp secara automatik.' },
      ],
      howItWorks: [
        { title: 'Takrifkan Dokumen', description: 'Sediakan lajur, sumber data dan format dalam langkah jana aliran anda.' },
        { title: 'Kumpulkan Data', description: 'Aliran logik anda mengumpul maklumat melalui perbualan.' },
        { title: 'Jana & Hantar', description: 'Dokumen dicipta dan dihantar kepada pelanggan — tiada langkah manual.' },
      ],
      useCases: [
        { title: 'Penjanaan Invois', description: 'Kumpulkan butiran pesanan dan jana invois profesional secara automatik.' },
        { title: 'Pembina Sebut Harga', description: 'Lalui keperluan dan hasilkan dokumen sebut harga berformat.' },
        { title: 'Penyusunan Laporan', description: 'Kumpulkan titik data melalui sembang dan susunkannya menjadi laporan berstruktur.' },
      ],
    },
    'super-powers': {
      title: 'Kuasa Hebat',
      shortTitle: 'Kuasa Hebat',
      headline: 'Ejen AI Anda Mempunyai Kuasa Hebat',
      description:
        'Analisis penglihatan, carian web, pembacaan web dan akses dokumentasi GitHub — semuanya tersedia sebagai keupayaan yang ejen AI anda boleh gunakan semasa perbualan.',
      metaDescription: 'Analisis penglihatan, carian web, pembacaan web dan akses dokumentasi GitHub untuk ejen AI WhatsApp anda. Kuasa hebat untuk perniagaan anda.',
      benefits: [
        { title: 'Analisis Penglihatan', description: 'Pelanggan menghantar foto dan AI anda memahaminya — produk, dokumen, tangkap layar, apa sahaja.' },
        { title: 'Carian Web', description: 'AI anda boleh mencari web untuk maklumat masa nyata bagi menjawab soalan dengan tepat.' },
        { title: 'Pembaca Web', description: 'Ekstrak dan ringkaskan kandungan dari mana-mana URL yang dikongsi pelanggan anda.' },
      ],
      howItWorks: [
        { title: 'Dayakan Kuasa Hebat', description: 'Aktifkan Penglihatan, Carian Web, Pembaca Web atau Zread dalam tetapan anda.' },
        { title: 'Bina Aliran', description: 'Tambah langkah penglihatan untuk menganalisis imej, atau langkah carian web untuk mendapatkan data masa nyata.' },
        { title: 'Sampaikan Jawapan', description: 'AI anda menggunakan keupayaan ini semasa perbualan untuk memberikan jawapan lebih baik.' },
      ],
      useCases: [
        { title: 'Pengenalan Produk', description: 'Pelanggan menghantar foto produk dan mendapat pengenalan serta harga serta-merta.' },
        { title: 'Pemprosesan Dokumen', description: 'Ekstrak teks daripada foto invois, resit atau kontrak.' },
        { title: 'Carian Masa Nyata', description: 'Cari web untuk harga semasa, ketersediaan atau berita untuk menjawab soalan.' },
      ],
    },
  },

  industries: {
    ecommerce: {
      title: 'E-dagang',
      headline: 'Jadikan WhatsApp Saluran Jualan Teratas Anda',
      description: 'Automatikkan pertanyaan produk, kemas kini pesanan, permintaan pemulangan dan pemulihan troli ditinggalkan. Ejen AI anda mengendalikan keseluruhan perjalanan pelanggan di WhatsApp.',
      metaDescription: 'AI WhatsApp untuk e-dagang. Automatikkan pertanyaan produk, jejak pesanan, pemulangan dan sokongan pelanggan.',
      painPoints: [
        'Pelanggan meninggalkan troli apabila tidak dapat jawapan pantas',
        'Pasukan sokongan dibanjiri pertanyaan "di mana pesanan saya"',
        'Tiada cara untuk mencapai pelanggan di saluran kegemaran mereka',
      ],
      useCases: [
        { title: 'Pembantu Katalog Produk', description: 'Pelanggan menyifatkan apa yang mereka perlukan dan AI anda menyorkan produk yang betul dengan harga dan ketersediaan.' },
        { title: 'Jejak Pesanan', description: 'Kemas kini status pesanan serta-merta apabila pelanggan tanya "di mana pesanan saya?"' },
        { title: 'Pemprosesan Pemulangan', description: 'Pandu pelanggan melalui proses pemulangan dengan aliran automatik dan penjanaan dokumen.' },
      ],
    },
    healthcare: {
      title: 'Penjagaan Kesihatan',
      headline: 'Komunikasi Pesakit Lebih Baik, Kerja Pentadbiran Lebih Sedikit',
      description: 'Automatikkan penjadualan janji temu, pertanyaan preskripsi dan susulan pesakit. Reka bentuk berkesedaran HIPAA dengan komunikasi selamat dan tersulit.',
      metaDescription: 'AI WhatsApp untuk penjagaan kesihatan. Automatikkan penjadualan janji temu, susulan pesakit dan pertanyaan preskripsi.',
      painPoints: [
        'Talian telefon sesak dengan permintaan janji temu',
        'Kakistangan menghabiskan jam untuk panggilan penjadualan berulang',
        'Pesakit sukar menghubungi anda di luar waktu perniagaan',
      ],
      useCases: [
        { title: 'Penjadualan Janji Temu', description: 'Pesakit menempah, menjadualkan semula atau membatalkan janji temu melalui WhatsApp dengan integrasi Google Kalendar.' },
        { title: 'Pertanyaan Preskripsi', description: 'Respons automatik tentang isi semula preskripsi, arahan dos dan waktu farmasi.' },
        { title: 'Triage Pesakit', description: 'Aliran logik memandu pesakit melalui semakan gejala dan mengarahkan mereka ke jabatan yang betul.' },
      ],
    },
    education: {
      title: 'Pendidikan',
      headline: 'Jawab Setiap Soalan Pelajar dan Ibu Bapa serta-merta',
      description: 'Automatikkan pertanyaan pendaftaran, maklumat kursus, carian jadual dan peringatan pembayaran yuran. AI anda mengendalikan ribuan pelajar tanpa bersusah payah.',
      metaDescription: 'AI WhatsApp untuk pendidikan. Automatikkan pertanyaan pendaftaran, maklumat kursus dan komunikasi pelajar.',
      painPoints: [
        'Kakistangan dibanjiri soalan pendaftaran berulang',
        'Ibu bapa tidak boleh menghubungi pengambilan pada musim puncak',
        'Pelajar perlukan jawapan di luar waktu pejabat',
      ],
      useCases: [
        { title: 'Pembantu Pengambilan', description: 'Jawab butiran program, keperluan kemasukan dan pertanyaan status permohonan secara automatik.' },
        { title: 'Maklumat Kursus', description: 'Pelajar mendapat butiran serta-merta tentang jadual, silibus dan maklumat pengajar.' },
        { title: 'Peringatan Yuran', description: 'Peringatan pembayaran automatik dan maklumat rancangan ansuran melalui WhatsApp.' },
      ],
    },
    'real-estate': {
      title: 'Hartanah',
      headline: 'Melayakkan Bakal Pelanggan dan Menjadualkan Lawatan secara Autopilot',
      description: 'Tangkap pertanyaan hartanah, layakkan pembeli, jadualkan lawatan dan hantar dokumen hartanah — semuanya automatik melalui WhatsApp.',
      metaDescription: 'AI WhatsApp untuk hartanah. Layakkan bakal pelanggan, jadualkan lawatan dan hantar dokumen hartanah secara automatik.',
      painPoints: [
        'Ratusan pertanyaan hartanah tetapi sedikit bakal pelanggan yang layak',
        'Menjadualkan lawatan adalah mimpi buruk berbalik-balik',
        'Tidak boleh membalas pertanyaan cukup pantas sebelum mereka berpindah',
      ],
      useCases: [
        { title: 'Padanan Hartanah', description: 'Pembeli menyifatkan hartanah idaman dan AI anda menyorkan senarai sepadan dengan foto dan butiran.' },
        { title: 'Penjadual Lawatan', description: 'Tempahan kalendar automatik untuk lawatan hartanah dengan peringatan dan pengesahan.' },
        { title: 'Penghantaran Dokumen', description: 'Auto-jana dan hantar brosur hartanah, pelan lantai dan senarai harga sebagai dokumen PDF.' },
      ],
    },
    hospitality: {
      title: 'Perhotelan',
      headline: 'Santuni Tetamu Sebelum Mereka Tiba',
      description: 'Automatikkan pengesahan tempahan, permintaan perkhidmatan bil, cadangan concierge dan maklum balas tetamu. WhatsApp ialah kaunter baharu.',
      metaDescription: 'AI WhatsApp untuk perhotelan. Automatikkan tempahan, perkhidmatan concierge dan komunikasi tetamu.',
      painPoints: [
        'Tetamu mengharapkan respons serta-merta pada bila-bila masa',
        'Permintaan concierge hilang antara syif',
        'Pengumpulan maklum balas selepas penginapan tidak konsisten',
      ],
      useCases: [
        { title: 'Pembantu Tempahan', description: 'Tetamu menyemak ketersediaan, menempah bil dan mendapat pengesahan serta-merta melalui WhatsApp.' },
        { title: 'Perkhidmatan Concierge', description: 'Cadangan berkuasa AI untuk restoran, aktiviti dan pengangkutan.' },
        { title: 'Maklum Balas Tetamu', description: 'Kajian selepas penginapan automatik dan permintaan ulasan untuk meningkatkan reputasi dalam talian anda.' },
      ],
    },
    restaurants: {
      title: 'Restoran',
      headline: 'Terima Pesanan dan Tempahan Tanpa Mengangkat Telefon',
      description: 'Pesanan WhatsApp, pengurusan tempahan, pertanyaan menu dan kemas kini penghantaran — semuanya dikendalikan automatik manakala kakitangan anda fokus pada makanan.',
      metaDescription: 'AI WhatsApp untuk restoran. Terima pesanan, urus tempahan dan kemas kini pelanggan secara automatik.',
      painPoints: [
        'Telefon berdering tidak berhenti pada waktu puncak',
        'Kakitangan tidak boleh mengendalikan pesanan dan tempahan serentak',
        'Pelanggan ingin melihat menu sebelum memesan',
      ],
      useCases: [
        { title: 'Pembantu Menu', description: 'Pelanggan melayari menu, bertanya tentang bahan dan mendapat maklumat pemakanan serta-merta.' },
        { title: 'Tempahan Meja', description: 'Tempahan meja automatik dengan tarikh, masa, saiz kumpulan dan permintaan khas.' },
        { title: 'Kemas Kini Pesanan', description: 'Kemas kini status penghantaran dan pengambilan masa nyata dihantar proaktif melalui WhatsApp.' },
      ],
    },
    fitness: {
      title: 'Kecergasan',
      headline: 'Pastikan Ahli Terlibat dan Menempah Kelas Sepanjang Masa',
      description: 'Automatikkan tempahan kelas, pertanyaan keahlian, carian jadual dan tip senaman. Jurulatih peribadi AI anda tidak pernah berehat.',
      metaDescription: 'AI WhatsApp untuk studio kecergasan. Automatikkan tempahan kelas, pertanyaan keahlian dan penglibatan ahli.',
      painPoints: [
        'Permintaan tempahan kelas membanjiri kakitangan kaunter',
        'Ahli bertanya soalan yang sama tentang jadual dan harga',
        'Ketidakhadiran memakan hasil tanpa sistem peringatan',
      ],
      useCases: [
        { title: 'Tempahan Kelas', description: 'Ahli melihat jadual, menyemak ketersediaan dan menempah kelas terus dalam WhatsApp.' },
        { title: 'Maklumat Keahlian', description: 'Jawapan serta-merta tentang rancangan, harga, kemudahan dan kelebihan keahlian.' },
        { title: 'Tip Senaman', description: 'Nasihat kecergasan berkuasa AI dan cadangan senaman berdasarkan matlamat ahli.' },
      ],
    },
    'professional-services': {
      title: 'Perkhidmatan Profesional',
      headline: 'Kurangkan Masa untuk Pentadbiran, Lebih Banyak Masa untuk Pelanggan',
      description: 'Automatikkan intake pelanggan, penjadualan janji temu, pengumpulan dokumen dan kemas kini kemajuan. Perkhidmatan profesional, dikuasakan oleh kecekapan AI.',
      metaDescription: 'AI WhatsApp untuk perkhidmatan profesional. Automatikkan intake pelanggan, penjadualan dan komunikasi.',
      painPoints: [
        'Intake pelanggan mengambil terlalu banyak berbalik-balik',
        'Konflik penjadualan membuang masa semua orang',
        'Pelanggan mengharapkan komunikasi lebih pantas daripada yang anda boleh beri',
      ],
      useCases: [
        { title: 'Intake Pelanggan', description: 'Aliran automatik mengumpul maklumat pelanggan, butiran kes dan dokumen diperlukan.' },
        { title: 'Pengurusan Janji Temu', description: 'Jadualkan, jadualkan semula dan hantar peringatan untuk mesyuarat pelanggan melalui Google Kalendar.' },
        { title: 'Kemas Kini Status', description: 'Pastikan pelanggan dimaklumkan dengan kemas kini kemajuan automatik dan pemberitahuan pencapaian.' },
      ],
    },
    automotive: {
      title: 'Automotif',
      headline: 'Daripada Uji Pandu hingga Peringatan Servis — Semua di WhatsApp',
      description: 'Automatikkan pertanyaan kenderaan, tempahan uji pandu, janji temu servis dan peringatan penyelenggaraan. Showroom anda tidak pernah tutup.',
      metaDescription: 'AI WhatsApp untuk automotif. Automatikkan pertanyaan kenderaan, tempahan uji pandu dan peringatan servis.',
      painPoints: [
        'Ratusan pertanyaan kenderaan tetapi tiada masa untuk membalas semua',
        'Penjadualan janji temu servis adalah manual dan mudah salah',
        'Pelanggan lupa jadual penyelenggaraan dan anda kehilangan hasil',
      ],
      useCases: [
        { title: 'Bot Pertanyaan Kenderaan', description: 'Pelanggan bertanya tentang model, spesifikasi, harga dan ketersediaan — semua dijawab serta-merta.' },
        { title: 'Tempahan Uji Pandu', description: 'Penjadualan uji pandu automatik dengan integrasi kalendar dan peringatan.' },
        { title: 'Peringatan Servis', description: 'Peringatan penyelenggaraan proaktif berdasarkan jarak mileage dan selang masa.' },
      ],
    },
  },

  solutions: {
    marketing: {
      title: 'Untuk Pemasaran',
      headline: 'Jadikan WhatsApp Saluran Pemasaran Terbaik Anda',
      description:
        'Tangkap bakal pelanggan, asuh prospek dan dorong penukaran melalui WhatsApp — di mana pelanggan anda benar-benar memberi perhatian. Automatikkan kempen, jejak keputusan dan kembangkan khalayak anda.',
      metaDescription: 'Jadikan WhatsApp saluran pemasaran paling berkesan anda. Tangkap bakal pelanggan, automatikkan kempen dan dorong penukaran.',
      painPoints: [
        { title: 'Boleh saya capai pelanggan yang benar-benar memberi perhatian?', description: 'Pemasaran e-mel purata kadar pembukaan 20%. WhatsApp memberikan 98% — mesej anda benar-benar dilihat.' },
        { title: 'Boleh saya balas bakal pelanggan sebelum mereka berpindah?', description: 'Setiap minit kelewatan mengurangkan penukaran bakal pelanggan sebanyak 10%. AI anda balas serta-merta, 24/7.' },
        { title: 'Boleh saya memperibadikan setiap mesej tanpa mengupah lebih ramai orang?', description: 'Menghantar mesej generik yang sama kepada semua? AI menjadikan setiap interaksi berasa peribadi.' },
      ],
      features: [
        { title: 'Kempen WhatsApp', description: 'Hantar mesej siaran tertentu dengan kempen berasaskan templat.' },
        { title: 'Aliran Tangkapan Bakal Pelanggan', description: 'Aliran automatik yang melayakkan dan menangkap maklumat bakal pelanggan.' },
        { title: 'Pemasaran Pangkalan Pengetahuan', description: 'Syorkan produk dan jawapan promosi dalam Soal Jawab anda.' },
        { title: 'Analitik', description: 'Jejak prestasi kempen, volum mesej dan kadar penukaran.' },
      ],
      stats: [{ label: 'Kadar Pembukaan WhatsApp' }, { label: 'Penglibatan Lebih Tinggi' }, { label: 'Klik-Tertinggi Lebih Baik' }],
    },
    sales: {
      title: 'Untuk Jualan',
      headline: 'Tutup Perjanjian Lebih Pantas di WhatsApp',
      description:
        'Layakkan bakal pelanggan secara automatik, jadualkan janji temu, hantar sebut harga dan cadangan, dan tutup perjanjian — semuanya melalui WhatsApp. Ejen jualan AI anda bekerja sepanjang masa.',
      metaDescription: 'Tutup perjanjian lebih pantas di WhatsApp. Layakkan bakal pelanggan, tempah janji temu, jana sebut harga dan tukar sepanjang masa.',
      painPoints: [
        { title: 'Boleh saya tangkap bakal pelanggan selepas waktu?', description: 'Bakal pelanggan datang selepas waktu dan menjadi sejuk menjelang pagi. AI melibatkan mereka serta-merta, pada bila-bila masa.' },
        { title: 'Boleh saya berhenti membuang masa pada bakal pelanggan tidak layak?', description: 'Jam dibazirkan pada bakal pelanggan tidak layak. Aliran logik melayakkan secara automatik supaya anda fokus pada prospek panas.' },
        { title: 'Boleh saya hantar sebut harga dan cadangan dalam saat?', description: 'Jana dan hantar sebut harga, cadangan dan invois profesional terus daripada perbualan.' },
      ],
      features: [
        { title: 'Aliran Kelayakan Bakal Pelanggan', description: 'Aliran berbilang langkah automatik yang menjaring dan melayakkan bakal pelanggan sebelum pasukan anda terlibat.' },
        { title: 'Tempahan Janji Temu', description: 'Integrasi Google Kalendar membolehkan pelanggan menempah mesyuarat terus dalam sembang.' },
        { title: 'Penjanaan Dokumen', description: 'Auto-jana sebut harga, invois dan cadangan daripada data perbualan.' },
        { title: 'Serah Manusia', description: 'Pindah lancar kepada wakil jualan apabila bakal pelanggan sedia untuk menutup.' },
      ],
      stats: [{ label: 'Kitaran Jualan Lebih Pendek' }, { label: 'Respons Lebih Pantas' }, { label: 'Tangkapan Bakal Pelanggan' }],
    },
    support: {
      title: 'Untuk Sokongan',
      headline: 'Sokongan Berkuasa AI yang Tidak Pernah Tidur',
      description:
        'Selesaikan 80% pertanyaan sokongan secara automatik dengan AI yang tahu perniagaan anda sebaik-baiknya. Eskalasi isu kompleks kepada manusia dengan lancar. Pelanggan anda mendapat bantuan serta-merta, pada bila-bila masa.',
      metaDescription: 'Sokongan WhatsApp berkuasa AI yang tidak pernah tidur. Selesaikan 80% pertanyaan secara automatik dengan respons serta-merta dan tepat.',
      painPoints: [
        { title: 'Boleh saya berhenti menjawab soalan yang sama berulang kali?', description: 'Soalan berulang memakan masa ejen. AI mengendalikan rutin supaya manusia mengendalikan yang kompleks.' },
        { title: 'Boleh saya tawarkan sokongan sepanjang masa?', description: 'Pelanggan perlukan bantuan pada pukul 11 malam. Ejen AI anda sentiasa tersedia dengan jawapan tepat.' },
        { title: 'Boleh saya selesaikan isu dalam saat, bukan jam?', description: 'Pelanggan menunggu jam untuk balasan e-mel. Sokongan WhatsApp memberikan jawapan dalam saat.' },
      ],
      features: [
        { title: 'Pangkalan Pengetahuan', description: 'Sistem Soal Jawab komprehensif yang mengendalikan soalan biasa serta-merta.' },
        { title: 'Eskalasi Pintar', description: 'AI tahu bila untuk menyerah kepada manusia. Peralihan lancar, tiada konteks hilang.' },
        { title: 'Peti Masuk Pasukan', description: 'Pantau semua perbualan, masuk apabila perlu dan jejak metrik respons.' },
        { title: 'Kuasa Hebat', description: 'Analisis penglihatan untuk sokongan berasaskan foto, carian web untuk jawapan masa nyata.' },
      ],
      stats: [{ label: 'Pertanyaan Auto-Selesai' }, { label: 'Beban Kerja Ejen Lebih Rendah' }, { label: 'Masa Respons' }],
    },
  },

  testimonials: {
    'Sarah Chen': {
      role: 'Pengurus Operasi',
      company: 'TechStyle Retail',
      quote: 'Kami beralih daripada membalas 200 pertanyaan pelanggan sehari secara manual kepada mengendalikan 500+ dengan AI. Pangkalan pengetahuan disediakan dalam kurang sejam dan ia berfungsi sahaja.',
    },
    'Marcus Rodriguez': {
      role: 'Pengasas',
      company: 'FitZone Studios',
      quote: 'Kadar tidak hadir kami menurun 60% selepas menetapkan tempahan kelas automatik dan peringatan di WhatsApp. Ahli suka keselesaannya.',
    },
    'Priya Sharma': {
      role: 'Ketua Kejayaan Pelanggan',
      company: 'CloudServe Solutions',
      quote: 'Aliran logik itu luar biasa. Kami membina sistem kelayakan bakal pelanggan lengkap dalam sehari. Yang dulu mengambil pasukan jualan kami 30 minit setiap bakal pelanggan kini mengambil 30 saat.',
    },
  },

  videoTitles: {
    dBVjaErhWaY: 'Sepasang Tangan Bantuan',
    '5KMPyUHWv5Q': 'Ketenteraman Fikiran',
    zE9qm2tiUdA: 'Teka Bahasa?',
    NtqHXkjI_uk: 'Peluang Hilang',
  },
};

export default ms;
