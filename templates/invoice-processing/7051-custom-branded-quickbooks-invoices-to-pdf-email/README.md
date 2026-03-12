# 🧾 Custom branded QuickBooks invoices to PDF & email

> ⚡ **421 views** · 🧾 [Invoice Processing](../)

## Description

# Automated QuickBooks Invoice to Custom PDF & Email

Tired of the standard, boring invoices from QuickBooks Online? This workflow completely automates the process of creating beautiful, custom-branded PDF invoices and emailing them directly to your clients, saving you time and elevating your brand's professionalism.

The moment you create an invoice in QuickBooks, this workflow triggers, fetches all the necessary data, and generates a lavish, multi-page-aware PDF invoice complete with your company logo and signature.

***

## Key Features

*   **Fully Automated:** Runs instantly when a new invoice is created in QuickBooks.
*   **Custom Branding:** Automatically fetches your company logo and signature from a URL to place on the invoice.
*   **Modern & Professional Design:** Uses a premium, multi-column HTML template that is clean, easy to read, and far superior to the default QBO templates.
*   **Multi-Page Ready:** If an invoice has many line items, the template will intelligently create multiple pages and add a "Page X of Y" footer automatically.
*   **Smart Layout:** The totals and summary block are designed to never break across pages, ensuring a professional look no matter the length.
*   **Automatic Emailing:** The final PDF is attached to a beautifully formatted email and sent directly to the customer's email address on file.

## Prerequisites

Before you start, you will need a few things:

*   A running **n8n instance**.
*   A **QuickBooks Online** account with API access.
*   A running **Gotenberg** instance. This is a powerful, open-source tool for converting HTML to PDF. This workflow is designed to connect to its API. You can learn more about it [here](https://gotenberg.dev/).
*   Publicly accessible URLs for your **company logo** and **signature image** (e.g., hosted on your website or a service like Imgur).

## Setup Guide

Follow these steps carefully to configure the workflow for your own use. Nodes that need your attention are marked with a `[!!]` prefix.

### Step 1: Configure the QuickBooks Webhook

The workflow starts with a webhook. You need to tell QuickBooks to send information to this webhook.

1.  Open the `[!!] Listen for New QuickBooks Invoice` node.
2.  You will see a **Webhook URL**. Copy the **Production URL**.
3.  Go to your QuickBooks Developer dashboard, select your app, and navigate to the **Webhooks** section.
4.  Paste the n8n URL into the Endpoint URL field and select the **Invoice** event to subscribe to.

### Step 2: Connect Your QuickBooks Account

1.  Open the `[!!] Get Invoice Data from QuickBooks` node.
2.  In the "Credentials" field, select your existing QuickBooks Online credentials or create a new set.

### Step 3: Add Your Branding

1.  Open the `[!!] Fetch Company Logo Image` node. In the **URL** field, replace the placeholder with the public URL of your company's logo.
2.  Open the `[!!] Fetch Company Signature Image` node. In the **URL** field, replace the placeholder with the public URL of your signature image.

### Step 4: Update the PDF Generation Service

1.  Open the `[!!] Generate PDF via Gotenberg` node.
2.  In the **URL** field, replace the placeholder `http://YourGotenBergInstanceURL/...` with the real URL of your running Gotenberg instance.

### Step 5: Configure Your Email

1.  Open the `[!!] Email PDF Invoice to Customer` node.
2.  In the "Credentials" field, select your SMTP or email service credentials.
3.  Customize the **From Email** and **Subject** fields. You can also edit the beautiful HTML email body to match your company's tone of voice.

### Step 6: Activate Your Workflow

You're all set! Save the workflow and activate it using the toggle at the top-right of the screen. Now, when you create a new invoice in QuickBooks, this automation will handle the rest.

***

### A Note from the Creator

Thank you for using this workflow! I believe that professional and automated invoicing is a cornerstone of a great business. This tool was designed to save you time and help you put your best foot forward with every client interaction.

If you have any questions or need assistance, feel free to reach out.

*   **Website:** [https://www.elegantbiztech.com/](https://www.elegantbiztech.com/)
*   **Email:** [sales@elegantbiztech.com](mailto:sales@elegantbiztech.com)

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, QuickBooks Online, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
