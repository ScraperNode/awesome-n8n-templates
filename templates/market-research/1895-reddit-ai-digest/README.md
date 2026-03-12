# 📊 Reddit AI digest

> ⚡ **12,024 views** · 📊 [Market Research & Insights](../)

## Description

This workflow digests mentions of n8n on Reddit that can be sent as an single email or Slack summary each week. We use OpenAI to classify if a specific Reddit post is really about n8n or not, and then the summarise it into a bullet point sentence.

## How it works

1. Get posts from Reddit that might be about n8n;
2. Filter for the most relevant posts (posted in last 7 days and more than 5 upvotes and is original content);
3. Check if the post is actually about n8n;
4. If it is, categorise with OpenAI.
   
Bear in mind: Workflow only considers first 500 characters of each reddit post. So if n8n is mentioned after this amount, it won't register as being a post about [n8n.io](https://n8n.io/).

## Next steps
- Improve OpenAI Summary node prompt to return cleaner summaries;
- Extend to more platforms/sources - e.g. it would be really cool to monitor larger Slack communities in this way;
- Do some classification on type of user to highlight users likely to be in our ICP;
- Separate a list of data sources (reddit, twitter, slack, discord etc.), extract messages from there and have them go to a sub workflow for classification and summarisation.

## 🔗 Nodes Used

Reddit, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
