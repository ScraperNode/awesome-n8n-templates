# ⚡ Automate Gmail labeling with Gemini AI & build InfraNodus knowledge graph with Telegram alerts

> ⚡ **531 views** · ⚡ [Personal Productivity](../)

## Description

## Automated Gmail Labeling and Brainstorming

This template can be used to **automatically label your incoming Gmail messages with AI** and to **build a knowledge graph** from the emails tagged with a specific label to brainstorm new ideas based on them.

You can also **get notified about the emails with the most important labels via Telegram** as well as receive new ideas as you are building a knowledge graph of incoming messages.

The idea generation is based on the **[InfraNodus knowledge graph](https://infranodus.com) content gap detection algorithm**, which builds a network from your content and then finds a blind spot and uses AI to generate an interesting research question or idea that can be used to bridge this gap.

![InfraNodus structural gap](https://infranodus.com/images/front/infranodus-structural-gaps-ideas@2x.jpg)


## Why it works so well?

Think of all the business emails you receive that bypass the spam filters. Probably, they are personalized to you already. Now imagine if you build a knowledge graph from them for over a month. You will then **have a ideation device based on your interests and marketing profile**. Now, if you identify the gaps inside and generate interesting research questions based on them, you will **come up with new interesting ideas** that will be **relevant** (because they touch on the topics that matter to you), but **novel**, because they bridge them in new ways.


## What is it useful for?

- **Automate Gmail incoming message labeling** with the new Classifier n8n node — much more advanced than the default Gmail labeling rules.
- Get **notified via Telegram** (or a messenger of your choice) about the most important messages and **be sure not to miss anything important**.
- Keep the messages with a certain label saved into **knowledge graph** for brainstorming and ideation. 
- Every time a new message of this category comes in, it's added into the graph, changing its structure, a **new idea** is generated. So instead of looking at each specific offer, you now use them to generate **insights** for you.


## How it works


- Step 1: This template can is triggered automatically when a new Gmail message arrives.
*Note: you need to connect your Gmail account here in this node*

- Step 2: We use the new n8n AI Classifier Node to classify your email based on its content. You might need to update to n8n 1.94 version to make it work.
*Note: we like to use Gemini AI for that classifier as it's the same company as Gmail, so should be safe with data*

- Step 3: After classifying the message, we label the message with the appropriate label. 
*Note: you need to create the labels before in your Gmail account*

- Step 4: For a certain category (e.g. "Business" you format the message and save it into your InfraNodus graph. 
*Note: specify your [InfraNodus API](https://infranodus.com/api-access) here and choose the name of the graph. It will use the [InfraNodus HTTP `graphAndEntries` endpoint](https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points) and save your data to an InfraNodus graph. 
By default, we save the text knowledge graph using the  `contextSettings` parameters (it will only build a text graph of the content), but you can take an alternative setting from this InfraNodus HTTP node's settings and create a social knowledge graph, that will also show email senders in the graph itself.*

- Step 5 (optional): Generate an interesting insight question with the [`graphAndAdvice` endpoint]((https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points)) of InfraNodus. 

- Step 6 (optional): Then send this insight via Telegram to a chat.

- Step 7 (optional): Link some important labels to the second Telegram notification node, so you receive important messages for specified labels.


- Step 8 (optional): Send a Telegram notification 

We use Telegram, because it takes only 30 seconds to set up a bot with an API (send `/newbot` to [@botfather](https://t.me/botfather), unlike Discord or Slack, which is long and cumbersome to set up. You can also attach a Gmail send node and generate an email instead. 


## How to use

You need an [InfraNodus GraphRAG API account and key](https://infranodus.com/use-case/ai-knowledge-graphs) to use this workflow. 

- Create an [InfraNodus](https://infranodus.com) account or log in.
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.
- Add this Authorization code in Steps 4 and 5 of the workflow.  
- Come up with the name of the graph and change it in the HTTP InfraNodus nodes in the steps 4 and 5 and also in the Telegram node in Step 6 that sends a link to the graph.
- For additional text processing / idea generation settings you can use in the HTTP InfraNodus nodes, see the [InfraNodus access points](https://support.noduslabs.com/hc/en-us/articles/13605983537692-InfraNodus-API-Access-Points) page. For example, in Step 4 you can change the text processing settings to build a social knowledge graph (settings are available in the Node's Notes section) and in Step 5 you can change the `requestMode` from `question` to `idea` to receive business ideas instead.
- Authorize your Gmail account for Steps 2, 3, 7 and 8 Gmail nodes. The easiest way to set it up is to open a free Google Console API account and to create an OAuth access point for n8n. You can then reuse it with other Google services like Google Sheets, Drive, etc. So it's a useful thing to have in general.
- Set up the Gemini AI API key using the instructions in the Step 2 Gemini AI classification node.
- Set up the Telegram node bot for the Step 8. It takes only 30 seconds: just go to [@botfather](https://t.me/botfather) and type in `/newbot` and you'll have an API key ready. To get the conversation ID, follow the n8n / Telegram instructions in the node itself. 
- Once everything is ready, try to run the default automated workflow to test if everything works well. 

## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- An Google Cloud API OAuth client and key for Gmail access
- A Gemini AI API key
- A Telegram bot API key
- n8n version 1.94 and higher (for Text Classification AI node to work)


## Customizing this workflow

Check our **other n8n workflows** at [https://n8n.io/creators/infranodus/](https://n8n.io/creators/infranodus/) for useful content gap analysis, expert panel, and marketing, and research workflows that utilize GraphRAG for better AI generation.

Finally, check out [https://infranodus.com](https://infranodus.com) to learn more about our **network analysis technology** used to build knowledge graphs from text.

For **support**, please, contact [https://support.noduslabs.com](https://support.noduslabs.com)

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Gmail Trigger, OpenAI Chat Model, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
