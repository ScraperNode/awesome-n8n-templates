# ⚒️ 🎓 Optimize Speed-Critical Workflows Using Parallel Processing (Fan-Out/Fan-In)

> ⚡ **2,679 views** · ⚒️ [Engineering](../)

## Description

## How it works

This template is a hands-on tutorial for one of the most advanced and powerful patterns in n8n: **asynchronous parallel processing**, also known as the **Fan-Out/Fan-In** model.

**When should you use this?**
Use this pattern when **speed is your top priority** and you have multiple independent, long-running tasks. Instead of running them one after another (which is slow), this workflow runs them all at the same time and waits for them all to finish.

We use a **Construction Project** analogy to explain the architecture:
*   **The Main Workflow (Top):** This is the **Project Manager**. It defines the project, assigns all the tasks to specialist teams, and then pauses, waiting for a final report.
*   **The Sub-Workflow (Bottom):** This represents the **Specialist Teams**. It's a single, reusable workflow that can perform any task it's assigned.
*   **Static Data (The Brains):** A hidden **Project Dashboard** is used to track the status of every task in real-time.

The process follows three key phases:
1.  **Fan-Out:** The Project Manager starts multiple sub-workflows at once *without* waiting for them to finish.
2.  **Asynchronous Execution:** Each Specialist Team works on its task independently and in parallel. When a team finishes, it updates its status on the Project Dashboard.
3.  **Fan-In:** The Project Manager, which has been paused by a `Wait` node, is only resumed when the Project Dashboard confirms that *all* tasks are complete. It then receives the aggregated results from all the parallel tasks.

## Set up steps

**Setup time: &lt; 1 minute**

This workflow is a self-contained tutorial. The only setup required is to configure the AI model.

1.  **Configure Credentials:**
    *   Go to the **`The AI Specialist`** node in the sub-workflow (bottom flow).
    *   Select your desired AI credential (Gemini in that case).
2.  **Execute the Workflow:**
    *   Click the **"Execute Workflow"** button on the `Start Project` node.
3.  **Explore and Learn:**
    *   Follow the execution path to see how the main workflow fans out, and how the sub-workflow is called multiple times.
    *   Click on each node and read the detailed sticky notes to understand its specific role in this advanced pattern.

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
