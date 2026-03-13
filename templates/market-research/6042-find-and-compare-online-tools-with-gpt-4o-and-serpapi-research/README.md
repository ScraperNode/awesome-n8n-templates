# 📊 Find and compare online tools with GPT-4o and SerpAPI research

> ⚡ **753 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![AIPowered Online Tool Finder Utilizing GPT4o.png](fileId:1753)

# What It Does
This powerful workflow can take hours of difficult research attempting to identify the perfect online tool to aid you with your business and condenses it into a few short seconds. Simply typing the name of an online tool you would like to identify into a chat message will initiate the workflow to begin its search process to identify 5 companies that will provide you with the online tool you desire. The initial chat will prompt the Tool Finder AI agent utilizing the power of GPT-4o in combination with SerpAPI to conduct a search and find 5 top end companies that contain the online tool you desire. It will then send the name of each company to five separate Reviewer Tool Agents that will gather information on each company. Each Reviewer Tools Agent will again harness the power of GPT-4o and SerpAPI to give a detailed descriptions of the online tool available including its price, limitations, summary of reviews, pros and cons, as well as an overall conclusion of the online tool.

# Who This Is For
This is the perfect workflow for anyone who is interested in obtaining an online tool to help automate business or everyday tasks. Rather than spending an excess amount of time searching through websites and review pages to determine the best product available this workflow completes the process for you. It provides five options in a condensed form that easily lets you compare and evaluate the options in a single place. Whether you are searching for an automatic email responder or the best available online spreadsheet, this workflow is exactly what you need to help bring your business to the next level.

# How It Works
Begin by opening the chat trigger node and typing the name of an online tool you would like to use to improve your day to day tasks. Example: Automatic email responder, automatic instagram poster, or online spreadsheet.
This will trigger the Tool Finder Tools Agent to begin to utilize GPT-4o to begin to create search queries based off the tool you wish to identify. It will then use these search queries with SerpAPI to identify 5 companies that provide the online tool you desire. After it has obtained the names of five companies it will then in a structured output, send each item to a separate Reviewer Tools Agent.
Once the Reviewer Tools Agent has received the name of the item it will then begin an in-depth review of that item. Each Reviewer Tools Agent will again use the power of GPT-4o connected with SerpAPI to obtain the most up to date information on each item from the internet. For each company and its tool you will be provided with:

- Price: If it is a one time purchase, monthly subscription and if there is a free version.
- Limits: It will provide any limitations on completing the desired tasks. If there is a limit on number of tasks that can be completed. If it only works with certain software.
- Summary of reviews: It will provide an overall summary of the reviews, how many reviews, as well as the star rating of each item. It will go in depth on the summary of the reviews. It will provide 3-4 pros and 2-3 cons of each item. 
- Conclusion: It will provide an overall summary of the tool. 


After each of the Reviewer Tools Agent is complete with its review of the company and the online tool they provide, they will all send the information along to a Compiler Tools Agent. This tools agent uses GPT-4o-mini to arrange the data and present it in a concise, organized fashion. This allows for easy readability.
# Set Up Steps


1. You will need to obtain an Open AI API key from platform.openai.com/api-keys
2. After you obtain this Open AI API key you will need to connect it to the Open AI Chat Model for all of the Tools agents (Item finder, Reviewer 1, Reviewer 2, Reviewer 3, Reviewer 4, Reviewer 5, and Compiler).
3. You will now need to fund your Open AI account. GPT 4o costs ~$0.03-$0.04 to run the workflow.
4. Next you will need to create a SerpAPI account at https://serpapi.com/users/sign_up
5. After you create an account you will need to obtain a SerpAPI key.
6. You will then need to use this key to connect to the SerpAPI tool for each of the tools agents (Tool finder, Reviewer 1, Reviewer 2, Reviewer 3, Reviewer 4, and Reviewer 5)
7. Tip: SerpAPI will allow you to run 100 free searches each month. This workflow uses ~15-30 SerpAPI searches per run. If you would like to utilize the workflow more than that each month, create multiple SerpAPI accounts and have an API key for each account. When you utilize all 100 free searches for an account, switch to the API key for another account within the workflow.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, SerpApi (Google Search), Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
