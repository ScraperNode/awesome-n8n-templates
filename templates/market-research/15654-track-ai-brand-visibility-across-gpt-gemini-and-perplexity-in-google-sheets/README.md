# 📊 Track AI brand visibility across GPT, Gemini and Perplexity in Google Sheets

> ⚡ **79 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This template measures brand visibility across multiple AI assistants. It sends the same prompts to GPT, Gemini, and Perplexity, evaluates whether a target brand is mentioned, extracts visibility details, and saves structured results to Google Sheets for comparison.
🚀 How It Works
1.	Load Active Prompts from Google Sheets
The workflow reads prompts from the Prompts sheet.
Each row contains:
•	Prompt
•	Target Tool
•	Status
Only rows where Status = Active are processed.
Example:
Prompt	Target Tool	Status
Best project management tools for startups	Notion	Active
2.	Load Brand Visibility Criteria
The workflow loads evaluation rules from the Criteria sheet.
Each criterion contains:
•	criteria
•	instruction
•	example
All criteria are combined into a single evaluation instruction shared across all evaluator agents.
Example criterion:
criteria	instruction	example
Brand Mention	Check whether target brand appears in AI answer	"Notion was recommended..."
3.	Send Prompts to Multiple LLMs
Each active prompt is sent to:
•	GPT
•	Gemini
•	Perplexity
All models receive the exact same input prompt.
Example:
Best project management tools for startups
This allows direct comparison between providers.
4.	Merge Responses with Prompt Metadata
Each AI response is merged with:
•	original prompt
•	target brand
•	model source
This keeps all evaluation data connected to the originating prompt.
5.	Evaluate Brand Visibility
Evaluator agents analyze each AI response using the shared criteria.
They extract:
•	whether the target brand was mentioned
•	all mentioned brands
•	mention order/position
•	number of brands mentioned
•	short visibility description
Example:
LLM	Mention	Position
GPT	Yes	2
Gemini	No	Empty
Perplexity	Yes	1
6.	Save Structured Results to Google Sheets
The workflow writes one row per evaluated response into the Results sheet.
Saved fields include:
•	Date
•	Prompt
•	Mention
•	Brands name
•	Number
•	Position
•	Description
•	Model
•	LLM
🛠️ Setup Instructions
Import Template
Import the workflow into n8n.
Prepare Google Sheets
Create a spreadsheet with three sheets:
•	Prompts
•	Criteria
•	Results
You can find a public example Google Sheet link inside the “GOOGLE SHEETS STRUCTURE” sticky note in the workflow.
Prompts sheet example columns:
•	Prompt
•	Target Tool
•	Status
Criteria sheet example columns:
•	criteria
•	instruction
•	example
Results sheet example columns:
•	Date
•	Prompt
•	mention
•	brands name
•	number
•	position
•	description
•	Model
•	LLM
Configure Credentials
Connect credentials for:
•	Google Sheets
•	OpenAI
•	Google Gemini
•	Perplexity API / HTTP Header Auth
Configure Google Sheets Nodes
Open:
•	Get prompts
•	Get criteria
•	Write GPT Results
•	Write Gemini Results
•	Write Perplexity Results
Select your spreadsheet and the correct sheets.
Configure Perplexity
Open the Perplexity Request node.
Set your HTTP Header Auth credential with your Perplexity API key.

Run a Test
Add a few active prompts to the Prompts sheet.
Click Execute Workflow.
Check the Results sheet after execution.
📌 Limitations
•	Results depend on each LLM’s generated answer.
•	Different LLMs may mention different brands for the same prompt.
•	Evaluator output quality depends on the clarity of your criteria.
•	Perplexity requires a valid API key and HTTP Header Auth setup.
•	The workflow does not verify whether the mentioned brands are factually accurate; it only evaluates what appears in the AI answer.
✅ Example Use Cases
•	Track whether your brand appears in AI recommendations.
•	Compare visibility across GPT, Gemini, and Perplexity.
•	Monitor brand positioning over time.
•	Analyze competitor mentions in AI-generated answers.
•	Build an AI search visibility dashboard in Google Sheets.
⏱️ Estimated Setup Time
~15–20 minutes
Import workflow → connect credentials → configure Google Sheets → add prompts → run test.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
