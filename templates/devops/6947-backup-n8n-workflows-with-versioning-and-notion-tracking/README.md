# ⚙️ Backup n8n workflows with versioning and Notion tracking

> ⚡ **765 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Copy n8n workflows to a slave n8n repository

Inspired by [Alex Kim's workflow](https://n8n.io/workflows/3048-clone-n8n-workflows-between-instances-using-n8n-api/), this version adds the ability to keep multiple versions of the same workflow on the destination instance. Each copied workflow’s name is prefixed with the date (`YYYY_MM_DD_`), enabling simple version tracking. Process details and workflow counts are recorded centrally in Notion.

## How it works

- Workflows from the **source n8n instance** are copied to the **destination** using the n8n API node.
- On the destination, each workflow name is prefixed with the current date (e.g., `2025_08_03_PDF Summarizer`), so you can keep multiple daily versions.
- The workflow tracks and saves:
    - The date of execution.
    - Number of workflows processed.
    - Both details are recorded in Notion.

### Rolling retention policy example:

- **Day 1:** Workflows are saved with `2025_08_03_` prefix.
- **Day 2:** New set saved with `2025_08_04_`.
- **Day 3:** Day 1’s set is deleted, new set saved as `2025_08_05_`.
- To keep more days, adjust the “Subtract From Date” node.

## How to use

1. **Create a Notion database** with one page and three fields:
    - `sequence`: Should contain `"prefix"`.
    - `Value`: Today's date as `YYYY_MM_DD_`.
    - `Comment`: Number of saved workflows.

2. **Configure the Notion node**:
    - Enter your Notion credentials.
    - Link to the created database/page.

3. **Update the "Subtract From Date" node**:
    - Set how many days’ versions you want to keep (default: 2 days).
    - Set the limit to 1 in the "Limit" node for testing.
4. **Input credentials** for both source and destination n8n instances.

## Requirements

- **Notion** for tracking execution date and workflow count.
- **n8n API Keys** for both source and destination instances. Ensure you have the necessary **API permissions** (read, create, delete workflows)
- **n8n version** this workflow was tested on 1.103.2 (Ubuntu)


## Need Help?

- Comment this [post](https://www.linkedin.com/posts/n8n-about_n8n-activity-7357850874024456192-c0eL/) or contact me on [LinkedIn](https://www.linkedin.com/in/stephaneheckel/)
- Ask in the [Forum](https://community.n8n.io/)!

## 🔗 Nodes Used

Notion, n8n, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
