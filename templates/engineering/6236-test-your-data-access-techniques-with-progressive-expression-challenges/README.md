# ⚒️ 🧑‍🎓 Test your data access techniques with progressive expression challenges

> ⚡ **2,201 views** · ⚒️ [Engineering](../)

## Description

## How it works

This template is a hands-on, practical exam designed to help you master **n8n Expressions**—the key to accessing and manipulating data in your workflows.

If the `🎓 Expressions Tutorial Template` was the theory lesson, this is the **practical driving test**. You'll learn how to navigate through complex data structures to get the exact piece of information you need. All challenges will reference a single **"Source Data"** node, which acts as our data "map".

The test is a series of six sequential challenges that build in complexity:
1.  **Basic Access:** Getting a simple value from an object.
2.  **Array Access:** Targeting a specific item in a list.
3.  **Nested Object Access:** Reaching data inside another object.
4.  **Array of Objects:** Combining array and object skills to get a specific value from a list of objects.
5.  **Using JavaScript:** Applying simple JavaScript functions (like `.toUpperCase()`) to your data.
6.  **Combining Text & Expressions:** Creating dynamic strings that mix static text with data from previous nodes.

For each challenge, you'll write an expression in a "Test" node. When you execute the workflow, an `IF` node will instantly validate your answer, giving you a green path for success or a red path with a hint if you need to try again.

## Set up steps

**Setup time: &lt; 1 minute**

This workflow is a self-contained test and requires no setup or credentials.

1.  Read the instructions on the main sticky note to understand the goal.
2.  Start with the first challenge, **"Test - Basic Access"**. Modify the node by writing the correct expression in the value field, according to the instructions on the purple sticky note.
3.  Click **"Execute Workflow"**.
4.  If the execution path is green, you've passed! The next "Test" node in the sequence will automatically be enabled for you to continue. If the path is red, read the hint in the error message and try again.
5.  Repeat the process until you reach the final success message and become an expressions pro.

**Good Luck!**

## 🔗 Nodes Used

Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
