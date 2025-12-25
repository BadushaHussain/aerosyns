'use client'

import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline'
import {
    ServerIcon,
    CloudIcon,
    CpuChipIcon,
    ShieldCheckIcon,
    WrenchScrewdriverIcon,
    CodeBracketIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid'
import { FaPlane } from 'react-icons/fa'

const services = [
    {
        name: 'Airport Services',
        description: 'Complete IT infrastructure for airport operations',
        href: '/services/airport',
        icon: FaPlane,
    },
    {
        name: 'AI Infrastructure',
        description: 'GPU clusters, HPC, and AI platform engineering',
        href: '/services/ai-infrastructure',
        icon: CpuChipIcon,
    },
    {
        name: 'Cloud & Hybrid IT',
        description: 'Multi-cloud, hybrid work, and core banking solutions',
        href: '/services/cloud',
        icon: CloudIcon,
    },
    {
        name: 'Cybersecurity',
        description: 'SOC, SIEM, zero-trust, and compliance',
        href: '/services/cybersecurity',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Infrastructure & Cabling',
        description: 'Structured cabling, networking, and datacenter infrastructure',
        href: '/services/infrastructure',
        icon: ServerIcon,
    },
    {
        name: 'Managed Services',
        description: '24/7 NOC, SLA-backed support, and subscriptions',
        href: '/services/managed-services',
        icon: WrenchScrewdriverIcon,
    },
    {
        name: 'Software Engineering',
        description: 'Enterprise software development and automation',
        href: '/services/software',
        icon: CodeBracketIcon,
    },
]

const products = [
    { name: 'AI Servers', href: '/products/hardware/servers' },
    { name: 'Firewalls', href: '/products/hardware/firewalls' },
    { name: 'Hardware Sales', href: '/products/hardware' },
    { name: 'SaaS Products', href: '/products/saas' },
    { name: 'Workstations', href: '/products/hardware/workstations' },
]

const company = [
    { name: 'About Us', href: '/company/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Compliance', href: '/company/compliance' },
    { name: 'Partners', href: '/company/partners' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [closePopovers, setClosePopovers] = useState(0)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    // Close dropdowns on scroll
    useEffect(() => {
        const handleScroll = () => {
            setClosePopovers(prev => prev + 1)
            setOpenDropdown(null)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-gray-50 to-white backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
            <nav className="container-custom" aria-label="Global">
                <div className="flex items-center justify-between py-5">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Aerosyns</span>
                            <img
                                src="/aerosyns-logo.svg"
                                alt="Aerosyns"
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-8">
                        <div
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('services')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300">
                                Services
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 group-hover:text-primary-600 transition-colors" aria-hidden="true" />
                            </button>

                            <Transition
                                show={openDropdown === 'services'}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <div className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {services.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-primary-600 group-hover:text-primary-700" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <Link href={item.href} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('products')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300">
                                Products
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 group-hover:text-primary-600 transition-colors" aria-hidden="true" />
                            </button>

                            <Transition
                                show={openDropdown === 'products'}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <div className="absolute -left-8 top-full z-50 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                                    {products.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </Transition>
                        </div>

                        <Link href="/solutions" className="text-sm font-bold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300">
                            Solutions
                        </Link>

                        <div
                            className="relative"
                            onMouseEnter={() => setOpenDropdown('company')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300">
                                Company
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400 group-hover:text-primary-600 transition-colors" aria-hidden="true" />
                            </button>

                            <Transition
                                show={openDropdown === 'company'}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <div className="absolute -left-8 top-full z-50 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                                    {company.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </Transition>
                        </div>
                    </Popover.Group>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
                        <Link href="/contact" className="text-sm font-bold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300">
                            Contact
                        </Link>
                        <a
                            href="https://login.microsoftonline.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
                        >
                            <UserCircleIcon className="w-5 h-5" />
                            Employee Login
                        </a>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Aerosyns</span>
                            <img
                                src="/aerosyns-logo.svg"
                                alt="Aerosyns"
                                className="h-14 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {services.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Products
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="/solutions"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Solutions
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Company
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {company.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6 space-y-2">
                                <Link
                                    href="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                                <a
                                    href="https://login.microsoftonline.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                                >
                                    <UserCircleIcon className="w-5 h-5" />
                                    Employee Login
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
