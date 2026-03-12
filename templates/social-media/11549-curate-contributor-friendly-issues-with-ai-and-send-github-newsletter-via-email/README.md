# 📱 Curate contributor-friendly issues with AI and send GitHub newsletter via email

> ⚡ **79 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Use Cases
Receive a newsletter featuring curated, contributor-friendly issues from your favorite repositories.

By regularly reviewing active issues and new releases, you'll naturally develop stronger habits around open source contribution as your brain starts recognizing these projects as important.

### How It Works
* Collects the latest issues, comments, and recent commits using the GitHub API.  
* Uses an AI model to select up to three beginner-friendly issues worth contributing to.  
* Summarizes each issue—with contribution guidance and relevance insights—using Deepwiki MCP.  
* Converts the summaries into HTML and delivers them as an email newsletter.

### Requirements
* [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)  
* [OpenRouter API Key](https://openrouter.ai/settings/keys)  
* [Google App Password](https://myaccount.google.com/apppasswords)  
* Make sure your target open-source project is indexed at `https://deepwiki.com/{owner}/{repo}` (e.g. [https://deepwiki.com/vercel/next.js](https://deepwiki.com/vercel/next.js))  

### How to Use
1. Update the **“Load repo info”** node with your target repository’s owner and name (e.g. `owner: vercel`, `repo: next.js`).  
2. Add your GitHub Personal Access Token to the credentials of the **“Get Issues from GitHub”** node.  
3. Connect your OpenRouter API key to all models linked to the **Agent** node.  
4. Add your Google App Password to the **“Send Email”** node credentials.  
5. Enter the same email address (associated with the Google App Password) in both the **“to email”** and **“from email”** fields — the newsletter will be sent to this address.  

### Customization
* Adjust the maximum number of contributor-friendly issues retrieved in the **“Get Top Fit Issues”** node.  
* Improve results by tuning the models connected to the **Agent** node.  
* Refine the criteria for “contributor-friendliness” within the **“IssueRank Agent”** node.  

### Cron Setup
* Replace the manual trigger with a **Schedule Trigger** node or another scheduling-capable node.  
* If you don't have an n8n Cloud account, use this [alternative setup](https://github.com/dst03106/n8n-issue-collector?tab=readme-ov-file#%EF%B8%8F-how-to-use): fork the repository and follow the setup instructions.  

### TroubleShooting
* If there is an issue with the AI model’s response, modify the `ai_model` setting. (If you want to use a free model, search for models containing “free” and choose one of them.)

## 🔗 Nodes Used

Send Email, GraphQL, LangChain Code, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
