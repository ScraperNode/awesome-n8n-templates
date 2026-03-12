# 🎬 Transform Readwise highlights into weekly content ideas with Gemini AI

> ⚡ **211 views** · 🎬 [Content Creation & Video](../)

## Description

## **Turn Your Reading Habit into a Content Creation Engine**

This workflow is built for one core purpose: to maximize the return on your reading time. It turns your passive consumption of articles and highlights into an active system for generating original content and rediscovering valuable ideas you may have forgotten.

### **Why This Workflow is Valuable**

*   **End Writer's Block Before It Starts:** This workflow is your personal content strategist. Instead of staring at a blank page, you'll start your week with a list of AI-generated content ideas—from LinkedIn posts and blog articles to strategic insights—all based on the topics you're already deeply engaged with. It finds the hidden connections between articles and suggests novel angles for your next piece.

*   **Rescue Your Insights from the Digital Abyss:** Readwise is fantastic for capturing highlights, but the best ones can get lost over time. This workflow acts as your personal curator, automatically excavating the most impactful quotes and notes from your recent reading. It doesn't just show them to you; it contextualizes them within the week's key themes, giving them new life and relevance.

*   **Create an Intellectual Flywheel:** By systematically analyzing your reading, generating content ideas, and saving those insights back into your "second brain," you create a powerful feedback loop. Your reading informs your content, and the process of creating content deepens your understanding, making every reading session more valuable than the last.

### **How it works**

This workflow automates the process of generating a "Weekly Reading Insights" summary based on your activity in Readwise.

- **Trigger:** It can be run manually or on a weekly schedule
- **Fetch Data:** It fetches all articles and highlights you've updated in the last 7 days from your Readwise account.
- **Filter & Match:** It filters for articles that you've read more than 10% of and then finds all the corresponding highlights for those articles.
- **Generate Insights:** It constructs a detailed prompt with your reading data and sends it to an AI model (via OpenRouter) to create a structured analysis of your reading patterns, key themes, and content ideas.
- **Save to Readwise:** Finally, it takes the AI-generated markdown, converts it to HTML, and saves it back to your Readwise account as a new article titled "Weekly Reading Insights".

### **Set up steps**

*   **Estimated Set Up Time:** 5-10 minutes.
1.  **Readwise Credentials:** Authenticate the two `HTTP Request` nodes and the two `Fetch` nodes with your Readwise API token [Get from Reader API](https://readwise.io/reader_api). Also check [how to set up Header Auth](https://docs.n8n.io/integrations/builtin/credentials/httprequest/#using-header-auth)
2.  **AI Model Credentials:** Add your [OpenRouter API key](https://openrouter.ai/docs/api-reference/authentication) to the `OpenRouter Chat Model` node. You can swap this for any other AI model if you prefer.
3.  **Customize the Prompt:** Open the `Prepare Prompt` Code node to adjust the persona, questions, and desired output format. This is where you can tailor the AI's analysis to your specific needs.
4.  **Adjust Schedule:** Modify the `Monday - 09:00` Schedule Trigger to run on your preferred day and time.

## 🔗 Nodes Used

HTTP Request, Markdown, Schedule Trigger, Filter, Basic LLM Chain, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
