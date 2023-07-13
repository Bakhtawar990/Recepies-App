export default function ImproveSkills() {
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    return(
        <div className="section improve-skills">
        <div className="col img">
            <img src="/img/gallery/img_10.jpg" alt=""/>
        </div>
        <div className="col typography">
            <h1 className="title">Improve Your Cooking Skills</h1>
            { list.map((item, index) => (
                <p className="skill-items" key={index}>{item}</p>
            ))}
            <button className="btn">signup now</button>
        </div>
    </div>
    )
}