---
title: "Causal Modelling Process"
date: "2023-04-28"
updated: "2023-04-28"
categories:
  - "causal AI"
  - "healthcare"
coverImage: "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates how to include a Svelte component in a Markdown post.
---

# Our Methodology: A Causal-First Approach to AI
Traditional machine learning excels at prediction based on correlation. Causal AI, however, is designed for a more profound task: understanding and estimating the effects of interventions. This requires a fundamentally different development process that prioritizes domain knowledge, rigorous assumptions, and counterfactual reasoning over pure pattern recognition.
Our methodology is a collaborative, knowledge-driven workflow that builds models with guardrails grounded in scientific reality.
## Step 1: Causal Discovery and Scaffolding
This is the most critical departure from traditional AI. Instead of starting with a dataset, we start with a formal, structured understanding of the problem.
Define the Causal Question: We begin by framing the clinical need as a precise causal query. We move from a predictive question like, "Who is likely to have a poor outcome?" to an intervention-focused question like, "What would be the effect on this patient's quality of life if we chose Treatment A versus Treatment B?"
Elicit and Encode Domain Knowledge: We facilitate structured sessions with clinicians, biologists, and epidemiologists. Their expert knowledge is not just an afterthought; it's a first-class citizen in our process. We translate their understanding of biological processes and clinical pathways into a formal mathematical structure.
Construct the Causal Graph (DAG): This knowledge is encoded into a Directed Acyclic Graph (DAG). The DAG is our causal blueprint—a visual and machine-readable representation of our assumptions about the data-generating process. It explicitly maps the assumed causal relationships between variables (e.g., patient comorbidities, treatments, outcomes).
Test for Identifiability: Before touching the data, we analyze the DAG to determine if the causal effect of interest is identifiable. The graph allows us to determine the minimally sufficient set of variables that must be measured and controlled for (e.g., via the "backdoor criterion") to isolate the causal effect and eliminate confounding. This step alone prevents wasted effort and ensures our data collection is targeted and efficient.
## Step 2: Targeted Data Strategy
Where traditional ML asks, "What can we learn from the data we have?", our causal approach asks, "What is the right data to answer our question?".
The validated DAG from Step 1 directly informs our data strategy. It specifies which variables are essential for an unbiased estimate, guiding data acquisition and feature engineering. This proactive, knowledge-driven approach ensures we are focused on gathering data that reduces confounding and captures the necessary causal pathways, rather than passively accepting the biases inherent in "found" observational data.
## Step 3: Causal Estimation and Inference
This is where statistical modeling and machine learning are applied, but within the "guardrails" established by our causal graph.
Model Selection: We employ a range of modern causal inference techniques appropriate for the specific question and data structure. This can include everything from doubly robust methods like Targeted Maximum Likelihood Estimation (TMLE) and Augmented Inverse Propensity Weighting (AIPW) to flexible, non-parametric approaches like Causal Forests. The choice of model is guided by the goal of obtaining an unbiased estimate of the causal effect, not just maximizing predictive accuracy.
Intervention and Counterfactual Simulation: With the estimated model, we can now perform interventions using the principles of Pearl's do-calculus. We can simulate outcomes for the same individual under different hypothetical scenarios (e.g., treatment vs. no treatment), which is the definition of a counterfactual. This is what allows us to estimate Individualized Treatment Effects (ITEs).
Robustness and Sensitivity Analysis:A prediction model is validated by its accuracy. A causal model must be validated by its robustness. We rigorously test how sensitive our effect estimates are to potential violations of our assumptions (e.g., the presence of unmeasured confounding), providing a realistic measure of confidence in our conclusions.

