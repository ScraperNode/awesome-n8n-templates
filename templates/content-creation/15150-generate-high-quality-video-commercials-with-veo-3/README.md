# 🎬 Generate high quality video commercials with Veo 3 

> ⚡ **59 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

**1. Input business details** – Takes business name, description, services, offer, CTA, location, and target audience from a form

**2. Write the script** – Uses Gemini 2.5 Pro to create a 16-second, two-part micro-commercial script with character dialogue (Part 1: problem + solution, Part 2: resolution + CTA)

**3. Generate Part 1 video** – Creates an 8-second Veo 3 prompt from Part 1 script and generates the first video clip

**4. Analyze character appearance** – Uploads Part 1 video to Gemini for hyper-detailed character analysis (face, hair, attire, etc.) to ensure consistency in Part 2

**5. Generate Part 2 video** – Creates an 8-second Veo 3 prompt using Part 2 script + character personas, then generates the second video clip

**6. Merge videos** – Combines both clips using Creatomate into a single 16-second video

**7. Deliver** – Sends the final commercial to Telegram

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + Gemini + GCS), Creatomate, and Telegram

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Enter business details** – Fill in the `Form` node with your business name, description, services, offer, CTA, location, and target audience

5. **Test** – Execute the workflow to generate a two-part commercial for your business

## 🔗 Nodes Used

HTTP Request, Telegram, Google Drive, Google Cloud Storage, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
