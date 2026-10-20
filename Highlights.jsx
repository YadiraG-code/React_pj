import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Highlights = () => {
    return (
       <section id="highlights">
        <div classNamae="container">
            <div className="row">
                <h2 className="section-title">Why choose 
                <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                <Highlight 
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick" 
                para="Get access to the book you purchased online instantly."
                /> 
                <Highlight 
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Books" 
                para="Libarary has books in all your favourite categories."
                />
                <Highlight 
                icon={<FontAwesomeIcon icon="tags" />}
                title="Affordable" 
                para="Get your hands on popular book for a little as $10."
                /> 
                </div> 
             </div>
         </div>
    </section>
    );
}

export default Highlights;