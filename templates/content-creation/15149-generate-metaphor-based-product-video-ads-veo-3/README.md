# 🎬 Generate metaphor-based product video ads Veo 3

> ⚡ **24 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

**1. Brainstorm metaphors** – Takes product details (name, description, audience, value props) and generates 5 visual metaphors using Gemini 2.5 Pro

**2. Select best metaphor** – Scores each metaphor on relevance, AI efficiency, simplicity, abstraction, and visual appeal, then picks the winner and creates a 3-act script + short title

**3. Generate main video prompt** – Translates the winning metaphor and script into a 120–150 word cinematic Veo 3 prompt with lighting, camera movement, and atmospheric details

**4. Generate complementary scene** – Creates a 40–60 word prompt for a static background plate that visually matches the main scene

**5. Create both videos** – Generates two 8-second AI videos with Veo 3.0 and uploads both to GCS

**6. Merge & render** – Combines the main video, complementary background, product name, and metaphor title using Creatomate

**7. Deliver** – Sends the final ad to Telegram

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + Gemini + GCS), Creatomate, and Telegram

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Enter product details** – Fill in the `Input variables` node with your product name, description, target audience, and value propositions

5. **Test** – Execute the workflow to generate a metaphor-based video ad for your product

## 🔗 Nodes Used

HTTP Request, Telegram, Google Cloud Storage, Basic LLM Chain, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
