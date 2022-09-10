import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';

interface Props {
	id: string,
	videoID: string,
	widthPercentage?: number,
	mobileThumbnail: string
}

const DemoVideo: React.FC<Props> = (props: Props) => {
	const origin = window.location.hostname

	return (
		<div id={props.id} style={{
			maxWidth: `${props.widthPercentage || 100}%`
		}}>
			<BrowserView>
				<div style={{
					overflow: "hidden",
					aspectRatio: "19.5/9",
					pointerEvents: "none",
					borderRadius: "40px",
					transform: "translateZ(0px)",
					boxShadow: "-2px 5px 10px #000000"
				}}>
					<iframe 
					id="ytplayer"
					title="Youtube video"
					src={`https://www.youtube.com/embed/${props.videoID}?autoplay=1&origin=${origin}&controls=0&disablekb=1&fs=0&loop=1&mute=1&playlist=${props.videoID}`}
					allowFullScreen={true}
					allow="autoplay"
					style={{
						width: "300%",
						height: "100%",
						marginLeft: "-100%",
						border: "none"
					}}></iframe>
			
				</div>
			</BrowserView>
			<MobileView>
				<img src={`/media/${props.mobileThumbnail}`} alt="" style={{ width: "100%", borderRadius: 15, boxShadow: "-2px 5px 10px #000000" }} />
			</MobileView>
		</div>
	)
}

export default DemoVideo