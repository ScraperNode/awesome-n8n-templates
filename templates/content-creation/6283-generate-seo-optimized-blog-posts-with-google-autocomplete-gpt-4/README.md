# 🎬 Generate SEO-optimized blog posts with Google Autocomplete & GPT-4

> ⚡ **1,540 views** · 🎬 [Content Creation & Video](../)

## Description

## Try It Out!

This n8n template helps you create SEO-optimized Blog Posts for your businesses website or for personal use.

Whether you're managing a business or helping local restaurants improve their digital presence, this workflow helps you build SEO-Optimized Blog Posts in seconds using Google Autocomplete and People Also Ask (SerpAPI). 

Who Is It For? 
- This is helpful for people looking to SEO Optimize either another person's website or their own. 

How It Works?
- You start with a list of blog inspirations in Google Sheets (e.g., “Best Photo Session Spots”).
- The workflow only processes rows where the “Status” column is not marked as “done”, though you can remove this condition if you’d like to process all rows each time. 
- The workflow pulls Google Autocomplete suggestions and PAA questions using: A custom-built SEO API I deployed via Render (for Google Autocomplete + PAA), SerpAPI (for additional PAA data). 
- These search insights are merged. For example, if your blog idea is “Photo Session Spots,” the workflow gathers related Google search phrases and questions users are asking.
- Then, GPT-4 is used to draft a full blog post based on this data.
- The finished post is saved back into your Google Sheet.

How To Use
- Fill out the “Blog Inspiration” column in your Google Sheet with the topics you want to write about.
- Update the OpenAI prompt in the ChatGPT node to match your tone or writing style. (Tip: Add a system prompt with context about your business or audience.)
- You can trigger this manually, or replace it with a cron schedule, webhook, or other event.

Requirements
- A SerpAPI account to get PAA
- An OpenAI account for ChatGPT
- Access to Google Sheets and n8n

How To Set-Up? 
- Your Google Sheet should have three columns: "Blog Inspiration", "Status" → set this to “done” when a post has been generated, "Blog Draft" → this is automatically filled by the workflow. 

- To use the SerpAPI HTTP Request node: 1. Drag in an HTTP Request node, 2. Set the Method and URL depending on how you're using SerpAPI: Use POST to run the actor live on each request. Use GET to fetch from a static dataset (cheaper if reusing the same data). 3. Add query parameters for your SerpAPI key and input values. 4. Test the node.
Refer to this n8n documentation for more help! https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi/.
 
- The “Autocomplete” node connects to a custom web service I built and deployed using Render. I wrote a Python script (hosted on GitHub) that pulls live Google Autocomplete suggestions and PAA questions based on any topic you send. This script was turned into an API and deployed as a public web service via Render. Anyone can use it by sending a POST request to: https://seo-api2.onrender.com/get-seo-data (the URL is already in the node). Since this is hosted on Render’s free tier, if the service hasn’t been used in the past ~15 minutes, it may “go to sleep.” When that happens, the first request can take 10–30 seconds to respond while it wakes up.


Happy Automating!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
