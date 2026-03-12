# ⚒️ 🥇 Token Estim8r -sub workflow to track AI model token usage and cost with JinaAI

> ⚡ **1,700 views** · ⚒️ [Engineering](../)

## Description

![ToeknsEstim8r](https://fillin8n.realsimple.dev/Evil-King-Browser-Devours-Tokens.jpg)
#### _Save Your Tokens from Evil King Browser_
&gt; **Image Generated with [ideoGener8r](https://ideogener8r.com?utm_source=n8n&utm_medium=template&utm_campaign=tokenestim8r)** 
_n8n workflow template_
---

## 🔍 Estimate token usage and AI model cost from any workflow in n8n

### 🙋‍♂️ Who is this for?
This workflow is ideal for AI engineers, automation specialists, and business analysts who use OpenAI, Anthropic, or other token-based large language models (LLMs) in their n8n workflows and want to track their usage and accuratley estimate associated costs.

Whether you're prototyping workflows or deploying in production, this tool gives you insight into how many tokens you're using and what that translates to in actual dollars.

### 😌 What problem is this workflow solving?
n8n users running AI-based workflows often struggle to track how many tokens were used per execution and how much those tokens cost. Without visibility into usage, it’s easy to lose track of API spending.

This workflow solves that problem by:
- Logging token counts and costs to Google Sheets
- Supporting prompt and completion token counts
- Providing live pricing (optional, via Jina AI API)

### ⚙️ What this workflow does
This template allows you to analyze the token usage and cost of **any** workflow in n8n. It uses an `Execute Workflow` node to call the `Token Estim8r` utility, which:
- Estimates prompt and completion tokens
- Retrieves model pricing (either statically or live via Jina API)
- Calculates the total cost
- Logs the data to a connected Google Sheet with timestamp and model info

### 🛠️ Setup Instructions
1. **Create Google Sheet**: Copy and paste the CSV template below into a `.csv` file and upload to Google Sheets:

    ```
    timestamp, Total Tokens, Prompt Tokens, Completion Tokens, Models Used, Tools Used, Total Cost, Json Array
    ```

2. **Set up pricing (optional)**: In the `Get AI Pricing` node, add your Jina API Auth Header if you want live pricing.

3. **Select the correct Google Sheet**: Ensure your workflow is pointing to the imported sheet.

4. **Attach to your target workflow**: Add an `Execute Workflow` node to the end of your target workflow.

5. **Point to this Token Estim8r**: Choose this template as the executed workflow and send `{{ $execution.id }}` as the input.

6. **Run and view results**: Trigger the target workflow and see your token usage and cost data populate in the sheet.

---

### 🔧 How to customize this workflow to your needs
- **Change the logging destination**: Instead of Google Sheets, connect to Airtable, Notion, or a database.
- **Support multiple models**: Extend the price-mapping logic to cover your own model providers.
- **Add Slack alerts**: Send a notification if a workflow exceeds a token or cost threshold.
- **Aggregate costs**: Create a weekly summary workflow that totals cost by workflow or model.

---

&gt; This utility workflow works across all n8n deployment types and uses only built-in nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
