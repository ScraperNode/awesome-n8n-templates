# 🎬 Create research-backed articles with AI planning, Linkup Search & GPT-5

> ⚡ **630 views** · 🎬 [Content Creation & Video](../)

## Description

Go beyond basic AI-generated text and create articles that are well-researched, comprehensive, and credible. This template automates an advanced content creation process that mimics a professional writing team: it plans, researches, and then writes.

Instead of just giving an AI a topic, this workflow first uses an AI "planner" to break the topic down into logical sub-questions. Then, it deploys an AI "researcher" powered by **Linkup** to search the web for relevant insights and sources for each question. Finally, this complete, sourced research brief is handed to a powerful AI "writer" to compose a high-quality article, complete with hyperlinks back to the original sources.

## **Who is this for?**

* **Content marketers & SEO specialists:** Scale the production of well-researched, link-rich articles that are built for authority and performance.
* **Bloggers & thought leaders:** Quickly generate high-quality first drafts on any topic, complete with a list of sources for easy fact-checking and validation.
* **Marketing agencies:** Dramatically improve your content turnaround time by automating the entire research and first-draft process for clients.

## **What problem does this solve?**

* **Adds credibility with sources:** Solves one of the biggest challenges of AI content by automatically finding and preparing to include hyperlinks to the web sources used in the research, just as a human writer would.
* **Ensures comprehensive coverage:** The AI-powered "topic breakdown" step prevents superficial content by creating a logical structure for the article and ensuring all key aspects of a topic are researched.
* **Improves content quality and accuracy:** The "research-first" approach provides the final AI writer with a rich brief of specific, up-to-date information, leading to more detailed and factually grounded articles than a simple prompt ever could.
* **Automates the entire writing workflow:** This isn't just an AI writer; it's an end-to-end system that automates the planning, research, and drafting process, saving you hours of manual work.

## **How it works**

This workflow orchestrates a multi-step "Plan, Research, Write" process:

1.  **Plan (Decomposition):** You provide an article title and guidelines via the built-in form. An initial AI call acts as a "planner," breaking down the main topic into an array of logical sub-questions.
2.  **Research (Web Search):** The workflow then loops through each of these sub-questions. For each one, it uses **Linkup** to perform a targeted web search, gathering multiple relevant insights and their source URLs.
3.  **Consolidate (Brief Creation):** All the sourced insights from the research phase are compiled into a single, comprehensive research brief.
4.  **Write (Final Generation):** This complete, sourced brief is handed to a final, powerful AI writer (e.g., GPT-5). Its instructions are clear: write a high-quality article based *only* on the provided research and integrate the source links as hyperlinks where appropriate.

## **Setup**

1.  **Connect your Linkup account:** In the **Query Linkup for insights** (HTTP Request) node, add your Linkup API key. We recommend creating a "Generic Credential" of type "Bearer Token" for this. Linkup's free plan is very generous and includes credits for ~1000 searches per month.
2.  **Connect your AI provider:** Connect your AI provider (e.g., OpenAI) credentials to the two Language Model nodes. For cost-efficiency, we recommend a smaller, faster model for **Generate research questions** and a more powerful, creative model for **Generate the AI output**.
3.  **Activate the workflow:** Toggle the workflow to "Active" and use the built-in form to enter an article title and guidelines to generate your first draft!

## **Taking it further**

* **Control your sources:** For more brand-aligned or niche content, you can restrict the web search to specific websites by adding `site:example.com OR site:anothersite.com` to the query in the **Query Linkup for insights** node.
* **Automate publishing:** Connect the final **Article result** node to a **Webflow** or **WordPress** node to automatically create a draft post in your CMS.
* **Generate content in bulk:** Replace the **Form Trigger** with an **Airtable** or **Google Sheet** trigger to automatically generate a whole batch of articles from your content calendar.
* **Customize the writing style:** Tweak the system prompt in the final **Generate the AI output** node to match your brand's specific tone of voice, add SEO keywords, or include calls-to-action.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
