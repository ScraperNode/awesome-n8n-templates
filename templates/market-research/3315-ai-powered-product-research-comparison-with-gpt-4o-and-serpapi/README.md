# 📊 AI-powered product research & comparison with GPT-4o and SerpAPI

> ⚡ **1,856 views** · 📊 [Market Research & Insights](../)

## Description

# What It Does
This powerful workflow can take hours of difficult research attempting to identify the perfect product to buy and condense it into a few short minutes. Simply typing the name of an item you wish to purchase into a chat message will initiate the workflow to begin its search process to identify 5 top of the line products for you to purchase. The initial chat with prompt the Item Finder AI agent utilizing the power of GPT-4o in combination with SerpAPI to conduct a search and find 5 top end items that match the prompt. It will then send the name of each item to a separate Reviewer Tools Agent that will gather information on each item. Each Reviewer Tools Agent will again harness the power of GPT-4o and SerpAPI to give a detailed description of the item features, lowest price available, options of retailers available to purchase the item, a summary of the reviews and overall star ratings. 
# Who This Is For
This is the perfect workflow for anyone who is interested in making a big-time purchase and wants to have all the information presented in a quick organized fashion to make the best decision possible. Rather than searching through multiple stores and reading through hundreds of reviews and product description, you can now utilize the power of GPT-4o and SerpAPI to conduct that search for you and bring all the information to you. Whether you are searching for a TV with the best screen quality, a work laptop that will have the power and memory you need, or that unique item for your business that is difficult to find and even harder to find the cheapest price, this workflow is exactly what you need.
# How It Works
Begin by opening the chat trigger node and typing the name of an item you would like to purchase and would like it to do an in-depth search for. Example: golf driver, gaming desktop computer, or mid-size three row SUV.
This will trigger the Item Finder Tools Agent to begin to utilize GPT-4o to begin to create search queries based off the item you wish to purchase. It will then use these search queries with SerpAPI to identify 5 high quality, modern items. After it has obtained the names of five items it will then in a structured output, send each item to a separate Reviewer Tools Agent.
Once the Reviewer Tools Agent has received the name of the item it will then begin an in-depth review of that item. Each Reviewer Tools Agent will again use the power of GPT-4o connected with SerpAPI to obtain the most up to date information on each item from the internet. For each item you will be provided with:
- Detailed description of item features
	-  It will go in depth and give features that make that item unique. Qualities that will allow you to compare one items features to another.
- Lowest Price available
- Online retail stores available for purchase
- Summary of reviews
	- It will give both the pros and cons discussed by various reviewers in regard to the item.
- Overall star rating
After each of the Reviewer Tools Agent is complete with its review of the item, they will all send the information along to a Compiler Tools Agent.  This tools agent uses GPT-4o-mini to arrange the data and present it in a concise, organized fashion. This allows for easy readability.
# Set Up Steps
Set up steps:
1. You will need to obtain an Open AI API key from platform.openai.com/api-keys
2. After you obtain this Open AI API key you will need to connect it to the Open AI Chat Model for all of the Tools agents (Item finder, Reviewer 1, Reviewer 2, Reviewer 3, Reviewer 4, Reviewer 5, and Compiler).
3. You will now need to fund your Open AI account. GPT 4o costs ~$0.06 to run the workflow.
4. Next you will need to create a SerpAPI account at https://serpapi.com/users/sign_up
5. After you create an account you will need to obtain a SerpAPI key.
6. You will then need to use this key to connect to the SerpAPI tool for each of the tools agents (Item finder, Reviewer 1, Reviewer 2, Reviewer 3, Reviewer 4, and Reviewer 5)
	- Tip: SerpAPI will allow you to run 100 free searches each month. This workflow uses ~8-15 SerpAPI searches per run. If you would like to utilize the workflow more than that each month, create multiple SerpAPI accounts and have an API key for each account. When you utilize all 100 free searches for an account, switch to the API key for another account within the workflow.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, SerpApi (Google Search), Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
