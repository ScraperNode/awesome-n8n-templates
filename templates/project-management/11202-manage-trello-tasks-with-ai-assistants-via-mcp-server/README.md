# 📋 Manage Trello tasks with AI assistants via MCP server

> ⚡ **242 views** · 📋 [Project Management](../)

## Description

A lean MCP Server that exposes the essential Trello tools for everyday task management. Built for clean, reliable LLM automation with n8n, ChatGPT, or Gemini.

# Description  
A minimal MCP Server offering the core Trello operations—create, update, search, list, and comment—designed to keep task management simple and predictable.  
Each tool has a clear, LLM-friendly schema, ensuring safe automation without heavy context or complex payloads.

Use it to create tasks, move cards between lists, update details, add comments, or retrieve board structure. All through natural language.

---

# ⭐ Key Features

- **Lean Toolset** – only the operations needed for real task flows  
- **LLM-Ready** – minimal, explicit parameters for safe execution  
- **Extendable** – add more Trello endpoints or custom logic easily  
- **Predictable Updates** – partial updates with safe defaults  
- **MCP + Tool Calling** – works in n8n Agents, ChatGPT, Gemini, and MCP clients  

---

# 🧠 Examples (Natural Language)

**“What tasks do I still have pending from last week?”**  
→ Searches by due date and status for weekly planning.

**“Move all tasks due yesterday into today’s list and add a ‘rescheduled’ comment.”**  
→ Combines search + update + comment.

**“Create a new card called ‘Prepare onboarding materials’ for next Monday.”**  
→ Simple card creation with due date handling.

---

# ⚙️ How It Works

This MCP Server exposes 6 core tools:

### 📥 Create Card  
Create tasks with title, description, and optional due date.

### 🔍 Search Cards  
Find cards using Trello’s native search syntax (keywords, lists, due filters).

### 🗂 List Backlog & List All Lists  
Provide structure and situational awareness for agents.

### ✏️ Update Card  
Rename, update description, adjust due dates, or move cards.

### 💬 Add Comment  
Add quick notes to any card without modifying other fields.

---

# 🔐 Required Credentials

| Service | Use |
|--------|-----|
| Trello API | API Key + Token for card, list, search, and comment operations |

Use a dedicated Trello automation token for clean audit logs.
Please check [Authorizing With Trello's REST API](https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/)

---

# 🧰 Customization Tips

- Replace board/list IDs with your own  
- Add labels, checklists, or custom fields if needed  
- Add domain logic (priority rules, conventions, or workflows)  
- Use `list_all_lists` in agents to give LLMs workflow awareness  

---

# 🧠 Who It’s For

- Automation builders exploring MCP  
- AI assistants for personal task planning  
- Teams with simple Trello workflows  
- Consultants building lightweight agents  

---

# 🚀 Try It Out

1) Import the MCP workflow into n8n  
2) Add your Trello API credentials  
3) Replace IDs with your board/list values  
4) Test with ChatGPT or Gemini via natural-language prompts  
5) (Optional) Register it as an MCP Server in VS Code or any MCP client  

---

# 💬 Feedback Welcome

This MCP Server is intentionally simple and extendable.  
If you adapt or evolve it, I’d love to hear your ideas.

📧 [ascuncia.es@gmail.com](mailto:ascuncia.es+n8ncreator@gmail.com)

🔗 [Linkedin](https://www.linkedin.com/in/alejandro-scuncia-60a62348/)

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
