# 🔧 Serve inspirational quotes on-demand via webhook using ZenQuotes API

> ⚡ **762 views** · 🔧 [Miscellaneous](../)

## Description

This n8n template lets you instantly serve batches of inspirational quotes via a webhook using the free ZenQuotes API. It’s perfect for developers, content creators, community managers, or educators who want to add dynamic, uplifting content to websites, chatbots, or internal tools—without writing custom backend code.

---

# 🔧 How it works
- A Webhook node listens for incoming HTTP requests on your chosen path.
- Get Random Quote from ZenQuotes sends an HTTP Request to https://zenquotes.io/api/random?count=5 and retrieves five random quotes.
- Format data uses a Set node to combine each quote (q) and author (a) into a single string:
"“quote” – author".
- Send response returns a JSON array of objects { quote, author } back to the caller.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Developers building motivational Slack or Discord bots.
- Website owners adding on-demand quote widgets.
- Educators or trainers sharing daily inspiration via webhooks.
- Anyone learning webhook handling and API integration in n8n.

---

# 🗂️ Response Structure
Your webhook response will be a JSON array, for example:

```json
[
{
"quote": "Life is what happens when you're busy making other plans.",
"author": "John Lennon"
},
{
"quote": "Be yourself; everyone else is already taken.",
"author": "Oscar Wilde"
}
]
```

---

# ⚙️ Setup Instructions
- Import the workflow JSON into your n8n instance.
- In the Webhook node, set your desired path (e.g., /inspire).
- (Optional) Change the count parameter in the HTTP Request node to fetch more or fewer quotes.
- Activate the workflow.
- Test by sending an HTTP GET or POST to https://&lt;your-n8n-domain&gt;/webhook/&lt;path&gt;.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
