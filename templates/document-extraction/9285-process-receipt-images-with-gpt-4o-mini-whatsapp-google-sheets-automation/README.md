# 🔬 Process receipt images with GPT-4o-mini, WhatsApp & Google Sheets automation

> ⚡ **2,365 views** · 🔬 [Document Extraction & Analysis](../)

## Description

🧾An intelligent automation system that turns WhatsApp into your personal receipt manager — integrating **Meta WhatsApp Cloud API**, **Google Drive**, **Google Sheets**, and **OpenAI GPT-4o-mini** via **n8n**.

🎥 **Demo:** [Watch the Loom walkthrough](https://www.loom.com/share/9b4cf8144b4149d7b1d60573234b9a65?sid=7e7a359f-96dd-452f-a4c2-57dacb30b787)

---

## ⚙️ What It Does

The **AI-Powered WhatsApp Receipt Bot** automates the complete invoice handling process through a conversational interface.

**Workflow Summary:**

1. User sends a **receipt image** via WhatsApp.
2. The bot automatically downloads the media using the **WhatsApp Cloud API**.
3. The image is uploaded to a **Google Drive “Invoices”** folder.
4. The file is shared publicly, generating a shareable URL.
5. The receipt is analyzed using **OpenAI GPT-4o-mini** to extract structured data:

   * Store name
   * Items purchased
   * Payment method
   * Total amount
6. The extracted details are appended to a **Google Sheet** for record-keeping.
7. The bot sends a **human-readable summary** back to WhatsApp with emojis and the invoice link.

**Output Example:**

```
🏬 Store: Big Bazaar  
📝 Items: Rice, Detergent, Snacks  
💳 Payment: Card  
💰 Total: ₹1520.75  
🔗 Link: https://drive.google.com/file/d/1abcXYZ/view  
```

This system eliminates manual expense tracking, improves accuracy through OCR, and provides a seamless way to manage receipts in real time.

---

## 💡 Use Cases

| Scenario                              | Description                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Personal Expense Management**       | Automatically store and categorize receipts from daily purchases.                                                     |
| **Business Accounting**               | Collect employee expense receipts through WhatsApp and centralize them in Google Sheets.                              |
| **Freelancer or Consultant Tracking** | Keep a digital record of client reimbursements or software purchase receipts.                                         |
| **Family Budgeting**                  | Family members send receipts to one shared WhatsApp number, all data gets logged centrally.                           |
| **E-commerce / Delivery Teams**       | Drivers or delivery agents send invoices from the field to WhatsApp; data automatically goes to the accounting sheet. |

---

## 🔧 Setup

### 1. **Accounts and Tools Needed**

| Tool                       | Purpose                                     | Link                                                                                         |
| -------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Meta Developer Account** | To access WhatsApp Business Cloud API       | [https://developers.facebook.com/apps](https://developers.facebook.com/apps)                 |
| **Google Cloud Account**   | For enabling Drive and Sheets APIs          | [https://console.cloud.google.com](https://console.cloud.google.com)                         |
| **n8n Instance**           | Workflow automation engine (local or cloud) | [https://app.n8n.cloud](https://app.n8n.cloud)                                               |
| **OpenAI API Key**         | For GPT-4o-mini model OCR + reasoning       | [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) |

---

### 2. **Meta Developer Setup (WhatsApp Cloud API)**

1. Go to **Meta Developer Dashboard → My Apps → Create App → Business type**.
2. Add **WhatsApp product** under your app.
3. Retrieve the following from **WhatsApp &gt; Configuration**:

   * **Permanent Access Token**
   * **Phone Number ID**
   * **WhatsApp Business Account ID**
4. Add these credentials in **n8n → Credentials → WhatsApp API**.

   * Use the same credentials for **WhatsApp Trigger** and **Send Message** nodes.
5. Verify webhook in Meta with your n8n webhook URL.

**Important:**
In your **HTTP Node**, set the header as:

```
Authorization: Bearer &lt;access_token&gt;
```

Replace `&lt;access_token&gt;` with your WhatsApp Cloud API permanent token.
Without this, the workflow will fail to send or receive WhatsApp messages properly.

---

### 3. **Google Drive Setup**

1. Create a folder named **Invoices** on your Google Drive.
2. Copy the **Folder ID** (found in the Drive URL).
3. In **Google Cloud Console → APIs & Services → Enable APIs**:

   * Enable **Google Drive API**
   * Enable **Google Sheets API**
4. Go to **Credentials → Create Credentials → OAuth 2.0 Client ID**.
5. Download the `credentials.json` file.
6. Upload this to **n8n → Credentials → Google Drive OAuth2 API**.
7. Authorize the connection on first workflow run.

---

### 4. **Google Sheets Setup**

1. Create a new Google Sheet titled **Invoices**.
2. Add the following headers in **Row 1**:

```
store name | discription | image_url | payment | total
```

3. Copy the Sheet ID (from the URL).
4. Add the ID under the **Google Sheets Append** node in n8n.
5. Map each field to its corresponding value extracted from the OCR result.

---

### 5. **OpenAI Setup**

1. Generate an API key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).
2. Add it to **n8n → Credentials → OpenAI API**.
3. Use model **gpt-4o-mini** in the “Analyze Image” node.

   * Can upgrade to **gpt-4o** for better OCR accuracy if account supports it.

---

### 6. **n8n Workflow Setup**

1. Import the provided n8n workflow JSON.
2. Configure credentials for:

   * WhatsApp API
   * Google Drive OAuth2
   * Google Sheets OAuth2
   * OpenAI API
3. Activate workflow and set webhook in Meta Developer console.
4. Send a test receipt image to your WhatsApp Business number.

The bot will automatically:
**Download → Upload → Extract → Log → Summarize → Reply**

---

## 📊 Example Google Sheet Record

| store name | discription             | image_url                                                                                    | payment | total   |
| ---------- | ----------------------- | -------------------------------------------------------------------------------------------- | ------- | ------- |
| Big Bazaar | Rice, Detergent, Snacks | [https://drive.google.com/file/d/1abcXYZ/view](https://drive.google.com/file/d/1abcXYZ/view) | Card    | 1520.75 |

---

## 🧠 Result

A **fully automated AI pipeline** that transforms WhatsApp into a smart expense-tracking interface — integrating vision, automation, and natural language processing for zero-manual financial documentation.

---

**Support & Contact:**
If you face any issues during setup or execution, contact:
📧 **Email:** [atharvapj5@gmail.com](mailto:atharvapj5@gmail.com)
🔗 **LinkedIn:** [Atharva Jaiswal](https://www.linkedin.com/in/atharva-jaiswal/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
