# 🎯 Daily cybersecurity news summarizer with Grok AI for Telegram

> ⚡ **847 views** · 🎯 [AI Summarization & Classification](../)

## Description

<h1>🚀 Cybersecurity News Automation Workflow</h1>
  <p>
    This <strong>n8n automation workflow</strong> fetches daily cybersecurity news, cleans it,
    summarizes with AI, and posts it automatically to a Telegram channel.
  </p>

  <h2>🔎 Workflow Steps</h2>

  <div>
    <h3>1. Triggering the Workflow</h3>
    <ul>
      <li><strong>9 AM - Schedule Trigger</strong>: Starts the workflow every day at 9 AM.</li>
    </ul>
  </div>

  <div>
    <h3>2. Fetching Cybersecurity News</h3>
    <ul>
      <li><strong>Bleeping Computer Security Bulletin</strong>: Pulls the latest news from the RSS feed.</li>
    </ul>
  </div>

  <div>
    <h3>3. Processing Articles</h3>
    <ul>
      <li><strong>HTTP Request → Filter Body → Extract Images</strong>: Retrieves the full article, cleans the HTML, and pulls image links.</li>
      <li><strong>AI Agent (OpenRouter Grok)</strong>: Summarizes the article snippet into <em>2 short sentences</em>.</li>
      <li><strong>Memory Buffer</strong>: Maintains short-term context across articles.</li>
    </ul>
  </div>

  <div>
    <h3>4. Merging Data</h3>
    <ul>
      <li><strong>Merge Node</strong>: Combines images, cleaned text, and AI-generated summaries.</li>
    </ul>
  </div>

  <div>
    <h3>5. Filtering Sponsored Content</h3>
    <ul>
      <li><strong>Sponsored Removal</strong>: Excludes articles with “Sponsored” in the creator field.</li>
    </ul>
  </div>

  <div>
    <h3>6. Posting to Telegram</h3>
    <ul>
      <li><strong>Loop Over Items + Send Photo Message</strong>: Publishes sponsor-free, summarized articles to <code>@DailySecurityNewss</code> telegram Channel.</li>
      <li>Each post includes: title, author, date, AI summary, categories, image (if available), and the “Read more” link.</li>
      <li><strong>Wait 1 min</strong>: Adds a short delay to avoid spamming Telegram.</li>
    </ul>
  </div>

  <h2>🎯 Outcome</h2>
  <div>
    <p>
      ✅ Daily feed of cybersecurity news <br>
      ✅ Clean, AI-simplified summaries <br>
      ✅ Images & links preserved <br>
      ✅ Sponsored posts filtered <br>
      ✅ Auto-posted to Telegram at 9 AM
    </p>
  </div>

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
