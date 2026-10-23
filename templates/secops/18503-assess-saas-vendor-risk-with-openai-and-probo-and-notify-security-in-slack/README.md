# 🔒 Assess SaaS vendor risk with OpenAI and Probo and notify security in Slack

> ⚡ **3 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow collects a SaaS vendor request via n8n Forms or a webhook, discovers and classifies public security/privacy links with OpenAI, analyzes the evidence to produce a structured risk assessment, creates the vendor and risk records in Probo, and notifies the security team in Slack.

## How it works
1. Triggers when someone submits the n8n form or sends a POST request to the intake webhook.
2. Normalizes the submitted vendor details (including validating and standardizing the vendor website URL) and loads Probo/Slack configuration values.
3. Fetches the vendor homepage, extracts all links, normalizes them into absolute URLs, and deduplicates the results.
4. Uses OpenAI to classify each discovered link for relevance (privacy, security, trust/compliance, terms, DPA/subprocessors) and keeps only the relevant pages.
5. Fetches the relevant pages, cleans the HTML into short text excerpts, and compiles the excerpts as public evidence.
6. Uses OpenAI to analyze the compiled evidence and returns a JSON risk assessment (assurance score, risk level, compliance signals, risks, and recommended actions) that is normalized into a risk score and Probo-ready notes.
7. Creates a third-party vendor, requester contact, service, risk assessment, and risk record in Probo, then posts a Slack message with the risk details and a link to the Probo vendor record.

## Setup
1. Add OpenAI API credentials for the two AI steps (link classification and vendor risk analysis) and choose the desired model.
2. Add your Probo API credentials and replace the placeholder values for Probo organization ID, console base URL, and security owner ID in the workflow configuration.
3. Add Slack credentials, set the target Slack channel ID in the workflow configuration, and ensure the workflow is allowed to post messages to that channel.
4. Use the n8n form as-is or copy the webhook URL from the intake trigger and configure your request source to POST the required fields (vendor name, website, requester details, department, and justification).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
