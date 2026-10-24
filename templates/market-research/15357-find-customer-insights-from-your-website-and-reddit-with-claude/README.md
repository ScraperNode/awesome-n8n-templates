# 📊 Find customer insights from your website and Reddit with Claude

> ⚡ **111 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Find Customer Insights from Website and Reddit with Claude

### Who is this for?

This workflow is designed for marketers, founders, agencies, and product teams who want to understand how real customers talk about a product category, market, or problem space.

It works especially well if you already have:

- a website
- a product that needs better positioning
- weak or limited voice-of-customer data
- a need for better ad angles, hooks, landing page messaging, or research

### What problem is this workflow solving? / Use case

A lot of AI outputs are only as good as the context behind them.

The problem is that many websites do not provide enough useful input on their own:

- some barely explain the product clearly
- some have weak positioning
- some have very little voice-of-customer language available
- some need insight from the broader market, not just the brand itself

This workflow solves that by combining website extraction with Reddit research.

Instead of only asking, “What does this company say about itself?”, it also asks:

- what are people frustrated with in this market?
- what are they trying to solve?
- what triggers them to look for a solution?
- how do they describe the problem in their own words?

That gives you much better raw material for ads, copy, positioning, landing pages, and content strategy.

### What this workflow does

- Collects a website URL through a form
- Fetches the homepage and selected internal pages from the website
- Extracts and cleans website text into one usable source
- Builds structured website insights such as:
  - brand name
  - product summary
  - customer group
  - industry
  - problems
  - solution
  - key features
  - key benefits
  - brand voice
  - business type
  - marketing brief
- Generates targeted Reddit search phrases based on the product category and market
- Searches Reddit for relevant posts
- Filters low-quality or irrelevant posts
- Checks which posts are actually relevant to the product/problem space
- Pulls comments from selected Reddit threads
- Combines website context with Reddit posts and comments
- Extracts structured customer insight such as:
  - pain points
  - trigger events
  - aspirations
  - interesting quotes
  - content ideas

### Setup

Connect your accounts:

- Anthropic API for website analysis, keyword generation, relevance checking, and final insight creation
- Reddit API for searching posts and pulling comments

Set your credentials in the respective nodes.

Form input required:

- Website — required

### How to customize this workflow to your needs

**Website analysis:**  
Adjust the website analysis prompt if you want different output fields, such as competitors, pricing objections, maturity level, or use cases.

**Reddit search breadth:**  
Change the prompt that generates search terms if you want broader market research or narrower product-category research.

**Post filtering:**  
Adjust the Reddit filtering logic if you want to allow lower-engagement posts, fewer comments, or more exploratory inputs.

**Insight extraction:**  
Update the final insight prompt if you want different outputs such as objection handling, JTBD phrasing, angle buckets, landing page copy, or ad hooks.

**Research focus:**  
You can use this workflow for:

- ad research
- landing page messaging
- competitor/category research
- product marketing
- ICP understanding

### How it works

The workflow starts with a form submission containing a website URL. It fetches the homepage, extracts navigation links, and uses Claude to select a few useful internal pages likely to contain stronger product and positioning context. Those pages are fetched and converted into text, then merged into one cleaned website source.

Claude then analyzes that website text to build a structured understanding of the product, audience, problems, solution, features, benefits, tone, and market context. Based on that, it generates a couple of targeted Reddit search phrases that are specific to the product category rather than just the exact brand name.

The workflow searches Reddit using those phrases, removes weak or empty results, and aggregates the posts. It then checks which posts are actually relevant to the product’s customer group and pain points. After that, it pulls comments from selected posts and combines the post and comment data into one research input.

Finally, Claude turns that combined input into structured customer insight that can be used for messaging and creative work. The final output includes things like pain points, trigger events, aspirations, quotes, and content ideas.

### Result

With this workflow, you go from website URL → website understanding → Reddit research → structured customer insight in one flow.

The result is much better context for:

- ad angles
- hooks
- landing pages
- positioning
- voice-of-customer research
- creative strategy

## 🔗 Nodes Used

Function, HTTP Request, Reddit, Markdown, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
