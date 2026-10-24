# 🎣 Qualify and route client leads with OpenAI, Supabase, and Gmail

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures client requests via an n8n Form, validates and stores leads in Supabase, uses OpenAI to generate a structured requirements analysis, then calculates a rule-based qualification score and sends the appropriate client and internal emails through Gmail for HOT, WARM, or LOW-FIT leads.

## How it works
1. Receives a new submission from an n8n Form with project, budget, timeline, and contact details.
2. Normalizes the form fields and checks that required information (including a valid email and minimum brief length) is present.
3. If required details are missing, compiles a list of issues and sends a clarification request to the client via Gmail.
4. If the submission is valid, creates a new lead record in Supabase.
5. Sends the lead details to OpenAI to produce a structured summary, risk flags, missing information, and a recommended next step.
6. Computes a deterministic qualification score from the lead data and AI outputs, then routes the lead as HOT, WARM, or LOW-FIT.
7. Updates the lead in Supabase and sends the matching client email plus an internal team notification via Gmail, then marks the lead status as contacted/sent.

## Setup
1. Add a Supabase credential and ensure a `leads` table exists with fields used by the workflow (for example: full_name, email, company_name, industry, required_service, project_brief, budget_range, expected_timeline, phone_number, lead_status, and the AI/score fields).
2. Add an OpenAI API credential for the OpenAI node and select/confirm a structured-output capable model.
3. Add a Gmail OAuth2 credential for the Gmail send steps.
4. Replace `your-team-email@example.com` with your real internal notification address in the team email steps.
5. Customize the n8n Form title/description/fields and update the email templates (agency name and wording) to match your process before activating the workflow.

## Requirements
- OpenAI API credential, Supabase project/table, Gmail credential, and an n8n Form Trigger setup.

## Customization
- Update lead scoring rules, email wording, Supabase field names, and internal notification address to match your agency process.

## 🔗 Nodes Used

Gmail, Supabase, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
