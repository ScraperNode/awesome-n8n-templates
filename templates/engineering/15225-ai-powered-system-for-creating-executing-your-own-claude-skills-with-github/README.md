# ⚒️ AI-powered system for Creating & Executing your own Claude Skills 🤹 with GitHub

> ⚡ **496 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow implements an advanced AI-powered system for **generating, and executing Claude Skills stored on GitHub**.

When creating a skill, the workflow:

* Uses an AI agent to generate a properly structured **SKILL.md** file
* Extracts and formats the skill content
* Saves it automatically into a GitHub repository under a structured `/skills` directory

When executing a skill, the workflow:

* Dynamically lists available skills from GitHub 
* Navigates directories to find the correct skill files
* Retrieves their content via API
* Executes instructions strictly based on those files using an AI agent

---

### Key Benefits

#### 1. ✅ **Dynamic Skill Execution**

The system doesn’t rely on hardcoded logic. It retrieves and executes skills directly from GitHub, making it highly flexible and extensible.

#### 2. ✅ **Self-Extending Architecture**

New capabilities can be added simply by creating new skills. The workflow automatically integrates them without requiring changes to the core system.

#### 3. ✅**Separation of Logic and Execution**

All instructions are stored in external skill files, keeping the workflow clean, modular, and easy to maintain.

#### 4. ✅ **Automated Skill Creation**

The workflow can generate complete Claude Skills (including structured documentation) and publish them to GitHub without manual intervention.

#### 5. ✅ **Multi-Model Intelligence**

By combining OpenAI and Anthropic models, the system leverages different strengths (reasoning, generation, structure).

#### 6. ✅  **Context-Aware Conversations**

Memory nodes allow the system to maintain session context, improving continuity and personalization.

#### 7. ✅ **Reliable Output Handling**

Structured output parsing ensures decisions (like whether to proceed or ask for more info) are deterministic and machine-readable.

#### 8. ✅ **Up-to-Date Knowledge via Context7**

Before generating skills, the system fetches real documentation, reducing hallucinations and ensuring accuracy.

#### 9. ✅ **GitHub as a Skill Registry**

Using GitHub as a storage layer provides:

* Version control
* Collaboration
* Transparency
* Easy scaling

#### 10. ✅ **Agent-Based Orchestration**

The workflow uses multiple specialized AI agents, each with a clear responsibility (validation, generation, execution), improving robustness and clarity.

---

### How it works

1. **Creating new skills** interactively with the help of a dedicated agent that uses Context7 for up‑to‑date documentation.
2. **Executing existing Claude skills** stored in a GitHub repository (Claude Skills + Github System)

#### Creation flow (making a new skill)

1. The *AI Conversational Agent* decides if the user is trying to create a skill and whether enough information is available.  
2. If information is missing, the user is asked for clarification via the *More info* node.  
3. Once ready, the *Claude Skills Creator Agent* takes over.  
4. This agent **always consults Context7** to fetch documentation for any libraries/APIs involved.  
5. It then generates a properly formatted `SKILL.md` file (with YAML frontmatter, imperative style, ≤500 lines).  
6. The *Extract Skill MD* node parses the generated output.  
7. The *SKILL.md Parser* converts the markdown into binary data.  
8. The *Create a Skill* node uploads the file to the correct path in the GitHub repository (`skills/&lt;skill‑name&gt;/SKILL.md`).  
9. Finally, the *Skill created* node confirms success in the chat.

#### Execution flow (using skills)

1. A chat message arrives → the workflow checks if the user wants to **create a skill** (via the *AI Conversational Agent*).  
2. If the request is **not about creating a skill**, it proceeds to the *Skills Agent*.  
3. The *Skills Agent* first receives a list of all skill directories from GitHub (via the *List Skills* node).  
4. It then uses two GitHub tools to explore those directories:  
   - *List Files* – to browse the contents of a skill folder.  
   - *Get File from Skill* – to fetch the actual `SKILL.md` or other resources.  
5. The agent follows the instructions found in the skill files (not its own general knowledge) and produces an answer.  
6. The final answer is sent back to the chat via the *Respond* node.  
7. A *Simple Memory* node maintains conversation context across turns.
8. 
---

### Set up steps

#### Prerequisites
- A **GitHub account** and a **repository** for storing skills (in the workflow: `https://github.com/n3witalia/my-skills`).
Create inside a repo a folder called `skills`
- An **OpenAI** or **Anthropic** API key (the workflow uses Anthropic Claude models, but also includes an OpenAI node for extraction).
- A **Context7 API key** (for retrieving library documentation during skill creation).

#### Step‑by‑step configuration

1. **Import the workflow**  
   - Copy the JSON definition into a new n8n workflow.

2. **Configure credentials**  
   - **GitHub API** – add your personal access token (with `repo` scope).  
   - **Anthropic API** – add your API key.  
   - **OpenAI API** – add your API key (used only by the *Extract Skill MD* node).  
   - **Context7** – add your API key (used as HTTP Header Auth).

3. **Update GitHub repository details**  
   - In the *List Skills*, *List Files*, *Create a Skill*, and *Get File from Skill* nodes, replace `n3witalia/my-skills` with your own GitHub organisation and repository name.

4. **Adjust the chat trigger**  
   - Set the *Webhook URL* of the *When chat message received* node so your front‑end can post messages to it.

5. **Review agent prompts**  
   - Open the *Claude Skills Creator Agent* and check the system prompt (it enforces Context7 usage, skill format, and output rules). Modify if needed.

6. **Set up memory**  
   - The workflow uses three *Simple Memory* nodes. Each is configured with a session key derived from `Set chatbot vars.sessionId`. Ensure your chat front‑end sends a unique `sessionId` to keep conversations separate.

7. **Test the workflow**  
   - Send a message like *“create a skill for working with PDFs”* – the agent should ask questions, call Context7, and propose a skill.  
   - Send a normal request like *“list all my skills”* – the *Skills Agent* should list directories from your GitHub repo.

8. **Activate the workflow**  
   - Toggle the workflow from **inactive** to **active** (top‑right corner in n8n). The webhook will start listening for chat messages.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

GitHub, AI Agent, Anthropic Chat Model, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
