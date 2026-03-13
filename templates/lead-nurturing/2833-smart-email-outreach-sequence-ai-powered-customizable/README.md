# 💬 Smart email outreach sequence – AI-powered & customizable

> ⚡ **4,360 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automated Email Outreach Workflow

This intelligent **email automation workflow** helps you maximize engagement through **domain-based outreach**. It utilizes **AI-powered personalization** and **strategic follow-ups** to increase response rates. The workflow includes a **customizable three-step email sequence** (initial email + two follow-ups) sent at **optimized 3-day intervals**.

## 🔥 Key Features
✅ **Smart Domain Extraction** – Automatically extracts domains from email addresses for precise targeting.  
✅ **Website Intelligence** – Uses **Jina.ai** to analyze recipient websites and craft ultra-relevant messaging.  
✅ **AI-Powered Personalization** – Leverages **GPT-3.5** to generate compelling and highly customized email content.  
✅ **Adjustable AI Prompts** – Easily customize AI-generated messages to align with your **product, service, or campaign**.  
✅ **Automated Follow-Up Sequence** – Sends a structured series of **three emails** over time to increase engagement.  
✅ **Human-Like Sending Patterns** – **Randomized delays** help bypass spam filters and improve deliverability.  
✅ **Error-Resilient Execution** – Built-in error handling ensures a **smooth, uninterrupted workflow**.  

---

## 🎯 Ideal Use Cases
✔️ **Domain Sales & Lead Generation** – Engage potential buyers with **hyper-personalized** emails.  
✔️ **B2B Partnerships & Outreach** – Automate connections with potential business partners.  
✔️ **Cold Emailing at Scale** – Improve engagement with structured, AI-optimized emails.  

---

## ⚙️ How It Works

### 1️⃣ **Setup & Configuration**
1. **Integrate Gmail via OAuth** for secure email sending.  
2. **Connect your Google Sheets** with leads for automated processing.  
3. **Customize AI-generated messages** by adjusting prompt inputs to fit your strategy.  

### 2️⃣ **Workflow Execution**
1. **Domain Extraction** – Automatically extracts recipient domains from email addresses.  
2. **Website Analysis** – Uses Jina.ai to gather insights for **ultra-personalized** messaging.  
3. **AI-Powered Email Generation** – GPT-3.5 crafts **highly engaging outreach emails**.  
4. **Automated Email Sending** – Initial email is sent, followed by two **optimized follow-ups** if no response is received.  
5. **Engagement Tracking & Adaptation** – Ensures delivery success and prevents emails from being flagged as spam.  

---

## ⚡ Setup Instructions

### ✅ **Preconditions**
- You need a **Gmail account** with OAuth authentication enabled.  
- Your **Google Sheets must contain lead emails** formatted correctly.  
- Ensure your **n8n instance** is running and connected to your workflow.  

### 🛠 **Implementation Steps**
1. **Install and open n8n.**  
2. **Import the workflow JSON file** into your n8n instance.  
3. **Configure your Gmail credentials** in the workflow settings.  
4. **Link your Google Sheets** containing the leads' email addresses.  
5. **Customize AI prompts** in the GPT-3.5 node to match your campaign strategy.  
6. **Test the workflow manually** to ensure proper execution.  
7. **Activate the workflow** and let automation take over!  

---

## 📈 Expected Results
🚀 **Higher Response Rates** – Personalization improves **recipient engagement**.  
📊 **Increased Conversions** – Optimized email sequences **boost lead-to-client conversions**.  
💡 **Time-Saving Automation** – Hands-free execution **streamlines your outreach process**.  

---

🔧 **Ready to supercharge your outreach?** Set up the workflow and start automating today! 🚀🔥

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
