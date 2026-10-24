# 🔬 Screen AI systems for EU AI Act high-risk tiers with Groq and data tables

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects AI system details via an n8n form, screens them for EU AI Act high-risk signals using data table keyword matching and a Groq-hosted LLM, then assigns a risk tier, lists applicable obligations, and logs the assessment to an internal register table.

## How it works
1. Receives AI system details from a user-submitted n8n form (purpose, decision effects, whether it affects people, biometric/emotion data, human review, role, and EU market scope).
2. Loads configurable scoring thresholds and pulls Annex III category keywords and notes from an n8n data table.
3. Applies deterministic rules to detect Article 5 prohibited-practice patterns, match Annex III areas by keywords, and score additional signals like significant effects on people, biometric/emotion data use, and lack of human review.
4. Sends the free-text purpose to a Groq chat model to suggest Annex III points, whether the system profiles natural persons, and a confidence score, then parses the structured result.
5. Combines deterministic signals and the model’s assessment into a final risk tier (PROHIBITED, HIGH_RISK, NEEDS_REVIEW, LIMITED_RISK, or MINIMAL_RISK) and compiles the corresponding EU AI Act obligation list and evidence report.
6. Writes the assessment (tier, score, annex points, signal codes, and report) to an n8n data table register and shows a tailored completion page depending on whether the tier is minimal risk or not.

## Setup
1. Create and select an n8n data table for Annex III categories with fields like annex_point, area_name, keywords, and obligation_note, and populate it with your keyword set.
2. Create and select an n8n data table to act as your AI system register (for example assessed_at, system_name, owner_team, risk_tier, risk_score, annex_points, signal_codes, and report).
3. Add Groq credentials for the Groq chat model node and confirm the model name you want to use.
4. Adjust the scoring thresholds and model point cap in the classification policy settings to match your internal triage rules.
5. Share the form URL internally so teams can submit one AI system per screening run.

## Requirements
- Two n8n data tables: an Annex III keyword register and a classification register
- A chat model credential. Groq is used here, any chat model works
- No paid API. The workflow makes no outbound calls other than the chat model

## Customization
- Swap the form trigger for a sub-workflow trigger to screen an existing AI inventory in bulk
- Add a notification node on the high-risk branch so a named owner picks it up
- Extend the keyword register with your own product vocabulary. Most of the accuracy comes from there

## Additional info
This is a triage aid, not legal advice. Keyword matching only sees the words you write, so a MINIMAL_RISK result is a record of what you described rather than a clearance. The model's contribution is capped at 20 of the 100 points and the deterministic rules can reach the high-risk threshold without it, so an instruction pasted into the description gets classified rather than obeyed. If the Annex III table is empty the workflow refuses to clear a system and returns NEEDS_REVIEW instead. Tested on a live instance across all five tiers, a prompt-injection attempt, an empty register, and an unavailable model.

## 🔗 Nodes Used

AI Agent, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
