import "./index.css"
const Blog = () =>{
    return (
        <div>
            <h1 className='heading'>Our Blogs</h1>
            <div class="amazing-travelling">
            <div><img src="/images/book.png" alt="places to visit" class="grand-canyon"/>
                <h1><b>Born a Crime</b></h1>
                <p>It is a long established fact that a reader will be ditraced<br/>
                by the readable content of a page when looking</p>
                <p>$500</p>
                <a href='https://born-a-crime.vercel.app/'className='learn'>Learn more</a>
                </div>
            <div><img src="/images/trevor.png" alt="Bora Bora" class="Bora-Bora"/>
                <h1><b>Bora Bora</b></h1>
                <p>It is a long established fact that a reader will be ditraced<br/>
                by the readable content of a page when looking</p>
                <p>$450</p>
                <a href='https://trevor-humour.vercel.app/' className='learn'>Learn more</a>
            </div>
            <div><img src="/images/trevor.png" alt="Ankor Wat" class="Angkor-Wat"/>
                <h1><b>Angkok Wat</b></h1>
                <p>It is a long established fact that a reader will be ditraced<br/>
                by the readable content of a page when looking</p>
                <p>$200</p>
                <a href='https://trevor-humour.vercel.app/' className='learn'>Learn more</a>
            </div>
        </div>
            {/* <div className="container5">
            <h1 className='heading'>Blogs</h1>
            </div>
            <div className='book-intro'>
            <img src="/images/book.png" alt='born a crime' className='book'/>
            <h3 className='title'>Born A Crime By Trevor Noah</h3>
            </div>
            <p className='blogs'>Our Blogs</p>
            <div className='links'>
                <div>
                <img src="/images/trevor.png" alt='Trevor' className='trevor'/>
                <a href='https://born-a-crime.vercel.app/'className='learn'>Learn more</a>
                </div>
               <div>
               <img src="/images/trevor.png" alt='Trevor' className='trevor'/>
               <a href='https://trevor-humour.vercel.app/' className='learn'>Learn more</a>
               </div>
               <div>
               <img src="/images/trevor.png" alt='Trevor' className='trevor'/>
               <a href='https://trevor-humour.vercel.app/' className='learn'>Learn more</a>
               </div>
            </div> */}
        </div>
    )
}
export default Blog;