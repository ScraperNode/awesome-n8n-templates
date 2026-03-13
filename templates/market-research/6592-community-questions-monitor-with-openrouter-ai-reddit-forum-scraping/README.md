# 📊 Community questions monitor with OpenRouter AI, Reddit & forum scraping

> ⚡ **752 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **What problem does this solve?**

Earlier this year, as I got more involved with n8n, I committed to helping users on our community forums and the n8n subreddit. The volume of questions was growing, and I found it was a real challenge to keep up and make sure no one was left without an answer. I needed a way to quickly see what people were struggling with, without spending hours just searching for new posts.

So, I built this workflow. It acts as my personal AI research assistant.

Twice a day, it automatically scans Reddit and the n8n forums for me. It finds relevant questions, summarizes the key points using AI, and sends me a digest with direct links to each post. This allows me to jump straight into the conversations that matter and provide support effectively.

While I built this for n8n support, you can adapt it to monitor any community, track product feedback, or stay on top of any topic you care about. It transforms noisy forums into an actionable intelligence report delivered right to your inbox.

## **How it works**

Here’s the technical breakdown of my two-part system:

1.  **AI Reddit Digest (Daily at 9AM / 5 PM):**
    *   Fetches the latest 50 posts from a specified subreddit.
    *   Uses an AI **Text Classifier** to categorize each post (e.g., `QUESTION`, `JOB_POST`).
    *   Isolates the posts classified as questions and uses an AI model to generate a concise summary for each.
    *   Formats the original post link and its new summary into an email-friendly format and sends the digest.

2.  **AI n8n Forum Digest (Daily at 9AM / 5 PM):**
    *   Scrapes the n8n community forum to get a list of the latest post links.
    *   Processes each link individually, fetching the full post content.
    *   Filters these posts to keep only those containing a specific keyword (e.g., "2025").
    *   Summarizes the filtered posts using an AI model.
    *   Combines the original post link with its AI summary and sends it in a separate email report.

## **Set up steps**

This workflow is quite powerful and requires a few configurations. Setup should take about **15 minutes**.

1.  **Add Credentials:** First, add your credentials for your AI provider (like OpenRouter) and your email service (like Gmail or SMTP) in the **Credentials** section of your n8n instance.
2.  **Configure Reddit Digest:**
    *   In the **Get latest 50 reddit posts** node, enter the name of the `Subreddit` you want to follow.
    *   Fine-tune the AI's behavior by editing the prompt in the **Summarize Reddit Questions** node.
    *   *(Optional)* Add more examples to the **Text Classifier** node to improve its accuracy.
3.  **Configure n8n Forum Digest:**
    *   In the **Filter 2025 posts** node, change the keyword to track topics you're interested in.
    *   Edit the prompt in the **Summarize n8n Forum Posts** node to guide the AI's summary style.
4.  **Activate Workflow:** Once configured, just set the workflow to **Active**. It will run automatically on schedule. You can also trigger it manually with the **When clicking 'Test workflow'** node.

## 🔗 Nodes Used

Send Email, HTTP Request, Reddit, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
