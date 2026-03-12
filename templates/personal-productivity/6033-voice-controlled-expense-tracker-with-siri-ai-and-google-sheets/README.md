# ⚡ Voice-controlled expense tracker with Siri, AI and Google Sheets

> ⚡ **980 views** · ⚡ [Personal Productivity](../)

## Description

🎯 What It Does:

This project lets you talk to Siri (via Apple Shortcuts) and record or query your daily spending. The shortcut sends your message to an n8n Webhook, which uses AI to decide whether it’s for writing or reading finance data, then replies with a human-friendly message — all powered by n8n + AI + Google Sheets.

⸻

🌐 PART 1: n8n Setup

🧩 1. Create a Webhook Trigger in n8n
	•	Add a node: Webhook
	•	Set HTTP Method: POST
	•	Set Path: siri-finance
	•	Enable “Respond to Webhook” = ✅

🧠 2. Add AI Agent Node (e.g. OpenAI, Ollama, Gemini)
	•	Use system prompt like:

You are a finance assistant. Decide if the user wants to record or read transactions.
If it's recording, return a JSON object with date, type, name, amount, and expense/income.
If it's reading, return date range and type (Expense/Income).
Always reply with a human-friendly summary.


	•	Input: {{ $json.text }} (from webhook)
	•	Output: structured json.output

🧮 3. (Optional) Add Logic to write to DB / Supabase / Google Sheets
	•	Append tool: Adds a new row
	•	Read tool: Queries past data


Now your n8n flow is ready!

⸻

📱 PART 2: iOS Shortcut Setup

⚙️ 1. Create a new Shortcut
	•	Name it: 記帳助理 (or Finance Bot)
	•	Add Action: Ask for Input
	•	Prompt: “請說出你的記帳內容”
	•	Input Type: Text
	•	Add Action: Get Contents of URL
	•	Method: POST
	•	URL: https://your-n8n-domain/webhook/siri-finance
	•	Headers: Content-Type: application/json
	•	Request Body:

{
  "text": "Provided Input"
}

	•	Replace "Provided Input" with Magic Variable → Input Result

🔊 2. Show Result
	•	Add Action: Show Result
	•	Content: Get Contents of URL

🗣️ 3. Optional: Add “Speak Text”
	•	If you want Siri to speak it back, add Speak Text after Show Result.

⸻

✅ Example Usage
	•	You: “Hey Siri, 開支$50 早餐”
	•	Siri: “已記錄支出：項目 早餐，金額 $50，已寫入”

Or
	•	You: “查一下我過去7日用了幾多錢”
	•	Siri: “你過去7日總支出為 $7684.64，包括：⋯⋯”

⸻

📦 Files to Share

You can package the following:
	•	.shortcut file export
	•	Sample n8n workflow .json
	•	Optional Supabase schema / Google Sheet template

⸻

💡 Tips for Newcomers
	•	Keep your Webhook public but protect with token if needed.
	•	Ensure you handle emoji and newline safely for iOS compatibility.
	•	Add logging nodes in n8n to help debug Siri messages.

⸻

🗣️ Optional Project Name

“Siri 記帳助理” / “Finance VoiceBot”

A simple voice-first way to manage your daily expenses.

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
