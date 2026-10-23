# 📁 Delete Dropbox PNG files older than 48 hours on a schedule

> ⚡ **9 views** · 📁 [File Management](../)

## Description

## 🚀 What this workflow does

This workflow automatically scans your Dropbox for `.png` files and deletes any that are older than **48 hours**, helping you keep your storage clean and organized without manual effort.

It’s ideal for workflows that generate temporary files such as AI images, exports, or cached assets.

---

## ⚙️ How it works

1. **Schedule Trigger**
   Runs every 2 days to perform automated cleanup

2. **Search Dropbox Files**
   Retrieves all `.png` files from your Dropbox account

3. **Filter Files (Code Node)**
   Keeps only files that:

   * Are older than 48 hours
   * Match the `.png` format
   * Are not in excluded paths
   * Are not protected filenames

4. **Loop Over Items**
   Processes files in batches to avoid API rate limits

5. **Delete Files**
   Permanently removes the filtered files from Dropbox

---

## 🧩 Requirements

* n8n (cloud or self-hosted)
* Dropbox account
* Configured **Dropbox OAuth2 credentials**

---

## 🔧 Setup

1. Import the workflow into n8n
2. Connect your Dropbox OAuth2 credentials
3. (Optional) Adjust the schedule trigger
4. Test the workflow with sample files
5. Activate the workflow

---

## 🎛 Customization

* **Change file age limit**
  Update the `48 hours` logic inside the Code node

* **Target different file types**
  Replace `.png` with `.jpg`, `.mp4`, etc.

* **Exclude additional files/folders**
  Add paths or filenames to the exclusion list

* **Adjust execution frequency**
  Run daily, hourly, or based on your workflow volume

---

## ⚠️ Important notes

* Files are **permanently deleted** (no recovery step included)
* Always test before enabling in production
* Ensure correct permissions in your Dropbox credentials

---

## 💡 Use cases

* Clean up AI-generated images automatically
* Manage temporary automation files
* Prevent Dropbox storage overflow
* Maintain clean file systems for pipelines

---

## 🏁 Summary

This workflow provides a simple and reliable way to automate file cleanup in Dropbox.
By combining scheduled execution with smart filtering, it helps you maintain an efficient and clutter-free storage system.

---
## 👋 Need help or want to customize this workflow?

📺 Contact: [Fiverr](https://www.fiverr.com/sampdiablog/)
📩 Consultation: [Book Appointment](https://calendly.com/oghenekaroafigo/meeting)

## 🔗 Nodes Used

Dropbox, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
