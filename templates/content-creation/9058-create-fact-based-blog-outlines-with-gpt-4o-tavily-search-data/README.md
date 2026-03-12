# 🎬 Create fact-based blog outlines with GPT-4o & Tavily search data

> ⚡ **187 views** · 🎬 [Content Creation & Video](../)

## Description

## Overview

Turn your keyword research into a clear, fact-based content outline with this workflow. It splits your keyword into 5-6 subtopics, makes research questions for those subtopics, and uses Tavily to pull answers from real search results. This way your outline is based on real data, not just AI training data, so you can create accurate and reliable content.

## How it works

- Enter a keyword in the form to start the workflow
- The OpenAI node splits the keyword into 5-6 research subtopics and makes a research question for each one. These questions will be used to enrich the outline later on
- We split the research questions into separate items so we can process them one by one
- Each research question is sent to Tavily. Tavily searches the web for answers and returns a short summary
- Next, we add the answers to our JSON sections
- We take all the separate items and join them into one list again
- The JSON outline is converted into Markdown using a code node. The code takes the JSON headers, turns them into Markdown headings (level 2), and puts the answers underneath

## Setup steps

1. Get an [OpenAI API](https://openai.com/api/) key and set up your credentials inside n8n
2. Sign up for a [Tavily](https://www.tavily.com/) account and get an API key — you can use a free account for testing
3. Install the Tavily community node. If you don’t want to use a community node, you can call Tavily directly using an HTTP node. Check their [API reference](https://docs.tavily.com/documentation/api-reference/endpoint/search) for what endpoints to call
4. Run the workflow and enter the keyword you want to target in the form
5. Adjust the workflow to decide what to do with the Markdown outline

## Requirements

- An [OpenAI API](https://openai.com/api/) key
- A [Tavily](https://www.tavily.com/) account
- The Tavily community node installed
- *(Optional)* If you don’t want to use the Tavily community node, use a regular HTTP node and call the API directly. Check their [API reference](https://docs.tavily.com/documentation/api-reference/endpoint/search) for what endpoints to call

## Workflow customizations

- Instead of using a form to enter your keyword, you can keep all your research in a Google Doc and go through it row by row
- You can add another AI node at the end to turn the outline into a full article
- You can put the outline in a Google Doc and send it to a writer using the Google Docs node and the Gmail node

## 🔗 Nodes Used

n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
