# 🤝 Manage WhatsApp and Telegram business ops with OpenAI, Postgres and Sheets

> ⚡ **12 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow connects WhatsApp and Telegram to six specialist OpenAI agents for sales, supplier management, inventory, invoices, appointments and customer support. It retrieves business knowledge from Google Sheets, records validated actions in PostgreSQL, and supports Telegram administrator approvals and automated customer replies.

## How it works
1. Receives incoming WhatsApp Business Cloud API and Telegram messages, or starts with a manual sample event for testing. Normalizes message text, sender information and attachment metadata.
2. Loads the configured business profile, identifies trusted suppliers and prevents duplicate event processing using PostgreSQL.
3. Recognizes authorized Telegram administrator approval or rejection commands and processes the corresponding pending proposals.
4. For regular messages, retrieves approved business knowledge and recent conversation history from PostgreSQL.
5. Uses a central OpenAI orchestrator to coordinate six specialist AI agents: Sales & Leads, Supplier & Products, Inventory, Invoices, Appointments and Customer Support. Each specialist can query relevant Google Sheets data.
6. Validates proposed actions against enabled agents, sender roles, permitted operations and data requirements before recording validated outcomes in PostgreSQL.
7. Synchronizes supported product changes to Google Sheets, sends Telegram administrator notifications when required and optionally replies to the original WhatsApp or Telegram sender.

## Setup
1. Create a PostgreSQL database and run the supplied SQL setup script to install the required uam_* tables and functions.
2. Create a Google Spreadsheet using the supplied templates, including BusinessFAQ, Products, Inventory, InvoiceRules and BookingRules.
3. Configure the PostgreSQL, OpenAI, Google Sheets, Telegram and WhatsApp credentials in your n8n instance.
4. Edit the Configure Business Profile node. Set the business ID and name, industry, spreadsheet ID, administrator Telegram chat ID, trusted supplier identifiers, enabled agents and automatic-reply preference.
5. Connect your WhatsApp Business Cloud API account and Telegram bot. Ensure your n8n instance has a publicly accessible HTTPS webhook endpoint for live message delivery.
6. Run the manual sample trigger to verify database processing. Test both messaging channels, product updates, administrator approvals and customer replies before activating the workflow for production use.

## Requirements
- An n8n instance supporting AI Agent Tool nodes, PostgreSQL and the native WhatsApp and Telegram integrations.
- PostgreSQL database with the supplied SQL schema and functions.
- OpenAI API credentials and an account with access to the configured chat model.
- Google Sheets credentials and a spreadsheet containing the required knowledge-base tabs.
- Telegram bot and administrator chat ID; WhatsApp Business Cloud API credentials for WhatsApp integration.
- Public HTTPS webhook access and the permissions required by each connected account.

## Customization
- Enable or disable specialist AI agents based on your business requirements.
- Customize the business profile, industry, supplier allowlists and automatic-response settings.
- Replace the sample Google Sheets data with your own FAQs, product information, inventory records, invoice rules and booking policies.
- Modify each specialist agent's system instructions to reflect your business terminology and operating procedures.
- Configure administrator notifications and approval rules for sensitive actions.
- Adapt the workflow for retail, e-commerce, wholesale, manufacturing, professional services and other supported business operations.

## Additional info
This template is designed for a single business installation and can be customized for different industries.
It processes text messages and attachment metadata. Full image, video, audio transcription and PDF-content analysis are not included in this version.
Product synchronization supports one product variant per incoming message and requires reliable product identifiers for duplicate prevention.
Appointments are recorded as unconfirmed requests. Automatic calendar bookings, marketplace listing publication and invoice payments are not implemented.
Administrator approval is required for supported sensitive changes. Complete live integration and security testing before production deployment.

## 🔗 Nodes Used

Google Sheets, Postgres, Telegram, Telegram Trigger, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
