# 🧾 Automate purchase order form submissions from Outlook Excel attachments with AI

> ⚡ **3,847 views** · 🧾 [Invoice Processing](../)

## Description

### This n8n template imports purchase order submissions from Outlook and converts attached purchase order forms in XLSX format into structured output.

Data entry jobs with user-submitted XLSX forms are time consuming, incredibly mundane but necessary tasks which in likelihood are inherited and critical to business operation.

While we could dream of system overhauls and modernisation, the fact is that change is hard. There is another way however -  using n8n and AI! N8N offers an end-to-end solution to parse XLSX form attachments using LLM-powered OCR and send the extracted output to your ERP or otherwise.

### How it works
* An Outlook trigger is used to watch for incoming purchase order forms submitted via a shared inbox.
* The email attachment for the submission is a form in xlsx format - like this one [Purchase Order Example](https://1drv.ms/x/c/8f1f7dda12b7a145/ETWH8dKwgZ1OiVz7ISUWYf8BwiyihBjXPXEbCYkVi8XDyw?e=WWU2eR) - which is imported into the workflow.
* The 'Extract from File' node is used with the 'code' node to convert the xlsx file to markdown. This is so our LLM can understand it.
* The Information Extractor node is used to read and extract the relevant purchase order details and line items from the form.
* A simple validation step is used to check for common errors such as missing PO number or the amounts not matching up. A notification is automated to reply to the buyer if so.
* Once validation passes, a confirmation is sent to the buyer and the purchase order structured output can be sent along to internal systems.

### How to use
* This template only works if you're expecting and receiving forms in XLSX format. These can be invoices, request forms as well as purchase order forms.
* Update the Outlook nodes with your email or other emails as required.
* What's next? I've omitted the last steps to send to an ERP or accounting system as this is dependent on your org.

### Requirements
* Outlook for Emails
  * Check out how to setup credentials here: [https://docs.n8n.io/integrations/builtin/credentials/microsoft](https://docs.n8n.io/integrations/builtin/credentials/microsoft/)
* OpenAI for LLM document understanding and extraction.

### Customising the workflow
* This template should work for other Excel files. Some will be more complicated than others so experiment with different parsers and extraction tools and strategies.
* Customise the Information Extractor Schema to pull out the specific data you need. For example, capture any notes or comments given by the buyer.

## 🔗 Nodes Used

Microsoft Outlook, OpenAI Chat Model, Extract from File, Microsoft Outlook Trigger, Text Classifier, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
