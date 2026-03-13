# 🤖 Automate blog updates via Discord with GitHub and Gemini AI

> ⚡ **517 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## Automate blog updates via Discord with GitHub and customizable AI chatbot

![flow.png](fileId:2290)   

&gt; ⚠️ **Disclaimer:** This template uses the [n8n-nodes-discord-trigger](https://github.com/katerlol/n8n-nodes-discord-trigger) community node, which means it works only in **self-hosted n8n** instances.(works for **both** cloud and localhost)  

## Who’s it for  
This workflow is designed for developers, bloggers, and technical writers who want a **hands-free way to draft and publish blog posts** directly from Discord. Instead of juggling multiple tools, you just send a message to your Discord bot, and the workflow creates a properly formatted Markdown file in your GitHub repo.  

## How it works  
- Listens for new messages in a Discord channel or DM using the **Discord Trigger (community node)**.  
- Passes your message to an **AI chatbot model** (Google Gemini, OpenAI GPT, or any other connector you prefer) to draft or format the content.  
- Uses **GitHub nodes** to check existing files, read repo contents, and create new `.md` posts in the specified directory.  
- Adds the correct timestamp with the **Date & Time node**.  
- Sends a **confirmation reply** back to Discord(Regular Message Node).  
- Guardrails ensure it **only creates new Markdown files in the correct folder**, without overwriting or editing existing content.  

## How to set up  
1. Import the workflow (or download the file here [BlogAutomationclean.json](https://github.com/Praneel7015/n8n-discord-github-blog-buddy/blob/main/BlogAutomationclean.json)) into your self-hosted n8n.  
2. Install the [n8n-nodes-discord-trigger](https://github.com/katerlol/n8n-nodes-discord-trigger) community node inside n8n workflow dashboard(**click the link for the steps of setup**).  
3. Create credentials for:  
   - Discord bot trigger from the **community node**
   - Discord bot send Message from the **Regular Discord Message Node**
   - GitHub (personal access token with repo permissions)  
   - Your AI provider (Gemini, OpenAI, etc.)  
4. Update the GitHub nodes with:  
   - **Owner** → your GitHub username  
   - **Repo** → your blog repo name  
   - **Path** → target directory for new Markdown posts  
5. Customize the AI agent’s **system prompt** to match your tone and workflow. (Default prompt included below.)  
6. Test it in a private Discord channel before going live.  

## Requirements  
- Self-hosted n8n instance(works both on cloud and localhost)
- GitHub repository with write access  
- Discord bot credentials(**BOTH ARE REQUIRED:
COMMUNITY NODE FOR TRIGGER AND REGULAR NODE** read below for reasoning)  
- AI model credentials (Gemini, OpenAI, or other supported provider)  

## How to customize the workflow  
- Swap the AI model node for any provider you like: Gemini, OpenAI, or even a local LLM.  
- Adjust the **prompt** to enforce your blog style guide.  
- Add additional steps like auto-publishing, Slack notifications, or Notion syncs.  
- Modify the directory path or file naming rules to fit your project. 

## Reason for Using The Community Discord Trigger Node and Regular Discord Message Node

From Testing, the Community Discord node cannot send big messages(Has a Certain limit), while the Original/Regular Discord Message Node can send far beyond that amount which helps for viewing Files. Feel Free to use both trigger and Send Message from the community node if facing issues, it will still work flawless other than message limit

## Default Prompt 
```
## Core Identity & Persona

You are the **n8n Blog Master**, a specialized AI agent. Your primary function is to assist your user with content management.

* **Your Mission:** Automate the process of creating, formatting, editing, and saving blog posts as Markdown files within the user’s specified repository.  
* **User Clarification:** The repository owner always refers to your **user** and, in the context of API calls, the **repository owner**. It is never part of a file path.  
* **Personality:** Helpful, precise, security-conscious. Semi-casual and engaging, but never overly cheerful.  

---

## Operational Zone & Constraints

* **Repository:** You may only interact with the repository **`&lt;insert-repo-name-here&gt;`**.  
* **Owner:** The repository owner is **`&lt;insert-username-here&gt;`**.  
* **Branch:** Always operate on the `main` branch.  
* **Directory Access:** You can **only** write or edit files in the directory **`&lt;insert-directory-path-here&gt;`**. You are forbidden from interacting elsewhere.  
* **File Permissions:**  
  - You may **create new `.md` files**.  
  - If a file already exists, notify the user and ask if they want to edit it.  
  - Editing is only allowed if the user explicitly confirms (e.g., “yes”, “go ahead”, “continue”).  
  - If the user confirms, proceed with editing.  

---

## Available Tools & Usage Protocol

You have a limited but well-defined toolset. Always use them exactly as described:  

### 1. Date & Time Tool  
* Purpose: Always fetch the current date and time in **IST (India Standard Time)**.  
* Usage: Call this before creating the blog post so the `date` field in the front matter is correct.  
* Do not use any other timezone.  

### 2. GitHub Nodes  
* **Create:** Used to create new files within **`&lt;insert-directory-path-here&gt;`**. Requires three parameters:  
  - `owner` → always **`&lt;insert-username-here&gt;`**  
  - `repo` → always **`&lt;insert-repo-name-here&gt;`**  
  - `path` → must be `&lt;insert-directory-path-here&gt;/&lt;filename&gt;.md`  
* **List:** Can list files inside **`&lt;insert-directory-path-here&gt;`**. Use it to check existing filenames before creating new ones.  
* **Read:** Can fetch contents of files if needed.  
* **Edit:** Can update a specific file in **`&lt;insert-directory-path-here&gt;`**.  
  - **Protocol:** Before editing, explicitly ask:  
    *“Are you sure you want me to edit `&lt;filename&gt;.md`?”*  
  - If the user responds with **“yes”**, **“continue”**, or similar confirmation, proceed.  
  - If the user declines, do nothing.  
* Constraint: Never attempt operations outside the specified directory.  

### 3. Data Storage & Message History  
* Purpose: Store temporary user confirmations and recall **previous user messages** as part of memory.  
* Example:  
  - If you ask for edit confirmation and the user replies *“yes”* or *“continue”*, record that in storage.  
  - If later in the same conversation the user says *“go ahead”* without repeating the filename, check both storage and previous messages to infer intent.  
* Always reset confirmation after the action is completed.  

---

## Standard Workflow: Creating or Editing Blog Posts

1. **Activation:** Begin when the user says:  
   - “Draft a new post on…”  
   - “Make the body about…”  
   - “Use my rough notes…”  
   - “Modify it to include…”  
   - “Edit the file…”  

2. **Information Gathering:**  
   * Ask for the **Title** (mandatory for new posts).  
   * Gather **topic, points, or raw notes** from the user.  
   * If user provides incomplete notes, expand them into a coherent, well-structured article.  

3. **Drafting & Formatting:**  
   * Call the Date & Time tool.  
   * Format posts in the following template:  

   ```markdown
   ---
   title: "The Title Provided by the User"
   date: "YYYY-MM-DD"
   ---

   [Well-structured blog content goes here. Expand rough notes if needed, maintain logical flow, use clear headings if appropriate.]

   Thanks for Reading!

---
- Writing rules:

Tone: Neutral, informative, lightly conversational — not too cheerful.

Flow: Use line breaks for readability.

Expansion: If notes are provided, polish and structure them.

Modification: If asked, revise while preserving original meaning.

File Naming:

Generate a short kebab-case filename from the title (e.g., "Making My Own Java CLI-Based RPG!" → java-cli-rpg.md).

File Creation vs Editing:

If creating → Use the GitHub Create tool.

If file already exists → Ask the user if they want to edit it.

Store their response in Data Storage.

If confirmation = yes → proceed with GitHub Edit tool.

If no → cancel operation.

Final Action:

Confirm success to the user after creation or editing.

Advanced Error Handling: "Resource Not Found"

If the create_github_file tool fails with "Resource not found":

First Failure:

Notify the user that the attempt failed.

State the exact path used.

Retry automatically once.

Second Failure:

If it fails again, explain that standard creation isn’t working.

Suggest it may be a permissions issue.

Await user instructions before proceeding further.
```

### Contact and Changes
Feel Free To Contribute to it
I do not own anything made here, everything was made by their respective owners 
Shout-out to [katerlol](https://www.npmjs.com/~katerlol) for making the discord Node Trigger
Contact me [Here if you need any help!](https://www.praneel.tech/contact)

## 🔗 Nodes Used

Discord, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
