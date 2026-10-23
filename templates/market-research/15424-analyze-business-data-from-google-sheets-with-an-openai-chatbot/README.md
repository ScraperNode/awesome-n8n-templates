# 📊 Analyze business data from Google Sheets with an OpenAI chatbot

> ⚡ **165 views** · 📊 [Market Research & Insights](../)

## Description

# Business Data Analyst Chatbot

## Overview

This workflow is a chat-based **Business Data Analyst Chatbot** built in **n8n**.

It allows users to ask business questions in plain English and receive clean, stakeholder-friendly insights based on data stored in one or more connected **Google Sheets**.

The workflow uses an **AI Agent** connected to:

- An LLM for reasoning and response generation
- Memory for conversational context
- Google Sheets tools for retrieving spreadsheet data
- Edit Fields for formatting the final chat response
- Chat Response node for sending the answer back to the user

This workflow is useful for experimenting with conversational business intelligence, spreadsheet analysis, AI agents, and tool-based automation.

Example questions users can ask:

- How are PayPal orders distributed between men and women?
- Which product category has the highest sales?
- Which marketing channel has the highest ROAS?
- Which region has the highest return rate?
- What are the top-performing campaigns?
- Are mobile campaigns performing better than desktop campaigns?

---

## Good to Know

This workflow is designed as a learning and demonstration project.

It is intentionally built to be flexible. The AI Agent is not hardcoded to one specific question or one specific dataset. Instead, the system prompt guides the agent to understand the user’s business question, decide what data is needed, select the most relevant Google Sheets tool, retrieve the data, and then perform the analysis.

A few important points:

- The AI Agent needs three key parts: an LLM, memory, and tools.
- The LLM helps the agent reason and generate responses.
- Memory helps maintain conversational context.
- Tools allow the agent to interact with external data sources such as Google Sheets.
- Each Google Sheets tool should have a clear description so the agent knows when to use it.
- The system prompt should stay general and dataset-agnostic.
- Dataset-specific details should be placed in each Google Sheets tool description.
- The final chat response should return only the clean response field, not the full JSON object.
- Before publishing or sharing the workflow, replace private values such as credential IDs, Google Sheet IDs, webhook IDs, and instance IDs with placeholders.

This workflow does not include real API keys or credentials. You must configure your own credentials inside your private n8n environment.

---

## How It Works

The workflow follows this structure:

```text
When chat message received
        ↓
AI Agent
        ↓
Google Sheets Tool(s)
        ↓
Edit Fields
        ↓
Chat Response
```

### 1. Chat Trigger

The workflow starts when the user sends a message through the n8n chat interface.

The Chat Trigger should use:

```text
Response Mode: Using Response Nodes
```

This allows a later Chat Response node to send the final answer back to the user.

---

### 2. AI Agent

The AI Agent receives the user’s question and acts as the business analyst.

The agent:

1. Understands the business question.
2. Determines what type of data is needed.
3. Selects the most relevant Google Sheets tool.
4. Retrieves the spreadsheet data.
5. Identifies the relevant columns, metrics, filters, and groupings.
6. Performs calculations such as counts, totals, averages, percentages, rankings, comparisons, trends, and summaries.
7. Returns a clear business-friendly response.

The AI Agent should be connected to:

- OpenAI Chat Model, or another compatible chat model
- Simple Memory, optional but recommended
- One or more Google Sheets tools

---

### 3. Google Sheets Tools

Each Google Sheets node is connected to the AI Agent as a tool.

Each tool represents one dataset. For example:

- E-commerce orders
- Marketing campaign performance
- Customer support tickets
- Sales pipeline
- Inventory data

The AI Agent chooses the correct tool based on the user’s question and the tool descriptions.

Example tool description for an e-commerce dataset:

```text
Use this tool to retrieve order-level e-commerce sales data, including customer, gender, payment method, product category, quantity, price, region, order status, and rating.
```

Example tool description for a marketing dataset:

```text
Use this tool to retrieve marketing campaign performance data, including campaign name, channel, region, country, audience segment, device, spend, impressions, clicks, conversions, revenue, leads, and new customers.
```

