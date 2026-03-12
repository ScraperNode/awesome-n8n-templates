# 💬 Claude 3.7 Sonnet AI chatbot agent with Anthropic web search and think functions

> ⚡ **3,223 views** · 💬 [Support Chatbots](../)

## Description

This workflow builds a conversational AI chatbot agent using **Claude 3.7 Sonnet** model with the new . It enhances standard LLM capabilities with Anthropic’s features: **Web Search** and **Think**:

* **Real-time web search**, to answer up-to-date factual queries.
* A **“Think” function**, to support internal reasoning and memory-like behavior by Anthropic.
* A **memory buffer**, allowing the agent to maintain conversation history.
* A **system prompt** defining clear ethical, functional, and formatting rules for interaction.

When a user sends a message (trigger), the chatbot evaluates the query, optionally performs a web search if needed, processes the result using Claude, and responds accordingly.

---

### ✅ **Advantages**

* **🧠 Enhanced Reasoning Abilities**
  The *Think* tool allows the agent to simulate deep thought processes or contextual memory storage, improving conversational intelligence.

* **🌐 Real-Time Knowledge via Web Search**
  The integrated `web_search` tool enables the agent to fetch the latest information from the internet, making it ideal for dynamic or news-driven use cases.

* **🧾 Contextual Responses with Memory Buffer**
  The inclusion of a memory buffer allows the agent to maintain state across messages, improving dialogue flow and continuity.

* **🛡️ Built-in Ethical Guidelines**
  The system prompt enforces privacy, factual integrity, neutrality, and ethical response generation, making the agent safe for public or enterprise use.


---

### How It Works

1. **Chat Trigger**: The workflow begins when a chat message is received via a webhook. This triggers the AI Agent to process the user's query.  
2. **AI Agent Processing**: The AI Agent analyzes the query to determine if it requires information from the website or external sources. It follows a structured approach:  
   - For website-related queries, it uses the provided context.  
   - For external information, it employs the `web_search` tool to fetch up-to-date data from the internet.  
   - The `Think` tool is used for internal reasoning or caching thoughts without altering data.  
3. **Language Model**: The Anthropic Chat Model (Claude 3.7 Sonnet) generates responses based on the analyzed query, incorporating website context or web search results.  
4. **Memory**: A simple memory buffer retains context from previous interactions to maintain continuity in conversations.  
5. **Output**: The final response is delivered to the user, excluding internal processes like web searches or reasoning steps.  

--- 
### Set Up Steps

1. **Configure Nodes**:  
   - **Chat Trigger**: Set up the webhook to receive user messages.  
   - **AI Agent**: Define the system message and rules for handling queries.  
   - **Anthropic Chat Model**: Select the Claude 3.7 Sonnet model and configure parameters like `maxTokensToSample`.  
   - **Memory**: Initialize the memory buffer to store conversation context.  
   - **Tools**:  
     - `web_search`: Configure the HTTP request to the Anthropic API for web searches, including headers and authentication.  
     - `Think`: Set up the tool for internal reasoning.  

2. **Connect Nodes**:  
   - Link the Chat Trigger to the AI Agent.  
   - Connect the Anthropic Chat Model, Memory, and Tools (`web_search` and `Think`) to the AI Agent.  

3. **Credentials**:  
   - Ensure the Anthropic API credentials are correctly configured for both the chat model and the `web_search` tool.  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, Simple Memory, Chat Trigger, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
