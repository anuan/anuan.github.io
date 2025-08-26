import"../chunks/DsnmJJEf.js";import"../chunks/69_IOA4Y.js";import{p as t,n as a}from"../chunks/CPEk0RVX.js";var n=t(`<main><h1>Our Methodology: A Causal-First Approach to AI</h1> <p>Traditional machine learning excels at prediction based on correlation. Causal AI, however, is
		designed for a more profound task: understanding and estimating the effects of interventions.
		This requires a fundamentally different development process that prioritizes domain knowledge,
		rigorous assumptions, and counterfactual reasoning over pure pattern recognition.</p> <p>Our methodology is a collaborative, knowledge-driven workflow that builds models <b>with guardrails</b> grounded in scientific reality.</p> <h2>Step 1: Causal Discovery and Scaffolding</h2> <p>This is the most critical departure from traditional AI. Instead of starting with a dataset, we
		start with a formal, structured understanding of the problem.</p> <ol><li><b>Define the Causal Question:</b> We begin by framing the clinical need as a precise causal query.
			We move from a predictive question like, <i>"Who is likely to have a poor outcome?"</i> to an intervention-focused
			question like, <i>"What would be the effect on this patient's quality of life if we chose Treatment
			A versus Treatment B?"</i></li> <li><b>Elicit and Encode Domain Knowledge:</b> We facilitate structured sessions with clinicians, biologists,
			and epidemiologists. Their expert knowledge is not just an afterthought; it's a first-class citizen
			in our process. We translate their understanding of biological processes and clinical pathways
			into a formal mathematical structure.</li> <li><b>Construct the Causal Graph (DAG):</b> This knowledge is encoded into a <b>Directed Acyclic Graph
			(DAG)</b>. The DAG is our causal blueprint—a visual and machine-readable representation of our assumptions
			about the data-generating process. It explicitly maps the assumed causal relationships between
			variables (e.g., patient comorbidities, treatments, outcomes).</li> <li><b>Test for Identifiability:</b> Before touching the data, we analyze the DAG to determine if the
			causal effect of interest is <b>identifiable</b>. The graph allows us to determine the minimally sufficient
			set of variables that must be measured and controlled for (e.g., via the "backdoor criterion")
			to isolate the causal effect and eliminate confounding. This step alone prevents wasted effort
			and ensures our data collection is targeted and efficient.</li></ol> <h2>Step 2: Targeted Data Strategy</h2> <p>Where traditional ML asks, <i>"What can we learn from the data we have?"</i>, our causal approach asks, <i>"What is the right data to answer our question?"</i>.</p> <p>The validated DAG from Step 1 directly informs our data strategy. It specifies which variables
		are essential for an unbiased estimate, guiding data acquisition and feature engineering. This <b>proactive, knowledge-driven approach</b> ensures we are focused on gathering data that reduces
		confounding and captures the necessary causal pathways, rather than passively accepting the
		biases inherent in "found" observational data.</p> <h2>Step 3: Causal Estimation and Inference</h2> <p>This is where statistical modeling and machine learning are applied, but within the "guardrails"
		established by our causal graph.</p> <ol><li><b>Model Selection:</b> We employ a range of modern causal inference techniques appropriate for
			the specific question and data structure. This can include everything from doubly robust methods
			like <b>Targeted Maximum Likelihood Estimation (TMLE)</b> and <b>Augmented Inverse Propensity Weighting (AIPW)</b> to flexible, non-parametric approaches like <b>Causal Forests</b>. The choice of model is guided by the
			goal of obtaining an unbiased estimate of the causal effect, not just maximizing predictive accuracy.</li> <li><b>Intervention and Counterfactual Simulation:</b> With the estimated model, we can now perform
			interventions using the principles of Pearl's <code>do</code>-calculus. We can simulate outcomes for the same
			individual under different hypothetical scenarios (e.g., treatment vs. no treatment), which is
			the definition of a <b>counterfactual</b>. This is what allows us to estimate <b>Individualized Treatment
			Effects (ITEs)</b>.</li> <li><b>Robustness and Sensitivity Analysis:</b>A prediction model is validated by its accuracy. A
			causal model must be validated by its <b>robustness</b>. We rigorously test how sensitive our effect
			estimates are to potential violations of our assumptions (e.g., the presence of unmeasured
			confounding), providing a realistic measure of confidence in our conclusions.</li></ol></main>`);function l(e){var i=n();a(e,i)}export{l as component};
