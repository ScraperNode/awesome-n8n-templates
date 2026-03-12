# ⚒️ Simulate debates between AI agents using Mistral to optimize answers

> ⚡ **2,144 views** · ⚒️ [Engineering](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

# AI Arena - Debate of AI Agents to Optimize Answers and Simulate Diverse Scenarios

## Overview 
Version: 1.0

The AI Arena Workflow is designed to facilitate a refined answer generation process by enabling a structured debate among multiple AI agents. This workflow allows for diverse perspectives to be considered before arriving at a final output, enhancing the quality and depth of the generated responses.

## ✨ Features
- **Multi-Agent Debate Simulation**: Engage multiple AI agents in a debate to generate nuanced responses.
- **Configurable Rounds and Agents**: Easily adjust the number of debate rounds and participating agents to fit your needs.
- **Contextualized AI Responses**: Each agent operates based on predefined roles and characteristics, ensuring relevant and focused discussions.
- **JSON Output**: The final output is structured in JSON format, making it easy to integrate with other systems or workflows.

## 👤 Who is this for?
This workflow is ideal for developers, data scientists, content creators, and businesses looking to leverage AI for decision-making, content generation, or any scenario requiring diverse viewpoints. It is particularly useful for those who need to synthesize information from multiple personalities or perspectives.

## 💡 What problem does this solve?
The workflow addresses the challenge of generating nuanced responses by simulating a debate among AI agents. This approach ensures that multiple perspectives are considered, reducing bias and enhancing the overall quality of the output. Use-Case examples:
- 🗓️ Meeting/Interview Simulation
- ✔️ Quality Assurance
- 📖 Storywriter Test Environment
- 🏛️ Forum/Conference/Symposium Simulation

## 🔍 What this workflow does
The workflow orchestrates a debate among AI agents, allowing them to discuss, critique, and suggest rewrites for a given input based on their roles and predefined characteristics. This collaborative process leads to a more refined and comprehensive final output.

## 🔄 Workflow Steps
1. **Input & Setup**: The initial input is provided, and the AI environment is configured with necessary parameters.
2. **Round Execution**: AI agents execute their roles, providing replies and actions based on the input and their individual characteristics.
3. **Round Results**: The results of each round are aggregated, and a summary is created to capture the key points discussed by the agents.
4. **Continue to Next Round**: If more rounds are defined, the process repeats until the specified number of rounds is completed.
5. **Final Output**: The final output is generated based on the agents' discussions and suggestions, providing a cohesive response.

## ⚡ How to Use/Setup
### 🔐 Credentials
- Obtain an API key for the Mistral API or another LLM API. This key is necessary for the AI agents to function properly.

### 🔧 Configuration
- Set up the workflow in n8n, ensuring all nodes are correctly configured according to the workflow requirements. This includes setting the appropriate input parameters and defining the roles of each AI agent.
- This workflow uses a custom node for Global Variables called 'n8n-nodes-globals.' Alternatively, you can use the 'Edit Field (Set)' node to achieve the same functionality.

### ✏️ Customizing this workflow
- To customize the workflow, adjust the AI agent parameters in the JSON configuration. This includes defining their roles, personalities, and preferences, which will influence how they interact during the debate.
One of the notes includes a ready-to-use example of how to customize the agents and the environment. You can simply edit it and insert it as your credential in the Global Variables node.

## 📌 Example

![printscreen1.png](fileId:1680)

![printscreen2.png](fileId:1679)

![printscreen3.png](fileId:1681)

An example with both input and final output is provided in a note within the workflow.


## 🛠️ Tools Used

- n8n: A workflow automation tool that allows users to connect various applications and services.
- Mistral API: A powerful language model API used for generating AI responses. (You can replace it with any LLM API of your choice)
- Podman: A container management tool that allows users to create, manage, and run containers without requiring a daemon. (It serves as an alternative to Docker for container orchestration.)


## ⚙️ n8n Setup Used
- **n8n Version**: 1.100.1
- **n8n-nodes-globals**: 1.1.0
- **Running n8n via**: Podman 4.3.1
- **Operating System**: Linux


## ⚠️ Notes, Assumptions & Warnings

- Ensure that the AI agents are configured with clear roles to maximize the effectiveness of the debate. Each agent's characteristics should align with the overall goals of the workflow.
- The workflow can be adapted for various use cases, including meeting simulations, content generation, and brainstorming sessions.
- This workflow assumes that users have a basic understanding of n8n and JSON configuration.
- This workflow assumes that users have access to the necessary API keys and permissions to utilize the Mistral API or other LLM APIs.
- Ensure that the input provided to the AI agents is clear and concise to avoid confusion in the debate process. Ambiguous inputs may lead to unclear or irrelevant outputs.
- Monitor the output for relevance and accuracy, as AI-generated content may require human oversight to ensure it meets standards and expectations before being used in production.

## ℹ️ About Us

This workflow was developed by the Hybroht team of AI enthusiasts and developers dedicated to enhancing the capabilities of AI through collaborative processes. Our goal is to create tools that harness the possibilities of AI technology and more.

## 🔗 Nodes Used

Email Trigger (IMAP), Schedule Trigger, AI Agent, Simple Memory, Structured Output Parser, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
