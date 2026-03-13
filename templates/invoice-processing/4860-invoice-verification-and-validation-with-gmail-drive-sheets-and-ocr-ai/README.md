# 🧾 Invoice verification and validation with Gmail, Drive, Sheets and OCR AI

> ⚡ **604 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### 📝 **Description (Full, User-Centric & Sales-Driven):**

Tired of manually verifying purchase order invoices every single day? This **plug-and-play n8n automation template** saves your accounts team hours of work by automatically downloading, storing, extracting, and validating invoice data against your master item sheet — all without human intervention.

Perfect for **SMEs, startups, procurement teams, and accounts departments**, this automation handles **PO invoice verification** from **email to final validation** with 99% accuracy.

---

### 🚀 **What This Automation Does End-to-End:**

**📥 Invoice Retrieval & Organization:**

* Runs **Monday to Saturday, 8 hours/day**
* Reads **invoices from specific vendor email(s)** (e.g., `abc@company.com`)
* Extracts the **invoice date from the email subject**
* Automatically **creates month & day-wise folders** in Google Drive
* Uploads each invoice PDF into its respective folder

**🔍 AI + OCR Data Extraction & Validation:**

* Uses **OCR** to extract item data (name, quantity, rate, HSN, etc.) from each invoice PDF
* Converts messy PDF data into clean structured format using **AI Agent Model**
* Stores the data into a dedicated Google Sheet: **"Store Invoice Data"**

**✅ Invoice vs. Master Data Validation:**

* Automatically fetches a second Google Sheet: **"Store Master Data"**
* Compares each invoice item **line-by-line** with the master sheet:

  * Checks for **Item Code, Name, Price** mismatches
  * Calculates **price differences** and **total loss/gain per invoice**
  * Marks each line as **Matched / Mismatched** with notes

**📬 Final Reporting:**

* Sends an **automated summary email** once all invoices are processed
* Alerts if any mismatches found, allowing for early intervention

---

### 📂 Example Output:

Check how data is validated in real time:

* 🔗 [Store Invoice Data Sheet](https://docs.google.com/spreadsheets/d/1QRHs6lRAZ95u9KirjUSqtdTYxfYfCH_N_Uh80O_gm1Q/edit?usp=sharing)
* 🔗 [Store Master Data Sheet](https://docs.google.com/spreadsheets/d/1xRQ-WtNjNTGtkgNwnhjmXddDQq9n_gpXe5it2aBfZPI/edit?usp=sharing)

---

### 👥 Who Is This For?

* Accounts & Finance Teams
* Procurement Departments
* Growing Startups with Vendors
* ERP/Automation Enthusiasts
* Anyone tired of **manually checking vendor bills**

---

### 📦 What You’ll Get:

* Ready-to-import n8n workflow (JSON)
* Setup Guide (PDF or Notion link)
* Sample Google Sheet template
* Email + Google Drive + OCR setup guide
* AI Agent configuration tips
* BONUS: Customization support (optional)

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Schedule Trigger, AI Agent, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
