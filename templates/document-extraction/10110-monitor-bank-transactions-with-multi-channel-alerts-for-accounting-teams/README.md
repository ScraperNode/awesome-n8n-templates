# 🔬 Monitor bank transactions with multi-channel alerts for accounting teams

> ⚡ **457 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Enhance financial oversight with this automated n8n workflow. Triggered every 5 minutes, it fetches real-time bank transactions via an API, enriches and transforms the data, and applies smart logic to detect critical, high, and medium priority alerts based on error conditions, amounts, or risk scores. It sends multi-channel notifications via email and Slack, logs all data to Google Sheets, and generates summary statistics for comprehensive tracking. 💰🚨

### Key Features  
- Real-time monitoring every 5 minutes for instant alerts.  
- Smart prioritization (Critical, High, Medium) based on risk and errors.  
- Multi-channel notifications via email and Slack.  
- Detailed logging and summary reports in Google Sheets.  

### How It Works  
1. **Schedule Trigger**: Runs every 5 minutes.  
2. **Fetch Transactions**: HTTP request retrieves real-time transaction data.  
3. **API Error?**: If condition for error logic is met, sends error alert.  
4. **Enrich & Transform Data**: Advanced risk calculation enhances data.  
5. **Critical Alert?**: If condition (50% or risk &gt; 8) is met, raises alert.  
6. **High Priority?**: If condition (5% or risk &gt; 7) is met, raises alert.  
7. **Medium Priority?**: If condition is met, raises alert.  
8. **Log Priority to Sheet**: Google Sheets appends critical, high, or medium priority data.  
9. **Send Critical Email**: HTML email to execute sheets append.  
10. **Send High Priority Email**: Email to finance team.  
11. **Send High Priority Slack**: Slack notification to finance team.  
12. **Send Medium Priority Email**: Email to finance team.  
13. **Merge All Alerts**: Combines all alerts for comprehensive tracking.  
14. **Generate Summary Stats**: Code block for analytics.  
15. **Log Summary to Sheet**: Summary statistics storage.  

### Setup Instructions  
- Import the workflow into n8n and configure the bank API credentials in "Fetch Transactions."  
- Set up Google Sheets OAuth2 and replace the sheet ID for logging nodes.  
- Configure Gmail API Key and Slack Bot Token for alerts.  
- Test the workflow with sample transaction data exceeding risk or amount thresholds.  
- Adjust priority conditions (e.g., 50%, 5%, risk &gt; 8) based on your risk policy.  

### Prerequisites  
- Bank API access with real-time transaction data (e.g., https://api.bank.com)  
- Google Sheets OAuth2 credentials  
- Gmail API Key for email alerts  
- Slack Bot Token (with chat:write permissions)  
- Structured transaction data format  

**Google Sheet Structure:**  
1. Create a sheet with columns:  
   - Transaction ID  
   - Amount  
   - Date  
   - Risk Score  
   - Priority (Critical/High/Medium)  
   - Alert Sent  
   - Summary Stats  
   - Updated At  

### Modification Options  
- Adjust the "Schedule Trigger" interval (e.g., every 10 minutes).  
- Modify "Critical Alert?" and "High Priority?" conditions for custom thresholds.  
- Customize email and Slack templates with branded messaging.  
- Integrate with fraud detection tools for enhanced risk analysis.  
- Enhance "Generate Summary Stats" with additional metrics (e.g., average risk).  

**Discover more workflows – [Get in touch with us](https://www.oneclickitsolution.com/contact-us/)**

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
