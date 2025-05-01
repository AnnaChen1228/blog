---
title: "Improving the Performance of Bug Report Summarization Using Deep Learning Methods"
date: "2024.01"

layout: ../../layouts/PostLayout.astro
# description: "Improving bug report summarization efficiency through deep learning-based intent detection techniques"

# img_path : "/BRC.jpg"
# img_alt : "Insert image description here"
---

# Improving the Performance of Bug Report Summarization Using Deep Learning Methods

🎉 **Supported by the 112th Academic Year College Student Research Grant**

[![GitHub](https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=GitHub)](https://github.com/yourusername/bug-report-summarization)
[![Grant](https://img.shields.io/badge/Grant-NSTC_112--2813--C--155--039--E-orange.svg)](https://www.nstc.gov.tw/)

## 🎯 Project Overview

Our research focuses on enhancing bug report summarization through deep learning methods. We explore how intent detection can improve summarization performance and investigate various classifiers for optimal results.
![Framework](/BRC.jpg)
## 🔬 Methodology

### Feature Engineering
We focused on four main feature categories:
- Structure features
- Participant features
- Length features
- Lexical features

### Models
- Intent Classification using BRIC model with BiLSTM
- Summarization Models:
  - Logistic Regression (LR)
  - Random Forest (RF) 
  - Support Vector Machine (SVM)
  - eXtreme Gradient Boosting (XG)

## 📈 Results

| Model     | Precision | Recall | F-score |
|-----------|-----------|--------|---------|
| BRC2014   | 0.428     | 0.453  | 0.440   |
| IBRS      | 0.430     | 0.454  | 0.442   |
| BRIC+BRC  | 0.432     | 0.451  | 0.441   |

### Key Findings
- SVM shows best overall performance in BRC and IBRS models
- Random Forest excels in BRIC+BRC model
- Intent detection improves performance with LR and RF

## 👥 Contributors

- **Students:** Chen Kuan-Jung, Tu Chieh-Yu
- **Advisor:** Yang Cheng-Zen
- **Institution:** Yuan Ze University, Department of Computer Science & Engineering

For more details and implementation, please visit our [GitHub repository](https://github.com/yourusername/bug-report-summarization).
