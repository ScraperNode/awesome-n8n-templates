# 🧾 Convert emailed timesheets into QuickBooks invoices with OCR, AI, Gmail and Sheets

> ⚡ **43 views** · 🧾 [Invoice Processing](../)

## Description

##   AI-Powered Timesheet → Invoice Automation (Gmail + OCR + AI + Google Sheets + QuickBooks) 

&gt; **Note:** This workflow uses **sticky notes extensively** to document each logical section of the automation. Sticky notes are mandatory and already included to explain OCR, AI parsing, folder logic, duplicate handling, and QuickBooks steps.

This workflow automates the full lifecycle of timesheet-based invoicing — from emailed timesheets to structured Google Sheets records and finalized invoices in QuickBooks Online.

It is designed for real-world billing scenarios, including split weeks across months, zero-hour months, duplicate prevention, and first-week-of-year edge cases.

---

##  What This Workflow Does

- Listens to Gmail for timesheet emails with attachments  
- Splits and processes each attachment independently  
- Extracts text using OCR (no hardcoded API keys)  
- Uses AI to parse **month-wise billable hours**  
- Correctly splits weeks spanning multiple months  
- Looks up Customer and PO details from Google Sheets  
- Organizes files in **Client → Employee → Year** folders in Google Drive  
- Reuses existing invoice sheets or creates new ones  
- Prevents duplicate invoice rows  
- Automatically finds or creates customers in QuickBooks  
- Creates invoices in QuickBooks using validated data  

---

##  High-Level Workflow Stages

1. Gmail Intake and Attachment Loop  
2. OCR Text Extraction  
3. AI-Based Timesheet Parsing  
4. Month Normalization and Validation  
5. Customer & PO Lookup  
6. Drive Folder Discovery and Creation  
7. Invoice Sheet Reuse or Creation  
8. Duplicate and Edge-Case Handling  
9. Append Invoice Rows to Google Sheets  
10. Create / Update Customers in QuickBooks  
11. Create Invoices in QuickBooks  

Each of these stages is clearly documented with **sticky notes inside the workflow canvas**.

---

##  Quick Setup Instructions

1. Import the workflow JSON into your n8n instance  
2. Configure credentials for:
   - Gmail  
   - Google Drive  
   - Google Sheets  
   - OpenAI or Google Gemini  
   - QuickBooks Online  
3. Verify the OCR HTTP node:
   - Default URL: `https://universal-file-to-text-extractor.vercel.app/extract`
   -  No hardcoded API keys are used  
4. Configure **Get Customer Info From PO Sheet**:
   - Spreadsheet ID  
   - Sheet name and column mappings  
5. Ensure the **Client Invoices** root folder exists in Google Drive  
6. Send a test timesheet email  
7. Execute the workflow once manually  
8. Activate the workflow  

---

##  Who This Workflow Is For

- Agencies and consultancies billing from emailed timesheets  
- Finance and operations teams using Google Workspace + QuickBooks  
- Staffing firms with monthly or bi-weekly contractor billing  
- Teams that want a fully auditable, zero-manual invoice process  

---

##  Requirements

- n8n instance  
- Gmail account receiving timesheet emails  
- Google Drive and Google Sheets  
- OpenAI or Google Gemini API  
- OCR API endpoint (configurable)  
- QuickBooks Online account  
- Customer PO Google Sheet containing:
  - Email  
  - Customer Name  
  - Company Name  
  - Customer Account Number  
  - PO Number  
  - Item  
  - Folder Name  
  - Invoice range  
  - Due Date Calculation  

---

##  How It Works (Detailed)

### 1. Email Intake and Attachment Loop

- Gmail Trigger polls for timesheet emails  
- Attachments are split so each file is processed independently  
- Sticky notes explain the intake and loop logic  

---

### 2. OCR Extraction

- Each attachment is sent to the OCR API  
- PDFs and images are converted to plain text  
- OCR logic is documented via sticky notes  

---

### 3. AI Timesheet Parsing (Month-Wise)

- AI extracts data **only** from BILLABLE HOURS sections  
- Outputs strict JSON:
  - Employee Name  
  - Client Name  
  - Month  
  - Year  
  - Week Start Date  
  - Week End Date  
  - Total Billable Hours  

**Special handling included:**
- Split weeks across months  
- Zero-hour months still included  
- No guessed or inferred dates  

---

### 4. Month Normalization and Validation

- AI output is normalized into a month array  
- Each month is processed independently  
- Invalid or zero-hour entries are skipped  

---

### 5. Customer and PO Lookup

- Sender email is matched in the PO sheet  
- Retrieved values drive:
  - Folder structure  
  - Invoice logic  
  - Due date calculation  

---

### 6. Google Drive Folder Structure

The workflow enforces a strict hierarchy:

Client Invoices
└── Client
└── Employee
└── Year


Missing folders are created automatically.

---

### 7. Invoice Sheet Naming and Search

- Sheet names are generated using:
  - Employee Name  
  - Month  
  - Year  
- Existing sheets are reused when found  
- Supports monthly and 15-day billing cycles  

---

### 8. Duplicate Prevention and Edge Cases

- Duplicate invoice rows are detected and skipped  
- January first-week edge case is handled explicitly  
- Safe re-runs are supported  

---

### 9. Google Sheets Invoice Rows

Each appended row includes:

- Customer Account Number  
- Invoice Date  
- Due Date  
- PO Number  
- Item Name  
- Quantity (Total Hours)  
- Period description  

---

### 10. QuickBooks Integration

- Searches for existing customers in QuickBooks  
- Creates customers automatically if missing  
- Creates invoices using:
  - Customer reference  
  - Item  
  - Quantity  
  - Invoice date  
  - Due date  

All QuickBooks logic is documented with sticky notes.

---

##  How To Customize

- Swap AI model (OpenAI ↔ Gemini)  
- Extend prompts to extract:
  - Project  
  - Cost center  
  - Approval status  
- Add tax codes, currency, or unit pricing  
- Modify folder naming rules  
- Insert approval steps before invoice creation  

---

##  Common Use Cases

- Monthly contractor invoicing  
- Agency billing across multiple clients  
- Finance automation with audit-ready records  
- Eliminating manual timesheet-to-invoice work  

---

##  Troubleshooting

| Issue | Likely Cause |
|------|-------------|
| No invoices created | Gmail filter mismatch or email already read |
| OCR output empty | Unsupported file or OCR endpoint issue |
| Wrong month split | Review AI prompt and month logic |
| Duplicate rows | Duplicate detection conditions |
| Invoice missing in QuickBooks | Customer or item configuration issue |

---

##  Notes on Community Guidelines

-  Sticky notes are used throughout the workflow  
-  No hardcoded API keys are present  
-  Markdown is used (no HTML tags)  
-  This workflow is original and not copied  

---

##  Need Help or Customization?

**Digital Biz Tech** can help tailor this workflow to your business.

We offer **free setup support**, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.
 

You can also DM us on LinkedIn.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, QuickBooks Online, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
