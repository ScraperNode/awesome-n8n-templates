# ⚒️ Create multi-step reasoning AI agents with GPT-4 and reusable thinking tools

> ⚡ **2,663 views** · ⚒️ [Engineering](../)

## Description

Unlock a new level of sophistication for your AI agents with this template. While the native n8n **Think Tool** is great for giving an agent an internal monologue, it's limited to one instance. This workflow provides a clever solution using a sub-workflow to create **multiple, custom thinking tools**, each with its own specific purpose.

This template provides the foundation for building agents that can plan, act, and then reflect on their actions before proceeding. Instead of just reacting, your agent can now follow a structured, multi-step reasoning process that you design, leading to more reliable and powerful automations.

## **Who is this for?**

* **AI and automation developers:** Anyone looking to build complex, multi-tool agents that require robust logic and planning capabilities.
* **LangChain enthusiasts:** Users familiar with advanced agent concepts like ReAct (Reason-Act) will find this a practical way to implement similar frameworks in n8n.
* **Problem solvers:** If your current agent struggles with complex tasks, giving it distinct steps for planning and reflection can dramatically improve its performance.

## **What problem does this solve?**

* **Bypasses the single "Think Tool" limit:** The core of this template is a technique that allows you to add as many distinct thinking steps to your agent as you need.
* **Enables complex reasoning:** You can design a structured thought process for your agent, such as "Plan the entire process," "Execute Step 1," and "Reflect on the result," making it behave more intelligently.
* **Improves agent reliability and debugging:** By forcing the agent to write down its thoughts at different stages, you can easily see its line of reasoning, making it less prone to errors and much easier to debug when things go wrong.
* **Provides a blueprint for sophisticated AI:** This is not just a simple tool; it's a foundational framework for building state-of-the-art AI agents that can handle more nuanced and multi-step tasks.

## **How it works**

1.  **The re-usable "Thinking Space":** The magic of this template is a simple sub-workflow that does nothing but receive text. This workflow acts as a reusable "scratchpad."
2.  **Creating custom thinking tools:** In the main workflow, we use the **Tool (Workflow)** node to call this "scratchpad" sub-workflow multiple times. We give each of these tools a unique name (e.g., `Initial thoughts`, `Additional thoughts`).
3.  **The power of descriptions:** The key is the **description** you give each of these tool nodes. This description tells the agent *when* and *how* it should use that specific thinking step. For example, the `Initial thoughts` tool is described as the place to create a plan at the start of a task.
4.  **Orchestration via system prompt:** The main **AI Agent's** system prompt acts as the conductor, instructing the agent on the overall process and telling it about its new thinking abilities (e.g., "Always start by using the `Initial thoughts` tool to make a plan...").
5.  **A practical example:** This template includes two thinking tools to demonstrate a "Plan and Reflect" cycle, but you can add many more to fit your needs.

## **Setup**

1.  **Add your own "action" tools:** This template provides the *thinking framework*. To make it useful, you need to give the agent something to do. Add your own tools to the **AI Agent**, such as a web search tool, a database lookup, or an API call.
2.  **Customize the thinking tools:** Edit the **description** of the existing `Initial thoughts` and `Additional thoughts` tools. Make them relevant to the new action tools you've added. For example, "Plan which of the web search or database tools to use."
3.  **Update the agent's brain:** Modify the **system prompt** in the main **AI Agent** node. Tell it about the new action tools you've added and how it should use your customized thinking tools to complete its tasks.
4.  **Connect your AI model:** Select the **OpenAI Chat Model** node and add your credentials.


## **Taking it further**

* **Create more granular thinking steps:** Add more thinking tools for different stages of a process, like a "Hypothesize a solution" tool, a "Verify assumptions" tool, or a "Final answer check" tool.
* **Customize the thought process:** You can change *how* the agent thinks by editing the prompt inside the `fromAI('Thoughts', ...)` field within each tool. You could ask for thoughts in a specific format, like bullet points or a JSON object.
* **Change the workflow trigger:** Switch the chat trigger for a Telegram trigger, email, Slack, whatever you need for your use case!
* **Integrate with memory:** For even more power, combine this framework with a long-term memory solution, allowing the agent to reflect on its thoughts from past conversations.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
