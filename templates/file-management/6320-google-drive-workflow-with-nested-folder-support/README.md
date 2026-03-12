# 📁 Google Drive workflow with nested folder support

> ⚡ **228 views** · 📁 [File Management](../)

## Description

## 👤 Who’s it for

- **Anyone** who needs to recursively fetch **all files** from a specific Google Drive folder, including files inside all its nested (child) folders.
- Ideal for **automation builders**, **admins**, and **integrators** who want to process, move, list, or report on all files in a complex folder tree.

---

## ⚙️ How it works / What it does

This workflow will:
1. **Accept a Google Drive Folder ID** as an input (from another workflow or trigger).
2. **Recursively discover all child folders** starting from the parent, no matter how many levels deep.
3. **Collect all file IDs & names** from every folder (parent + all descendants).
4. **Return a clean list** of all found files (with IDs and names) for further automation, downloading, or processing.

**Key features:**
- 💡 **Works recursively** (handles any depth of nested folders).
- 🏷️ **Outputs file ID & file name** for each discovered file.
- 🔄 **Can be triggered by other workflows** (great for modular automation).

---

## 🛠️ How to set up

#### 1. **Google Drive Credentials**
- Make sure you’ve set up a **Google Drive OAuth2 credential** in n8n.
- Connect this credential to all Google Drive nodes in the workflow.

#### 2. **Parent Folder ID**
- Input the Google Drive folder ID you want to start from.
- **How to pass it:**  
  - If running standalone: update the `When Executed by Another Workflow` node with your folder ID.
  - If called from another workflow: pass the folder ID as an input named `id`.

#### 3. **Check Set Nodes**
- There are two Set nodes (`Return parent` and `Return parent1`) and one trigger (`When Executed by Another Workflow`) where you might want to update the hardcoded folder ID.
- ⚠️ **Change these IDs to match your use case.**

#### 4. **Run the Workflow**
- Start the workflow (or execute it via another workflow).
- The result will be a flat list of files in all subfolders.

---

## ✅ Requirements

- 🟢 **n8n instance**
- 🟢 **Google Drive OAuth2 credentials** connected in n8n
- 🟢 **A valid Google Drive folder ID** to start from

---

## 🧑‍💻 How to customize

- **Return Extra Data:**  
  Add fields in the “Search files” node options to return more Google Drive file metadata (e.g., size, webViewLink).
- **Filter by File Type:**  
  Adjust the search query or add a filter node to only include certain file types (e.g., PDFs, Docs).
- **Change Output Format:**  
  Edit the “Edit Fields” Set node to structure your output differently.
- **Integrate Further:**  
  Add new nodes after the Loop to, for example, download, email, or sync files as needed.

---

## 🚨 Notes & Tips

- **Performance:**  
  This workflow is optimized for up to hundreds of folders. For very large Drive accounts (thousands of folders/files), consider pagination or batching.
- **Credential Security:**  
  Always use n8n’s built-in credential manager—never hard-code sensitive data.
- **Static IDs:**  
  As noted in the sticky note, make sure to update all hardcoded folder IDs for your production use.

---

## 🗂️ Node Overview

- **When Executed by Another Workflow:** Accepts a folder ID (entry point).
- **Google Drive – Get children folders:** Lists subfolders of the given folder.
- **If:** Checks if the folder contains any subfolders.
- **Execute Workflow:** Handles recursion (calls itself on child folders).
- **Code:** Flattens all discovered folder IDs for next step.
- **Loop Over Items:** Iterates over all folders to process files.
- **Google Drive – Search files:** Finds all files in each folder.
- **Edit Fields (Set):** Structures file data for output.
- **Sticky Note:** Documentation and reminders inside your workflow.

---

## 🔄 Example Output

```json
[
  {
    "file_id": "1A2B3C...",
    "file_name": "MyDoc.pdf"
  },
  {
    "file_id": "2B3C4D...",
    "file_name": "Presentation.pptx"
  }
]

## 🔗 Nodes Used

Google Drive, Execute Sub-workflow, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
