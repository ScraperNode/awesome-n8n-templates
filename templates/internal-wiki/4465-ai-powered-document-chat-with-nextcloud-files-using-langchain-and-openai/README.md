# 📖 AI-powered document chat with Nextcloud files using LangChain and OpenAI

> ⚡ **2,216 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

### Main Workflow “AI Nextcloud”

* **Entry point**: A public chat-trigger greets the user; every incoming chat message starts the flow.
* **AI agent**: A LangChain agent (“AI Nextcloud”) uses the configured OpenAI model plus short-term memory to continue the dialogue in context.
* **Purpose**: Answers questions about files stored in a Nextcloud folder. The user simply includes the folder path in their question.
* **Tool integration**: Calls the sub-workflow “Nextcloud Tool” whenever it needs to read files and pass their text back to the AI.

---

### Sub-Workflow “Nextcloud Tool”

1. **Invocation**: Triggered by other workflows with the input parameter `path` (folder path).
2. **File listing**: Retrieves every file in the specified folder via the Nextcloud API.
3. **Filter**: Allows only readable formats (PDF, Markdown, DOCX).
4. **Download & text extraction**

   * **PDF** → Text via *Extract From File*
   * **Markdown** → Raw text
   * **DOCX** → Text via community node *word2text*
5. **Aggregation**: Combines all extracted text into a single `output` field and returns it.

&gt; **Outcome**: Each call yields the plain content of every supported file in a Nextcloud folder—providing rich context for the AI agent to answer user questions accurately.

## 🔗 Nodes Used

Nextcloud, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
