# 🎣 Verify & enrich form leads with Hunter and Clearbit then add them to Pipedrive

> ⚡ **1,417 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Use case
When collecting leads via an online form, you often need to manually add those new leads into your Pipedrive CRM. This not only takes a lot of time but is also error-prone. This workflow automates this tedious work for you.
## What this workflow does
1. The workflow is triggered each time a form is submitted in n8n.
2. It validates the email address using Hunter.io.
3. If the email is valid, the workflow checks for an existing person with that email in Pipedrive.
4. If no existing person is found, it utilizes Clearbit to enrich the person's information.
5. It then verifies if the person's organization already exists in Pipedrive, creating a new organization if necessary.
6. The workflow then registers the person in Pipedrive.
7. Lastly, it creates a lead in Pipedrive using information from the person and organization.
## Setup
This workflow is very quick to set up.
1. Add your **Hunter.io**, **Clearbit** and **Pipedrive** credentials 
2. Click the test workflow button
3. Activate the workflow and use the form trigger production URL to collect your leads in a smart way 
## How to adjust it to your needs
- Exchange the n8n form trigger with your form of choice (Typeform, Google Forms, SurveyMonkey...)
- Add a filter criteria to only add new leads if they match certain requirements
- Remove the email check with Hunter.io if you don't own this tool and expect new form submission to have a correct email anyways
- Add ways to handle invalid emails or existing Persons

## 🔗 Nodes Used

Pipedrive, Hunter, Clearbit, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
