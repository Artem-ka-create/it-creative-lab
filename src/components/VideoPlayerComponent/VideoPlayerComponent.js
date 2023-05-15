import React from 'react';
import styles from './VideoPlayer.module.css'

function VideoPlayer(){

   
    return(
        <div className={styles.container}>
            <iframe className={styles.responsiveIframe} src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true} ></iframe>
        </div>
    )

}

export default VideoPlayer;