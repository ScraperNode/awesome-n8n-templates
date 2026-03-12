# 🔬 Automatically issue training certificates and send via Gmail

> ⚡ **1,011 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# 1. Workflow Overview

This n8n workflow automates the **generation and delivery of student completion certificates**.

Features:
- Retrieves student data from the n8n integrated datastore and processes it.
- Loads a certificate template image and inserts the student's name and unique ID.
- Generates a completion certificate and sends it automatically via email.

By using this workflow, the certificate issuance process can be streamlined and efficiently managed.

---

# 2. Prerequisites
To execute this workflow, you need to set up the following:

✅ **Gmail OAuth2 Integration** (Required for sending certificates via Gmail in n8n)  
✅ **n8n Training Customer Datastore Connection** (Ensure access to student data from the datastore)  
✅ **Google Fonts Installation** (Required for using Courier New and Comic Sans MS fonts)  

---

# 3. Key Features & Roles

### 📌 Node List & Functions

1. **When clicking 'Test workflow' (Manual Trigger)**  
   - Triggers the workflow manually for testing

2. **Customer Datastore (n8n training)**  
   - Retrieves student data from n8n's datastore

3. **Get Email & Name (Set Node)**  
   - Extracts the student's name and email

4. **Generate Crypto (UUID Generation)**  
   - Creates a unique ID for each certificate

5. **Load Image (HTTP Request)**  
   - Loads the certificate template image

6. **Write Text(name) / Write Text(uuid) (Edit Image)**  
   - Inserts the student's name and UUID onto the image to generate the certificate

7. **Send Email (Gmail Node)**  
   - Automatically sends the generated certificate via email

---

# 4. Workflow Process (Step-by-Step)

1️⃣ **Retrieve Student Data** - Fetches name and email from the n8n Training Customer Datastore
2️⃣ **Generate UUID** - Creates a unique ID for each certificate
3️⃣ **Load Certificate Template Image** - Fetches the template via HTTP request
4️⃣ **Insert Name and UUID into the Image**
5️⃣ **Send Certificate via Gmail**

---

# 5. Expected Outputs

- **Upon successful execution,** the student receives an email with the certificate image attached.
- **Example of the sent email:**
  ```
  Dear John Doe,
  
  You have successfully completed this training program. Please find your completion certificate attached.
  Completion Date: 2025.02.22
  
  Best regards,
  Data Popcorn Team
  ```
- **Certificate Sharing Method:** The certificate can be downloaded and shared via email.

## 🔗 Nodes Used

Edit Image, HTTP Request, Gmail, Customer Datastore (n8n training)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
