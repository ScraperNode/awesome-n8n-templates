# 🎬 Auto-generate WordPress blog tags with GPT-4.1-mini and smart tag mapping

> ⚡ **248 views** · 🎬 [Content Creation & Video](../)

## Description

## **Overview**

This n8n template demonstrates how to use AI to automatically analyze WordPress blog content and generate relevant, SEO-optimized tags for WordPress posts.

## **Use cases** 
Automate content tagging for WordPress blogs, maintain consistent taxonomy across large content libraries, save hours of manual tagging work, or improve SEO by ensuring every post has relevant, searchable tags!

## **Good to know**
* The workflow creates new tags automatically if they don't exist in WordPress.
* Tag generation is intelligent - it avoids duplicates by mapping to existing tag IDs.

## **How it works**
* We fetch a WordPress blog post using the WordPress node with sticky data enabled for testing.
* The post content is sent to GPT-4.1-mini which analyzes it and generates 5-10 relevant tags using a structured output parser.
* All existing WordPress tags are fetched via HTTP Request to check for matches.
* A smart loop processes each AI-generated tag:
  * If the tag already exists, it maps to the existing tag ID
  * If it's new, it creates the tag via WordPress API
* All tag IDs are aggregated and the WordPress post is updated with the complete tag list.

## **How to use**
* The manual trigger node is used as an example but feel free to replace this with other triggers such as webhook, schedule, or WordPress webhook for new posts.
* Modify the "Fetch One WordPress Blog" node to fetch multiple posts or integrate with your publishing workflow.

## **Requirements**
* WordPress site with REST API enabled
* OpenAI API

## **Customising this workflow**
* Adjust the AI prompt to generate tags specific to your industry or SEO strategy
* Change the tag count (currently 5-10) based on your needs
* Add filtering logic to only tag posts in specific categories

## 🔗 Nodes Used

HTTP Request, Wordpress, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
