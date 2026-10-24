# 👥 Screen resumes and match candidates with GPT-4o, Google Sheets and email

> ⚡ **141 views** · 👥 [HR & Recruitment](../)

## Description

## How It Works
This workflow automates candidate screening and job matching for recruiters, HR operations teams, and talent acquisition leads. It eliminates the manual effort of parsing resumes, evaluating multi-dimensional candidate fit, and routing outcomes based on assessment confidence. Resume and job data are received via a POST webhook and passed directly to the Matching Agent Orchestrator, backed by a matching model and shared memory. The orchestrator coordinates four specialist agents in parallel: a Resume Parser Agent (structured extraction), a Skill Analysis Agent (competency mapping), an Experience Assessment Agent (seniority and relevance scoring), and a Cultural Fit Agent (organisational alignment evaluation). A Validation Logic Tool cross-checks outputs before a Ranking Output Parser produces a structured candidate ranking. Results are then checked against a confidence threshold — low-confidence cases trigger a review alert via email and are stored in Google Sheets for human follow-up, while high-confidence matches are prepared as analysis data, stored in Sheets, and distributed as a ranked report via email.

## Setup Steps
1. Import workflow; configure the POST webhook trigger URL for resume and job data ingestion.
2. Add AI model credentials to the Matching Agent Orchestrator, Resume Parser Agent, Skill Analysis Agent, Experience Assessment Agent, and Cultural Fit Agent.
3. Link Google Sheets credentials; set sheet IDs for Low Confidence Cases and Analysis Results tabs.
4. Connect email credentials to the Send Review Required Alert and Send High Confidence Report nodes.
5. Set confidence threshold values in the Check Confidence Level node.

## Prerequisites
- OpenAI API key (or compatible LLM)
- Google Sheets with candidate tracking tabs pre-created
- Email account credentials (SMTP or Gmail OAuth)
## Use Cases
- Recruiters automating high-volume resume screening against structured job descriptions
## Customisation
- Extend specialist agents with domain-specific scoring rubrics for technical or executive roles
## Benefits
- Four parallel specialist agents evaluate candidates across skills, experience, and cultural fit simultaneously

## 🔗 Nodes Used

Send Email, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
