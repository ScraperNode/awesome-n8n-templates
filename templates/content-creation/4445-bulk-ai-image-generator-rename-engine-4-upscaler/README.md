# 🎬 Bulk AI Image Generator, Rename Engine & 4× Upscaler

> ⚡ **744 views** · 🎬 [Content Creation & Video](../)

## Description

[YOUTUBE GUIDE](https://www.youtube.com/watch?v=194qBpzZPGY&t=1s)
📣 This template generates up to **2,000 AI-based stock images per day** for under **$4**. It includes **prompt generation**, **image creation**, **metadata enrichment**, upload to **Google Drive**, and **error logging** — fully automated with minimal setup.

---

## 📌 **Who is this for?**

This workflow is designed for:

* **Stock image creators** and contributors
* **Agencies** managing visual content at scale
* **Solo creators** or marketers automating asset production
* Anyone aiming to populate image libraries (e.g., **Adobe Stock**, **Shutterstock**)

---

## ❓ **What problem is this workflow solving?**

Manually generating, naming, tagging, and uploading thousands of stock images is **time-consuming and expensive**. This automation solves that by:

* Generating **photorealistic images** via AI
* Auto-tagging with **rich metadata**
* Uploading them to structured **Google Drive folders**
* Logging progress and **capturing errors automatically**

---
## ⚙️ **What this workflow does**

* ✅ Generates **text prompts** from idea topics using **GPT**
* 🎨 Converts prompts into **4 images** each via the **Flux Schnell** model
* 📐 Resizes and compresses images for preview and final use
* 🧠 Uses **GPT-4o-mini** to generate metadata: **filename, title, category**, and **25 keywords**
* ☁️ Uploads to **Google Drive**, logs metadata to **Google Sheets**
* 🟢 Marks each prompt as completed
* 📲 Sends **Telegram alerts** for success and errors

---

## 🛠 **Setup**

1. **Google Sheets**

   * Sheet 1: `Ideas` — *New prompt topics*
   * Sheet 2: `Generated Pmts` — *Tracks generated prompts and status*
   * Sheet 3: `Error Logs` — *Execution error records*

2. **Google Drive**

   * A folder for **image uploads**
   * A folder for **copied daily spreadsheets**

3. **API Access**

   * **OpenAI GPT** (gpt-4o-mini)
   * **PIAPI** (Flux Schnell image model)

4. **Telegram Bot** *(optional but recommended)*

   * Real-time **status notifications**

---

## 🧩 **How to customize this workflow to your needs**

* 🔁 **Change frequency** of generation via trigger settings
* 🧠 **Swap models** if using a different image API
* 🧾 **Adjust metadata fields** or format rules
* 📤 **Redirect outputs** to Airtable, Notion, Dropbox, etc.

---
## 🗂️ **Categories**

* **AI**
* **Marketing**
* **Product**
* **Building Blocks**

---

## 🎁 **Bonus Feature**

This template includes a **bonus stock image renamer workflow** — ideal for renaming:

* 📸 Taken photos
* 🗃️ Existing stock libraries
* 🖼️ Downloaded image batches

It applies **SEO-friendly, consistent naming** compatible with major platforms like **Adobe Stock** and **Shutterstock**.

## 🔗 Nodes Used

Edit Image, Function, Google Sheets, HTTP Request, Telegram, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
