# 🎬 Multi-agent PDF-to-blog content generation

> ⚡ **14,359 views** · 🎬 [Content Creation & Video](../)

## Description

**Purpose of workflow:**

The purpose of this workflow is to automatically transform complex, lengthy PDFs into concise, insightful blog posts. This process aims to make dense information more accessible and understandable to a broader audience.

**How it works:**

Multi-agent team:

Working together to transform PDF to insightful blog
- Content Analyst: Extracts key information and structure from the PDF.
- Project Planner: Organizes the workflow and ensures efficient processing.
- Writers: Multiple agents that craft engaging content based on the analyzed information.
- Editor: Polishes the final output for accuracy, reliability, and readability.


**Step by step**
1. User inputs parameters via a n8n form (tone, word count, sections, PDF file).
2. System extracts text from the PDF.
3. Content Analyst AI agent analyzes the extracted text, identifying main topics and key points.
4. Project Planner AI agent organizes the workflow, creating a structure for the blog post.
5. Multiple Writer AI agents (based on the number of sections specified) each write a portion of the blog post.
6. Editor AI agent combines all sections and polishes the final draft.
7. Generates a title for the blog post.
8. Final content is uploaded to a publishing Ghost platform

## 🔗 Nodes Used

Ghost, AI Agent, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
