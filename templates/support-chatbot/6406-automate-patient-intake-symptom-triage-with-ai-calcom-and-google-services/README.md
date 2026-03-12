# 💬 Automate patient intake & symptom triage with AI, Cal.com and Google Services

> ⚡ **215 views** · 💬 [Support Chatbots](../)

## Description

**🚨 DISCLAIMER (READ FIRST):**

This workflow is **NOT HIPAA-compliant** and **NOT intended for production use**.
It is a **test/demo prototype** built for experimentation, education, and non-clinical evaluation purposes only.

It does **not include encryption**, **does not meet any regulatory standards**, and **must not be used with real patient data or PHI** (Protected Health Information).

The creator is **not liable** for any misuse or damage caused by deploying this workflow in a real-world or clinical environment.

---

🎥 **Watch the Workflow Demo:** [https://youtu.be/1qt3sU2o4_Y?si=oA1CizPaO66_tKnc](https://youtu.be/1qt3sU2o4_Y?si=oA1CizPaO66_tKnc)

**🔧 Workflow Summary:**
This n8n workflow mimics a lightweight AI assistant for healthcare clinics by automatically analyzing patient symptoms and booking appointments. It uses no-code tools and basic AI integration to demonstrate automation potential in medical triage.

---

**🩺 What it does:**

1. **Patient submits a form** (Cal.com or webhook) with name, contact, and symptoms
2. **AI processes the symptoms** (via OpenRouter) and suggests the likely issue
3. **AI assigns a relevant department** like Ortho, Neuro, etc.
4. **Books the appointment** on the correct Google Calendar (department-wise)
5. **Saves the patient info** to a Google Sheet for tracking
6. **Skips duplicate appointments** for the same patient (based on name or contact)

---

**📦 Tools Used:**
• n8n (Cloud or Self-Hosted)
• OpenRouter (GPT-based AI model)
• Cal.com (Booking system)
• Google Calendar
• Google Sheets

---

**⚠️ For a HIPAA-Compliant Version (Future-Ready Notes):**

* Self-host n8n to avoid vendor lock-in or BAA issues
* Run LLMs locally (LLaMA, Mistral) instead of APIs
* Replace Cal.com with a self-hosted calendar/booking tool
* Use end-to-end encryption for PHI transmission
* Store data in encrypted Postgres (with pgcrypto or similar)
* Implement access control and audit logging
* AND MANY MORE.... REFER/CONSULT RESPECTIVE AUTHORITIES FOR MORE INFO

---

**💡 Use Case:**
This demo can help founders, developers, or healthtech explorers prototype AI-assisted clinic systems without writing code — but again, strictly for mock/demo workflows only.

## 🔗 Nodes Used

Google Sheets, Google Calendar, Cal.com Trigger, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
