# 🔒 AI privacy-minded router: PII detection for privacy, security, & compliance

> ⚡ **2,042 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Modern AI systems are powerful but pose privacy risks when handling sensitive data. 

Organizations need AI capabilities while ensuring:

✅ Sensitive data never leaves secure environments
✅ Compliance with regulations (GDPR, HIPAA, PCI, SOX)
✅ Real-time decision making about data sensitivity
✅ Comprehensive audit trails for regulatory review

## The Concept:

Intelligent Data Classification + Smart Routing

The goal of this concept is to build the foundations of the safe and compliant use of LLMs in Agentic workflows by automatically detecting sensitive data, applying sanitization rules, and intelligently routing requests through secure processing channels.

This workflow will analyze the user's chat or webhook input and attempt to detect PII using the Enhanced PII Pattern Detector. 

If detected, the workflow will process that input via a series of Compliance, Auditing, and Security steps which log and sanitizes the request prior to any LLM being pinged.

## Why Multi-Tier Routing? 
Traditional systems use binary decisions (sensitive/not sensitive). Our 3-tier approach provides:

✅ **Granular Security**: Critical PII gets maximum protection
✅ **Performance Optimization**: Clean data gets full cloud capabilities
✅ **Cost Efficiency**: Expensive local processing only when needed
✅ **User Experience**: Maintains conversational flow across security levels

## Why Context-Aware Detection?

Regex patterns alone miss contextual sensitivity. 
Our approach:

✅ **Catches Intent**: "Bank account" discussion is sensitive even without account numbers
✅ **Reduces False Negatives**: Medical discussions stay secure even without explicit medical IDs
✅ **Proactive Protection**: Identifies sensitive contexts before PII is shared
✅ **Compliance Alignment**: Matches how regulations actually define sensitive data

## Why Risk Scoring vs Binary Classification?
Binary PII detection creates artificial boundaries. 

Risk scoring provides:

✅ **Nuanced Decisions**: Multiple low-risk patterns might aggregate to high risk
✅ **Adaptive Thresholds**: Organizations can adjust sensitivity based on their needs
✅ **Better UX**: Users aren't unnecessarily restricted for low-risk scenarios
✅ **Audit Transparency**: Clear reasoning for every routing decision

## Why Comprehensive Monitoring?
Privacy systems require trust and verification:

✅ **Compliance Proof**: Audit trails demonstrate regulatory compliance
✅ **Performance Optimization**: Identify bottlenecks and improve efficiency
✅ **Security Validation**: Ensure no sensitive data leakage occurs
✅ **Operational Insights**: Understand usage patterns and system health

## How to Install:

All that you will need for this workflow are credentials for your LLM providers such as Ollama, OpenRouter, OpenAI, Anthropic, etc. 

This workflow is customizable and allows the user to define the best LLM and storage/memory solutions for their specific use case.

## 🔗 Nodes Used

AI Agent, Ollama Chat Model, Simple Memory, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
