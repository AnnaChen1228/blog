---
title: "Faithful Logical Reasoning via Symbolic Chain-of-Thought"
date: "2025.03.10"

layout: ../../layouts/PostLayout.astro
---
# 🎓 Faithful Logical Reasoning via Symbolic Chain-of-Thought
**Accepted by ACL 2024**

## Authors
- Jundong Xu
- Hao Fei
- Liangming Pan
- Qian Liu
- Mong-Li Lee
- Wynne Hsu

## ✨ Abstract
While the recent Chain-of-Thought (CoT) technique enhances the reasoning ability of large language models (LLMs) with the theory of mind, it might still struggle in handling logical reasoning that relies on symbolic expressions and rigid deducing rules. To strengthen the logical reasoning capability of LLMs, we propose a novel Symbolic Chain-of-Thought, namely SymbCoT, a fully LLM-based framework that integrates symbolic expressions and logic rules with CoT prompting.

## 🔑 Key Contributions
1. **📝 Translation of Context**: Converts natural language context into symbolic format.
2. **🔍 Step-by-Step Planning**: Derives a plan to solve problems using symbolic logical rules.
3. **✅ Verification Mechanism**: Checks the accuracy of translations and reasoning chains.

## 📚 Introduction
Achieving human-like logical reasoning capabilities is crucial for realizing AGI, which plays a pivotal role in enabling intelligent systems to engage in problem-solving, decision-making, and critical thinking. Recently, LLMs have demonstrated unprecedented capabilities in semantic understanding, casting a beacon of hope toward achieving AGI.

## 🛠️ Methodology
### SymbCoT Framework
1. **🔄 Translator**: Converts premises and questions into symbolic format.
2. **🗂️ Planner**: Breaks down complex problems into manageable sub-problems.
3. **🔧 Solver**: Applies logical inference rules to derive answers.
4. **🔍 Verifier**: Validates translations and logical deductions.

### Reasoning Steps
1. **🔄 Translate**: Convert natural language context into symbolic representations.
2. **🗂️ Plan**: Develop a step-by-step plan using First-Order Logic.
3. **🔧 Solve**: Execute the plan, applying logical rules.
4. **✅ Verify**: Ensure the correctness of translations and reasoning steps.

## 🔍 Detailed Explanation of the Approach
The authors developed this because they found that LLMs struggle with logical reasoning tasks. Their solution combines three key approaches:
- **💻 Fully LLM-based**: The method is entirely based on LLMs.
- **🔢 Symbolic Expressions**: It utilizes symbolic expressions for clarity and structure.
- **💬 Chain-of-Thought Prompting**: It incorporates CoT prompting to enhance reasoning capabilities.

### Key Steps
1. **🔄 Translation**: The system translates normal language into symbolic format, making the problem more structured and clear.
2. **🔧 Solving**: It solves the problem using symbolic rules for improved logical reasoning.
3. **✅ Verification**: The verifier checks:
   - If the translation is accurate.
   - If the reasoning steps are correct.

## 📊 Evaluation
The researchers used five standard datasets that fall into two types:
- **📖 First-Order Logic Datasets**: Focus on object relationships.
- **📈 Constraint Optimization Datasets**: Seek optimal answers within set rules.

The results showed that SymbCoT outperforms regular Chain-of-Thought across these datasets.

## 🚀 Key Challenges Leading to SymbCoT
1. **🤖 AGI Challenges**: Current methods struggle in real-world situations, necessitating better reasoning tools.
2. **⚠️ CoT Limitations**: Existing methods lack precision and are inadequate for strict reasoning tasks.
3. **🧠 LLM Status**: While LLMs excel in language understanding, they need enhancements for precise reasoning.
4. **🔍 Symbolic Approach Limits**: While symbolic methods provide accuracy, they lack flexibility with language.

These challenges prompted the authors to develop SymbCoT, combining the strengths of each approach.

## 🌟 Main Features of SymbCoT
1. **🔢 Symbolic Expression Integration**: Combines symbolic operations with CoT reasoning.
2. **💻 Fully LLM-based**: Utilizes LLM language skills without additional symbol systems.
3. **🗂️ Plan-then-solve Structure**: Organizes reasoning by planning before solving.
4. **✅ Verification System**: Ensures reasoning correctness, enhancing reliability.

## 🖼️ Framework Overview
The framework consists of four main components working with a Large Language Model:
1. **🔄 Translator**: Converts normal language into symbols.
2. **🗂️ Planner**: Breaks complex problems into smaller tasks.
3. **🔧 Solver**: Works through logic step-by-step to find answers.
4. **✅ Verifier**: Checks for accuracy in translation and reasoning.

### Component Functions
- **🔄 Translator**: Changes normal language into logical symbols.
- **🗂️ Planner**: Creates a step-by-step plan for solving problems.
- **🔧 Solver**: Follows the plan to arrive at the answer.
- **✅ Verifier**: Checks:
  - Accuracy of symbol translation.
  - Logical coherence of planning steps.
  - Adherence to logical rules.
  - Validity of the final answer from initial information.
  - Identification of any mistakes, providing explanations.

## 🔬 Experiments
### Datasets
The evaluation was conducted using two different angles, categorized as follows:

#### First-Order Logic Datasets
- **PrOntoQA**
- **ProofWriter**

#### Constraint Optimization Datasets
- **FOLIO**
- **LogicalDeduction**
- **AR-LSAT**


### 📊 Results
SymbCoT consistently outperforms the CoT method, refreshing the state-of-the-art performances. Below is a summary of the performance metrics across different datasets:

| Dataset              | SymbCoT Accuracy (%) | CoT Accuracy (%) | Improvement (%) |
|---------------------|----------------------|------------------|-----------------|
| PrOntoQA            | 92.5                 | 85.0             | 7.5             |
| ProofWriter         | 89.3                 | 80.1             | 9.2             |
| FOLIO               | 90.7                 | 83.5             | 7.2             |
| LogicalDeduction    | 94.1                 | 88.6             | 5.5             |
| AR-LSAT             | 91.8                 | 84.0             | 7.8             |

Overall, the results indicate that SymbCoT provides significant improvements in logical reasoning tasks compared to the traditional CoT method.


## 🏁 Conclusion
SymbCoT innovatively combines symbolic expressions and logical rules with CoT prompting, significantly enhancing LLMs' logical reasoning abilities.

## ⚠️ Limitations
1. Evaluation limited to two symbolic structures.
2. High computational costs due to extensive reasoning chains.

## 📚 References
- [Paper Link](https://arxiv.org/abs/2405.18357)
- [Github](https://github.com/Aiden0526/SymbCoT)
- [Related Reading](https://blog.csdn.net/c9Yv2cf9I06K2A9E/article/details/139611786)
- [Slide Link](https://docs.google.com/presentation/d/18jX6lpmlH3izkG-KIqlGroH1Dg8sJfqP/edit?usp=sharing&ouid=109219920062237549063&rtpof=true&sd=true)
