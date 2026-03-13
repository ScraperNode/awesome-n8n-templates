# 👥 Automate CV screening & candidate validation with AI & email parsing

> ⚡ **891 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This automated n8n workflow streamlines the process of screening CVs and validating candidate information using AI and email parsing. The system listens for new emails with CV attachments, extracts and processes the data, and either saves valid CVs to a target directory or notifies HR of invalid submissions.

## Good to Know
- The workflow improves efficiency by automating CV screening and validation.
- Ensures only CVs with essential fields (e.g., name, email, skills) are processed further.
- Email notifications alert HR to incomplete or invalid CVs for timely follow-up.
- The system pauses until all CV data is fully loaded to avoid processing errors.

## How It Works
1. **Trigger on New CV Email** - Detects new emails with CV attachments.
2. **Extract Text from PDF CV** - Parses content from attached PDF files.
3. **Ensure All CV Data Loaded** - Waits until all data is ready for processing.
4. **Parse & Structure CV Information** - Extracts structured details like name, skills, and experience using AI or custom logic.
5. **Check CV for Required Fields** - Verifies the presence of essential fields (e.g., name, email, skills).
6. **Save Valid CV to Folder** - Stores successfully validated CVs into a target directory.
7. **Notify HR of Invalid CV** - Sends an email alert for incomplete or invalid CVs.

## Data Sources
The workflow processes data from email attachments:
- **CV PDF Files** - Contains candidate information in PDF format.

## How to Use
- Import the workflow into n8n.
- Configure email account credentials for monitoring new CV emails.
- Set up a target directory for storing validated CVs.
- Test with sample CV PDFs to verify extraction and validation.
- Adjust AI or custom logic based on specific required fields.
- Monitor email notifications for invalid CVs and refine the process as needed.

## Requirements
1. Email account access with IMAP/POP3 support.
2. PDF parsing capabilities (e.g., OCR or text extraction tools).
3. AI or custom logic for data extraction and validation.
4. A target directory for storing validated CVs.

## Customizing This Workflow
- Modify the "Check CV for Required Fields" node to include additional required fields (e.g., education, certifications).
- Adjust the email notification format to include more details about invalid CVs.
- Integrate with HR software for seamless candidate tracking.

## Details
- The workflow ensures efficient CV screening by automating repetitive tasks.
- Notifications help maintain a high-quality candidate pool by addressing issues early.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
