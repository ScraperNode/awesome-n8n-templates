# 💬 Telegram bot with menu-driven commands

> ⚡ **19,008 views** · 💬 [Support Chatbots](../)

## Description

This template provides a structured way to build Telegram bots that respond to specific commands and handle user input. It allows users to interact with your bot by selecting options from a Telegram bot menu, *without* needing to type out full instructions or rely on conversational AI. This approach offers precise control and predictable behavior for command-driven interactions.

**Key Features:**

*   🤖 **Structured Command Handling:** Unlike approaches that rely on conversational AI (like the "AI Agent" node), this template provides a *deterministic* way to handle specific commands triggered by users selecting options from a Telegram bot menu. Users do *not* need to write out full instructions.
*   ➕ **Command-Based Interaction (Extensible):** Ready to process three commands (`/command1`, `/command2`, `/command3`), and easily extensible to support additional commands.
*   🚦 **Clear Command Routing:** Employs `Switch` nodes to efficiently route execution based on both the initial command and the current conversation state.
*   💬 **Content Requesting:** Prompts the user to provide content after a command is received. This is handled by dedicated `Telegram` nodes.
*   🛠️ **Easy Customization:** Includes placeholder (`No Operation, do nothing`) nodes where you can easily insert your own custom processing logic for each command.

**Why This Template is Unique:**

n8n currently lacks a native, built-in mechanism for handling individual Telegram commands in a structured, non-conversational way. Many users resort to "AI Agent" nodes, which are designed for open-ended conversations. This template fills that gap by providing a framework for:

*   ✅ **Predefined Commands:** Users interact with your bot through a menu of predefined commands, eliminating the need for complex natural language processing.
*   🧠 **Deterministic Behavior:** The workflow's response is predictable and directly tied to the selected command, unlike AI-driven approaches where responses can be less consistent.
*   🖱️ **Simplified Interaction:** Users simply click a button in the Telegram menu, making the interaction intuitive and user-friendly.

**How to Use:**

1.  **Initialization (One-Time):** Execute the "Temp to Initiate Static Data" node *once* to create the necessary `telegramStates` object in the workflow's static data. This is crucial for state management.
2.  **Customize Processing Logic:** Replace the `NoOp` nodes (`Command1 processing`, `Command2 processing`, `Command3 processing`) with your own nodes to handle the content received for each command. *It is highly recommended to add input validation within your processing logic.*
3.  **Telegram Credentials:** Configure the `Telegram Trigger` and `Telegram` nodes with your bot's API token.

**Example Use Case:**

This template is ideal for creating bots that require a command followed by specific input, such as:

*   📊 **Data Collection:** A command to initiate a form, followed by a request for the data.
*   🛠️ **Service Requests:** A command to request a service, followed by a request for details.
*   📚 **Interactive Tutorials:** A command to start a tutorial, followed by a request of completion.

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
