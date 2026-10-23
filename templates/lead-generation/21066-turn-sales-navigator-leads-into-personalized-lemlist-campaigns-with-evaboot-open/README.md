# 🎣 Turn Sales Navigator leads into personalized lemlist campaigns with Evaboot, OpenAI, and Slack

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow collects a LinkedIn Sales Navigator lead URL via an n8n form, uses Evaboot to extract lead and company data plus a verified email, generates a personalized icebreaker with OpenAI, creates the lead in a lemlist campaign, and posts success or no-email alerts to Slack.

## How it works
1. Receives a Sales Navigator lead URL from an n8n form submission.
2. Sends the URL to Evaboot to extract the lead profile, company details, and a verified email, retrying after a 1-minute wait until the extraction finishes.
3. Normalizes the extracted response into a single lead record for downstream use.
4. Checks whether the lead has a non-empty email and the email status is not marked as invalid, and posts a warning to Slack if the email is not deliverable.
5. Uses OpenAI (GPT-4.1-mini) to generate a single-sentence icebreaker from the extracted lead and company fields, constrained to facts provided in the data.
6. Creates or deduplicates the lead in a selected lemlist campaign and stores the generated icebreaker in the custom field/variable used by your campaign.
7. Posts a confirmation message to Slack including the lead details and the generated icebreaker.

## Setup
1. Install the Evaboot community node package `@evaboot-team/n8n-nodes-evaboot` in your n8n instance.
2. Add credentials for Evaboot (API key), OpenAI, lemlist, and Slack.
3. Update the “Set your offer and channel” values to match your offer statement and the Slack channel you want to post to.
4. Select the target lemlist campaign ID in the lemlist lead-creation step and ensure your campaign email template references the `{{icebreaker}}` variable/field.
5. Activate the workflow and share the form’s production URL with whoever will submit Sales Navigator lead URLs.

## 🔗 Nodes Used

Slack, Lemlist, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
