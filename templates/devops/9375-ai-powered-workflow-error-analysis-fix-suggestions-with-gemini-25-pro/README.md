# ⚙️ AI-powered workflow error analysis & fix suggestions with Gemini 2.5 Pro

> ⚡ **1,485 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Overview

Stop digging through execution logs to find out why a workflow failed. This template provides a "set-it-and-forget-it" monitoring system that uses AI to automatically debug your n8n workflows.

Instead of just getting a simple error message, you'll receive a detailed email notification with a **root cause analysis** and a **step-by-step suggested fix** from a Gemini-powered AI agent. This saves you valuable time, helps you resolve issues faster, and ensures your critical automations are always running smoothly.

---

## Prerequisites

Before you begin the setup, please make sure you have the following accounts and information ready:

* **An n8n Instance:** This workflow must be hosted on an active n8n instance.
* **n8n API Key:** You'll need to generate an API key from your n8n instance (**Settings &gt; API**).
* **OpenRouter Account:** An account with [OpenRouter.ai](https://openrouter.ai/) to access various AI models like Gemini.
* **Google (Gmail) Account:** To send and receive the email notifications.
* **n8n Environment Variable:** Your n8n instance must have the `N8N_EDITOR_BASE_URL` environment variable configured. This is essential for generating correct links to your workflow executions.

---

## Use Cases

This template is perfect for anyone who wants to proactively monitor their automations. Here are a few examples:

* **Monitoring Critical Webhooks:** Get instant, intelligent alerts if a workflow handling data from a payment gateway (like Stripe) or a form submission fails due to unexpected data, minimizing service disruption.
* **Managing Complex Automations:** For long, multi-step workflows, the AI can immediately pinpoint the exact failing node and suggest fixes for complex data mapping errors or API issues that are otherwise difficult to trace.
* **Developers & Agencies:** If you manage multiple n8n workflows for clients or different projects, this provides a centralized monitoring system that helps you stay on top of all automation issues without having to manually check each one.

## How it works

This workflow acts as an automated debugging assistant for your n8n instance 🤖. When any of your other workflows fail during an **automatic (production) execution**, this template will:

1.  **Capture the error** and use the n8n API to fetch the complete structure of the failed workflow for full context.
2.  **Send the error details** and workflow structure to a powerful AI agent (via OpenRouter) for a detailed root cause analysis.
3.  **Format the AI's diagnosis** and suggested fix into a clean HTML email and send it to you via Gmail, including a direct link to the failed execution.

**Important Note:** As per the n8n documentation, the Error Trigger node only runs for errors that happen in **production executions** (e.g., from a webhook call or a schedule). It will **not** run when you test a workflow by clicking "Execute workflow" manually.

## Set up steps

*(Estimated setup time: 10 minutes)*

There are two main parts to the setup: configuring this workflow, and then connecting it to the workflows you want to monitor.

### Part A: Configure the AI Debugger Workflow

1.  **n8n API Credentials:** Create an API key in your n8n instance under **Settings &gt; API** and add it as a "Header Auth" credential for the `Get Workflow JSON` node.
2.  **OpenRouter Credentials:** Add your OpenRouter API key to the `OpenRouter Chat Model` node.
3.  **Gmail Credentials:** Authenticate your Gmail account in the `Send Debugging Email` node.
4.  **Recipient Email:** Update the **"To"** field in the final `Send Debugging Email` node with your own email address.
5.  **Environment Variable:** Ensure your `N8N_EDITOR_BASE_URL` environment variable is correctly set for your n8n instance. This is required for building the API and execution links.

### Part B: Connect to Your Other Workflows

For every workflow you want this debugger to monitor, you must link it in that workflow's settings.

1.  Go to the workflow you want to monitor (your "target" workflow).
2.  Click the three dots (`...`) in the top right corner and select **Settings**. 3.  In the **Error Workflow** dropdown, select this "AI-Powered Workflow Debugger & Notifier" workflow.
4.  Click **Save**. 
Now, whenever that target workflow fails during a production run, this debugger workflow will automatically be triggered to analyze the error and notify you.
5.  **Note that the error workflow only gets triggered on automatic runs, not manual ones:** This is a feature of how the error trigger works in n8n. To ensure this, make sure the target workflow is **active**. It won't trigger the error workflow if it's turned off.

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
