# 🎣 Send Webflow form leads to Google Sheets with email and WhatsApp alerts

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who it's for
This **n8n workflow** is designed for **business owners**, **sales teams**, and **customer support managers** who want to automate their lead capture and immediate acknowledgment process. The workflow creates an end-to-end multi-channel communication system that captures form submissions directly from Webflow, cleans and structures the data, saves it securely to a Google Sheet, and instantly sends personalized "Thank You" messages via both Email and WhatsApp.

## Features
* Captures Webflow form submissions in real time
* Cleans and structures data into JSON using custom JavaScript
* Automatically saves leads to Google Sheets (Name, Email, Phone, Message, Date)
* Sends instant email confirmation to users
* Verifies WhatsApp numbers via Rapiwa API
* Sends WhatsApp messages only to valid numbers
* Handles multiple submissions with delay to avoid API limits
* Uses conditional routing for error-free automation flow

## Requirements
- **Webflow OAuth2 API**: To authenticate the trigger node and receive real-time form submission webhooks from your specific site.
- **Google Sheets OAuth2 API**: For appending new lead data to your designated spreadsheet ("Sales - Save to Google Sheets").
- **Gmail OAuth2 API**: To send the automated confirmation emails to your leads from your connected Gmail account.
- **Rapiwa API Credentials**: For verifying the validity of WhatsApp numbers and sending out the WhatsApp text messages.

#### Configure Credentials
- **Webflow API**: Ensure you select the correct Site ID in the trigger node settings to listen to the right website's forms.
- **Google Sheets**: Configure with edit access to the target spreadsheet and ensure the sheet name ("Webflow") exactly matches your tab.
- **Gmail API**: Connect the Google account you wish to use as the sender for the confirmation emails.
- **Rapiwa API**: Add your Rapiwa API key to enable WhatsApp number verification and messaging capabilities.
- **Customize Messages**: Update the default text in the "Send a message" (Email) and "Rapiwa" (WhatsApp) nodes, making sure to replace `__add_your_brand_name__` with your actual brand name.

## Important Notes
* Ensure consistent field names between Code node and Google Sheets (e.g., `email`, `name` must match exactly with sheet headers like `Email`, `Name`) to avoid empty values
* WhatsApp logic: `$json.exists === false` means the number **is valid and exists on WhatsApp**, so the True branch sends the message—don’t invert this
* Loop Over Items has two outputs: top output goes back into the 5s wait loop, bottom output continues main processing flow
* WhatsApp message uses cleaned sheet data (`$('Store Data in Sheet').item.json.Name`) to ensure accurate formatting
* Replace `__add_your_brand_name__` in all templates to avoid unprofessional messaging

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spapgreen)

## 🔗 Nodes Used

Google Sheets, Webflow Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
