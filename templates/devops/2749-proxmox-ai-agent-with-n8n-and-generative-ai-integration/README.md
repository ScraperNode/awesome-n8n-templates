# ⚙️ Proxmox AI agent with n8n and generative AI integration

> ⚡ **80,869 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Proxmox AI Agent with n8n and Generative AI Integration

This template automates IT operations on a **Proxmox Virtual Environment (VE)** using an AI-powered conversational agent built with **n8n**. By integrating Proxmox APIs and generative AI models (e.g., Google Gemini), the workflow converts natural language commands into API calls, enabling seamless management of your Proxmox nodes, VMs, and clusters.
**Buy My Book:**  
[Mastering n8n on Amazon](https://www.amazon.com/dp/B0F23GYCFW)

**Full Courses & Tutorials:**  
[http://lms.syncbricks.com](http://lms.syncbricks.com)

[Watch Video on Youtube](https://www.youtube.com/watch?v=XykvpCj9wDA)

### How It Works  
1. **Trigger Mechanism**  
   - The workflow can be triggered through multiple channels like chat (Telegram, email, or n8n's built-in chat).  
   - Interact with the AI agent conversationally.

2. **AI-Powered Parsing**  
   - A connected AI model (Google Gemini or other compatible models like OpenAI or Claude) processes your natural language input to determine the required Proxmox API operation.

3. **API Call Generation**  
   - The AI parses the input and generates structured JSON output, which includes:  
     - **response_type**: The HTTP method (GET, POST, PUT, DELETE).  
     - **url**: The Proxmox API endpoint to execute.  
     - **details**: Any required payload parameters for the API call.

4. **Proxmox API Execution**  
   - The structured output is used to make HTTP requests to the Proxmox VE API. The workflow supports various operations, such as:  
     - Retrieving cluster or node information.  
     - Creating, deleting, starting, or stopping VMs.  
     - Migrating VMs between nodes.  
     - Updating or resizing VM configurations.

5. **Response Formatting**  
   - The workflow formats API responses into a user-friendly summary. For example:  
     - Success messages for operations (e.g., *"VM started successfully"*).  
     - Error messages with missing parameter details.

6. **Extensibility**  
   - You can enhance the workflow by connecting additional triggers, external services, or AI models. It supports:  
     - Telegram/Slack integration for real-time notifications.  
     - Backup and restore workflows.  
     - Cloud monitoring extensions.

---

### Key Features  
- **Multi-Channel Input**: Use chat, email, or custom triggers to communicate with the AI agent.  
- **Low-Code Automation**: Easily customize the workflow to suit your Proxmox environment.  
- **Generative AI Integration**: Supports advanced AI models for precise command interpretation.  
- **Proxmox API Compatibility**: Fully adheres to Proxmox API specifications for secure and reliable operations.  
- **Error Handling**: Detects and informs you of missing or invalid parameters in your requests.  

---

### Example Use Cases  
1. **Create a Virtual Machine**  
   - Input: *"Create a VM with 4 cores, 8GB RAM, and 50GB disk on psb1."*  
   - Action: Sends a POST request to Proxmox to create the VM with specified configurations.

2. **Start a VM**  
   - Input: *"Start VM 105 on node psb2."*  
   - Action: Executes a POST request to start the specified VM.

3. **Retrieve Node Details**  
   - Input: *"Show the memory usage of psb3."*  
   - Action: Sends a GET request and returns the node's resource utilization.

4. **Migrate a VM**  
   - Input: *"Migrate VM 202 from psb1 to psb3."*  
   - Action: Executes a POST request to move the VM with optional online migration.

---

### Pre-Requisites  
1. **Proxmox API Configuration**  
   - Enable the Proxmox API and generate API keys in the Proxmox Data Center.  
   - Use the `Authorization` header with the format:  
     `PVEAPIToken=&lt;user&gt;@&lt;realm&gt;!&lt;token-id&gt;=&lt;token-value&gt;`

2. **n8n Setup**  
   - Add Proxmox API credentials in n8n using Header Auth.  
   - Connect a generative AI model (e.g., Google Gemini) via the relevant credential type.

3. **Access the Workflow**  
   - Import this template into your n8n instance.  
   - Replace placeholder credentials with your Proxmox and AI service details.

---

### Additional Notes  
- This template is designed for **Proxmox 7.x and above**.  
- For advanced features like backup, VM snapshots, and detailed node monitoring, you can extend this workflow.  
- Always test with a **non-production Proxmox environment** before deploying in live systems.

### [Start with n8n](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

### [Learn n8n with Amjid ](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
### [Get n8n Book](https://lms.syncbricks.com/books/n8n/) 

### [What is Proxmox](https://www.udemy.com/course/proxmox-virtualization-environment-complete-training/?referralCode=8E7EAFD11C2389F89C11)

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram Trigger, Gmail Trigger, AI Agent, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
