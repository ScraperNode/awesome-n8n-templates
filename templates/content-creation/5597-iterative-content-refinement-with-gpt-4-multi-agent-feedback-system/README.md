# 🎬 Iterative content refinement with GPT-4 multi-agent feedback system

> ⚡ **30,273 views** · 🎬 [Content Creation & Video](../)

## Description

## **Who's it for**
This workflow is designed for users who want to implement iterative AI-powered content improvement processes. It's ideal for content creators, marketers, product managers, and anyone who needs to refine ideas through multiple rounds of critique and enhancement until they meet quality standards.

## **How it works**
The workflow creates a sophisticated feedback loop using three specialized AI agents that work together to continuously improve content. Starting with an initial input (like a product description), the system generates ideas and then enters a reasoning loop where:

A **Critic Agent** analyzes the current output and identifies flaws or areas for improvement
A **Refiner Agent** takes the original input plus the critic's feedback to create enhanced versions
An **Evaluator Agent** assesses the refined output and determines if it meets the quality threshold

The loop continues until either the evaluator determines the output is satisfactory or a maximum number of iterations is reached (configurable, default is 5 turns).

## How to set up

1. Configure the initial AI agent to generate your starting content
2. Set up the loop structure with "Reset Loop" enabled in the loop node options
3. Configure three AI agents within the loop:

- Critic: Provide detailed analysis prompts for identifying improvements
- Refiner: Create prompts that incorporate feedback to enhance content
- Evaluator: Define quality criteria and decision-making logic


4. Add Edit Fields nodes at the beginning and end of the loop to maintain data structure
5. Include a Code node to track iteration count and loop control
6. Set up the IF node to check exit conditions (max turns or completion status)

## Requirements

**n8n workflow environment**
Access to AI/LLM nodes (OpenAI, Anthropic, etc.)
Basic understanding of JSON data structures
Configured AI model credentials

**How to customize the workflow**
Customize the system prompts for each agent based on your specific use case. The critic should focus on your quality criteria, the refiner should understand your improvement goals, and the evaluator should have clear success metrics. Adjust the maximum iteration count in the code node and IF condition based on your complexity needs and token budget considerations.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
