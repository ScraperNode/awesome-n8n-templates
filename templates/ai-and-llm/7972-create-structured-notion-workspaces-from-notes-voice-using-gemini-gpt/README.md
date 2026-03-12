# ✨ Create structured Notion workspaces from notes & voice using Gemini & GPT

> ⚡ **104 views** · ✨ [AI & LLMs](../)

## Description

# AI Assistant Workflow: Create Notion Workspaces from Notes & Voice Records

## 👤 Who is this for?
This workflow is designed for **anyone who loves Notion**—from project managers, freelancers, to students—who want to turn scattered ideas, handwritten notes, or quick thoughts into fully structured Notion databases **without the hassle of manual setup**.

## 😩 The Problem
You have a brilliant idea jotted down during a meeting or on a piece of paper.  
But turning that into a structured Notion workspace (for project management, CRM, habit tracking, recipes, etc.) is **time-consuming and disruptive**.  

Designing properties, configuring views, and entering sample data can interrupt your creative flow and slow down execution.

## ⚡️ How It Works
This workflow acts as a **smart AI assistant** that automatically builds a full Notion workspace from just a simple note or voice record.

1. **Notes & Upload**  
   - Snap a picture of your handwritten notes or type a quick description of what you want to manage.  
   - Upload it into a Google Drive folder.

2. **AI Reads & Understands**  
   - **Step 1:** Google Gemini AI converts handwritten notes into text (OCR).  
   - **Step 2:** Another AI (OpenAI/Vertex AI) analyzes the intent—figuring out whether you want a project plan, a CRM contact list, or maybe a recipe collection.

3. **AI Designs & Builds**  
   - A specialized AI then **designs the database structure**, including:  
     - Properties (date, status, assignee, tags, etc.)  
     - Dropdown options  
     - Useful views (Table, Kanban Board, Calendar, Gallery)  

4. **Database Creation & Sample Data**  
   - The system **creates the database in your Notion** automatically.  
   - Fills it with realistic sample entries so you can start working immediately.

---

## ⚙️ Detailed Workflow Steps

### 🔄 Automated Flow
1. **Trigger & Read Notes**  
   - Workflow starts when a file (image or text) is uploaded to a Google Drive folder.  
   - Gemini AI extracts text from handwritten notes.

2. **Track Request**  
   - System generates a unique Request ID.  
   - Creates a new page in a Notion tracking database `"Agent Notes"` with status = `"Not started"`.

3. **AI Intent Analysis**  
   - An AI Agent analyzes the extracted text to identify:  
     - Content type (e.g., `project_management`, `crm_contacts`, `inventory_tracking`)  
     - Complexity level (scale 1–5)  
     - Suggested database title, description, and icon  

4. **AI Database Design**  
   - Another AI Agent designs the structure:  
     - **Schema:** Names and types for each property (column)  
     - **Sample Data:** 5–10 rows of context-appropriate sample entries (localized for Vietnam if needed)  
     - **Views:** Recommendations for Table, Board, Calendar, Gallery, etc.  

5. **Database Creation**  
   - AI output is formatted for Notion API.  
   - Workflow creates a new inline database inside the tracking page.

6. **Insert Sample Data**  
   - Workflow iterates over the AI-generated sample rows and inserts them into the new database.

7. **Completion**  
   - Updates the status of the `"Agent Notes"` page to `"Done"`.  
   - Records completion time.

---

## 🛠️ Setup Instructions

### 1. 📝 Configure Notion
- Create a new **Integration** in Notion (`My Integrations`) → Copy the **Internal Integration Token**.  
- Create a database named `"Agent Notes"` with properties:  
  - `Name (Title)`  
  - `Status (Status)`  
  - `Request ID (Text)`  
  - `Last Updated (Date)`  
- Share `"Agent Notes"` with your integration.  
- Copy the database ID from the URL.

### 2. 📁 Configure Google Drive
- Create a new folder in Google Drive (e.g., `"Notes for Notion"`).  
- Copy the folder ID from the URL.

### 3. 🔧 Setup in n8n
- Import the workflow into your **n8n** instance.  
- Add credentials for **Notion, Google Drive, and OpenAI/Google AI (Vertex)**.  
- Update configuration in nodes:  
  - **Google Drive Trigger** → Paste your Drive folder ID  
  - **Notion Nodes** (`Create Row`, `Get Row`) → Paste `"Agent Notes"` database ID  
  - **AI Nodes** → Ensure correct credentials are selected

---

## 🚀 Usage Example
Imagine you want to manage your recipes.  

1. Write on paper: Create a recipe collection.
Needed fields: Dish name, Ingredients, Cooking time, Difficulty (easy/medium/hard), Type (main/dessert), Picture.


2. Take a photo and upload it to the configured Google Drive folder.  

3. Wait a few minutes.  

4. A new database **“Recipe Collection 🍲”** will appear in Notion, with:  
- Columns already set up  
- Sample recipes filled in  
- Useful views (Table, Gallery, Calendar)

---

## 🌟 Key Benefits
- No manual setup required  
- Transforms messy notes into structured, usable data  
- Works with both **handwritten notes** and **typed text**  
- Saves time, maintains creative flow, and boosts productivity

## 🔗 Nodes Used

HTTP Request, Google Drive, Notion, Google Drive Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
