# 🎣 Find Instagram collaboration leads using Apify scraping and GPT-4o evaluation

> ⚡ **1,309 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This no-code n8n workflow finds recent Instagram posts by hashtag, scrapes profile data, and uses an AI agent to evaluate whether each account is a good collaboration lead. The workflow filters based on the number of followers and the content of their bio, and outputs structured reasoning for outreach decisions.

Perfect for creators, marketers, or business developers looking to automate influencer or community partnership prospecting—especially in niche ecosystems like `n8n`.

---

### ✅ Key Features

- **🔍 Hashtag Discovery**: Finds recent Instagram posts from a specified hashtag (e.g., `#n8n`)
- **👤 Account Scraping**: Retrieves profile details such as follower count and biography
- **🧠 AI Evaluation**: Uses OpenAI and LangChain to determine if the profile is a good fit for outreach
- **📦 Structured Output**: Returns a JSON object with "Yes/No" lead status and reasoning
- **🛠️ Manual Execution**: Run on demand using the manual trigger

---

### 🧰 What You'll Need

| Tool / API              | Purpose                                  | Setup Steps |
|-------------------------|------------------------------------------|-------------|
| **Apify Account**       | To access Instagram scraping actors      | [Create account](https://my.apify.com/) → Generate API Token → Use in `httpQueryAuth` credential in n8n |
| **OpenAI API Key**      | To power the AI decision-making agent    | [Sign up at OpenAI](https://platform.openai.com/signup) → Create API key → Paste into `OpenAI` credential in n8n |
| **LangChain Plugin for n8n** | AI Orchestration with System Message | Install LangChain nodes from Community Nodes (already installed in this workflow) |

---

### 🔧 Step-by-Step Setup

#### 1️⃣ Manual Trigger  
- **Node**: `When clicking ‘Execute workflow’`  
- **Use**: Allows you to run the workflow manually while testing.

#### 2️⃣ Define Hashtag  
- **Node**: `Create Search Term`  
- **Value**: Sets `"n8n"` as the default Instagram hashtag to scan.  
- You can edit this to any other hashtag you'd like.

#### 3️⃣ Find Recent Posts  
- **Node**: `Find Recent Posts`  
- **API**: [Apify Instagram Hashtag Scraper](https://console.apify.com/actors/apify/instagram-hashtag-scraper)  
- **Auth Setup**:  
  - Go to your [Apify Console](https://console.apify.com/)  
  - Click “Create new token”  
  - In n8n, create a new **HTTP Query Auth** credential  
    - Set token in the `token` query param (e.g., `?token=yourTokenHere`)  
  - Choose the credential in this node

#### 4️⃣ Scrape Each Profile  
- **Node**: `Scrape Accounts`  
- **API**: [Apify Instagram Profile Scraper](https://console.apify.com/actors/apify/instagram-profile-scraper)  
- **Body**: JSON with `usernames` from the hashtag search  
- **Note**: Uses the same `httpQueryAuth` credential as the previous node.

#### 5️⃣ Extract Fields  
- **Node**: `Set bio and follower count`  
- **What it does**: Extracts `biography` and `followersCount` from the profile JSON and stores them in clean variables for AI input.

#### 6️⃣ AI Lead Scoring  
- **Node**: `AI Agent`  
- **Purpose**: Uses GPT-4o-mini to analyze the bio and follower count  
- **Prompt Details**:


#### 7️⃣ AI Model  
- **Node**: `OpenAI Chat Model`  
- **Model**: `gpt-4o-mini`  
- **Credential**: Connect your OpenAI account via API Key.  
- Go to [OpenAI API Keys](https://platform.openai.com/account/api-keys)  
- Copy your key and create a new **OpenAI API** credential in n8n.

#### 8️⃣ Output Parser  
- **Node**: `Structured Output Parser`  
- **What it does**: Parses the response from the AI into structured JSON for further use (e.g., storing leads, sending to Airtable, etc.)

---

### 🧪 Sample Output
```json
{
"lead status": "Yes",
"Reasoning": "The user has 3.5k followers and their bio shows they build automations with n8n."
}

---

## 📬 Need More Help?

If you'd like assistance setting this up, customizing it to your niche, or expanding it to score and store leads automatically — I can help!

**👤 Robert Breen**  
Automation Consultant | AI Workflow Designer | n8n Expert  
📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🌐 [ynteractive.com](https://ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
