"use client"

import React, { useState } from 'react'

enum Section {
    "Builder", 
    "Workflow", 
    "Preview"
}


const BuilderConst = {
    "title": "Builder View",
    "prompt": "Build some shit"
}
const WorkFlowConst = {
    "title": "Workflow View",
    "prompt": "do some shit"
}
const PreviewConst = {
    "title": "Preview View",
    "prompt": "Look at some shit"
}

const page = () => {
    const [currentSection, setCurrentSection] = useState<Section>(Section.Builder)
    console.log(currentSection+ " " + typeof(Section[currentSection]))


  return (
    <div>
        
        <div className='flex flex-row gap-4 bg-pink-400 p-4 w-fit'>
            <button className={`${Section[currentSection] === "Builder" ? "text-green-500" : "text-gray-500"} bg-black`} onClick={() => setCurrentSection(Section.Builder)}>
                Builder
            </button>
            <button className={`${Section[currentSection] === "Workflow" ? "text-green-500" : "text-gray-500"} bg-black`} onClick={() => setCurrentSection(Section.Workflow)}>
                Workflow
            </button>
            <button className={`${Section[currentSection] === "Preview" ? "text-green-500" : "text-gray-500"} bg-black`} onClick={() => setCurrentSection(Section.Preview)}>
                Preview
            </button>



        </div>

            {Section[currentSection]}
            <div className='bg-yellow-300 p-4 m-4 '>
                {
                    Section[currentSection] === "Builder" ? (
                        <>
                        <h1 className='text-2xl text-cyan-700'>{BuilderConst.title}</h1>
                         <p className='text-white'>{BuilderConst.prompt}</p>
                        </>
                         
                    ) : (
                        Section[currentSection] === "Workflow" ? (
                        <>
                        <h1 className='text-2xl text-cyan-700'>{WorkFlowConst.title}</h1>
                         <p className='text-white'>{WorkFlowConst.prompt}</p>
                        </>
                         
                    ): (
                        <>
                        <h1 className='text-2xl text-cyan-700'>{PreviewConst.title}</h1>
                         <p className='text-white'>{PreviewConst.prompt}</p>
                        </>
                    )
                    )
                }
               
            </div>
        

    </div>
  )
}

export default page