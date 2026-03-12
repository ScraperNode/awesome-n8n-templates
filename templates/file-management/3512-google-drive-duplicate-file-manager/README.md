# 📁 Google Drive duplicate file manager

> ⚡ **1,296 views** · 📁 [File Management](../)

## Description

# Google Drive Duplicate File Manager 🧹📁

**Purpose:** Automate the process of finding and managing duplicate files in your Google Drive.

**Who's it for?**

* Individuals and teams aiming to streamline their Google Drive.
* Anyone tired of manual duplicate file cleanup.

**What it Solves:**

* Saves storage space 💾.
* Reduces file confusion 😕➡️🙂.
* Automates tedious cleanup tasks 🤖.

**How it works:**

1.  **Trigger:** Monitors a Google Drive folder for new files.
2.  **Configuration:** Sets rules for keeping and handling duplicates.
3.  **Find Duplicates:** Identifies duplicate files based on their content (MD5Checksum).
4.  **Action:** Either moves duplicates to trash or renames them.

**Setup Guide:**

1.  **Google Drive Trigger ⏰:**
    * Set up the trigger to watch a specific folder or your entire drive (use caution with the root folder! ⚠️).
    * Configure the polling interval (default: every 15 minutes).
2.  **Config Node ⚙️:**
    * **keep:** Choose whether to keep the "first" or "last" uploaded file (default: "last").
    * **action:** Select "trash" to delete duplicates or "flag" to rename them with "DUPLICATE-" (default: "flag").
    * **owner & folder:** Taken from the trigger. Only change if needed.

**Key Considerations:**

* **Google Drive API limits:** Be mindful of API usage.
* **Folder Scope:** The workflow handles one folder depth by default. (WARNING: If configured to work with the Root folder / all files in all sub-directories are processed so **USE THIS OPTION WITH CAUTION** since the workflow might trash/rename important files)
* **Google Apps:** Google docs are ignored since they are not actual binary-files and their content can't be compared.


**Enjoy your clean Google Drive! ✨**

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
