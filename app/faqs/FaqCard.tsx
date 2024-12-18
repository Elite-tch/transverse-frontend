"use client"
import React, { useState } from 'react'

interface FaqCardProps {
    title: string;
    description: string;
}
const FaqCard: React.FC<FaqCardProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (

                <div className="flex flex-col gap-6  border  bg-[#FAF9FD] dark:bg-gray-700 dark:border-gray-200  p-4 rounded-xl">
                    <div className="flex flex-row justify-between gap-2 items-center cursor-pointer w-full" onClick={toggleOpen} >
                        <h4 className="text-lg md:text-xl font-normal dark:text-gray-100  text-gray-950">
                            {title}
                        </h4>
                        <button name="FQA toggle" id='FQA toggle'>
                            {isOpen ? (
                                <svg 
                                width="23" 
                                height="23" 
                                viewBox="0 0 26 26" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-[#61278B] dark:stroke-gray-50"
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <path d="M8.2 13H17.8M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" />
                              </svg>


                            ) :
                                (<svg 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect 
                                      x="1" 
                                      y="1" 
                                      width="22" 
                                      height="22" 
                                      rx="11" 
                                      stroke="currentColor" 
                                      className="text-[#61278B] dark:text-gray-50" 
                                      stroke-width="2" 
                                    />
                                    <path 
                                      d="M18.25 12C18.25 12.1989 18.171 12.3897 18.0303 12.5303C17.8897 12.671 17.6989 12.75 17.5 12.75H12.75V17.5C12.75 17.6989 12.671 17.8897 12.5303 18.0303C12.3897 18.171 12.1989 18.25 12 18.25C11.8011 18.25 11.6103 18.171 11.4697 18.0303C11.329 17.8897 11.25 17.6989 11.25 17.5V12.75H6.5C6.30109 12.75 6.11032 12.671 5.96967 12.5303C5.82902 12.3897 5.75 12.1989 5.75 12C5.75 11.8011 5.82902 11.6103 5.96967 11.4697C6.11032 11.329 6.30109 11.25 6.5 11.25H11.25V6.5C11.25 6.30109 11.329 6.11032 11.4697 5.96967C11.6103 5.82902 11.8011 5.75 12 5.75C12.1989 5.75 12.3897 5.82902 12.5303 5.96967C12.671 6.11032 12.75 6.30109 12.75 6.5V11.25H17.5C17.6989 11.25 17.8897 11.329 18.0303 11.4697C18.171 11.6103 18.25 11.8011 18.25 12Z" 
                                      fill="currentColor" 
                                      className="text-[#61278B] dark:text-gray-50" 
                                    />
                                  </svg>
                                )
                            }
                        </button>
                    </div>
                    {isOpen && (
                        <p className="font-light  text-paragraph-text dark:text-gray-200 text-sm text-start md:text-base delay-200 duration-300 ease-out">
                            {description}
                        </p>
                    )}
                </div>

    )
}

export default FaqCard
