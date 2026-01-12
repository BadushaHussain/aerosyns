import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { CheckCircleIcon, ArrowLeftIcon, CpuChipIcon, SparklesIcon, ChartBarIcon } from '@heroicons/react/24/solid'
import { FaBrain, FaRobot, FaChartLine, FaComments } from 'react-icons/fa'

export const metadata = genMeta({
    title: 'AI & Intelligent Systems Development Services',
    description: 'Build AI-powered analytics, machine learning models, chatbots, and intelligent automation solutions. Enterprise AI development with TensorFlow, PyTorch, OpenAI, and responsible AI practices.',
    keywords: ['AI development', 'machine learning', 'chatbot development', 'intelligent automation', 'predictive analytics', 'NLP', 'computer vision', 'AI UAE'],
})

const aiSolutions = [
    {
        title: 'AI-Powered Analytics & Dashboards',
        description: 'Transform data into actionable insights with predictive analytics',
        icon: ChartBarIcon,
        features: [
            'Predictive analytics & forecasting',
            'Real-time business intelligence',
            'Anomaly detection',
            'Custom KPI dashboards',
            'Automated reporting',
            'Data visualization',
        ],
        useCases: ['Sales forecasting', 'Customer churn prediction', 'Demand planning', 'Risk assessment'],
    },
    {
        title: 'Machine Learning Models',
        description: 'Custom ML models for classification, regression, and clustering',
        icon: FaBrain,
        features: [
            'Supervised learning (classification, regression)',
            'Unsupervised learning (clustering, dimensionality reduction)',
            'Deep learning (neural networks)',
            'Time series forecasting',
            'Recommendation systems',
            'Model deployment & monitoring',
        ],
        useCases: ['Credit scoring', 'Fraud detection', 'Product recommendations', 'Price optimization'],
    },
    {
        title: 'Conversational AI',
        description: 'Intelligent chatbots and virtual assistants',
        icon: FaComments,
        features: [
            'Natural language processing (NLP)',
            'Multi-language support',
            'Intent recognition',
            'Context-aware conversations',
            'Voice integration',
            'Sentiment analysis',
        ],
        useCases: ['Customer support', 'Lead qualification', 'Appointment booking', 'FAQ automation'],
    },
    {
        title: 'Intelligent Automation',
        description: 'RPA enhanced with AI for complex decision-making',
        icon: FaRobot,
        features: [
            'Document processing (OCR, NLP)',
            'Intelligent data extraction',
            'Decision automation',
            'Process mining',
            'Exception handling',
            'Continuous learning',
        ],
        useCases: ['Invoice processing', 'Claims automation', 'Compliance checking', 'Data entry'],
    },
]

const aiTechnologies = {
    'Machine Learning': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Keras'],
    'NLP & Language': ['OpenAI GPT', 'Hugging Face', 'spaCy', 'NLTK', 'Google BERT', 'LangChain'],
    'Computer Vision': ['OpenCV', 'YOLO', 'TensorFlow Object Detection', 'MediaPipe', 'Detectron2'],
    'MLOps & Deployment': ['MLflow', 'Kubeflow', 'Azure ML', 'AWS SageMaker', 'TensorFlow Serving', 'ONNX'],
    'Data Processing': ['Apache Spark', 'Pandas', 'NumPy', 'Dask', 'Ray', 'Polars'],
    'Visualization': ['Plotly', 'Matplotlib', 'Seaborn', 'D3.js', 'Tableau', 'Power BI'],
}

const industryUseCases = [
    {
        industry: 'Insurance',
        useCases: [
            { title: 'Claims Fraud Detection', description: 'ML models to identify fraudulent claims with 95% accuracy' },
            { title: 'Risk Assessment', description: 'AI-powered underwriting and risk scoring' },
            { title: 'Customer Churn Prediction', description: 'Predict and prevent policy cancellations' },
        ],
    },
    {
        industry: 'Healthcare',
        useCases: [
            { title: 'Diagnosis Assistance', description: 'AI models to support medical diagnosis' },
            { title: 'Patient Risk Prediction', description: 'Predict readmission and complications' },
            { title: 'Drug Discovery', description: 'ML for molecular analysis and drug candidates' },
        ],
    },
    {
        industry: 'Finance',
        useCases: [
            { title: 'Credit Scoring', description: 'Alternative credit scoring using AI' },
            { title: 'Fraud Detection', description: 'Real-time transaction fraud detection' },
            { title: 'Algorithmic Trading', description: 'AI-powered trading strategies' },
        ],
    },
    {
        industry: 'Retail',
        useCases: [
            { title: 'Demand Forecasting', description: 'Predict product demand with high accuracy' },
            { title: 'Personalization', description: 'AI-driven product recommendations' },
            { title: 'Inventory Optimization', description: 'Optimize stock levels using ML' },
        ],
    },
    {
        industry: 'Manufacturing',
        useCases: [
            { title: 'Predictive Maintenance', description: 'Predict equipment failures before they occur' },
            { title: 'Quality Control', description: 'Computer vision for defect detection' },
            { title: 'Supply Chain Optimization', description: 'AI for logistics and planning' },
        ],
    },
]

