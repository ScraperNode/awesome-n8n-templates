# 💬 Build a WordPress RAG chatbot with OpenAI, Qdrant or MongoDB

> ⚡ **29 views** · 💬 [Support Chatbots](../)

## Description

# Wordpress AI Chatbot

Build a powerful, customizable AI chatbot for your WordPress website that intelligently retrieves posts, answers questions, and engages in natural conversations. This complete solution handles content indexing with OpenAI embeddings and vector storage (Qdrant or MongoDB), then powers a sophisticated chatbot interface that provides accurate, context-aware responses using RAG (Retrieval-Augmented Generation).

<p>
  <a href="https://www.youtube.com/watch?v=vg33xcdU9gE">
    <img src="https://i.ibb.co/CKK9rD52/You-Tube-Cover-Final.png" width="600">
  </a>
</p>

**Two indexing options:**

- **Quick path:** Automated workflow indexing to Qdrant (15-25 minutes setup)
- **Advanced path:** Manual off-workflow indexing to MongoDB with included code and guides (1-2 hours setup)

**Complete package:** Includes both indexing and chatbot workflows, WordPress plugin with customizable chat widget, and comprehensive step-by-step guides with screenshots.

---

## What this workflow does

This complete solution provides **content indexing** and a **customizable AI chatbot** for your WordPress website:

### Indexing Phase (Choose your path):

**Option 1: Automated Qdrant indexing (Recommended):**

1. **Retrieves all published posts** from your WordPress site using the REST API
2. **Cleans and structures the content** by extracting titles, URLs, post IDs, and slugs
3. **Splits text into intelligent chunks** (1200 characters with 150-character overlap) for optimal embedding
4. **Generates vector embeddings** using OpenAI's text-embedding model (1536 dimensions)
5. **Stores vectors in Qdrant Cloud** for fast similarity search and retrieval

**Option 2: Advanced MongoDB indexing:**

- **Manual off-workflow process** for developers who prefer MongoDB Atlas
- Includes complete Node.js embedding scripts and detailed setup guides
- Full control over indexing parameters and storage structure

### Chatbot Phase (Works with both indexing options):

Once indexed, your WordPress site features a **fully customizable AI chatbot** that:

- **Retrieves relevant posts** using semantic search to answer content-related questions
- **Provides accurate information** from your actual WordPress content with source citations
- **Engages in natural small talk** for a conversational user experience
- **Customizable appearance** to match your website's branding and style
- **Delivers context-aware responses** using RAG (Retrieval-Augmented Generation)

---

## Tools and services used

### Core components:

- **WordPress REST API** - Retrieves published posts with full content
- **OpenAI Embeddings API** - Generates text-embedding-ada-002 vectors (1536d)
- **Qdrant Cloud** - Vector database for storing and searching embeddings
- **LangChain nodes** - Document processing and vector store integration
- **Recursive Character Text Splitter** - Intelligent text chunking with overlap

### n8n nodes included:

- WordPress node (getAll posts operation)
- Qdrant Vector Store node (insert mode)
- OpenAI Embeddings node
- Default Data Loader with custom metadata
- Text Splitter with configurable chunk sizes
- Manual trigger for on-demand indexing

---

## Use cases

**Content websites & blogs**

- Make your articles semantically searchable
- Power AI chatbots with your blog content
- Help visitors discover relevant posts through natural language

**Business websites**

- Enable intelligent search across your service pages
- Answer customer questions using your existing content
- Reduce support load with automated, accurate responses

**Documentation sites**

- Semantic search across technical documentation
- Find solutions by meaning, not exact keyword matches
- Combine multiple doc sources in one searchable index

**Portfolio sites**

- Make your projects and case studies searchable
- Answer questions about your work with AI
- Showcase expertise through conversational interface

**E-commerce**

- Search product descriptions semantically
- Answer product questions using your content
- Guide customers to relevant items

---

## What's included

When you purchase this complete pack, you receive:

### Workflows (both included)

- **Indexing workflow part** - Prepares WordPress content for semantic search

- **Chatbot workflow part** - User-facing AI chat interface with RAG search capabilities

Both workflows work together as a complete AI chatbot solution

### Documentation & guides

📚 **Clear and complete step-by-step guides included:**

- **Quick start guide** - Get up and running in 15-25 minutes
- **Detailed setup instructions** - With screenshots for every step
- **Qdrant configuration guide** - Vector database setup walkthrough
- **MongoDB alternative path** - Advanced setup option (1-2 hours)
- **Customization guide** - Adjust AI behavior, chunk sizes, and styling
- **Troubleshooting guide** - Solutions to common issues
- **Security best practices** - GDPR compliance, authentication setup
- **API integration guide** - Connect all required services

