# 👥 AI resume screening with Gmail, GPT-4o & Google Sheets - automated hiring pipeline

> ⚡ **592 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Resume Screening with GPT-4o & Google Drive - Automated Hiring Pipeline

## How it works

Transform your hiring process with this intelligent automation that screens resumes in minutes, not hours. The workflow monitors your Gmail inbox, processes resume attachments using AI analysis, and delivers structured candidate evaluations to a centralized Google Sheets dashboard.

**Key workflow steps:**
1. **Email Detection** - Monitors Gmail for resume attachments (PDF, DOCX, TXT)
2. **File Processing** - Uploads to Google Drive and extracts text content
3. **AI Analysis** - GPT-4o evaluates candidates against job requirements
4. **Data Extraction** - Pulls contact info and key qualifications automatically
5. **Results Logging** - Saves structured analysis to Google Sheets for team review

## Set up steps

**Total setup time: 15-20 minutes**

### Required Credentials (5 minutes)
- Gmail account with OAuth2 access
- Google Drive API credentials
- Google Sheets API access
- OpenAI API key for GPT-4o

### Configuration Steps (10 minutes)
1. **Connect Gmail trigger** - Authorize email monitoring
2. **Set up Google Drive folder** - Choose destination for resume files
3. **Create tracking spreadsheet** - Copy the provided Google Sheets template
4. **Add OpenAI credentials** - Insert your API key for AI analysis
5. **Customize job description** - Update the role requirements in the "Job Description" node

### Optional Customization (5 minutes)
- Modify AI scoring criteria in the recruiter prompt
- Adjust candidate information extraction fields
- Customize Google Sheets column mapping

**No coding required** - All configuration happens through the n8n interface using pre-built nodes and simple dropdown selections.

## Template Features

**Smart File Handling**
- Supports PDF, Word documents, and plain text resumes
- Automatic format conversion and text extraction
- Intelligent routing based on file type

**AI-Powered Analysis**
- GPT-4o evaluation against job requirements
- Structured scoring with strengths/weaknesses breakdown
- Risk and opportunity assessment for each candidate
- Actionable next-steps recommendations

**Seamless Integration**
- Direct Gmail inbox monitoring
- Automatic Google Drive file organization
- Real-time Google Sheets dashboard updates
- Clean data extraction for CRM integration

**Professional Output**
- Standardized candidate scoring (1-10 scale)
- Detailed justification for each evaluation
- Contact information extraction
- Resume quality validation

Perfect for HR teams, recruiting agencies, and growing companies looking to streamline their hiring pipeline with intelligent automation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
