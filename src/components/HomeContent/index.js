import HomeFront from './HomeFront';
import Services from './Services';
import Clients from './Clients';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Blogs from './Blogs';

export default function Content(props){
    return(
        <div className="home-content">
            <div className='floater'>ENQUIRE NOW</div>
            <div className='floater'>LINKEDIN</div>
            {props.front && <HomeFront content={props.front}/>}
            {props.services && <Services content={props.services}/>}
            {props.clients && <Clients content={props.clients}/>}
            {props.whyus && <WhyUs content={props.whyus}/>}
            {props.testimonial && <Testimonials content={props.testimonial} reviews={props.reviews}/>}
            {props.contact && <Contact content={props.contact}/>}
            {props.blogs && <Blogs content={props.blogs}/>}
        </div>
    )
}