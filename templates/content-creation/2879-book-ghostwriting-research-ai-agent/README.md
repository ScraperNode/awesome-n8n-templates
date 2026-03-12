# 🎬 Book ghostwriting & research AI agent

> ⚡ **1,841 views** · 🎬 [Content Creation & Video](../)

## Description

**How it Works:**

1.  **Trigger:** The workflow is triggered by a webhook, initiated by an Airtable automation.  This automation sends the Book or Chapter record ID and the desired action (e.g., "Generate Book Details," "Generate Chapters," "Generate Chapter Research," "Generate Chapter Content").
2.  **Action Routing:**  A "Switch" node directs the workflow based on the `action` query parameter received from the webhook.  This determines which part of the book creation process will be executed.
3.  **Data Retrieval:**  The workflow fetches the relevant book or chapter data from Airtable using the provided `recordId`.
4.  **AI Processing:**
    *   **Book Details Generation:**  If the action is "Generate Book Details," an AI Agent (powered by a Large Language Model (LLM) like Google Gemini and the Perplexity search tool) researches the book idea.  It focuses on crafting a compelling book description, identifying the target audience, and conducting general book research to maximize bestseller potential.  The research brief is then saved back to Airtable.
    *   **Chapter Generation:** If the action is "Generate Chapters," an LLM generates 7-10 chapter titles and descriptions based on the book idea and previous research.  A structured output parser ensures the chapter data is in the correct format. The chapters are then split into individual items and saved as separate records in the "Chapter" table in Airtable, linked to the main book record.
    *   **Chapter Research Generation:** If the action is "Generate Chapter Research," another AI Agent conducts in-depth research on a specific chapter, using the Perplexity search tool multiple times. It focuses on finding stories, case studies, historical events, and expert perspectives to make the chapter engaging and credible. The research is saved back to the "Chapter" record in Airtable.
    *   **Chapter Content Generation:** If the action is "Generate Chapter Content," an LLM writes the full content of the chapter, using the research gathered in the previous step, the overall book research, and the chapter description.  The generated content is saved back to the "Chapter" record in Airtable.
5.  **Airtable Updates:**  In each of the AI processing steps, the workflow updates the corresponding Airtable record (either "Book" or "Chapter") with the generated results (research, chapter details, or content) and sets the "Action" field back to "Idle."

**Set Up Steps:**

![image.png](fileId:935)

1.  **Airtable Setup (Estimated time: 10-15 minutes):**
    *   Copy the Airtable base blueprint: [https://airtable.com/appfkz4KUlKvOjtbp/shra78TlDfqLRdSfT](https://airtable.com/appfkz4KUlKvOjtbp/shra78TlDfqLRdSfT). This will create the "Book" and "Chapter" tables with the necessary fields.
    *   In the "Book" table, create three Airtable Automations:
        *   **Trigger:** When a record matches conditions -&gt; `Action` is `Generate Book Details`
        *   **Action:** Run a script. Use the following script:

            ```javascript
            let autoRoute = input.config();
            await fetch(autoRoute.webhookUrl + "?recordId=" + autoRoute.recordId + "&action=" + autoRoute.action);
            ```
        *       In the script action's configuration, add three "Input variables":
                 *   `webhookUrl` (map it to your n8n webhook URL, obtained in the next step)
                 *   `recordId` (map it to the Airtable record ID)
                 *  `action` (map it to `Action`)
        *   Repeat this process to create two more automations in the "Book" table, identical except triggered when `Action` is `Generate Chapters`, respectively.
    *   In the "Chapter" table, create two Airtable Automations:
        *   **Trigger:** When a record matches conditions -&gt; `Action` is `Generate Chapter Research`
        *   **Action:** Run a script (use the same script as above, with the same input variables).
        *   Create a second automation, identical except triggered when `Action` is `Generate Chapter Content`.

2.  **n8n Setup (Estimated time: 15-20 minutes):**
    *   Import the provided JSON workflow into n8n.
    *   **Webhook Node:**
        *   Copy the "Test URL" from the Webhook node.  This is the `webhookUrl` you'll use in the Airtable automations.  *Important: Once you've tested and are ready to go live, switch to the "Production URL."*
    *   **Airtable Nodes:**
        *   Configure *all* Airtable nodes (there are eight).  You'll need to connect your Airtable account using OAuth 2.  Select the correct Base ("Book Agency \[v1] Cobuild" or whatever you named it) and Table ("Book" or "Chapter") for each node.  The field mappings are already defined in the template, but double-check them.
    *   **LLM Nodes (Google Gemini & OpenAI):**
        *   Connect your Google Gemini and OpenAI accounts to the respective LLM nodes. You'll need API keys for both. You may also configure different LLM Models.
    *  **Perplexity Nodes**
        *  Connect your Perplexity AI API to the Perplexity nodes. You'll need API keys for that.
    *   **Activate** the workflow.

3. **Testing (Estimated Time: 5-10 minutes):**
     * Go to your Airtable "Book" table. Create a New Record.
     *  Fill in the "Idea" field with a book concept.
     *  Change the "Action" field to "Generate Book Details".
     *   The Airtable automation should trigger, sending a request to your n8n webhook.
     *   Monitor the n8n execution log to see the workflow in action.
      *   Check the Airtable record to see if the "Research" field is populated.
      *  Repeat the testing for `Generate Chapters`, `Generate Chapter Research` and `Generate Chapter Content`.

## 🔗 Nodes Used

Airtable, Webhook, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