const aiDevelopmentProcess = [
    {
        phase: 'Problem Definition',
        activities: ['Business objective clarification', 'Success metrics definition', 'Feasibility assessment', 'Data availability check'],
    },
    {
        phase: 'Data Collection & Preparation',
        activities: ['Data sourcing', 'Data cleaning', 'Feature engineering', 'Data augmentation', 'Train/test split'],
    },
    {
        phase: 'Model Development',
        activities: ['Algorithm selection', 'Model training', 'Hyperparameter tuning', 'Cross-validation', 'Ensemble methods'],
    },
    {
        phase: 'Validation & Testing',
        activities: ['Model evaluation', 'A/B testing', 'Bias detection', 'Performance benchmarking', 'Explainability analysis'],
    },
    {
        phase: 'Deployment',
        activities: ['Model packaging', 'API development', 'Infrastructure setup', 'Monitoring setup', 'Production deployment'],
    },
    {
        phase: 'Monitoring & Improvement',
        activities: ['Performance monitoring', 'Model drift detection', 'Retraining pipeline', 'Continuous improvement', 'Feedback loop'],
    },
]

const responsibleAI = [
    {
        principle: 'Fairness & Bias Mitigation',
        description: 'Ensure AI systems are fair and unbiased across all demographics',
        practices: ['Bias detection in training data', 'Fairness metrics evaluation', 'Diverse training datasets', 'Regular bias audits'],
    },
    {
        principle: 'Explainability (XAI)',
        description: 'Make AI decisions transparent and understandable',
        practices: ['SHAP values for feature importance', 'LIME for local explanations', 'Decision tree visualization', 'Model interpretation reports'],
    },
    {
        principle: 'Privacy & Security',
        description: 'Protect sensitive data and ensure compliance',
        practices: ['Data encryption', 'Federated learning', 'Differential privacy', 'Secure model deployment'],
    },
    {
        principle: 'Accountability',
        description: 'Clear ownership and responsibility for AI systems',
        practices: ['Model versioning', 'Audit trails', 'Human-in-the-loop', 'Governance framework'],
    },
]

const caseStudies = [
    {
        title: 'Insurance Fraud Detection System',
        industry: 'Insurance',
        challenge: 'Manual claims review causing delays and missed fraud',
        solution: 'ML model analyzing 50+ features to detect fraudulent claims in real-time',
        results: ['95% fraud detection accuracy', '70% reduction in review time', '$2M annual savings', '99% false positive reduction'],
        technologies: ['Python', 'TensorFlow', 'XGBoost', 'AWS SageMaker'],
    },
    {
        title: 'Healthcare Diagnosis Assistant',
        industry: 'Healthcare',
        challenge: 'Radiologists overwhelmed with scan volume',
        solution: 'Computer vision model to assist in medical image analysis',
        results: ['92% diagnostic accuracy', '50% faster diagnosis', '30% cost reduction', 'Improved patient outcomes'],
        technologies: ['PyTorch', 'OpenCV', 'DICOM', 'Azure ML'],
    },
    {
        title: 'Retail Demand Forecasting',
        industry: 'Retail',
        challenge: 'Inventory stockouts and overstocking issues',
        solution: 'Time series forecasting model for demand prediction',
        results: ['25% reduction in stockouts', '30% less overstock', '15% revenue increase', '20% cost savings'],
        technologies: ['Prophet', 'LSTM', 'Scikit-learn', 'Apache Spark'],
    },
]

const roiMetrics = [
    { metric: 'Accuracy Improvement', value: '85-95%', description: 'Typical ML model accuracy' },
    { metric: 'Cost Reduction', value: '30-50%', description: 'Through automation' },
    { metric: 'Time Savings', value: '60-80%', description: 'In manual processes' },
    { metric: 'Revenue Impact', value: '15-25%', description: 'Through better decisions' },
]

