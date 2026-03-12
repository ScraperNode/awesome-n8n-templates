# 🔒 Automate SIEM alert enrichment with MITRE ATT&CK, Qdrant & Zendesk in n8n

> ⚡ **14,300 views** · 🔒 [SecOps & Security Automation](../)

## Description

### **n8n Workflow: Automate SIEM Alert Enrichment with MITRE ATT&CK & Qdrant**  

---

## **Who is this for?**  
This workflow is ideal for:  
- **Cybersecurity teams & SOC analysts** who want to automate **SIEM alert enrichment**.  
- **IT security professionals** looking to integrate **MITRE ATT&CK intelligence** into their ticketing system.  
- **Organizations using Zendesk for security incidents** who need enhanced **contextual threat data**.  
- **Anyone using n8n and Qdrant** to build **AI-powered security workflows**.  

---

## **What problem does this workflow solve?**  
Security teams receive **large volumes of raw SIEM alerts** that lack actionable context. Investigating every alert manually is **time-consuming** and can lead to **delayed response times**. This workflow solves this problem by:  
✔ **Automatically enriching SIEM alerts** with MITRE ATT&CK TTPs.  
✔ **Tagging & classifying alerts** based on known attack techniques.  
✔ **Providing remediation steps** to guide the response team.  
✔ **Enhancing security tickets in Zendesk** with relevant threat intelligence.  

---

## **What this workflow does**  

1️⃣ **Ingests SIEM alerts** (via chatbot or ticketing system like Zendesk).  
2️⃣ **Queries a Qdrant vector store** containing MITRE ATT&CK techniques.  
3️⃣ **Extracts relevant TTPs (Tactics, Techniques, & Procedures)** from the alert.  
4️⃣ **Generates remediation steps** using AI-powered enrichment.  
5️⃣ **Updates Zendesk tickets** with threat intelligence & recommended actions.  
6️⃣ **Provides structured alert data** for further automation or reporting.  

---

## **Setup Guide**  

### **Prerequisites**  
- **n8n instance** (Cloud or Self-hosted).  
- **Qdrant vector store** with MITRE ATT&CK data embedded.  
- **OpenAI API key** (for AI-based threat processing).  
- **Zendesk account** (for ticket enrichment, if applicable).  
- [Clean Mitre Data Python Script](https://drive.google.com/file/d/1Yxv5fDdQ2OigYhhfv_WqGb9QTr-Q_aeW/view?usp=sharing)
- [Cleaned Mitre Data](https://drive.google.com/file/d/1Kt6ZJ4DYvNm44I9fBKvmXjeHQqLJqCwA/view?usp=drive_link)
- [Full Mitre Data](https://drive.google.com/file/d/1Lq7v3luu3DC44Tdn2DIxiVwnh3UQWM_Y/view?usp=drive_link)

### **Steps to Set Up**  

1️⃣ **Embed MITRE ATT&CK data into Qdrant**  
   - This workflow pulls MITRE ATT&CK data from **Google Drive** and **loads it into Qdrant**.  
   - The data is **vectorized using OpenAI embeddings** for fast retrieval.  

2️⃣ **Deploy the n8n Chatbot**  
   - The chatbot listens for **SIEM alerts** and sends them to the AI processing pipeline.  
   - Alerts are **analyzed using an AI agent trained on MITRE ATT&CK**.  

3️⃣ **Enrich Zendesk Tickets**  
   - The workflow extracts **MITRE ATT&CK techniques** from alerts.  
   - It **updates Zendesk tickets with contextual threat intelligence**.  
   - The **remediation steps are included as internal notes** for SOC teams.  

---

## **How to Customize This Workflow**  

🔧 **Modify the chatbot trigger**: Adapt the chatbot node to receive alerts from **Slack, Microsoft Teams, or any other tool**.  

🔧 **Change the SIEM input source**: Connect your workflow to **Splunk, Elastic SIEM, or Chronicle Security**.  

🔧 **Customize remediation steps**: Use a **custom AI model** to tailor remediation responses based on **organization-specific security policies**.  

🔧 **Extend ticketing integration**: Modify the Zendesk node to also work with **Jira, ServiceNow, or another ITSM platform**.  

---

## **Why This Workflow is Powerful**  
✅ **Saves time**: Automates **alert triage & classification**.  
✅ **Improves security posture**: Helps **SOC teams act faster** on threats.  
✅ **Leverages AI & vector search**: Uses **LLM-powered enrichment** for **real-time context**.  
✅ **Works across platforms**: Supports **n8n Cloud, Self-hosted, and Qdrant**.  

---

## **🚀 Get Started Now!**  
📖 [Watch the Setup Video](https://youtu.be/SbWrCe0R9LE)  
💬 **Have Questions? Join the Discussion in the YouTube Comments!**

## 🔗 Nodes Used

Google Drive, Zendesk, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
