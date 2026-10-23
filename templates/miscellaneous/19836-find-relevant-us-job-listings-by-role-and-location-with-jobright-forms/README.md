# 🔧 Find relevant US job listings by role and location with Jobright forms

> ⚡ **58 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow exposes an n8n form that searches Jobright for up to five jobs based on job title, location, and remote preference, then renders the results as an HTML list returned to the form submission.

## How it works
1. Receives a submission from an n8n Form with a job title, optional location, and a remote preference.
2. Validates the inputs and builds a Jobright search payload (including US country, optional city/radius, and a work-model filter).
3. Sends a POST request to Jobright’s public visitor job-search endpoint to retrieve up to five results.
4. Validates the Jobright response and normalizes each job into a consistent set of fields (title, company, location, work model, employment type, and URL).
5. Renders the jobs into a simple HTML page and returns it to the form as the completion response.
6. If any step fails, formats an error message as HTML and returns it to the form instead.

## Setup
1. Import the template and open the Form Trigger to copy the production form URL after activation (or use the test URL for manual runs).
2. Customize the Jobright query defaults as needed (result count, radius range, and remote/onsite/hybrid mapping).
3. Optionally edit the HTML styling in the output step to match your preferred formatting.

## Requirements
- No API key, Jobright account, resume upload, or third-party credentials are required. The workflow uses Jobright's anonymous visitor job-search endpoint.

## Customization
- Adjust the result count (up to five), location radius, remote-work mapping, form labels, or HTML result styling to fit your use case.

## Additional info
Job search results are relevance-based and are not personalized match scores. Find more matching jobs at https://jobright.ai/jobs?utm_source=n8n&utm_medium=referral&utm_campaign=creator_template

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
