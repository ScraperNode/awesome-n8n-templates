# 🔬 Comparing data with the Compare Datasets node

> ⚡ **6,288 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow is designed to compare two datasets (Dataset 1 and Dataset 2) based on a common field, "fruit," and provide insights into the differences. Here are the steps:

1. Manual Trigger: The workflow begins when a user clicks "Execute Workflow."
2. Dataset 1: This node generates the first dataset containing information about fruits, such as apple, orange, grape, strawberry, and banana, along with their colors.
3. Dataset 2: This node generates the second dataset, also containing information about fruits, but with some variations in color. For example, it includes a "kiwi" with the color "mostly green."
4. Compare Datasets: The "Compare Datasets" node takes both datasets and compares them based on the "fruit" field. It identifies any differences or matches between the two datasets.

In summary, this workflow is used to compare two datasets of fruits and their colors, identify differences, and provide guidance on how to explore the comparison results.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
