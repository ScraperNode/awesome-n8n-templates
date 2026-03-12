# ⚙️ Auto-notify on new major n8n releases via RSS, email & telegram

> ⚡ **1,823 views** · ⚙️ [DevOps & CI/CD](../)

## Description

![image.png](fileId:1032)

This **n8n workflow template** checks for new **major releases** (tagged with `.0`) of the **n8n project** using its official **GitHub releases feed**. It runs multiple times a day and sends notifications via **email and Telegram** if a new release is found.

&gt; ⚠️ *Note: You must **activate the workflow** to start receiving release notifications.*

---

### 🚀 **What It Does**

- Monitors the [n8n GitHub releases feed](https://github.com/n8n-io/n8n/releases.atom)
- Detects major versions (e.g., `1.0.0`, `2.0.0`)
- Sends alert messages via **Telegram** and **email (SES)** when a release is published

---

### ⏰ **Scheduling Details**

- The **Cron node** checks for new releases **three times per day**:  
  **10:00, 14:00, and 18:00** server time.

---

### 🛠️ **Step-by-Step Setup**

1. **Configure Telegram Bot**  
   Connect your Telegram bot and specify the chat ID where you want to receive notifications.

2. **Set up AWS SES Credentials**  
   Use a verified sender email and set up AWS SES credentials in your n8n instance.

3. **Activate the Workflow**  
   Enable the workflow in your instance to start receiving notifications.

4. **Customize Notification Messages** *(Optional)*  
   You can modify the email subject, Telegram format, or filter logic.

---

### 🧠 **How It Works: Workflow Overview**

1. **Cron Trigger**  
   Runs the workflow at 10:00, 14:00, and 18:00 daily.

2. **Read RSS Feed**  
   Pulls data from `https://github.com/n8n-io/n8n/releases.atom`.

3. **Filter by Current Day**  
   Filters the feed to match:
   - Releases **published in the last 4 hours**
   - Titles starting with `n8n@` and **ending with `.0`**

4. **Condition Check**  
   Uses a regex to check if the filter result contains any release data.

5. **Notifications**  
   - If a new major release is found, sends:
     - **Telegram message** to a specified chat
     - **Email** via AWS SES with release info

---

### 📨 **Final Output**

You'll receive a **Telegram message** and **email** when a new major n8n version is released.

---

### 🔐 **Credentials Used**

- **Telegram API** – For sending chat notifications
- **AWS SES** – To send email alerts

---

### ✨ **Customization Tips**

- **Change Notification Channels**: Add Slack, Discord, or other preferred channels.
- **Adjust Cron Schedule**: Modify the Cron node to fit your check frequency.
- **Modify Filters**: Detect patch or beta versions by changing the `.0` condition.
- **Send Release Notes**: Extend the feed parsing to include release content.

---

### ❓Questions?

Template created by [**Miquel Colomer**](https://www.linkedin.com/in/miquelcolomersalas/) and [**n8nhackers.com**](https://n8nhackers.com).  

Need help customizing or deploying? [**Contact us**](mailto:contact@n8nhackers.com) for consulting and support.

## 🔗 Nodes Used

Cron, Function, RSS Read, Telegram, AWS SES

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
