# 🎣 Verify emails and phone numbers in Google Sheets with ApexVerify

> ⚡ **8 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow watches a Google Sheets lead list and uses ApexVerify to verify new or changed email addresses and phone numbers, then writes the verification status back into the same sheet.

## How it works
1. Triggers when a row is added or updated in a specified Google Sheets worksheet.
2. Checks whether the Email cell already contains a verification marker ("|||"), and only proceeds if it has not been verified yet.
3. Sends the email address to ApexVerify for email verification and formats the result as an icon status plus the original email (for example, "✅ ||| name@domain.com").
4. Updates the originating Google Sheets row with the formatted email verification result.
5. Checks whether the Phone Number cell already contains a verification marker ("|||"), and only proceeds if it has not been verified yet.
6. Sends the phone number (with target country set to FR) to ApexVerify for phone verification and formats the result as an icon status plus the original number.
7. Updates the originating Google Sheets row with the formatted phone verification result.

## Setup
1. Connect Google Sheets OAuth credentials for both the Google Sheets Trigger and the Google Sheets update action, and select your spreadsheet and worksheet.
2. Add your ApexVerify API credentials in n8n.
3. Ensure your sheet has at least the columns "Email", "Phone Number", and "row_number", and update the field mappings if your column names differ.
4. Set the correct target country for phone verification (currently set to FR) and adjust it if your leads are in other countries.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
