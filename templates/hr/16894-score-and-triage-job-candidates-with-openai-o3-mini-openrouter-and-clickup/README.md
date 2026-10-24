# 👥 Score and triage job candidates with OpenAI o3-mini (OpenRouter) and ClickUp

> ⚡ **6 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects candidate CVs through an n8n Form, extracts text from a PDF, uses OpenRouter (OpenAI o3-mini) to score and summarize the candidate, and creates a ClickUp task with the evaluation for recruiter review.

## How it works
1. Receives a CV submission through an n8n Form trigger (PDF upload plus message, captcha question, and consent).
2. Extracts text content from the uploaded PDF CV.
3. Validates that the CV text exists, the captcha answer is correct, and the candidate consent field is set to “I agree”.
4. Sends the CV text and the candidate’s optional message to an OpenRouter chat model (openai/o3-mini) to generate a score, suggested best-fit role, and a short summary.
5. Creates a new ClickUp task containing the AI output so the recruiting team can review the candidate.

## Setup
1. Configure the n8n Form trigger fields and publish the form, then share the generated form URL with candidates.
2. Add an OpenRouter API credential for the OpenRouter chat model used to score and summarize candidates.
3. Add a ClickUp OAuth2 connection and select the target Workspace/Space/Folder/List in the ClickUp task creation step where candidates should be added.

## 🔗 Nodes Used

ClickUp, AI Agent, n8n Form Trigger, Extract from File, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
