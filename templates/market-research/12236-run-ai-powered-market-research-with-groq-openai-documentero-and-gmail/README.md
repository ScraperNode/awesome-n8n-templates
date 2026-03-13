# 📊 Run AI-powered market research with Groq, OpenAI, Documentero and Gmail

> ⚡ **194 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## Description
This n8n template demonstrates how to build an AI-powered Market Research Assistant using a multi-agent workflow.
It helps you get a 360-degree view of a product idea or research topic by analysing:
* Customer insights and pain points
* Market size and macro/micro-economic trends
* Competitive landscape and alternatives
The workflow mirrors how product managers and strategy teams conduct discovery — by breaking down research into parallel workstreams and then synthesizing insights into a single narrative.


## How it works
1. Planner Agent The main agent receives your research topic as input and defines:
    * Research objective
    * Key areas of focus (Customer, Market, Competition)
    * Assumptions and constraints
2. Parallel Research Agents Based on the planner’s output, three specialist agents run in parallel:
    * Customer Insights Agent Researches public sources such as articles and forums to infer customer behaviour, pain points, and existing tools.
    * Market Scan Agent Analyses macro-economic and micro-economic trends, estimates TAM/SAM/SOM, and highlights key risks and assumptions.
    * Competitor Insights Agent Identifies existing competitors and substitutes and summarises how they are positioned in the market.
3. Synthesis Agent The outputs from all research agents are consolidated and analysed by a synthesis agent, which produces a market discovery memo.
4. Final Output The discovery memo is generated as a document and sent to your email.


## How to use
* Trigger the workflow via the chat message node.
* Provide your research topic or product idea, along with optional context such as target market.
* The workflow runs automatically and delivers a structured discovery memo to your inbox.


## Setup Steps
* API credentials for:
    * Groq or OpenAI (LLM)
    * Documentero (document generation)
* A configured Documentero template
* Gmail OAuth or email credentials for delivery of memo

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
