function ImageFrame(props){
    return(
        <div style={{backgroundColor : "grey"}}>
            <img src={props.entranceImg[props.num]} width="30%"/>
        </div>
    );
}

export default ImageFrame;