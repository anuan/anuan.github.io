<script lang="ts">
	import video from '$lib/assets/website_draft-small.mp4';
</script>
<main>
	<h1>From Correlations To Causal Understanding</h1>
	<video width="640" height="320" controls autoplay>
		<source src={video} type="video/mp4" />
		From Correlations To Causal Understanding
		<track kind="captions" />
	</video>

	<h2>Traditional Models</h2>
    <h3>See Associations, Miss Mechanisms</h3>

    <p>Traditional data-driven AI/ML models are developed using healthcare data, typically observational
	data from clinical records, genomics, etc., and predict outcomes based on observed correlations.
	I.e. they predict outcomes without understanding cause and effect in data.</p>
	
	<h2>Problem</h2>
	<p>The problem is ... **we miss what drives the data**. As a consequence, * models incorporate confounding,
	dataset bias & algorithm bias * models do not transport to different populations and clinical settings
	* models cannot reliably estimate effect of interventions * models do not support comparisons of different
	treatment strategies * models do not support “what if” scenarios * models are black-box and their predictions
	are hard to explain In summary, the models provide **limited insights** and contain **potential biases**.
	</p>
	
	<h2>Solution</h2>

	The solution is to **model what drives the data**. That is, introduce a causal story/blueprint
	that models the structure of the relationships and variable interdependencies within the data.
	This enables us to * mitigate sources of confounding, dataset bias & algorithm bias * transport to
	different populations and clinical settings * reliable estimates of interventions * reliable
	comparisons of different treatment strategies * support “what if” scenarios * provide built-in
	interpretability With a causal story of how the data comes about, we gather the **right data**
	rather than just more data from clinical records, genomics, etc. We are proactive in mitigating
	potential biases and sources of confounding. And the models we develop are now **Causal AI
	models** that leverage causal structure and follow the logic of biology. In other words, our
	models are models **with guardrails** that align with biological processes & clinical knowledge.

	<h1>Causal Model Development</h1>

	So, how does this work?

	<h2>Causal Story Development</h2>

	<h3>Define the Research Question</h3>

	<h3>Identify Key Variables & Causal Relationships</h3>

	<h3>Build Graph of Causal Relationships</h3>

	<h3>Analyze the Causal Structure</h3>
	<h2>Gather Targeted Data</h2>

	<h3>Plan Data Collection</h3>
	Based on Causal DAG

	<h3>Gather Data</h3>

	<h2>Causal Model Development</h2>

	<h3>Choose Your Modelling Approach</h3>

	<h3>Simulate and Intervene</h3>

	<h2>Refine & Iterate</h2>

	<h1>In (the) Practice</h1>

	Patients pose their questions about their illness and treatment options to the clinician, e.g.
	"How long do I have?", "How will this treatment affect my life?" etc. Clinicians populate the
	model with patient data and can query it for various survival and quality of life outcomes. A
	clinician can also pose "what-if" scenarios to understand the prognosis under different treatment
	regimes. This can form the basis of a shared decision-making process where the patient and
	clinician collaborate to find the best treatment regime for the patient.

	<h1>Multi-Stakeholder Collaboration</h1>

	Causal model development naturally involves multiple key stakeholders and their perspectives. From
	clinicians and scientists to develop the causal story, to clinicians and data scientists to
	mitigate potential sources of confounding and gather data and to eventually building the causal
	model itself.

	<h1>Want to get Involved?</h1>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap');

	main {
		position: relative;
		top: 40px;
		width: 90%;
		background: white;
		margin: auto;
		padding: 20px;
		color: rgb(50, 50, 50);
	}

	h1, h2, h3 {
		font-family: 'Rethink Sans', sans-serif;
		font-size: 60px;
		color: teal;
	}

    h2 {
        font-size: 40px;
    }

    h3 {
        font-size: 20px;
    }

	p {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		line-height: 1.5;
		margin-bottom: 60px;
	}
</style>
