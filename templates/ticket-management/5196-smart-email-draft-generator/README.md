# 🎫 Smart email draft generator

> ⚡ **10,294 views** · 🎫 [Ticket Management & Triage](../)

## Description

## AI-Powered Email Draft Automation Workflow

In this guide, we’ll walk you through setting up an AI-driven workflow that automatically processes incoming emails using a custom AI model (e.g., Llama), prepares email content, and saves it as a Gmail draft. Ready to automate your email drafting process? Let’s dive in!

### What’s the Goal?
- Automatically detect and process new emails via IMAP.
- Use a custom AI model to analyze and generate email content.
- Prepare structured and relevant email responses.
- Save the generated content as a Gmail draft for review or sending.
- Enable 24/7 email automation with seamless integration.

By the end, you’ll have a self-running email assistant that drafts responses effortlessly.

### Why Does It Matter?
Manual email drafting is time-consuming and prone to delays. Here’s why this workflow is a game changer:
- **Zero Human Error:** AI ensures consistent and accurate drafts.
- **Time-Saving Automation:** Instantly process and draft emails, boosting efficiency.
- **24/7 Availability:** Handle emails anytime without manual intervention.
- **Focus on Strategy:** Free your team from repetitive drafting tasks.

Think of it as your tireless email drafting assistant that never misses a beat.

### How It Works
Here’s the step-by-step magic behind the automation:

##### Step 1: Trigger the Workflow
- Detect new emails using IMAP via the `Check New Email (IMAP)` node.
- Capture incoming email content for processing.

##### Step 2: Process Email with AI
- Send the email text to a custom AI model (e.g., Llama) for analysis.
- Use the `Custom AI Model` node to generate a context-aware response or draft content.

##### Step 3: Prepare Email Content
- Format the AI-generated content into a polished email structure using the `Prepare Email Content` node.
- Ensure the content is ready for drafting with proper salutations and structure.

##### Step 4: Save as Gmail Draft
- Route the prepared email content to the `Save as Gmail Draft` node.
- Save the draft in Gmail for review or manual sending.

##### Step 5: Log & Optimize
- Log all processed emails and drafts in a database (e.g., Airtable, Google Sheets).
- Continuously improve the AI model based on feedback or new email patterns.

### How to Use the Workflow?
Importing a workflow in n8n is a straightforward process that allows you to use pre-built or shared workflows to save time. Below is a step-by-step guide to importing the **Smart Email Draft Generator** workflow in n8n, based on the official documentation and community resources.

**Steps to Import a Workflow in n8n**

**1. Obtain the Workflow JSON**
- **Source the Workflow:**
  - Workflows are typically shared as JSON files or code snippets. You might receive them from:
    - The n8n community (e.g., n8n.io workflows page).
    - A colleague or tutorial (e.g., a .json file or copied JSON code).
    - Exported from another n8n instance.
- **Format:** Ensure you have the workflow in JSON format, either as a file (e.g., `workflow.json`) or as text copied to your clipboard.

**2. Access the n8n Workflow Editor**
- **Log in to n8n:**
  - Open your n8n instance (via n8n Cloud or your self-hosted instance).
  - Navigate to the **Workflows** tab in the n8n dashboard.
- **Open a New Workflow:**
  - Click **Add Workflow** to create a blank workflow, or open an existing workflow if you want to merge the imported workflow.

**3. Import the Workflow**
**Option 1: Import via JSON Code (Clipboard):**
- In the n8n editor, click the **three dots (⋯)** in the top-right corner to open the menu.
- Select **Import from Clipboard**.
- Paste the JSON code of the workflow into the provided text box.
- Click **Import** to load the workflow into the editor.

**Option 2: Import via JSON File:**
- In the n8n editor, click the **three dots (⋯)** in the top-right corner.
- Select **Import from File**.
- Choose the `.json` file from your computer.
- Click **Open** to import the workflow.

**Setup Notes:**
- **IMAP Credentials:** Configure IMAP settings in the `Check New Email (IMAP)` node with your email account credentials (e.g., Gmail IMAP settings).
- **Custom AI Model:** Set up the `Custom AI Model` node with your AI model credentials (e.g., Llama API key or endpoint).
- **Gmail Integration:** Authorize the `Save as Gmail Draft` node with Gmail API credentials to save drafts.
- **Content Customization:** Adjust the `Prepare Email Content` node to tailor the email structure or tone as needed.

## 🔗 Nodes Used

Email Trigger (IMAP), Gmail, Basic LLM Chain, Ollama Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
