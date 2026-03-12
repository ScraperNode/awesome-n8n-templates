# 🤖 AI-powered reasoning and response workflow

> ⚡ **377 views** · 🤖 [AI Chatbots & Agents](../)

## Description

#### Overview:
This workflow is designed to handle user inputs via a webhook, process the inputs with the Google Gemini API (specifically the **gemini-2.0-flash-thinking-exp-1219** model), and return a structured response to the user. The response includes three key elements: reasoning, the final answer, and citation URLs (if applicable). This workflow provides a robust solution for integrating AI reasoning into your processes.

This workflow can be utilized as a tool for AI-based agents, intelligent email drafting systems, or as a standalone intelligent automation solution.

---

#### Setup:
1. **Webhook Configuration:**
   - Ensure the webhook node is properly set up to accept GET requests with an `input` parameter.
   - Verify that the webhook path matches your application requirements.
   - Test the webhook using tools like Postman to ensure proper data formatting.

2. **Google Gemini API Credentials:**
   - Set up your Google Gemini API account credentials in the HTTP Request node.
   - Ensure API access and permissions are valid.

3. **Parameter Adjustments:**
   - Customize the `temperature`, `topK`, `topP`, and `maxOutputTokens` parameters to fit your use case.

---

#### Customization:
1. **Input Parameters:**
   - Modify the webhook path or parameters based on the data your application will send.

2. **Response Formatting:**
   - Adjust the JavaScript code in the "Process API Response" node to fit your desired output structure.

3. **Output Expectations:**
   - Test the response returned by the "Return Response to User" node to ensure it meets your application requirements.

---

#### Workflow Steps:

1. **Receive User Input:**
   - **Node Type:** Webhook
   - **Purpose:** Captures a GET request containing a user-provided `input` parameter. Acts as the starting point for the workflow.

2. **Send Request to Google Gemini:**
   - **Node Type:** HTTP Request
   - **Purpose:** Sends the received `input` to the Gemini-2.0-flash-thinking-exp-1219 model for processing. The API configuration includes parameters for customizing the response.

3. **Process API Response:**
   - **Node Type:** Code Node
   - **Purpose:** Extracts reasoning, the final answer, and citation URLs from the API response. Organizes the output for further use.

4. **Return Response to User:**
   - **Node Type:** Respond to Webhook
   - **Purpose:** Sends the processed and structured response back to the user via the webhook. Ensures the response format meets expectations.

---

#### Expected Outcomes:
- **Input Handling:** Successfully captures user input via a webhook.
- **AI Processing:** Generates a structured response using the **Gemini-2.0-flash-thinking-exp-1219** model, including reasoning, answers, and citations (if available).
- **Output Delivery:** Returns a user-friendly response formatted to your specifications.

---

#### Notes:
- The workflow is inactive by default.
- Each node is annotated with a Sticky Note to clarify its purpose.
- Ensure all API credentials are correctly configured before execution.
- Use this workflow to save time, improve accuracy, and automate repetitive tasks efficiently.

---

#### Tags:
- Automation
- Google Gemini
- AI Agents
- Intelligent Automation
- Content Generation
- Workflow Integration

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
