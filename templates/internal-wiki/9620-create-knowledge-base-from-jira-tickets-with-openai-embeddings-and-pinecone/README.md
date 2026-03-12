# 📖 Create knowledge base from Jira tickets with OpenAI embeddings and Pinecone

> ⚡ **168 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### **How It Works**

This template is a workflow that **registers Jira tickets to Pinecone**.  

By combining it with the [Automated Jira Ticket Responses with GPT-4 and Pinecone Knowledge Base](https://creators.n8n.io/workflows/9087) template, you can continuously improve the quality of automated responses in Jira.  

---

### **Prerequisites**

- A Jira account and credentials (API key and email address)  
- A Pinecone account and credentials (API key and environment settings)  
- OpenAI credentials (API key)  

---

### **Setup Instructions**

1. **Jira Credentials**  
   - Register your Jira credentials (API key and email address) in n8n.  

2. **Vector Database Setup (Pinecone)**  
   - Register your Pinecone credentials (API key and environment variables) in n8n.  

3. **AI Node**  
   - Configure the OpenAI node with your credentials (API key).  

---

### **Step by Step**

1. **Scheduled Trigger**  
   The workflow runs at regular intervals according to the schedule set in the Scheduled Trigger node.  

2. **Jira Trigger (Completed Tickets)**  
   Retrieves the summary, description, and comments of completed Jira tickets.  

3. **Register to Pinecone**  
   Converts the retrieved ticket information into vectors and registers them in Pinecone.  

---

### **Notes**

- Configure the Scheduled Trigger interval carefully to avoid exceeding API rate limits.  

---

### **Further Reference**

For a detailed walkthrough (in Japanese), see this article:  
👉 [Automating knowledge registration to Pinecone with n8n (Qiita)](https://qiita.com/yusan25c/items/f8d0cca479310af171a6)  

You can find the template file on GitHub here:  
👉 [Template File on GitHub](https://github.com/yusan25c/n8n-jira-knowledge-sync-template/tree/main/02_Jira_Vector-Register-Minimal)

## 🔗 Nodes Used

Jira Software, Schedule Trigger, Embeddings OpenAI, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
