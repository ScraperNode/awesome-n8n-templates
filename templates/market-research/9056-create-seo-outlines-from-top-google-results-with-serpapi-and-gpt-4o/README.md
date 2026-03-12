# 📊 Create SEO outlines from top Google results with SerpAPI and GPT-4o

> ⚡ **334 views** · 📊 [Market Research & Insights](../)

## Description

## Overview
Use this workflow to create SEO-friendly outlines based on articles that do well in Google. 

Enter a keyword, and the workflow scrapes the top results, scrapes the content, analyzes it with AI, and builds a MECE (mutually exclusive, collectively exhaustive) outline. 

It’s useful for content creators and SEO specialists who want relevant, well-structured content.

## How it works
- Accepts a keyword submitted through a form
- Uses the SerpAPI to get top Google results for a chosen country
- Collects the top five URLs. We use five because we expect some to fail at the scraping stage
- Scrapes each URL separately
- Uses the first three articles to fit the AI model’s context window
- Extracts the main text from the page body
- Converts HTML to Markdown to get rid of tags and attributes.
- Combines the cleaned text into a single list for AI processing
- Analyzes the content with an AI language model to find common topics and headings
- Generates an SEO-focused outline based on the most frequent topics

## Setup steps
1. Sign up for a [SerpAPI account](https://serpapi.com/) (free tier available)
2. Create an [OpenAI account](https://openai.com/api/) and get an API key
3. Set up your credentials within N8N
4. Run the workflow and enter your keyword in the form.
5. The workflow will generate an SEO-friendly outline for your content

## Improvement ideas
- Add another LLM to turn the outline into an article
- Use the Google docs API to add the outline to a Google doc
- Enright the outline with data from Perplexity or Tavily

## 🔗 Nodes Used

HTTP Request, Markdown, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
