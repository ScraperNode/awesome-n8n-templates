# 👥 Screen German job ads for AGG risks with Groq and data tables

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects a job title and job ad text via an n8n form, checks it against an AGG wording rules data table, uses Groq to flag additional risky phrasing, scores the overall discrimination risk, logs the result to a data table, and shows a clear or review-required verdict.

## How it works
1. Receives a job title and job ad text through an n8n Form trigger.
2. Applies the configured screening policy (review threshold and maximum points the model can contribute).
3. Loads AGG term rules from an n8n Data Table and deterministically scans the ad for matching phrases (including adding a warning if a gender marker like “(m/w/d)” is missing).
4. Sends the ad text to Groq (Chat Model) to identify verbatim potentially discriminatory wording, the protected ground, a brief reason, and a neutral rewrite suggestion with a confidence score.
5. Combines rule-based flags with a capped, confidence-weighted model contribution to produce a verdict (LIKELY CLEAR, REVIEW, or VIOLATION RISK) and a 0–100 risk score.
6. Records the verdict, score, matched phrases, model confidence, and threshold used into an n8n Data Table screening log.
7. Displays a detailed completion page listing flagged passages when review is needed, or a short confirmation page when the ad is likely clear.

## Setup
1. Add a Groq API credential and select it in the Groq Chat Model node.
2. Create and select an n8n Data Table for “AGG term rules” (used by Load AGG Term Rules) with columns such as pattern, match_type, severity, points, ground, and note, and populate it with your starter rules.
3. Create and select an n8n Data Table for the screening log (used by Record In Screening Log) with columns for checked_at, job_title, verdict, risk_score, hard_flags, soft_flags, model_flags, model_confidence, review_threshold, and report.
4. Update the screening policy values (review_threshold and model_max_points) to match your internal triage criteria.

## Requirements
- A Groq API key (the free tier works)
- n8n Data Tables (n8n Cloud or a recent self-hosted version)

## Customization
- Change the review threshold and the model point cap in Set Screening Policy
- Add your own terms to the agg_term_rules table without touching any node
- Swap the model id in the Groq Chat Model node

## Additional info
The suggested starter rules are German-focused; add English phrases such as native speaker or with photo to the rules table the same way. Wording your rules do not cover relies on the capped Groq pass alone. This is a triage aid, not legal advice.

## 🔗 Nodes Used

AI Agent, Structured Output Parser, n8n Form Trigger, Groq Chat Model, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
