import { Share } from 'react-native';

const ShareScreen = _ => {
    return(
        Share.share({
            message: 'React native'
        })
    )
}

export default ShareScreen;