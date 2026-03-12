# 👥 Classify emails & extract structured data from job applications with GPT-4o

> ⚡ **819 views** · 👥 [HR & Recruitment](../)

## Description

## Who is this template for?
This workflow template is designed for business owners and HR professionals to automatically detect and structure unstructured job applications received through email. Additionally, other email categories can be added, each with it's own workflow.

## How it works
- Every time a new email is received, an OpenAI model classifies it into a predefined category by analyzing the plain text of the email and the extracted content from the attachment.
- If the email is classified as a job application, an OpenAI model uses the email’s plain text and extracted attachment content to populate predefined fields such as age and study.
- A relevant additional step would be to directly push the applicant and their structured job application into a CRM or ATS like Hubspot or Recruitee.

## Set up steps
1. Configure your IMAP credentials to connect your email account. Use [this n8n documentation page](https://docs.n8n.io/integrations/builtin/credentials/imap/#related-resources) for quickstart guides for common email providers.
2. Connect your OpenAI account in the *'Classify email'* node.
	* And add or remove any category for classification in this node. Make sure the description is clear and concise.

	![Scherm­afbeelding 20250409 om 11.51.52.png](fileId:1093)
2. Connect your OpenAI account in the *'Extract variables - email & attachment'* node.
	* And add or remove any predefined fields that should be populated for job applications in this node. Make sure the description is clear and concise.

	![Scherm­afbeelding 20250409 om 11.54.48.png](fileId:1094)![Scherm­afbeelding 20250409 om 11.51.52.png](fileId:1093)

## 🔗 Nodes Used

Email Trigger (IMAP), OpenAI Chat Model, Extract from File, Text Classifier, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
