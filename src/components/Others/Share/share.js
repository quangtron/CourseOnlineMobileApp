import { Share } from 'react-native';

const ShareScreen = (title) => {
    return(
        Share.share({
            message: `https://itedu.me/course-detail/${title}`
        })
    )
}

export default ShareScreen;