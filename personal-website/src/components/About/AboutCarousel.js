import { Carousel } from 'react-bootstrap';
import aboutImage from '../../assets/img/about-image.png';
import graduationImage from '../../assets/img/graduation-photo.jpg';
import classes from './AboutCarousel.module.css';

const AboutCarousel = () => {
    return (
    <Carousel fade variant='dark' controls={false} interval={10000}>
        <Carousel.Item>
            <div className={classes.image}>
                <img alt = "firstSlide" src = {aboutImage}/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className={classes.image}>
                <img alt = "secondSlide" src = {graduationImage}/>
            </div>
        </Carousel.Item>
    </Carousel>
    )
}
export default AboutCarousel