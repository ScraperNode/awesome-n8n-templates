# 💬 Build an OpenAI assistant with Google Drive integration

> ⚡ **14,827 views** · 💬 [Support Chatbots](../)

## Description

### **Workflow Overview**  
This workflow automates the creation and management of a **custom OpenAI Assistant** for a travel agency ("Travel with us"), leveraging Google Drive for document storage.

---

### **How It Works**  

#### **1. Create the OpenAI Assistant**  
- **Node**: `OpenAI`  
  - **Action**: Creates a custom assistant named *"Travel with us" Assistant* using the `gpt-4o-mini` model.  
  - **Instructions**:  
    - Respond **only** using the provided document (e.g., agency-specific info).  
    - Stay friendly, brief, and focused on travel-related queries.  
    - Ignore irrelevant questions politely.  
  - **Credentials**: Requires OpenAI API key.  

#### **2. Upload Agency Document**  
- **Google Drive Node**:  
  - **Action**: Downloads a Google Doc as a PDF.   
- **OpenAI2 Node**:  
  - **Action**: Uploads the PDF to OpenAI with `purpose: "assistants"`.  
  - **Output**: Generates a `file_id`.  

#### **3. Update the Assistant with the Document**  
- **OpenAI Node**:  
  - **Action**: Updates the assistant to include the uploaded file.

#### **4. Chat Interaction**  
- **Chat Trigger**:  
  - Activates when a message is received (*"When chat message received"*).  
- **OpenAI Assistant Node**:  
  - **Action**: Uses the updated assistant to respond to user queries.  
  - **Memory**: `Window Buffer Memory` retains chat context for coherent conversations.  

---

### **Set Up Steps**  
1. **Prepare the Document**:  
   - Store your travel agency guide in Google Drive (e.g., as a Google Doc).  
   - Update the **Google Drive node** with your document’s ID.  

2. **Configure Credentials**:  
   - **Google Drive**: Connect via OAuth2 (`googleDriveOAuth2Api`).  
   - **OpenAI**: Add your API key to all OpenAI nodes.  

3. **Customize the Assistant**:  
   - Modify the `instructions` in the `OpenAI` node to reflect your agency’s needs.  
   - Ensure the document includes FAQs, policies, and travel info.  

4. **Test the Workflow**:  
   - Trigger manually (*"Test workflow"*) to create the assistant and upload the file.  
   - Send a chat message (e.g., *"What are your travel packages?"*) to test responses.  

---

### **Dependencies**  
- **Google Drive Account**: To store and retrieve the agency document.  
- **OpenAI API Access**: For assistant creation and file uploads.  

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Drive, Simple Memory, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
