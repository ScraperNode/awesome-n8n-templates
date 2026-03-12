# ⚒️ 🛠️ AI Prompt Maker

> ⚡ **18,119 views** · ⚒️ [Engineering](../)

## Description

### How it works

This template provides a complete, ready-to-use web application for generating high-quality AI prompts. It features a user-friendly web form where you can describe your goal, and it leverages an AI model (Google Gemini) to create a structured, reusable prompt for you.

The workflow is a full-stack application built entirely within n8n:

1.  **Frontend (The Form):** A **Form Trigger** node creates a beautiful, public-facing web form. Here, a user describes the prompt they need and selects which structural components to include (like system instructions, examples, or input variables).
2.  **Backend (The AI Logic):**
    *   A **LangChain Chain** node takes the user's request and constructs a "meta-prompt"—a set of instructions for the AI on how to generate the final prompt.
    *   The **Google Gemini** node executes this meta-prompt, creating a well-structured output with clear sections and tags.
3.  **The Result (The Webpage):**
    *   After generation, the user is automatically redirected to a new URL.
    *   This URL is handled by another **Webhook** node, which serves a custom-coded HTML page.
    *   This beautiful, dark-themed webpage displays the generated prompt and includes a one-click "Copy" button, making it easy to use the result immediately.

This template is a perfect example of how to build interactive web tools with n8n, combining a user interface, backend logic, and a dynamic web response in a single workflow.

### Set up steps

**Setup time: ~1-3 minutes**

This workflow requires a Google AI credential to function.

1.  **Configure Google AI Credentials:**
    *   This workflow uses a Google Gemini model. You will need a Google AI API key.
    *   In n8n, go to **Credentials** and click **Add credential**.
    *   Search for **Google Gemini** and enter your API key.
    *   Go back to the workflow, open the **Gemini 2.5 Flash** node, and select your newly created credential from the dropdown.

2.  **Activate the Workflow:**
    *   Click the **Active** toggle in the top-right corner to turn the workflow on.

3.  **Access Your Prompt Maker:**
    *   Open the **Prompt Request (Form Trigger)** node.
    *   Copy the **Public URL** provided. This is the link to your new web application!
    *   Open the link in your browser, fill out the form, and see the magic happen.

**Note:** This workflow uses environment variables like `{{ $env.WEBHOOK_URL }}` to build the redirect URL. These are typically set automatically by n8n and should work out-of-the-box on most standard n8n setups.

## 🔗 Nodes Used

Webhook, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
