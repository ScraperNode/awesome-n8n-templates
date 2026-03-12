# 🔬 Replace data in Google Docs from n8n form

> ⚡ **8,086 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for?
This workflow is perfect for anyone looking to automate the process of replacing variables in Google Docs with data from form.

![Zrzut ekranu 20250314 o 21.25.04.png](fileId:1015)

## What problem does this workflow solve?
This workflow automates the process of filling Google Docs templates with data coming from n8n forms or other variables. It’s especially useful for generating documents like contracts, invoices, or reports quickly and efficiently without manual intervention.

## What does this workflow do?
The workflow receives data from a form in n8n.
It uses the form data to replace the corresponding variables (e.g., {{example_variable}}) in a Google Docs template.
The document is then generated with the new values, ready for further use, such as sending or archiving.

## How to set up this workflow?
1. Prepare the template: Create a Google Docs template with variables in the {{variable}} format that you want to replace with form data.
2. Modify the variables in the n8n form: Make sure the form fields correspond to the variables you want to replace in the Google Docs template.
3. Connect to Google Docs: Set up the connection to Google Docs in n8n using the appropriate authentication credentials.
4. Test the workflow: Run the workflow to ensure that the form data correctly replaces the variables in the Google Docs template.

## How to customize this workflow to your needs?
Change the data source: You can modify the form or other data sources (e.g., API) from which the replacement values will be fetched.
Customize the Google Docs template: Adapt the template to include additional fields for replacement as needed.
Integrate with other applications: You can expand the workflow to include actions like sending the generated document via email, saving it to Google Drive, or passing it to other systems.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
