# 🔧 🎓 Learn API Fundamentals with an Interactive Hands-On Tutorial Workflow

> ⚡ **45,028 views** · 🔧 [Miscellaneous](../)

## Description

### How it works

This template is an interactive, hands-on tutorial designed to demystify what an API is and how it works, right inside your n8n canvas.

It uses a simple restaurant analogy to explain the core concepts:
*   **You** are the "Client" (an **HTTP Request** node).
*   The **Kitchen** is the "Server" (a **Webhook** node).
*   The **API** is the **Menu and the Waiter**—the set of rules for how you can ask for things and get a response.

The workflow is a series of self-contained lessons. Each lesson pairs an HTTP Request node (the customer placing an order) with a Webhook node (the kitchen receiving and responding to the order) to demonstrate a key concept:

1.  **The Basics:** Making a simple `GET` request to a `URL`.
2.  **Customizing:** Using `Query Parameters` to filter or modify your request.
3.  **Sending Data:** Using the `POST` method and a `Body` to send information to the server.
4.  **Identification:** Using `Headers` and simple `Authentication` to prove who you are.
5.  **Handling Delays:** Understanding how `Timeouts` prevent your workflow from getting stuck.

### Set up steps

**Setup time: &lt; 1 minute**

This workflow is a self-contained tutorial and requires no external services or credentials. You may want to check the Base URL.

1.  Click **"Execute Workflow"** to run the entire tutorial.
2.  Follow the flow from top to bottom, exploring each "Lesson".
3.  For each lesson, click on the **HTTP Request** node and its corresponding **Webhook** node to see how they are configured and what they do.
4.  Read the sticky notes next to each lesson—they contain the core explanations!

That's it! Explore and have fun learning the fundamentals of APIs in an interactive way.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
