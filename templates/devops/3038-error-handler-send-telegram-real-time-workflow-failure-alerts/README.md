# ⚙️ Error handler send Telegram: real-time workflow failure alerts

> ⚡ **3,477 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow acts as an error handler, sending real-time notifications to Telegram when another workflow fails. It provides detailed error information, including workflow name, timestamp, execution URL, last executed node, and error message.

---

### **Pre-Conditions**  
- A Telegram bot created via [BotFather](https://core.telegram.org/bots#botfather).  
- The bot token and Telegram group/channel `chatId`.  
- An active n8n instance with the **Telegram** and **Error Trigger** nodes installed.  

---

### **Setup**  
1. **Workflow Configuration:**  
   - Import the workflow into n8n.  
   - Update the Telegram `chatId` in the **Config** node.  
   - Add your Telegram bot token in the **Telegram** node credentials.  

2. **Error Workflow Setup:**  
   - Set this workflow as the **Error Workflow** in other workflows.  

3. **Testing:**  
   - Trigger an error in another workflow to verify Telegram notifications.  

---

### **Who the Workflow is For**  
- **Developers:** Monitoring workflow failures in real-time.  
- **Teams:** Managing multiple n8n workflows and needing instant error alerts.  
- **n8n Users:** Looking for a simple way to handle workflow errors via Telegram.  

---

### **Primary Use**  
- Automates error notifications for failed workflows.  
- Sends detailed error reports to Telegram for quick troubleshooting.  
- Easily customizable to fit specific monitoring needs.

## 🔗 Nodes Used

Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
