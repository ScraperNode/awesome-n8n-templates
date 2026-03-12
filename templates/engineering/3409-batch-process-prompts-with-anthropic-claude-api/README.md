# ⚒️ Batch process prompts with Anthropic Claude API

> ⚡ **1,974 views** · ⚒️ [Engineering](../)

## Description

This workflow template provides a robust solution for efficiently sending multiple prompts to Anthropic's Claude models in a single batch request and retrieving the results. It leverages the Anthropic Batch API endpoint (`/v1/messages/batches`) for optimized processing and outputs each result as a separate item.

**Core Functionality & Example Usage Included**

This template includes:
1.  **The Core Batch Processing Workflow:** Designed to be called by another n8n workflow.
2.  **An Example Usage Workflow:** A separate branch demonstrating how to prepare data and trigger the core workflow, including examples using simple strings and n8n's [Langchain Chat Memory nodes](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow/).

## Who is this for?

This template is designed for:

* **Developers, data scientists, and researchers** who need to process large volumes of text prompts using Claude models via n8n.
* **Content creators** looking to generate multiple pieces of content (e.g., summaries, Q&As, creative text) based on different inputs simultaneously.
* **n8n users** who want to automate interactions with the Anthropic API beyond single requests, improve efficiency, and integrate batch processing into larger automation sequences.
* Anyone needing to perform **bulk text generation or analysis** tasks with Claude programmatically.

## What problem does this workflow solve?

Sending prompts to language models one by one can be slow and inefficient, especially when dealing with hundreds or thousands of requests. This workflow addresses that by:

* **Batching:** Grouping multiple prompts into a single API call to Anthropic's dedicated batch endpoint (`/v1/messages/batches`).
* **Efficiency:** Significantly reducing the time required compared to sequential processing.
* **Scalability:** Handling large numbers of prompts (up to API limits) systematically.
* **Automation:** Providing a ready-to-use, callable n8n structure for batch interactions with Claude.
* **Structured Output:** Parsing the results and outputting each individual prompt's result as a separate n8n item.

**Use Cases:**

* Bulk content generation (e.g., product descriptions, summaries).
* Large-scale question answering based on different contexts.
* Sentiment analysis or data extraction across multiple text snippets.
* Running the same prompt against many different inputs for research or testing.

## What the Core Workflow does

*(Triggered by the 'When Executed by Another Workflow' node)*

1.  **Receive Input:** The workflow starts when called by another workflow (e.g., using the 'Execute Workflow' node). It expects input data containing:
    * `anthropic-version` (string, e.g., "2023-06-01")
    * `requests` (JSON array, where each object represents a single prompt request conforming to the Anthropic Batch API schema).
2.  **Submit Batch Job:** Sends the formatted `requests` data via `POST` to the Anthropic API `/v1/messages/batches` endpoint to create a new batch job. Requires Anthropic credentials.
3.  **Wait & Poll:** Enters a loop:
    * Checks if the `processing_status` of the batch job is `ended`.
    * If not `ended`, it waits for a set interval (**10 seconds** by default in the 'Batch Status Poll Interval' node).
    * It then checks the batch job status again via `GET` to `/v1/messages/batches/{batch_id}`. Requires Anthropic credentials.
    * This loop continues until the status is `ended`.
4.  **Retrieve Results:** Once the batch job is complete, it fetches the results file by making a `GET` request to the `results_url` provided in the batch status response. Requires Anthropic credentials.
5.  **Parse Results:** The results are typically returned in JSON Lines (`.jsonl`) format. The 'Parse response' Code node splits the response text by newlines and parses each line into a separate JSON object, storing them in an array field (e.g., `parsed`).
6.  **Split Output:** The 'Split Out Parsed Results' node takes the array of parsed results and outputs each result object as an individual item from the workflow.

## Prerequisites

* An active **n8n instance** (Cloud or self-hosted).
* An **Anthropic API account** with access granted to Claude models and the Batch API.
* Your **Anthropic API Key**.
* Basic understanding of n8n concepts (nodes, workflows, credentials, expressions, 'Execute Workflow' node).
* Familiarity with JSON data structures for providing input prompts and understanding the output.
* Understanding of the Anthropic Batch API request/response structure.
* *(For Example Usage Branch)* Familiarity with n8n's Langchain nodes (`@n8n/n8n-nodes-langchain`) if you plan to adapt that part.

