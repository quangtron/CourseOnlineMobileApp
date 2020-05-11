const Styles = {
    text: (size, color, fw) => {
        return {
            fontSize: size,
            color: color,
            fontWeight: fw,
        }
    },
    btnLayout: (width, height, color) => {
        return {
            justifyContent: 'center',
            alignItems: 'center',
    
            width: width,
            height: height,
    
            backgroundColor: color,
            borderRadius: 20,
        }
    },
};

export default Styles;