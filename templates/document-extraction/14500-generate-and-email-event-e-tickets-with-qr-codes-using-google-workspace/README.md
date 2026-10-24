# 🔬 Generate and email event e-tickets with QR codes using Google Workspace

> ⚡ **55 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## End-to-End Event e-Ticket Generator & Email Dispatcher

This workflow provides a complete, hands-off solution for managing event registrations (perfect for seminars, workshops, or community gatherings). It automatically generates personalized PDF e-tickets complete with dynamic QR codes, securely archives them, and immediately emails the tickets to the registrants. 

By handling everything from data entry to inbox delivery, this template eliminates manual ticketing bottlenecks for event organizers.

### How it works
1. **Trigger:** The workflow listens for new participant registrations added to a Google Sheet.
2. **Duplicate & Personalize:** It creates a fresh copy of a master Google Doc template and seamlessly replaces text placeholders with the participant's specific data (Name, Ticket ID, etc.).
3. **Inject Dynamic QR:** It generates a unique QR code via the QuickChart API and injects the image directly into the document using a targeted HTTP Request.
4. **Convert & Archive:** The customized document is converted into a high-quality PDF and saved to a designated Google Drive folder for the organizer's records.
5. **Automated Dispatch:** Finally, it triggers n8n's built-in 'Send Email' node to dispatch a beautifully formatted, responsive HTML welcome email to the participant. The email includes their unique Ticket ID and a direct, accessible link to download their PDF e-Ticket.

### Set up steps
1. **Prepare the Database:** Create a Google Sheet to collect participant data (ensure you have columns for Ticket ID, Name, and Email).
2. **Design the Template:** Create your e-ticket design in Google Docs. Add text placeholders (e.g., `{kode_qr}`) that match the mapping in the 'Change Custom Variables' node.
3. **Configure Google Credentials:** Connect your Google account to the Sheets, Docs, and Drive nodes. Update the `documentId` and `folderId` to point to your specific files.
4. **Set Drive Permissions (Crucial):** Ensure the Google Drive folder where your PDFs are saved is set to "Anyone with the link can view". This ensures the download link inside the HTML email works flawlessly for your attendees.
5. **Configure Email SMTP:** Connect your standard email SMTP credentials (or Google App Password if using Gmail) to the 'Send Email' node. Don't forget to update the "From Email" field with your own address!

### Requirements
- A Google Workspace account (Google Sheets, Docs, and Drive).
- A standard email account with SMTP access (e.g., Gmail, Outlook, or a custom domain).
- Basic understanding of mapping JSON data between nodes.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, Google Docs, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
