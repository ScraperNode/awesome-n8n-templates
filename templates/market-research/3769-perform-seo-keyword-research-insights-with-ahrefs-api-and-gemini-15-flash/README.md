# 📊 Perform SEO keyword research & insights with Ahrefs API and Gemini 1.5 Flash

> ⚡ **7,057 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automates **SEO keyword research** by querying the **Ahrefs API** for keyword data and related keyword insights. The enriched data is then processed by an AI agent to format a response and provide valuable SEO recommendations.

Perfect for **SEO specialists, content marketers, digital agencies**, and anyone looking to gain valuable insights into keyword opportunities to boost their rankings.

---

## ⚙️ How This Workflow Works

This workflow guides you through the entire SEO keyword research process, from entering the initial keyword to receiving detailed insights and related keyword suggestions.

### 1. 🗣️ User Input (Keyword Query)
- The user enters a **keyword** they want to research.
- This input is captured by the **Chat Input Node**, ready for analysis.

### 2. 🤖 AI Agent (Input Verification)
- The AI Agent reviews the keyword input for any **grammatical errors** or extra commentary.
- If necessary, it cleans the input to ensure a seamless query to the API.

### 3. 🔑 Ahrefs API (Keyword Data Retrieval)
- The cleaned **keyword** is sent to the **Ahrefs Keyword Tool API**.
- This retrieves a detailed report including metrics like **search volume**, **keyword difficulty**, and **CPC**.

### 4. 💡 Related Keywords Extraction (Using JavaScript Function)
- The workflow uses a **JavaScript function** to extract main keyword data and **10 related keywords data** from the Ahrefs response.
- You can tweak the script to adjust the number of related keywords or the level of detail you want.

### 5. 🧠 AI Agent (Text Formatting)
- The aggregated data, including both the main keyword and related keywords, is sent to an **AI agent**.
- The AI agent formats the data into a concise, readable format that can be shared with the user.

### 6. 📨 Final Response
- The formatted text is delivered to the user with keyword insights, recommendations, and related keyword suggestions.

---

## ✅ Smart Retry & Error Handling

Each subworkflow includes a **fail-safe mechanism** to ensure:

- ✅ Proper error handling for any issues with the API request.
- 🕒 Failed API requests are retried after a **customizable period** (e.g., 2 hours or 1 day).
- 💬 **User input validation** prevents any incorrect or malformed queries from being processed.

---

## 📋 Ahrefs API Setup

To use this workflow, you’ll need to set up your Ahrefs API credentials:

### 🔑 Ahrefs API
- Sign up for an Ahrefs account and get your key here: [Ahrefs Keyword Tool API](https://rapidapi.com/environmentn1t21r5/api/ahrefs-keyword-tool)
- Once signed up, you'll receive an API key, which you’ll use in the `x-rapidapi-key` header in n8n.
- Ensure you check the **Ahrefs Keyword Tool API documentation** for more details on available parameters.

---

## 📥 How to Import This Workflow

1. Copy the json code.
2. Open your n8n instance.
3. Open a new workflow.
4. Paste anywhere inside the workflow.
5. Voila.

---

## 🛠️ Customization Options

- Adjust the **number of related keywords** extracted (default is 10).
- Customize the **AI agent response** formatting or add specific recommendations for users.
- Modify the JavaScript function to **extract different metrics** from the Ahrefs API.

---

## 🧪 Use Case Example

Trying to optimize your blog post around a specific keyword?

1. Query a broad keyword, like **“SEO tips”**.
2. Get related keyword data and **search volume insights**.
3. Use the AI agent to provide **keyword recommendations** and additional topics to target.
4. 💥 Boost your content strategy with fresh keywords and relevant search data!

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
