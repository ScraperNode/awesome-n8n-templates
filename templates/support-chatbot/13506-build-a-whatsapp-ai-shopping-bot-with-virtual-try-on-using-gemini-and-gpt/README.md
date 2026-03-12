# 💬 Build a WhatsApp AI shopping bot with virtual try-on using Gemini and GPT

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Build a WhatsApp AI shopping bot with virtual try-on using Gemini

---

📌 Overview

This workflow fully automates your T-shirt store's WhatsApp shopping experience using GPT for intent detection, MongoDB Atlas for vector-based product search, Redis for session management, and Google Gemini for AI-powered virtual try-on.

It automatically handles customer messages, finds relevant products, processes orders, and generates realistic try-on images — all inside WhatsApp, with no app or website required.

Customers can search for T-shirts, place orders, and virtually try on items in a single conversation. Redis ensures fast product caching and session tracking. MongoDB Atlas stores the product catalog and orders. Google Sheets logs every order automatically. Gemini generates realistic try-on images from customer selfies.

This workflow eliminates manual order handling, improves customer experience, and gives store owners full visibility into orders and product searches.

⚙️ How it works

This workflow runs automatically when a customer sends a WhatsApp message.

🔍 Product search

* 💬 Receives the customer message via WhatsApp Business API
* 🧠 GPT classifies the intent as product search, recommendation, or general query
* ⚡ Checks Redis cache for existing results (TTL: 1 hour)
* 🔎 On a cache miss, runs MongoDB Atlas vector search using OpenAI embeddings
* 🛍️ Sends matching products as interactive WhatsApp cards with Order Now and Virtual Try-On buttons

🛒 Order flow

* 👆 Triggered when the customer taps the Order Now button
* 📦 AI agent fetches product details from MongoDB
* 🗃️ Creates a new order document in MongoDB
* 📊 Logs the order to Google Sheets automatically
* ✅ Sends an order confirmation message to the customer via WhatsApp

👗 Virtual try-on flow

* 👆 Triggered when the customer taps the Virtual Try-On button
* 💾 Stores the product ID in Redis (TTL: 10 minutes)
* 📸 Prompts the customer to send a clear front-facing selfie
* 🔍 Gemini validates that exactly one real person is in the photo
* 🖼️ Merges the product image and selfie and generates a realistic try-on image
* 📩 Sends the try-on result back to the customer via WhatsApp
* 🗑️ Clears the Redis context after delivery

🛠 Setup steps

1. Import this workflow into n8n
2. Connect your WhatsApp Business Cloud API credentials
3. Connect your OpenAI API credentials (for embeddings and GPT model)
4. Connect your Google Gemini API credentials
5. Connect your MongoDB Atlas credentials and create a vector index named ShopingBot on the product collection
6. Connect your Redis credentials
7. Connect your Google Drive service account credentials
8. Connect your Google Sheets service account credentials
9. Import your product catalog with embeddings into the MongoDB product collection
10. Activate the workflow

The workflow will run automatically when customers send WhatsApp messages.

🚀 Features

🧠 AI-powered shopping

* 🤖 Automatically classifies customer intent using GPT
* 🔎 Semantic product search using OpenAI embeddings and MongoDB Atlas vector search
* ⚡ Redis caching for ultra-fast repeated search results (TTL: 1 hour)
* 💬 Interactive WhatsApp product cards with Order Now and Virtual Try-On buttons
* 🔄 Sliding window session memory (last 20 messages per user)

🛒 Order management

* 📦 Fully automated order creation saved to MongoDB
* 📊 Automatic order logging to Google Sheets
* 🤖 AI agent handles the complete order flow without manual input
* ✅ Instant order confirmation sent to the customer via WhatsApp

👗 Virtual try-on

* ✨ AI-powered try-on image generation using Google Gemini
* 📷 Selfie validation ensures exactly one real person is in the photo
* 🖼️ Product and selfie images resized and merged before generation
* 📩 Try-on result delivered directly in the WhatsApp conversation
* 🗑️ Redis TTL automatically clears try-on context after delivery

🔐 Security and reliability

* 🛡️ Advanced message validation with spam and XSS protection
* ❌ Unsupported message types rejected with friendly error messages
* 🔁 Retry logic on critical HTTP request nodes
* 📦 Modular workflow architecture for easy customisation and scaling

📋 Requirements

You need the following accounts and credentials:

* 🔧 n8n
* 📱 WhatsApp Business Cloud API
* 🤖 OpenAI API (embeddings and GPT model)
* ✨ Google Gemini API
* 🍃 MongoDB Atlas (with vector index named ShoppingBot on the product collection)
* ⚡ Redis server
* 📁 Google Drive (service account)
* 📊 Google Sheets (service account)

🎯 Benefits

* 🚀 Fully automated WhatsApp shopping experience
* 🙌 No manual order handling required
* 👗 Customers can try on products before buying
* ⚡ Fast product search with Redis caching
* 📊 All orders automatically tracked in Google Sheets
* 💼 Reduces support workload for store owners
* 🕐 Works 24/7 without human intervention

👨‍💻 Author

BytezTech Pvt Ltd

## 🔗 Nodes Used

Edit Image, HTTP Request, Redis, Google Drive, MongoDB, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
