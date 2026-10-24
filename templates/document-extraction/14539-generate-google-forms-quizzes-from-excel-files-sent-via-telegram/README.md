# 🔬 Generate Google Forms quizzes from Excel files sent via Telegram

> ⚡ **21 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 📊 Generate Google Forms Quiz from Excel via Telegram (n8n Workflow)

Turn your Excel question banks into fully functional Google Forms quizzes automatically — just by sending a file via Telegram.

---

## 🚀 Overview

This workflow allows users to upload an Excel file containing multiple-choice questions through Telegram. The system processes the file and automatically creates a Google Forms quiz with answer keys.

Perfect for:
- Teachers
- Trainers
- HR teams
- Online course creators

---

## ⚙️ Features

- 📩 Upload Excel via Telegram
- 📊 Automatic Excel parsing
- 🧹 Data normalization
- 📝 Google Form auto creation
- ✅ Quiz mode with answer keys
- 🔁 Batch processing with rate limiting
- 📤 Instant delivery of form link

---

## 🧠 How It Works

1. User sends Excel file to Telegram bot
2. Workflow validates file type
3. Excel data is extracted and normalized
4. Google Form is created automatically
5. Questions are inserted with correct answers
6. Form link is sent back to the user

---

## 📂 Excel Format

| question | option_a | option_b | option_c | option_d | answer |
|----------|----------|----------|----------|----------|--------|
| What is 2+2? | 3 | 4 | 5 | 6 | B |

- `answer` must be: A / B / C / D

---

## 🔧 Setup

### 1. Telegram Bot
- Create bot via BotFather
- Add token to n8n

### 2. Google API
- Enable:
  - Google Forms API
  - Google Drive API
- Setup OAuth2 credentials
- Add scopes:
  - forms.body
  - drive.file

### 3. n8n Configuration
- Import workflow
- Set credentials
- Activate workflow

---

## ⚠️ Notes

- Excel must follow the correct format
- Large files may require batching
- Google API rate limits apply

---

## 💡 Use Cases

- Generate exams in seconds
- Convert training materials to quizzes
- Automate assessment workflows

---

## 💰 Monetization Idea

You can turn this into a SaaS by:
- Offering a Telegram bot service
- Limiting free usage (e.g. 20 questions)
- Charging for unlimited access

---

## 🔥 Future Improvements

- Multi-language support
- AI question validation
- Question randomization
- Section grouping by topic

---

## 👨‍💻 Built with n8n

Automation made simple.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
