# 🧾 Validate incoming XRechnung invoices from IMAP and archive them with Data Tables

> ⚡ **12 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow reads incoming invoice emails via IMAP, detects and parses XRechnung (UBL) XML attachments, validates required fields and totals, archives the XML to disk, logs key values to an n8n Data Table, and sends email notifications to accounting or the sender when processing fails.

## How it works
1. Reads new emails from an IMAP mailbox and downloads attachments.
2. Searches each email’s attachments for an .xml file and ignores messages without an XML attachment.
3. Extracts the XML text, converts it to JSON, and parses UBL Invoice fields into a normalized invoice object (and reports non-UBL/invalid XML as a processing error).
4. Validates the invoice for required EN 16931 fields and recalculates totals and tax breakdowns to detect inconsistencies.
5. If the invoice is valid, saves the XML file to a “gueltig” folder and inserts invoice metadata and amounts into an n8n Data Table.
6. If the invoice is invalid, saves the XML file to a “fehlerhaft” folder and emails accounting with the error list.
7. If enabled and the sender address is not a no-reply address, sends a follow-up email to the original sender requesting correction.

## Setup
1. Configure IMAP credentials for the mailbox that receives invoices and ensure attachments are downloaded.
2. Configure SMTP credentials for sending emails, and set the notification and sender addresses in the workflow settings values.
3. Create or select an n8n Data Table named “Rechnungseingang” and map its columns to the fields used for logging.
4. Ensure the file system path used for archiving exists and is writable (for self-hosting, mount a host folder to /data/rechnungen and allow file access to that path).
5. Optionally enable automatic replies to suppliers by setting the auto-reply flag once you are confident the validation rules fit your process.

## Requirements
- IMAP mailbox for incoming invoices · SMTP access for notifications · UBL format only — CII/ZUGFeRD is detected and reported, but not parsed · Self-hosted: file access to the archive folder

## Customization
- Replace the Data Table with Google Sheets, Airtable or a database · Disable file archiving if not needed · Adjust the accepted tax rates (currently 0/7/19 %) · Enable or disable automatic supplier replies

## Additional info
Tested against the official KoSIT reference invoices, including construction final invoices with retention amounts and prepayments. German setup guide included. Built by Blackforest Systems.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Read/Write Files from Disk, Extract from File, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