### WordPress plugin

- **Frontend chat widget** - Ready-to-use chat interface
- **REST API proxy** - Secure server-side communication
- **Admin settings panel** - Easy configuration from WordPress dashboard
- **Customizable shortcode** - `[wp_ai_chatbot]` for any page

### Additional files

- **Configuration examples** - Sample credentials and settings templates
- **Test micro-website** - Standalone HTML for testing chatbot workflow
- **MongoDB embedding scripts** (Node.js) - For advanced setup path
- **Sample data files** - For testing and verification

### Support:

- 📧 **Email support** after purchase for installation help
  (may require additional fees)
- 📚 **Full documentation** access with all guides

---

## Requirements

### Essential services (all have free tiers):

- **WordPress site** (5.0+) with REST API enabled
- **n8n instance** (cloud or self-hosted v1.0+)
- **OpenAI API key** - For generating embeddings
- **Qdrant**
  - **Cloud**: Free tier includes 1GB storage
  - **On-Premise/VM**: Dockerized or runned from source


### Optional but recommended:

- HTTPS enabled on WordPress site
- Application password authentication for WordPress
- Cohere API key (for reranking in the chatbot workflow)

### Technical requirements:

- WordPress application password or API credentials
- Basic understanding of API authentication
- Basic understanding and knowledge of automation platforms (n8n)
- Ability to import JSON workflows into n8n

---

## Cost estimate

#### Indexing

For a typical small site (150 posts, indexed once):

| Service           | Initial cost | Monthly cost | Notes                         |
| ----------------- | ------------ | ------------ | ----------------------------- |
| OpenAI Embeddings | ~$0.01-0.50  | $0           | One-time indexing cost        |
| Qdrant Cloud      | $0           | $0           | Free tier: 1GB storage        |
| n8n Self-hosted   | $0           | $0           | If self-hosted                |
| n8n Cloud         | -            | $20          | If using n8n Cloud            |
| **TOTAL**         | **~$0.25**   | **$0-20**    | Depends on n8n hosting choice |

**Re-indexing costs:** Run this workflow whenever you publish new content or want to update the index. Each run costs only the OpenAI embedding fee (~$0.01-0.05 per 100 posts).

#### Chatbot usage costs

The chatbot workflow uses AI models to generate responses. Costs vary by provider and model.

**Typical conversation:** ~1000 tokens input (context + user query) + ~500 tokens output (AI response)

##### Cost per chat interaction - Monthly cost examples

Based on different traffic levels:

| Monthly chats | GPT-4o-mini | Gemini Flash | Claude Haiku | GPT-4o | Claude Sonnet |
| ------------- | ----------- | ------------ | ------------ | ------ | ------------- |
| 100           | $0.05       | $0.02        | $0.09        | $0.80  | $1.10         |
| 500           | $0.25       | $0.10        | $0.45        | $4.00  | $5.50         |
| 1,000         | $0.50       | $0.20        | $0.90        | $8.00  | $11.00        |
| 5,000         | $2.50       | $1.00        | $4.50        | $40.00 | $55.00        |
| 10,000        | $5.00       | $2.00        | $9.00        | $80.00 | $110.00       |

**Note:** Prices are approximate and based on January 2025 rates. Check current pricing at:

- OpenAI: https://openai.com/api/pricing/
- Google Gemini: https://ai.google.dev/pricing
- Anthropic Claude: https://www.anthropic.com/pricing

---

## Setup time

#### Indexing:

- **Indexing Quick setup:** 15-25 minutes

  - Create Qdrant account (5 min)

  - Get OpenAI API key (5 min)

  - Import workflow and configure credentials (5-10 min)

  - Run initial indexing (5 min)


- **Indexing Advanced Setup**: 30-60 minutes

#### **Chatbot**:

**First-time users:** 5-10 minutes

- Import chatbot workflow
- Configure webhook URL in WordPress plugin
- Add shortcode to pages
- Testing and verification

**📚 Complete guides included:** All setup steps are documented with clear instructions and screenshots in the guides you receive after purchase.

---

## How to use this workflow

**📚 Complete setup guides with screenshots are included with your purchase.** Below is a quick overview:

### Step 1: indexing workflow

**Phase 1: Prepare services (10-15 min)**

