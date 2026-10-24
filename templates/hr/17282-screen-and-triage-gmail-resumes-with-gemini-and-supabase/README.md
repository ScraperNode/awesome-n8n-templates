# 👥 Screen and triage Gmail resumes with Gemini and Supabase

> ⚡ **6 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow watches Gmail for new emails with resume attachments, extracts text from PDF, and uses Google Gemini to evaluate candidates against role requirements. It logs each screening result to Supabase, then either emails the recruiter, saves a rejection as a Gmail draft, or labels the email for manual review.

## How it works
1. Triggers every minute when a new Gmail email arrives that matches the search query `has:attachment`.
2. Loads the job title, required skills, minimum experience, recruiter email, Supabase table name, and the Gmail label ID used for manual review.
3. Extracts plain text from the attached resume PDF in the email.
4. Sends the resume text and job requirements to Google Gemini and parses a structured result including name, experience, matched/missing skills, decision, and rationale.
5. Inserts the structured screening result into a Supabase table for tracking and reporting.
6. Routes by the decision to either email the recruiter for shortlisted candidates, save a rejection reply as a Gmail draft in the same thread, or label the original email for human review.

## Setup
1. Add a Gmail OAuth2 connection for the Gmail trigger and Gmail actions (send email, create draft, and add label).
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model used to screen resumes.
3. Add a Supabase API credential, and create a `candidates` table with fields for candidate name, years of experience, matched skills, missing skills, decision, reason, and timestamp.
4. Create a Gmail label for manual review, copy its label ID, and paste it along with your job requirements and recruiter email into the configuration values.
5. Confirm the Gmail trigger query and the attachment binary property name (for example, `attachment_0`) match how your application emails arrive.

## 🔗 Nodes Used

Gmail, Supabase, Gmail Trigger, Basic LLM Chain, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
