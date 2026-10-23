# ⚙️ Diagnose n8n workflow errors with Claude AI, Supabase and Resend email alerts

> ⚡ **390 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who's it for
This workflow is for anyone who runs n8n workflows and wants to know immediately when something breaks, without digging through execution logs. Especially useful for non-technical users and freelancers or agencies managing workflows for clients.

## How it works
When a workflow fails, this system activates automatically. Claude AI analyzes the error using the technical details and the business context you provide, then generates a diagnosis with the direct cause, a step-by-step fix and prevention advice. A second AI agent validates the confidence score. Based on that score you receive a full diagnosis (≥80%), a diagnosis with a reservation (50–79%), or a manual review notification (&lt;50%). All diagnoses are stored in your Supabase database.

## How to set up
Run the provided SQL in Supabase to create the error_log table. Verify your domain in Resend and create an API key. Import the workflow, create four credentials (Anthropic, Supabase, Resend, n8n API) and link them to the correct nodes. Fill in the Config node and activate the workflow. Set it as the Error Workflow for each workflow you want to monitor. Full installation guide at [flowcheckers.com](http://flowcheckers.com).

## Requirements
Anthropic API key, Supabase account, Resend account with verified domain.

## How to customize
Add workflow_2, workflow_3 etc. in the Config node for additional workflows. Adjust the email templates in the Resend nodes to match your branding.

Need the full installation guide including SQL code? Download it free at [flowcheckers.com](http://flowcheckers.com)

## 🔗 Nodes Used

HTTP Request, Supabase, AI Agent, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
