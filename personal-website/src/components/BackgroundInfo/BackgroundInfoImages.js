import { Carousel } from 'react-bootstrap';
import GraduationPhoto from '../../assets/img/graduation-photo.jpg';
import GraduationPhoto2 from '../../assets/img/graduation-photo2.jpg';
import classes from './BackgroundImages.module.css';

const BackgroundInfoImages = () => {
    return (
    <Carousel variant="dark" fade controls={false} interval={10000}>
        <Carousel.Item>
            <div className={classes.image}>
                <img alt = "firstSlide" src = {GraduationPhoto}/>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className={classes.image}>
                <img alt = "secondSlide" src = {GraduationPhoto2}/>
            </div>
        </Carousel.Item>
    </Carousel>
    )
}
export default BackgroundInfoImages