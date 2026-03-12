# ⚒️ 🎓 Learn Workflow Logic with Merge, IF & Switch Operations

> ⚡ **4,230 views** · ⚒️ [Engineering](../)

## Description

## How it works

Ever wonder how to make your workflows smarter? How to handle different types of data in different ways? This template is a hands-on tutorial that teaches you the three most fundamental nodes for controlling the flow of your automations: **Merge**, **IF**, and **Switch**.

To make it easy to understand, we use a simple **package sorting center** analogy:
*   **Data Items** are packages on a conveyor belt.
*   The **Merge Node** is where multiple conveyor belts combine into one.
*   The **IF Node** is a simple sorting gate with two paths (e.g., "Fragile" or "Not Fragile").
*   The **Switch Node** is an advanced sorting machine that routes packages to many different destinations.

This workflow takes you on a step-by-step journey through the sorting center:

1.  **Creating Packages:** Three different "packages" (two letters and one parcel) are created using Set nodes.
2.  **Merging:** The first **Merge** node combines all three packages onto a single conveyor belt so they can be processed together.
3.  **Simple Sorting:** An **IF** node checks if a package is fragile. If `true`, it's sent down one path; if `false`, it's sent down another.
4.  **Re-Grouping:** After being processed separately, another **Merge** node brings the packages back together. This **"Split &gt; Process &gt; Merge"** pattern is a critical concept in n8n!
5.  **Advanced Sorting:** A **Switch** node inspects each package's `destination` and routes it to the correct output (London, New York, Tokyo, or a Default bin).

By the end, you'll see how all packages have been correctly sorted, and you'll have a solid understanding of how to build intelligent, branching logic in your own workflows.

## Set up steps

**Setup time: 0 minutes!**

This template is a self-contained tutorial and requires **zero setup**.

1.  There are no credentials or external services to configure.
2.  Simply click the **"Execute Workflow"** button.
3.  Follow the flow from left to right, clicking on each node to see its output and reading the detailed sticky notes to understand what's happening at each stage.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
