# 🎯 Automate support ticket classification & routing from HubSpot to Jira with GPT

> ⚡ **325 views** · 🎯 [AI Summarization & Classification](../)

## Description

## **Who is this for?**

  

This **n8n workflow template** is designed for **customer support**, **CX**, and **ops teams** that manage customer messages through HubSpot and use Jira for internal task management. It is especially useful for SaaS companies aiming to automate ticket triage, sentiment detection, and team assignment using **AI agents**.

---

## **🧩 What problem is this workflow solving?**

  

Customer service teams often struggle with manual message classification, delayed reactions to churn signals, and inefficiencies in routing support issues to the right internal teams. This workflow uses **LLMs** and **automated profiling** to:

- Detect churn risk or intent in customer messages
    
- Summarize issues
    
- Classify tickets into categories (e.g. fulfillment, technical, invoicing)
    
- Automatically create **Jira tickets** based on enriched insights
    

---

## **🤖 What this workflow does**

  

This AI-powered workflow processes HubSpot support tickets and routes them to Jira based on sentiment and topic. Here’s the full breakdown:

1. **Triggers**: Either manually or on a schedule (via cron).
    
2. **Fetch HubSpot tickets**: Retrieves new messages and their metadata.
    
3. **Run Orchestration Agent**:
    
    - Uses **Sentinel Agent** to detect **emotional tone**, **churn risk**, and **purchase intent**.
        
    - Calls **Profiler Agent** to enrich customer profiles from HubSpot.
        
    - Summarizes the message using OpenAI.
        
    - Classifies the ticket using a custom classifier (technical, fulfillment, etc.).
        
    
4. **Generate a Jira ticket**:
    
    - Title and description are generated using GPT.
        
    - The assignee and project are predefined.
        
    
5. **AI agents can be expanded** (e.g. add Guide or Facilitator agents).
    

---

## **⚙️ Setup**

  

To use this template, you’ll need:

- **HubSpot account** with OAuth2 credentials in n8n
    
- **Jira Software Cloud account** and project ID
    
- **OpenAI credentials** for GPT-based nodes
    
- Optional: Create sub-workflows for additional AI agents
    

  

Steps:

1. Clone the workflow in your n8n instance.
    
2. Replace placeholder credentials for **HubSpot**, **OpenAI**, and **Jira**.
    
3. Adjust Jira project/issue type IDs to match your setup.
    
4. Test the workflow using the **manual trigger** or **scheduled trigger** node.
    

---

## **🛠️ How to customize this workflow to your needs**

  

### **1. Edit category logic**

  

In the **“Category Classifier”** node, modify categories and prompt structure to match your internal team structures (e.g., billing, account management, tech support).

  

### **2. Refine AI prompts**

  

Customize the agent prompt definitions in:

- Sentinel_agent
    
- Profiler_agent
    
- Orchestrator
    
    to better align with your brand tone or service goals.
    

  

### **3. Update Jira integration**

  

You can route tickets to different projects or team leads by adjusting the **“Create an issue in Jira”** node based on classification output.

  

### **4. Add escalation paths**


Insert Slack, email, or webhook notifications for specific risk levels or customer segments.

---

This workflow empowers your team with **real-time message triage**, **automated decision-making**, and **AI-enhanced customer insight**, turning every inbound ticket into a data-driven action item.

---

## 🔗 Nodes Used

HubSpot, Jira Software, Execute Workflow Trigger, Schedule Trigger, AI Agent, Summarization Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
