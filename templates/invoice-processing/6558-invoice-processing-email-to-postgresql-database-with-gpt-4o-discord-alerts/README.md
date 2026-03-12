# 🧾 Invoice processing: Email to PostgreSQL database with GPT-4o & Discord alerts

> ⚡ **614 views** · 🧾 [Invoice Processing](../)

## Description

# AI-Powered Invoice Processing: from Email to Database & Chat Notifications

Automatically process PDF invoices directly from your email inbox. This workflow uses AI to extract key data, saves it to a PostgreSQL database, and instantly notifies you about the new document in your preferred chat application.

The workflow listens for new emails, fetches PDF attachments, and then passes their content to a Large Language Model (LLM) for intelligent recognition and data extraction. Finally, the information is securely archived in the database, and a summary of the invoice is sent as a notification.

&gt; **📝 This workflow is highly customizable.**  
&gt; It uses PostgreSQL, OpenAI (GPT), and Discord by default, but you can easily swap these components.  
&gt; Feel free to use a different database like MySQL or Airtable, another AI model provider, or send notifications to Slack, MS Teams, or any other chat platform.

&gt; ⚠️ **Note:** If the workflow fails to extract data correctly from invoices issued by certain companies, you may need to adjust the prompt used in the **Basic LLM Chain** node to improve parsing accuracy.

---

## Use Case

- Automating accounts payable for small businesses and freelancers  
- Centralizing financial documents without manual data entry  
- Creating a searchable database of all incoming invoices  
- Receiving real-time notifications for new financial commitments  

---

## Features

- **📧 Email Trigger (IMAP):** Monitors a dedicated email inbox for new messages with attachments  
- **📄 PDF Filtering:** Automatically identifies and processes only PDF attachments  
- **🤖 AI-Powered Data Extraction:** Uses an LLM (e.g., GPT-4o-mini) to extract invoice number, buyer/seller details, amounts, currency, and due dates  
- **⚙️ Structured Data Output:** Converts AI output to standardized JSON  
- **🔍 Database Write Logic:** Prevents duplicates by checking invoice/company combo  
- **🗄️ PostgreSQL Integration:** Stores extracted data into `company` and `invoice` tables  
- **💬 Chat Notifications:** Sends invoice summary as message to a designated channel  

---

## Setup Instructions

### ⚠️ API Access & Costs

To use the AI extraction feature, you need an API key from a provider like OpenAI.  
Most providers charge for access to language models. You'll likely need a billing account.

---

### 1. PostgreSQL Database Configuration

Ensure your database has the following tables:

```sql
-- Table for companies (invoice issuers)
CREATE TABLE company (
    id SERIAL PRIMARY KEY,
    tax_number VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table for invoices
CREATE TABLE invoice (
    id SERIAL PRIMARY KEY,
    company_id INTEGER REFERENCES company(id),
    invoice_number VARCHAR(255) NOT NULL,
    -- Add other fields: total_to_pay, currency, due_date
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(company_id, invoice_number)
);


```


### Then, in n8n, create a credential for your PostgreSQL DB.

---

### 2. Email (IMAP) Configuration

In **n8n**, add credentials for the email account that receives invoices:

- IMAP host  
- IMAP port  
- Username  
- Password  

---

### 3. AI Provider Configuration

- Log in to OpenAI (or similar provider)  
- Generate API key  
- In **n8n**, create credentials and paste the key  

---

### 4. Chat Notification (Discord)

- Go to **Discord &gt; Server Settings &gt; Integrations &gt; Webhooks &gt; New Webhook**  
- Select channel  
- Copy Webhook URL  
- In **n8n**, paste URL into the Discord node  

---

### Placeholders and Fields to Fill

| Placeholder                | Description                               | Example                                  |
|---------------------------|-------------------------------------------|------------------------------------------|
| `YOUR_EMAIL_CREDENTIALS`  | Your IMAP email account in n8n            | My Invoice Mailbox                       |
| `YOUR_OPENAI_CREDENTIALS` | API credentials for AI model              | My OpenAI Key                            |
| `YOUR_POSTGRES_CREDENTIALS`| Your PostgreSQL DB credentials in n8n    | My Production DB                         |
| `YOUR_DISCORD_WEBHOOK`    | Webhook URL for your chat system          | https://discord.com/api/webhooks/...     |

---

### Testing the Workflow

1. **Send a test invoice** to the inbox as a PDF attachment  
2. **Run the workflow** manually in **n8n** and check if the IMAP node fetches the message  
3. **Verify AI Extraction** – inspect the LLM output (e.g., GPT node) and confirm structured JSON  
4. **Check the DB** – ensure new rows appear in `company` and `invoice`  
5. **Check the chat** – verify the invoice summary appears in the chosen channel  

---

### Customization Tips

- **Change the DB:** Use MySQL, Airtable, or Google Sheets instead of PostgreSQL  
- **Other notifications:** Swap Discord for Slack, MS Teams, Telegram, etc.  
- **Expand AI logic:** Extract line items, prices, etc. by customizing the prompt  
- **Add payment logic:** Allow marking invoices as paid via emoji or a separate webhook

## 🔗 Nodes Used

Email Trigger (IMAP), Postgres, Discord, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
