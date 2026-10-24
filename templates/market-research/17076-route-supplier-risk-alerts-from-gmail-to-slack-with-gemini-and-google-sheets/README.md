# 📊 Route supplier risk alerts from Gmail to Slack with Gemini and Google Sheets

> ⚡ **22 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow monitors incoming Gmail messages from suppliers, uses Google Gemini to analyze sentiment and relationship risk, generates an engagement strategy for risky emails, sends an alert to Slack, and logs the analysis and recommended response to Google Sheets.

## How it works
1. Triggers every minute by checking Gmail for new incoming emails.
2. Filters out irrelevant messages (for example newsletters, unsubscribe emails, no-reply senders, and auto-replies) and keeps only valid supplier emails.
3. Extracts the sender, subject, and email snippet into a single text block and waits briefly to buffer processing.
4. Sends the email text to Google Gemini to return a structured JSON analysis with sentiment score/label, intent, urgency, key concern, and deterioration risk, then normalizes these fields and derives a trend.
5. Flags the interaction as high risk based on the deterioration risk value or a low sentiment score and waits briefly before continuing.
6. Uses Google Gemini to generate a concise engagement strategy (recommended action, draft opening message, and follow-up timeline), then parses it and formats a Slack-ready alert.
7. Sends the alert to a selected Slack user and appends the full analysis and strategy to a Google Sheets log for historical tracking.

## Setup
1. Connect your Gmail OAuth2 credentials and ensure the Gmail Trigger is monitoring the mailbox that receives supplier emails.
2. Add a Google Gemini (Google PaLM) API credential for the two Gemini steps (analysis and strategy generation).
3. Connect your Slack OAuth2 credential and select the user/channel destination for the alert message.
4. Connect your Google Sheets OAuth2 credential and update the target spreadsheet and sheet tab where the workflow appends the interaction log.

## Additional info
##  How To Customize Nodes

- **Gmail Trigger**
  - Change polling frequency  

- **Filter Node**
  - Modify filtering conditions based on business needs  

- **AI Prompt**
  - Add more analysis fields or adjust output format  

- **Risk Detection**
  - Adjust sentiment threshold  

- **Slack Node**
  - Send messages to a channel instead of a user  
  - Customize alert format  

- **Google Sheets**
  - Add additional columns such as urgency or trend 


##  Add-ons (Enhancements)

- Auto-reply to supplier emails  
- CRM integration (e.g., Salesforce or HubSpot)  
- Dashboard reporting using analytics tools  
- Escalation for high-risk suppliers  
- Multi-language support  
- Sentiment trend analytics  


##  Use Case Examples

1. Supplier complaint detection  
2. Vendor risk monitoring  
3. Customer support automation  
4. Supplier performance tracking  
5. Automated relationship management  

There can be many more use cases depending on business requirements.


##  Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| Gmail trigger not working | Incorrect OAuth setup | Reconnect Gmail credentials |
| AI parsing fails | Invalid JSON response | Ensure strict JSON prompt |
| Slack alert not sent | Wrong user ID | Verify Slack configuration |
| Google Sheets not updating | Incorrect sheet mapping | Check document ID and columns |
| Workflow stops unexpectedly | Node execution error | Review execution logs |
| Strategy fields empty | AI output format mismatch | Adjust parsing logic |


##  Need Help?

If you need help setting up this workflow, customizing it or extending its capabilities, professional support is available. Our [n8n workflow developers at **WeblineIndia**](https://www.weblineindia.com/hire-n8n-developers/) can assist you in building advanced automation workflows, integrating AI into your processes and scaling your business operations efficiently.

Feel free to reach out for customization, enhancements or [building business automation solutions](https://www.weblineindia.com/process-automation-solutions.html).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
