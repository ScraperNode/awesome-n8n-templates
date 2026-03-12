# ⚒️ MongoDB AI agent - intelligent movie recommendations

> ⚡ **3,080 views** · ⚒️ [Engineering](../)

## Description

## Who is this for?
This workflow is designed for:
- Database administrators and developers working with MongoDB
- Content managers handling movie databases
- Organizations looking to implement AI-powered search and recommendation systems
- Developers interested in combining LangChain, OpenAI, and MongoDB capabilities

## What problem does this workflow solve?
Traditional database queries can be complex and require specific MongoDB syntax knowledge. This workflow addresses:
- The complexity of writing MongoDB aggregation pipelines
- The need for natural language interaction with movie databases
- The challenge of maintaining user preferences and favorites
- The gap between AI language models and database operations

## What this workflow does
This workflow creates an intelligent agent that:
1. Accepts natural language queries about movies
2. Translates user requests into MongoDB aggregation pipelines
3. Queries a movie database containing detailed information including:
   - Plot summaries
   - Genre classifications
   - Cast and director information
   - Runtime and release dates
   - Ratings and awards
4. Provides contextual responses using OpenAI's language model
5. Allows users to save favorite movies to the database
6. Maintains conversation context using a window buffer memory

## Setup
1. **Required Credentials**:
   - OpenAI API credentials
   - MongoDB connection details

2. **Node Configuration**:
   - Configure the MongoDB connection in the MongoDBAggregate node
   - Set up the OpenAI Chat Model with your API key
   - Ensure the webhook trigger is properly configured for receiving chat messages

3. **Database Requirements**:
   - A MongoDB collection named "movies" with the specified document structure
   - Proper indexes for efficient querying
   - Appropriate user permissions for read/write operations

## How to customize this workflow
1. **Modify the Document Structure**:
   - Update the tool description in the MongoDBAggregate node to match your collection schema
   - Adjust the aggregation pipeline templates for your specific use case

2. **Enhance the AI Agent**:
   - Customize the prompt in the "AI Agent - Movie Recommendation" node
   - Modify the window buffer memory size based on your context needs
   - Add additional tools for more functionality

3. **Extend Functionality**:
   - Add more MongoDB operations beyond aggregation
   - Implement additional workflows for different types of queries
   - Create custom error handling and validation
   - Add user authentication and rate limiting

4. **Integration Options**:
   - Connect to external APIs for additional movie data
   - Add webhook endpoints for different platforms
   - Implement caching mechanisms for frequent queries
   - Add data transformation nodes for specific output formats

This workflow serves as a foundation that can be adapted to various use cases beyond movie recommendations, such as e-commerce product search, content management systems, or any scenario requiring intelligent database interaction.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
