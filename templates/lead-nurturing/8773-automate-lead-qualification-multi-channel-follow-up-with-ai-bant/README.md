# 💬 🤖 Automate Lead Qualification & Multi-Channel Follow-up with AI (BANT)

> ⚡ **3,211 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works

This workflow is your automated sales assistant, designed to intelligently qualify incoming leads and route them to the most appropriate follow-up channel. It uses the powerful **BANT (Budget, Authority, Need, Timing)** framework, powered by Google Gemini AI, to score leads as 'hot', 'mid', or 'cold', ensuring your sales team focuses on the most promising opportunities.

Here's a step-by-step breakdown:

1.  **Lead Capture:** A public `Form Trigger` collects essential lead information, including their name, email, what they want to build, their budget, desired start time, and job role. These questions are specifically designed to gather BANT data.
2.  **AI Lead Scoring:** The collected data is sent to **Google Gemini**. A detailed prompt instructs the AI to act as a Lead Scoring Expert, evaluating each BANT component individually and then assigning an overall 'hot', 'mid', or 'cold' score based on predefined criteria.
3.  **Intelligent Routing:** A `Switch` node acts as the central router. Based on the AI's 'hot', 'mid', or 'cold' score, the workflow directs the lead down one of three distinct follow-up paths.
4.  **Hot Leads (Calendar Booking):** For highly qualified 'hot' leads, the workflow immediately redirects them to your calendar booking link, making it easy for them to schedule a direct conversation.
5.  **Mid Leads (WhatsApp Engagement):** For 'mid' priority leads, **Google Gemini** generates a personalized, pre-filled WhatsApp message summarizing their inquiry. The lead is then redirected to a WhatsApp chat with your sales team, allowing for quick, informal engagement.
6.  **Cold Leads (Nurturing Email):** For 'cold' leads who might be in an early research phase, **Google Gemini** crafts a helpful, non-salesy follow-up email. This email provides valuable resources (like templates or community links) and is sent via Gmail, keeping them engaged without pressure.

## Set up steps

**Setup time: ~10-15 minutes**

This workflow requires connecting your Google AI and Gmail accounts, and customizing several nodes to fit your sales process.

1.  **Get Your Google AI API Key:**
    *   Visit Google AI Studio at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).
    *   Click **"Create API key in new project"** and copy the key.
    *   In the workflow, select the **`Score Lead`** node. Click the **Credential** dropdown and select **`+ Create New Credential`**.
    *   Paste your key into the **API Key** field and **Save**.
    *   Repeat this for the **`Write Placeholder WA Message`** and **`Write Follow up Email`** nodes, selecting the credential you just created.

2.  **Connect Your Gmail Account:**
    *   Select the **`Send Follow up Email with Gmail`** node.
    *   Click the **Credential** dropdown and select **`+ Create New Credential`** to connect your Google account. Follow the prompts to grant n8n access.

3.  **Customize Lead Scoring Criteria:**
    *   Go to the **`Score Lead`** node.
    *   In the **Text** parameter, carefully review and adapt the `BANT Criteria Mapping` and `Scoring Logic` to align with your specific sales process and ideal customer profile. This is crucial for accurate lead qualification.

4.  **Configure Follow-up Channels:**
    *   **Hot Leads:** Select the **`Calendar Booking Link`** node. Update the `redirectUrl` parameter with **your personal or team's calendar booking link** (e.g., Calendly, Chili Piper).
    *   **Mid Leads:** Select the **`Phone Number`** node. Set the `whatsapp_phone` value to **your company's WhatsApp phone number** (e.g., `+15551234567`). You can also customize the pre-filled WhatsApp message by adjusting the prompt in the **`Write Placeholder WA Message`** node.
    *   **Cold Leads:** Select the **`Redirect to Website`** node. Update the `redirectUrl` parameter to **your company's main website or a relevant resource page** (e.g., a free templates page, a blog post). You can also customize the email content and resources shared by adjusting the prompt in the **`Write Follow up Email`** node.

5.  **Activate and Test:**
    *   Activate the workflow using the toggle at the top right.
    *   Go to the **`Lead Contact Form`** node and click the **"Open Form URL"** button.
    *   Submit several test applications with different answers (e.g., one "hot" lead, one "mid", one "cold") to ensure the AI scores them correctly and they are routed to the appropriate follow-up action.

Start qualifying and engaging your leads more effectively!

## 🔗 Nodes Used

Gmail, n8n Form Trigger, n8n Form, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
