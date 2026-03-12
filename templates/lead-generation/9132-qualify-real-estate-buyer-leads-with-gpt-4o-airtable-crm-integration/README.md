# 🎣 Qualify real estate buyer leads with GPT-4o & Airtable CRM integration

> ⚡ **650 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# 🧠 How It Works

This **AI Agent** automatically qualifies **property buyer leads** from form submissions and sends them directly to your CRM.

### 🔄 Workflow Steps

1. **Form Submission Trigger**  
   - When a user submits their details via a property inquiry form, the workflow is activated.

2. **AI Lead Classification**  
   - The buyer’s input (budget, location, timeline, etc.) is analyzed by **OpenAI**.  
   - Structured data is extracted, and a **lead score (0–100)** is generated.

3. **Lead Qualification Logic**  
   - Leads with a **score ≥ 70** are marked as **qualified**.  
   - Leads with a lower score can be ignored or stored separately for later review.

4. **Follow-Up Actions (for Qualified Leads)**  
   - An **email notification** is sent to the real estate agent.  
   - A **record is created in Airtable** to act as a lightweight CRM.

---

# ⚙️ How to Set Up

### 1. Form Setup
- Replace the default trigger with your preferred source:  
  - Typeform, Google Forms, Webflow form, etc.  
- Ensure your form collects the following fields:  
  - `Name`, `Email`, `Budget`, `Location`, `Timeline`, `Property Type`

### 2. Connect Your Credentials
- Add your **OpenAI API key** for the LLM node  
- Connect your **Gmail account** for notifications  
- Link your **Airtable base & table** to store qualified leads  

### 3. Customize Scoring Logic (Optional)
- Edit the **Information Extractor** prompt to tweak how scoring is calculated  
- Example: prioritize budget fit, location, or timeline  

### 4. Test the Workflow
- Submit a test entry via the form  
- Confirm:  
  - You receive the notification email  
  - A new lead record appears in Airtable  

### 5. Activate & Go Live
- Turn on the workflow  
- Start qualifying **real buyer leads in real-time** 🎯  

---

# 🚀 Use Cases
- Realtors → Filter out unqualified leads automatically  
- Agencies → Save time by only engaging with high-quality inquiries  
- Teams → Centralize qualified leads in Airtable for instant collaboration  

---

## 🔗 Nodes Used

Airtable, Gmail, OpenAI Chat Model, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
