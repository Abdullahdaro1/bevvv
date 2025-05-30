export function HowItWorks(
    props: {    
        title: string,
        description: string,
        number1: string,
        number2: string,
        number3: string,
        title1: string,
        title2: string,
        title3: string,
    }
) {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{props.title}</h2>
                <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">{props.description}</p>
            </div>
  
            <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                </div>
  
                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-700">{props.number1}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{props.title1}</h3>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
  
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-700">{props.number2}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{props.title2}</h3>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
  
                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-700">{props.number3}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{props.title3}</h3>
                        <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
}
