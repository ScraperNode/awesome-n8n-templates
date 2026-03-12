# 🎣 Discover professional emails with uProc and send via Telegram

> ⚡ **152 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

![image.png](fileId:1033)

This **n8n workflow template** uses **uProc's "Get Email by Domain, Firstname and Lastname" tool** to discover a professional email address, and then sends that email to a **Telegram channel**.

&gt; ⚠️ *Note: You must set up your **uProc credentials (Email + API Key)** from the [**Integration settings**](https://app.uproc.io/#/settings/integration) before running this workflow.*

---

### 🚀 **What It Does**

- Uses user-provided data: **first name**, **last name**, and **company domain**
- Calls **uProc** to discover the most likely email address for that person
- Sends the discovered email and confidence level to a **Telegram group**

---

### 🛠️ **Step-by-Step Setup**

1. **Add uProc Credentials**  
   Go to the [uProc integration page](https://app.uproc.io/#/settings/integration) and copy your **email and API key**.  
   Add them as credentials in your n8n instance.

2. **Set Tool Parameters**  
   - Use the **Set node** to define:
     - `firstname`: First name of the person
     - `lastname`: Last name of the person
     - `domain`: Their company domain

3. **Replace the Set Node (Optional)**  
   You can dynamically fetch the `firstname`, `lastname`, and `domain` from other sources like:
   - **Google Sheets**
   - **MySQL or Postgres**
   - **Webhook or Form submissions**

4. **Run the Workflow**  
   Trigger the flow manually or integrate it with a larger automation.

---

### 🔍 **uProc Parameters Explained**

- **domain**: The company domain (e.g., `uproc.io`)
- **firstname**: First name of the person
- **lastname** (in parameter: `language`): Last name of the person
- **mode**:
  - `verify`: Verifies email in real-time with mail server
  - `guess`: Guesses based on company format (e.g., `firstname.lastname@domain.com`)

---

### 📦 **uProc Response Fields**

- `email`: Discovered email address
- `confidence`: Indicates if the result is verified or risky (e.g., catch-all)
- `score`: Reliability score from **0** (unreliable) to **99** (highly reliable)

---

### 📬 **Notification via Telegram**

After discovering the email, the result is sent to a specified **Telegram channel** with this format:

```text
User Miquel Colomer has next email on uproc.io: contact@uproc.io (verified - 99)
```


Clicking the email allows you to send a message directly to the recipient.

---

### 🔐 **Credentials Used**

- **uProc API** – For discovering email addresses
- **Telegram API** – To send messages to a specific group/channel

---

### ✨ **Customization Tips**

- **Loop over a list of people**: Replace the set node with a data source that contains multiple people.
- **Filter by score or confidence** before sending.
- **Add additional outputs**: You can send the data via Email, Slack, or save it to a database.
- **Trigger automatically**: Combine with a webhook or time-based trigger for automation.

---

### ❓Questions?

Template created by [**Miquel Colomer**](https://www.linkedin.com/in/miquelcolomersalas/) and [**n8nhackers.com**](https://n8nhackers.com). 
 
Need help customizing or deploying? [**Contact us**](mailto:contact@n8nhackers.com) for consulting and support.

## 🔗 Nodes Used

Telegram, uProc

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
