# 📋 Route SMS conflict case commands via webhook using Google Sheets and Telegram

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow helps approved community mediators record and retrieve conflict-case information through SMS-style commands. It stores cases and updates in Google Sheets, sends private Telegram alerts to a record keeper, and keeps conflict decisions with human mediators.

## How it works
1. A webhook receives a phone number and an SMS-style command.
2. The workflow rejects missing fields and checks the sender against the active mediators listed in Google Sheets.
3. `NEW` creates a case, prepares a record-keeper checklist, and sends the record keeper a private Telegram alert.
4. `UPDATE` checks that the case exists, appends the update to its history, and alerts the record keeper.
5. `SUMMARY` and `STATUS` read the protected case register and return only approved structured fields. They do not expose participant names, detailed allegations, locations, case notes, recorded update text, or other uncontrolled free text.
6. For an urgent `NEW` report, the workflow reads the locally configured contacts and tells the mediator to contact the local authority and peace-committee leader. It does not contact authorities automatically.
7. Approved inbound messages and prepared outbound replies are logged in Google Sheets. The demo returns the reply through the webhook; a live adaptation can connect an SMS provider.

## Setup
1. Import the workflow into n8n.
2. Create a dedicated n8n Header Auth credential using the header name `X-Peacebuilding-Webhook-Key`, assign it to `Webhook: mediator request`, and keep the secret private.
3. Create one protected Google Sheet with these tabs: `Mediators`, `Cases`, `Case Updates`, `Messages`, `Local Contacts`, and `Case Review Checklists`.
4. Create the required columns exactly as shown in the workflow’s setup Sticky Notes.
5. Add your Google Sheets credential and select the same spreadsheet in every Google Sheets node.
6. Add your Telegram credential, replace `YOUR_RECORD_KEEPER_TELEGRAM_ID`, and test with a private record-keeper chat.
7. Open `Webhook: mediator request`, click **Test workflow**, copy its Test URL, and send fictional test data with the configured Header Auth header.
8. Connect an SMS provider only after adapting the access, safeguarding, urgent-contact, language, and message-delivery rules for your organisation.

## Requirements
- Telegram bot for private record-keeper alerts

## Customization
- Replace the fictional mediator records and example cases with organisation-approved test data before any controlled pilot.
- Adapt conflict categories, command wording, languages, status values, urgent criteria, and locally agreed contacts.
- Keep SMS summaries short and masked. Do not include names, detailed allegations, or confidential case notes.
- Replace the webhook response with the chosen SMS provider's send-message action and verify delivery reports before claiming that a message reached a phone.

## Additional info
This template supports human mediators but does not replace their judgment. It does not determine responsibility, how serious a risk is, or how a conflict should be resolved.
Use only fictional information during setup and testing. Before using real conflict-related information, the organisation should review access, safeguarding, security, data retention, consent, urgent-case procedures, and wording in local languages.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
