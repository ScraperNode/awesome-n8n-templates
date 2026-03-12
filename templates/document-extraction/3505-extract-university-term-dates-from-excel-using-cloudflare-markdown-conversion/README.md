# 🔬 Extract university term dates from Excel using CloudFlare markdown conversion

> ⚡ **1,118 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### This n8n template imports an XLSX containing terms dates for a university, extracts the relevant events using AI and converts the events to an ICS file which can be imported into iCal, Google Calendar or Outlook.

Manually adding important term dates to your calendar by hand? Stop! Automate it with this simple AI/LLM-powered document understanding and extraction template. This cool use-case can be applied to many scenarios where Excel files are predominantly used.

### How it works
* The term dates excel file (xlsx) are imported into the workflow from the university's website using the http request node.
* To parse the excel file, we use an external service - [Cloudflare's Markdown Conversion Service](https://developers.cloudflare.com/workers-ai/markdown-conversion/). This converts the excel's sheets into markdown tables which our LLM can read.
* To extract the events and their dates from the markdown, we can use the Information Extractor node for structured output. LLMs are great for this use-case because they can understand the layout; one row may have many data points.
* With our data, there are endless possibilities to use it! But for this demonstration, we'll generate an ICS file so that we can import the extracted events into our calendar. We use the Python code node to combine the events into the ICS spec and the "Convert to File" node to create the ICS binary.
* Finally, let's distribute the ICS file by email to other students or instructors who  may also find this incredibly helpful for the upcoming semester!

### How to use
* Ensure you're downloading the correct excel file and amend the URL parameter of the "Get Term Dates Excel" as necessary.
* Update the gmail node with your email or other emails as required. Alternatively, send the ICS file to Google Drive or a student portal.

### Requirements
* Cloudflare Account is required to use the Markdown Conversion Service.
* Gemini for LLM document understanding and extraction.
* Gmail for email sending.

### Customising the workflow
* This template should work for other Excel files which - for a university - there are many. Some will be more complicated than others so experiment with different parsers and extraction tools and strategies.

## 🔗 Nodes Used

HTTP Request, Gmail, Convert to File, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
