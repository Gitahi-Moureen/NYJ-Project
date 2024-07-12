import './index.css'
const Podcastpage = () =>{
    return(
        <div>

            <div id= 'podcastlanding'>

            <div id = 'landingtext'>
                <h1>Podcast</h1>
                <h2>Where Stories Find Their Voices </h2>
            </div>

            <div className = 'firstset'>

            <div className = 'content'>
                <div>
                    <img src = '/Images/podcastmic.png' className = 'mic'/>
                </div>
                <div id = 'text'>
                    <h4>Skills Of The Future</h4>
                    <p>Episode 1: Discussion about the skills required for the future success</p>
                    <img src = '/Images/playIcons-removebg-preview.png' className = 'playicons'/>
                </div>
                </div>

                <div className = 'content'>

                <div>
                    <img src = '/Images/podcastmic.png' className = 'mic2'/>
                </div>
                <div id = 'secondtext'>
                    <h4>Skills Of The Future</h4>
                    <p>Episode 2: Discussion about the skills required for the future success</p>
                    <img src = '/Images/playIcons-removebg-preview.png' className = 'playicons'/>
                </div>
                </div>

            
            
            </div>

            <div className = 'secondset'>

<div className = 'content'>
    <div>
        <img src = '/Images/podcastmic.png' className = 'mic'/>
    </div>
    <div id = 'text'>
        <h4>Skills Of The Future</h4>
        <p>Episode 1: Discussion about the skills required for the future success</p>
        <img src = '/Images/playIcons-removebg-preview.png' className = 'playicons'/>
    </div>
    </div>

    <div className = 'content'>

    <div>
        <img src = '/Images/podcastmic.png' className = 'mic2'/>
    </div>
    <div id = 'secondtext'>
        <h4>Skills Of The Future</h4>
        <p>Episode 2: Discussion about the skills required for the future success</p>
        <img src = '/Images/playIcons-removebg-preview.png' className = 'playicons'/>
    </div>
    </div>



</div>
            
            </div>
        </div>

    );
}
export default Podcastpage