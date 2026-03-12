# ⚒️ Integrating AI with Open-Meteo API for enhanced weather forecasting

> ⚡ **3,475 views** · ⚒️ [Engineering](../)

## Description

## Use case

### Workshop

We are using this workflow in our workshops to teach how to use Tools a.k.a functions with artificial intelligence. In this specific case, we will use a generic "AI Agent" node to illustrate that it could use other models from different data providers.

### Enhanced Weather Forecasting

In this small example, it's easy to demonstrate how to obtain weather forecast results from the Open-Meteo site to accurately display the upcoming days.

This can be used to plan travel decisions, for example.

## What this workflow does

1. We will make an HTTP request to find out the geographic coordinates of a city.
2. Then, we will make other HTTP requests to discover the weather for the upcoming days.

In this workshop, we demonstrate that the AI will be able to determine which tool to call first—it will first call the geolocation tool and then the weather forecast tool. All of this within a single client conversation call.


## Setup

Insert an OpenAI Key and activate the workflow.

by Davi Saranszky Mesquita
https://www.linkedin.com/in/mesquitadavi/

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
