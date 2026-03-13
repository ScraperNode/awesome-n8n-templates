# 🎬 E-commerce product fine-tuning with Bright Data and OpenAI

> ⚡ **1,489 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![finetuning gpt4o.PNG](fileId:1577)

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

This workflow automates the process of scraping product data from e-commerce websites and using it to fine-tune a custom OpenAI GPT model for generating high-quality marketing copy and product descriptions.

### Main Use Cases

* [Fine-tune OpenAI models](https://platform.openai.com/docs/guides/fine-tuning/fine-tuning) with real product data from hundreds of supported e-commerce websites for marketing content generation.
* Create custom AI models specialized in writing compelling product descriptions across different industries and platforms.
* Automate the entire pipeline from data collection to model training using Bright Data's extensive scraper library.
* Generate marketing copy using your custom-trained model via an interactive chat interface.

### How it works

The workflow operates in two main phases: model training and model usage, organized into these stages:

1. **Data Collection & Processing**
   * Manually triggered to start the fine-tuning process.
   * Uses [Bright Data's web scraper](https://brightdata.com/products/web-scraper) to extract product information from any supported e-commerce platform (Amazon, eBay, Shopify stores, Walmart, Target, and hundreds of other websites).
   * Collects product titles, brands, features, descriptions, ratings, and availability status from your chosen platform.
   * Easily customizable to scrape from different websites by simply changing the dataset configuration and product URLs.

2. **Training Data Preparation**
   * A Code node processes the scraped product data to create training examples in OpenAI's required JSONL format.
   * For each product, generates a complete training example with:
     * System message defining the AI's role as a marketing assistant.
     * User prompt containing specific product details (title, brand, features, original description snippet).
     * Assistant response providing an ideal marketing description template.
   * Compiles all training examples into a single JSONL file ready for OpenAI fine-tuning.

3. **Model Fine-Tuning**
   * Uploads the training file to OpenAI using the OpenAI File Upload node.
   * Initiates a fine-tuning job via HTTP Request to OpenAI's fine-tuning API using the GPT-4o-mini model as the base.
   * The fine-tuning process runs on OpenAI's servers to create your custom model.

4. **Interactive Chat Interface**
   * Provides a chat trigger that allows real-time interaction with your fine-tuned model.
   * An AI Agent node connects to your custom-trained OpenAI model.
   * Users can chat with the model to generate product descriptions, marketing copy, or other content based on the training.

5. **Custom Model Integration**
   * The OpenAI Chat Model node is configured to use your specific fine-tuned model ID.
   * Delivers responses trained on your product data for consistent, high-quality marketing content.

### Summary Flow:

Manual Trigger → Scrape E-commerce Products (Bright Data) → Process & Format Training Data (Code) → Upload Training File (OpenAI) → Start Fine-Tuning Job (HTTP Request) | Parallel: Chat Trigger → AI Agent → Custom Fine-Tuned Model Response

### Benefits:

* Fully automated pipeline from raw product data to trained AI model.
* Works with hundreds of different e-commerce websites through Bright Data's extensive scraper library.
* Creates specialized models trained on real e-commerce data for authentic marketing copy across various industries.
* Scalable solution that can be adapted to different product categories, niches, or websites.
* Interactive chat interface for immediate access to your custom-trained model.
* Cost-effective fine-tuning using OpenAI's most efficient model (GPT-4o-mini).
* Easily customizable with different websites, product URLs, training prompts, and model configurations.

### Setup Requirements:

* Bright Data API credentials for web scraping (supports hundreds of e-commerce websites).
* OpenAI API key with fine-tuning access.
* Replace placeholder credential IDs and model IDs with your actual values.
* Customize the product URLs list and Bright Data dataset for your specific website and use case.
* The workflow can be adapted for any e-commerce platform supported by Bright Data's scraping infrastructure.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
