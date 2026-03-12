# 🤝 AI-generated account briefs with MadKudu, OpenAI & Salesforce for Outreach

> ⚡ **312 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Generate and send MadKudu Account Brief into Outreach


This workflow generates an account brief tailored to your company using MadKudu MCP and OpenAI and syncs it to a custom field in Outreach. 
Its for Sales who want to give reps rich account context right inside Outreach, and draft Outreach email with Outreach Revenue Agent based on MadKudu account brief.

## ✨ Who it's for
- RevOps or GTM teams using MadKudu + Salesforce + Outreach

Sales teams needing dynamic, AI-generated context for target accounts

## 🔧 How it works
#### 1. Select Accounts:
- Use a Salesforce node to define which accounts to brief.
- Filter logic can be updated to match ICP or scoring rules (e.g., MadKudu Fit + LTB).

#### 2. Generate Brief with MadKudu MCP & AI
- MadKudu MCP provides the account brief instructions, research online for company recent news and provides structured account context from your integrations connected to MadKudu + external signals (firmographics, past opportunities, active contacts, job openings...)

- The AI agent (OpenAI model) turns this into a readable account brief.

#### 3. Send to Outreach
- Match account in Outreach via domain.
- Update a custom field (e.g., custom49) with the brief text.

## 📋 How to set up
1. Connect your Salesforce account
Used to pull accounts that need a brief.

2. Set your OpenAI credentials
Required for the AI Agent to generate the brief.

3. Create a n8n **[Variable](https://docs.n8n.io/code/variables/)** to store your **[MadKudu API key](https://developers.madkudu.com/getting-started/quickstart)** named **madkudu_api_key** used for the MadKudu MCP tool
The AI Agent pulls the account brief instructions and all the context necessary to generate the briefs. 

3. Create an Oauth2 API credential to connect your Outreach account
Used to sync to brief to Outreach.

4. Customize the Salesforce filter
In the “Get accounts” node, define which accounts should get a brief (e.g. Fit &gt; 90).

5. Map your Outreach custom field
Update the JSON Body request with your actual custom field ID (e.g. custom49).

#### 🔑 How to connect Outreach
1. In n8n, add a new Oauth2 API credential and copy the callback URL 
2. Now go to **[Outreach developer portal](https://developers.outreach.io/apps/)**
2. Click “Add” to create a new app 
3. In **Feature selection** add **Outreach API (OAuth)** 
4. In **API Access (Oauth)** set the redirect URI to the n8n callback 
5. Select the following scopes  accounts.read, accounts.write 
6. Save in Outreach
7. Now enter the Outreach **Application ID** into n8n **Client Id** and the Outreach **Application Secret** into n8n **Client secret**
8. Save in n8n and connect via Oauth your Outreach Account


## ✅ Requirements
- MadKudu account with access to API Key
- Salesforce Oauth
- Outreach Admin permissions to create an app 
- OpenAI API Key


## 🛠 How to customize the workflow
- **Change the targeting logic**
Edit the Salesforce filter to control which accounts are eligible.

- **Rewrite the prompt**
Tweak the prompt in the AI Agent node to adjust format, tone, or insights included in the brief.

- **Change the Outreach account field**
Update the Outreach field where the brief is sync-ed if you're using a different custom field (e.g. custom48, custom32, etc).

- **Use a different trigger**
Swap the manual trigger for a Schedule or Webhook to automate the flow end-to-end.

## 🔗 Nodes Used

HTTP Request, Salesforce, AI Agent, OpenAI Chat Model, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
