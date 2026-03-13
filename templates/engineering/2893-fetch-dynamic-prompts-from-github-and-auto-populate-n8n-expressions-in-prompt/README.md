# ⚒️ Fetch dynamic prompts from GitHub and auto-populate n8n expressions in prompt

> ⚡ **3,674 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Who Is This For?**

This workflow is designed for **AI engineers, automation specialists, and content creators** who need a **scalable system** to dynamically manage prompts stored in GitHub. It eliminates manual updates, enforces required variable checks, and ensures that AI interactions always receive **fully processed** prompts.

---

## **🚀 What Problem Does This Solve?**

Manually managing AI prompts can be inefficient and error-prone. This workflow:  
✅ **Fetches dynamic prompts from GitHub**  
✅ **Auto-populates placeholders with values from the `setVars` node**  
✅ **Ensures all required variables are present before execution**  
✅ **Processes the formatted prompt through an AI agent**

---

## **🛠 How This Workflow Works**

This workflow consists of **three key branches**, ensuring smooth prompt retrieval, variable validation, and AI processing.

---

### **1️⃣ Retrieve the Prompt from GitHub (HTTP Request → Extract from File → SetPrompt)**

- The workflow starts manually or via an external trigger.
- It **fetches a text-based prompt** stored in a GitHub repository.
- The **Extract from File Node** retrieves the content from the GitHub file.
- The **SetPrompt Node** stores the prompt, making it accessible for processing.

📌 **Note:**  
The prompt must contain **n8n expression format variables** (e.g., `{{ $json.company }}`) so they can be dynamically replaced.

---

### **2️⃣ Extract & Auto-Populate Variables (Check All Prompt Vars → Replace Variables)**

- A **Code Node scans the prompt** for placeholders in the **n8n expression format** (`{{ $json.variableName }}`).
- The workflow **compares required variables** against the `setVars` node:
    - ✅ **If all variables are present**, it proceeds to variable replacement.
    - ❌ **If any variables are missing**, the workflow stops and returns an error listing them.
- The **Replace Variables Node** replaces all placeholders with values from `setVars`.

📌 **Example of a properly formatted GitHub prompt:**

```
Hello {{ $json.company }}, your product {{ $json.features }} launches on {{ $json.launch_date }}.
```

This ensures **seamless replacement when processed in n8n**.

---

### **3️⃣ AI Processing & Output (AI Agent → Prompt Output)**

- The **Set Completed Prompt Node** stores the final, processed prompt.
- The **AI Agent Node** (Ollama Chat Model) processes the prompt.
- The **Prompt Output Node** returns the **fully formatted response**.

📌 **Optional:** Modify this to use OpenAI, Claude, or other AI models.

---

## **⚠️ Error Handling: Missing Variables**

If a required variable is missing, the workflow **stops execution** and provides an error message:

```
⚠️ Missing Required Variables: ["launch_date"]
```

This ensures **no incomplete prompts are sent to AI agents**.

---

## **✅ Example Use Case**

### **📜 GitHub Prompt File (Using n8n Expressions)**

```
Hello {{ $json.company }}, your product {{ $json.features }} launches on {{ $json.launch_date }}.
```

### **🔹 Variables in `setVars` Node**

```json
{
  "company": "PropTechPro",
  "features": "AI-powered Property Management",
  "launch_date": "March 15, 2025"
}
```

### **✅ Successful Output**

```
Hello PropTechPro, your product AI-powered Property Management launches on March 15, 2025.
```

### **🚨 Error Output (If Missing `launch_date`)**

```
⚠️ Missing Required Variables: ["launch_date"]
```

---

## **🔧 Setup Instructions**

### **1️⃣ Connect Your GitHub Repository**

- Store your prompt in a **public or private GitHub repo**.
- The workflow will fetch the raw file using the **GitHub API**.

### **2️⃣ Configure the SetVars Node**

- Define the required variables in the **SetVars Node**.
- Make sure the variable names **match those used in the prompt**.

### **3️⃣ Test & Run**

- Click **Test Workflow** to execute.
- If variables are missing, it will show an error.
- If everything is correct, it will output the **fully formatted prompt**.

---

## **⚡ How to Customize This Workflow**

💡 **Need CRM or Database Integration?**

- Connect the `setVars` node to an **Airtable, Google Sheets, or HubSpot API** to pull variables dynamically.

💡 **Want to Modify the AI Model?**

- Replace the **Ollama Chat Model** with OpenAI, Claude, or a custom LLM endpoint.

---

## **📌 Why Use This Workflow?**

✅ **No Manual Updates Required** – Fetches prompts dynamically from GitHub.  
✅ **Prevents Broken Prompts** – Ensures required variables exist before execution.  
✅ **Works for Any Use Case** – Handles AI chat prompts, marketing messages, and chatbot scripts.  
✅ **Compatible with All n8n Deployments** – Works on **Cloud, Self-Hosted, and Desktop versions**.

## 🔗 Nodes Used

GitHub, Stop and Error, AI Agent, Ollama Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
