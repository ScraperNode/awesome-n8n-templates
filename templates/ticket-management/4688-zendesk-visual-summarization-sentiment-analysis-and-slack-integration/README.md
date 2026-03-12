# 🎫 Zendesk: visual summarization, sentiment analysis, and Slack integration

> ⚡ **896 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Analyze and Explore your ZenDesk Support Requests using AI-Powered Knowledge Graph

This template helps you create an **interactive [InfraNodus knowledge graph](https://infranodus.com) for your ZenDesk tickets** using any search criteria (e.g. after a certain date, specific status, sender, keyword) that will automatically be sent to a selected Slack channel.

Here's an example of the [InfraNodus graph](https://infranodus.com) that shows the main topics and gaps in ZenDesk support tickets: 

![InfraNodus graph of ZenDesk requests](https://support.noduslabs.com/hc/article_attachments/20447708129820)


## You can use the workflow to:

- Get an instant overview of the **main topics** your customers are talking about
- Generate **business and product ideas** based on the blind spots identified using the [InfraNodus AI](https://infranodus.com)
- See which **topics correlate to the negative / positive sentiment** understanding the weak and strong sides of your product and support 
- Receive **daily notifications** on the main topics your customers are talking about via Slack / Telegram / Email and other channels
- Perform **detailed search using a password-protected web form** for tickets filtered by a certain date, status, tag, sender, keyword.
- Use the **interactive graph** to **explore specific topics and concepts** your customers are talking about — a great way to engage with their concerns in a non-linear way, **bypassing the boring tabular interface**
- Use the graph to explore the support requests by **specific segments** — e.g. status, priority, sentiment, tags, urgency.
- Use the graph generated as an **AI expert** available to your **AI agents** in other n8n workflows via [InfraNodus GraphRAG](https://infranodus.com/use-case/ai-knowledge-graphs). For instance, you could connect your knowledge base to the support tickets graph and let the agent discover possible solutions to your customers' most typical problems. See an [sample template here](https://n8n.io/workflows/4402-ai-chatbot-agent-with-a-panel-of-experts-using-infranodus-graphrag-knowledge/).


## How it works
You can start this workflow 

- manually, 
- with a daily / weekly trigger, or 
- via a password-protected web form, where you can provide search requests. 

Once started, it will perform a ZenDesk tickets search with the default or your custom criteria. Then it will use the search results to generate an [InfraNodus graph](https://infranodus.com) (or add the new data to an existing one), and — finally — use the InfraNodus AI endpoints to generate a topical summary and a product business idea based on the blind spots identified. The results are delivered a channel of your choice.

Here's a description step by step:

1. Start the workflow (manually or on schedule)
2. Assign values to variables (search criteria, graph name)
3. Perform ZenDesk support tickets search
4. Convert the data received and submit it to [InfraNodus](https://infranodus.com) to generate a knowledge graph
5. Generate topical summary with [InfraNodus](https://infranodus.com)
6. Generate a business idea with [InfraNodus](https://infranodus.com) (you can also change the setting to generate a question instead)
7. Send a notification via Slack / Telegram / Email or back to the webform

## How to use

You need an [InfraNodus API account and key](https://infranodus.com/use-case/ai-knowledge-graphs) to use this workflow. You also need a ZenDesk account. It takes about 5 minutes to set everything up.

- Create an InfraNodus account.
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.
- Add the authorization key to all the InfraNodus HTTP nodes in the template (Steps 3, 5, and 6).
- Generate a ZenDesk authorization token following the instructions in n8n's ZenDesk node (Step 3).
- Optionally: connect your Slack or Telegram or Gmail account to receive automated notifications with the link to the graph, once the workflow is ready (it takes about 30 seconds to run).
- Run it with using the form to play around with the search criteria that works best for you (you can leave everything empty at first), then choose the parameters you like and activate the Daily Trigger node to receive executive summaries to a channel of your choice.
- Open the graph in [InfraNodus](https://infranodus.com) and use our [customer feedback analysis guide](https://support.noduslabs.com/hc/en-us/articles/19917497109020-Qualitative-Analysis-of-Interviews-Open-Ended-Survey-Responses-and-Customer-Feedback) to explore the graph and generate new insights.


## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- A ZenDesk API key
- (Optional) — a Slack / Telegram / Gmail connection for notifications

## FAQ

**1. What are the best use cases to try?**

I love to set the graph to deliver me a daily visual briefing of what's happening in my support portal. It shows me the main topics and gaps and generates product ideas based on them. Great to keep the pulse on the business. 

I also really like generating a graph for the past week manually, using the form, and then exploring the graph in InfraNodus directly using the [customer feedback analysis workflow](https://support.noduslabs.com/hc/en-us/articles/19917497109020-Qualitative-Analysis-of-Interviews-Open-Ended-Survey-Responses-and-Customer-Feedback) to:

- discover main topics my customers are talking about?
- understand the topics that have the most negative connotation for them (using the sentiment filter)?
- discover some support tickets that need more attention or that talk about the topics I'm personally interested in and engage with the client
- identify the gaps in your customers' discourse based on the blind spots — useful for generating ideas, see the graph below with a demo of how it works:

![Infranodus content gap graph](https://infranodus.com/images/front/infranodus-structural-gaps-ideas@2x.jpg)


**2. Why use the graph and not just AI summary?**

AI summary will just give you generic results. You'll see what you already know. Using the graph helps you deconstruct the discourse and get a much more nuanced understanding of the main pain points and interests of your customers. The auto-generated InfraNodus summary and business ideas have a direct explainable connection to the discourse, so you can always see where they are coming from and maintain the focus on all the topics, rather than the most prominent ones. 

Additionally, having an interactive graph opens a possibility to explore your customers' concerns in a more engaging way, finding the topics and concepts that are relevant to your interests or to your agents' expertise, helping you find the conversations that you'd otherwise have missed.


**3. Is my customers' data safe?**

Absolutely. InfraNodus' [terms of use](https://infranodus.com/about/terms-conditions) and [privacy policy](https://infranodus.com/about/privacy-policy) state that the customers' data and text graphs are not used in AI training and are not offered to any third parties. Its underlying API system uses the Open API which explicitly states that data is not used for training either. So all the customers' data are private and safe. As an extra precaution, you can always delete the graphs after you analyzed them, in which case there is no trace of this data left on the servers.


## Customizing this workflow

Check out the **complete setup guide** for this workflow at [https://support.noduslabs.com/hc/en-us/articles/20447530961308-Zendesk-Tickets-Summarization-Sentiment-Analysis-and-Slack-Integration-with-n8n-and-InfraNodus](https://support.noduslabs.com/hc/en-us/articles/20447530961308-Zendesk-Tickets-Summarization-Sentiment-Analysis-and-Slack-Integration-with-n8n-and-InfraNodus)

For **support** with this template, please, contact 
[https://support.noduslabs.com](https://support.noduslabs.com)

For more **InfraNodus n8n workflows**, please, see our creators page:
[https://n8n.io/creators/infranodus/](https://n8n.io/creators/infranodus/)

To **learn more about InfraNodus**, GraphRAG, and knowledge graph analysis:
[https://infranodus.com](https://infranodus.com)

## 🔗 Nodes Used

HTTP Request, Slack, Telegram, Zendesk, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
