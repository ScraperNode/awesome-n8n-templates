# 🔬 Extract timesheet data with Mistral OCR & Gmail human verification

> ⚡ **376 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## 📖 Description  

### 🔹 How it works  
This workflow introduces an **AI + Human-in-the-Loop pipeline** for employee timesheet management. It combines the power of **Google Drive, AI (OCR + LLM), and Gmail** with a **human review step** to ensure accuracy and compliance.  

1. **AI-Powered File Discovery**  
   - Scans a Google Drive folder for new or updated timesheet files (PDF, Word, Excel, Images).  

2. **AI Data Extraction**  
   - Uses OCR and LLM (Mistral) to intelligently read and extract structured data. 
   -  Supports **multiple formats**: PDF, Word (DOC/DOCX), Excel (XLS/XLSX), and Image files (JPG, PNG, scanned documents).   
   - Creates clean JSON with file details and timesheet logs (date, hours worked, tasks, notes).  

3. **Smart Data Formatting**  
   - Converts AI output into a **clear HTML summary table** for easy review.  
   - Flags potential anomalies (missing hours, duplicate dates, irregular entries).  

4. **Human-in-the-Loop Verification**  
   - Sends an approval email via Gmail containing:  
     - File metadata  
     - AI-generated HTML summary  
     - JSON attachment of raw extracted data  
   - HR/Managers review the summary and **approve/reject** before final actions occur.  

5. **Post-Approval Automation** *(optional)*  
   - Approved records can be saved in a separate Google Drive folder.  
   - Employees or HR receive confirmation emails.  

---

## ⚙️ Set up steps  

1. **Connect Credentials**  
   - Add Google Drive and Gmail credentials in n8n.  
   - Configure Mistral (or any LLM) API credentials. 

2. **Configure Google Drive**  
   - In the “Search files and folders” node, replace the `folderId` with your company’s timesheet folder ID.  

3. **Customize Extraction Schema**  
   - Sticky notes explain how JSON output is structured.  
   - Adapt it for your organization’s needs (e.g., overtime, project codes).  

4. **Set Up Human Verification Emails**  
   - Update Gmail node recipients to your HR or approval team.  
   - Customize the email body (AI summary + JSON file attached).  

5. **Activate & Test**  
   - Enable the workflow.  
   - Upload a sample timesheet to trigger the AI + human verification loop.  

---

  



⚡ **Result:** A robust **AI + Human-in-the-Loop workflow** that reduces repetitive data entry, prevents payroll errors, and gives HR full confidence before final approval.

## 🔗 Nodes Used

HTTP Request, Spreadsheet File, Google Drive, Gmail, AI Agent, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
