# 📱 AI-powered daily LinkedIn post creator with OpenAI feedback loop and Notion

> ⚡ **3,027 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

This n8n template automatically creates and publishes high-quality LinkedIn posts using your brand brief, AI-generated ideas, and structured feedback loops — all powered by OpenAI. Perfect for solo creators, marketers, and startup teams building a consistent presence on LinkedIn.

 Who's it for
Creators and freelancers building a personal brand
Social media managers at startups or agencies
Marketing teams that want to scale LinkedIn content
Anyone tired of manually ideating, writing, and posting daily

 What it does
Triggers daily at a chosen time (default: 9 PM)
Fetches new content ideas from your idea-generation workflow
Loads your brand brief and previous post feedback
Uses OpenAI to craft a branded, engaging LinkedIn post
Publishes directly to LinkedIn — no manual copy-paste needed

How the AI logic works
The AI agent follows a consistent, looped prompt strategy to ensure brand alignment:

**++Prompt++**
You are a helpful content creator for Nabin Bhandari's personal brand. Use the below steps to create content:

1. Always start by getting the brand brief using the Get_Brand_Brief tool.  
2. Create a post on the requested topic that aligns with the brand brief.  
3. Get feedback and a score on the post using the Get_Content_Feedback tool.  
4. If the score is below 0.8, use the feedback to refine the post and repeat.  
5. The final output should be the approved post.
 Bonus: You can fine-tune OpenAI on your own brand tone and style by uploading at least 50 examples of approved posts. This will help ensure even more accurate, on-brand outputs.

 Requirements
OpenAI API Key
LinkedIn API credentials set in the LinkedIn node
A Notion page (or any storage) with your Brand Brief clearly described
Optional: Fine-tuned OpenAI model for higher fidelity

 How to customize
Adjust the AI prompt for different tones (e.g., witty, professional)
Swap the idea source (Airtable, Notion, Webhook, etc.)
Add manual approval steps before publishing
Replace the LinkedIn node with other social media APIs (Twitter/X, Threads)

 Tips
Store a clear and specific brand brief in your Notion page — it directly shapes the AI's tone
Add a database of previously approved posts for fine-tuning OpenAI
Use additional feedback metrics (likes, engagement) for future iterations
![Screenshot 20250805 at 00.36.05.png](fileId:1938)

## 🔗 Nodes Used

Execute Sub-workflow, LinkedIn, Notion, Execute Workflow Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
