# 🎣 Qualify CSV leads, enrich emails, and deliver results with Google Sheets, Drive, WhatsApp, and GPT-5-NANO

> ⚡ **76 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This automated n8n workflow transforms raw CSV data into qualified, enriched lead databases with verified emails and AI-generated personalization. It processes uploaded CSV files through multiple validation, enrichment, and sorting stages before delivering organized results via Google Drive, WhatsApp, or Google Sheets.

## How It Works

### Stage 1: Data Intake & Normalization
1. **Form Submission**: User uploads a CSV/XLSX file and selects:
   - Delivery method (Google Drive, WhatsApp, or Google Sheets with processing)
   - Two personalization prompts for AI-generated messages
2. **Column Mapping**: The workflow automatically recognizes and standardizes 100+ column name variations into consistent fields
3. **Deduplication**: Removes duplicate entries by website URL and contact name
4. **Initial Filtering**: Identifies and flags invalid websites (social media profiles, link shorteners)

### Stage 2: Data Quality Routing
The workflow analyzes each record and routes it based on available data:

**Route A: Invalid Website** → Sends directly to "x Website" sheet

**Route B: No Website** → Verifies existing email and categorizes by validity

**Route C: Valid Website + Email** → Proceeds to email verification and enrichment

**Route D: Valid Website - Email** → Scrapes website to find email addresses.

### Stage 3: Email Discovery & Verification
For records needing enrichment:
1. **Website Scraping**: Fetches HTML content from company websites
2. **Email Extraction**: Uses regex patterns to identify email addresses
3. **AI Selection**: GPT-5-NANO chooses the most relevant email from multiple options
4. **Dual Verification**: 
   - Primary check via Reoon API (deliverability, SMTP, safety)
   - Backup verification if primary fails
5. **Personal Email Processing**: Separately validates personal emails when present

### Stage 4: Website Intelligence Gathering
Parallel to email processing:
- Extracts HTML title tags for company context
- Captures meta descriptions for business understanding
- Pulls H1 headings for content insight
- Handles scraping failures gracefully with empty placeholders

### Stage 5: Email Categorization Logic
Records are sorted into buckets:
- **+1 Email**: Has exactly one verified email (business OR personal OR newly found)
- **+2 Email**: Has two or more verified emails
- **Single Source Records**: Only business email OR only personal email

### Stage 6: AI Personalization
For records with verified emails:
1. **Context Assembly**: Combines name, company, job title, website metadata, industry, keywords
2. **AI Processing**: Sends to GPT-5-NANO or Gemini with user's custom prompts
3. **Structured Output**: Generates:
   - Cleaned contact name
   - Shortened company name
   - Personalization message 1 (per user prompt)
   - Personalization message 2 (per user prompt)

### Stage 7: Final Delivery
Based on user's initial selection:
- **Google Drive**: Uploads timestamped CSV, sends email with link
- **WhatsApp**: Converts to XLSX and sends document
- **Google Sheets**: Populates separate sheets by category with completion email

---

## How To Use

- Active n8n instance with required credentials:
  - Google Drive API access
  - Google Sheets API access
  - Gmail API access (for notifications)
  - WhatsApp Business API credentials
  - Reoon Email Verifier API keys
  - OpenAI API key (GPT-5-NANO)
  - Optional: Google Gemini API key

## Setup Steps

### 1. Configure Google Sheets Destinations
Create or use existing Google Sheets for data categorization:
- **+1 Email Sheet**: Update document ID in "+1 Email" node
- **+2 Email Sheet**: Update document ID in "+2 Email" node
- **x Website Sheet**: Update document ID in "x Website Data" node
- **No Website Sheet**: Update document ID in "- Website +- Email +- Phone Number" node

Ensure all sheets have matching column headers as defined in the workflow.

### 2. Set Up Google Drive Folder
- Create a destination folder in Google Drive
- Update the folder ID in the "Upload file" node
- Ensure the service account has write permissions

### 3. Configure WhatsApp
- Add your WhatsApp Business Phone Number ID in the "Send CSV" node
- Update the recipient phone number (format: +[country code][number])

### 4. Customize Email Notifications
- Update sender and recipient emails in "Send a message" and "Send a Success Message" nodes
- Modify email templates as needed

### 5. Verify API Keys
Check that all API credentials are active:
- Reoon Email Verifier keys (two instances for redundancy)
- OpenAI API key for GPT-5-NANO
- All Google API credentials

## 🔗 Nodes Used

Google Sheets, HTTP Request, Rename Keys, Google Drive, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
