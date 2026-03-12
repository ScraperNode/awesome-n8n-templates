# 💬 Generate personalized sales emails with MadKudu research & OpenAI for Outreach.io sequences

> ⚡ **495 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# AI-Powered Email Generation with MadKudu sent via Outreach.io
This workflow researches prospects using MadKudu MCP, generates personalized emails with OpenAI, and syncs them to Outreach with automatic sequence enrollment.
Its for SDRs and sales teams who want to scale personalized outreach by automating research and email generation while maintaining quality.

## ✨ Who it's for
- Sales Development Representatives (SDRs) doing cold outreach
- Business Development teams needing personalized emails at scale
- RevOps teams wanting to automate prospect research workflows
- Sales teams using Outreach for email sequences

## 🔧 How it works
**1. Input Email & Research:**
Enter prospect email via chat trigger.
Extract email and generate comprehensive account brief using MadKudu MCP account-brief-instructions.

**2. Deep Research & Email Generation:**
AI Agent performs 6 research steps using MadKudu MCP tools:
- Account details (hiring, partnerships, tech stack, sales motion, risk)
- Top users in the account (for name-dropping opportunities)
- Contact details (role, persona, engagement)
- Contact web search (personal interests, activities)
- Contact picture web search (LinkedIn profile insights)
- Company value prop research

AI generates 5 different email angles and selects the best one based on relevance.

**3. Outreach Integration:**
Checks if prospect exists in Outreach by email.
If exists: Updates custom field (custom49) with generated email.
If new: Creates new prospect with email in custom field.
Enrolls prospect in specified email sequence (ID 781) using mailbox (ID 51).
Waits 30 seconds and verifies successful enrollment.

## 📋 How to set up
**Set your OpenAI credentials**
Required for AI research and email generation.

**Create a n8n Variable to store your MadKudu API key named madkudu_api_key**
Used for the MadKudu MCP tool to access account research capabilities.

**Create a n8n Variable to store your company domain named my_company_domain**
Used for context in email generation and value prop research.

**Create an Oauth2 API credential to connect your Outreach account**
Used to create/update prospects and enroll in sequences.

**Configure Outreach settings**
Update Outreach Mailbox ID (currently set to 51) in the "Configure Outreach Settings" node.
Update Outreach Sequence ID (currently set to 781) in the same node.
Adjust custom field name if using different field than custom49.

## 🔑 How to connect Outreach
1. In n8n, add a new Oauth2 API credential and copy the callback URL
2. Now go to Outreach developer portal
Click "Add" to create a new app
3. In Feature selection add Outreach API (OAuth)
4. In API Access (Oauth) set the redirect URI to the n8n callback
5. Select the following scopes accounts.read, accounts.write, prospects.read, prospects.write, sequences.read
6. Save in Outreach
7.Now enter the Outreach Application ID into n8n Client Id and the Outreach Application Secret into n8n Client secret
8. Save in n8n and connect via Oauth your Outreach Account

## ✅ Requirements
- MadKudu account with access to API Key
- Outreach Admin permissions to create an app
- OpenAI API Key

## 🛠 How to customize the workflow
**Change the research steps**
Modify the AI Agent prompt to adjust the 6 research steps or add additional MadKudu MCP tools.

**Update Outreach configuration**
Change Mailbox ID (51) and Sequence ID (781) in the "Configure Outreach Settings" node.
Update custom field mapping if using different field than custom49.

**Modify email generation**
Adjust the prompt guidelines, tone, or angle priorities in the "AI Email Generator" node.

**Change the trigger**
Swap the chat trigger for a Schedule, Webhook, or integrate with your CRM to automate prospect input.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
