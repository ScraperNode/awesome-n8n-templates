# 🔬 AI-powered cover letter generator with resume matching & Google Docs

> ⚡ **293 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow generates a tailored cover letter using a provided resume and job description.

Users submit a job description via form (or workflow input), the workflow uses an LLM to write a professional, casual cover letter, then creates and populates a Google Doc and redirects the user to download or review it.

---

## What You Must Update Before Running

### 1. Resume Content
Update the **Configuration** node to include your own resume text.  
This resume is injected directly into the prompt and used as the sole source of experience and qualifications.

### 2. LLM Credentials
The workflow uses **OpenRouter** with an OpenAI-compatible model.

You must:
- Add your own OpenRouter API credentials
- Optionally change the model selection if desired

### 3. Google Docs Credentials
This workflow creates and edits Google Docs.

You must:
- Connect your own Google Docs OAuth credentials
- Update the destination folder ID if you want files saved elsewhere

---

## What You Can Configure

### 1. Prompt Tone & Constraints
Edit the **Write Cover Letter** agent system prompt to adjust:
- Tone (more formal or more casual)
- Length
- Writing style constraints

### 2. Execution Method
The workflow supports:
- Manual execution via form submission
- Execution as a sub-workflow via workflow inputs

## 🔗 Nodes Used

Google Docs, Execute Workflow Trigger, AI Agent, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
