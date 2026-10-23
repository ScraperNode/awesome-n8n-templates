# 📊 Run automated SEO audits with Screaming Frog CLI, PageSpeed, PDF and Excel fixes

> ⚡ **418 views** · 📊 [Market Research & Insights](../)

## Description

### 💡 What this workflow does
Type `#Audit https://clientsite.com` in Slack. Walk away. Get a professional PDF report and a structured Excel fix sheet delivered to Google Drive and posted back in your Slack thread — fully automated, zero manual work. 

Built for SEO agencies and freelancers who deliver technical audits at scale.

**👇 Check out the deliverables:**
📄 **[View Sample PDF Report](https://drive.google.com/file/d/1BAXRB73bEg2G1kiE1trb9-j3nwBYJgxu/view?usp=sharing)**
📊 **[View Sample Excel Fix Sheet](https://docs.google.com/spreadsheets/d/1qDcqcGBwF6UXbv2zYOwr0QNTc0qQ9VGC/edit?usp=sharing&ouid=117021044678312583918&rtpof=true&sd=true)**

---

## 📦 What You Get
* **20–50 page PDF report:** Includes a health score, Core Web Vitals, broken links, On-Page SEO, issue cards with fix explanations, a priority action plan, and an SEO glossary.
* **Excel fix sheet:** 18 tabs (one per issue type), containing every URL and exact fix instructions — ready to hand off to a developer.
* **Cloud Storage:** Both files are saved to your Google Drive `/SEO Audits` folder automatically.
* **Slack Delivery:** Links to the generated files are posted directly back into your original Slack thread.

---

## ⚙️ How It Works
1. A **Slack message** containing `#Audit` and a URL triggers the workflow.
2. A POST request starts the crawl via your self-hosted **Screaming Frog CLI API** (built with Python + FastAPI, exposed publicly through a Cloudflare Tunnel — no static IP needed).
3. The workflow polls the API every 2 minutes until the status is `done`, `timeout`, or `failed`.
4. The crawl ZIP is downloaded and decompressed, triggering two simultaneous branches:
   * **Branch A (Executive Report):** SEO Audit Parser → PageSpeed Insights → PSI Parser → Report Builder → HTML to PDF → Google Drive.
   * **Branch B (Developer Sheet):** Full Data Parser → Tab Builder → Excel File Builder → Google Drive.
5. Both Google Drive links are merged, logged to a **Google Sheet**, and posted back into the **Slack thread**.

---

## 🛠️ Key Technical Features
* **Streaming CSV Parser:** Easily handles large crawl files up to 500MB without causing timeouts or memory crashes.
* **Smart File Optimization:** Auto-skips massive `all_inlinks.csv` and `all_anchor_text.csv` files (reduces the unzipped payload from ~450MB to ~15MB).
* **Advanced 403 Error Logic:** Splits 403 errors into three actionable categories: 
  * Your own site blocking the crawler (WAF/Cloudflare)
  * Known bot-blocked platforms (Twitter, Wikipedia)
  * Unknown external links requiring a manual check
* **Archive Page Filtering:** Removes tags, pagination, feeds, and search pages from all issue counts so your data isn't skewed.
* **Dynamic Health Score (0–100):** Algorithmically weighted by critical vs. warning issues.
* **Universal CMS Support:** Works flawlessly with WordPress, Blogger, Shopify, and any other crawlable CMS.

---

## 📋 What You Need

| Requirement | Notes |
| :--- | :--- |
| **Screaming Frog SEO Spider** | Licensed version (£199/year) required |
| **SF CLI API (Python/FastAPI)** | *Not included in this template* — Contact creator below |
| **Cloudflare Tunnel** | Free — exposes your local API publicly |
| **Google PageSpeed API Key** | Free from Google Cloud Console |
| **PDF Conversion Service** | Workflow is pre-configured for `pdfendpoint.com` |
| **Google Drive & Sheets** | OAuth2 credentials for file storage and audit logging |
| **Slack** | OAuth2 credentials for the trigger and delivery |
| **n8n (Self-Hosted)** | Recommended for long execution times |

### ⚠️ Required n8n Environment Variables
To ensure the workflow can process large sites without timing out, add these to your n8n `.env` file:
```bash
N8N_DEFAULT_BINARY_DATA_MODE=filesystem
EXECUTIONS_TIMEOUT=7200
N8N_RUNNERS_TASK_TIMEOUT=7200
NODE_OPTIONS=--max-old-space-size=8192
```

---

## 🚀 Quick Setup
1. **API Setup:** Deploy the SF CLI API on your Windows machine/server and expose it via Cloudflare Tunnel.
2. **Link the Crawler:** Update the `Start Crawl` node URL and Bearer token with your tunnel URL and API secret.
3. **PageSpeed Insights:** Replace the PSI API key in the `Page Speed Insights` HTTP node with your own.
4. **Cloud Storage:** Set your Google Drive Folder ID in both upload nodes, and your Google Sheets Spreadsheet ID in the `Append row` node.
5. **Branding:** 
   * In the `Report Builder` code node, update the `AGENCY` config object (around line 125) with your name, email, and tagline.
   * In the `Input Cleaner` node, set the `watermark` value to your agency's name.

---

## 📞 Support & Custom API Access
**Note:** The custom Python/FastAPI backend required to orchestrate Screaming Frog is not included in this JSON template. If you want to set up the complete system, please reach out:

📧 **Email:**[salmanmehboob1947@gmail.com](mailto:salmanmehboob1947@gmail.com)  
🔗 **LinkedIn:** [Salman Mehboob](https://linkedin.com/in/salman-mehboob-pro)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
