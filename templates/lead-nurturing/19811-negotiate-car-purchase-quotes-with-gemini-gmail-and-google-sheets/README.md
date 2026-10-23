# 💬 Negotiate car purchase quotes with Gemini, Gmail, and Google Sheets

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/0B5IAirPe5o
This workflow captures vehicle inquiries via an n8n Form, looks up inventory details in Google Sheets, uses Google Gemini with Redis chat memory to draft a negotiated email quote, logs the lead to a second Google Sheet, and sends the response via Gmail.

## How it works
1. Receives a vehicle inquiry submission from an n8n Form with the selected car, contact details, and the customer’s message.
2. Normalizes the form data by generating a unique deal ID, extracting the car ID, and standardizing the customer contact fields.
3. Looks up the vehicle record in a Google Sheets inventory spreadsheet using the car ID.
4. If the car ID is missing or not found, sends a “vehicle not found” email to the customer via Gmail.
5. If the vehicle is found, prepares a deal context (vehicle details, pricing fields, and availability) and sends the customer message to a Google Gemini–powered agent with Redis-based conversation memory.
6. The agent calls tools to return official vehicle details and to calculate an acceptable price (accept/counter/unavailable/invalid) before generating structured HTML email output.
7. Appends or updates the lead in a Google Sheets “Car Inquiry Leads” spreadsheet (matched by customer email) and then sends the generated reply to the customer via Gmail.

## Setup
1. Connect Google Sheets using a Google Service Account and update the document IDs/sheet tabs for both the inventory spreadsheet and the leads spreadsheet.
2. Ensure the inventory sheet includes columns for car_id, year, make, model, trim, mileage, list_price, floor_price, and status (with status set to “available” when negotiable).
3. Add a Google Gemini (Google PaLM) API credential and select the desired Gemini model.
4. Add a Redis credential for chat memory and confirm the Redis instance is reachable from your n8n environment.
5. Add a Gmail OAuth2 credential and set the sending mailbox you want to use for customer replies.
6. Publish the n8n Form and share its URL with customers (or embed it) to start collecting inquiries.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Redis Chat Memory, Structured Output Parser, Code Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
