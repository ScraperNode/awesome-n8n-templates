# 🔬 Beginner AI dataset generator using OpenAI + LangChain in n8n

> ⚡ **2,003 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This n8n workflow dynamically generates a realistic sample dataset based on a single topic you provide. It uses OpenAI (via LangChain) and n8n’s built-in nodes to:

1. **Generate structured JSON data** for 5 columns with 3–5 values each  
2. **Flatten** that data into a single text blob  
3. **Infer meaningful column names** via a second AI call  
4. **Pivot, split, merge, and rename** columns automatically  
5. **Output** a clean, labeled dataset ready for export or further processing  

---

## ⚙️ Prerequisites

1. **OpenAI API Key**  
   - Visit: https://platform.openai.com/account/api-keys  
   - Create a new key  
   - In n8n: **Credentials → New → OpenAI API**, paste key, name it “OpenAi account”  

2. **LangChain nodes enabled** in your n8n instance  


### 🥇 Step 1: Set Up OpenAI Credential
1. Go to [OpenAI API Keys](https://platform.openai.com/account/api-keys)  
2. Create and copy your key  
3. In n8n: **Credentials → New → OpenAI API** → paste key as “OpenAi account”

### 🥈 Step 2: Manual Trigger
- Add **Manual Trigger** to start the workflow

### 🥉 Step 3: Set Topic
- Add a **Set** node named `Set Topic to Search`  
- Field: `Topic` = `n8n use cases` (or any topic you choose)

### ✨ Step 4: Generate Structured Data
- **LangChain Agent** node `Generate Random Data`
- Connect to **OpenAI Chat Model1** and **Tool: Inject Creativity1**  
- System prompt: instruct AI to output 5 columns of realistic values in JSON  

### 🔧 Step 5: Parse AI Output
- **Structured Output Parser** to validate JSON  

### 🔄 Step 6: Flatten Data
- **Code** node `Outpt all Data to One Field`  
- Joins all values into a comma-separated string for column naming

### 🧠 Step 7: Generate Column Names
- **LangChain Agent** `Generate Column Names`  
- Connect to **OpenAI Chat Model2**  
- Prompt: infer 5 column names from the string  

### 🔢 Step 8: Pivot Names Row
- **Code** node `Pivot Column Names` transforms array into `{ column1: name1, … }`

### 🪓 Step 9: Split Columns
- 5 `SplitOut` nodes to break each array back into rows per column

### 🔗 Step 10: Merge Rows
- **Merge** node `Merge Columns together` using `combineByPosition`  

### 🏷️ Step 11: Rename Columns
- **Set** node `Rename Columns` assigns the AI-generated names to each column

### 🔗 Step 12: Final Output
- **Merge** `Append Column Names` combines data and header row

---

🏁 **Done!** You now have a fully AI-driven, labeled dataset generated from a single topic—no external services needed. Easily extend by adding a Google Sheets or HTTP node to export.


## 📬 Need Help or Want to Customize This?
📧 [robert@ynteractive.com](mailto:robert@ynteractive.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/robert-breen-29429625/)

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
