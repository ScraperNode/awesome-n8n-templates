# 🎬 Generate content ideas with Gemini Pro and store in Google Sheets

> ⚡ **3,853 views** · 🎬 [Content Creation & Video](../)

## Description

# Automated Content Idea Generation and Expansion with Google Gemini and Google Sheets

This n8n workflow automates the process of generating content ideas based on a user-defined topic, then expands each idea into a more detailed content piece (like a blog post) using Google Gemini, and finally saves all the generated data (idea title, description, and full content) into a Google Sheet. It's a powerful tool for streamlining content creation workflows.

This workflow includes:
*   Generation of multiple content ideas from a single topic.
*   Expansion of each idea into detailed content using AI.
*   Storage of ideas and generated content in a structured Google Sheet.
*   Sticky Notes within the workflow for inline documentation and setup guidance.

## Prerequisites

1.  **n8n Instance:** You need a running n8n instance (self-hosted or cloud).
2.  **Google AI Account:** Access to Google AI (Gemini). You will need an API key.
3.  **Google Account:** Access to Google Sheets. You will need to create or use an existing spreadsheet with specific column headers.

## Installation and Setup

1.  **Import the Workflow:**
    *   Copy the entire JSON code provided.
    *   In your n8n instance, go to "Workflows".
    *   Click "New" -&gt; "Import from JSON".
    *   Paste the JSON code and click "Import".

2.  **Configure Credentials:**
    *   **Google AI (Gemini):**
        *   Find the "Google Gemini Chat Model for Content Idea Generator" node and the "Google Gemini Chat Model for Content Generation" node.
        *   Click on the "Credentials" field in *both* nodes (it will likely show a placeholder name like "Google Gemini(PaLM) Api account").
        *   Click "Create New".
        *   Select "Google AI API".
        *   Enter your Google AI API Key.
        *   Save the credential. (You can reuse the same credential for both nodes).
    *   **Google Sheets:**
        *   Find the "Google Sheets" node.
        *   Click on the "Credentials" field (it will likely show a placeholder name like "Google Sheets account").
        *   Click "Create New".
        *   Select "Google Sheets OAuth2 API".
        *   Follow the steps to connect your Google Account and grant n8n access to Google Sheets.
        *   Save the credential.

3.  **Configure Google Sheets Node:**
    *   Open the "Google Sheets" node settings.
    *   **Spreadsheet ID:** Replace the placeholder value with the actual ID of your Google Sheet. You can find the Spreadsheet ID in the URL of your Google Sheet (it's the long string of characters between `/d/` and `/edit`).
    *   **Sheet Name:** Select or enter the name or GID of the sheet within your spreadsheet where you want to save the data (e.g., `Sheet1` or `gid=0`).
    *   **Columns:** Ensure your Google Sheet has columns named `title`, `description`, and `content`. The node is configured to map the generated data to these specific column headers.
    *   Save the node settings.

4.  **Review Sticky Notes:**
    *   Look at the Sticky Notes placed around the workflow canvas. They provide helpful context and reminders for setup, required Google Sheet columns, and the AI models used.

## How to Use

1.  **Activate the Workflow:** Toggle the workflow switch to "Active".
2.  **Trigger the Workflow:**
    *   Since this workflow uses a "When clicking ‘Execute workflow’" node as the trigger, you can run it directly from the n8n editor.
    *   Click the "Execute Workflow" button.
    *   The workflow will start automatically.
3.  **Set the Topic:**
    *   Open the "Set the input fields" node.
    *   Modify the `topic` value to the subject you want to generate content ideas about.
    *   Save the node settings.
4.  **Monitor Execution:** Watch the workflow execute. The nodes will light up as they process. The "Loop Over Items" node will show multiple executions as it processes each generated idea.
5.  **Check Results:**
    *   The generated content ideas (title, description) and the expanded content will be written as new rows in the Google Sheet you configured. Each row will correspond to one generated idea and its content.

This workflow provides a robust starting point for AI-assisted content creation. You can customize the AI prompts in the "Content Idea Generator" and "LLM Content Generator" nodes to refine the output style and format, or integrate additional steps like sending notifications or further processing the generated content.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
