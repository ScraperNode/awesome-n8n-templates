# 👥 Create an AI recruiter copilot for jobs, resumes, and chat with Mistral and Supabase

> ⚡ **31 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow provides recruiter webhooks for job creation, resume intake, and a recruiter copilot chat, using Mistral AI for job description generation, resume parsing, embeddings, and Q&A, and Supabase/PostgreSQL for storing jobs, candidates, applications, scores, and chat logs.

## How it works
1. Receives a POST request to the recruiter intake webhook and routes the payload to either job creation (no resume file) or resume processing (resume file attached).
2. For job creation, validates required fields, uses Mistral AI to generate a structured job description and skills list, runs a Mistral AI bias/quality audit with up to two improvement cycles, and publishes the approved job to Supabase.
3. For resume processing, validates the uploaded resume is a PDF, extracts and cleans the text, and enriches it with candidate details from the webhook body.
4. Uses Mistral AI to parse the resume into a structured candidate profile and generates a Mistral embedding for the resume text.
5. Upserts the candidate in Supabase, updates the stored resume text and vector embedding, and creates an application record linked to the supplied job_id.
6. If a job_id is provided, fetches the job from Supabase, uses Mistral AI to score the candidate against the job, calculates a weighted match score, saves the scoring fields back to the application, and returns a JSON response to the webhook.
7. Separately, receives recruiter copilot chat requests via a second webhook, optionally responds to health checks, classifies intent with Mistral AI, queries Supabase for relevant context (including vector candidate search), generates an answer with Mistral AI, logs the chat to Supabase, and responds with the reply.

## Setup
1. Create a Mistral API key and configure the HTTP Header Auth credential used for all Mistral chat and embeddings requests.
2. Connect a Postgres/Supabase credential and ensure the required tables and columns exist (jobs, candidates with a vector embedding column, applications, interviews, and chat_logs) including pgvector support for the embedding similarity query.
3. Configure the recruiter intake webhook endpoint (/recruiter-intake) in your source system, sending either job fields (title, department, etc.) or a binary PDF file named resume plus optional candidate fields and job_id.
4. Configure the copilot webhook endpoint (/copilot-chat) in your chat UI or app, sending message and optional recruiter_id, and set __status_check=true when you want a health-check response.
5. Review and adjust any SQL queries, table names, and scoring thresholds/weights to match your schema and evaluation preferences before activating the workflow.

## Additional info
Need Help or Customization?

Digital Biz Tech can help tailor this workflow to your business.

We offer free setup support, including credential configuration and deployment.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)

Developer: THANGA ESWARI N
LinkedIn: [https://www.linkedin.com/in/thanga-eswari](https://www.linkedin.com/in/thanga-eswari)

You can also DM us on LinkedIn for any help or customization.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
