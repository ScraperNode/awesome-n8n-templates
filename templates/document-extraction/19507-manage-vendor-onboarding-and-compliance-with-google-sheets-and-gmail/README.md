# 🔬 Manage vendor onboarding and compliance with Google Sheets and Gmail

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects vendor onboarding applications via an n8n form, checks for duplicates in Google Sheets, validates compliance inputs, calculates a risk score, and then approves or rejects vendors while logging outcomes to Google Sheets and sending notification emails via Gmail.

## How it works
1. Receives a vendor application submission through an n8n form.
2. Normalizes the submitted fields, stamps an application ID and timestamps, and validates that all required vendor data is present.
3. Looks up the vendor in a Google Sheets Vendor_Master sheet using Tax ID and Registration No to detect duplicate registrations.
4. If a duplicate is found, logs the rejection to a Google Sheets onboarding log and emails the applicant via Gmail.
5. If not a duplicate, checks the mandatory compliance fields (Tax Registration Valid, Business Registration Valid, and Bank Details Verified) and rejects failures.
6. Calculates a compliance-based risk score and risk level, then approves vendors within the configured threshold by adding them to Google Sheets Vendor_Master and logging the decision.
7. Sends the final approved or rejected decision to the applicant via Gmail.

## Setup
1. Connect Google Sheets credentials in n8n and replace YOUR_GOOGLE_SHEET_ID with your spreadsheet ID in all Google Sheets steps.
2. Create the required sheets and columns in the spreadsheet (Vendor_Master and Vendor_Onboarding_Log) to match the mapped fields (for example Tax ID, Registration No, Risk Score, Risk Level, Decision, and timestamps).
3. Connect a Gmail account in n8n and confirm the sender settings for sending approval, rejection, and duplicate notifications.
4. Review and adjust the risk threshold values (lowRiskMax, mediumRiskMax, highRiskMax) to match your vendor risk policy.
5. Publish the form and share the n8n form URL with vendors so they can submit applications.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
