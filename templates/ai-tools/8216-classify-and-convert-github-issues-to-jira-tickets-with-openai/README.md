# 🎯 Classify and convert GitHub issues to Jira tickets with OpenAI

> ⚡ **49 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## AI-Powered GitHub Issue to Jira Ticket Automation

Bridge the gap between your development and project management workflows with this intelligent n8n template. This isn't just a simple sync; it uses an AI agent to analyze, classify, and intelligently route new GitHub issues into the correct Jira ticket type, saving you countless hours of manual triage.

---

## 🚀 Key Features
*   **AI-Powered Issue Classification:** Leverages an AI Agent (powered by OpenAI) to analyze the content of a new GitHub issue and determine its type (e.g., bug, task, improvement).
*   **Intelligent Routing:** Automatically creates the corresponding ticket type in Jira. Bugs in GitHub become Bugs in Jira; other issues become Tasks.
*   **Seamless Integration:** Triggers instantly when a new issue is created in your specified GitHub repository.
*   **Rich Data Transfer:** Migrates the issue title and body directly into the Jira ticket description for full context.
*   **Structured AI Output:** Uses a structured output parser to ensure the AI's classification is reliable and consistent.
*   **Beginner-Friendly & Educational:** The workflow is annotated with sticky notes, explaining each step of the process, making it a great tool for learning how to use AI in n8n.

---

## ⚙️ How It Works

The workflow is designed for clarity and power, moving from issue creation to ticket generation in four automated steps.

### 1. **Trigger: New GitHub Issue**
*   The **GitHub Trigger** node constantly listens for new issues being created in your designated repository. Once an issue is opened, the workflow springs into action.

### 2. **Analyze: AI Classification**
*   The issue's title and body are passed to an **AI Agent**.
*   Using a prompt designed for classification and an **OpenAI Chat Model**, the agent determines if the issue is a `bug`, `task`, or another category.
*   A **Structured Output Parser** ensures the AI returns clean, usable JSON data (e.g., `{"type": "bug"}`).

### 3. **Route: Conditional Logic**
*   An **IF node** checks the structured output from the AI agent.
*   If the `type` is "bug," the workflow proceeds down the "bug" path. Otherwise, it follows the default path for "tasks."

### 4. **Create: Jira Ticket Generation**
*   Depending on the route, the corresponding **Jira node** is activated.
*   A new ticket is created in your specified Jira project with the appropriate issue type (`Bug` or `Task`) and includes the full context from the original GitHub issue.

---

## 🛠️ Setup Steps & Credentials

To get this AI-powered workflow running, you'll need to configure a few credentials:

1.  **GitHub:**
    *   Create a GitHub credential in n8n.
    *   In the **GitHub Trigger** node, select your credential and specify the `owner` (your GitHub username or organization) and the `repository` you want to monitor.

2.  **OpenAI:**
    *   Obtain an API Key from [platform.openai.com](https://platform.openai.com).
    *   Create an `OpenAI` credential in n8n.
    *   In the **OpenAI Chat Model** node, select your newly created credential. You can also experiment with different models like `gpt-4.1-mini` for speed or `gpt-4o` for higher accuracy.

3.  **Jira:**
    *   Create a Jira API token from your Atlassian account settings.
    *   Create a `Jira` credential in n8n using your email, API token, and Atlassian domain.
    *   In both the **Create Jira Ticket (Bug)** and **Create Jira Ticket (Task)** nodes, select your Jira credential and set your target `project` key.

---

## 💡 Customization & Learning

This workflow is a powerful starting point. Here are a few ways you can customize it and learn more:

*   **Expand Classification:** Modify the AI Agent's prompt and the IF node to handle more issue types, like `improvement`, `documentation`, or `feature-request`.
*   **Add More Data:** Enhance the Jira nodes to include labels, assignees, or priority levels based on the AI's output or the original GitHub issue's properties.
*   **Swap AI Models:** Try different language models by replacing the OpenAI node with one for Google Gemini, Anthropic Claude, or others supported by n8n.
*   **Error Handling:** Add a path for what to do if the AI fails to classify an issue, such as sending a notification to a Slack channel for manual review.

---

## 📋 Requirements

*   An active n8n instance.
*   GitHub API credentials.
*   OpenAI API credentials.
*   Jira API credentials.

## 🔗 Nodes Used

Github Trigger, Jira Software, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
