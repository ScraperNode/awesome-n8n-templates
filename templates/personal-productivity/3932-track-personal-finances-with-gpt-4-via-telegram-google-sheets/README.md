# ⚡ Track personal finances with GPT-4 via Telegram & Google Sheets

> ⚡ **1,893 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

Track your expenses, gain insights, and manage money smarter – right from Telegram.
___
### Who is this For
This workflow is perfect for individuals and freelancers who want financial control without app overload. Launch it in your n8n environment and start tracking your money smarter today!

### Features
- Natural Language Expense Input: Log expenses by simply messaging “Spent $50 on groceries”.
- Income Logging: Add income sources such as salary, freelance, or passive income.
- Voice Support: Speak to the bot—Whisper API converts voice to text.
- Google Sheets Integration: All data is synced to a spreadsheet in real time.

### How It Works
1. **User Input (Text or Voice):**
 Send messages on your telegram bot like:
	- “Spent $25 on transportation”
	- “Received $300 from freelancing”
	- Or just voice record a message
2. **AI Parsing & Categorization:**
	- GPT-4 processes and categorizes the entry using pre-trained financial logic.
3. **Data Logging:**
 	- n8n stores data in: Google Sheets (via Google Sheets API)
4. **Video Demo:**
	- [See this youtube Video](https://youtu.be/w6vwTTHeddQ) to explore "how it works".

### Set Up Steps
1. **Import the Workflow**
	- Create a new workflow
	- Import the JSON file by clicking "three dot" (upper right corner) &gt; "import from file..." (I will provide the JSON file after buying).
2. **Set Up Telegram Bot** 
   	- Create a bot via @BotFather
   	- Create a telegram credential to connect telegram with n8n.
   	- Grab the token from @BotFather and paste into the Telegram credential.
   	- Connect that credential with telegram nodes.
3. **Enable Google Sheets Integration**
	- Create a google sheet credential to connect google sheet with n8n.
	- Connect that credential with Google sheets tools.
	- Create a google sheet including these columns: "chat_id", "date_and_time", "income (dollar)", "income source", "cost (dollar)", "cost category"		
	- Provide access that sheet to n8n.															
4. **Configure OpenAI (GPT & Whisper)**
	- Create an OpenAi credential to connect openai with n8n.
	- Add your OpenAI API Key in the credentials tab
	- Connect that credential with openai nodes.
5. **Pre-requisites**
	- Necessary credentials:
		1. Telegram Account
		2. OpenAi Account
		2. Google Sheets Account
	- N8N version 1.92.2 or upper

### Customization Guidance
1. You can customize the ai agent prompt based on your needs.
2. And also you can customize the sheet's columns based on your needs.
3. And you can add additional features like:
	- Monthly budgeting alert
	- Expense report generation
	- Smart Recommendations for cost cutting tips
___
### Ready to Automate Your Finances?
Buy the workflow for only 30$, You will get full setup guide after buying.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
