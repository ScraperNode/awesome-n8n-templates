# ⚒️ 🎓 Learn n8n expressions with an interactive step-by-step tutorial for beginners

> ⚡ **53,136 views** · ⚒️ [Engineering](../)

## Description

## How it works

This template is an interactive, step-by-step tutorial designed to teach you the most important skill in n8n: **using expressions to access and manipulate data**.

If you know what JSON is but aren't sure how to pull a specific piece of information from one node and use it in another, this workflow is for you. It starts with a single "Source Data" node that acts as our filing cabinet, and then walks you through a series of lessons, each demonstrating a new technique for retrieving and transforming that data.

You will learn how to:
1.  **Access a simple value** from a previous node.
2.  Use n8n's built-in selectors like **`.last()`** and **`.first()`**.
3.  Get a specific item from a list (**Array**).
4.  Drill down into nested data (**Objects**).
5.  Combine these techniques to access data in an **array of objects**.
6.  Go beyond simple retrieval by using **JavaScript functions** to do math or change text.
7.  Inspect data with utility functions like **`Object.keys()`** and **`JSON.stringify()`**.
8.  Summarize data from **multiple items** using `.all()` and arrow functions.

## Set up steps

**Setup time: 0 minutes!**

This workflow is a self-contained tutorial and requires no setup or external credentials.

1.  Click **"Execute Workflow"** to run the entire tutorial.
2.  Follow the flow from the "Source Data" node to the "Final Exam" node.
3.  For each lesson, click on the node to see how its expressions are configured in the parameters panel.
4.  Read the detailed sticky note next to each lesson—it breaks down exactly how the expression works and why.

By the end, you'll have the foundational knowledge to connect data and build powerful, dynamic workflows in n8n.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
