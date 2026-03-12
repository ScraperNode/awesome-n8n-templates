# ⚡ Generate visual summary & knowledge graph insights for your email

> ⚡ **1,213 views** · ⚡ [Personal Productivity](../)

## Description

## The Ultimate Gmail Analysis and Visual Summarization Template

This workflow showcases various useful Gmail search, filter, and AI categorization operations and generates a **knowledge graph** for your mail using the [InfraNodus GraphRAG API](https://infranodus.com/use-case/ai-knowledge-graphs), which you can use to reveal the **main topics** and **blind spots** in your correspondence. 

InfraNodus will then **target those blind spots** to generate **interesting research questions** for you and send the topical summary and insights via Telegram. You can also click the generated graph and explore the blind spots inside [InfraNodus](https://infranodus.com) using the **interactive visual interface:**

![InfraNodus structural gap](https://infranodus.com/images/front/infranodus-structural-gaps-ideas@2x.jpg)


## What is it useful for?


- **Learn about advanced Gmail search, filtering, and AI categorization functions** that can be useful for your other workflows
- Analyze all your personal messages for the last week to get an **overview of the main topics** 
- Analyze **all your Sent messages** to find recurrent topics and gaps and generate ideas based. on those gaps
- Generate ideas based on **specific message filters** (Personal, Promos, from a specific person, AI-defined criteria, e.g. urgency)
- Get an **overview of an interaction with a specific person / company**
- Get an **overview of your notes**
- Generate **new ideas based on your correspondence on a certain topic** (e.g. "business")
- Learn about **various n8n nodes useful for email processing, filtering, and data conversion**
- Never miss important topics, use AI filter to get **notified of the urgent and important emails** via Telegram


## How it works
This template can be triggered in multiple ways: 
- automatically in regular intervals (daily, weekly), 
- manually in n8n, or 
- via a private password-protected URL form where you can specify your search and filtering criteria


When you start the workflow, you specify:
- your **Gmail search filters** (can be combined, e.g. `after:2025/06/01 label:personal business` to search for all emails received after 1 June 2025, filed in the Personal category containing the word "business". (optional, if empty, will retrieve all the emails or limited to the number you set in the Gmail node)
- Additional **Gmail labels** (e.g. SENT or CATEGORY_PERSONAL or your custom categories). Use the search filter for faster processing (e.g. prefer label:person to CATEGORY_PERSONAL, but labels can be useful for additional filtering for your search queries) (optional, if empty, will retrieve all the emails)
- **AI filtering criteria** — set an additional classification criteria used to filter out the emails, e.g. "Only the urgent, personal emails" — in that case, AI classification node working with Google's Gemini AI will be activated and will only pass through the email based on the criteria you specify.
- Whether you want to build a **text graph** or a **social graph** — see the workflow for detailed explanation of each
- Use **snippets of emails** (default) or **full text** (for thorough analysis). We prefer snippets as it's faster and your graph context doesn't get biased towards longer emails this way.


Once you set up your search parameters in Steps 1 and 2, the template will follow the following steps:

1. Step 3 — retrieve Google emails that satisfy your filter criteria. Filter them by additional labels provided if applicable.
2. Step 4 - if the user chooses to analyze full text, use additional Gmail node that retrieves the full text of the email message
3. Step 5 — if AI filter rule is provided, use the AI Classifier node with Google Gemini Pro 2.5 model to classify the email based on the rule provided. Bypass if empty.
4. Step 6 - format the text or the email snippets to add the sender meta-data and category and to prepare to submit to InfraNodus
5. Step 7 - submit the data to the [InfraNodus HTTP `graphAndEntries` endpoint](https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points) and generate a knowledge graph
6. Step 8 - access this graph via the [`graphAndAdvice` endpoint]((https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points)) and generate a topical summary based on the GraphRAG representation and insight questions bridging the gaps identified. Send the results via a Telegram bot. 

We use Telegram, because it takes only 30 seconds to set up a bot with an API, unlike Discord or Slack, which is long and cumbersome to set up. You can also attach a Gmail send node and generate an email instead. 


## How to use

You need an [InfraNodus GraphRAG API account and key](https://infranodus.com/use-case/ai-knowledge-graphs) to use this workflow. 

- Create an InfraNodus account
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.
- Add this Authorization code in Steps 7 and 8 of the workflow.  
- Come up with the name of the graph and change it in the HTTP InfraNodus nodes in the steps 7 and 8 and also in the Telegram nodes that send a link to the graph.
- For additional settings you can use in the HTTP InfraNodus nodes, see the [InfraNodus access points](https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points) page. 
- Authorize your Gmail account for Steps 2 and 3 Gmail nodes. The easiest way to set it up is to open a free Google Console API account and to create an OAuth access point for n8n. You can then reuse it with other Google services like Google Sheets, Drive, etc. So it's a useful thing to have in general.
- Set up the Gemini AI API key using the instructions in the Step 5 Gemini AI node.
- Set up the Telegram node bot for the Step 8. It takes only 30 seconds: just go to [@botfather](https://t.me/botfather) and type in `/newbot` and you'll have an API key ready. To get the conversation ID, follow the n8n / Telegram instructions in the node itself. 
- Once everything is ready, try to run the default automated workflow to test if everything works well, then use the Form for playing around with specific filters that you may find useful.

## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- An Google Cloud API OAuth client and key for Gmail access
- A Gemini AI API key
- A Telegram bot API key

## FAQ

**1. What's the best search query to use?**

I personally like starting with analyzing the messages Gmail tags as "personal" from the last week (using the `after:2025/05/28 label:personal` search query) using the social graph settings. It helps me see who I interacted with, what it was about, and gives me a good bird's eye view into my last week's interactions, helping me see if I didn't miss anything. 

I also find it useful to analyze the sent messages (using the `after:2025/05/28 label:sent` search filter or `SENT` category filter) as it helps me see what I was writing about recently and understand some recurrent topics and gaps in my interactions. 

Finally, I also like to analyze notes (`label:notes`) or specific correspondence (`from:your_friend@gmail.com`) to get an overview and find gaps in the conversations.

**2. Why use InfraNodus and not an AI summarization module?**

You probably get a lot of spam, so your AI will get overwhelmed with the content that's not really useful. The [InfraNodus graph](https://infranodus.com) helps you see the important patterns and discover what's missing by focusing on the gaps. You can use the interactive graph to quickly remove the stuff you don't need and to focus on the most relevant topics and conversations. 


## Customizing this workflow

You can connect a Gmail node instead of the Telegram one if you prefer to receive notifications directly by email. I don't like using Slack and Discord because their bots are too difficult to set up and take too long.

Check out the **complete setup guide** for this workflow at [https://support.noduslabs.com/hc/en-us/articles/20394884531996-Build-a-Knowledge-Graph-and-Extract-Insights-from-Gmail-Emails-with-n8n-and-InfraNodus](https://support.noduslabs.com/hc/en-us/articles/20394884531996-Build-a-Knowledge-Graph-and-Extract-Insights-from-Gmail-Emails-with-n8n-and-InfraNodus) with a video tutorial coming soon and the links to other n8n workflows.

Check our **other n8n workflows** at [https://n8n.io/creators/infranodus/](https://n8n.io/creators/infranodus/) for useful content gap analysis, expert panel, and marketing, and research workflows that utilize GraphRAG for better AI generation.

Finally, check out [https://infranodus.com](https://infranodus.com) to learn more about our **network analysis technology** used to build knowledge graphs from text.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Schedule Trigger, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
