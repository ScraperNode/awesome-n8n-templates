# 🎬 Seo blog generator with GPT-4o, Perplexity, and Telegram integration

> ⚡ **5,675 views** · 🎬 [Content Creation & Video](../)

## Description

### SEO Blog Generator with GPT-4o, Perplexity, and Telegram Integration

This workflow helps you automatically generate SEO-optimized blog posts using **Perplexity.ai**, **OpenAI GPT-4o**, and optionally **Telegram** for interaction.

---

### 🚀 Features

- 🧠 **Topic research** via Perplexity sub-workflow
- ✍️ **AI-written blog post** generated with GPT-4o
- 📊 Structured output with metadata: title, slug, meta description
- 📩 Integration with Telegram to trigger workflows or receive outputs (optional)

---

### ⚙️ Requirements

- ✅ OpenAI API Key (GPT-4o or GPT-3.5)
- ✅ Perplexity API Key (with access to `/chat/completions`)
- ✅ (Optional) Telegram Bot Token and webhook setup

---

### 🛠 Setup Instructions

1. **Credentials**:
   - Add your OpenAI credentials (`openAiApi`)
   - Add your Perplexity credentials under `httpHeaderAuth`
   - Optional: Setup Telegram credentials under `telegramApi`

2. **Inputs**:
   - Use the **Form Trigger** or **Telegram** input node to send a `Research Query`

3. **Subworkflow**:
   - Make sure to import and activate the subworkflow `Perplexity_Searcher` to fetch recent search results

4. **Customization**:
   - Edit prompt texts inside the `Blog Content Generator` and `Metadata Generator` to change writing style or target industry
   - Add or remove output nodes like Google Sheets, Notion, etc.

---

### 📦 Output Format

The final blog post includes:

- ✅ Blog content (1500-2000 words)
- ✅ Metadata: title, slug, and meta description
- ✅ Extracted summary in JSON
- ✅ Delivered to Telegram (if connected)

---

Need help? Reach out on the [n8n community forum](https://community.n8n.io)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
