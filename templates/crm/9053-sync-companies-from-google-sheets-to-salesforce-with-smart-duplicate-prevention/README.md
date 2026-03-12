# 🤝 Sync companies from Google Sheets to Salesforce with smart duplicate prevention

> ⚡ **217 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
Automatically imports company data from Google Sheets into Salesforce while intelligently preventing duplicate accounts. The workflow searches for existing companies, creates new accounts only when needed, and ensures all contact information is properly associated.

Key features:
- Smart duplicate detection by company name matching
- Dual processing paths for new vs existing companies  
- Automatic contact creation and association
- Comprehensive error handling and data validation
- Professional sectional documentation with setup guides

## Set up steps
- Configure Google Sheets API credentials (OAuth 2.0)
- Set up Salesforce Connected App with Account/Contact permissions
- Prepare Google Sheets with proper column headers (Company Name, Email, Phone, Industry)
- Map Salesforce field requirements in workflow nodes
- Test with small dataset before full deployment

**Estimated setup time:** 15-30 minutes  
**Processing time:** 15-45 seconds per company

All detailed configuration steps, troubleshooting guides, and security best practices are included in the comprehensive sticky note documentation within the workflow.

## 🔗 Nodes Used

Google Sheets, Rename Keys, Salesforce

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
