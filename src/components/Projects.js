import React from 'react'
import data from '../utils/projectData'
import ProjectTemplate from './ProjectTemplate'

function Projects() {
    const [index, setIndex] = React.useState(1);
    const tabItems = [
        {
            id: 1,
            title: "Personal",
        },
        {
            id: 2,
            title: "Freelance",
        }
    ]
    const TabItemComponent = ({
        title = '',
        onItemClicked = () => console.error('You passed no action to the component'),
        isActive = false,
    }) => {
        return (
            <div className={isActive ? 'py-2 px-6 bg-primary rounded-full text-white' : 'py-2 px-6 text-primary hover:text-black'} onClick={onItemClicked}>
                <p>{title}</p>
            </div>
        )
    };
    return (
        <div className='pt-10 lg:pt-20' id="projects">
            <div className='px-10 lg:px-0 max-w-screen-lg mx-auto'>
                <p className='text-2xl md:text-4xl text-primary font-semibold'>Projects</p>
                <div className='flex cursor-pointer mt-10 font-medium bg-gray-200 w-fit rounded-full'>
                    {tabItems.map(({ id, title }) =>
                        <TabItemComponent
                            key={title}
                            title={title}
                            onItemClicked={() => setIndex(id)}
                            isActive={index === id}
                        />
                    )}
                </div>
                <div className="mt-10 h-420 flex relative">
                    {index === 1 &&
                        <ProjectTemplate data={data.personalProjects} />
                    }
                    {index === 2 &&
                        <ProjectTemplate data={data.freelanceProjects} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
