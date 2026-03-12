# 💬 Automatic travel itinerary generation via email with Llama AI

> ⚡ **1,337 views** · 💬 [Support Chatbots](../)

## Description

## Travel Agent that Auto Response on Mail

In this guide, we’ll break down how to set up an AI-powered auto-reply system that works while you sleep. Ready to 10X your efficiency? Let’s dive in!

### What’s the Goal?
 - AI-driven auto-responses for Email.
 - Instant replies to FAQs, order confirmations, and support queries.
 - 24/7 availability - no more “We’ll get back to you soon” delays.
 - Seamless integration with existing business tools.

By the end, you’ll have a self-running communication assistant that never takes a coffee break.

### Why Does It Matter?
Why automate replies? Because time = money and manual typing is so 2010. Here’s why this workflow is a game changer:
 - **Zero Human Error:** AI doesn’t get tired or make typos.
 - **Lightning-Fast Replies:** Customers get instant answers, improving satisfaction.
 - **24/7 Availability:** No more “Out of Office” replies.
 - **Focus on High-Value Work:** Free your team from mundane tasks.
Think of it as hiring a super efficient virtual assistant - minus the salary.

### How It Works
Here’s the step by step magic behind the automation
##### Step 1: Trigger the Workflow
 - Detect new messages from WhatsApp, Email, or Slack.
 - Use n8n’s webhook or API integration to capture incoming queries.

##### Step 2: Process the Message with AI
 - Send the message to an AI model (like OpenAI GPT-4 or Gemini).
 - Generate a context-aware, human-like response.

##### Step 3: Send the Automated Reply
 - Route the AI-generated response back to the original platform.
 - Ensure personalization (e.g., “Hi [Name], thanks for reaching out!”).

##### Step 4: Log & Optimize
 - Store interactions in a database (Airtable, Google Sheets).
 - Continuously improve AI responses based on past data.

### How to use the workflow?
Importing a workflow in n8n is a straightforward process that allows you to use pre-built or shared workflows to save time. Below is a step-by-step guide to importing a workflow in n8n, based on the official documentation and community resources.

**Steps to Import a Workflow in n8n**
**1. Obtain the Workflow JSON**
- **Source the Workflow:**
	- Workflows are typically shared as JSON files or code snippets. You might receive them from:
	- The n8n community (e.g., n8n.io workflows page).
	- A colleague or tutorial (e.g., a .json file or copied JSON code).
	- Exported from another n8n instance (see export instructions below if needed).
- **Format:** Ensure you have the workflow in JSON format, either as a file (e.g., workflow.json) or as text copied to your clipboard.

**2. Access the n8n Workflow Editor**
- **Log in to n8n:**
	- Open your n8n instance (via n8n Cloud or your self-hosted instance).
	- Navigate to the Workflows tab in the n8n dashboard.
- **Open a New Workflow:**
	- Click Add Workflow to create a blank workflow, or open an existing workflow if you want to merge the imported workflow.

**3. Import the Workflow**
**Option 1: Import via JSON Code (Clipboard):**
- In the n8n editor, click the three dots (⋯) in the top-right corner to open the menu.
- Select **Import from Clipboard.**
- Paste the JSON code of the workflow into the provided text box.
- Click **Import** to load the workflow into the editor.

**Option 2: Import via JSON File:**
- In the n8n editor, click the **three dots (⋯)** in the top-right corner.
- Select **Import from File**.
- Choose the .json file from your computer.
- Click **Open** to import the workflow.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Basic LLM Chain, Ollama Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
