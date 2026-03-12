# 🎫 Route and analyze customer feedback with Qwen3-VL, Tally, PostgreSQL

> ⚡ **46 views** · 🎫 [Ticket Management & Triage](../)

## Description

**Self-Hosted**

This workflow provides a complete end-to-end system for capturing, analyzing, and routing customer feedback. By combining local multimodal AI processing with structured data storage, it allows teams to respond to customer needs in real-time without compromising data privacy.

## Who is this for?

This is designed for **Customer Success Managers, Product Teams, and Community Leads** who need to automate the triage of high-volume feedback. It is particularly useful for organizations that handle sensitive customer data and prefer local AI processing over cloud-based API calls.

## 🛠️ Tech Stack

- **Tally.so**: For front-end feedback collection.
- **LM Studio**: To host the local AI models (Qwen3-VL).
- **PostgreSQL**: For persistent data storage and reporting.
- **Discord**: For real-time team notifications.

## ✨ How it works

1. **Form Submission**: The workflow triggers when a new submission is received from **Tally.so**.
2. **Multimodal Analysis**: The **OpenAI** node (pointing to **LM Studio**) processes the input using the **Qwen3-VL** model across three specific layers:
   - **Sentiment Analysis**: Evaluates the text to determine if the customer is Positive, Negative, or Neutral.
   - **Zero-Shot Classification**: Categorizes the feedback into pre-defined labels based on instructions in the prompt.
   - **Vision Processing**: Analyzes any attached images to extract descriptive keywords or identify UI elements mentioned in the feedback.
3. **Data Storage**: The **PostgreSQL** node logs the user's details, the original message, and all AI-generated insights.
4. **AI-Driven Routing**: The same **Qwen3-VL** model makes the routing decision by evaluating the classification results and determining the appropriate path for the data to follow.
5. **Discord Notification**: The **Discord** node sends a formatted message to the corresponding channel, ensuring the support team sees urgent issues while the marketing team sees positive testimonials.

## 📋 Requirements

- **LM Studio** running a local server on port `1234`.
- **Qwen3-VL-4B** (GGUF) model loaded in LM Studio.
- **PostgreSQL** instance with a table configured for feedback data.
- **Discord Bot Token** and specific Channel IDs.

## 🚀 How to set up

1. **Prepare your Local AI**:
   - Open **LM Studio** and download the `Qwen3-VL-4B` model.
   - Start the Local Server on port `1234` and ensure **CORS** is enabled.
   - Disable the **Require Authentication** setting in the Local Server tab.
2. **Configure PostgreSQL**:
   - Ensure your database is running. Create a table named `customer_feedback` with columns for `name`, `email_address`, `feedback_message`, `image_url`, `sentiment`, `category`, and `img_keywords`.
3. **Import the Workflow**:
   - Import the JSON file into your n8n instance.
4. **Link Services**:
   - Update the **Webhook** node with your Tally.so URL.
   - In the **Discord** nodes, paste the relevant **Channel IDs** for your #support, #feedback, and #general channels.
5. **Test and Activate**:
   - Toggle the workflow to **Active**.
   - Send a test submission through your Tally form and verify the data appears in PostgreSQL and Discord.

## 🔑 Credential Setup

To run this workflow, you must configure the following credentials in n8n:

- **OpenAI API (Local)**:
  - Create a new **OpenAI API** credential.
  - **API Key**: Enter any placeholder text (e.g., `lm-studio`).
  - **Base URL**: Set this to your machine's local IP address (e.g., `http://192.168.1.10:1234/v1`) to ensure n8n can connect to the local AI server, especially if running within a Docker container.
- **PostgreSQL**:
  - Create a new **PostgreSQL** credential.
  - Enter your database **Host**, **Database Name**, **User**, and **Password**. If using the provided Docker setup, the host is usually `db`.
- **Discord Bot**:
  - Create a new **Discord Bot API** credential.
  - Paste your **Bot Token** obtained from the [Discord Developer Portal](https://discord.com/developers/applications).
- **Tally**:
  - Create a new **Tally API** credential.
  - Enter your **API Key**, which you can find in your Tally.so account settings.

## ⚙️ How to customize

- **Refine AI Logic**: Update the System Message in the AI node to change classification categories or sentiment sensitivity.
- **Switch to Cloud AI**: If you prefer not to use a local model, you can swap the local **LM Studio** connection for any 3rd party API, such as **OpenAI (GPT-4o)**, **Anthropic (Claude)**, or **Google Gemini**, by updating the node credentials and Base URL.
- **Expand Destinations**: Add more **Discord** nodes or integrate **Slack** to notify different departments based on the AI's routing decision.
- **Custom Triggers**: Replace the Tally webhook with a **Typeform**, **Google Forms**, or a custom **Webhook** trigger if your collection stack differs.

## 🔗 Nodes Used

HTTP Request, Postgres, Discord, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
