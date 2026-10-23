# 🔒 Audit vendor security risk with OpenAI, Google Sheets, Slack and Gmail

> ⚡ **19 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs on a schedule to audit a vendor’s security posture using website header checks, RDAP domain age lookup, and the Have I Been Pwned breaches list, then uses OpenAI to generate a structured risk rating, logs the result to Google Sheets, and alerts via Slack and Gmail.

## How it works
1. Runs on a schedule and sets the vendor name, website, contact email, data access level, and audit date.
2. Fetches the vendor website response headers and page content, queries RDAP for the domain’s registration details, and pulls the Have I Been Pwned breaches list.
3. Compiles the findings into a single summary (security header score, estimated domain age, breach count for the vendor domain, and a simple privacy-policy keyword check).
4. Sends the compiled findings to an OpenAI (gpt-4o-mini) agent that returns a structured overall risk score, risk tier, executive summary, and recommendations.
5. Calculates a next audit date based on the risk tier and appends or updates the vendor entry in a Google Sheets risk register.
6. If the risk tier is High or Critical, posts a Slack alert and sends a summary email to the security team.
7. If the workflow fails or the AI agent errors, posts an error alert to Slack.

## Setup
1. Add an OpenAI API credential and ensure the OpenAI Chat Model node is connected.
2. Add a Google Sheets OAuth2 credential, replace `YOUR_GOOGLE_SHEET_ID`, and ensure a “Vendor Risk Register” sheet exists with columns matching the mapped fields (for example VendorName, WebsiteURL, RiskTier, OverallRiskScore, ExecutiveSummary).
3. Add a Slack OAuth2 credential and set the correct channel ID for the high-risk alert and both error-alert Slack actions.
4. Add a Gmail OAuth2 credential and update the recipient address in the email step (for example `security-team@yourcompany.com`).
5. Update the vendor details (name, website, contact email, and data access level) in the vendor data step and adjust the schedule interval as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
