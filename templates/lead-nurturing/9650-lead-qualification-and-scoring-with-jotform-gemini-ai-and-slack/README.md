# 💬 Lead qualification and scoring with Jotform, Gemini AI, and Slack

> ⚡ **283 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Automate your lead qualification process by connecting Jotform to Gemini AI. This workflow instantly analyzes new form submissions, assigns a priority score, filters out spam, and routes legitimate leads for immediate action. Stop manually sorting through submissions and let your sales team focus on what matters: closing deals with hot leads.

This template captures a lead from a "Talk to an Expert" form, uses AI to determine its quality, sends a real-time notification to your sales team on Slack, and automatically sends a tiered, personalized email response to the lead based on their qualification score.

### **Features**

  * **Automated Spam Filtering:** Uses Gemini AI to analyze incoming leads and automatically discard spam.
  * **AI-Powered Lead Scoring:** Assigns a priority score (1-10) to every legitimate lead based on the content of their inquiry.
  * **Instant Team Notifications:** Sends a detailed alert for every qualified lead to a designated Slack channel.
  * **Tiered Email Responses:** Automatically sends a different, personalized email to hot, warm, and cold leads.
  * **Seamless Jotform Integration:** Triggers the moment a new form is submitted.

### **Nodes Used**

  * 🟣 **Jotform Trigger:** Starts the workflow when a new form submission is received.
  * 🧠 **AI Agent / Google AI:** Connects to Gemini to analyze the form data.
  * ❓ **IF:** Filters out submissions flagged as spam.
  * 📣 **Slack:** Sends a real-time notification to your team.
  * 🔀 **Switch:** Routes the lead down different paths based on its AI-generated score.
  * ✉️ **Gmail:** Sends a personalized follow-up email to the lead.

-----

### **How to use this template**

This workflow is designed to be easy to set up. Follow these steps to get it running:

**1. Set up your Jotform Trigger:**

  * In the **Jotform Trigger** node, connect your Jotform account.
  * Select the specific form you want to use for lead capture from the dropdown list.
  * Ensure your form has the required fields as described in the "Required Jotform Fields" section below.

**2. Configure the AI Agent / Google AI Node:**

  * Connect your Google AI credentials to the node.
  * Ensure the prompt is set up to analyze the message from your form and return a `JSON` object with `is_spam` (a boolean) and `lead_score` (an integer) keys.

**3. Set up the IF Node:**

  * This node should check the `is_spam` value from the AI node. The workflow should only continue on the `false` path.

**4. Configure the Slack Node:**

  * Connect your Slack account credentials.
  * In the "Channel" field, select the channel where you want lead notifications to be sent (e.g., `#sales-leads`).

**5. Configure the Switch Node:**

  * This node should be set to route based on the `lead_score` from the AI node.
  * The template is pre-configured with three paths:
      * **Hot:** Score is 8 or higher.
      * **Warm:** Score is between 5 and 7.
      * **Cold:** Score is 4 or lower (the "Default" path).

**6. Configure the Gmail Nodes**

Connect your Gmail account credentials to each of the three Gmail nodes. This step is critical for personalization, and you **must** adapt the content to fit your business. The provided text is a template; its effectiveness depends on your customization.

For each of the three email templates (Hot, Warm, and Cold), be sure to:

* **Update the Email Body:** Rewrite the text to match your company's tone and brand voice.
* **Change Company/Team Information:** Replace placeholder text like `[Your Company Name]` and update the signature from `The Team` to your specific team or company name (e.g., `The Sales Team at Acme Corp`).
* **Customize Your Links:**
    * In the **'Hot' lead email**, replace the placeholder `[Your Calendly/Booking Link]` with your actual link from Calendly, HubSpot Meetings, or another scheduling tool.
    * In the **'Warm' lead email**, replace `[Link to a resource or case study]` with a real link to a relevant blog post, whitepaper, or case study on your website.

**7. Activate your Workflow:**

  * Once all nodes are configured, save and activate your workflow. Now, every new Jotform submission will be processed automatically\!

-----

### **How to Adapt the Template**

This workflow is a powerful starting point. Here are a few ideas to customize it for your specific needs:

  * **Integrate Your CRM:** Add a node for your CRM (like HubSpot, Salesforce, or Pipedrive) after the IF node. You can create or update a contact and a deal, and then include the link to the CRM record directly in the Slack notification for easy access.
  * **Use a Different Notification Service:** If your team doesn't use Slack, you can easily replace the Slack node with one for **Microsoft Teams**, **Discord**, or even a simple **email notification**.
  * **Create Tiered Notifications:** For a more advanced setup, use the `Switch` node's outputs to send notifications to different channels. For example, send "Hot" leads to a high-priority `#sales-urgent` channel with an `@channel` mention, and send "Warm" or "Cold" leads to a less noisy `#leads-review` channel.
  * **Adjust the Scoring Logic:** Your definition of a "hot" lead might be different. Simply change the values in the `Switch` node to match your business rules (e.g., you might consider any score of 7 or higher to be a hot lead).

-----

### **Required Jotform Fields for this Workflow**

For this template to work correctly, your Jotform should have the following fields. The names in parentheses are the internal field names used in the n8n expressions.

  * **Full Name** (`Full Name`): A text input for the user's name, used for personalizing emails.
  * **Work Email** (`Work Email`): An email field, used as the recipient for the automated follow-up.
  * **Role** (`Role`): A text input for the user's job title, providing context for your sales team.
  * **Number of Employees** (`Number of Employees`): A dropdown or number input for company size, used for lead segmentation.
  * **How can we help you?** (`How can we help you?`): A text area. **This is the most critical field**, as its content is sent to the AI for spam checking and lead scoring.

-----

### **More Information**

**About Jotform**

[Jotform](https://www.jotform.com/?partner=atakhalighi) is a powerful and easy-to-use online form builder that helps you create and publish online forms without writing a single line of code. It's an excellent tool for capturing leads, conducting surveys, accepting payments, and much more. Its seamless integration capabilities make it a perfect starting point for all kinds of n8n automations.

If you don't have an account yet, you can get started with Jotform through the link above.

## 🔗 Nodes Used

Slack, Jotform Trigger, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
