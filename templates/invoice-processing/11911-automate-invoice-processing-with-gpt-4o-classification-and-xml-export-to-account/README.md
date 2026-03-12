# 🧾 Automate invoice processing with GPT-4o classification and XML export to accounting

> ⚡ **887 views** · 🧾 [Invoice Processing](../)

## Description

# Intelligent Invoice Processing with AI Classification and XML Export

## Summary
Automated invoice processing pipeline that extracts data from PDF invoices, uses AI Agent for intelligent expense categorization, generates XML for accounting systems, and routes high-value invoices for approval.

## Detailed Description
A comprehensive accounts payable automation workflow that monitors for new PDF invoices, extracts text content, uses AI to classify expenses and detect anomalies, converts to XML format for accounting system integration, and implements approval workflows for high-value or unusual invoices.

### Key Features
- **PDF Text Extraction**: Extract from File node parses invoice PDFs automatically
- **AI-Powered Classification**: AI Agent categorizes expenses, suggests GL codes, detects anomalies
- **XML Export**: Convert structured data to accounting-compatible XML format
- **Approval Workflow**: Route invoices over $5,000 or low confidence for human review
- **Multi-Trigger Support**: Google Drive monitoring or manual webhook upload
- **Comprehensive Logging**: Archive all processed invoices to Google Sheets

### Use Cases
- Accounts payable automation
- Expense report processing
- Vendor invoice management
- Financial document digitization
- Audit trail generation

### Required Credentials
- Google Drive OAuth (for PDF source folder)
- OpenAI API key
- Slack Bot Token
- Gmail OAuth
- Google Sheets OAuth

### Node Count: 24 (19 functional + 5 sticky notes)

### Unique Aspects
- Uses **Extract from File** node for PDF text extraction (rarely used)
- Uses **XML** node for JSON to XML conversion (very rare)
- Uses **AI Agent** node for intelligent classification
- Uses **Google Drive Trigger** for file monitoring
- Implements **approval workflow** with conditional routing
- **Webhook response** mode for API integration

### Workflow Architecture
```
[Google Drive Trigger]    [Manual Webhook]
         |                      |
         +----------+-----------+
                    |
                    v
           [Filter PDF Files]
                    |
                    v
           [Download Invoice PDF]
                    |
                    v
           [Extract PDF Text]
                    |
                    v
           [Parse Invoice Data] (Code)
                    |
                    v
           [AI Invoice Classifier] &lt;-- [OpenAI Chat Model]
                    |
                    v
           [Parse AI Classification]
                    |
                    v
           [Convert to XML]
                    |
                    v
           [Format XML Output]
                    |
                    v
           [Needs Approval?] (If)
              /           \
        Yes (&gt;$5000)    No (Auto)
             |              |
      [Email Approval]  [Slack Notify]
             |              |
             +------+-------+
                    |
                    v
           [Archive to Google Sheets]
                    |
                    v
           [Respond to Webhook]
```

### Configuration Guide
1. **Google Drive**: Set folder ID to monitor in Drive Trigger node
2. **Approval Threshold**: Default $5,000, adjust in "Needs Approval?" node
3. **Email Recipients**: Configure finance-approvers@example.com
4. **Slack Channel**: Set #finance-notifications for updates
5. **GL Codes**: AI suggests codes; customize in AI prompt if needed
6. **Google Sheets**: Configure document for invoice archive

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Drive, Gmail, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
