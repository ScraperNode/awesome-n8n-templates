# 📖 Use skills In n8n agent node

> ⚡ **4,566 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This template gives you a framework to use skills in any n8n agent. You can use this as a starting point and add any other tools or patterns needed for your use case.

### What are “skills”?

Skills are a context management standard created by Anthropic for use in Claude code. Basically, instead of having a HUGE system prompt, skills split that into lots of small, structured instruction files that tell an agent *how* to do a specific kind of task. Instead of stuffing a massive prompt full of rules, the agent:

* finds the relevant skill file
* reads it
* and follows the steps inside

It’s a simple pattern that makes managing system prompts for general purpose agents much more straightforward.

See an example of a skills repo [here](https://github.com/anthropics/knowledge-work-plugins).

### What this workflow does

* Responds to messages in n8n Chat (or Chat Hub)
* Builds an “available skills” index from one or more GitHub repos
* Lets the agent browse folders + fetch skill files (Markdown) as needed
* Uses the skill content to guide how it completes tasks

### How it (roughly) works

1. A chat message comes in.
2. The workflow lists directories in the configured skills repos (root + `/skills` if present), filters out noise, and merges everything into one directory map.
3. That directory map gets injected into the agent’s system prompt so it knows what skill files exist.
4. When it needs instructions, it uses tools:

   * **List Files by Path Name** to explore folders
   * **Get a File From GitHub** to pull the skill file as raw text (no base64)

### Same “skills” pattern as the CLI tools

The flow is: find a skill → open it → follow the steps, the same way it works in the CLI tools, but running inside n8n, so you **don’t need to download or install anything locally**.

### How to set it up
1. (Required) Add your GitHub credentials to each node that needs it
2. (Required) Add your OpenRouter credentials to the chat node or replace with the provider of your choosing
3. (Optional) Add more repos to `SKILLS_REPOS` (any skills GitHub repo works as long as your credentials have access to it, such as any public repo)
4. (Optional) Add more tools and turn it into whatever agent you actually need

## 🔗 Nodes Used

GitHub, Filter, AI Agent, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