- Create Qdrant Cloud account (or MongoDB Atlas for advanced path)
- Get OpenAI API key from platform.openai.com
- Create WordPress application password
- Configure Qdrant collection (vector size: 1536, distance: Cosine)

**Phase 2: Import and configure workflow (5-10 min)**

- Import indexing workflow JSON into n8n
- Add credentials (WordPress, OpenAI, Qdrant)
- Verify collection name matches your Qdrant setup
- Optionally customize chunk size and overlap settings

**Phase 3: Run indexing (5-10 min)**

- Execute workflow manually or set up schedule
- Workflow retrieves all published posts from WordPress
- Content is cleaned, chunked, and embedded
- Vectors stored in Qdrant with metadata (title, URL, post ID, slug)
- Check execution log to confirm success

**Phase 4: Maintain index (ongoing)**

- Re-run workflow after publishing new posts
- Update index when editing existing content
- Schedule automatic indexing (optional)

### Step 2: Deploy the chatbot workflow

After indexing is complete, follow these steps to activate your AI chatbot:

1. **Import the chatbot workflow** (included in your purchase) into n8n
2. **Configure the webhook** - The chatbot receives user queries via secure webhook
3. **Connect to your vector database** - Point to the same Qdrant collection you just created
4. **Test the chatbot** - Use the included test micro-website to verify AI responses
5. **Install the WordPress plugin** - Upload and activate on your WordPress site
6. **Configure plugin settings** - Add webhook URL, customize colors and appearance
7. **Add shortcode to pages** - Place `[wp_ai_chatbot]` where you want the chat widget
8. **Go live** - Your AI chatbot is now answering visitor questions using your content

#### How the chatbot works

When a visitor asks a question on your site:

1. **Question sent to n8n** - WordPress plugin sends query to chatbot workflow via webhook
2. **Intent classification** - AI determines if it's SmallTalk, content question, or profile/skills query
3. **Vector search** - For content questions, searches your indexed posts in Qdrant using semantic similarity
4. **Context retrieval** - Fetches relevant content chunks with metadata (title, URL, post ID)
5. **AI response generation** - Uses retrieved context to generate accurate, contextual answer
6. **Response delivered** - Answer sent back to WordPress plugin and displayed in chat widget

**Result:** Visitors get instant, accurate answers based on your actual content, not generic AI responses.

---

## Compatibility

**Works with:**

- WordPress 5.0+ (including WordPress 6.x)
- n8n 1.0+ (Cloud or self-hosted)
- OpenAI API (all embedding models)
- Qdrant Cloud (free and paid tiers)
- MongoDB Atlas (alternative vector database path)

**Tested on:**

- WordPress 6.4+
- n8n 1.65+
- OpenAI text-embedding-ada-002
- Qdrant Cloud free tier

---

## Common questions

**Q: What exactly is included when I purchase?**
A: You get the complete package: both the indexing workflow (shown here) AND the chatbot workflow, the WordPress plugin with chat interface, comprehensive step-by-step setup guides with screenshots, configuration templates, email support, and 12 months of free updates. Everything you need to deploy a fully functional AI chatbot.

**Q: Are the setup guides really clear and complete?**
A: Yes! Clear, detailed step-by-step guides are included with screenshots for every step. We provide both quick setup (15-25 min) and advanced setup paths, troubleshooting guides, customization instructions, and security best practices. Even beginners can follow along.

**Q: Do I need to buy the chatbot workflow separately?**
A: No! Both workflows come together as a complete package. You get everything needed for a fully functional AI chatbot solution.

**Q: How often should I run this workflow?**
A: Run it whenever you publish new content or want to update the index. For active blogs, weekly or after each batch of posts.

**Q: Can I index custom post types?**
A: Yes. Modify the WordPress node to include custom post types in the query parameters.

**Q: What if I have more than 1000 posts?**
A: The workflow handles pagination automatically. Larger sites may take longer to index and may exceed free tier limits.

**Q: Is my content secure?**
A: Your content is sent to OpenAI for embedding generation and stored in Qdrant. Review privacy policies of both services.

**Q: Can I use a different embedding model?**
A: Yes. Update the OpenAI node to use text-embedding-3-small or text-embedding-3-large (adjust vector dimensions accordingly).

**Q: What's the difference between Qdrant and MongoDB?**
A: Qdrant is easier to set up (15 min) and purpose-built for vectors. MongoDB Atlas is more flexible for complex data but takes longer to configure (1-2 hours).

