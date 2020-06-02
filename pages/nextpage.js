import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import ChatBot from 'react-simple-chatbot';

export default function nextpage() {
  return (
<ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
    <Layout home>
      <Head>
        <title>Learn T1D</title>
      </Head>
<h1>What is Diabetes?</h1>
<p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=E4F45E1ECD364F7D946A83B83003340A&amp;_z=z">Insulin</a>, a&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=0C2DFA8740434D4D9FB3D46BA0F185AB&amp;_z=z">hormone</a>&nbsp;made by the&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=7C416DD4D72945BF9B7C87D9A8B1DA3D&amp;_z=z">pancreas</a>, helps glucose from food get into your cells to be used for energy. Sometimes your body doesn&rsquo;t make enough&mdash;or any&mdash;insulin or doesn&rsquo;t use insulin well. Glucose then stays in your blood and doesn&rsquo;t reach your cells.</p>
<p>Over time, having too much glucose in your blood can cause&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=B07073BD1DCD453B91EA2D766C0F6312&amp;_z=z">health problems</a>. Although diabetes has no cure, you can take steps to&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=A76EE05943ED43EA982E8E16FAB6E52F&amp;_z=z">manage your diabetes</a>&nbsp;and stay healthy.</p>
<p>Sometimes people call diabetes &ldquo;a touch of sugar&rdquo; or &ldquo;borderline diabetes.&rdquo; These terms suggest that someone doesn&rsquo;t really have diabetes or has a less serious case, but every case of diabetes is serious.</p>
<figure>Diabetes affects just about everyone, from the over 110 million Americans with or at risk for the disease to the many more people who care for them.</figure>
<h2>What are the different types of diabetes?</h2>
<p>The most common types of diabetes are type 1, type 2, and gestational diabetes.</p>
<h3>Type 1 diabetes</h3>
<p>If you have&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=F1883489962F431696BD16F21B24491A&amp;_z=z">type 1 diabetes</a>, your body does not make insulin. Your&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=00B261C2A33B471AAB7AEC2D3B771FA3&amp;_z=z">immune system</a>&nbsp;attacks and destroys the cells in your pancreas that make insulin. Type 1 diabetes is usually diagnosed in children and young adults, although it can appear at any age. People with type 1 diabetes need to take insulin every day to stay alive.</p>
<h3>Type 2 diabetes<a href="https://www.niddk.nih.gov/" name="type2diabetes"></a></h3>
<p>If you have&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=2FBD8504EC0343C8A56B091324664FAE&amp;_z=z">type 2 diabetes</a>, your body does not make or use insulin well. You can develop type 2 diabetes at any age, even during childhood. However, this type of diabetes occurs most often in middle-aged and older people. Type 2 is the most common type of diabetes.</p>
<h3>Gestational diabetes</h3>
<p><a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=D7C67F2866FC4471A633B43EE345D7AC&amp;_z=z">Gestational diabetes</a>&nbsp;develops in some women when they are pregnant. Most of the time, this type of diabetes goes away after the baby is born. However, if you&rsquo;ve had gestational diabetes, you have a greater chance of developing type 2 diabetes later in life. Sometimes diabetes diagnosed during pregnancy is actually type 2 diabetes.</p>
<h3>Other types of diabetes</h3>
<p>Less common types include&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=03A07A695FC143AC8495A219F5011CE1&amp;_z=z">monogenic diabetes</a>, which is an inherited form of diabetes, and&nbsp;<a href="https://www.cff.org/Life-With-CF/Daily-Life/Cystic-Fibrosis-related-Diabetes/">cystic fibrosis-related diabetes</a>.</p>
<h2>How common is diabetes?</h2>
<p>As of 2015, 30.3 million people in the United States, or 9.4 percent of the population, had diabetes. More than 1 in 4 of them didn&rsquo;t know they had the disease. Diabetes affects 1 in 4 people over the age of 65. About 90-95 percent of cases in adults are type 2 diabetes.<sup>1</sup></p>
<h2>Who is more likely to develop type 2 diabetes?</h2>
<p>You are more likely to develop type 2 diabetes if you are age 45 or older, have a family history of diabetes, or are overweight. Physical inactivity, race, and certain health problems such as high blood pressure also affect your chance of developing type 2 diabetes. You are also more likely to develop type 2 diabetes if you have&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=A061625CFE984C7695A76D8D3F6C5BC8&amp;_z=z">prediabetes</a>&nbsp;or had gestational diabetes when you were pregnant. Learn more about&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=770DE5B5E26E496D87BD89CC50712CDC&amp;_z=z">risk factors for type 2 diabetes</a>.</p>
<h2>What health problems can people with diabetes develop?</h2>
<p>Over time, high blood glucose leads to problems such as</p>
<ul>
<li>heart disease</li>
<li>stroke</li>
<li>kidney disease</li>
<li>eye problems</li>
<li>dental disease</li>
<li>nerve damage</li>
<li>foot problems</li>
</ul>
<p>You can take steps to lower your chances of developing these&nbsp;<a href="https://www.niddk.nih.gov/syndication/~/link.aspx?_id=B07073BD1DCD453B91EA2D766C0F6312&amp;_z=z">diabetes-related health problems</a>.</p>
<p>
<Link href="/">
  <a>Back to home</a>
</Link>
</p>
<div className="reference">
<h2>References</h2>
<aside>
<p>[1] Centers for Disease Control and Prevention. National diabetes statistics report, 2017. Centers for Disease Control and Prevention website.&nbsp;<a href="https://www.cdc.gov/diabetes/pdfs/data/statistics/national-diabetes-statistics-report.pdf">www.cdc.gov/diabetes/pdfs/data/statistics/national-diabetes-statistics-report.pdf</a>&nbsp;(PDF, 1.3 MB)&nbsp;. Updated July, 18 2017. Accessed August 1, 2017.</p>
</aside>
<p>This content is provided as a service of the&nbsp;<a href="https://www.niddk.nih.gov/">National Institute of Diabetes and Digestive and Kidney Diseases</a>&nbsp;(NIDDK), part of the National Institutes of Health. The NIDDK translates and disseminates research findings to increase knowledge and understanding about health and disease among patients, health professionals, and the public. Content produced by the NIDDK is carefully reviewed by NIDDK scientists and other experts.</p>
<strong>Syndicated Content Details:</strong><br />Source URL:&nbsp;<a href="https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes">https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes</a><br />Source Agency:&nbsp;<a href="http://www.niddk.nih.gov/">National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)</a><br />Captured Date: 2017-06-19 23:53:06.0
</div>
    </Layout>
  )
}
