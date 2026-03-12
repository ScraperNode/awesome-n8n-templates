# 🤖 High-Speed AI Chat with OpenAI's gpt-oss-120B Model via Cerebras Inference

> ⚡ **712 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Overview

This n8n workflow provides seamless integration with Cerebras' high-performance inference platform to leverage OpenAI's open-source GPT-OSS-120B model. With industry-leading speeds of thousands of tokens per second and ultra-low latency under 0.5 seconds, this template enables developers and businesses to build responsive AI applications without the complexity of managing infrastructure or dealing with slow response times that plague traditional AI integrations.

## How it works

This streamlined workflow establishes a direct connection to Cerebras' inference API through four simple nodes. When a chat message is received, the workflow processes it through the configured API key, sends it to the Cerebras endpoint with your specified parameters (temperature, completion tokens, top P, reasoning effort), and returns the AI-generated response.

## Detailed Workflow Explanation

**1. When chat message received**: This trigger node initiates the workflow whenever a new chat message is detected. It captures the user's input and passes it to the next node in the chain, supporting various input formats and message sources.

**2. Set API Key**: A manual configuration node where you securely store your Cerebras API key. This node handles authentication and ensures your requests are properly authorized when communicating with the Cerebras inference API.

**3. Cerebras endpoint**: The core HTTP request node that communicates with Cerebras' chat completions API. This node is pre-configured to work with the GPT-OSS-120B model and includes parameter settings for temperature, completion tokens, top P, and reasoning effort that can be customized based on your specific needs.

**4. Return Output**: The final node that processes and formats the AI response, delivering the generated text back to your application or user interface in a clean, usable format.

## Who is it for

**Developers** building real-time chat applications, conversational AI systems, or interactive web applications who need consistent sub-second response times without managing complex AI infrastructure.

**Content creators** and marketing teams who require rapid text generation for blogs, social media content, product descriptions, or marketing copy, enabling faster content production cycles and improved productivity.

**Businesses** implementing customer service automation, lead qualification systems, or interactive FAQ solutions where response latency directly impacts user experience and conversion rates.

**SaaS companies** looking to integrate AI features into existing products without the overhead of training models or managing inference servers, allowing them to focus on core business logic.

**Researchers and data scientists** experimenting with high-performance language models for prototyping, A/B testing different prompting strategies, or conducting performance benchmarks against other AI providers.

**Startups and small teams** seeking enterprise-grade AI capabilities without the infrastructure costs or technical complexity typically associated with large language model deployment.

## Comprehensive Setup Instructions

**1. Cerebras Account Setup**
- Visit Cerebras and create a new account
- Complete email verification and profile setup
- Navigate to the API Keys section in your dashboard
- Generate a new API key and securely store it
- Review the rate limits for free tier accounts and upgrade if needed

**2. N8N Workflow Configuration**
- Import the template into your n8n instance
- Click on the "Set API Key" node and enter your Cerebras API key
- Configure the trigger node based on your input source (webhook, manual, scheduled)
- Test the workflow using the built-in execution feature

**3. Parameter Customization**
- Open the "Cerebras endpoint" node to access the parameter configuration
- Adjust temperature, completion tokens, top P, and reasoning effort based on your use case
- Save and test the workflow to ensure proper functionality

## Customization and Configuration Guide

**Model Parameters in the Cerebras Endpoint Node**:
- **Temperature** (0.0-2.0): Lower values (0.1-0.3) for factual, consistent responses; higher values (0.7-1.5) for creative, varied content
- **Completion Tokens**: Set based on expected response length - 150 for short answers, 500+ for detailed explanations, 1000+ for long-form content
- **Top P** (0.1-1.0): Controls response diversity; 0.9 works well for most applications, lower values for more focused responses
- **Reasoning Effort**: Adjusts the model's computational effort for complex reasoning tasks; higher values for analytical or problem-solving queries

**Use Case Specific Configurations**:
- **Customer Support**: Temperature 0.2, moderate completion tokens, consistent helpful responses
- **Creative Writing**: Temperature 1.0-1.2, higher completion tokens for diverse, imaginative content
- **Technical Documentation**: Temperature 0.3, structured output with examples and code snippets
- **Casual Conversation**: Temperature 0.7, balanced creativity and coherence

**Integration Scenarios**:
- Connect the trigger to webhooks for external application integration
- Modify the output node to format responses for specific platforms (Slack, Discord, web apps)
- Add conditional logic to handle different types of user queries
- Implement input validation and sanitization for production environments

## Possible Enhancements

**Multi-model support**: Extend the workflow to switch between different Cerebras models based on query complexity or specific requirements.

**Response caching**: Add caching mechanisms to store frequently requested responses, reducing API calls and improving performance.

**Advanced error handling**: Implement retry logic and fallback mechanisms for improved reliability in production environments.

**Content filtering**: Integrate moderation capabilities to ensure appropriate responses in customer-facing applications.

**Analytics integration**: Connect monitoring tools to track usage patterns, response quality, and performance metrics.

**Multi-channel triggers**: Set up automated responses for various platforms like Slack, Discord, or custom webhooks.

**Template management**: Create reusable prompt templates for different scenarios and use cases.

**Output formatting**: Add post-processing for specific output formats (HTML, Markdown, JSON) based on integration requirements.

## 🔗 Nodes Used

HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
