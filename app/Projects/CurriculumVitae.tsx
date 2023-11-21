import Button from "../Button";

export default function CurriculumVitae() {
    return (
        <div id="CV" className="curriculum-vitae max-w-5xl mx-40 py-20 border-b select-none border-slate-700">
            <h1 className="text-5xl text-center text-white mb-4">Curriculum Vitae</h1>
            <div className="text-center mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti deserunt dolore numquam aspernatur commodi. Consectetur error perferendis itaque ipsa architecto odio eum ipsam libero necessitatibus nobis. Vitae, pariatur dolorem!</div>
            <div className="flex justify-center">
                <embed src="https://nextjs-cv-snowy.vercel.app/" style={{ width: '70vw', height: '100vh' }} />
            </div>
            <div className="text-center text-lg my-4">
                Interested in how I made this? Check out the GitHub project!
            </div>
            <div className="flex justify-center">
                <Button type="main" content="View Repository" onClick={() => window.open('https://github.com/yangxdev/nextjs-cv')} />
            </div>
        </div>
    );
}