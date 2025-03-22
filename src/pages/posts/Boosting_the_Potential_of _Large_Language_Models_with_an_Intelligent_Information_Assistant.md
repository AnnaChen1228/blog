---
title: "Boosting the Potential of Large Language Models with an Intelligent Information Assistant"
date: "2025.03.22"

layout: ../../layouts/PostLayout.astro
# description: "Enhancing LLM performance through an intelligent information assistant framework."

# img_path : "/ASSISTRAG.jpg"
# img_alt : "Insert image description here"
---

# Boosting the Potential of Large Language Models with an Intelligent Information Assistant

Authors:
- Yujia Zhou→ Tsinghua University, zhouyujia@mail.tsinghua.edu.cn
- Zheng Liu→ The Hong Kong Polytechnic University, zhengliu1026@gmail.com
- Zhicheng Dou→ Renmin University of China, dou@ruc.edu.cn

🎉 **Supported by NeurIPS 2024**

[![GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/smallporridge/AssistRAG)
[![NeurIPS](https://img.shields.io/badge/Conference-NeurIPS_2024-orange.svg)](https://neurips.cc/)

## 🎯 Introduction

With the rise of Large Language Models (LLMs), significant advancements have been made in the field of Natural Language Processing (NLP). However, these models often generate incorrect information, a phenomenon known as "hallucination." Traditional Retrieval-Augmented Generation (RAG) methods have shown inadequate performance in handling complex reasoning tasks, particularly those that require multiple steps.

### Motivation
The motivation for developing the ASSISTRAG framework includes:
- **LLM Hallucination**: LLMs frequently produce inaccurate information.
- **Inadequate RAG Performance**: RAG methods struggle with complex and multi-step reasoning tasks.
- **Impact of Prompting and Fine-Tuning**: Techniques like prompting and fine-tuning can degrade the original capabilities of LLMs.
- **Need for Frequent Retraining**: Maintaining performance requires timely retraining of the models.

## 🔬 ASSISTRAG Framework

### 2.1 Main Components
The ASSISTRAG framework consists of two primary components:
- **Main LLM**: Static, responsible for generating answers.
- **Assistant LLM**: Trainable, responsible for information management.

### 2.2 Core Functions
ASSISTRAG possesses six core capabilities:

#### Memory Management
1. **Retrieving Relevant Information**: Retrieve relevant information from the system's memory based on the current question.
2. **Evaluating Relevance**: Determine if the retrieved information is relevant to answering the current question.
3. **Storing New Insights**: If the main LLM generates new insights that are not already stored in the system's memory, record them for future use.

#### Knowledge Management
1. **Question Decomposition**: Break down the question into multiple sub-queries.
2. **Knowledge Retrieval**: Retrieve relevant documents from an external knowledge base to support the sub-queries.
3. **Knowledge Extraction**: Extract the necessary knowledge from the retrieved documents to answer the original question.
4. **Evaluating Relevance**: Determine if the extracted knowledge should be included in the response generation process.

#### Other Core Functions
1. **Tool Usage**: Retrieving information from both internal memory and external knowledge bases.
2. **Action Execution**: Processing, analyzing, and extracting information.
3. **Plan Specification**: Determining the necessity of each step in the process.

## 📚 Training Methodology

ASSISTRAG employs a three-phase training approach:

1. **Foundational Curriculum Learning**:
   - Establish the assistant's basic capabilities.
   - Gradually increase the complexity of training tasks.
   - Ensure the assistant can handle a wide range of queries.

2. **Specialized Curriculum Learning**:
   - Focus on enhancing the assistant's abilities in specific domains or reasoning skills.
   - Introduce more challenging tasks and scenarios.
   - Refine the assistant's knowledge and problem-solving strategies.

3. **Reinforced Preference Optimization**:
   - Adjust the assistant's output based on feedback from the main LLM.
   - Optimize the assistant's responses to better align with the main LLM's preferences.
   - Ensure the assistant's outputs are consistent with the main LLM's desired outputs.

## 📈 Experimental Setup and Results

### 4.1 Experimental Setup
Experiments were conducted using multiple complex question-answering datasets to evaluate the performance of ASSISTRAG.

### 4.2 Experimental Results
- ASSISTRAG demonstrated superior performance across various foundational LLMs, particularly providing significant benefits to weaker models.
- The framework exhibited advantages in accuracy, efficiency, and cost-effectiveness.

## 🏁 Conclusion

The proposed ASSISTRAG effectively enhances LLMs' performance in complex reasoning tasks. Future work will focus on expanding the assistant's capabilities, including long-text processing and personalized support.

## 📖 References
<!-- - Zhou, Y., Liu, Z., & Dou, Z. (2024). Boosting the Potential of Large Language Models with an Intelligent Information Assistant. NeurIPS 2024. -->
- [Slide](https://docs.google.com/presentation/d/1VmQcpT7ZCHkID8P1jR7bxJ2EBhsajqrq/edit?slide=id.g33e833bef61_0_200#slide=id.g33e833bef61_0_200)
- [Paper](https://arxiv.org/pdf/2411.06805)

Comments:
- This is a shared paper, not written by me.