Clear tool descriptions are important because they help the AI Agent decide which dataset to use.

---

### 4. Edit Fields

The AI Agent usually returns its answer inside an `output` field.

The Edit Fields node maps that output into a clean `response` field.

Recommended configuration:

```text
Field name: response
Field value: {{ $json.output.replace(/\\n/g, '\n') }}
Include Other Input Fields: OFF
```

This prevents the chat from displaying raw JSON or escaped newline characters.

---

### 5. Chat Response

The final Chat node sends the cleaned response back to the user.

Use this value in the message field:

```text
{{ $json.response }}
```

Do not return:

```text
{{ $json }}
```

Returning the full JSON object may cause the chat to show raw output such as:

```json
[
  {
    "response": "..."
  }
]
```

---

## How to Use

### 1. Import the Workflow

Download or copy the workflow template and import it into your n8n instance.

In n8n:

1. Go to **Workflows**.
2. Select **Import from File**.
3. Upload the workflow JSON file.
4. Open the imported workflow.

---

### 2. Configure the Chat Trigger

Open the **When chat message received** node and set:

```text
Response Mode: Using Response Nodes
```

---

### 3. Configure the AI Model

Open the **OpenAI Chat Model** node, or your preferred chat model node.

Create or select your credential.

You will need to provide your own API key inside n8n’s credential manager.

Do not place your API key directly inside the workflow JSON.

---

### 4. Configure Google Sheets

Open each Google Sheets Tool node and select your own Google Sheet document and sheet tab.

Recommended setup:

```text
Resource: Sheet Within Document
Operation: Get Row(s) / Read Rows / Get Many Rows
Document: Your Google Sheet
Sheet: Your sheet tab
Use first row as headers: Enabled, if available
Return all rows: Enabled, if available
```

The exact options may vary depending on your n8n version.

---

### 5. Update Tool Descriptions

For each Google Sheets tool, update the description to clearly explain what data the sheet contains.

Example:

```text
Use this tool to retrieve marketing campaign performance data, including campaign name, channel, spend, impressions, clicks, conversions, revenue, region, and audience segment.
```

The better the tool description, the better the AI Agent can choose the correct dataset.

---

### 6. Test the Chat

Try asking questions such as:

```text
Which product category has the highest sales?
```

```text
How are PayPal orders distributed by gender?
```

```text
Which marketing channel has the highest ROAS?
```

```text
Which campaign generated the most revenue?
```

```text
Are mobile campaigns performing better than desktop campaigns?
```

---

## Requirements

To use this workflow, you need:

- An n8n instance
- An OpenAI credential, or another compatible chat model credential
- Google Sheets OAuth2 credential configured in n8n
- One or more Google Sheets containing structured tabular data
- A first row with clear column headers
- Access permissions to the Google Sheets you want the workflow to analyze

Recommended dataset format:

- Use clear column names.
- Keep the first row as headers.
- Avoid merged cells.
- Avoid blank header columns.
- Use consistent date formats.
- Store numeric values as numbers.
- Keep each row as one record.
- Avoid mixing multiple tables in the same sheet tab.

Example datasets:

- E-commerce orders
- Marketing campaign performance
- Customer support tickets
- Sales pipeline
- Inventory reports
- Customer feedback surveys

---

## Customising This Workflow

You can customize this workflow by adding more datasets, changing the AI model, improving the prompt, or adjusting the final response format.

### Add More Google Sheets Datasets

To add another dataset:

1. Add a new Google Sheets Tool node.
2. Select the spreadsheet and sheet tab.
3. Write a clear tool description.
4. Connect the node to the AI Agent as an AI tool.

Example tool description:

```text
Use this tool to retrieve customer support ticket data, including ticket ID, date, customer segment, issue type, priority, status, resolution time, satisfaction score, and assigned team.
```

---

### Update the System Prompt

The AI Agent system prompt should stay general and flexible.

Recommended system prompt:

