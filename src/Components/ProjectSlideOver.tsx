import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from './MovingBorderButton'
import { toast } from 'react-toastify'
import Badge from './Badge'

export default function ProjectSlideOver({ open, setOpen, project, setUDModal }: any) {

    const handleUnderDevelopmentProject = () => {
        setOpen(false)
        setUDModal(true)
    }
    const handleProjectRedirect = () => {
        setOpen(false)
        window.open(project?.link);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-[1000]" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-b from-slate-950 to-slate-900 py-6 shadow-xl rounded-lg " >
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <div className='flex items-center gap-3'>
                                                    <Dialog.Title className="text-xl font-bold leading-6  text-transparent  bg-clip-text bg-gradient-to-r from-neutral-300 to-gray-200">
                                                        {project?.title}
                                                    </Dialog.Title>
                                                    <Badge type={project?.type} />
                                                </div>

                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="rounded-md  text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            <div className='rounded-xl my-11'>
                                                {
                                                    project?.videosrc ? (
                                                        <video
                                                            src={project?.videosrc}
                                                            controls
                                                            autoPlay
                                                            muted
                                                            loop
                                                            className='w-full h-full rounded-2xl'
                                                        >
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    ) :
                                                        <img src={project?.img} alt="" className='rounded-xl' />
                                                }
                                            </div>
                                            <span className='text-gray-300'>
                                                {project?.des}
                                            </span>
                                            {project?.figma && (
                                                <div className="mt-2 mb-4">
                                                    <span className="block text-white text-sm lg:text-lg font-light lg:font-normal break-words">
                                                        Figma Design:&nbsp;
                                                        <a href={project.figma} target="_blank" rel="noopener noreferrer" className='text-cyan-500'>
                                                            {project.figma}
                                                        </a>
                                                    </span>
                                                </div>
                                            )}

                                            <div className='mt-5'>
                                                <span className='font-bold text-lg text-neutral-200 '>
                                                    Technologies:
                                                </span>
                                                <div className="flex items-center my-3">
                                                    {project?.iconLists.map((icon: any, index: any) => (
                                                        <div
                                                            key={index}
                                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                            style={{
                                                                transform: `translateX(-${5 * index + 2}px)`,
                                                            }}
                                                        >
                                                            <img src={icon} alt="icon" className="p-2" />
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                            <div className='flex justify-center items-center gap-4 my-4'>
                                                <a href={project?.git}>
                                                    <button className="shadow-[inset_0_0_0_2px_#616467]  px-10 py-1 sm:py-1.5 rounded-full tracking-widest uppercase font-medium bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 dark:text-neutral-200 transition duration-200 text-sm">
                                                        Github Repo
                                                    </button>
                                                </a>
                                                {
                                                    project?.link && project?.underDev ? (<div onClick={handleUnderDevelopmentProject}>
                                                        <Button
                                                            type="button"
                                                            className="rounded-md bg-[--border-color] px-3.5 py-2.5 text-sm font-semibold text-[--txt] shadow-sm hover:scale-105 duration-300 text-neutral-200"
                                                        >
                                                            View Demo
                                                        </Button>
                                                    </div>) : project?.link ? (<div onClick={handleProjectRedirect}>
                                                        <Button
                                                            type="button"
                                                            className="rounded-md bg-[--border-color] px-3.5 py-2.5 text-sm font-semibold text-[--txt] shadow-sm hover:scale-105 duration-300 text-neutral-200"
                                                        >
                                                            View Demo
                                                        </Button>
                                                    </div>) : (

                                                        <Button

                                                            className="rounded-md bg-[--border-color] px-3.5 py-2.5 text-sm font-semibold text-[--txt] shadow-sm hover:scale-105 duration-300 text-neutral-200"
                                                            onClick={() => toast.info("This Project is not Deployed yet.")}
                                                        >
                                                            View Demo

                                                        </Button>

                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
