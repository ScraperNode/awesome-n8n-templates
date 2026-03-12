# ⚡ Build a personalized birthday AI companion with GPT-4 and PostgreSQL

> ⚡ **537 views** · ⚡ [Personal Productivity](../)

## Description

# Idea
The idea for app came since I wanted to build a unique gift for my niece because she gets excited for her birthday (which Im going to miss this year). 
The web app has a simple countdown (in html and JS) but more importantly, there is an AI agent that will answer some specific questions and know her preferences.

## How it works
The questions from app are sent via web hook to N8N which has pulls preferences file (about her likes, dislikes, personality) from postgre and AI Agent that will answer questions/respond. The current status is stored back in postgre (especially about status of cat and universe happenings) before responding back. 

## Features
- Integrated AI chatbot via N8N webhook
- Persistent conversation history
- Minimizable chat interface
- Fallback support for offline testing
- Features: 
-- Wheres Mittens - This is a query to track her lost cat in multiverse.
-- Multiverse updates with recent update stored

## Pre Requisites
- Postgre SQL database is available. Alternatively, use any other database but change the N8N nodes.
- LLM Api Key.

## Step by Step Instructions
1. Export this N8N Workflow.
2. Modify LLM API Key, I used openAI, 4.1
3. For web app scofflding,you will need Node, HTML and Javascript. I've created a mini version using Node and JS with web app and N8N connection settings here: &lt;https://github.com/productiser/FiBirthdayAgent&gt;
4. PostgreSQL Database Script (1 table for memory and context storage): 
```
CREATE TABLE fifi_world_context (
    id TEXT PRIMARY KEY, -- e.g., 'agent_fifi'
    
    cat_location TEXT,        -- e.g., "Bubble Nebula"
    cat_activity TEXT,        -- e.g., "Playing laser tag with moon mice"

    fifi_preferences JSONB,   -- e.g., likes/dislikes/foods/shows
    world_history TEXT,       -- Summary of narrative events

    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
5.Modify system prompt as per your needs. 


### Built With
N8N Self hosted
Self hosted web app
Hosted on Vercel
Total spend = &lt;£1 (AI costs only)
Total Time = &lt;1 day

### Support
Watch this video for web app overview and how it looks. 
&lt;https://youtu.be/e7PlrTdvwoM&gt;


Contact me on info@pankstr.com/ superllmuser@gmail.com for any queries

Hope you enjoy!!![FiBirthdayMultiverseFlow.jpg](fileId:1684)

## 🔗 Nodes Used

Postgres, Webhook, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
