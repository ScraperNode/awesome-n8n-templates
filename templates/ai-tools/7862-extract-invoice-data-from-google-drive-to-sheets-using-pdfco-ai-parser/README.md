# 🎯 Extract invoice data from Google Drive to Sheets using PDF.co AI parser

> ⚡ **403 views** · 🎯 [AI Summarization & Classification](../)

## Description

This workflow looks inside a **Google Drive folder**, parses each PDF invoice with **PDF.co’s AI Invoice Parser**, and appends vendor, amount, dates, and a link to the file into a **Google Sheet**.

---

## ⚙️ Setup Instructions

### 1) Connect Google Drive (OAuth2)
1. In **n8n → Credentials → New → Google Drive (OAuth2)**  
2. Sign in to the Google account that owns your invoice PDFs and **allow access**.  
3. In the **Get Parent Folder ID** node, set your search to the folder name (e.g., `n8n Invoices`).  
4. In **Get Invoice ID’s**, ensure **Filter → folderId** uses the ID from the previous node (already wired in this template).

&gt; **Tip:** The workflow builds a Drive link like  
&gt; `https://drive.google.com/file/d/&lt;FILE_ID&gt;`  
&gt; Make sure those files are at least viewable via link (e.g., **Anyone with the link – Viewer**) so PDF.co can fetch them.

---

### 2) Connect PDF.co (AI Invoice Parser)
1. Create a **PDF.co** account and copy your **API Key**.  
2. In **n8n → Credentials → New → PDF.co API**, paste your key and **Save**.  
3. In the **AI Invoice Parser** node, keep **URL** mapped to the Drive link coming from **Convert to URL**. The node is already set to use your PDF.co credentials.

&gt; **What it does:** Sends each Drive file URL to PDF.co’s **AI Invoice Parser** and returns structured JSON (vendor, totals, dates, line items, etc.). The next **Set Fields** node maps those fields to simple columns for Sheets.

---

### 3) Connect Google Sheets (OAuth2)
1. In **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Log in with your Google account and **grant access**.  
3. In the **Store Data in Google Sheets** node, select your **Spreadsheet** and **Sheet** (this template is set to:  
   - Spreadsheet: `Invoice Template` (`1a6QBIQkr7RsZtUZBi87NwhwgTbnr5hQl4J_ZOkr3F1U`)  
   - Tab: `Due` (gid: `1002294955`)  
4. The node is configured to **Append or Update** by `Url` so repeats won’t duplicate.

**Expected columns on the `Due` tab:**
- `Url` (Drive link we generated)
- `Vendor`
- `Invoice Date`
- `Total`
- `Due Date`

---

## ▶️ How to Run
1. Put your PDF invoices in the **“n8n Invoices”** folder (or the folder name you used).  
2. Click **Execute Workflow** in n8n.  
3. Watch items flow:  
   - **Get Parent Folder ID** → finds folder  
   - **Get Invoice ID’s** → lists files in that folder  
   - **Convert to URL** → turns each file ID into a shareable link  
   - **AI Invoice Parser** → extracts JSON from each PDF  
   - **Set Fields** → maps fields for Sheets  
   - **Store Data in Google Sheets** → appends/updates the `Due` sheet

---

## 🧩 Troubleshooting
- **PDF.co can’t fetch the file:** Ensure your Drive file link is accessible (e.g., **Anyone with the link – Viewer**), or use a URL that PDF.co can reach.  
- **No rows added:** Confirm the **Google Sheets** credential is selected and the **Sheet tab** (gid) matches your target.  
- **Wrong folder:** Update the search string in **Get Parent Folder ID** to match your Drive folder name.

---

## 📬 Contact
Need help customizing this (e.g., auto-sharing Drive links, enriching the Sheet, or pushing to Slack/Email)?

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**

## 🔗 Nodes Used

Google Sheets, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
