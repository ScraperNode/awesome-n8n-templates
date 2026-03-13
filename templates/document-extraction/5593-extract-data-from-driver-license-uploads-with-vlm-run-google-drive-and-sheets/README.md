# 🔬 Extract data from driver license uploads with VLM Run, Google Drive and Sheets

> ⚡ **407 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

## What this workflow does
1. **Monitors Google Drive** for new driver license image uploads
2. **Downloads and processes** images using VLM Run AI OCR
3. **Extracts key information** including license number, name, DOB, and dates  
4. **Saves structured data** to Google Sheets for instant access

## Setup
**Prerequisites:** Google Drive account, VLM Run API credentials, Google Sheets access, self-hosted n8n.
You need to install [VLM Run community node](https://www.npmjs.com/package/@vlm-run/n8n-nodes-vlmrun)

**Quick Setup:**
1. Configure Google Drive OAuth2 and create license upload folder
2. Add VLM Run [API credentials](https://app.vlm.run/dashboard)
3. Set up Google Sheets integration for data storage
4. Update folder/sheet IDs in workflow nodes
5. Test with sample license images and activate

## Perfect for
- Customer onboarding and identity verification
- KYC compliance and document processing
- HR employee verification and record keeping
- Insurance claim processing and validation
- Any business requiring license data extraction

## Key Benefits
- **Asynchronous processing** handles high-resolution images without timeouts
- **Multi-format support** for JPG, PNG, PDF, HEIC, WebP formats
- **Structured data output** ready for databases and integrations
- **Eliminates manual entry** saving hours of data input time
- **High accuracy OCR** with multi-state license support

## How to customize
**Extend by adding:**
* Address and additional field extraction
* Data validation and error checking
* Integration with CRM or customer databases  
* Email notifications for processing completion
* Audit trails and compliance reporting
* Duplicate detection and data deduplication

This workflow transforms manual license data entry into an automated, accurate, and compliant process, making identity verification seamless and reliable for your business operations.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
