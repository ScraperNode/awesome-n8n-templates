# 🧾 Generate Square invoices and subscriptions from text with GPT-4o Mini

> ⚡ **4 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This sub-workflow accepts plain-language invoice details from a parent workflow, uses OpenAI to normalize and structure the data, then uses the Square API to find or create the customer, create and publish an invoice, and optionally create a monthly subscription, returning the public invoice URL.

## How it works
1. Receives invoice fields (name, email, item, amount, notes, recurring flag, and date) from a parent workflow via an Execute Workflow trigger.
2. Uses OpenAI (GPT-4o-mini) with a structured output parser to clean and normalize the invoice data, including converting the date to YYYY-MM-DD and generating a unique invoice number.
3. Searches Square Customers by email and creates a new Square customer if no match is found.
4. Retrieves the Square customer profile and checks whether the customer has a card on file.
5. Creates a Square order and then creates and publishes a Square invoice configured for email delivery.
6. If the invoice is marked as Monthly, creates a Square subscription plan and plan variation and attaches the subscription to the customer; otherwise returns the published invoice public URL to the parent workflow.

## Setup
1. Add an OpenAI credential for the OpenAI chat model nodes used by the agent and structured output parser.
2. Create a Square access token and replace `YOUR_SQUARE_ACCESS_TOKEN` in the Authorization header on every Square HTTP request.
3. Set your Square location ID by replacing `YOUR_SQUARE_LOCATION_ID` in the Create Order and Attach Subscription requests.
4. Call this workflow from a parent workflow and pass the expected input fields (Name, Email, Item, Amount, Notes, Recurring, and Date).

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
