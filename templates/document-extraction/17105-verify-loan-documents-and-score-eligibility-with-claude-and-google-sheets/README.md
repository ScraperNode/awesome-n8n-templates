# 🔬 Verify loan documents and score eligibility with Claude and Google Sheets

> ⚡ **71 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives loan applications via webhook, uses Anthropic Claude to verify document text and generate an underwriting recommendation, calculates an explainable risk score in code, logs each application to Google Sheets, and sends decision emails through SendGrid before returning a JSON response.

## How it works
1. Receives a loan application via a POST webhook, including applicant details and extracted text from ID, income proof, and bank statement documents.
2. Uses Anthropic Claude to extract key fields from the documents and cross-checks them against the applicant’s declared name, employer, and income to produce a verification score and inconsistency list.
3. Stops early and returns a “Documents Insufficient” webhook response when the verification score is below the threshold.
4. Calculates verified income, estimated monthly installment, debt-to-income and loan-to-income ratios, and a weighted 0–100 risk score and tier from credit score, ratios, employment tenure, bank health, and document consistency.
5. Waits briefly, then uses Anthropic Claude to generate an eligibility recommendation (Approve, Conditional Approval, Manual Review, or Decline) with reasoning, conditions, suggested loan amount, and confidence.
6. Formats the final decision record and appends a tracking row to a Google Sheets LoanApplications tab.
7. Sends an approval email to the applicant for Approve/Conditional Approval, or emails the underwriting team and a status update to the applicant for Manual Review/Decline, and responds to the webhook with the full decision JSON.

## Setup
1. Add an Anthropic API credential and select it for both Claude model steps.
2. Provide a SendGrid API key and replace `YOUR_SENDGRID_API_KEY` in all SendGrid HTTP Request steps, and update the From address/domain as needed.
3. Configure Google Sheets access by supplying an OAuth2 credential for the Google Sheets API and replacing `YOUR_SHEET_ID` in the Sheets append request.
4. Create a Google Sheet with a `LoanApplications` tab and headers matching the workflow’s appended columns (for example: Application ID, Applicant Name, Applicant Email, Loan Amount, Loan Purpose, Term Months, Verified Monthly Income, Debt-to-Income Ratio, Risk Score, Risk Tier, Recommendation, Suggested Loan Amount, Decided At).
5. Update the internal notification recipient address (default `underwriting@yourlender.com`) and copy the webhook URL into your application intake form or test client that POSTs the required fields.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
