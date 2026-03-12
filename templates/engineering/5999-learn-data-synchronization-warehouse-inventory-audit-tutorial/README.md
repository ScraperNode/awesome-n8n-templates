# ⚒️ 🎓 Learn Data Synchronization: Warehouse Inventory Audit Tutorial

> ⚡ **2,326 views** · ⚒️ [Engineering](../)

## Description

## How it works

This template is a hands-on tutorial for one of n8n's most powerful data tools: the **Compare Datasets** node. It's the perfect next step after learning basic logic, showing you how to build robust data synchronization workflows.

We use a simple **Warehouse Audit** analogy to make the concept crystal clear:
*   **Warehouse A:** Our main, "source of truth" database. This is the master list of what our inventory *should* be.
*   **Warehouse B:** A second, remote database (like a Notion page or Google Sheet) that we need to keep in sync.
*   **The Compare Datasets Node:** This is our **Auditor**. It takes both inventory lists and meticulously compares them to find any discrepancies.

The Auditor then sorts every item into one of four categories, which correspond to the node's four outputs:
1.  **In A only:** New products found in our main warehouse that need to be **added** to Warehouse B.
2.  **Same:** Products that match perfectly in both warehouses. **No action needed!**
3.  **Different:** Products that exist in both places but have different details (e.g., stock count). These need to be **updated** in Warehouse B.
4.  **In B only:** Extra products found in Warehouse B that aren't in our master list. These need to be **deleted**.

This pattern is the foundation for any two-way data sync you'll ever need to build.

## Set up steps

**Setup time: 0 minutes!**

This workflow is a self-contained tutorial and requires no setup or credentials.

1.  Click **"Execute Workflow"** to start the audit.
2.  Explore the two `Set` nodes ("Warehouse A" and "Warehouse B") to see the initial data we are comparing.
3.  Click on **"The Auditor" (Compare Datasets node)** to see how it's configured to use `product_id` as the matching key.
4.  Follow the outputs to the four `NoOp` nodes to see which products were sorted into each category.
5.  Read the sticky notes next to each output—they explain exactly why each item ended up there.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
