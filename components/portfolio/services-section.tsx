"use client";

import { motion } from "framer-motion";
import { Check, Mail, ExternalLink } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site-config";

export function ServicesSection() {
    return (
        <section id="services" className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-[#148E96]" />
                        <span className="text-[#5eead4] text-sm font-medium uppercase tracking-wider">
                            ご依頼いただけること
                        </span>
                        <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-[#148E96]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#148E96] to-[#5eead4]">
                            Services
                        </span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col h-full rounded-2xl bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 hover:border-[#148E96]/50 hover:shadow-[0_0_30px_-5px_rgba(20,142,150,0.3)]"
                        >
                            <h3 className="text-xl font-bold text-white group-hover:text-[#5eead4] transition-colors mb-2">
                                {service.name}
                            </h3>
                            <p className="text-2xl font-bold text-[#5eead4] mb-4">
                                {service.price}
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                                {service.summary}
                            </p>
                            
                            <ul className="space-y-3 mt-auto pt-4 border-t border-white/10">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-[#148E96] shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note & CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center space-y-8"
                >
                    <p className="text-sm text-gray-400">
                        実績公開にご協力いただける方は、モニター価格にて承ります。まずはご相談ください。
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={SITE.coconala}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-[#148E96] text-[#5eead4] font-medium transition-all hover:bg-[#148E96]/10 w-full sm:w-auto"
                        >
                            ココナラで相談する
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                            href={`mailto:${SITE.email}?subject=Web制作・改善のご相談`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#148E96] text-[#ffffff] font-medium transition-all hover:bg-[#5eead4] hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-[rgba(20,142,150,0.4)] w-full sm:w-auto"
                        >
                            <Mail className="w-4 h-4" />
                            メールで相談する
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
