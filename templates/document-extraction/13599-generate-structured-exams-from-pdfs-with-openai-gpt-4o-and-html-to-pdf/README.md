# 🔬 Generate structured exams from PDFs with OpenAI GPT-4o and HTML to PDF

> ⚡ **123 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 🚀 ExamForge AI
### Automated PDF to Structured Exam Generator (MCQ + Essay + Answer Key)

Generate structured exams automatically from text-based PDF materials using AI.

ExamForge AI is a production-ready n8n workflow that transforms educational content into multiple-choice and essay questions with customizable difficulty and automatic answer key generation.

---

# ✨ Features

- 📄 Upload PDF via Webhook
- ✅ File size validation (default: max 5MB)
- 🧹 Automatic text cleaning
- 📏 Token length estimation & safety control
- 🎯 Customizable MCQ & Essay count
- 🧠 Difficulty selection (easy / medium / hard)
- 🌍 Language selection
- 📦 Structured JSON AI output
- 📝 Separate Exam PDF & Answer Key PDF
- 📲 Telegram delivery support (optional)
- 🔒 Parameter validation with structured error responses

---

# 🧠 What This Workflow Does

1. Accepts PDF upload via Webhook
2. Validates file size
3. Extracts and cleans text content
4. Estimates text length to prevent token overflow
5. Validates required parameters:
   - `mcq_count`
   - `essay_count`
   - `difficulty`
   - `language`
6. Sends structured prompt to OpenAI
7. Parses JSON response
8. Formats exam and answer key separately
9. Converts both into PDF
10. Sends results via Telegram or Webhook response

---

# ⚙️ Requirements

## Accounts Required

- OpenAI account (API key required)
- Telegram Bot (optional)
- PDF Munk (API key required)

## Environment

- n8n (self-hosted or cloud)
- Node version compatible with your n8n installation

---

# 🔑 Credentials Setup

## 1️⃣ OpenAI

- Add OpenAI credentials inside n8n
- Insert your API key
- Select preferred model (e.g., GPT-4o / GPT-4)

## 2️⃣ Telegram (Optional)

- Create a Telegram Bot via BotFather
- Insert Bot Token into Telegram node
- Add your Chat ID

---

# 🛠 Webhook Configuration

**Method:** POST  
**Content-Type:** multipart/form-data  

## Required Parameters

| Parameter     | Type   | Required | Description |
|--------------|--------|----------|-------------|
| file         | File   | Yes      | PDF document |
| mcq_count    | Number | Yes      | Number of multiple-choice questions |
| essay_count  | Number | Yes      | Number of essay questions |
| difficulty   | String | Yes      | easy / medium / hard |
| language     | String | Yes      | Output language |

---

# 📥 Example Request

```bash
curl -X POST https://your-n8n-domain/webhook/examforge \
  -F "file=@document.pdf" \
  -F "mcq_count=20" \
  -F "essay_count=5" \
  -F "difficulty=medium" \
  -F "language=Indonesian"

## 🔗 Nodes Used

Webhook, Telegram, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
