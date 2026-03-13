# 💬 Capture and nurture AI agency leads with Google Gemini, Outlook and Sheets

> ⚡ **91 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI Agent Lead Funnel for AI Agencies  
## An End-to-End Automation That Turns Demos Into Booked Calls

This n8n workflow is a **full inbound → outbound hybrid funnel** designed for AI agencies.  
It captures warm leads through instant AI value, then automatically follows up with **personalized, context-aware outreach and reminders** until the lead either replies or books a call.

No cold scraping. No manual follow-ups. Just leverage + timing.

---

## 🚀 How the Workflow Works

---

## 📋 PART 1 — Lead Capture & Instant Value

### **1 — Share High-Impact AI Image Edits**
You post before/after examples using the **NanoBanna / Gemini image-editing model** on social platforms.  
Each post includes a link to a lightweight form.

The visual results do the selling for you.

---

### **2 — Lead Submits Image & Details**
The form collects:
- Image upload  
- Edit instructions  
- Name  
- Email  
- Company name  

This filters for **high-intent prospects only**.

---

### **3 — AI Edits the Image Instantly**
Once submitted, the workflow:
- Sends the image + instructions to the AI image editor  
- Preserves lighting and camera angle unless specified  
- Generates a polished result in seconds  

---

### **4 — Result Delivered via Email**
The edited image is emailed directly to the user with:
- A friendly confirmation message  
- Soft positioning for future work  

This establishes trust before any sales motion happens.

---

### **5 — Lead Is Logged Automatically**
All lead data is saved to Google Sheets:
- Name  
- Company  
- Email  
- Timestamp  

This becomes your **live CRM of warm inbound leads**.

---

## 🤖 PART 2 — AI-Driven Personalized Outreach

### **6 — AI Analyzes the Lead**
An AI sales agent:
- Looks at the company name + context  
- Reviews a library of proven automation ideas  
- Either selects the best fit **or creates a simple custom one**

---

### **7 — AI Writes a Personalized Outreach Email**
The agent generates a short email that:
- Mentions a **specific automation already built**
- States you can help implement it quickly
- Invites them to book a call via your calendar

No marketing fluff. No generic pitches.  
Every email feels hand-written.

---

### **8 — Outreach Email Is Sent Automatically**
The email is sent from your inbox (Outlook, Gmail, SMTP, etc.) and includes:
- Their name  
- Their company  
- A clear calendar booking link  

---

## 📬 PART 3 — Smart Follow-Up System

### **9 — Wait 48 Hours**
The workflow pauses to give the lead time to respond naturally.

---

### **10 — Check for a Reply**
After 48 hours:
- If the lead replied → they are tagged as **Interested**
- If no reply → continue to follow-up

(Current reply detection is placeholder logic and can be swapped for a live inbox listener.)

---

### **11 — AI Writes a Polite Follow-Up**
If there’s no response, an AI agent writes:
- A short, non-pushy follow-up  
- Referencing the original automation idea  
- Under 60 words  

---

### **12 — Follow-Up Email Is Sent**
The follow-up goes out automatically and keeps the conversation alive without manual effort.

---

## 📈 Why This Workflow Converts So Well

### **Instant Value First**
Leads experience AI results before being pitched anything.

### **Context-Aware Outreach**
Every email is personalized based on the lead, not a template.

### **Built-In Persistence**
The system follows up automatically — no leads fall through the cracks.

### **Fully Automated**
Once live, this workflow handles:
- Lead capture  
- AI delivery  
- Outreach  
- Follow-ups  
- CRM updates  

You just keep posting content.

---

## 🔧 Setup Requirements

To deploy this workflow, connect:

- **Google Gemini API** (image editing + agents)  
- **Email provider**
  - Outlook  
  - Gmail  
  - SMTP  
- **Google Sheets**
  - Columns: Name, Company, Email, Time, Status  
- **Calendar booking link**
  - Example: `https://cal.com/your-link`

All credentials are modular and easily swappable.

---

## 🎯 Summary

This n8n automation turns attention into action by:
1. Delivering immediate AI value  
2. Following up with relevant, personalized ideas  
3. Nudging leads toward a booked call — automatically  

It’s not just a lead funnel.  
It’s an **AI sales assistant that runs 24/7**.

## 🔗 Nodes Used

Google Sheets, Microsoft Outlook, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
