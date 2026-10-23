# 🎬 Generate freelance proposal PDFs from Tally with GPT-4o and Gmail

> ⚡ **32 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow generates a personalized freelance proposal from a Tally form submission, using OpenAI to extract text from screenshots and write the proposal, SerpAPI to pull proposal examples, Google Sheets to reference past projects, pdf.co to create a PDF, and Gmail to email it to the submitter.

## How it works
1. Triggers when a new submission is received from a Tally form.
2. Detects whether the submission contains a job screenshot and, if so, uses OpenAI (GPT-4o Vision) to extract the job description text; otherwise it uses the typed job description.
3. Searches Google via SerpAPI for proposal examples based on the submitted job title and compiles relevant snippets.
4. Combines the job title, job description, and example snippets into a single prompt payload for proposal writing.
5. Uses an OpenAI agent that first looks up relevant past projects from Google Sheets and then generates a proposal and a short email body as HTML inside a JSON response.
6. Converts the proposal HTML to a PDF using the pdf.co API, downloads the generated file, and emails it with Gmail to the address provided in the form.

## Setup
1. Create a Tally form with job title, job description, optional job screenshot upload, and email fields, then set the Tally Form ID and replace all YOUR_*_FIELD_ID placeholders with your actual Tally field IDs.
2. Add OpenAI credentials for both the image text extraction step and the proposal-generation agent, and update the OWNER BIO section in the agent prompt with your real profile details.
3. Add a SerpAPI credential.
4. Create a Google Sheets spreadsheet containing your past projects and connect a Google Sheets credential, then set the spreadsheet ID and sheet/tab used by the “get_relevant_projects” tool.
5. Create a pdf.co account and add an HTTP Header Auth credential that sends your x-api-key header, and confirm the PDF conversion endpoint is reachable.
6. Connect a Gmail OAuth2 credential and confirm the workflow can send emails to the recipient address captured from the Tally form.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
