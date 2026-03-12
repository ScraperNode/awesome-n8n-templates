# ⚒️ Run multiple tasks in parallel with asynchronous processing and webhooks

> ⚡ **1,294 views** · ⚒️ [Engineering](../)

## Description

## n8n Asynchronous Workflow with Wait Node POC
This template contains a two-part workflow designed to demonstrate a proof-of-concept for asynchronous and parallel execution of tasks in n8n.
### Purpose
The purpose of this template is to showcase how you can run multiple long-running tasks simultaneously without blocking your main workflow. It utilizes the "Wait For Sub-workflow Completion" option and the "Wait" node to effectively manage concurrent execution and collect results from sub-workflows via webhooks. This pattern is ideal for use cases involving batch processing or any scenario where a workflow needs to trigger multiple independent tasks and wait for all of them to report back.
### Setup Instructions
1. **Import:** Import both the "Main Orchestrator" and "Asynchronous Worker" workflows into your n8n instance.
2. **Link Workflows:** In the "Main Orchestrator" workflow, ensure the "Execute Workflow" node is correctly configured to call the "Asynchronous Worker" workflow. You can select it by its name from the dropdown menu.
3. **Configure:** The template is pre-configured to run two parallel tasks with different `wait` durations to simulate a real-world scenario. You can adjust the parameters on the "Execute Workflow" node to test different wait times.
4. **Execution:** Execute the "Main Orchestrator" workflow. You will see the workflow pause at the "Wait" nodes while the "Asynchronous Worker" workflows run in the background. Once they complete, they will call back via the webhook, allowing the main workflow to resume and summarize the results.


For a detailed walkthrough of how this template works and an explanation of the underlying concepts, please read the [full blog post here](https://n8nplaybook.com/post/2025/09/asynchronous-n8n-workflows-parallel-processing-poc/)

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
