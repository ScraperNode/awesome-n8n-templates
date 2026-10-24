# 🔬 Generate school report card PDFs and email them to parents with Gmail

> ⚡ **146 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow automates the complete lifecycle of student report card generation — from fetching raw marks data to delivering polished PDF reports directly to parents via email.

It is designed to be **scalable, idempotent, and production-ready**, making it suitable for schools, coaching institutes, and EdTech platforms.

---

## 🔄 Workflow Overview  

The workflow follows a structured pipeline:

1. Fetch student data  
2. Filter and loop through records  
3. Calculate results and generate report  
4. Convert to PDF  
5. Send email  
6. Update database  

---

## 🧠 Node-by-Node Explanation  

### 1. ▶️ Run Workflow Manually (Manual Trigger)  
This is the starting point of the workflow.  
- Used for testing and manual execution  
- Can be replaced with:
  - Cron (scheduled runs)
  - Webhook (trigger via form submission)

---

### 2. 📥 Get row(s) (Data Table)  
Fetches student records from the n8n Data Table.  
- Filters only rows where **Status is empty**  
- Ensures only students who haven't received reports are processed  
- Acts as the primary data source  

---

### 3. 🔁 Loop Over Students (Split In Batches)  
Processes students one at a time.  
- Prevents overload and improves stability  
- Useful for handling large datasets  
- Enables controlled execution flow  

---

### 4. 🚫 Skip Already Sent (IF Node)  
Checks if a report has already been sent.  
- Condition: `Status != "Sent"`  
- If already sent → skips the record  
- Prevents duplicate emails and reprocessing  

---

### 5. 📊 Calculate Grade and Remarks (Code Node)  
Core logic of the workflow.  

**What it does:**
- Extracts subject marks  
- Calculates:
  - Total marks  
  - Maximum marks  
  - Percentage  
- Assigns grade based on percentage:
  - A+, A, B, C, D  
- Generates:
  - Dynamic teacher remarks  
  - Subject-wise pass/fail status  
  - Attendance evaluation  

**Why it's powerful:**  
- Fully dynamic logic  
- Easy to customize grading system  
- Adds intelligence to raw data  

---

### 6. 🧾 Build HTML Report Card (Code Node)  
Generates a complete report card UI using HTML + CSS.  

**Includes:**
- School header  
- Student details  
- Subject-wise table  
- Total marks & grade  
- Attendance stats  
- Teacher remarks  
- Signature section  

**Output:**
- Clean HTML string  
- Styled for A4 PDF export  

---

### 7. 📄 Convert HTML to PDF (HTML to PDF Node)  
Converts the generated HTML into a downloadable PDF.  

- Uses external API (e.g., HTML to PDF) 
- Returns a **public PDF URL**  
- Ensures consistent formatting across devices  

---

### 8. 📧 Send a Message to Parents (Gmail Node)  
Sends the report card to parents via email.  

**Email includes:**
- Personalized greeting  
- Student name & exam details  
- Quick performance summary  
- Link to download/view PDF  

---

### 9. ⏱️ Wait 3 Seconds (Wait Node)  
Introduces a delay between emails.  

- Prevents API rate limits  
- Improves deliverability  
- Important when sending bulk emails  

---

### 10. ✅ Update row(s) (Data Table)  
Updates the student record after successful delivery.  

**Updates:**
- `Report_URL` → PDF link  
- `Sent_At` → timestamp  
- `Status` → "Sent"  

**Purpose:**
- Ensures tracking  
- Prevents duplicate processing  
- Maintains clean workflow state  

---

## 💡 Key Features  

- 🎯 Fully automated end-to-end workflow  
- 🧠 Smart grading and remark generation  
- 🧾 Professional PDF report card design  
- 🔁 Duplicate-safe processing  
- 📦 Scalable for bulk operations  
- 🛠️ Easily customizable  

---

## 🧩 Requirements  

- n8n Data Table (or Google Sheets alternative)  
- Gmail OAuth2 credentials  
- HTML → PDF API (HTML to PDF)  

---

## 🛠️ Customization Ideas  

- Add WhatsApp delivery (Twilio / Exotel)   
- Add school branding (logo, colors)  
- Include rank, topper list, or analytics  
- Replace manual trigger with webhook/form  

---

## 🎯 Use Cases  

- Schools & educational institutions  
- Coaching centers  
- EdTech platforms  
- Automated reporting systems  

---

## 🔥 Pro Tip  

You can turn this into a **SaaS product** by:  
- Adding a frontend form for schools  
- Connecting a database (Supabase / Airtable)  
- Charging per student/report generated

## 🔗 Nodes Used

Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
