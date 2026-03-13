# 🔬 Content summarizer via Webhook (ApyHub)

> ⚡ **837 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template empowers you to instantly summarize long pieces of text by sending a simple webhook request. By integrating with ApyHub's summarization API, you can distil complex articles, reports, or messages into concise summaries, significantly boosting efficiency across various domains.

---

# 🔧 How it works
- **Receive Content Webhook:** This node acts as the entry point, listening for incoming POST 
requests. It expects a JSON body containing:
  - ***content***: The long text you want to summarize.
  - ***summary_length (optional)***: The desired length of the summary (e.g., 'short', 'medium', 'long'). Defaults to 'medium'. And a header containing your apy-token for the ApyHub API.
- **Start Summarization Job:** This node sends a POST request to ApyHub's summarization endpoint (api.apyhub.com/sharpapi/api/v1/content/summarize). It passes the content and summary_length from the webhook body, along with your apy-token from the headers. ApyHub processes the text asynchronously, and this node immediately returns a job_id.
- **Get Summarization Result:** Since ApyHub's summarization is an asynchronous process, this node is crucial. It polls ApyHub's job status endpoint (api.apyhub.com/sharpapi/api/v1/content/summarize/job/status/{{job_id}}) using the job_id obtained from the previous step. It continues to check the status until the summarization is finished, at which point it retrieves the final summarized text.
- **Respond with Summarized Content:** This node sends the final, distilled summarized text back to the service that initiated the webhook.

---

# 👤 Who is it for?
### This workflow is extremely useful for:

- **Content Creators & Marketers:** Quickly summarize articles for social media snippets, email newsletters, or blog post intros.
- **Researchers & Students:** Efficiently get the gist of academic papers, reports, or long documents without reading every word.
- **Customer Support & Sales Teams:** Summarize customer inquiries, long email chains, or call transcripts to quickly understand key issues or discussion points.
- **News Aggregators & Media Monitoring:** Automatically generate summaries of news articles from various sources for quick consumption.
- **Business Professionals:** Condense lengthy reports, meeting minutes, or project updates into digestible summaries for busy stakeholders.
- **Legal & Compliance:** Summarize legal documents or regulatory texts to highlight critical clauses or changes.
- **Anyone Dealing with Information Overload:** Use it to save time and extract key information from overwhelming amounts of text.



---

# 📑Data Structure
When you trigger the webhook, send a **POST ** request with a **JSON body** and an **apy-token** in the **headers**:

```
{
  "content": "Your very long text goes here. This could be an article, a report, a transcript, or any other textual content you want to summarize. The longer the text, the more valuable summarization becomes!",
  "summary_length": "medium" // Optional: "short", "medium", or "long"
}
```

## Headers:
```
apy-token: YOUR_APYHUB_API_KEY
```
*Note: You'll need to obtain an API Key from ApyHub to use their API services. They typically offer a free tier for testing.*

The workflow will return a JSON response similar to this (the summary content will vary based on input):

```
{
  "summary": "Max Verstappen believes the Las Vegas Grand Prix is '99% show and 1% sporting event', not looking forward to the razzmatazz. Other drivers, like Fernando Alonso, were more equivocal about the hype, acknowledging the investment and spectacle. Lewis Hamilton praised the city's energy but emphasized it's 'a business, ultimately', believing there will still be good racing.",
  "status": "finished",
  "result_file_id": "..." // ApyHub might provide a file ID for larger results
}
```

---

# ⚙️ Setup Instructions
- **Get an ApyHub API Key:**
  - Go to https://apyhub.com/ and sign up to get your API key.
- **Import Workflow:** In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.
- **Configure Webhook Path:**
  - Double-click the Receive Content Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /summarize-content).
- **Activate Workflow:** Save and activate the workflow.

---

# 📝 Tips
This content summarizer is a powerful component. Here's how to supercharge it and make it an indispensable part of your automation arsenal:

- **Integrate with Document/File Storage:**
- ***Google Drive/Dropbox/OneDrive:*** Automatically summarize documents uploaded to these services. Add a Watch New Files trigger (if available for your service) or a Cron node to regularly check for new files. Then, read the file content, pass it to this summarizer, and save the summary back to a designated folder or as a comment on the original file.
- ***CRM/CMS Systems:*** Pull long notes, customer interactions, or article drafts from your CRM/CMS, summarize them, and update the records with the concise version.
- **Email Processing & Triage:**
  - ***Email Trigger:*** Use an Email node to trigger the workflow when new emails arrive. Extract the email body, summarize it, and then:
    - Send a shortened summary as a notification to your Slack or Telegram.
    - Add a summary to a task management tool (e.g., Trello, Asana) for quicker triaging.
    - Create a summary for an email digest.
- **Slack/Discord Bot Integration:**
  - Create a Slack/Discord command (using a custom webhook or a dedicated Slack/Discord node) where users can paste long text. The bot then sends the summarized version back to the channel.
- **Dynamic Summary Length & Options:**
  - Allow the user to specify summary_length (short, medium, long) in the webhook body, as already implemented.
  - Explore ApyHub's documentation for more parameters (if any) and dynamically pass them.
- **Error Handling & User Feedback:**
  - Add an IF node after Get Summarization Result to check for status: 'failed' or error messages. If an error occurs, send a helpful message back to the webhook caller or an internal alert.
  - For very long texts that might exceed API limits, add a Function node to truncate the input content if it's too long, and notify the user.
- **Multi-language Support (if ApyHub offers it):**
  - If ApyHub supports summarization in multiple languages, extend the webhook to accept a language parameter and pass it to the API.
- **Web Scraping & Article Summaries:**
  - Combine this with a HTTP Request node to scrape content from a web page (e.g., a news article). Then, pass the extracted article text to this summarizer to get quick insights.
- **Data Storage & Archiving:**
  - Store the original content alongside its summary in a database (e.g., PostgreSQL, MongoDB) or a simple spreadsheet (Google Sheets, Airtable). This creates a searchable, summarized archive of your content.
- **Automated Report Generation:**
  - If you receive daily/weekly reports, use this workflow to summarize key sections, then compile these summaries into a concise digest or dashboard using a Merge node and send it out automatically.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
