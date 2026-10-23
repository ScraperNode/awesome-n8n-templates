# 🎬 Generate Seedance videos with the Vancine Doubao API using polling

> ⚡ **8 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Generate Seedance videos through the Vancine API, automatically poll asynchronous tasks, return the final video URL, and handle failed or timed-out generations with bounded retries.

## How it works
1. Starts manually to define the Seedance model, prompt, video size, base URL, and polling limits.
2. Sends a POST request to the Vancine `/v1/video/generations` endpoint to create a video generation task.
3. Extracts and stores the returned task ID and initializes polling state (interval and maximum attempts).
4. Waits for the configured interval, then sends a GET request to `/v1/video/generations/{task_id}` to check task status.
5. Repeats polling until the task status is completed or until the maximum poll count is reached.
6. Outputs the generated video `result_url` when completed, or stops with an error if the task fails or times out.

## Setup
1. Create an HTTP Header Auth credential with Name set to Authorization and Value set to Bearer YOUR_VANCINE_API_KEY. Assign the same credential to both HTTP Request nodes: submitTask and pollTask.
2. Confirm the Vancine API base URL in the workflow (default `https://vancine.com`) matches your environment.
3. Update the prompt, model, size, and polling settings (intervalSeconds and maxPolls) to fit your use case and expected render time.

## Requirements
- Requires an n8n instance with standard HTTP Request, Wait, IF, Merge, Set, Code, and Stop And Error nodes, plus a Vancine account, API key, available credit, and access to the supported Seedance model. Verified on n8n 2.30.4.

## Customization
- Replace the Manual Trigger with a Webhook, Form, or Schedule Trigger; customize the model, prompt, video size, polling interval, and maxPolls in setFields; then route result_url to storage, databases, messaging apps, or publishing workflows.

## Additional info
Start here:
https://vancine.com/seedance-api?utm_source=n8n&utm_medium=workflow_template&utm_campaign=seedance_starter_kit&utm_content=creator_template

API documentation:
https://vancine.com/docs#video

Tested cURL, Node.js, Python, Postman, and n8n examples:
https://github.com/VancineAI/seedance-api-starter

## 🔗 Nodes Used

HTTP Request, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