export default function AIIntelligentSystemsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="container-custom">
                    <Link href="/services/software" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to Software Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                            <CpuChipIcon className="w-5 h-5 text-purple-400 mr-2" />
                            <span className="text-purple-400 text-sm font-semibold">AI & Intelligent Systems</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                            AI & Intelligent Systems Development
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Build AI-powered solutions for automation and intelligent decision-making. From machine learning models
                            to conversational AI—unlock the power of artificial intelligence for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact?type=ai-consultation" className="btn-primary">
                                Explore AI Solutions
                            </Link>
                            <Link href="#solutions" className="btn-secondary">
                                View Capabilities
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-6 text-center">
                            Intelligent Systems That Learn & Adapt
                        </h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="text-lg mb-4">
                                Artificial Intelligence and Machine Learning are transforming how businesses operate. Our AI solutions
                                go beyond simple automation—they learn from data, adapt to changing conditions, and make intelligent
                                decisions that drive business value.
                            </p>
                            <p className="text-lg mb-4">
                                We build custom AI systems using state-of-the-art technologies like TensorFlow, PyTorch, and OpenAI.
                                From predictive analytics to conversational AI, our solutions are designed to solve real business problems
                                with measurable ROI.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                                    <div className="text-sm text-gray-600">AI Models Deployed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                                    <div className="text-sm text-gray-600">Average Accuracy</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                                    <div className="text-sm text-gray-600">Cost Reduction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Solutions */}
            <section id="solutions" className="section-padding bg-gray-50 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Solutions We Build
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive AI capabilities for every business need
                        </p>
                    </div>
                    <div className="space-y-12">
                        {aiSolutions.map((solution, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                                            <solution.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                        <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Capabilities</h4>
                                                <ul className="space-y-2">
                                                    {solution.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Cases</h4>
                                                <ul className="space-y-2">
                                                    {solution.useCases.map((useCase, idx) => (
                                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                                            <CheckCircleIcon className="w-5 h-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                                                            {useCase}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Technologies */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Technology Stack
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            State-of-the-art AI/ML frameworks and tools
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(aiTechnologies).map(([category, technologies]) => (
                            <div key={category} className="card-enterprise p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Use Cases by Industry
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry-specific AI applications that drive results
                        </p>
                    </div>
                    <div className="space-y-8">
                        {industryUseCases.map((industry, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{industry.industry}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {industry.useCases.map((useCase, idx) => (
                                        <div key={idx} className="border-l-4 border-purple-500 pl-4">
                                            <h4 className="font-bold text-gray-900 mb-2">{useCase.title}</h4>
                                            <p className="text-sm text-gray-600">{useCase.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Development Process */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Development Process
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Structured approach from data to deployment
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiDevelopmentProcess.map((phase, index) => (
                            <div key={index} className="card-enterprise p-6">
                                <div className="w-12 h-12 mb-4 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                                <ul className="space-y-2">
                                    {phase.activities.map((activity, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Responsible AI */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            Responsible AI Practices
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ethical, transparent, and accountable AI systems
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {responsibleAI.map((principle, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{principle.principle}</h3>
                                <p className="text-gray-600 mb-6">{principle.description}</p>
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Our Practices:</h4>
                                    {principle.practices.map((practice, idx) => (
                                        <div key={idx} className="flex items-start text-sm text-gray-600">
                                            <CheckCircleIcon className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                                            {practice}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
                            AI Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world AI implementations with measurable impact
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="card-enterprise p-8">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold mb-4">
                                    {study.industry}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                                        <p className="text-sm text-gray-600">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                                        <p className="text-sm text-gray-600">{study.solution}</p>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Results:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {study.results.map((result, idx) => (
                                            <div key={idx} className="flex items-start text-xs text-gray-600">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xs font-semibold text-gray-500 mb-2">Technologies:</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {study.technologies.map((tech, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Metrics */}
            <section className="section-padding bg-gradient-to-br from-purple-900 to-gray-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-white mb-4">
                            AI ROI & Impact
                        </h2>
                        <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                            Measurable business value from AI investments
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roiMetrics.map((metric, index) => (
                            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/30">
                                <div className="text-4xl font-bold text-purple-300 mb-2">{metric.value}</div>
                                <div className="text-lg font-semibold text-white mb-1">{metric.metric}</div>
                                <div className="text-sm text-purple-200">{metric.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600">
                <div className="container-custom text-center">
                    <h2 className="text-4xl font-display font-bold text-white mb-6">
                        Ready to Unlock AI for Your Business?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Get a free AI consultation and discover how machine learning can transform your operations
                    </p>
                    <Link
                        href="/contact?type=ai-consultation"
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-primary-600 bg-white hover:bg-transparent hover:text-white transition-all duration-200"
                    >
                        Book AI Consultation
                    </Link>
                </div>
            </section>
        </>
    )
}
