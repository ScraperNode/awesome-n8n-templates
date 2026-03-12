# 👥 AI recruiter – analyze multiple CVs vs job description using OpenAI GPT

> ⚡ **785 views** · 👥 [HR & Recruitment](../)

## Description

An AI Recruiter that screens, scores, and ranks candidates in minutes — directly inside n8n.  

---

## 🧠 Overview
An AI-powered recruiter workflow that compares multiple candidate CVs with a single Job Description (JD).  
It analyzes text content, calculates fit scores, identifies strengths and weaknesses, and provides automated recommendations.

---

⚙️ How it works
🔹 Webhook Trigger – Upload one Job Description (JD) and multiple CVs (PDF or text)
🔹 File Detector – Auto-identifies JD vs CV
🔹 Extract & Merge – Reads text and builds candidate dataset
🔹 🤖 AI Recruiter Agent – Compares JD & CVs → returns Fit Score, Strengths, Weaknesses, and Recommendation
🔹 📤 Output Node – Sends structured JSON or summary table for HR dashboards or Chat UI


---
Example:  
Upload JD.pdf + 3 candidate CVs → get instant JSON report with top match and recommendations.

---

## 🧩 Requirements
- OpenAI or compatible AI Agent connection (no hardcoded API keys).  
- Input files in PDF or text format (English or Vietnamese supported).  
- n8n Cloud or Self-Hosted v1.50+ with AI Agent nodes enabled.
🔸 “OpenAI API Key or n8n AI Agent credential required”
---

## 🧱 Customizing this workflow
- Swap the AI model with Gemini, Claude, or another LLM.  
- Add a Google Sheets export node to save results.  
- Connect to SAP HR or internal employee APIs.  
- Adjust scoring logic or include additional attributes (experience, skills, etc.).

---

## 👩‍💼 Author
https://www.linkedin.com/in/nguyen-phuong-17a71a147/  
Empowering HR through intelligent, data-driven recruitment.

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
