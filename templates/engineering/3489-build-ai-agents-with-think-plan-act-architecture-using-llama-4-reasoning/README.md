# ⚒️ 🧠 Build AI agents with Think-Plan-Act architecture using Llama-4 reasoning

> ⚡ **1,140 views** · ⚒️ [Engineering](../)

## Description

![image.png](fileId:1106)

🧠 A plug-and-play n8n workflow that adds LLM-powered reasoning, planning, and action to your automations — with prompts, schemas, and full agent logic included.

**Ever wish your n8n flows could think before they act?**

**Now they can.** Say hello to the ultimate agent-based upgrade:

**"Think → Plan → Act"** – fully automated. Fully intelligent.⚡

🧩 **What Is This?**
This product is a ready-to-use AI-powered workflow template for n8n, featuring a smart “Thinking Agent” that:

🧠 Analyzes tasks
📋 Generates a step-by-step plan
🛠️ Executes actions intelligently
🧾 Returns structured JSON outputs for your next steps

Inspired by the Hugging Face agent architecture, this template gives your automations a brain before they press the red button. 🔴✅

**A clean 2-step process:**
THINK mode → Generates structured reasoning (goal, subgoals, tools, assumptions)
ACT mode → Executes subgoals step-by-step using tools and AI.

🧬 **What's Inside?**
This isn’t just a flow — it’s a framework. You get:
🔹 Modular Agent Loop
🔹 A demonstration workflow

📝 **Requirements**
🔹 OpenRouter API Key (or any other provider like OpenAI, groq...)

🔹 **Built-in Parsers**
🧾 Structured JSON parser for reliable outputs
🪄 Natural language and unstructured parsing fallback

🛠️ Plug in your own goals, tools, and OpenRouter keys

📦 **Includes a demo (e.g., “get the weather”) to get started fast**

💡 **Why You'll Love It**
✅ Plug & Play – Drop into any existing n8n flow
✅ Tool-Aware Reasoning – Plans include which tool to use and why
✅ Composable – Build workflows like agents: Reason → Plan → Execute
✅ Customizable by anyone – Even your intern can tweak the prompts

⚙️ **Agent customization**
🔹 Feel free to customize the agent settings by changing the `Config` node. Here's the default configuration:

```ts
const config = {
  THINK: {
    CONTEXT: ``, // Add the necessary context to the AI.
    CONSTRAINTS: [`Rule 1`, `Rule 2`], // here are the rules that your AI should follow
    TOOLS: [
      {
        tool: "",
        description: "",
      },
    ], // add here the list of the tools that the AI will call in your backend or workflow.
  },
};

return {
  json: {
    config: config,
    input: $input.last().json,
  },
};
```
After updating the configuration file, you will see the AI reasoning for your input. Feel free to connect with any other node creating smart tasks!

## 🔗 Nodes Used

Webhook, AI Agent, Auto-fixing Output Parser, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
