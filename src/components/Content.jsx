import React from 'react'

const Content = ({children, className, ...props}) => {

    return (
        <section className={`w-full mx-auto lg:w-8/12 max-w-7xl bg-white dark:bg-gray-700 flex flex-col flex-grow ${className}`} {...props}>
            {children}
        </section>
    )
}

export default Content