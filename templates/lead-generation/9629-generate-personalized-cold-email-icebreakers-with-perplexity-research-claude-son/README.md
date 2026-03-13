# 🎣 Generate personalized cold email icebreakers with Perplexity Research & Claude Sonnet

> ⚡ **235 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **AI-Powered Lead Generation: Personalized Icebreakers with Perplexity Research & Claude Sonnet 4.5**

This production-ready workflow transforms your lead generation by automatically researching prospects and generating genuinely personalized icebreakers that feel human-written. What normally takes 10-15 minutes per lead now happens in under a minute, at scale.

**🎯 What It Does:**

Pulls lead data from Google Sheets, conducts real-time AI research on each prospect, and generates custom cold email opening lines that reference actual company achievements and recent news. The workflow processes leads in batches, updates your spreadsheet automatically, and maintains context throughout the entire process.

- **Automated Research**: Perplexity Sonar searches the web for current information about each prospect and their company
- **Company Name Standardization**: GPT-4o-mini cleans up corporate names to sound natural ("Sharp Guys Web Design Agency" becomes "Sharp Guys")
- **Personalized Icebreakers**: Claude Sonnet 4 crafts opening lines that reference real achievements in a casual, bar-conversation tone
- **Smart Processing**: Filters already-processed leads, handles batches of 25, and safely updates your spreadsheet
- **Cost Effective**: Approximately $0.02 per lead with typical 2-3x response rate improvement

**💡 Use Cases & Results:![20251014 15.02.16.jpg](fileId:2936)![20251014 15.02.39.jpg](fileId:2939)![20251014 15.02.32.jpg](fileId:2937)![20251014 15.02.36.jpg](fileId:2940)![20251014 15.02.29.jpg](fileId:2938)**

**Perfect for:**
B2B sales teams, marketing agencies, business development, recruiters, freelancers, startup founders doing cold outreach.

**Expected results:**
- 2-3x response rate improvement
- ~$0.02 per lead cost
- 10-15 min → 30-60 sec per lead

**Why it works:**
Icebreakers reference real, current information vs generic templates. Prospects notice the personalization.

**🔧 How It Works:**

The workflow follows a six-step process. First, it retrieves lead data from your Google Sheets and filters out any leads that already have icebreakers to avoid reprocessing. Then it processes leads in manageable batches of 25 to respect API rate limits while maintaining efficiency.

For each lead, the system standardizes the company name by removing corporate suffixes like "Agency," "Inc.," or "Group" to make icebreakers sound more natural. Next, Perplexity Sonar conducts real-time web research on the prospect, finding recent company news, achievements, funding rounds, and relevant background information.

Claude Sonnet 4 then analyzes this research and generates a personalized icebreaker that sounds genuinely human-written. The prompt instructs Claude to use a casual, spartan tone and to look for plausible connections without stretching the truth. Each icebreaker follows a proven format: "Hey [FirstName], [specific observation about their company], I wanted to share something that could be relevant for [Company]."

Finally, the workflow updates your spreadsheet with both the cleaned company name and the personalized icebreaker, then loops back to process the next batch until all unprocessed leads are complete.

**✨ Key Features:**

- **Real-time research**: Perplexity Sonar accesses current web data for the most relevant, up-to-date information
- **Natural language**: Icebreakers reference real achievements in conversational tone, not corporate speak
- **Batch processing**: Handles 25 leads at a time with automatic looping for any volume
- **Smart filtering**: Skips leads that already have icebreakers, enabling easy reruns with new data
- **JSON output**: Structured format ready for integration with cold email tools
- **Resume capability**: Can stop and restart anytime without losing progress
- **Quality assurance**: AI models are specifically chosen for their strengths (speed, research, writing)

**📋 Requirements:**

- Google Sheets with lead data (columns: id, first_name, last_name, title, organization_name, Icebreaker, company_name_cleanup)
- OpenAI API key (for GPT-4o-mini company name cleanup)
- OpenRouter account with credits (for Perplexity Sonar and Claude Sonnet 4 access)
- n8n Cloud or self-hosted instance

**⚡ Quick Setup:**

Prepare your Google Sheets spreadsheet with the required columns and fill in your lead data. Connect your Google Sheets, OpenAI, and OpenRouter credentials to n8n. Configure the "Get Leads" and "Update Icebreaker" nodes to point to your spreadsheet. Test with a couple of leads first to ensure everything works, then run the full workflow.

The workflow includes comprehensive documentation via sticky notes covering data structure, AI model selection rationale, customization options, cost analysis.

**🎁 What You Get:**

Complete end-to-end automation with detailed sticky note documentation explaining each step, customizable prompts for adjusting tone and style, batch processing logic that respects API limits, error handling and retry mechanisms, cost optimization using the right AI model for each task (GPT-4o-mini for simple transformations, Perplexity for research, Claude for writing), and security best practices for handling lead data responsibly.

**💰 Expected Results:**

At approximately $0.02 per lead, this workflow typically delivers response rate improvements of 2-3x compared to generic templates. For a hundred leads, you invest about $2 and save over fifteen hours of manual research and writing time. The icebreakers sound genuinely human because they reference real, current information rather than generic templates. Many users report that prospects often respond positively to the personalized opening, commenting that it doesn't feel like a mass email.

**🔄 Integration Ready:**

The output format is designed to integrate seamlessly with popular cold email tools like Instantly, Lemlist, Smartlead, and others. Simply export your updated spreadsheet and import the icebreakers into your outreach sequences. The casual tone and specific details make these icebreakers perfect for relationship-building campaigns where authenticity matters.

**Icebreaker Examples:**

https://docs.google.com/spreadsheets/d/1_oxNW4l54fVjxq6Y62xR_yqqQK6O3gCsmqmBhO2ei1Y/edit?usp=sharing

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Structured Output Parser, OpenAI, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
