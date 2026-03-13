# 🎬 Build a weekly AI trend alerter with arXiv and Weaviate

> ⚡ **12,300 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Build a Weekly AI Trend Alerter with arXiv and Weaviate
Ditch the endless scroll for AI trends. Meet Archi, your personal AI research assistant that hits you up once a week with everyone you need to know. 🧑🏽‍🔬

This workflow scrapes AI and machine learning article abstracts from [arXiv](arxiv.org), enriches them with topic categories using a LLM, and embeds them in a [Weaviate](Weaviate) vector store. The vector store is then used as a tool for agentic RAG to write a concise, easy-to-read summary of the week in AI research.

The final output is a short, weekly email sent to the address of your choice that summarizes key AI research trends and future research directions, with links directly to the most interesting and impactful arXiv papers of the week.

## Who it's for
This workflow is for anyone who can't keep up with all the latest AI advances. Coding skills are not required.

## How it works
This is a contiguous workflow that can be summarized in two main parts: a data pipeline that fetches and embeds articles in Weaviate, and an agentic workflow that generates a weekly email summary.
### Part 1: Automatically fetch newly published articles on a weekly basis
* Fetch article abstracts (and metadata) from arXiv's free API
* Pre-process abstract data
* Enrich each article with a primary topic, secondary topics, and estimated potential impact of the research using a LLM
* Post-process data
* Insert data and embeddings into Weaviate
###  Part 2: Use an AI Agent and Weaviate to generate a weekly summary email
* Add Weaviate as a Tool to an AI agent node
* Query Weaviate, agentically, to generate a report on the most important research trends of the week
* Post-process data
* Send the summary via email

## Prerequisites
1.  **An existing Weaviate cluster.** You can view instructions for setting up a **local cluster** with Docker [here](https://weaviate.io/developers/weaviate/installation/docker-compose#starter-docker-compose-file) or a **Weaviate Cloud** cluster [here](https://weaviate.io/developers/wcs/quickstart).
2.  **API keys** to generate embeddings and power chat models. We use a combination of [OpenRouter](https://openrouter.ai/) and [OpenAI](https://openai.com/) models. Feel free to switch out the models as you like.
3.  **An email address with STMP privileges**. This is the address the email will come from. In this demo we use a personal Gmail address. You can create a new credential to link a `STMP Account` using these [instructions](https://docs.n8n.io/integrations/builtin/credentials/sendemail/).
4.  **Self-hosted n8n instance.** See this [video](https://www.youtube.com/watch?v=kq5bmrjPPAY&t=108s) for how to get set up in just three minutes.

## How to run the workflow
1. Go through the prerequisites, creating a Weaviate cluster (can be local or cloud), downloading self-hosted n8n, creating STMP privileges for your email account, and adding your API keys and other credentials.
2. Select the embedding and chat models you'd like to use.
3. Enter the email addresses you want to send the email from and to.
4. Let it rip.

## Workflow output
The output for this workflow is a weekly email that summarizes **key research trends** and **future research directions** based on AI and ML papers published on arXiv. 

### Here's an example of a summary email:

Hey there,

Here's a quick rundown of the key trends in Machine Learning research from the past week.

**![💫](https://fonts.gstatic.com/s/e/notoemoji/16.0/1f4ab/32.png)  Key Research Trends This Week**

This week saw significant advancements in retrieval-augmented systems, foundation models for specialized domains, and techniques balancing efficiency with performance.

-   **Advanced RAG Architectures**: Researchers are developing sophisticated RAG frameworks that go beyond simple document retrieval, with  [AdaPCR](http://arxiv.org/abs/2507.04069v1)  introducing passage combination retrieval and  [UrbanMind](http://arxiv.org/abs/2507.04706v1)  proposing a framework for urban intelligence with multilevel optimization.
    
-   **Foundation Models for Tabular Data**: The  [Real-TabPFN](http://arxiv.org/abs/2507.03971v1)  shows that targeted continued pre-training on real-world datasets can significantly boost the performance of foundation models for tabular data, outperforming models trained on broader, potentially noisier datasets.
    
-   **Efficiency-Focused Techniques**: Researchers are developing resourceful methods that maintain performance without expensive computations, like  [logit reweighting](http://arxiv.org/abs/2507.05235v1)  for topic-focused summarization and  [strategic querying](http://arxiv.org/abs/2507.05175v1)  for privacy-preserving personalization.
    

**![🔮](https://fonts.gstatic.com/s/e/notoemoji/16.0/1f52e/32.png)  Future Research Directions**

Based on current trends, we expect to see the following developments in the near future:

-   **Explainable RAG Systems**: Following the  [source attribution](http://arxiv.org/abs/2507.04480v1)  work in RAG systems, we can expect more research into making complex retrieval systems transparent and explainable for users.
    
-   **Cross-Domain and Cross-Modal Fusion**: The promising performance of vision-language and code-specialized LLMs in  [retrieval tasks](http://arxiv.org/abs/2507.03958v1)  points toward unified retrievers capable of handling text, code, images, and multimodal content.
    
-   **Data-Centric Synthetic Generation**: As shown by work on  [synthetic relational tabular data](http://arxiv.org/abs/2507.03528v1), we'll likely see more sophisticated approaches to generating high-quality synthetic data for pre-training foundation models in specialized domains.
    

This week highlights how researchers are making AI more efficient, explainable, and applicable to specialized domains. Look out for more developments in RAG systems, tabular foundation models, and privacy-preserving AI techniques in the coming weeks.

Until next week,

Archi  ![🧑🏽‍🔬](https://fonts.gstatic.com/s/e/notoemoji/16.0/1f9d1_1f3fd_200d_1f52c/32.png)


## Want to make it better?
Feel free to tweak, build on, or completely reconfigure this workflow. If you come up with something cool, [let us know](grow@weaviate.io) and we might just share it with our community! 💚

## 🔗 Nodes Used

Send Email, HTTP Request, Markdown, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
