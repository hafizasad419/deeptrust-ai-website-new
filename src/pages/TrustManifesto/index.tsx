import { Button } from '../../components/ui/button';
import { ArrowRight, CheckCircle, Heart, Users, TrendingUp, Zap, Shield, Globe } from 'lucide-react';
import Footer from '../../components/Footer';
import BackToHome from '@/components/BackToHome';

function TrustManifesto() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div
                className='bg-black pt-4'
            >
                <BackToHome
                    textColor='text-white'
                />
            </div>
            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-tight mb-8 font-inter tracking-tight">
                        Trust,
                        <br />
                        <span className="font-extralight">Reimagined.</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
                        Building the world's first Trust Infrastructure—where AI and human connection unite to make trust the most valuable currency in business and society.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => scrollToSection('cta')}
                            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3 text-lg font-normal group"
                        >
                            Join the Trust Movement
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section id="vision" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gray-50 opacity-50"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gray-100 opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-light text-black mb-8 leading-tight">
                            A Future Built on
                            <br />
                            <span className="font-normal">Trust</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                            We envision a world where trust is measured, scaled, and shared.
                            <br />
                            DeepTrust AI is building the first global Trust Infrastructure—a platform where authentic human connection, amplified by intelligent AI, becomes the foundation of growth, collaboration, and impact.
                        </p>
                    </div>

                    {/* Trust as the Glue Visual */}
                    <div className="relative w-full py-16">
                        {/* Visual Representation: Trust connecting different elements */}
                        <div className="grid md:grid-cols-5 gap-8 items-center mb-16">
                            {/* Left Element - Business */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-medium text-blue-900">Business</h4>
                                </div>
                            </div>

                            {/* Connection Line with Trust Label */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-yellow-400"></div>
                                <div className="mt-2 px-4 py-1 bg-yellow-100 rounded-full border border-yellow-300">
                                    <span className="text-sm font-medium text-yellow-900">Trust</span>
                                </div>
                            </div>

                            {/* Center Element - People (The Glue) */}
                            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-2xl border-2 border-yellow-400 transform scale-110">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-yellow-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                                        <Heart className="w-10 h-10 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-yellow-900 text-lg">The Glue</h4>
                                    <p className="text-xs text-yellow-700 mt-1">Trust</p>
                                </div>
                            </div>

                            {/* Connection Line with Trust Label */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-green-400"></div>
                                <div className="mt-2 px-4 py-1 bg-yellow-100 rounded-full border border-yellow-300">
                                    <span className="text-sm font-medium text-yellow-900">Trust</span>
                                </div>
                            </div>

                            {/* Right Element - Growth */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="font-medium text-green-900">Growth</h4>
                                </div>
                            </div>
                        </div>

                        {/* Additional Connections Grid */}
                        <div className="grid md:grid-cols-4 gap-6 mb-12">
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-between">
                                <span className="text-gray-700 font-medium">Leaders</span>
                                <div className="w-12 h-1 bg-yellow-400"></div>
                                <Heart className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-between">
                                <span className="text-gray-700 font-medium">Teams</span>
                                <div className="w-12 h-1 bg-yellow-400"></div>
                                <Heart className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-between">
                                <span className="text-gray-700 font-medium">Partners</span>
                                <div className="w-12 h-1 bg-yellow-400"></div>
                                <Heart className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 flex items-center justify-between">
                                <span className="text-gray-700 font-medium">Clients</span>
                                <div className="w-12 h-1 bg-yellow-400"></div>
                                <Heart className="w-5 h-5 text-yellow-500" />
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 border border-gray-200">
                            <blockquote className="text-3xl lg:text-4xl font-light text-gray-800 italic mb-4">
                                "Trust is the glue of life."
                            </blockquote>
                            <p className="text-xl text-gray-600 mt-2">— Stephen Covey</p>
                            <p className="text-base text-gray-500 mt-6 max-w-3xl mx-auto">
                                Just as glue binds separate pieces into a stronger whole, trust connects people, teams, and organizations—creating unbreakable bonds that fuel collaboration, innovation, and lasting success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id="mission" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
                            Engineering Trust
                            <br />
                            <span className="font-normal">at Scale</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                            We exist to make every leader the most trusted person in their network by:
                        </p>
                    </div>

                    {/* 4-Column Mission Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Mission 1 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-black mb-4">Codifying Trust</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Turning relationships into measurable, actionable insights.
                            </p>
                        </div>

                        {/* Mission 2 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-black mb-4">Activating Relationships</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Driving timely, personalized, benevolent engagement.
                            </p>
                        </div>

                        {/* Mission 3 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-black mb-4">Empowering Leaders</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Expanding influence, accelerating deal flow, deepening impact.
                            </p>
                        </div>

                        {/* Mission 4 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-medium text-black mb-4">Protecting Human Dignity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ensuring empathy, respect, and reciprocity in every interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section id="values" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-light text-black mb-6 leading-tight">
                            The Principles of
                            <br />
                            <span className="font-normal">DeepTrust</span>
                        </h2>
                    </div>

                    {/* 7 Values Grid - Premium Design */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Value 1 - Trust First */}
                        <div className="group relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50/30 rounded-2xl p-10 shadow-lg border-2 border-yellow-300/50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Shield className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trust First</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Trust is our foundation—the bedrock upon which every interaction, decision, and relationship is built.
                            </p>
                        </div>

                        {/* Value 2 - Authenticity Always */}
                        <div className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 rounded-2xl p-10 shadow-lg border-2 border-blue-300/50 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Heart className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Authenticity Always</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Real, transparent, human—we embrace genuine connection over polished perfection.
                            </p>
                        </div>

                        {/* Value 3 - Others Before Self */}
                        <div className="group relative bg-gradient-to-br from-green-50 via-white to-green-50/30 rounded-2xl p-10 shadow-lg border-2 border-green-300/50 hover:border-green-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Others Before Self</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                "How can I help you?" guides us—service and contribution drive every action we take.
                            </p>
                        </div>

                        {/* Value 4 - Reliability by Design */}
                        <div className="group relative bg-gradient-to-br from-purple-50 via-white to-purple-50/30 rounded-2xl p-10 shadow-lg border-2 border-purple-300/50 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reliability by Design</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Follow through, every time—consistency and dependability are woven into our DNA.
                            </p>
                        </div>

                        {/* Value 5 - Global Respect */}
                        <div className="group relative bg-gradient-to-br from-orange-50 via-white to-orange-50/30 rounded-2xl p-10 shadow-lg border-2 border-orange-300/50 hover:border-orange-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Respect</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Honor cultural nuance everywhere—diversity strengthens our collective wisdom.
                            </p>
                        </div>

                        {/* Value 6 - Human + AI Synergy */}
                        <div className="group relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50/30 rounded-2xl p-10 shadow-lg border-2 border-indigo-300/50 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Human + AI Synergy</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Machines scale, people give meaning—technology amplifies human connection, never replaces it.
                            </p>
                        </div>

                        {/* Value 7 - Long-Term Impact */}
                        <div className="group relative bg-gradient-to-br from-teal-50 via-white to-teal-50/30 rounded-2xl p-10 shadow-lg border-2 border-teal-300/50 hover:border-teal-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-4 right-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp className="w-6 h-6 text-teal-600" />
                            </div>
                            <div className="mb-4">
                                <div className="w-2 h-16 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full mb-4"></div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Long-Term Impact</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Build compounding networks of trust—today's connections become tomorrow's opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Belief Section */}
            <section id="belief" className="py-24 bg-black text-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-white/3 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-6xl font-light mb-8 leading-tight">
                            The Power of
                            <br />
                            <span className="font-normal">Designed Trust</span>
                        </h2>
                        <p className="text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
                            When trust is intentionally designed into every interaction, growth becomes inevitable—for leaders, companies, and humanity.
                        </p>
                    </div>

                    {/* Trust Growth Visualization */}
                    <div className="bg-white/5 rounded-2xl p-12 border border-white/10">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div className="relative">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Trust</h3>
                                <p className="text-gray-400 text-sm">Intentional design</p>
                                {/* Arrow */}
                                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/20">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/20 rotate-45"></div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Connections</h3>
                                <p className="text-gray-400 text-sm">Authentic relationships</p>
                                {/* Arrow */}
                                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/20">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/20 rotate-45"></div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Opportunities</h3>
                                <p className="text-gray-400 text-sm">Multiplied pathways</p>
                                {/* Arrow */}
                                <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-white/20">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/20 rotate-45"></div>
                                </div>
                            </div>

                            <div>
                                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">Growth</h3>
                                <p className="text-gray-400 text-sm">Inevitable expansion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section id="cta" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-yellow-500/20 animate-pulse"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue-900/20 animate-pulse delay-500"></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                                Be Part of the
                                <br />
                                <span className="font-normal">Future of Trust</span>
                            </h2>
                            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto mb-10">
                                Trust is no longer a nice-to-have. It's the infrastructure of tomorrow's economy. Join us in building it.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    onClick={() => window.location.href = '/access'}
                                    className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3 text-lg font-normal group"
                                >
                                    Join the Early Access Program
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default TrustManifesto;