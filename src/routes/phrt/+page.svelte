<script lang="ts">
	import video from '$lib/assets/website_draft-small.mp4';
</script>

<main>
	<h1>Personalized Healthcare Requires Causal Thinking</h1>
	<h1>Empowering Patients and Clinicians with Causal AI for Better Health Decisions</h1>
	<p>
		Today's healthcare decisions are often based on population averages, not individual causal
		factors. We are building a platform that uses causal inference and machine learning to create
		personalized treatment effect models, enabling truly shared and informed decision-making between
		patients and their care teams. 
		
		
	</p>
	<video controls>
		<!--autoplay-->
		<source src={video} type="video/mp4" />
		From Correlations To Causal Understanding
		<track kind="captions" />
	</video>

	<h2>Traditional Models</h2>
	<h3 class="subtitle">See Associations, Miss Mechanisms</h3>

	<p>Healthcare decision-making is increasingly relying on AI/ML
		models. Traditional data-driven AI/ML models are developed using healthcare data, typically
		observational data from clinical records, genomics, etc., and predict outcomes based on observed
		correlations. I.e. they predict outcomes without understanding cause and effect in data.</p>
	<p>
		Traditional data-driven AI/ML models are developed using healthcare data, typically
		observational data from clinical records, genomics, etc., and predict outcomes based on observed
		correlations. I.e. they predict outcomes without understanding cause and effect in data.
	</p>

	<h2>Problem</h2>
	<p>The problem is ... <b>we miss what drives the data</b>. As a consequence,</p>
	<ul>
		<li>models incorporate confounding, dataset bias & algorithm bias</li>
		<li>models do not transport to different populations and clinical settings</li>
		<li>models cannot reliably estimate effect of interventions</li>
		<li>models do not support comparisons of different treatment strategies</li>
		<li>models do not support “what if” scenarios</li>
		<li>models are black-box and their predictions are hard to explain</li>
	</ul>
	<p>In summary, the models provide <b>limited insights</b> and contain <b>potential biases</b>.</p>

	<h2>Solution</h2>

	<p>
		The solution is to <b>model what drives the data</b>. That is, introduce a causal
		story/blueprint that models the structure of the relationships and variable interdependencies
		within the data. This enables us to
	</p>
	<ul>
		<li>mitigate sources of confounding, dataset bias & algorithm bias</li>
		<li>transport to different populations and clinical settings</li>
		<li>reliable estimates of interventions</li>
		<li>reliable comparisons of different treatment strategies</li>
		<li>support “what if” scenarios</li>
		<li>provide built-in interpretability</li>
	</ul>
	<p>
		With a causal story of how the data comes about, we gather the <b>right data</b>
		rather than just more data from clinical records, genomics, etc. We are proactive in mitigating potential
		biases and sources of confounding. And the models we develop are now <b>Causal AI models</b>
		that leverage causal structure and follow the logic of biology. In other words, our models are models
		<b>with guardrails</b> that align with biological processes & clinical knowledge.
	</p>

	<h1>Causal Model Development</h1>

	<p>So, how does this work?</p>

	<h2>Causal Story Development</h2>

	<h3>Define the Research Question</h3>

	<h3>Identify Key Variables & Causal Relationships</h3>

	<h3>Build Graph of Causal Relationships</h3>

	<h3>Analyze the Causal Structure</h3>
	<h2>Gather Targeted Data</h2>

	<h3>Plan Data Collection</h3>
	<p>Based on Causal DAG</p>

	<h3>Gather Data</h3>

	<h2>Causal Model Development</h2>

	<h4>Choose Your Modelling Approach</h4>

	<h4>Simulate and Intervene</h4>

	<h3>Refine & Iterate</h3>

	<h2>In (the) Practice</h2>

	<p>
		Patients pose their questions about their illness and treatment options to the clinician, e.g.
		"How long do I have?", "How will this treatment affect my life?" etc. Clinicians populate the
		model with patient data and can query it for various survival and quality of life outcomes. A
		clinician can also pose "what-if" scenarios to understand the prognosis under different
		treatment regimes. This can form the basis of a shared decision-making process where the patient
		and clinician collaborate to find the best treatment regime for the patient.
	</p>

	<h2>Multi-Stakeholder Collaboration</h2>

	<p>
		Causal model development naturally involves multiple key stakeholders and their perspectives.
		From clinicians and scientists to develop the causal story, to clinicians and data scientists to
		mitigate potential sources of confounding and gather data and to eventually building the causal
		model itself.
	</p>

	<h2>Learn More about our Approach</h2>

	<h2>Get in Touch</h2>

	<h2>Who We're Looking For</h2>
	<p>
		We are actively seeking collaboration with Data Scientists, Clinical Researchers, Patient
		Advocates and Healthcare Innovators.
	</p>
	<div class="profile">Data Scientists</div>
	<div class="profile">Clinical Researchers</div>
	<div class="profile">Patient Advocates</div>
	<div class="profile">Healthcare Innovators</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Ovo&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');

	main {
		position: relative;
		top: 40px;
		width: 90%;
		max-width: 800px;
		background: white;
		margin: auto;
		padding: 20px;
		color: rgb(50, 50, 50);
	}

	video {
		width: 90%;
		max-width: 640px;
		height: auto;
	}

	h1,
	h2,
	h3 {
		font-family: 'Overlock', sans-serif;
		font-size: 60px;
		color: teal;
	}

	h2 {
		font-size: 40px;
	}

	h3 {
		font-size: 28px;
	}

	h3.subtitle {
		margin-top: -20px;
		font-size: 28px;
	}

	p,
	ul {
		font-family: 'Newsreader', serif;
		font-weight: 400;
		font-style: normal;
		font-size: 21px;
		line-height: 1.5;
		margin-bottom: 20px;
	}

	b {
		font-weight: 600;
		font-style: italic;
	}
</style>
