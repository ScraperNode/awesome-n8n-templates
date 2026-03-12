# 🧾 AI invoice agent

> ⚡ **1,578 views** · 🧾 [Invoice Processing](../)

## Description

---

# 📄 AI Invoice Agent

The **AI Invoice Agent** automates the **invoice creation, email delivery, and status tracking** process for client billing. It ensures invoices are generated, sent professionally, and updated in Google Sheets with minimal manual work.

---

## 🔹 How It Works

1. **Trigger**

   * Activated manually (`Execute Workflow`) when you want to process invoices.

2. **Fetch Invoices**

   * Reads client invoice data from a **Google Sheet (Client Invoices)**.

3. **Filter Pending Invoices**

   * Passes through only invoices with `Status = Pending`.

4. **Prepare Invoice Data**

   * Collects and formats details:

     * Invoice ID
     * Client Name & Address
     * Project Name
     * Amount (USD)
     * Invoice Date (today’s date)
     * Due Date (7 days later)

5. **Loop Over Invoices**

   * Processes each invoice **one by one**.

6. **AI Email Draft**

   * Uses **GPT-4.1-mini** to generate a **polite, professional email**.
   * Tone: friendly but business-oriented.
   * Signed as **Upward Engine Team**.

7. **Extract Email Parts**

   * Separates **subject** and **body** from the AI output using an **Information Extractor**.

8. **Generate Invoice PDF**

   * Uses **CraftMyPDF** to create a formatted **invoice PDF** with:

     * Company details (Upward Engine)
     * Client details
     * Invoice ID, Date, Due Date
     * Amount due
     * Footer message

9. **Send Email to Client**

   * Sends invoice email via **Gmail**, attaching the **PDF invoice**.

10. **Update Invoice Status**

    * Updates **Google Sheets** to mark the invoice as **Completed**.
    * Saves Invoice ID, Date, Due Date, and updated status.

11. **Loop Continuation**

    * Continues until all pending invoices are processed.

---

## 🔹 Tools & Integrations

* **Google Sheets** → Stores client & invoice data
* **Filter Node** → Selects only `Pending` invoices
* **GPT-4.1-mini (OpenAI)** → Generates professional emails
* **Information Extractor** → Separates subject & body
* **CraftMyPDF** → Creates PDF invoices
* **Gmail** → Sends invoice emails with PDF attachments

---

## 🔹 Example Workflow

✅ **Google Sheets:** Invoice marked as `Pending`
➡️ AI generates email → “Invoice INV-1023 for Web Design Project – Due Sep 5”
➡️ PDF invoice created & attached
➡️ Email sent to client with subject + body
➡️ Status updated in Google Sheet → `Completed`

---

⚡ This agent ensures **zero missed invoices**, **professional client communication**, and **up-to-date tracking** — fully automated for agencies and small businesses.

---

## 🔗 Nodes Used

Google Sheets, Gmail, Filter, AI Agent, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