## Setup

1.  **Import Template:** Add this template to your n8n instance.
2.  **Configure Credentials:**
    * Navigate to the 'Credentials' section in your n8n instance.
    * Click 'Add Credential'.
    * Search for 'Anthropic' and select the Anthropic API credential type.
    * Enter your Anthropic API Key and save the credential (e.g., name it "Anthropic account").
3.  **Assign Credentials:** Open the workflow and locate the **three HTTP Request nodes** in the core workflow:
    * `Submit batch`
    * `Check batch status`
    * `Get results`
    In each of these nodes, select the Anthropic credential you just configured from the 'Credential for Anthropic API' dropdown.
4.  **Review Input Format:** Understand the required input structure for the `When Executed by Another Workflow` trigger node. The primary inputs are `anthropic-version` (string) and `requests` (array). Refer to the **Sticky Notes** in the template and the [Anthropic Batch API documentation](https://docs.anthropic.com/en/api/batch) for the exact schema required within the `requests` array.
5.  **Activate Workflow:** Save and activate the core workflow so it can be called by other workflows.

**➡️ Quick Start & Input/Output Examples:** Look for the **Sticky Notes** within the workflow canvas! They provide crucial information, including examples of the required input JSON structure and the expected output format.

## How to customize this workflow

* **Input Source:** The core workflow is designed to be called. You will build *another* workflow that prepares the `anthropic-version` and `requests` array and then uses the 'Execute Workflow' node to trigger this template. The included example branch shows how to prepare this data.
* **Model Selection & Parameters:** Model (`claude-3-opus-20240229`, etc.), `max_tokens`, `temperature`, and other parameters are defined *within each object* inside the `requests` array you pass to the workflow trigger. You configure these in the workflow *calling* this template.
* **Polling Interval:** Modify the 'Wait' node ('Batch Status Poll Interval') duration if you need faster or slower status checks (default is 10 seconds). Be mindful of potential rate limits.
* **Parsing Logic:** If Anthropic changes the result format or you have specific needs, modify the Javascript code within the 'Parse response' Code node.
* **Error Handling:** Enhance the workflow with more specific error handling for API failures (e.g., using 'Error Trigger' or checking HTTP status codes) or batch processing issues (`batch.status === 'failed'`).
* **Output Processing:** In the workflow that *calls* this template, add nodes after the 'Execute Workflow' node to process the individual result items returned (e.g., save to a database, spreadsheet, send notifications).

## Example Usage Branch (Manual Trigger)

This template also contains a separate branch starting with the `Run example` Manual Trigger node.

* **Purpose:** This branch demonstrates how to construct the necessary `anthropic-version` and `requests` array payload.
* **Methods Shown:** It includes steps for:
    * Creating a request object from a simple query string.
    * Creating a request object using data from n8n's Langchain Chat Memory nodes (`@n8n/n8n-nodes-langchain`).
* **Execution:** It merges these examples, constructs the final payload, and then uses the `Execute Workflow` node to call the main batch processing logic described above. It finishes by filtering the results for demonstration.
* **Note:** This branch is for demonstration and testing. You would typically build your own data preparation logic in a separate workflow. The use of Langchain nodes is optional for the core batch functionality.

## Notes

* **API Limits:** According to the [Anthropic API documentation](https://docs.anthropic.com/en/api/creating-message-batches), batches can contain up to 100,000 requests and be up to 256 MB in total size. Ensure your n8n instance has sufficient resources for large batches.
* **API Costs:** Using the Anthropic API, including the Batch API, incurs costs based on token usage. Monitor your usage via the Anthropic dashboard.
* **Completion Time:** Batch processing time depends on the number and complexity of prompts and current API load. The polling mechanism accounts for this variability.
* **Versioning:** Always include the `anthropic-version` header in your requests, as shown in the workflow and examples. Refer to [Anthropic API versioning documentation](https://docs.anthropic.com/en/api/versioning).

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter, Execution Data, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