```text
You are a business data analyst.

You have access to one or more Google Sheets tools. Each tool may contain a different dataset.

For every user question:
1. Understand the business question and determine what type of data is needed.
2. Select the most relevant Google Sheets tool or tools based on the user’s question and the tool descriptions.
3. Retrieve the data before answering.
4. Analyze only the retrieved spreadsheet data.
5. Dynamically identify the relevant columns, metrics, filters, and groupings.
6. Perform calculations such as totals, averages, counts, percentages, rankings, comparisons, trends, correlations, and summaries where relevant.
7. If multiple datasets are needed, combine insights logically using matching columns if available.
8. If the user question is reasonably answerable from the available data, make a reasonable interpretation and proceed.
9. Only ask a clarification question when the analysis cannot be performed without more information.
10. If data is missing or insufficient, clearly explain what is missing.

Do not invent data.
Do not answer from memory.
Do not assume a fixed sheet structure.
Do not mention workflow or tool details unless the user asks.

Return a clear business-friendly answer in clean Markdown.
Use top-down communication: start with the key answer first, then supporting metrics, then insights or recommendations.
Do not return JSON.
Do not end with a follow-up question unless the user explicitly asks for one.
```

---

### Change the Response Format

You can adjust the final answer style in the prompt.

For example, you can ask the AI Agent to return:

- Executive summaries
- Tables
- Bullet-point insights
- Recommendations
- Trend analysis
- Ranking lists
- Comparison summaries

Example instruction:

```text
Return the answer with a short headline, key metric summary, supporting table, and one recommendation.
```

---

### Use a Different AI Model

You can replace the OpenAI Chat Model node with another compatible chat model node supported by n8n.

Make sure the model supports tool calling if you want the AI Agent to use Google Sheets tools dynamically.

---

### Security and Placeholder Notes

Before sharing this workflow publicly, replace private values with placeholders.

Do not publish:

- API keys
- OAuth access tokens
- OAuth refresh tokens
- Credential IDs from your private n8n instance
- Private Google Sheet IDs
- Private Google Sheet URLs
- Webhook IDs
- n8n instance IDs
- Internal company data
- Real customer data

Use placeholders such as:

```text
YOUR_OPENAI_CREDENTIAL_ID
YOUR_GOOGLE_SHEETS_CREDENTIAL_ID
YOUR_GOOGLE_SHEET_ID
YOUR_GOOGLE_SHEET_URL
YOUR_WEBHOOK_ID
YOUR_N8N_INSTANCE_ID
```

If you accidentally publish a secret, revoke or rotate it immediately. Deleting the file from GitHub may not be enough because secrets can remain in Git history.

---

## Example Output

User question:

```text
How does the distribution of orders look between men and women using PayPal?
```

Example response:

```markdown
## PayPal orders are more common among women

Women placed 19 PayPal orders, compared with 6 PayPal orders from men.

| Gender | PayPal Orders | Share of PayPal Orders |
|---|---:|---:|
| Women | 19 | 76% |
| Men | 6 | 24% |

**Key insight:** Women account for about three out of every four PayPal orders in this dataset.

**Recommendation:** Review PayPal usage by product category and region to understand where this behavior is strongest.
```

---

## Common Issues

### Chat Shows Raw JSON

Use:

```text
{{ $json.response }}
```

Do not use:

```text
{{ $json }}
```

---

### Chat Trigger Requires Response Nodes

Set the Chat Trigger response mode to:

```text
Using Response Nodes
```

---

### Final Chat Node Waits for Input

Do not use a “Send and Wait for Response” operation for the final answer.

Use a normal response operation so the workflow sends the final answer and ends.

---

### Google Sheets Tool Is Not Used

Check that:

- The Google Sheets node is connected to the AI Agent as an AI tool.
- The tool description clearly explains the dataset.
- The AI Agent prompt tells the agent to retrieve data before answering.
- The selected Google Sheet and tab are correct.
- Google Sheets credentials are configured.

---

## Disclaimer

This workflow is provided as a learning and demonstration template.

You are responsible for configuring your own n8n credentials, API keys, Google Sheets access, data permissions, and security settings.

The workflow does not include real API keys or credentials. Any placeholders in the workflow must be replaced with your own values inside your private n8n environment.

Do not use this workflow with sensitive, confidential, regulated, or personally identifiable data unless your n8n instance, AI provider, and data handling process meet your organization’s security and compliance requirements.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
