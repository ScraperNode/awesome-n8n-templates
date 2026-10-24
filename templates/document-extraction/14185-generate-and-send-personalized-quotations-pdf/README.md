# 🔬 Generate and Send Personalized Quotations PDF 

> ⚡ **478 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# This Template Demonstrates How To Automate Generating and Sending Personalized Quotations as PDF.

Use cases are many: send branded quotations to new leads after a discovery call, distribute pricing proposals to inbound form submissions, or push service packages to prospects. All without manually creating documents, exporting PDFs, or writing individual emails.

**Good to know**
* OpenAI charges per token. The workflow uses gpt-4o-mini for cost efficiency (~$0.15/1M input tokens). Check OpenAI Pricing before running at scale.
* Google Docs template must be set up with placeholder variables before the first run. The workflow fills data in — it won’t generate a layout for you.
* Gmail has daily sending limits depending on your Google Workspace plan. Check your quota before sending large volumes.
* The form is hosted by n8n — share the form URL with your team or embed it in your internal tools.

## How it works
**PHASE 1: FORM INTAKE**
* An n8n Form Trigger collects all quotation details: client name, email, company, service type, service description, price, validity date, and optional notes.
* The form is self-hosted on your n8n instance — no third-party form tools needed.
* Once submitted, all fields pass directly into the workflow as structured data.

**PHASE 2: AI PERSONALIZATION**
* The form data is sent to OpenAI (gpt-4o-mini) which generates two pieces of content:
*   – A personalized introduction paragraph addressing the client by name, referencing their company and specific needs.
*   – A structured scope of work summary with deliverable bullet points based on the service description.
* Output is returned as JSON so it slots cleanly into the document template and email body.

**PHASE 3: DOCUMENT GENERATION**
* The workflow copies your pre-built Google Docs quotation template to a new document, named automatically as “Quotation - {Company} - {Service}”.
* Nine placeholder variables are replaced in the copied document: {{client_name}}, {{company_name}}, {{client_email}}, {{service}}, {{price}}, {{valid_until}}, {{notes}}, {{intro}}, and {{scope_summary}}.
* The completed document is exported from Google Drive as a PDF. Your branding, layout, and formatting stay exactly as designed in the template.

**PHASE 4: EMAIL DELIVERY**
* The PDF is attached to a personalized email sent via Gmail directly to the client’s email address.
* The email body includes the AI-generated intro, scope of work summary, total price, and validity date — no manual copy-pasting.
* The form submitter sees a confirmation response once the email is sent. Closed loop, fully hands-off.

### How to use
1. Create your Google Docs template with your preferred layout, branding, and these placeholders: {{client_name}}, {{company_name}}, {{client_email}}, {{service}}, {{price}}, {{valid_until}}, {{notes}}, {{intro}}, {{scope_summary}}.
2. Copy the template Document ID from the URL (docs.google.com/document/d/THIS_PART/edit) and paste it into the Copy Template node.
3. Configure Google OAuth via Google Console. Create a project, apply your Client ID and Secret in the Google Drive, Google Docs, and Gmail node credentials.
4. Set the OpenAI credential with your API key in the OpenAI Personalize node.
5. Share the form URL with your team. The URL is generated automatically when the workflow is activated.
 
#### Requirements
• OpenAI API — personalized intro and scope generation
• Google Drive OAuth — template copying and PDF export
• Google Docs OAuth — variable replacement in the document
• Gmail OAuth — personalized email delivery with PDF attachment
• n8n instance (self-hosted or cloud)

##### Customising this workflow
• Swap the form trigger for a webhook or CRM integration (HubSpot, GoHighLevel, Airtable) if you want quotations generated from pipeline stage changes instead of manual form submissions.
• Add a Slack or email approval step before sending — insert a Slack node between Export as PDF and Send Quotation Email if you want a manager to review before it goes out.
• Replace Gmail with any email provider (Outlook, SMTP, SendGrid) if your team doesn’t use Google Workspace.
• Add a Google Sheets logging step after sending to track all sent quotations with client name, date, service, and price for reporting.
• This pattern works beyond quotations — try it for proposals, invoices, contracts, or any document where the structure stays fixed but the data changes.
• Add multiple service line items by extending the form with repeating fields and adjusting the template to include a table of services with individual pricing.

## 🔗 Nodes Used

Google Drive, Gmail, Google Docs, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
