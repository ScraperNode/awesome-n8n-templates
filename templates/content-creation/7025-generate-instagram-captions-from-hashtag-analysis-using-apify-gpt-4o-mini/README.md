# 🎬 Generate Instagram captions from hashtag analysis using Apify + GPT-4o-mini

> ⚡ **795 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

This n8n workflow scrapes recent Instagram posts by hashtag and generates new, relevant caption ideas using OpenAI. It avoids making up suggestions by analyzing real-world content and surfacing common patterns.

---

## ✅ Use Case

Marketing teams, content creators, or social media managers can:

- Discover what’s trending for a specific topic
- Automatically generate Instagram captions based on real posts
- Understand common caption styles for a niche
- Save time brainstorming ideas while staying on-brand

---

## 🧠 How It Works

### 1️⃣ Manual Trigger

#### 🧩 Node: `When clicking ‘Execute workflow’`
- Manually starts the workflow for testing or single-run execution.

---

### 2️⃣ Define the Hashtag

#### 🧩 Node: `Create Search Term`
- Sets the value of the hashtag you'd like to scan.
- Default is `n8n`, but you can modify it to anything.

```json
{
  "Search_Term": "yourCustomHashtag"
}
```

---

### 3️⃣ Scrape Instagram Posts

#### 🧩 Node: `Find Recent Posts`
- **API**: [Apify Instagram Hashtag Scraper](https://console.apify.com/actors/apify/instagram-hashtag-scraper)
- **Setup**:
  - Visit [Apify Console](https://console.apify.com/)
  - Create an API token
  - In n8n, go to Credentials and add `HTTP Query Auth`
  - Use `?token=yourTokenHere` as the query string

**JSON Body:**
```json
{
  "hashtags": ["{{ $json.Search_Term }}"],
  "resultsLimit": 20,
  "resultsType": "posts"
}
```

---

### 4️⃣ Extract Captions

#### 🧩 Node: `Set bio and follower count`
- Extracts just the `caption` from each post and stores it in a clean variable for the AI agent to use.

---

### 5️⃣ Aggregate Captions

#### 🧩 Node: `Aggregate`
- Gathers all captions into one list before processing.
- Useful for passing a large text block into the AI.

---

### 6️⃣ Convert to Single Text Block

#### 🧩 Node: `Convert table names and columns into single text for agent`
- Uses a `Code` node to combine all captions into a single string for OpenAI to read:
```javascript
return [
  {
    json: {
      text: items
        .map(item =&gt; `- ${JSON.stringify(item.json)}`)
        .join('\n\n'),
    },
  },
];
```

---

### 7️⃣ Generate Caption Ideas with AI

#### 🧩 Node: `AI Agent`
- Takes the combined post text and sends it to GPT-4o-mini.
- Includes this system message:
```text
I'm looking for ideas for posts about {{ $('Create Search Term').item.json.Search_Term }}.
Here’s the last 5 posts on Instagram about the topic. Use those to help me generate a list of relevant captions.

Do not make up ideas that are not like the others in the list.

Output like this:
{
  "Post Idea": ["Idea1", "Idea2"],
  "Most Common Post": ["common post 1", "common post 2"]
}
```

---

### 8️⃣ Choose Language Model

#### 🧩 Node: `OpenAI Chat Model`
- **Model**: `gpt-4o-mini`
- **Credential**: Use your OpenAI API key.
  - Get it from: [OpenAI API Keys](https://platform.openai.com/account/api-keys)
  - Add it in n8n under OpenAI credentials.

---

### 9️⃣ Parse the AI Output

#### 🧩 Node: `Structured Output Parser`
- Parses the GPT response into structured JSON:
```json
{
  "Post Idea": ["Idea1", "Idea2"],
  "Most Common Post": ["common post 1", "common post 2"]
}
```

---

### 🔟 Split the Outputs

#### 🧩 Nodes: `Split Out`, `Split Out1`
- Separates the `Post Idea` list and `Most Common Post` list into individual items.

---

### 🔁 Merge for Final Output

#### 🧩 Node: `Merge`
- Combines the two split lists into one output stream.

---

## 👤 Need More Help?

**Robert Breen**  
Automation Consultant | AI Workflow Designer | n8n Expert  
📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
