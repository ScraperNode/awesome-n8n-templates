# ⚒️ Scalable multi-agent chat using @mentions

> ⚡ **16,419 views** · ⚒️ [Engineering](../)

## Description

### Summary

Engage multiple, uniquely configured AI agents (using different models via OpenRouter) in a single conversation. Trigger specific agents with @mentions or let them all respond. Easily scalable by editing simple JSON settings.

### Overview

This workflow is for users who want to experiment with or utilize multiple AI agents with distinct personalities, instructions, and underlying models within a single chat interface, without complex setup. It solves the problem of managing and interacting with diverse AI assistants simultaneously for tasks like brainstorming, comparative analysis, or role-playing scenarios.

It enables dynamic conversations with multiple AI assistants simultaneously within a single chat interface. You can:

* Define multiple unique AI agents.
* Configure each agent with its own name, system instructions, and LLM model (via OpenRouter).
* Interact with specific agents using `@AgentName` mentions.
* Have all agents respond (in random order) if no specific agents are mentioned.
* Maintain conversation history across multiple turns.

It's designed for flexibility and scalability, allowing you to easily add or modify agents without complex workflow restructuring.

### Key Features

* **Multi-Agent Interaction:** Chat with several distinct AI personalities at once.
* **Individual Agent Configuration:** Customize name, system prompt, and LLM for each agent.
* **OpenRouter Integration:** Access a wide variety of LLMs compatible with OpenRouter.
* **Mention-Based Triggering:** Direct messages to specific agents using `@AgentName`.
* **All-Agent Fallback:** Engages all defined agents randomly if no mentions are used.
* **Scalable Setup:** Agent configuration is centralized in a single Code node (as JSON).
* **Conversation Memory:** Remembers previous interactions within the session.

### How to Set Up

1.  **Configure Settings (Code Nodes):**
    * Open the `Define Global Settings` Code node: Edit the JSON to set user details (name, location, notes) and add any system message instructions that *all* agents should follow.
    * Open the `Define Agent Settings` Code node: Edit the JSON to define your agents. Add or remove agent objects as needed. For each agent, specify:
        * `"name"`: The unique name for the agent (used for @mentions).
        * `"model"`: The OpenRouter model identifier (e.g., `"openai/gpt-4o"`, `"anthropic/claude-3.7-sonnet"`).
        * `"systemMessage"`: Specific instructions or persona for *this* agent.
2.  **Add OpenRouter Credentials:**
    * Locate the `AI Agent` node.
    * Click the `OpenRouter Chat Model` node connected below it via the `Language Model` input.
    * In the 'Credential for OpenRouter API' field, select or create your OpenRouter API credentials.

### How to Use

1.  Start a conversation using the Chat Trigger input.
2.  To address specific agents, include `@AgentName` in your message. Agents will respond sequentially in the order they are mentioned.
    * *Example:* `"@Gemma @Claude, please continue the count: 1"` will trigger Gemma first, followed by Claude.
3.  If your message contains no `@mentions`, *all* agents defined in `Define Agent Settings` will respond in a randomized order.
    * *Example:* `"What are your thoughts on the future of AI?"` will trigger Chad, Claude, and Gemma (based on your default settings) in a random sequence.
4.  The workflow will collect responses from all triggered agents and return them as a single, formatted message.

### How It Works (Technical Details)

1.  **Settings Nodes:** `Define Global Settings` and `Define Agent Settings` load your configurations.
2.  **Mention Extraction:** The `Extract mentions` Code node parses the user's input (`chatInput`) from the `When chat message received` trigger. It looks for `@AgentName` patterns matching the names defined in `Define Agent Settings`.
3.  **Agent Selection:**
    * If mentions are found, it creates a list of the corresponding agent configurations in the order they were mentioned.
    * If no mentions are found, it creates a list of *all* defined agent configurations and shuffles them randomly.
4.  **Looping:** The `Loop Over Items` node iterates through the selected agent list.
5.  **Dynamic Agent Execution:** Inside the loop:
    * An `If` node (`First loop?`) checks if it's the first agent responding. If yes (`true` path -&gt; `Set user message as input`), it passes the original user message to the Agent. If no (`false` path -&gt; `Set last Assistant message as input`), it passes the *previous* agent's formatted output (`lastAssistantMessage`) to the *next* agent, creating a sequential chain.
    * The `AI Agent` node receives the input message. Its `System Message` and the `Model` in the connected `OpenRouter Chat Model` node are dynamically populated using expressions referencing the current agent's data from the loop (`{{ $('Loop Over Items').item.json.* }}`).
    * The `Simple Memory` node provides conversation history to the `AI Agent`.
    * The agent's response is formatted (e.g., `**AgentName**:\n\nResponse`) in the `Set lastAssistantMessage` node.
6.  **Response Aggregation:** After the loop finishes, the `Combine and format responses` Code node gathers all the `lastAssistantMessage` outputs and joins them into a single text block, separated by horizontal rules (`---`), ready to be sent back to the user.

### Benefits

* **Scalability & Flexibility:** Instead of complex branching logic, adding, removing, or modifying agents only requires editing simple JSON in the `Define Agent Settings` node, making setup and maintenance significantly easier, especially for those managing multiple assistants.
* **Model Choice:** Use the best model for each agent's specific task or persona via OpenRouter.
* **Centralized Configuration:** Keeps agent setup tidy and manageable.

### Limitations

* **Sequential Responses:** Agents respond one after another based on mention order (or randomly), not in parallel.
* **No Direct Agent-to-Agent Interaction (within a turn):** Agents cannot directly call or reply to each other *during* the processing of a single user message. Agent B sees Agent A's response only because the workflow passes it as input in the next loop iteration.
* **Delayed Output:** The user receives the combined response only *after* all triggered agents have completed their generation.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
