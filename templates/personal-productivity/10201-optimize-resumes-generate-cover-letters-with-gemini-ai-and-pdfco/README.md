# ⚡ Optimize Resumes & Generate Cover Letters with Gemini AI and PDF.co

> ⚡ **58 views** · ⚡ [Personal Productivity](../)

## Description

## ATS-Optimized Resume and Cover Letter Generator

**This n8n template automates the process of creating ATS-friendly resumes and personalized cover letters from uploaded pdf resume.**

Use cases
- Instantly generate ATS-optimized resumes for specific job descriptions.
- Create customized cover letters tailored to each role.
- Automate resume enhancement for career portals or HR tools.
- Build a resume improvement backend for job platforms or AI career assistants.

Good to know

This workflow connects to few basic external services so you’ll need to configure credentials for them before running the template. It works on both cloud and self-hosted n8n instances, and setup typically takes 5–10 minutes.

### Requirements

- n8n Cloud or self-hosted instance
- Google Gemini API key for AI text generation
- PDF.co API key for document conversion
- Gmail account (OAuth connected) for delivery

### Customising this workflow

- Replace Gmail with Slack, Notion, or Drive for flexible document delivery.
- Integrate other LLMs (like OpenAI GPT or Claude) for different writing styles.
- Add additional formatting, branding, or multilingual support for global users.
- Use it as the base for a career assistant automation or HR application backend.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, AI Agent, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
