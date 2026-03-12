# 🎬 Loop over items — beginner example

> ⚡ **4,794 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow introduces beginners to one of the most fundamental concepts in n8n: **looping over items**. Using a simple use case—generating LinkedIn captions for content ideas—it demonstrates how to split a dataset into individual items, process them with AI, and collect the output for review or export.

---

## ✅ Key Features

- **🧪 Create Dummy Data**: Simulate a small dataset of content ideas.
- **🔁 Loop Over Items**: Process each row independently using the SplitInBatches node.
- **🧠 AI Caption Creation**: Automatically generate LinkedIn captions using OpenAI.
- **🧰 Tool Integration**: Enhance AI output with creativity-injection tools.
- **🧾 Final Output Set**: Collect the original idea and generated caption.

---

## 🧰 What You’ll Need

- ✅ An [OpenAI API key](https://platform.openai.com/signup)
- ✅ The **LangChain** nodes enabled in your n8n instance
- ✅ Basic knowledge of how to trigger and run workflows in n8n

---

## 🔧 Step-by-Step Setup

### 1️⃣ Run Workflow

- **Node**: `Manual Trigger (Run Workflow)`
- **Purpose**: Manually start the workflow for testing or learning.

---

### 2️⃣ Create Random Data

- **Node**: `Create Random Data (Code)`
- **What it does**: Simulates incoming data with multiple content ideas.
- **Code**:
```js
return [
  {
    json: {
      row_number: 2,
      id: 1,
      Date: '2025-07-30',
      idea: 'n8n rises to the top',
      caption: '',
      complete: ''
    }
  },
  {
    json: {
      row_number: 3,
      id: 2,
      Date: '2025-07-31',
      idea: 'n8n nodes',
      caption: '',
      complete: ''
    }
  },
  {
    json: {
      row_number: 4,
      id: 3,
      Date: '2025-08-01',
      idea: 'n8n use cases for marketing',
      caption: '',
      complete: ''
    }
  }
];
```

---

### 3️⃣ Loop Over Items

- **Node**: `Loop Over Items (SplitInBatches)`
- **Purpose**: Sends one record at a time to the next node.
- **Why It Matters**: Loops in n8n are created using this node when you want to iterate over multiple items.

---

### 4️⃣ Create Captions with AI

- **Node**: `Create Captions (LangChain Agent)`
- **Prompt**: 
```text
idea: {{ $json.idea }}
```
- **System Message**: 
```text
You are a helpful assistant creating captions for a LinkedIn post. Please create a LinkedIn caption for the idea.
```
- **Model**: GPT-4o Mini or GPT-3.5
- **Credentials Required**:
  - **OpenAI Credential**  
    - Go to: [OpenAI API Keys](https://platform.openai.com/account/api-keys)
    - Create a key and add it in n8n under credentials as “OpenAi account”

---

### 5️⃣ Inject Creativity (Optional)

- **Node**: `Tool: Inject Creativity (LangChain Tool)`
- **Purpose**: Demonstrates optional LangChain tools that can enhance or manipulate input/output.
- **Why It’s Cool**: A great way to show chaining tools to AI agents.

---

### 6️⃣ Output Table

- **Node**: `Output Table (Set)`
- **Purpose**: Combines original ideas and generated captions into final structure.
- **Fields**:
  - `idea`: `={{ $('Create Random Data').item.json.idea }}`
  - `output`: `={{ $json.output }}`

---

## 💡 Educational Value

This workflow demonstrates:
- Creating dynamic inputs with the **Code** node
- Using **SplitInBatches** to simulate looping
- Sending dynamic prompts to an AI model
- Using **Set** to structure the output data

Beginners will understand how item-level processing works in n8n and how powerful looping combined with AI can be.

---

## 📬 Need Help or Want to Customize This?

**Robert Breen**  
Automation Consultant | AI Workflow Designer | n8n Expert  
📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🌐 [ynteractive.com](https://ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

---

## 🏷️ Tags

`n8n` `loops` `OpenAI` `LangChain` `workflow` `training` `beginner` `LinkedIn automation` `caption generator`

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
