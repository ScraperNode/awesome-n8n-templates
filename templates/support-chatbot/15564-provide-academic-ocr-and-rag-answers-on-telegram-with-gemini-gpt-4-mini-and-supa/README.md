# 💬 Provide academic OCR and RAG answers on Telegram with Gemini, GPT-4 mini and Supabase

> ⚡ **76 views** · 💬 [Support Chatbots](../)

## Description

🛠️ How It Works: System Architecture
Workflow ini bekerja melalui empat lapisan proses utama yang terintegrasi secara otomatis:

1. Input Processing & Routing
Telegram Trigger: Menangkap setiap pesan masuk dari mahasiswa.

Smart Routing (Switch): Node Switch menganalisis tipe input. Jika input berupa perintah (/help, /cekstatus), teks biasa (pertanyaan), atau file gambar (formulir), workflow akan mengarahkannya ke jalur pemrosesan yang relevan.

2. Document Intelligence (OCR Path)
Image Extraction: Saat mahasiswa mengirim foto formulir, node "from File" menyiapkan data biner untuk dianalisis.

AI Vision Analysis: Menggunakan model Gemini (via HTTP Request) untuk membaca teks di dalam gambar dan mengekstraknya menjadi format JSON yang terstruktur (Nama, NIM, Judul, dll).

Database Sync: Data yang berhasil diekstrak secara otomatis disimpan ke baris baru di Google Sheets sebagai database utama program studi.

3. Knowledge Retrieval (RAG Path)
Knowledge Base Setup: File panduan akademik di Google Drive dipantau oleh trigger. Setiap ada file baru, sistem akan mengunduh, melakukan embedding, dan menyimpannya di Supabase Vector Store.

Contextual Answer: Jika mahasiswa bertanya, AI Agent akan mencari informasi yang paling relevan di Supabase terlebih dahulu, lalu menyusun jawaban berdasarkan dokumen resmi tersebut agar jawaban tetap akurat dan tidak "berhalusinasi".

4. Status Tracking & Memory
Personalized Status: Saat perintah /cekstatus dipanggil, AI Agent akan mengambil data spesifik mahasiswa tersebut dari Google Sheets dan merangkum kemajuan administrasi mereka dalam bahasa yang mudah dipahami.

Conversational Memory: Menggunakan Postgres Chat Memory untuk menyimpan riwayat percakapan sehingga mahasiswa bisa melakukan tanya jawab secara berkesinambungan tanpa kehilangan konteks.

Admin Logging: Semua aktivitas chat juga dicatat kembali ke Spreadsheet untuk keperluan audit dan monitoring oleh staf admin.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
