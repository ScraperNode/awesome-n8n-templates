# 🎣 Automated email validation with Google Sheets, Hunter.io and EmailValidation.io

> ⚡ **195 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.

## Description

Streamline your email list hygiene with this automated validation workflow that monitors Google Sheets for new email entries and instantly verifies their deliverability. Perfect for maintaining clean contact databases, reducing bounce rates, and ensuring successful email marketing campaigns.

## Key Features
**📊 Real-Time Processing**

Monitors Google Sheets for new email entries every minute
Automatic validation triggers when emails are added
Instant deliverability status updates in the same spreadsheet

**🔍 Dual Validation Sources**

Hunter.io API for comprehensive email verification
EmailValidation.io API as backup validation service
Cross-verification for higher accuracy

**✅ Smart Filtering**

Skips empty email cells to prevent unnecessary API calls
Processes only valid email formats
Handles bulk email list uploads efficiently

**📈 Seamless Integration**

Updates original spreadsheet with validation results
Preserves existing data while adding deliverability status
No manual intervention required after setup

## Workflow Components
**Processing Flow:**

Google Sheets Trigger monitors for new rows
Filter removes empty email entries
Email extraction and formatting
Dual API validation (Hunter + EmailValidation.io)
Status processing and formatting
Automatic spreadsheet updates

**Use Cases**

Email Marketing: Clean lists before campaigns
Lead Generation: Validate new prospect emails
Database Maintenance: Regular email hygiene checks
CRM Integration: Ensure contact data quality

## Setup Requirements
**Required:**

Google Sheets with email column
Hunter.io API key
EmailValidation.io API key
Google Sheets OAuth2 credentials

**Benefits:**

Reduce email bounce rates
Improve sender reputation
Save costs on invalid email sends
Maintain clean contact databases

This workflow transforms manual email validation into an automated process, ensuring your email lists stay clean and deliverable without any manual effort.
Tags: email-validation, google-sheets, hunter-io, data-cleaning, automation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Hunter, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
