# 📱 WhatsApp marketing dashboard with dynamic broadcasts from Google Sheets to Meta templates

> ⚡ **584 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow provides a complete backend solution for building your own WhatsApp marketing dashboard. It enables you to send dynamic, personalized, and rich-media broadcast messages to an entire contact list stored in Google Sheets.

The system is built on three core functions: automatically syncing your approved Meta templates, providing an API endpoint for your front-end to fetch those templates, and a powerful broadcast engine that merges your contact data with the selected template for mass delivery.

## Who’s it for?
This template is for marketers, developers, and businesses who want to run sophisticated WhatsApp campaigns without being limited by off-the-shelf tools. It's perfect for anyone who needs to send personalized bulk messages with dynamic content (like unique images or links for each user) and wants to operate from a simple, custom-built web interface.

## How it works
This workflow is composed of three independent, powerful parts:

**Automated Template Sync**: A scheduled trigger runs periodically to fetch all of your approved message templates directly from your Meta Business Account. It then clears and updates an n8n Data Table, ensuring your list of available templates is always perfectly in sync with Meta.

**Front-end API Endpoint**: A dedicated webhook acts as an API for your dashboard. When your front-end calls this endpoint, it returns a clean JSON list of all available templates from the n8n Data Table, which you can use to populate a dropdown menu for the user.

**Dynamic Broadcast Engine**: The main webhook listens for a request from your front-end, which includes the name of the template to send. 

It then:

Looks up the template's structure in the Data Table.

Fetches all contacts from your Google Sheet.

For each contact, a Code node dynamically constructs a personalized API request. It can merge the contact's name into the body, add a unique user ID to a button's URL, and even pull a specific image URL from your Google Sheet to use as a dynamic header.

Sends the fully personalized message to the contact.

## How to set up
1. Pre-requisite - Front-end: This workflow is a backend and is designed to be triggered by a front-end application. You will need a simple UI with a dropdown to select a template and a button to trigger the broadcast.

2. Meta for Developers: You need a Meta App with the WhatsApp Business API configured. From your app, you will need your WhatsApp Business Account ID, a Phone Number ID, and a permanent System User Access Token.

3. n8n Data Table: Create an n8n Data Table (e.g., named "WhatsApp Templates") with the following columns: template_name, language_code, components_structure, template_id, status, category.

4. Google Sheet: Create a Google Sheet to store your contacts. It must have columns like Phone Number, Full Name, and for dynamic images, Marketing Image URL.

5. Configure Credentials: 
	-&gt; Create an HTTP Header Auth credential in n8n for WhatsApp. Use Authorization as the Header Name and Bearer YOUR_PERMANENT_TOKEN as the value.

	-&gt; Add your Google Sheets credentials.

6. Configure Nodes:

	-&gt; In both HTTP Request nodes, select your WhatsApp Header Auth credential. Update the URLs with your own Phone Number ID and WABA ID.

	-&gt; In the Google Sheets node, select your credential and enter the Sheet ID.

	-&gt; In all Data Table nodes, select the Data Table you created.

7. First Run: Manually execute the "Sync Meta Templates" flow (starting with the Schedule Trigger) once to populate your Data Table with your templates.

8. Activate: Activate all parts of the workflow.



## Requirements
1. A Meta for Developers account with a configured WhatsApp Business App.

2. A permanent System User Access Token for the WhatsApp Business API.

3. A Google Sheets account.

4. A front-end application/dashboard to trigger the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
