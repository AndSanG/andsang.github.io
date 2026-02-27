import { MapPin, Mail, GithubIcon, LinkedinIcon } from 'lucide-react'
import { contactController } from '@/src/di'

export async function ContactSection() {
    const contact = await contactController.getContact()

    return (
        <section id="contact" className="py-24 bg-background dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-12">
                    Get in <span className="text-accent">Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {/* Location */}
                    <div className="flex flex-col items-center gap-3 text-center">
                        <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-accent">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-zinc-700 dark:text-gray-300 font-medium">{contact.location}</p>
                            <p className="text-zinc-500 dark:text-gray-500 text-xs text-nowrap">{contact.timezone}</p>
                        </div>
                    </div>

                    {/* Email */}
                    <a href={`mailto:${contact.email}`} className="group flex flex-col items-center gap-3 text-center">
                        <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-accent group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-zinc-700 dark:text-gray-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-sm">{contact.email}</span>
                    </a>

                    {/* LinkedIn */}
                    <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 text-center">
                        <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-accent group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                            <LinkedinIcon className="w-6 h-6" />
                        </div>
                        <span className="text-zinc-700 dark:text-gray-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 text-center">
                        <div className="p-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-accent group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                            <GithubIcon className="w-6 h-6" />
                        </div>
                        <span className="text-zinc-700 dark:text-gray-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
