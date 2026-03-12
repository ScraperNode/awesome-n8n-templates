# 👥 Handling job application submissions with AI and n8n forms

> ⚡ **13,129 views** · 👥 [HR & Recruitment](../)

## Description

This n8n template leverages n8n's multi-form feature to build a 2 part job application submission journey which aims to eliminate the need for applicants to re-enter data found on their CVs/Resumes.

## How it works
* The application submission process starts with an n8n form trigger to accept CV files in the form of PDFs.
* The PDF is validated using the text classifier node to determine if it is a valid CV else the applicant is asked to reupload.
* A basic LLM node is used to extract relevant information from the CV as data capture. A copy of the original job post is included to ensure relevancy.
* Applicant's data is then sent to an ATS for processing. For our demo, we used airtable because we could attach PDFs to rows.
* Finally, a second form trigger is used for the actual application form. However, it is prefilled to save the applicant's time and allow them to amend any of the generated application fields.

## How to use
* Ensure to change the redirect URL in the **form ending** node to use the host domain of your n8n instance.

## Requirements
* OpenAI for LLM
* Airtable to capture applicant data

## Customising the workflow
* Application form is pretty basic for this demonstration but could be extended to ask more in-depth questions.
* If it fits the job, why not ask applicants to upload portfolio works and have AI describe/caption them.

## 🔗 Nodes Used

Airtable, HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
