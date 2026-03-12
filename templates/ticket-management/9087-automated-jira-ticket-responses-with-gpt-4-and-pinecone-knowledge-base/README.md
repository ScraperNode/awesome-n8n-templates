# 🎫 Automated Jira ticket responses with GPT-4 and Pinecone knowledge base

> ⚡ **279 views** · 🎫 [Ticket Management & Triage](../)

## Description

### **How It Works**

This template is an **n8n workflow that integrates with Jira to provide automated replies**.  

When a ticket is assigned to a user, the workflow analyzes the ticket content, retrieves relevant knowledge from a vector database, and generates a response.  
By continuously enriching the knowledge base, the system improves response quality in Jira.  

---

### **Prerequisites**

- A Jira account with API access  
- A Pinecone account and credentials (API key and environment settings)  
- An AI provider credential (e.g., OpenAI API key)  

---

### **Setup Instructions**

1. **Jira Credentials**  
   - Create Jira credentials in n8n (API token and email).  
   - In the Jira node, **select the registered Jira account ID**.  

2. **Vector Database Setup (Pinecone)**  
   - Register your **Pinecone credentials (API key and environment variables)** in n8n.  
   - Ensure that your knowledge base is indexed in Pinecone.  

3. **AI Assistant Node**  
   - Configure the OpenAI (or other LLM) node with your API key.  
   - Provide a system prompt that explains how to respond to Jira tickets using retrieved knowledge.  

4. **Workflow Execution**  
   - The workflow runs **only via the Scheduled Trigger node** at defined intervals.  
   - When Jira tickets are assigned, their summary, description, and latest comments are retrieved.  
   - These details are passed to the AI assistant, which queries Pinecone and generates a response.  
   - The generated response is then posted as a Jira comment.  

---

### **Step by Step**

1. **Scheduled Trigger**  
   The workflow is executed at regular intervals using the Scheduled Trigger node.  

2. **Jira Trigger (Issue Assigned)**  
   Retrieves the summary, description, and latest comments of assigned tickets.  

3. **AI Assistant**  
   Sends ticket details to the AI assistant, which searches and summarizes relevant knowledge from Pinecone.  

4. **Response Generation / Ticket Update**  
   The AI generates a response and automatically posts it as a Jira comment.  
   (Optionally, the workflow can update the ticket status or mention the assignee.)  

---

### **Notes**

- Keep your Pinecone knowledge base updated to improve accuracy.  
- You can customize the AI assistant’s behavior by adjusting the system prompt.  
- Configure the Scheduled Trigger frequency carefully to avoid API rate limits.  

---

### **Further Reference**
For a detailed walkthrough (in Japanese), see this article:  
👉 [Automating Jira responses with n8n, AI, and Pinecone (Qiita)](https://qiita.com/yusan25c/items/f6b15aef451556f4c9fe) 

You can find the template file on GitHub here:  
👉 [Template File on GitHub](https://github.com/yusan25c/n8n-jira-knowledge-sync-template/tree/main/01_Jira_Knowledge-Sync-Minimal-Summary-Comment-Assignee)

## 🔗 Nodes Used

Jira Software, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
