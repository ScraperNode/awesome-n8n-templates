# 🔬 Generate AI sales proposals with Gemini and Google Docs

> ⚡ **69 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Generate professional sales proposals from a simple form—AI writes the content, you deliver the document.**

  Fill out client details, pain points, and pricing, and this workflow creates a polished proposal with calculated ROI metrics, executive summary, solution strategy, and team bios.

  ## How It Works

  1. Sales rep submits a form with client name, industry, pain points, and pricing
  2. Code node calculates ROI, net savings, and break-even period
  3. Gemini AI generates proposal content: executive summary, key challenges, solution strategy, team bios, and call to action
  4. Copies your Google Doc template and replaces all placeholders with generated content
  5. Final proposal is ready in Google Drive

  ## Setup

  1. **Import** the workflow JSON
  2. **Create a Google Doc template** with placeholders:
     - `{{client_name}}`, `{{executive_summary}}`, `{{key_challenges}}`
     - `{{solution_strategy}}`, `{{team_bios}}`, `{{next_steps}}`
     - `{{formatted_roi}}`, `{{formatted_net_savings}}`, `{{formatted_break_even}}`
     - `{{formatted_solution_cost}}`, `{{date}}`
  3. **Add credentials:**
     - Google Drive → OAuth2
     - Google Docs → OAuth2
     - Google Gemini → API key from [aistudio.google.com](https://aistudio.google.com)
  4. **Configure "Copy proposal template" node** → Point to your template document
  5. **Customize the AI** → Edit system message in "Generate proposal content" to match your tone
  6. **Test** → Submit the form and check the generated proposal
  7. **Activate**

## 🔗 Nodes Used

Google Drive, Google Docs, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
