# 🔬 Convert PDF content to an MCQ question bank in Excel with Google Gemini

> ⚡ **408 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 🚀 Convert PDF to MCQ Question Bank in Excel with AI (Gemini)

Convert any PDF into a structured Multiple Choice Question (MCQ) bank with answer keys and explanations — fully automated using n8n and Google Gemini.

---

## 🎯 Use Case

- Teachers & Educators  
- Trainers & Course Creators  
- HR & Corporate Training Teams  
- EdTech Builders  

---

## ⚙️ Features

- Webhook-based PDF upload  
- File validation (max 5MB + file existence check)  
- PDF text extraction  
- Automatic text chunking  
- AI-generated MCQs using Google Gemini  
- Clean JSON parsing  
- Export to Excel (.xlsx)  
- Upload to Google Drive  
- Send results via Email & Telegram  

---

## 🔄 Workflow Steps

1. Webhook Trigger  
2. Validate File  
3. Conditional Check (Success / Failed)  
4. Extract Text from PDF  
5. Chunk Text  
6. Generate MCQs (Google Gemini)  
7. Clean JSON Output  
8. Convert to Excel  
9. Upload to Google Drive  
10. Send via Telegram  
11. Send via Email  

---

## 🔌 Requirements

- n8n (self-hosted or cloud)  
- Google Gemini API Key  
- Google Drive credentials  
- Email (SMTP / Gmail)  
- Telegram Bot Token  

---

## 📥 How to Use

Send POST request to webhook with form-data:

- `file` → PDF file  
- `email` → (optional)  
- `telegram_chat_id` → (optional)  

---

## 📤 Output

- Excel file with MCQs  
- Stored in Google Drive  
- Delivered via Email / Telegram  

---

## ⚠️ Notes

- Max file size: 5MB  
- Works best with text-based PDFs  
- AI output quality depends on input clarity  

---

## 💡 Ideas for Improvement

- Difficulty level classification  
- Multi-language support  
- LMS export (Moodle, Google Forms)  
- Bulk PDF processing  

---

## 💰 Commercial Use

This workflow can be used for:
- Internal automation  
- Client services  
- Digital product monetization  

---

## ❤️ Support

If you find this useful:
- Upvote on n8n  
- Share with others

## 🔗 Nodes Used

Send Email, Webhook, Telegram, Google Drive, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
