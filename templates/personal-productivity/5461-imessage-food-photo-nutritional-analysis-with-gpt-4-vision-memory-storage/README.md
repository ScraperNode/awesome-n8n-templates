# ⚡ iMessage food photo nutritional analysis with GPT-4 Vision & Memory Storage

> ⚡ **2,073 views** · ⚡ [Personal Productivity](../)

## Description

# iMessage AI-Powered Smart Calorie Tracker


&gt; 📌 **What it looks like in use:**  
 ![Sticky Note](https://i.imgur.com/bOPrv4H.png)  
&gt; This image shows a visual of the workflow in action. Use it for reference when replicating or customizing the template.

This n8n template transforms a user-submitted food photo into a detailed, friendly, AI-generated nutritional report — sent back seamlessly as a chat message. It combines OpenAI's visual reasoning, Postgres-based memory, and real-time messaging with Blooio to create a hands-free calorie and nutrition tracker.

---

## 🧠 Use Cases

- Auto-analyze meals based on user-uploaded images.
- Daily/weekly/monthly diet summaries with no manual input.
- Virtual food journaling integrated into messaging apps.
- Nutrition companion for healthcare, fitness, and wellness apps.

---

## 📌 Good to Know

- ⚠️ This uses GPT-4 with image capabilities, which may incur higher usage costs depending on your OpenAI pricing tier. Review [OpenAI’s pricing](https://openai.com/pricing).
- The model uses visual reasoning and estimation to determine nutritional info — results are estimates and should not replace medical advice.
- [Blooio](https://blooio.com) is used for sending/receiving messages. You will need a valid API key and project set up with webhook delivery.
- A Postgres database is required for long-term memory (optional but recommended). You can use any memory node with it.

---

## ⚙️ How It Works

1. **Webhook Trigger**  
   The workflow begins when a message is received via Blooio. This webhook listens for user-submitted content, including any image attachments.

2. **Image Validation and Extraction**  
   A conditional check verifies the presence of attachments. If images are found, their URLs are extracted using a Code node and prepared for processing.

3. **Image Analysis via AI Agent**  
   Images are passed to an OpenAI-based agent using a custom system prompt that:
   - Identifies the meal,
   - Estimates portion sizes,
   - Calculates calories, macros, fiber, sugar, and sodium,
   - Scores the meal with a health and confidence rating,
   - Responds in a chatty, human-like summary format.

4. **Memory Integration**  
   A Postgres memory node stores user interactions for recall and contextual continuity, allowing day/week/month reports to be generated based on cumulative messages.

5. **Response Aggregation & Summary**  
   Messages are aggregated and summarized by a second AI agent into a single concise message to be sent back to the user via Blooio.

6. **Message Dispatch**  
   The final message is posted back to the originating conversation using the Blooio Send Message API.

---

## 🚀 How to Use

- The included webhook can be triggered manually or programmatically by linking Blooio to a frontend chat UI.
- You can test the flow using a manual POST request containing mock Blooio payloads.
- Want to use a different messages app? Replace the Blooio nodes with your preferred messaging API (e.g., Twilio, Slack, Telegram).

---

## ✅ Requirements

- OpenAI API access with GPT-4 Vision or equivalent multimodal support.
- Blooio account with access to incoming and outgoing message APIs.
- Optional: Postgres DB (e.g., via [Neon](https://neon.com)) for tracking message context over time.

---

## 🛠️ Customising This Workflow

- **Prompt Tuning**  
  Tailor the system prompt in the AI Agent node to fit specific diets (e.g., keto, diabetic), age groups, or regionally-specific foods.

- **Analytics Dashboards**  
  Hook up your Postgres memory to a data visualization tool for nutritional trends over time.

- **Multilingual Support**  
  Adjust the response prompt to translate messages into other languages or regional dialects.

- **Image Preprocessing**  
  Insert a preprocessing node before sending images to the model to resize, crop, or enhance clarity for better results.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
