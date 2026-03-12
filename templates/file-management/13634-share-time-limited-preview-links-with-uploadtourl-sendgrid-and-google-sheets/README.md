# 📁 Share time-limited preview links with UploadToURL, SendGrid, and Google Sheets

> ⚡ **16 views** · 📁 [File Management](../)

## Description

Stop sending sensitive agency drafts as permanent email attachments. This workflow creates a "self-destructing" delivery system that hosts files via **UploadToURL**, sends branded previews via **SendGrid**, and automatically expires access after a set duration while logging the entire lifecycle in **Google Sheets**.

## 🎯 What This Workflow Does

Turns any sensitive file into a professional, time-limited client preview:

1. **📝 Captures Delivery Request** - Receives the file (binary or URL), recipient info, and desired expiry duration (e.g., 24 hours) via Webhook.
2. **☁️ Instant CDN Hosting** - **UploadToURL** hosts the asset and returns a high-speed public link.
3. **🔑 Secure Token Generation** - Generates a unique hex token and calculates the exact UTC expiry timestamp.
4. **📊 Real-time Logging** - Records the link in **Google Sheets** as `active` with all metadata before the email is sent.
5. **📧 Branded Delivery** - Sends a professional HTML email via **SendGrid** featuring your branding, a secure "View File" button, and a clear expiry notice.
6. **⏳ Automated Expiration** - Pauses execution for the specified duration using the **Wait node**, then updates the sheet to `expired` and notifies both the client and the agency.

## ✨ Key Features

- **UploadToURL Integration**: Native community node hosting ensures your files are web-ready instantly without manual cloud storage setup.
- **Dynamic "Burner" Logic**: The link stays active only as long as you specify (from 1 to 168 hours).
- **Dual-Phase Notifications**: Clients get a polite notice when the link is active and a second one when it has officially expired.
- **Lifecycle Tracking**: A centralized Google Sheet acts as your "Delivery Command Center," tracking tokens, sent times, and expiry statuses.
- **Agency Audit Trail**: The agency receives a final summary email once a link's lifecycle is complete, providing a full record for project management.

## 💼 Perfect For

- **Creative Agencies**: Sharing draft designs, videos, or proposals that shouldn't live in a client's inbox forever.
- **Legal & Finance**: Providing temporary access to sensitive documents or statements.
- **Freelancers**: Delivering final assets that require a "preview-only" window before final payment.
- **HR Teams**: Sending temporary access to employee handbooks or internal policy drafts.

## 🔧 What You'll Need

### Required Integrations
- **[UploadToURL](https://uploadtourl.com)** - To host assets and provide secure CDN links.
- **n8n Community Node** - `n8n-nodes-uploadtourl` must be installed.
- **SendGrid** - To send the branded preview and expiry emails.
- **Google Sheets** - To act as the database for link tracking.

### Configuration Variables
- `GSHEET_SPREADSHEET_ID`: The ID of your tracking sheet.
- `DEFAULT_EXPIRY_HOURS`: Default time (e.g., 24) if not specified in the webhook.
- `AGENCY_NAME` & `AGENCY_EMAIL`: For branding the automated emails.

## 🚀 Quick Start

1. **Import Template** - Copy the JSON and import it into your n8n canvas.
2. **Install Node** - Ensure the **UploadToURL** community node is installed.
3. **Set Credentials** - Link your UploadToURL, SendGrid, and Google Sheets accounts.
4. **Prepare Sheet** - Create a sheet named `BurnerLinks` with columns: `Token`, `Recipient Email`, `Status`, `Sent At`, `Expires At`, and `CDN URL`.
5. **Define Variables** - Update the n8n variables with your Sheet ID and Agency details.
6. **Deploy** - Activate the workflow and start sending secure, timed previews.

## 🎨 Customization Options

- **Branding**: Edit the `Generate Link Record` code node to update the HTML/CSS for the email templates to match your brand colors.
- **Extended Wait**: For links lasting weeks, ensure your n8n instance is configured to persist executions across restarts.
- **Slack Alerts**: Add a Slack node to notify your team the moment a client clicks the link (requires a redirect/tracking layer).
- **Password Protection**: Integrate an additional layer that requires a password (sent via a separate channel) to view the UploadToURL link.

## 📈 Expected Results

- **Enhanced Security**: Sensitive files no longer float around indefinitely in client inboxes.
- **Professional Impression**: Clients receive branded, structured previews that emphasize security and professionalism.
- **Zero Manual Cleanup**: No need to manually delete files or remember to "turn off" links.
- **Complete Transparency**: Always know exactly which links are active and when they were accessed.

## 🏆 Use Cases

### Pitch Deck Delivery
Send your high-stakes pitch deck with a 48-hour window. The urgency encourages the client to review it promptly while protecting your IP.

### Contract Previews
Share a draft agreement for a quick 24-hour review. Once the window closes, the client is prompted to contact you for the final version.

### Limited-Time Portfolio
Share a custom portfolio or "lookbook" with a lead, giving them 7 days of access to create a "limited time" feel to your availability.

## 💡 Pro Tips

- **Wait Node Execution**: Each link runs as a separate execution. If you send 100 links, you will see 100 "Waiting" executions in your history.
- **File Types**: The workflow includes validation for PDF, JPG, PNG, DOCX, and MP4. You can expand this in the `Validate Payload` code node.
- **BCC Records**: The workflow automatically BCCs the agency on the first email so you have a copy in your own sent folder.

---

**Ready to secure your deliveries?** Import this template and connect **UploadToURL** to start sending professional "burner" links today.

**Questions about the Google Sheet setup?** The workflow includes a detailed sticky note explaining the exact column headers needed for the database sync.

## 🔗 Nodes Used

Google Sheets, Webhook, SendGrid

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
