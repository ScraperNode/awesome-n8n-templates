# 👥 Screen CVs with OpenAI and PostgreSQL using chained prompts

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## How it works

- Webhook receives a job ID and list of candidate IDs from your database
- If the job has no template yet, **Prompt 0** reads the job description and automatically extracts mandatory requirements, differentials, behavioral competencies and sets the weight of each criterion
- For each candidate, 3 prompts run sequentially with accumulated context:
  - **Prompt 1** scores the candidate (0–100) against the job template using calibration anchors to avoid score inflation, plus a breakdown score per criterion
  - **Prompt 2** receives the score as context and identifies strengths with concrete resume evidence, separating critical gaps (missing mandatory requirements) from secondary gaps (missing differentials)
  - **Prompt 3** receives the gaps as context and generates personalized interview questions for that specific candidate — not generic HR templates
- Results are saved directly to PostgreSQL after each candidate
- When all candidates are processed, **Prompt 4** automatically generates an executive summary of the entire pool with recommendations on who to interview

## Set up steps

- Add your **OpenAI credentials** to all AI nodes (~2 min)
- Add your **PostgreSQL credentials** to all Postgres nodes (~2 min)
- Create the required tables using the SQL schema provided in the workflow sticky note (~5 min)
- Trigger via `POST /webhook/cv-analyze` with `{ "job_id": 1, "candidate_ids": [1, 2, 3] }`

## 🔗 Nodes Used

Postgres, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
