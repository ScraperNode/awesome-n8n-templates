# 💬 Vacation planning agent

> ⚡ **2,048 views** · 💬 [Support Chatbots](../)

## Description

# Vacation Planning Agent - n8n Workflow

## Overview

This n8n workflow creates an intelligent vacation planning chatbot that helps users find and book the perfect hotel accommodations. The agent acts as a professional travel consultant, systematically gathering travel requirements and providing personalized hotel recommendations through an interactive chat interface.

## Core Functionality

The workflow provides a conversational AI agent that:

- **Conducts structured information gathering** through natural conversation
- **Automatically searches for hotels** using real-time data from Google Hotels
- **Provides personalized recommendations** with detailed hotel information
- **Maintains conversation context** throughout the planning process
- **Delivers professional travel consultation** in a friendly, accessible format

## User Experience Flow

### Initial Interaction
Users are greeted with a warm welcome message in German: *"Hallo! Ich helfe dir, deinen perfekten Urlaub zu planen. Bitte beanworte mir die folgenden Fragen :)"*

### Information Collection Process
The agent systematically collects essential travel details:

1. **Destination** - City and country/state
2. **Travel Dates** - Check-in and check-out dates
3. **Guest Count** - Number of travelers
4. **Room Requirements** - Number of rooms needed
5. **Budget Preferences** - Optional price range

### Automated Hotel Search
Once core information is gathered, the agent automatically searches for available accommodations without requiring user permission.

### Recommendation Delivery
Results are presented in a structured format including:
- Hotel names and star ratings
- Pricing information
- Location details
- Guest ratings and reviews
- Key amenities and highlights
- Direct booking links

## Required Integrations

### OpenAI API
- **Purpose**: Powers the conversational AI agent
- **Model**: GPT-4o-mini for cost-effective, intelligent responses
- **Requirement**: Valid OpenAI API credentials

### SerpAPI (Google Hotels)
- **Purpose**: Real-time hotel search and pricing data
- **Service**: Google Hotels search engine integration
- **Requirement**: Active SerpAPI account and API key

## Key Features

### Intelligent Conversation Management
- Maintains conversation context with 20-message memory buffer
- Handles edge cases like no available hotels or unclear responses
- Provides alternative suggestions when initial searches yield limited results

### Flexible Search Parameters
- Supports location-based searches worldwide
- Accommodates date range specifications
- Handles guest count and room quantity requirements
- Optional budget filtering (min/max price ranges)
- Currency customization support

### Professional Presentation
- Structured hotel recommendation format
- Clear pricing and availability information
- Contextual explanations for recommendations
- Additional destination insights when relevant

## Use Cases

This workflow is ideal for:

- **Travel websites** seeking to add AI-powered hotel booking assistance
- **Travel agencies** wanting to automate initial consultation processes
- **Hospitality businesses** providing customer service automation
- **Personal travel planning** applications
- **Customer support** for travel-related inquiries

## User Benefits

- **Time-saving**: Eliminates manual hotel research
- **Personalized results**: Tailored recommendations based on specific needs
- **Real-time data**: Current pricing and availability information
- **Professional guidance**: Expert-level travel consultation
- **Seamless experience**: Natural conversation flow without complex forms

## Technical Requirements

### Essential Services
- n8n workflow automation platform
- OpenAI API access (GPT-4o-mini model)
- SerpAPI account with Google Hotels access

### Configuration Needs
- API credential setup for both OpenAI and SerpAPI
- Webhook endpoint configuration for chat trigger
- Memory buffer configuration for conversation context

### Optional Enhancements
- Custom branding for chat interface
- Additional language support beyond German greeting
- Integration with booking platforms for direct reservations
- Analytics tracking for usage insights

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
