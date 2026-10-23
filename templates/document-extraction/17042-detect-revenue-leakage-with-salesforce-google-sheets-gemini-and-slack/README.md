# 🔬 Detect revenue leakage with Salesforce, Google Sheets, Gemini, and Slack

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually audits Closed Won Salesforce opportunities against billed amounts in Google Sheets, uses Google Gemini to analyze any revenue gap, then alerts a Slack user and writes an audit note back to the Salesforce opportunity.

## How it works
1. Starts when you run the workflow manually.
2. Fetches up to 20 Salesforce opportunities where the stage is "Closed Won" and processes them in batches with a short delay to reduce API pressure.
3. Looks up matching billing rows in Google Sheets and totals the billed amount for the same Deal ID, then calculates the missing revenue versus the Salesforce Amount.
4. For deals with a positive revenue gap, sends the discrepancy details to Google Gemini to classify severity and generate a root cause, recommendation, and Salesforce-ready audit note.
5. Parses the Gemini JSON response and builds a formatted Slack message containing the deal, gap, severity, and recommended action.
6. Sends the Slack alert and updates the Salesforce opportunity description with the audit note and the expected, billed, and missing amounts.

## Setup
1. Add credentials for Salesforce OAuth2, Google Sheets OAuth2, Google Gemini (PaLM) API, and Slack OAuth2.
2. In Salesforce, ensure opportunities have Amount, AccountId, StageName, and Name populated and that you want to audit only deals in the "Closed Won" stage.
3. Update the Google Sheets document and sheet to your billing ledger, and ensure it contains columns named "Deal ID" and "Billed Amount" that match Salesforce AccountId values.
4. In Slack, select the target user (or change the node to post to a channel) and verify the connected workspace has permission to send messages.
5. Optionally adjust the Salesforce fetch limit, batch size, and wait duration to fit your deal volume and API limits.

## Additional info
##  How To Customize Nodes

- **Salesforce Node**
  - Modify filters (e.g., include other deal stages)
  - Add more fields if required

- **Google Sheets Node**
  - Adjust column mapping if your sheet structure differs

- **Code Node (Comparison Logic)**
  - Modify calculation logic for discounts, partial payments, or refunds

- **Gemini Node**
  - Update prompt to refine analysis or severity rules

- **Slack Node**
  - Change recipient from user to channel if needed
  - Adjust message format

- **Salesforce Update Node**
  - Add custom fields or extend audit information


##  Add-ons (Enhancements)

- Add a Schedule Trigger for automatic daily execution  
- Store discrepancies in a database (e.g., PostgreSQL, Airtable)  
- Send email notifications in addition to Slack  
- Build dashboards for tracking revenue leakage trends  
- Integrate with ERP systems for deeper validation  
- Add retry logic for failed API calls  


## Use Case Examples

1. Detect missing invoices after deal closure  
2. Identify delays in billing processes  
3. Audit revenue discrepancies across systems  
4. Monitor high-value deals for financial gaps  
5. Automate internal financial compliance checks  

There can be many additional use cases depending on business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| No data from Salesforce | Incorrect credentials or filters | Verify OAuth connection and StageName filter |
| No match in Google Sheets | Deal ID mismatch | Ensure Deal ID matches Salesforce AccountId |
| AI parsing fails | Invalid JSON from Gemini | Ensure prompt enforces strict JSON output |
| Slack message not sent | Incorrect user ID or permissions | Verify Slack OAuth and user ID |
| No output after comparison | Missing amount is zero | This is expected behavior |
| Salesforce not updated | Incorrect field mapping | Verify Opportunity ID and field permissions |
| Workflow stops during execution | API rate limits | Increase delay in Wait node |


##  Need Help?

If you need help setting up or customizing this workflow, you can reach out to our [n8n workflow developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/).

Support includes:
- Integration setup (Salesforce, Google Sheets, Slack, AI)
- Workflow customization
- Advanced automation development
- Production-level optimization

[Contact WeblineIndia to build or extend similar automation workflows](https://www.weblineindia.com/contact-us.html) tailored to your business needs.

## 🔗 Nodes Used

Google Sheets, Slack, Salesforce, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
