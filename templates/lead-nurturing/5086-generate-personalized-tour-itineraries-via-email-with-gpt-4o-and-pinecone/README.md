# 💬 Generate personalized tour itineraries via email with GPT-4o and Pinecone

> ⚡ **221 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# **🏖️ AI-Based Tour Itineraries via Email Using OpenAI & Pinecone Vector Search**

## **Overview**
This workflow automates the process of handling new tour package requests received via email, analyzes the request, and provides personalized tour package recommendations using AI and a vector database. It’s designed to streamline customer interactions and deliver quick, relevant responses.

## **Precondition** 
1. Create a Embedded Tour Package Database (refer to the link below):
[Pinecone Database setup](https://creators.n8n.io/workflows/5085)
2. Register and create API Keys for OpenAI, Pinecone Database.
3. Copy Mail Credentials to access Email Inbox from n8n node 
![image.png](fileId:1755)

This workflow automates the process of extracting tour information from PDF files stored in a Google Drive folder, processes and vectorizes the extracted data, and stores it in a Pinecone vector database for efficient querying. This is especially useful for building AI-powered search or recommendation systems for travel packages.



## **🛠️ Tools & Nodes Used**
**Email Trigger (IMAP):** Monitors the inbox for new tour package requests.
**Text Classifier:** Categorizes incoming emails (e.g., New Request, Follow-up, Other).
**Code Node:** Extracts and structures relevant data from the email (subject, sender, content, etc.).
**Tour Recommendation AI Agent:** An AI agent that interprets the request and formulates a prompt for package recommendations.
**OpenAI & OpenRouter Chat Models:** Used for natural language understanding and generating responses.
**Simple Memory:** Maintains context for ongoing conversations.
**Pinecone Vector Store:** Stores and retrieves tour packages using semantic search.
**Embeddings (OpenAI):** Converts text data into vector embeddings for similarity search.
**Answer Questions with a Vector Store:** Retrieves the most relevant packages from Pinecone.
**Send Email:** Sends the AI-generated recommendations back to the customer.

### **🔄 Process & Flow**
**Email Reception:** The workflow starts with the Email Trigger (IMAP) node, which listens for new emails in the inbox.
**Classification:** The Text Classifier node determines if the email is a new tour package request.
**Data Extraction:** The Code node parses the email, extracting key details like sender, subject, and content.
**AI Agent Processing:** The Tour Recommendation AI Agent receives the structured request and crafts a prompt for package recommendations.
**Vector Search:** The agent queries the Pinecone Vector Store, which holds previously created tour packages, using OpenAI embeddings for semantic matching.
![image.png](fileId:1754)
**Recommendation Generation:** The AI agent selects the top 3 most relevant packages and generates a friendly, personalized response.
**Response Delivery:** The Send Email node sends the recommendations back to the customer.

**🚀 Recommendations & Improvements for Next Version**
**Error Handling:** Add error handling nodes to manage failed email parsing or AI response issues.
**Logging & Analytics:** Integrate logging to track requests, recommendations, and customer responses for continuous improvement.
**Personalization:** Enhance the AI agent to consider customer history or preferences for even more tailored recommendations.
**Multi-language Support:** Add language detection and translation for international customers.
**Feedback Loop:** Include a mechanism for customers to rate recommendations, feeding this data back into the system for improved future suggestions.
**Attachment Handling:** Enable the workflow to process attachments (e.g., customer itineraries or preferences).
**Scalability:** Consider batching or queueing requests if email volume increases.

### **💡 Conclusion**
This workflow demonstrates how n8n, combined with AI and vector databases, can automate and personalize customer service in the travel industry. With a few enhancements, it can become even more robust and customer-centric!

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
