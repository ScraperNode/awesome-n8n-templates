# 🔧 Validate QR tickets in real time with Google Forms and Sheets

> ⚡ **146 views** · 🔧 [Miscellaneous](../)

## Description

## Automated QR Ticket Scanner & Validator

This workflow is the perfect companion to the "Automated e-Ticket PDF Generator". It acts as a lightweight, automated check-in system for events. By pairing a simple Google Form with a mobile scanning app, it validates QR codes against your master database in real-time and logs the attendance status.

### How it works
1. **Trigger:** The workflow triggers instantly when a new response is submitted to a Google Form (which acts as your QR code scanner input).
2. **Data Extraction:** It isolates the scanned QR code string from the new Google Sheet row.
3. **Database Lookup:** It cross-references the scanned code with your Master Participant Database in Google Sheets.
4. **Validation (Switch):** A logic node checks if the scanned ticket exists and matches the database.
5. **Log Results:** - **VALID:** If matched, it logs the participant's details into a "Scan Results" sheet with a "VALID" status.
   - **INVALID:** If not matched, it logs the scanned code with an "INVALID" status, alerting you to an unregistered ticket.

### Field Setup (Pro-Tip)
To make this work seamlessly at an actual event venue:
1. **Create a Google Form:** Make a simple form with one short-answer text input for the QR code.
2. **Use "Scan to Web" App:** Install the [Scan to Web](https://play.google.com/store/apps/details?id=com.berrywing.scantoweb) app (or a similar keyboard scanner app) on an Android smartphone. 
3. **Scan Away:** Open your Google Form link on the phone, tap the text input field, and use the app to scan the attendee's physical or digital QR code. The app will automatically type the code and submit the form, triggering this n8n workflow instantly!

### Requirements
- A Google Workspace account (Google Forms & Google Sheets).
- A basic understanding of mapping Google Sheets columns in n8n.
- An Android smartphone with the "Scan to Web" app installed for field scanning.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
