# 🔬 Scan WhatsApp receipt photos and track expenses using Wati and GPT-4o

> ⚡ **65 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Transform messy receipt photos into a structured, searchable expense database in seconds. This workflow automates the entire journey from a WhatsApp message to a live Google Sheets entry by combining WATI for communication, OpenAI Vision for extraction, and automated reporting logic.

---

## 🎯 What This Workflow Does

Turns a simple WhatsApp photo or text command into a professional expense management system:

- 📝 **Captures Receipt Assets**  
  Receives an image or text command via WATI Trigger from the user's phone.

- 🚦 **Smart Message Routing**  
  A Switch node detects the input type:
  - **Image:** Routes to the AI scanning branch for receipt processing.
  - **Text ("report"):** Routes to the reporting branch to generate monthly summaries.

- 👁️ **Vision AI Analysis**  
  OpenAI GPT-4o "looks" at the receipt image to extract the merchant name, total amount, currency, and date.

- ☁️ **Base64 Data Processing**  
  A specialized Code node uses `getBinaryDataBuffer` to convert receipt images into a high-speed data URL, ensuring OpenAI always receives the actual image instead of a placeholder.

- 📊 **Automated Logging & Reporting**
  - **Logging:** Appends validated data to Google Sheets with automated month categorization.
  - **Reporting:** Aggregates totals by category and sends a visual dashboard back to WhatsApp.

---

## ✨ Key Features

- **Zero-Manual Entry:** AI extracts 100% of the data from the photo, including currency codes and spending categories.
- **Visual Progress Reports:** The workflow generates formatted WhatsApp reports with visual percentage bars (`███░░`).
- **Automatic Month Tracking:** Uses Luxon date expressions to derive "Month" names automatically from receipt dates.
- **Dual-Mode Trigger:** Handles both new expense logging and historical data retrieval within a single WhatsApp chat.
- **Robust Error Handling:** Includes logic to catch "filesystem" errors and ensure binary data is properly converted for the AI.

---

## 💼 Perfect For

- **Small Business Owners:** Tracking business expenses on the go without saving paper receipts.
- **Freelancers:** Quickly logging billable expenses for client reimbursement.
- **Personal Finance Users:** Maintaining a real-time budget directly from their primary messaging app.
- **Teams:** Allowing multiple employees to "WhatsApp" their receipts to a central company sheet.

---

## 🔧 What You'll Need

### Required Integrations

- **[WATI](https://www.wati.io/)** – To receive WhatsApp messages and send automated replies.

- **[OpenAI API](https://platform.openai.com/)** – GPT-4o Vision for image analysis and structured JSON extraction.

- **[Google Sheets](https://www.google.com/sheets/about/)** – To host the master expense database.

### Optional Customizations

- **Currency Conversion:** Add a node to convert all foreign expenses into your local currency automatically.
- **Budget Alerts:** Set a threshold to notify you via WhatsApp if your monthly total exceeds a specific limit.

---

## 🚀 Quick Start

1. **Import Template** – Copy the JSON and import it into your n8n instance.
2. **Set Credentials** – Connect your WATI, OpenAI, and Google Sheets accounts.
3. **Configure Sheet** – Ensure your Google Sheet has headers for:
   - `timestamp`
   - `phone`
   - `vendor`
   - `amount`
   - `currency`
   - `date`
   - `category`
   - `month`
4. **Test Scanning** – Send a photo of a receipt to your WATI number.
5. **Request Report** – Type `report` in WhatsApp to see your spending breakdown.

---

## 🎨 Customization Options

- **Category Mapping:** Modify the OpenAI prompt to use categories specific to your tax filing needs (e.g., "Office Supplies," "Travel").
- **Filtering Logic:** Adjust the Build Monthly Report code to show weekly instead of monthly summaries.
- **Multi-User Support:** The workflow is already built to filter data based on the sender's phone number.

---

## 📈 Expected Results

- 90% reduction in time spent on monthly expense reconciliation.
- 100% accuracy in date and amount extraction using GPT-4o Vision.
- Real-time visibility into spending habits without ever opening a spreadsheet.
- Zero lost receipts by logging them the moment they are received.

---

## 🏆 Use Cases

### Business Travel
A consultant snaps photos of taxi and meal receipts during a trip; by the time they land, their expense sheet is already populated and categorized.

### Personal Budgeting
A user types `report` at the end of the week to instantly see what percentage of their budget went to "Food" vs "Entertainment".

### Subscription Management
Upload screenshots of digital invoices to track monthly software costs and recurring bills.

---

## 💡 Pro Tips

- **Clear Lighting:** For best AI extraction, ensure the receipt text is clear and not folded.
- **Keyword Commands:** You can add more keywords like `summary` or `last week` by expanding the Route Message switch node.
- **JSON Validation:** The Parse & Validate node ensures that even if the AI adds extra text, only the clean data is saved.

---

Ready to automate your expenses? Import this template and connect your WATI number to start scanning receipts today!
```

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
