# ⚙️ Backup workflows to Git repository on Gitea

> ⚡ **1,784 views** · ⚙️ [DevOps & CI/CD](../)

## Description

#### **Overview**
This workflow automates the backup of all workflows from your system to a **Git repository hosted on Gitea**. It runs on a **scheduled trigger**, fetching, encoding, and committing workflow data, ensuring seamless version control and disaster recovery.

📌 **Quick Setup:** Just update three global variables and configure authentication—no manual exports needed!

---

### **How It Works (Quick Glance)**
1️⃣ **Scheduled Execution** → Runs automatically at defined intervals.
2️⃣ **Fetch Workflows** → Uses the API to retrieve all workflows.
3️⃣ **Process Workflows** → Converts workflow data into a **Git-friendly format**.
4️⃣ **Commit & Push to Git** → Saves workflows in a Gitea repository.

---

### **Setup Steps** (⚡ Takes ~5 min)

#### **1️⃣ Set Global Variables**
Go to the **Globals** section in the workflow and update:
- **`repo.url`** → `https://your-gitea-instance.com` *(Replace with your actual Gitea URL)*
- **`repo.name`** → `workflows` *(Repository name where backups will be stored)*
- **`repo.owner`** → `octoleo` *(Gitea account that owns the repository)*

📌 **These three variables define where the workflows are stored.**

#### **2️⃣ Configure Gitea Authentication**
- **Go to your Gitea account** → Generate a **Personal Access Token**
- In the **credential manager**, create a **new Gitea Token** with:
- **Name:** `Authorization`
- **Value:** `Bearer YOUR_PERSONAL_ACCESS_TOKEN`

📌 **Ensure there is a space after `Bearer` before the token!**

#### **3️⃣ Link Credentials to Git Nodes**
Attach the Gitea credentials to these three Git nodes:
- **GetGitea** → Retrieves existing repository data
- **PutGitea** → Updates workflows
- **PostGitea** → Adds new workflows

#### **4️⃣ Link Credentials for API Requests**
- **Add API authentication** in the node that fetches all workflows.

#### **5️⃣ Test & Activate**
- **Run the workflow manually** to confirm backups work.
- Enable the **schedule trigger** for automation.

📌 **The workflow automatically checks for changes before committing updates.**

---

### **Why Use This Workflow?**
✅ **Automated Backups** → No manual exports needed.
✅ **Version Control** → Easily track workflow changes.
✅ **Simple Setup** → Just configure globals & credentials.
✅ **Secure** → Uses token-based authentication.

---

### **Next Steps**
💬 Have questions? **Reach out on the forum!** 🚀

## 🔗 Nodes Used

HTTP Request, n8n, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
