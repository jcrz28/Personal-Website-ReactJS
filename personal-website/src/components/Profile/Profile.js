import Container from '../../UI/Container';
import classes from './Profile.module.css';
import HeaderPhoto from '../../assets/img/header-photo.jpg';
import ProfilePhoto from '../../assets/img/profile-photo.jpg';
import UHLogo from '../../assets/img/UHLogo.png';
import ProfileIcons from './ProfileIcons';

const Profile = () => {
    return (
        <Container className={classes.card}>
            <div className={classes.id}>
                <div className = {classes.header}>
                    <img alt = "headerBackground" src = {HeaderPhoto}/>
                </div>

                <div className = {classes.profile}>
                    <img alt = "profile" src = {ProfilePhoto}/>
                </div>
        
                <div className ={classes.content}>
                    <h3>John Leonard Cruz</h3>
                    <img alt='University of Houston Logo' src ={UHLogo} />
                    <p><strong>University of Houston</strong></p>
                    <p>B.S in Computer Science</p>
                </div>

                <ProfileIcons />
            </div>
        </Container>
    );
}
export default Profile