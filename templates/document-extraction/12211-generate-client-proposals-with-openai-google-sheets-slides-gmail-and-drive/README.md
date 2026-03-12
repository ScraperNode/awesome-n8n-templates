# 🔬 Generate client proposals with OpenAI, Google Sheets, Slides, Gmail, and Drive

> ⚡ **222 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 🧾 AI Proposal Generator Engine

An n8n-based automation that generates client proposals from a form, lets you review everything in one place, and sends the proposal only when you approve it.

---

## ⚙️ What It Does

The AI Proposal Generator Engine creates proposals directly from an **n8n Form**.
All proposal content and a draft email are generated automatically using OpenAI.

**Google Sheets is used only as a database**, where you:

* Review the generated proposal
* Review the draft email
* Control when the proposal is sent by updating the status

No proposal is sent until it is manually marked as `READY`.

---

## 💡 Use Cases

| Use Case              | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| Sales Calls           | Generate proposals immediately after a call using the form |
| Freelancers           | Create clean, repeatable proposals without manual writing  |
| Agencies              | Standardize proposals while keeping them client-specific   |
| Approval Flow         | Review proposal and email before sending                   |
| Fast Turnaround Deals | Reduce proposal creation time from hours to minutes        |
| Team Workflows        | Use Sheets as a simple approval and tracking layer         |

---

## 🔧 Setup

### 1️⃣ Google Credentials

Go to Google Cloud Console and create a Web App (OAuth).

Enable these APIs:

* Google Sheets
* Google Drive
* Gmail

In n8n, select this Google credential inside:

* Google Sheets nodes
* Google Drive nodes
* Gmail nodes

Use the same credential everywhere.

---

### 2️⃣ Google Drive Structure

Create this folder setup in Google Drive. You can use the provided templates or your own.

```
Proposal Generator Engine/
├── Template 1 (Slides)
├── Template 2 (Slides)
├── Template 3 (Slides)
├── Proposal Generation Tracker (Sheets)
└── Generated Proposals/
```

---

### 3️⃣ Google Sheets Node

Open the **Proposal Generation Tracker** and copy the Sheet ID from the URL.

Paste this ID into the Google Sheets node in n8n.
This sheet is used only to:

* Store generated proposal links
* Store email drafts
* Control send status

---

### 4️⃣ Slides and Drive Nodes

Copy the Slides template ID you want to use and paste it into the **Copy Template** node.

Copy the folder ID of **Generated Proposals** and paste it into the **Move File / Folder** field.

---

### 5️⃣ OpenAI Key

Create an OpenAI credential in n8n using your API key.

Select this credential in all GPT nodes.
You can edit prompts to match your proposal style and tone.

---

## 🔁 Workflow Summary

1. Proposal details are collected using an **n8n Form**
2. OpenAI generates structured proposal content
3. A Google Slides template is copied and filled
4. A proposal email draft is generated
5. Proposal link and email draft are saved in Google Sheets with status `WAITING`
6. You review the proposal and email
7. Status is changed to `READY`
8. Proposal is converted to PDF and sent via Gmail
9. Proposal is stored in Google Drive and status is updated to `SENT`

---

## 📞 Support & Contact

📧 **Email:** [atharvapj5@gmail.com](mailto:atharvapj5@gmail.com)
🔗 **LinkedIn:** [https://www.linkedin.com/in/atharva-jaiswal/](https://www.linkedin.com/in/atharva-jaiswal/)
📅 **Book a support call:** [https://calendly.com/atharvapj5/30min](https://calendly.com/atharvapj5/30min)

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Slides, Google Sheets Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
