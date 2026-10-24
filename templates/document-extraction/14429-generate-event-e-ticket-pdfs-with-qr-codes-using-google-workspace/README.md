# 🔬 Generate event e-ticket PDFs with QR codes using Google Workspace

> ⚡ **40 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## End-to-End Event e-Ticket Generator & Email Dispatcher

This workflow provides a complete, hands-off solution for managing event registrations (perfect for seminars, workshops, or community gatherings). It automatically generates personalized PDF e-tickets complete with dynamic QR codes, securely archives them, and immediately emails the tickets to the registrants. 

By handling everything from data entry to inbox delivery, this template eliminates manual ticketing bottlenecks for event organizers.

### How it works
1. **Trigger:** The workflow listens for new participant registrations added to a Google Sheet.
2. **Duplicate & Personalize:** It creates a fresh copy of a master Google Doc template and seamlessly replaces text placeholders with the participant's specific data (Name, Ticket ID, etc.).
3. **Inject Dynamic QR:** It generates a unique QR code via the QuickChart API and injects the image directly into the document using a targeted HTTP Request.
4. **Convert & Archive:** The customized document is converted into a high-quality PDF and saved to a designated Google Drive folder for the organizer's records.
5. **Automated Dispatch:** Finally, it triggers an Email node (using Mailketing) to send a personalized welcome email to the participant. The email includes their unique Ticket ID and a direct, accessible link to download their PDF e-Ticket.

### Set up steps
1. **Prepare the Database:** Create a Google Sheet to collect participant data (ensure you have columns for Ticket ID, Name, and Email).
2. **Design the Template:** Create your e-ticket design in Google Docs. Add text placeholders (e.g., `{kode_qr}`) that match the mapping in the 'Change Custom Variables' node.
3. **Configure Google Credentials:** Connect your Google account to the Sheets, Docs, and Drive nodes. Update the `documentId` and `folderId` to point to your specific files.
4. **Set Drive Permissions (Crucial):** Ensure the Google Drive folder where your PDFs are saved is set to "Anyone with the link can view". This ensures the download link inside the email works flawlessly for your attendees.
5. **Configure Email:** Connect your Mailketing API credentials. *(Note: You can easily swap this out for n8n's built-in 'Send Email' SMTP node or Gmail node if preferred).*

### Requirements
- A Google Workspace account (Google Sheets, Docs, and Drive).
- A Mailketing account (or a standard SMTP / Gmail account).
- Basic understanding of mapping JSON data between nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, Google Docs, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