**Q: Do I need coding skills?**
A: No. If you can follow instructions, create API keys, and import workflows, you can set this up.

**Q: Can I use this for multiple WordPress sites?**
A: Yes. Create separate collections in Qdrant for each site, or purchase additional licenses for commercial use.

---

## Troubleshooting

**"Failed to fetch posts from WordPress"**

- Verify WordPress REST API is enabled (visit `/wp-json/wp/v2/posts`)
- Check application password credentials
- Ensure WordPress site is publicly accessible

**"OpenAI API authentication failed"**

- Verify API key is correct and active
- Check account has available credits
- Ensure no rate limits are exceeded

**"Qdrant collection not found"**

- Create collection manually in Qdrant dashboard
- Verify collection name matches workflow settings
- Check API key has write permissions

**"Text too large" or chunking errors**

- Reduce chunk size in Text Splitter node
- Increase overlap if context is being lost
- Check for unusually large posts (&gt;50k words)

**Indexing takes too long**

- Normal for large sites (1000+ posts)
- Consider indexing in batches
- Check network speed and API rate limits

---

## Complete WordPress AI chatbot solution

This is a **complete, all-in-one package** that includes everything you need:

### ✅ What you get:

- **Indexing workflow** (shown here) - Prepares your content for semantic search
- **Chatbot workflow** - Full RAG-powered chat interface with intent classification
- **WordPress plugin** - Frontend chat widget and secure REST API proxy
- **Advanced features** - SmallTalk handling, multilingual support, GDPR compliance
- **Complete documentation** - Clear, step-by-step setup guides with screenshots
- **All configuration files** - Templates, examples, and sample data
- **Email support** - Installation and configuration assistance (fees may apply)

**No hidden costs. No separate purchases needed. Everything included.**

---

## License & usage

**Single site license:**

- Use on one WordPress site you own or manage
- Modify and customize as needed
- Cannot resell or redistribute the workflow

----

## Technical architecture

```
INDEXING FLOW
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. Manual Trigger (or scheduled)                          │
│     ↓                                                       │
│  2. WordPress Node (Get all published posts)               │
│     ↓                                                       │
│  3. Prepare Documents (Extract & structure)                │
│     ↓                                                       │
│  4. Default Data Loader (Add metadata: title, URL, ID)     │
│     ↓                                                       │
│  5. Text Splitter (1200 chars, 150 overlap)                │
│     ↓                                                       │
│  6. OpenAI Embeddings (Generate 1536d vectors)             │
│     ↓                                                       │
│  7. Qdrant Vector Store (Insert mode)                      │
│     ↓                                                       │
│  ✓ Content indexed and searchable                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Data flow:**

1. Raw WordPress posts (JSON)
2. Cleaned content with metadata
3. Text chunks (1200 chars each)
4. Vector embeddings (1536 dimensions)
5. Stored in Qdrant with metadata

---

## Updates & changelog

**Version included:** 1.0.0

**Changelog:**

- v1.0.0 (2026-02) - Initial release for n8n creators
  - WordPress REST API integration
  - OpenAI embedding generation
  - Qdrant vector storage
  - Metadata preservation
  - Configurable chunking

**Planned features:**

- Incremental indexing (update only new/modified posts)
- Multi-language support with language detection
- Image and media embedding
- Custom field extraction
- Scheduled automatic indexing

---

## About the author

Built by Paolo Ronco, automation specialist and n8n workflow developer.

**More workflows:**

- AI-powered contact forms
- Automated content publishing
- Social media automation
- Document processing pipelines

---

## Get started today

Ready to make your WordPress content semantically searchable?

1. **Purchase the complete pack** - Receive both workflows, WordPress plugin, and all guides
2. **Follow the step-by-step guides** - Clear instructions with screenshots included
3. **Import workflows into n8n** (5 minutes)
4. **Configure credentials** (10 minutes) - Guides show you exactly how
5. **Run indexing** (5 minutes)
6. **Deploy chatbot** (10 minutes) - Install WordPress plugin and go live
7. **Start answering user questions** with AI-powered responses

**🚀 Transform your WordPress content into an intelligent, searchable knowledge base.**

**📚 Everything you need is included:** Complete documentation, both workflows, WordPress plugin, and email support.

---

© 2026 Paolo Ronco. All rights reserved.

*This workflow is provided as-is for use with n8n. OpenAI, WordPress, and Qdrant are trademarks of their respective owners.*

## 🔗 Nodes Used

Webhook, Wordpress, Google Cloud Storage, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
