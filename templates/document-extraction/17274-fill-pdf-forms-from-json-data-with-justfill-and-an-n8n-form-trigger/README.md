# 🔬 Fill PDF forms from JSON data with JustFill and an n8n form trigger

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Fill the same existing PDF form repeatedly with new JSON records. This workflow collects a PDF and data through an n8n form, matches values to named fields, preserves the original layout, and returns a temporary download link. It is suited to recurring supplier intake and other reviewed business forms.

## How it works
1. Collect a PDF upload and a Data JSON object through an n8n Form Trigger.
2. Request a one-time upload URL from JustFill and upload the PDF as binary.
3. Open the PDF and read its field metadata.
4. Match JSON keys to field names exactly after case and punctuation normalization, preserving Unicode letters. Unknown keys, ambiguous names, duplicate targets, arrays and nested objects stop the workflow before filling.
5. Fill the matched fields and return the download link, output mode and warnings.
6. Redirect the form response to the generated PDF.

## Setup
1. Import this template using **Use for free**. The same workflow is available as [JSON on GitHub](https://github.com/mrmaciej1/justfill-mcp/blob/main/examples/n8n/fill-pdf-workflow.json). Follow the [setup guide and three-field sample](https://justfill.app/integrations/n8n-fill-pdf-forms?utm_source=n8n&utm_medium=referral&utm_campaign=b2b_pdf_automation_2026q3&utm_content=deterministic_template). Create a JustFill account, verify your email, create an API key, and replace the Config placeholder for a private test. Keep the workflow inactive while testing; move the key to an n8n credential or environment variable before production.
2. Test the form with the synthetic supplier PDF and the sample JSON from the guide. Check all three values in the returned PDF, plus `output_mode` and `warnings` in Result.
3. For your own recurring PDF, review its fields, assign meaningful names and save the layout in JustFill. Test the exact PDF with JSON keys matching those names before connecting your live source. Review a new layout whenever the source PDF changes.

## Requirements
- A JustFill account, API key and available PDF-processing allowance.
- Named fields for the exact PDF; review and save your own recurring layout.
- An n8n instance with the built-in Form Trigger, HTTP Request and Code nodes. This workflow does not require the separate JustFill community node or an AI model key.

## Customization
- Replace the Form Trigger with a source that supplies the PDF binary and JSON values, such as a webhook or records prepared from a spreadsheet or CRM.
- Replace the final redirect when you want n8n to store the PDF or pass it to another step.
- Retest the mapping and output after adapting the workflow.

## Additional info
JustFill is built by the template author. The workflow is free to download; running it uses the JustFill account's allowance and output may be watermarked. Check the returned output mode before delivery. Download links are temporary. Keep real API keys and customer data out of shared workflow exports.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
