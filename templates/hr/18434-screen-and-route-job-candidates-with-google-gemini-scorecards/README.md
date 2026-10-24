# 👥 Screen and route job candidates with Google Gemini scorecards

> ⚡ **4 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects job applications via an n8n Form, uses Google Gemini to score and summarize resumes against a predefined job rubric, routes candidates by match score, and produces a structured audit/ATS-style record with interview questions and status.

## How it works
1. Triggers when a candidate submits the n8n Form (or when you manually run a seeded sample candidate for testing).
2. Normalizes the candidate fields and attaches the target job specification and evaluation rubric.
3. Sends the candidate profile and resume text to Google Gemini (Gemini 3.5 Flash) to generate a structured scorecard with a match score, recommendation, summary, strengths, gaps, and tailored interview questions.
4. Routes the candidate into Strong Hire (score ≥ 80), Manager Review (60–79), or Reject (< 60) based on the match score.
5. For Strong Hire candidates, formats an interview invitation package and an interviewer-ready summary with tailored questions.
6. Merges the selected branch output into a consolidated audit record and generates a final ATS-style log entry containing the evaluation details and processing timestamp.

## Setup
1. Add a Google Gemini (PaLM) API credential for the Gemini 3.5 Flash model.
2. Publish the n8n Form and share its URL with candidates (or keep the manual trigger enabled for test runs).
3. Update the target job specification text and the score thresholds (80/60) to match your role and hiring rubric.

## 🔗 Nodes Used

Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
