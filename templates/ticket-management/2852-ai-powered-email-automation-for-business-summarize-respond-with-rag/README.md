# 🎫 AI-powered email automation for business: Summarize & respond with RAG

> ⚡ **17,377 views** · 🎫 [Ticket Management & Triage](../)

## Description

This workflow is ideal for businesses looking to automate their email responses, especially for handling inquiries about company information. It leverages AI to ensure accurate and professional communication.

### **How It Works**
1. **Email Trigger**:
   - The workflow starts with the **Email Trigger (IMAP)** node, which monitors an email inbox for new messages. When a new email arrives, it triggers the workflow.

2. **Email Preprocessing**:
   - The **Markdown** node converts the email's HTML content into plain text for easier processing by the AI models.

3. **Email Summarization**:
   - The **Email Summarization Chain** node uses an AI model (DeepSeek R1) to generate a concise summary of the email. The summary is limited to 100 words and is written in Italian.

4. **Email Classification**:
   - The **Email Classifier** node categorizes the email into predefined categories (e.g., "Company info request"). If the email does not fit any category, it is classified as "other".

5. **Email Response Generation**:
   - The **Write email** node uses an AI model (OpenAI) to draft a professional response to the email. The response is based on the email content and is limited to 100 words.
   - The **Review email** node uses another AI model (DeepSeek) to review and format the drafted response. It ensures the response is professional and formatted in HTML (e.g., using `<br>`, `<b>`, `<i>`, `<p>` tags where necessary).

6. **Email Sending**:
   - The **Send Email** node sends the reviewed and formatted response back to the original sender.

7. **Vector Database Integration**:
   - The **Qdrant Vector Store** node retrieves relevant information from a vector database (Qdrant) to assist in generating accurate responses. This is particularly useful for emails classified as "Company info request".
   - The **Embeddings OpenAI** node generates embeddings for the email content, which are used to query the vector database.

8. **Document Vectorization**:
   - The workflow includes steps to create and refresh a Qdrant collection (**Create collection** and **Refresh collection** nodes).
   - Documents from Google Drive are downloaded (**Get folder** and **Download Files** nodes), processed into embeddings (**Embeddings OpenAI1** node), and stored in the Qdrant vector store (**Qdrant Vector Store1** node).

---

### **Set Up Steps**
1. **Configure Email Trigger**:
   - Set up the **Email Trigger (IMAP)** node with the appropriate IMAP credentials to monitor the email inbox.

2. **Set Up AI Models**:
   - Configure the **DeepSeek R1**, **OpenAI**, and **DeepSeek** nodes with the appropriate API credentials for text summarization, response generation, and review.

3. **Set Up Email Classification**:
   - Define the categories in the **Email Classifier** node (e.g., "Company info request", "Other").
   - Ensure the **OpenAI 4-o-mini** node is configured to assist in classification.

4. **Set Up Vector Database**:
   - Configure the **Qdrant Vector Store** and **Qdrant Vector Store1** nodes with the appropriate Qdrant API credentials and collection details.
   - Set up the **Embeddings OpenAI** and **Embeddings OpenAI1** nodes to generate embeddings for the email content and documents.

5. **Set Up Document Processing**:
   - Configure the **Get folder** and **Download Files** nodes to access and download documents from Google Drive.
   - Use the **Token Splitter** and **Default Data Loader** nodes to process and split the documents into manageable chunks for vectorization.

6. **Set Up Email Sending**:
   - Configure the **Send Email** node with the appropriate SMTP credentials to send responses.

7. **Test the Workflow**:
   - Trigger the workflow manually using the **When clicking ‘Test workflow’** node to ensure all steps execute correctly.
   - Verify that emails are summarized, classified, and responded to accurately.

8. **Activate the Workflow**:
   - Once tested, activate the workflow to automate the process of handling incoming emails.

---

### **Key Features**
- **Automated Email Handling**: Automatically processes incoming emails, summarizes them, and generates professional responses.
- **AI-Powered Classification**: Uses AI to classify emails into relevant categories for targeted responses.
- **Vector Database Integration**: Retrieves relevant information from a vector database to enhance response accuracy.
- **Document Vectorization**: Processes and stores documents from Google Drive in a vector database for quick retrieval.
- **Professional Email Formatting**: Ensures responses are professionally formatted and concise.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, Google Drive, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
