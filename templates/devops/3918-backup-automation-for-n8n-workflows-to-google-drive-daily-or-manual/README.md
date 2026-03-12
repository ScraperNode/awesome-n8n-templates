# ⚙️ 💾 Backup automation for n8n workflows to Google Drive (daily or manual)

> ⚡ **654 views** · ⚙️ [DevOps & CI/CD](../)

## Description

### 💾 Backup Automation for n8n Workflows to Google Drive – No Risk, No Stress

#### Hi! I’m Amanda,
I build automation workflows for n8n and Make.  
This ready-to-use workflow is designed to automatically **export and back up all your n8n workflows** to a designated **Google Drive folder**, organized by date.

It’s perfect for agencies, developers, and teams that want to protect their automation assets — without relying on manual exports or risking losing their work.

---

### ✅ What this workflow does

- Fetches **all your existing workflows** from the n8n API  
- Compiles each workflow as a `.json` file  
- Creates a new folder in Google Drive using the current date  
- Uploads each `.json` file to that folder  
- Can be triggered **manually** or **automatically via cron** (date-time node)

---

### ⚙️ How to set it up

1. **Connect your Google Drive** in the “Folder Creation” and “Save to Drive” nodes  
2. **Add your n8n API Key** in the “Search All Workflows” and “Compiles Individual Data” nodes  
3. Define your time zone and execution method:
   - Run manually via the “Manual Trigger” node  
   - Or schedule backups using the “Date & Time” and “Schedule Trigger” nodes  
4. (Optional) Change the parent folder ID in the “Folder Creation in Drive” node to set your destination

Once configured, the workflow will back up your entire workflow list daily — or whenever you run it — and send the files to your Google Drive!

---

### 🧰 Nodes & Tech Used

- `Schedule Trigger` + `Manual Trigger`  
- `Date & Time` – For timestamp folder naming  
- `n8n API` – To list and fetch each workflow  
- `Google Drive` – Folder creation and file upload  
- `Merge`, `Move Binary Data`, `Set` – Workflow compilation and formatting  

---

### 🧑‍💻 Who this is for

- n8n developers who want peace of mind  
- Agencies managing many client automations  
- Anyone worried about losing their workflow work  
- Teams needing version control and backup history

---

### 🛠️ Requirements

- **Google Drive OAuth2 credential**  
- **n8n API Key** (from your account settings)  
- n8n Cloud or self-hosted instance

---

### 🌐 Want to use this workflow?

❤️ Buy workflows: [https://iloveflows.com](https://iloveflows.com)  
☁️ Try n8n Cloud with my partner link: [https://n8n.partnerlinks.io/amanda](https://n8n.partnerlinks.io/amanda)

## 🔗 Nodes Used

Google Drive, Convert to/from binary data, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
